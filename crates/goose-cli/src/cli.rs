use anyhow::Result;
use clap::{Args, Parser, Subcommand};

use goose::config::Config;

use crate::commands::agent_version::AgentCommand;
use crate::commands::bench::agent_generator;
use crate::commands::configure::handle_configure;
use crate::commands::info::handle_info;
use crate::commands::mcp::run_server;
use crate::commands::session::handle_session_list;
use crate::logging::setup_logging;
use crate::session;
use crate::session::build_session;
use goose_bench::bench_runner::{BenchRunConfig, BenchRunner};
use std::io::Read;
use std::path::PathBuf;

#[derive(Parser)]
#[command(author, version, display_name = "", about, long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Option<Command>,
}

#[derive(Args)]
#[group(required = false, multiple = false)]
struct Identifier {
    #[arg(
        short,
        long,
        value_name = "NAME",
        help = "Name for the chat session (e.g., 'project-x')",
        long_help = "Specify a name for your chat session. When used with --resume, will resume this specific session if it exists."
    )]
    name: Option<String>,

    #[arg(
        short,
        long,
        value_name = "PATH",
        help = "Path for the chat session (e.g., './playground.jsonl')",
        long_help = "Specify a path for your chat session. When used with --resume, will resume this specific session if it exists."
    )]
    path: Option<PathBuf>,
}

fn extract_identifier(identifier: Identifier) -> session::Identifier {
    if let Some(name) = identifier.name {
        session::Identifier::Name(name)
    } else if let Some(path) = identifier.path {
        session::Identifier::Path(path)
    } else {
        unreachable!()
    }
}

#[derive(Subcommand)]
enum SessionCommand {
    #[command(about = "List all available sessions")]
    List {
        #[arg(short, long, help = "List all available sessions")]
        verbose: bool,

        #[arg(
            short,
            long,
            help = "Output format (text, json)",
            default_value = "text"
        )]
        format: String,
    },
}


#[derive(Subcommand)]
pub enum BenchCommand {
    #[command(name = "config-init", about = "Create a new starter-config")]
    ConfigInit {
        #[arg(short, long, help = "filename with extension for generated config")]
        name: String,
    },

    #[command(about = "Run all benchmarks from a config")]
    Run {
        #[arg(
            short,
            long,
            help = "A config file generated by the config-init command"
        )]
        config: PathBuf,
    },

    #[command(about = "List all available selectors")]
    Selectors {
        #[arg(
            short,
            long,
            help = "A config file generated by the config-init command"
        )]
        config: Option<PathBuf>,
    },

    #[command(name = "eval-model", about = "Run an eval of model")]
    EvalModel {
        #[arg(short, long, help = "A serialized config file for the model only.")]
        config: String,
    },

    #[command(name = "exec-eval", about = "run a single eval")]
    ExecEval {
        #[arg(short, long, help = "A serialized config file for the eval only.")]
        config: String,
    },
}


#[derive(Subcommand)]
enum Command {
    /// Configure Goose settings
    #[command(about = "Configure Goose settings")]
    Configure {},

    /// Display Goose configuration information
    #[command(about = "Display Goose information")]
    Info {
        /// Show verbose information including current configuration
        #[arg(short, long, help = "Show verbose information including config.yaml")]
        verbose: bool,
    },

    /// Manage system prompts and behaviors
    #[command(about = "Run one of the mcp servers bundled with goose")]
    Mcp { name: String },

