"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[5647],{4745:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2025/01/28/introducing-codename-goose","metadata":{"permalink":"/goose/pr-preview/pr-1196/blog/2025/01/28/introducing-codename-goose","source":"@site/blog/2025-01-28-introducing-codename-goose/index.md","title":"Introducing codename goose","description":"codename goose is your open source AI agent, automating engineering tasks and improving productivity.","date":"2025-01-28T00:00:00.000Z","tags":[],"readingTime":2.465,"hasTruncateMarker":true,"authors":[{"name":"Adewale Abati","title":"Staff Developer Advocate","url":"https://adewaleabati.com","page":{"permalink":"/goose/pr-preview/pr-1196/blog/authors/adewale"},"socials":{"x":"https://x.com/ace_kyd","github":"https://github.com/acekyd"},"imageURL":"https://avatars.githubusercontent.com/u/4003538?v=4","key":"adewale"}],"frontMatter":{"title":"Introducing codename goose","description":"codename goose is your open source AI agent, automating engineering tasks and improving productivity.","authors":["adewale"]},"unlisted":false,"nextItem":{"title":"Resolving CI Issues with Goose: A Practical Walkthrough","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough"}},"content":"![Introducing codename goose](introducing-codename-goose.png)\\n\\nWe are thrilled to announce **codename goose**, your on-machine, open source AI agent built to automate your tasks. \\n\\nPowered by your choice of [large language models (LLMs)](/docs/getting-started/providers), a user-friendly desktop interface and CLI, and [extensions](/docs/getting-started/using-extensions) that integrate with your existing tools and applications, Goose is designed to enhance your productivity and workflow.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nYou can think of Goose as an assistant that is ready to take your instructions, and do the work for you.\\n\\nWhile Goose\'s first use cases are engineering focused, the community has been exploring other non-engineering use cases for Goose as well. And it goes without saying, Goose is [open source](https://github.com/block/goose) \ud83c\udf89.\\n\\n\\n## How Goose Works\\n\\nGoose operates as an intelligent, autonomous agent capable of handling complex tasks through a well-orchestrated coordination of its core features:\\n  \\n- **Using Extensions**: [Extensions](/docs/getting-started/using-extensions) are key to Goose\u2019s adaptability, providing you the ability to connect with applications and tools that you already use. Whether it\u2019s connecting to GitHub, accessing Google Drive or integrating with JetBrains IDEs, the possibilities are extensive. Some of these extensions have been curated in the [extensions][extensions-directory] directory. Goose extensions are built on the [Model Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol) - enabling you to build or bring your own custom integrations to Goose. \\n\\n- **LLM Providers**: Goose is compatible with a wide range of [LLM providers](/docs/getting-started/providers), allowing you to choose and integrate your preferred model. \\n\\n- **CLI and Desktop Support**: You can run Goose as a desktop app or through the command-line interface (CLI) using the same configurations across both.\\n\\n## Goose in Action\\n\\nGoose is able to handle a wide range of tasks, from simple to complex, across various engineering domains. Here are some examples of tasks that Goose has helped people with:\\n\\n- Conduct code migrations such as Ember to React, Ruby to Kotlin, Prefect-1 to Prefect-2 etc. \\n- Dive into a new project in an unfamiliar coding language\\n- Transition a code-base from field-based injection to constructor-based injection in a dependency injection framework.\\n- Conduct performance benchmarks for a build command using a build automation tool\\n- Increasing code coverage above a specific threshold\\n- Scaffolding an API for data retention\\n- Creating Datadog monitors\\n- Removing or adding feature flags etc.\\n- Generating unit tests for a feature\\n\\n## Getting Started\\n\\nYou can get started using Goose right away! Check out our [Quickstart](/docs/quickstart).\\n\\n\\n## Join the Goose Community\\n\\nExcited for upcoming features and events? Be sure to connect with us!\\n\\n- [GitHub](https://github.com/block/goose)\\n- [Discord](https://discord.gg/block-opensource)\\n- [YouTube](https://www.youtube.com/@blockopensource)\\n- [LinkedIn](https://www.linkedin.com/company/block-opensource)\\n- [X](https://x.com/blockopensource)\\n- [BlueSky](https://bsky.app/profile/opensource.block.xyz)\\n\\n\\n[extensions-directory]: https://block.github.io/goose/v1/extensions\\n\\n\\n<head>\\n  <meta property=\\"og:title\\" content=\\"Introducing codename goose\\" />\\n  <meta property=\\"og:type\\" content=\\"article\\" />\\n  <meta property=\\"og:url\\" content=\\"https://block.github.io/goose/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough\\" />\\n  <meta property=\\"og:description\\" content=\\"codename goose is your open source AI agent, automating engineering tasks and improving productivity.\\" />\\n  <meta property=\\"og:image\\" content=\\"https://block.github.io/goose/assets/images/introducing-codename-goose-89cac25816e0ea215dd47d4b9768c8ab.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta property=\\"twitter:domain\\" content=\\"block.github.io/goose\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Introducing codename goose\\" />\\n  <meta name=\\"twitter:description\\" content=\\"codename goose is your open source AI agent, automating engineering tasks and improving productivity.\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://block.github.io/goose/assets/images/introducing-codename-goose-89cac25816e0ea215dd47d4b9768c8ab.png\\" />\\n</head>"},{"id":"/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough","metadata":{"permalink":"/goose/pr-preview/pr-1196/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough","source":"@site/blog/2024-12-11-resolving-ci-issues-with-goose-a-practical-walkthrough/index.md","title":"Resolving CI Issues with Goose: A Practical Walkthrough","description":"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.","date":"2024-12-11T00:00:00.000Z","tags":[],"readingTime":3.985,"hasTruncateMarker":true,"authors":[{"name":"Dalton Turner","title":"Software Engineer","page":{"permalink":"/goose/pr-preview/pr-1196/blog/authors/dalton"},"socials":{"github":"https://github.com/dalton-turner"},"imageURL":"https://avatars.githubusercontent.com/u/78099245?v=4","key":"dalton"}],"frontMatter":{"draft":false,"title":"Resolving CI Issues with Goose: A Practical Walkthrough","description":"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.","date":"2024-12-11T00:00:00.000Z","authors":["dalton"]},"unlisted":false,"prevItem":{"title":"Introducing codename goose","permalink":"/goose/pr-preview/pr-1196/blog/2025/01/28/introducing-codename-goose"},"nextItem":{"title":"Connecting AI Agents to Your Systems with MCP","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp"}},"content":"![CI](goose-github-ci.png)\\n\\nRunning into Continuous Integration (CI) failures in pull requests can be quite frustrating but they happen very often. In this post, we leverage the GitHub CLI (`gh`) using Goose to simplify your CI debugging process, fetch detailed information about failed CI runs and annotations directly from GitHub, and even apply fixes directly.\\n\\n\x3c!-- truncate --\x3e\\n\\n:::warning Goose Beta Version\\nThis post was written about a beta version of Goose and the commands and flow may have changed.\\n:::\\n\\n\\n## Getting Started\\n\\nBefore diving in, ensure you have the necessary tools set up.\\n\\n### 1. Install and Authenticate GitHub CLI (`gh`)\\n\\nYou\'ll need the [GitHub CLI](https://cli.github.com/) `gh` to enable Goose\'s access to CI check run details.  \\n\\n```bash\\nbrew install gh\\ngh auth login\\n```\\n\\nFollow the prompts to authenticate your account.\\n\\n\\n### 2. Configure Goose\\nEnsure Goose is configured and ready to interact with your repository and local tools. Specifically, you will need to configure a goose profile with the GitHub toolkit.\\n\\nUpdate your `profiles.yaml` file in `~/.config/goose` with the necessary toolkits:\\n\\n```yaml\\nmy-profile:\\n  provider: anthropic\\n  processor: claude-3-5-sonnet\\n  accelerator: claude-3-5-sonnet\\n  moderator: truncate\\n  toolkits:\\n    - name: developer\\n      requires: {}\\n    - name: github\\n      requires: {}\\n```\\nStart a session with the profile:\\n\\n```bash\\ngoose session start --profile my-profile\\n```\\nIf the profile\u2019s toolkits are not correctly configured, Goose might fail to access `gh` commands.\\n\\n## Resolving CI Failures with Goose\\nOnce everything is set up, we can now use Goose to tackle CI issues with the following steps:\\n\\n### Step 1: Fetch CI Failure Details\\nAsk Goose to retrieve information about the CI failures for a specific PR.\\n\\n**Example Request:**\\n\\n```\\n\\nCan you tell me about the CI failures on PR #11111 in the organization/repo repository? The check run ID is 123456.\\n```\\n\\nYou can access a check run ID by clicking on a PR\u2019s checks tab and selecting a failure. The ID will be available in the URL.\\n\\n**Goose\'s Workflow:**\\n\\nGoose will use the `gh` CLI to check run information and provide a detailed summary of the issues. Goose uses the GitHub CLI to:\\n\\n- Fetch details about failed CI runs, including logs and annotations.\\n- Provide a clear and actionable summary of issues.\\n\\n**Example Command Goose Runs:**\\n\\n```curl\\ngh api -H \\"Accept: application/vnd.github+json\\" /repos/<owner>/<repo>/check-runs/<check-run-id>/annotations\\n```\\n\\n**Example Goose Output:**\\n```mathematica\\nHere are the details for Check Run ID 123456:\\n\\n**Name**: CI-Build-All  \\n**Status**: completed  \\n**Conclusion**: failure  \\n\\n**Annotations Summary:**  \\n1. **ModuleA Test Failure**  \\n   File: `ModuleATests`  \\n   Line: 35  \\n   Error: Mismatched parameter order in function call.  \\n\\n2. **ModuleB Test Failure**  \\n   File: `ModuleBTests`  \\n   Line: 64  \\n   Error: Unexpected nil value encountered during initialization.  \\n\\n3. **ModuleC Test Failure**  \\n   File: `ModuleCTests`  \\n   Line: 98  \\n   Error: Type mismatch in returned value. Expected \'String\', found \'Int\'.  \\n```\\n### Step 2: Request Fixes from Goose\\nOnce Goose provides the failure details, ask it to resolve the issues directly.\\n\\nExample Request:\\n\\n```\\nCan you fix these issues and stage the changes so I can review them? Do not add unnecessary code comments.\\n```\\n\\n**What Goose Does:**\\n\\n- Applies fixes based on error messages.\\n- Stages changes for review.\\n\\n\\n**Example Goose Response:**\\n```markdown\\nI have fixed the following files and staged them:\\n\\n- `ModuleATests`: Corrected the order of parameters in the function call.  \\n- `ModuleBTests`: Resolved the unexpected nil value encountered during initialization.  \\n- `ModuleCTests`: Adjusted the type mismatch in the returned value.  \\n\\nYou can now review the staged changes.\\n```\\n\\n\\n### Step 3: Review the Changes\\nCarefully review the staged changes to ensure they address the issues correctly and avoid unintended modifications.\\n\\n**Things to Check:**\\n\\n- No unnecessary comments (e.g., // Fix xyz).\\n- No alterations to unrelated parts of the code.\\n\\n\\nIf needed, clean up or re-stage the changes before committing.\\n\\n## Benefits of Using Goose\\nUsing Goose to resolve CI issues streamlines your workflow by:\\n\\n- identifying issues and applying fixes with minimal manual effort.\\n- integrating with tools like the GitHub CLI to validate changes.\\n- handling repetitive CI debugging tasks while you focus on code quality.\\n\\nGoose allows you to resolve CI failures efficiently, ensuring confidence in your workflow while reducing the effort required for debugging and testing.\\n\\nTry it out, and let Goose handle the heavy lifting of CI debugging for you!\\n\\n<head>\\n  <meta property=\\"og:title\\" content=\\"Resolving CI Issues with Goose: A Practical Walkthrough\\" />\\n  <meta property=\\"og:type\\" content=\\"article\\" />\\n  <meta property=\\"og:url\\" content=\\"https://block.github.io/goose/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough\\" />\\n  <meta property=\\"og:description\\" content=\\"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.\\" />\\n  <meta property=\\"og:image\\" content=\\"https://block.github.io/goose/assets/images/goose-github-ci-30930008ab57b0aebae15a03c73a12b5.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta property=\\"twitter:domain\\" content=\\"block.github.io/goose\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Resolving CI Issues with Goose: A Practical Walkthrough\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://block.github.io/goose/assets/images/goose-github-ci-30930008ab57b0aebae15a03c73a12b5.png\\" />\\n</head>"},{"id":"/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp","metadata":{"permalink":"/goose/pr-preview/pr-1196/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp","source":"@site/blog/2024-12-10-connecting-ai-agents-to-your-systems-with-mcp/index.md","title":"Connecting AI Agents to Your Systems with MCP","description":"mcp","date":"2024-12-10T00:00:00.000Z","tags":[],"readingTime":3.315,"hasTruncateMarker":true,"authors":[{"name":"Angie Jones","title":"Head of Developer Relations","url":"https://angiejones.tech","page":{"permalink":"/goose/pr-preview/pr-1196/blog/authors/angie"},"socials":{"x":"https://x.com/techgirl1908","github":"https://github.com/techgirl1908"},"imageURL":"https://avatars.githubusercontent.com/u/15972783?v=4","key":"angie"}],"frontMatter":{"draft":false,"title":"Connecting AI Agents to Your Systems with MCP","date":"2024-12-10T00:00:00.000Z","authors":["angie"]},"unlisted":false,"prevItem":{"title":"Resolving CI Issues with Goose: A Practical Walkthrough","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough"},"nextItem":{"title":"Previewing Goose v1.0 Beta","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/06/previewing-goose-v10-beta"}},"content":"![mcp](goose-mcp.png)\\n\\nOpen standards are a critical ingredient for interoperable systems. They have enabled most of the technologies that we all rely on. The ability to connect to the internet no matter where we are relies on open standards such as Wi-Fi, TCP/IP and DNS. When you receive an email in your Gmail account from an Outlook sender, it\'s the use of open standards like SMTP, IMAP, and POP3 that makes this seamless. One of the most transformative technologies of our lifetime - the internet - enables anyone to have their web page accessible to the entire world thanks to the HTTP and HTML standards.\\n\\nWe\'re in the early days of a new era in tech, one where companies are innovating and building practical AI solutions for the masses. To ensure the longevity of this technology, open standards will be essential in guiding the development of AI tools so that the diverse systems built by various companies can work together seamlessly.\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n### The MCP Open Standard\\n\\nAnthropic is leading the charge with the [Model Context Protocol (MCP)](https://modelcontextprotocol.io), an open standard that enables large language model (LLM) applications to connect with external systems, providing the necessary context for more informed and relevant AI interactions. \\n\\nThis is a game changer for AI agents such as [Goose](https://block.github.io/goose/), which can perform tasks autonomously - a significant leap beyond chatbots that only provide step-by-step instructions. However, to unlock the full potential of these AI agents, we need a standard method for connecting them to external data sources. MCP provides this foundation.\\n\\nWith MCP\'s standardized APIs and endpoints, Goose can integrate seamlessly into your systems, enhancing its ability to perform complex tasks like debugging, writing code, and running commands directly in your environment. \\n\\n![Goose Framework](goose-framework-1.0.png)\\n\\n### What\'s Possible\\n\\nWithout MCP, every [Goose toolkit](https://block.github.io/goose/plugins/using-toolkits.html) developer would need to implement bespoke integrations with every system they need to connect to. Not only is this tedious and repetitive, but it delays the fun stuff.\\n\\nLet\'s take a simple GitHub workflow, for example. Goose interacts directly with the GitHub API using custom scripts or configurations. Developers must configure Goose to authenticate with GitHub and specify endpoints for actions like fetching open pull requests or adding comments. Each integration requires manual setup and custom coding to handle authentication tokens, error handling, and API updates.\\n\\nMCP simplifies the process by providing a standardized interface for accessing GitHub as a resource. Goose, acting as an [MCP client](https://modelcontextprotocol.io/clients), requests the necessary information (e.g., list of open pull requests) from an [MCP server](https://modelcontextprotocol.io/quickstart#general-architecture) configured to expose GitHub\'s capabilities. The MCP server handles authentication and communication with GitHub, abstracting away the complexity of API interactions. Goose can then focus on tasks like providing a detailed review comment or suggesting code changes.\\n\\n### Join the Ecosystem\\n\\nAs MCP adoption expands, so does Goose\u2019s potential to deliver even more powerful solutions for your organization. By [integrating Goose](https://block.github.io/goose/) into your workflows and [embracing MCP](https://modelcontextprotocol.io/introduction), you\u2019re not just enhancing your own systems, you\u2019re contributing to the growth of an ecosystem that makes AI tools more interoperable, efficient, and impactful.\\n\\n\\n\\n<head>\\n  <meta charset=\\"UTF-8\\" />\\n  <title>Connecting AI Agents to Your Systems with MCP</title>\\n  <meta name=\\"description\\" content=\\"Goose\\" />\\n  <meta name=\\"keywords\\" content=\\"MCP, Anthropic, AI Open Standards\\" />\\n\\n\\n  \x3c!-- HTML Meta Tags --\x3e\\n  <title>Connecting AI Agents to Your Systems with MCP</title>\\n  <meta name=\\"description\\" content=\\"Learn how MCP standardizes integrations and fosters an ecosystem for the future of AI-enabled tools.\\" />\\n\\n  \x3c!-- Facebook Meta Tags --\x3e\\n  <meta property=\\"og:url\\" content=\\"https://block.github.io/goose/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp\\" />\\n  <meta property=\\"og:type\\" content=\\"website\\" />\\n  <meta property=\\"og:title\\" content=\\"Connecting AI Agents to Your Systems with MCP\\" />\\n  <meta property=\\"og:description\\" content=\\"Learn how MCP standardizes integrations and fosters an ecosystem for the future of AI-enabled tools.\\" />\\n  <meta property=\\"og:image\\" content=\\"https://block.github.io/goose/assets/images/goose-mcp-34a5252d18d18dff26157d673f7af779.png\\" />\\n\\n  \x3c!-- Twitter Meta Tags --\x3e\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta property=\\"twitter:domain\\" content=\\"block.github.io\\" />\\n  <meta property=\\"twitter:url\\" content=\\"https://block.github.io/goose/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Connecting AI Agents to Your Systems with MCP\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Learn how MCP standardizes integrations and fosters an ecosystem for the future of AI-enabled tools.\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://block.github.io/goose/assets/images/goose-mcp-34a5252d18d18dff26157d673f7af779.png\\" />\\n</head>"},{"id":"/2024/12/06/previewing-goose-v10-beta","metadata":{"permalink":"/goose/pr-preview/pr-1196/blog/2024/12/06/previewing-goose-v10-beta","source":"@site/blog/2024-12-06-previewing-goose-v10-beta/index.md","title":"Previewing Goose v1.0 Beta","description":"Goose v1.0 Beta is here! Learn about the latest features and improvements.","date":"2024-12-06T00:00:00.000Z","tags":[],"readingTime":2.075,"hasTruncateMarker":true,"authors":[{"name":"Adewale Abati","title":"Staff Developer Advocate","url":"https://adewaleabati.com","page":{"permalink":"/goose/pr-preview/pr-1196/blog/authors/adewale"},"socials":{"x":"https://x.com/ace_kyd","github":"https://github.com/acekyd"},"imageURL":"https://avatars.githubusercontent.com/u/4003538?v=4","key":"adewale"}],"frontMatter":{"draft":false,"title":"Previewing Goose v1.0 Beta","description":"Goose v1.0 Beta is here! Learn about the latest features and improvements.","date":"2024-12-06T00:00:00.000Z","authors":["adewale"]},"unlisted":false,"prevItem":{"title":"Connecting AI Agents to Your Systems with MCP","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp"},"nextItem":{"title":"Screenshot-Driven Development","permalink":"/goose/pr-preview/pr-1196/blog/2024/11/22/screenshot-driven-development"}},"content":"![Goose v1.0 Beta](goose-v1.0-beta.png)\\nWe are excited to share a preview of the new updates coming to Goose with Goose v1.0 Beta!\\n\\nThis major update comes with a bunch of new features and improvements that make Goose more powerful and user-friendly. Here are some of the key highlights.\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n## Exciting Features of Goose 1.0 Beta\\n\\n### 1. Transition to Rust\\n\\nThe core of Goose has been rewritten in Rust. Why does this matter? Rust allows for a more portable and stable experience. This change means that Goose can run smoothly on different systems without the need for Python to be installed, making it easier for anyone to start using it.\\n\\n### 2. Contextual Memory\\n\\nGoose will remember previous interactions to better understand ongoing projects. This means you won\u2019t have to keep repeating yourself. Imagine having a conversation with someone who remembers every detail\u2014this is the kind of support Goose aims to offer.\\n\\n### 3. Improved Plugin System\\n\\nIn Goose v1.0, the Goose toolkit system is being replaced with Extensions. Extensions are modular daemons that Goose can interact with dynamically. As a result, Goose will be able to support more complex plugins and integrations. This will make it easier to extend Goose with new features and functionality.\\n\\n### 4. Headless mode\\n\\nYou can now run Goose in headless mode - this is useful for running Goose on servers or in environments where a graphical interface is not available.\\n\\n```sh\\ncargo run --bin goose -- run -i instructions.md\\n```\\n\\n### 5. Goose now has a GUI\\n\\nGoose now has an electron-based GUI macOS application that provides and alternative to the CLI to interact with Goose and manage your projects.\\n\\n![Goose GUI](goose-gui.png)\\n\\n### 6. Goose alignment with open protocols\\n\\nGoose v1.0 Beta now uses a custom protocol, that is designed in parallel with [Anthropic\u2019s Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) (MCP) to communicate with Systems. This makes it possible for developers to create their own systems (e.g Jira, ) that Goose can integrate with. \\n\\nExcited for many more feature updates and improvements? Stay tuned for more updates on Goose! Check out the [Goose repo](https://github.com/block/goose) and join our [Discord community](https://discord.gg/block-opensource).\\n\\n\\n<head>\\n  <meta property=\\"og:title\\" content=\\"Previewing Goose v1.0 Beta\\" />\\n  <meta property=\\"og:type\\" content=\\"article\\" />\\n  <meta property=\\"og:url\\" content=\\"https://block.github.io/goose/blog/2024/12/06/previewing-goose-v10-beta\\" />\\n  <meta property=\\"og:description\\" content=\\"AI Agent uses screenshots to assist in styling.\\" />\\n  <meta property=\\"og:image\\" content=\\"https://block.github.io/goose/assets/images/goose-v1.0-beta-5d469fa73edea37cfccfe8a8ca0b47e2.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta property=\\"twitter:domain\\" content=\\"block.github.io/goose\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Screenshot-Driven Development\\" />\\n  <meta name=\\"twitter:description\\" content=\\"AI Agent uses screenshots to assist in styling.\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://block.github.io/goose/assets/images/goose-v1.0-beta-5d469fa73edea37cfccfe8a8ca0b47e2.png\\" />\\n</head>"},{"id":"/2024/11/22/screenshot-driven-development","metadata":{"permalink":"/goose/pr-preview/pr-1196/blog/2024/11/22/screenshot-driven-development","source":"@site/blog/2024-11-22-screenshot-driven-development/index.md","title":"Screenshot-Driven Development","description":"AI Agent uses screenshots to assist in styling.","date":"2024-11-22T00:00:00.000Z","tags":[],"readingTime":4.485,"hasTruncateMarker":true,"authors":[{"name":"Rizel Scarlett","title":"Staff Developer Advocate","page":{"permalink":"/goose/pr-preview/pr-1196/blog/authors/rizel"},"socials":{"x":"https://x.com/blackgirlbytes","github":"https://github.com/blackgirlbytes"},"imageURL":"https://avatars.githubusercontent.com/u/22990146?v=4","key":"rizel"}],"frontMatter":{"draft":false,"title":"Screenshot-Driven Development","description":"AI Agent uses screenshots to assist in styling.","date":"2024-11-22T00:00:00.000Z","authors":["rizel"]},"unlisted":false,"prevItem":{"title":"Previewing Goose v1.0 Beta","permalink":"/goose/pr-preview/pr-1196/blog/2024/12/06/previewing-goose-v10-beta"}},"content":"![calendar](screenshot-driven-development.png)\\n\\nI\'m a developer at heart, so when I\'m working on a personal project, the hardest part isn\'t writing code\u2014it\'s making design decisions. I recently built a calendar user interface. I wanted to enhance its visual appeal, so I researched UI design trends like \\"glassmorphism\\" and \\"claymorphism.\\"\\n\\nHowever, I didn\'t want to spend hours implementing the CSS for each design trend, so I developed a faster approach: screenshot-driven development. I used an open source developer agent called [Goose](https://github.com/block/goose) to transform my user interfaces quickly.\\n\\n\x3c!-- truncate --\x3e\\n\\n:::warning Goose Beta Version\\nThis post was written about a beta version of Goose and the commands and flow may have changed.\\n:::\\n\\n### My original calendar:\\n![calendar](screenshot-calendar-og.png)\\n\\n### Goose prototyped the designs below: \\n![Goose prototypes](goose-prototypes-calendar.png)\\n\\nIn this blog post, I\'ll show you how to quickly prototype design styles by letting Goose handle the CSS for you.\\n>\ud83d\udca1 Note: Your results might look different from my examples - that\'s part of the fun of generative AI! Each run can produce unique variations of these design trends.\\n\\n## Get Started with Screenshot-Driven Development\\n\\n### Step 1: Create your UI\\nLet\'s create a basic UI to experiment with. Create an index.html file with the code below:\\n\\n<details>\\n<summary>Create an index.html file with the code below</summary>\\n\\n```html\\n<!DOCTYPE html>\\n<html>\\n<head>\\n    <style>\\n        body {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n            min-height: 100vh;\\n            margin: 0;\\n            background: linear-gradient(45deg, #6e48aa, #9c27b0);\\n            font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, sans-serif;\\n        }\\n\\n        .calendar {\\n            background: white;\\n            border-radius: 12px;\\n            box-shadow: 0 5px 20px rgba(0,0,0,0.1);\\n            width: 400px;\\n            padding: 20px;\\n        }\\n\\n        .header {\\n            display: flex;\\n            justify-content: space-between;\\n            align-items: center;\\n            padding-bottom: 20px;\\n            border-bottom: 2px solid #f0f0f0;\\n        }\\n\\n        .month {\\n            font-size: 24px;\\n            font-weight: 600;\\n            color: #1a1a1a;\\n        }\\n\\n        .days {\\n            display: grid;\\n            grid-template-columns: repeat(7, 1fr);\\n            gap: 10px;\\n            margin-top: 20px;\\n            text-align: center;\\n        }\\n\\n        .days-header {\\n            display: grid;\\n            grid-template-columns: repeat(7, 1fr);\\n            gap: 10px;\\n            margin-top: 20px;\\n            text-align: center;\\n        }\\n\\n        .days-header span {\\n            color: #666;\\n            font-weight: 500;\\n            font-size: 14px;\\n        }\\n\\n        .day {\\n            aspect-ratio: 1;\\n            display: flex;\\n            align-items: center;\\n            justify-content: center;\\n            border-radius: 50%;\\n            font-size: 14px;\\n            color: #333;\\n            cursor: pointer;\\n            transition: all 0.2s;\\n        }\\n\\n        .day:hover {\\n            background: #f0f0f0;\\n        }\\n\\n        .day.today {\\n            background: #9c27b0;\\n            color: white;\\n        }\\n\\n        .day.inactive {\\n            color: #ccc;\\n        }\\n    </style>\\n</head>\\n<body>\\n    <div class=\\"calendar\\">\\n        <div class=\\"header\\">\\n            <div class=\\"month\\">November 2024</div>\\n        </div>\\n        <div class=\\"days-header\\">\\n            <span>Sun</span>\\n            <span>Mon</span>\\n            <span>Tue</span>\\n            <span>Wed</span>\\n            <span>Thu</span>\\n            <span>Fri</span>\\n            <span>Sat</span>\\n        </div>\\n        <div class=\\"days\\">\\n            <div class=\\"day inactive\\">27</div>\\n            <div class=\\"day inactive\\">28</div>\\n            <div class=\\"day inactive\\">29</div>\\n            <div class=\\"day inactive\\">30</div>\\n            <div class=\\"day inactive\\">31</div>\\n            <div class=\\"day\\">1</div>\\n            <div class=\\"day\\">2</div>\\n            <div class=\\"day\\">3</div>\\n            <div class=\\"day\\">4</div>\\n            <div class=\\"day\\">5</div>\\n            <div class=\\"day\\">6</div>\\n            <div class=\\"day\\">7</div>\\n            <div class=\\"day\\">8</div>\\n            <div class=\\"day\\">9</div>\\n            <div class=\\"day\\">10</div>\\n            <div class=\\"day\\">11</div>\\n            <div class=\\"day\\">12</div>\\n            <div class=\\"day\\">13</div>\\n            <div class=\\"day today\\">14</div>\\n            <div class=\\"day\\">15</div>\\n            <div class=\\"day\\">16</div>\\n            <div class=\\"day\\">17</div>\\n            <div class=\\"day\\">18</div>\\n            <div class=\\"day\\">19</div>\\n            <div class=\\"day\\">20</div>\\n            <div class=\\"day\\">21</div>\\n            <div class=\\"day\\">22</div>\\n            <div class=\\"day\\">23</div>\\n            <div class=\\"day\\">24</div>\\n            <div class=\\"day\\">25</div>\\n            <div class=\\"day\\">26</div>\\n            <div class=\\"day\\">27</div>\\n            <div class=\\"day\\">28</div>\\n            <div class=\\"day\\">29</div>\\n            <div class=\\"day\\">30</div>\\n        </div>\\n    </div>\\n</body>\\n</html>\\n```\\n</details>\\n\\nOnce saved, open the file in your browser. You should see a calendar!\\n\\n### Step 2: Install Goose\\n\\n```bash\\nbrew install pipx\\npipx ensurepath\\npipx install goose-ai\\n```\\n\\n### Step 3: Start a session\\n\\n```bash\\ngoose session start\\n```\\n\\n#### Bring your own LLM\\n\\n>Goose will prompt you to set up your API key when you first run this command. You can use various LLM providers like OpenAI or Anthropic\\n\\n```bash\\nexport OPENAI_API_KEY=your_api_key\\n# Or for other providers:\\nexport ANTHROPIC_API_KEY=your_api_key\\n```\\n\\n### Step 4: Enable the Screen toolkit\\nGoose uses [toolkits](https://block.github.io/goose/plugins/plugins.html) to extend its capabilities. The [screen](https://block.github.io/goose/plugins/available-toolkits.html#6-screen-toolkit) toolkit lets Goose take and analyze screenshots.\\n\\nTo enable the Screen toolkit, add it to your Goose profile at ~/.config/goose/profiles.yaml.\\n\\n> Your configuration might look slightly different depending on your LLM provider preferences.\\n\\n\\n```yaml\\ndefault:\\n  provider: openai\\n  processor: gpt-4o\\n  accelerator: gpt-4o-mini\\n  moderator: truncate\\n  toolkits:\\n  - name: developer\\n    requires: {}\\n  - name: screen\\n    requires: {}\\n```\\n\\n### Step 5: Prompt Goose to screenshot your UI\\nGoose analyzes your UI through screenshots to understand its structure and elements. In your Gooses session, prompt Goose to take a screenshot by specifying which display your UI is on:\\n\\n```bash\\nTake a screenshot of display(1)  \\n```\\n\\n> The display number is required - use display(1) for your main monitor or display(2) for a secondary monitor.\\n\\nUpon success, Goose will run a `screencapture` command and save it as a temporary file.\\n\\n### Step 6: Prompt Goose to transform your UI\\n\\nNow, you can ask Goose to apply different design styles. Here are some of the prompts I gave Goose and the results it produced:\\n\\n#### Glassmorphism\\n\\n```bash\\nApply a glassmorphic effect to my UI\\n```\\n\\n![glassmorphism](glassmorphism-calendar.png)\\n\\n\\n#### Neumorphism\\n\\n```bash\\nApply neumorphic effects to my calendar and the dates\\n```\\n\\n![neumorphism](neumorphism-calendar.png)\\n\\n\\n#### Claymorphism\\n\\n```bash\\nPlease replace with a claymorphic effect\\n```\\n\\n![claymorphism](claymorphism-calendar.png)\\n\\n\\n#### Brutalism\\n\\n```bash\\nApply a brutalist effect please\\n```\\n\\n![brutalism](brutalism-calendar.png)\\n\\n## Learn More\\n\\nDeveloping user interfaces is a blend of creativity and problem-solving. And I love that using Goose gives me more time to focus on creativity rather than wrestling with CSS for hours. \\n\\nBeyond prototyping, Goose\'s ability to analyze screenshots can help developers identify and resolve UI bugs.\\n\\nIf you\'re interested in learning more, check out the [Goose repo](https://github.com/block/goose) and join our [Discord community](https://discord.gg/block-opensource).\\n\\n<head>\\n    <meta property=\\"og:title\\" content=\\"Screenshot-Driven Development\\" />\\n    <meta property=\\"og:type\\" content=\\"article\\" />\\n    <meta property=\\"og:url\\" content=\\"https://block.github.io/goose/blog/2024/11/22/screenshot-driven-development\\" />\\n    <meta property=\\"og:description\\" content=\\"AI Agent uses screenshots to assist in styling.\\" />\\n    <meta property=\\"og:image\\" content=\\"https://block.github.io/goose/assets/images/screenshot-driven-development-4ed1beaa10c6062c0bf87e2d27590ad6.png\\" />\\n    <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n    <meta property=\\"twitter:domain\\" content=\\"block.github.io/goose\\" />\\n    <meta name=\\"twitter:title\\" content=\\"Screenshot-Driven Development\\" />\\n    <meta name=\\"twitter:description\\" content=\\"AI Agent uses screenshots to assist in styling.\\" />\\n    <meta name=\\"twitter:image\\" content=\\"https://block.github.io/goose/assets/images/screenshot-driven-development-4ed1beaa10c6062c0bf87e2d27590ad6.png\\" />\\n</head>"}]}}')}}]);