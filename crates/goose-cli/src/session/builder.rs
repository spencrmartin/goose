use console::style;
use goose::agents::extension::ExtensionError;
use goose::agents::AgentFactory;
use goose::config::{Config, ExtensionConfig, ExtensionManager};
use goose::session;
use goose::session::Identifier;
use mcp_client::transport::Error as McpClientError;
use std::process;

use super::output;
use super::Session;

pub async fn build_session(
    identifier: Option<Identifier>,
    resume: bool,
    extensions: Vec<String>,
    builtins: Vec<String>,
    extensions_override: Option<Vec<ExtensionConfig>>,
    additional_system_prompt: Option<String>,
    debug: bool,
) -> Session {
    // Load config and get provider/model
    let config = Config::global();

    let provider_name: String = config
        .get_param("GOOSE_PROVIDER")
        .expect("No provider configured. Run 'goose configure' first");

    let model: String = config
        .get_param("GOOSE_MODEL")
        .expect("No model configured. Run 'goose configure' first");
    let model_config = goose::model::ModelConfig::new(model.clone());
    let provider =
        goose::providers::create(&provider_name, model_config).expect("Failed to create provider");

    // Create the agent
    let mut agent = AgentFactory::create(&AgentFactory::configured_version(), provider)
        .expect("Failed to create agent");

    // Handle session file resolution and resuming
    let session_file = if resume {
        if let Some(identifier) = identifier {
            let session_file = session::get_path(identifier);
            if !session_file.exists() {
                output::render_error(&format!(
                    "Cannot resume session {} - no such session exists",
                    style(session_file.display()).cyan()
                ));
                process::exit(1);
            }

            session_file
        } else {
            // Try to resume most recent session
            match session::get_most_recent_session() {
                Ok(file) => file,
                Err(_) => {
                    output::render_error("Cannot resume - no previous sessions found");
                    process::exit(1);
                }
            }
        }
    } else {
        // Create new session with provided name/path or generated name
        let id = match identifier {
            Some(identifier) => identifier,
            None => Identifier::Name(session::generate_session_id()),
        };

        // Just get the path - file will be created when needed
        session::get_path(id)
    };

    if resume {
        // Read the session metadata
        let metadata = session::read_metadata(&session_file).unwrap_or_else(|e| {
            output::render_error(&format!("Failed to read session metadata: {}", e));
            process::exit(1);
        });

        let current_workdir =
            std::env::current_dir().expect("Failed to get current working directory");
        if current_workdir != metadata.working_dir {
            // Ask user if they want to change the working directory
            let change_workdir = cliclack::confirm(format!("{} The working directory of this session was set to {}. It does not match the current working directory. Would you like to change it?", style("WARNING:").yellow(), style(metadata.working_dir.display()).cyan()))
            .initial_value(true)
            .interact().expect("Failed to get user input");

            if change_workdir {
                std::env::set_current_dir(metadata.working_dir).unwrap();
            }
        }
    }

    // If we get extensions_override, only run those extensions and none other
    let extensions_to_run: Vec<_> = if let Some(extensions) = extensions_override {
        extensions.into_iter().collect()
    } else {
        ExtensionManager::get_all()
            .expect("should load extensions")
            .into_iter()
            .filter(|ext| ext.enabled)
            .map(|ext| ext.config)
            .collect()
    };

    for extension in extensions_to_run {
        if let Err(e) = agent.add_extension(extension.clone()).await {
            let err = match e {
                ExtensionError::Transport(McpClientError::StdioProcessError(inner)) => inner,
                _ => e.to_string(),
            };
            eprintln!("Failed to start extension: {}, {:?}", extension.name(), err);
            eprintln!(
                "Please check extension configuration for {}.",
                extension.name()
            );
            process::exit(1);
        }
    }

    // Create new session
    let mut session = Session::new(agent, session_file.clone(), debug);

    // Add extensions if provided
    for extension_str in extensions {
        if let Err(e) = session.add_extension(extension_str).await {
            eprintln!("Failed to start extension: {}", e);
            process::exit(1);
        }
    }

    // Add builtin extensions
    for builtin in builtins {
        if let Err(e) = session.add_builtin(builtin).await {
            eprintln!("Failed to start builtin extension: {}", e);
            process::exit(1);
        }
    }

    // Add CLI-specific system prompt extension
    session
        .agent
        .extend_system_prompt(super::prompt::get_cli_prompt())
        .await;

    if let Some(additional_prompt) = additional_system_prompt {
        session.agent.extend_system_prompt(additional_prompt).await;
    }

    // Only override system prompt if a system override exists
    let system_prompt_file: Option<String> = config.get_param("GOOSE_SYSTEM_PROMPT_FILE_PATH").ok();
    if let Some(ref path) = system_prompt_file {
        let override_prompt =
            std::fs::read_to_string(path).expect("Failed to read system prompt file");
        session.agent.override_system_prompt(override_prompt).await;
    }

    output::display_session_info(resume, &provider_name, &model, &session_file);
    session
}