    /// Start or resume interactive chat sessions
    #[command(
        about = "Start or resume interactive chat sessions",
        visible_alias = "s"
    )]
    Session {
        #[command(subcommand)]
        command: Option<SessionCommand>,
        /// Identifier for the chat session
        #[command(flatten)]
        identifier: Option<Identifier>,

        /// Resume a previous session
        #[arg(
            short,
            long,
            help = "Resume a previous session (last used or specified by --name)",
            long_help = "Continue from a previous chat session. If --name or --path is provided, resumes that specific session. Otherwise resumes the last used session."
        )]
        resume: bool,

        /// Enable debug output mode
        #[arg(
            long,
            help = "Enable debug output mode with full content and no truncation",
            long_help = "When enabled, shows complete tool responses without truncation and full paths."
        )]
        debug: bool,

        /// Add stdio extensions with environment variables and commands
        #[arg(
            long = "with-extension",
            value_name = "COMMAND",
            help = "Add stdio extensions (can be specified multiple times)",
            long_help = "Add stdio extensions from full commands with environment variables. Can be specified multiple times. Format: 'ENV1=val1 ENV2=val2 command args...'",
            action = clap::ArgAction::Append
        )]
        extension: Vec<String>,

        /// Add builtin extensions by name
        #[arg(
            long = "with-builtin",
            value_name = "NAME",
            help = "Add builtin extensions by name (e.g., 'developer' or multiple: 'developer,github')",
            long_help = "Add one or more builtin extensions that are bundled with goose by specifying their names, comma-separated",
            value_delimiter = ','
        )]
        builtin: Vec<String>,
    },

    /// Execute commands from an instruction file
    #[command(about = "Execute commands from an instruction file or stdin")]
    Run {
        /// Path to instruction file containing commands
        #[arg(
            short,
            long,
            value_name = "FILE",
            help = "Path to instruction file containing commands. Use - for stdin.",
            conflicts_with = "input_text"
        )]
        instructions: Option<String>,

        /// Input text containing commands
        #[arg(
            short = 't',
            long = "text",
            value_name = "TEXT",
            help = "Input text to provide to Goose directly",
            long_help = "Input text containing commands for Goose. Use this in lieu of the instructions argument.",
            conflicts_with = "instructions"
        )]
        input_text: Option<String>,

        /// Continue in interactive mode after processing input
        #[arg(
            short = 's',
            long = "interactive",
            help = "Continue in interactive mode after processing initial input"
        )]
        interactive: bool,

        /// Identifier for this run session
        #[command(flatten)]
        identifier: Option<Identifier>,

        /// Resume a previous run
        #[arg(
            short,
            long,
            action = clap::ArgAction::SetTrue,
            help = "Resume from a previous run",
            long_help = "Continue from a previous run, maintaining the execution state and context."
        )]
        resume: bool,

        /// Enable debug output mode
        #[arg(
            long,
            help = "Enable debug output mode with full content and no truncation",
            long_help = "When enabled, shows complete tool responses without truncation and full paths."
        )]
        debug: bool,

        /// Add stdio extensions with environment variables and commands
        #[arg(
            long = "with-extension",
            value_name = "COMMAND",
            help = "Add stdio extensions (can be specified multiple times)",
            long_help = "Add stdio extensions from full commands with environment variables. Can be specified multiple times. Format: 'ENV1=val1 ENV2=val2 command args...'",
            action = clap::ArgAction::Append
        )]
        extension: Vec<String>,

        /// Add builtin extensions by name
        #[arg(
            long = "with-builtin",
            value_name = "NAME",
            help = "Add builtin extensions by name (e.g., 'developer' or multiple: 'developer,github')",
            long_help = "Add one or more builtin extensions that are bundled with goose by specifying their names, comma-separated",
            value_delimiter = ','
        )]
        builtin: Vec<String>,
    },

    /// List available agent versions
    Agents(AgentCommand),

    /// Update the Goose CLI version
    #[command(about = "Update the goose CLI version")]
    Update {
        /// Update to canary version
        #[arg(
            short,
            long,
            help = "Update to canary version",
            long_help = "Update to the latest canary version of the goose CLI, otherwise updates to the latest stable version."
        )]
        canary: bool,

        /// Enforce to re-configure Goose during update
        #[arg(short, long, help = "Enforce to re-configure goose during update")]
        reconfigure: bool,
    },

    Bench {
        #[command(subcommand)]
        cmd: BenchCommand,
    },
}

#[derive(clap::ValueEnum, Clone, Debug)]
enum CliProviderVariant {
    OpenAi,
    Databricks,
    Ollama,
}

pub async fn cli() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Some(Command::Configure {}) => {
            let _ = handle_configure().await;
            return Ok(());
        }
        Some(Command::Info { verbose }) => {
            handle_info(verbose)?;
            return Ok(());
        }
        Some(Command::Mcp { name }) => {
            let _ = run_server(&name).await;
        }
        Some(Command::Session {
                 command,
                 identifier,
                 resume,
                 debug,
                 extension,
                 builtin,
             }) => {
            match command {
                Some(SessionCommand::List { verbose, format }) => {
                    handle_session_list(verbose, format)?;
                    return Ok(());
                }
                None => {
                    // Run session command by default
                    let mut session = build_session(
                        identifier.map(extract_identifier),
                        resume,
                        extension,
                        builtin,
                        debug,
                    )
                        .await;
                    setup_logging(
                        session.session_file().file_stem().and_then(|s| s.to_str()),
                        None,
                    )?;
                    let _ = session.interactive(None).await;
                    return Ok(());
                }
            }
        }
        Some(Command::Run {
                 instructions,
                 input_text,
                 interactive,
                 identifier,
                 resume,
                 debug,
                 extension,
                 builtin,
             }) => {
            let contents = match (instructions, input_text) {
                (Some(file), _) if file == "-" => {
                    let mut stdin = String::new();
                    std::io::stdin()
                        .read_to_string(&mut stdin)
                        .expect("Failed to read from stdin");
                    stdin
                }
                (Some(file), _) => std::fs::read_to_string(&file).unwrap_or_else(|err| {
                    eprintln!(
                        "Instruction file not found — did you mean to use goose run --text?\n{}",
                        err
                    );
                    std::process::exit(1);
                }),
                (None, Some(text)) => text,
                (None, None) => {
                    eprintln!("Error: Must provide either --instructions (-i) or --text (-t). Use -i - for stdin.");
                    std::process::exit(1);
                }
            };

            let mut session = build_session(
                identifier.map(extract_identifier),
                resume,
                extension,
                builtin,
                debug,
            )
                .await;

            setup_logging(
                session.session_file().file_stem().and_then(|s| s.to_str()),
                None,
            )?;

            if interactive {
                session.interactive(Some(contents)).await?;
            } else {
                session.headless(contents).await?;
            }

            return Ok(());
        }
        Some(Command::Agents(cmd)) => {
            cmd.run()?;
            return Ok(());
        }
        Some(Command::Update {
                 canary,
                 reconfigure,
             }) => {
            crate::commands::update::update(canary, reconfigure)?;
            return Ok(());
        }
        Some(Command::Bench { cmd }) => {
            match cmd {
                BenchCommand::Selectors { config } => BenchRunner::list_selectors(config)?,
                BenchCommand::ConfigInit { name } => BenchRunConfig::default().save(name),
                BenchCommand::Run { config } => BenchRunner::new(config)?.run()?,
                BenchCommand::EvalModel { config } => {
                    BenchRunner::from(config)?.run_eval_model()?
                }
                BenchCommand::ExecEval { config } => {
                    BenchRunner::from(config)?.run_eval(agent_generator).await?
                }
            }
            return Ok(());
        }
        None => {
            if !Config::global().exists() {
                let _ = handle_configure().await;
                return Ok(());
            } else {
                // Run session command by default
                let mut session = build_session(None, false, vec![], vec![], false).await;
                setup_logging(
                    session.session_file().file_stem().and_then(|s| s.to_str()),
                    None,
                )?;
                let _ = session.interactive(None).await;
                return Ok(());
            }
        }
    }
    Ok(())
}
