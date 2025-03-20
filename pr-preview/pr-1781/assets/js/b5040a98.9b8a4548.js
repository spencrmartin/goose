"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7066],{326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var s=n(4800),i=n(4848),a=n(8453);const o={title:"Agentic AI and the MCP Ecosystem",description:"A 101 introduction to AI Agents",authors:["angie"]},r=void 0,l={authorsImageUrls:[void 0]},c=[{value:"What are AI Agents?",id:"what-are-ai-agents",level:2},{value:"How AI Agents Work with LLMs",id:"how-ai-agents-work-with-llms",level:2},{value:"Tool Calling",id:"tool-calling",level:3},{value:"MCP Ecosystem",id:"mcp-ecosystem",level:2},{value:"Get Started with AI Agents",id:"get-started-with-ai-agents",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"blog banner",src:n(1034).A+"",width:"1200",height:"630"})}),"\n",(0,i.jsx)(t.p,{children:"It seems like yesterday when we all were wowed by generative AI and specifically the chat interfaces that made interacting with large language models (LLMs) accessible to everyday people."}),"\n",(0,i.jsxs)(t.p,{children:["As amazing as this was, it was only the beginning. The next wave of AI is agentic, meaning AI systems that don't just respond to prompts but take actions, make decisions, and interact with external systems. This is accomplished via ",(0,i.jsx)(t.strong,{children:"AI agents"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"what-are-ai-agents",children:"What are AI Agents?"}),"\n",(0,i.jsx)(t.p,{children:"When you interact with chatbots that use AI, like ChatGPT, you can ask it how to do something, and it'll provide step-by-step instructions."}),"\n",(0,i.jsx)(t.p,{children:"For example, if I ran into an error while coding, I could paste the error message into ChatGPT and ask it to help me debug. Because ChatGPT doesn't have access to my codebase, it would speculate on the cause of my error and give me a couple of possible solutions to try. I'd then manually try these proposed solutions and return to inform ChatGPT of the results. We'd continue this back and forth until the error is resolved or I give up."}),"\n",(0,i.jsx)(t.p,{children:"AI Agents greatly simplify this flow by talking with the LLM on my behalf and taking direct action to fix the problem."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"An AI agent is a system that operates autonomously to accomplish a goal."})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Because AI agents are connected to systems, they can analyze a situation, determine the next action, and execute it without much, if any, human intervention. This capability turns them from passive chatbots into automation assistants."}),"\n",(0,i.jsx)(t.p,{children:"By using an AI agent, I can simply say \"fix the error\" and it'll have context about what's wrong and automatically fix the error for me."}),"\n",(0,i.jsx)(t.h2,{id:"how-ai-agents-work-with-llms",children:"How AI Agents Work with LLMs"}),"\n",(0,i.jsxs)(t.p,{children:["LLMs (e.g. GPT-4o, Claude 3.5 Sonnet, Gemini 2.0, etc) provide cognitive abilities to AI agents. Most AI agents will have a chat interface themselves where you type your prompt, and the agent will send this prompt to an LLM. At the same time, the agent will also inform the LLM of what ",(0,i.jsx)(t.strong,{children:"tools"})," it has access to."]}),"\n",(0,i.jsx)(t.h3,{id:"tool-calling",children:"Tool Calling"}),"\n",(0,i.jsxs)(t.p,{children:["Tools are one of the most important aspects of agentic AI. AI agents are able to execute API calls via ",(0,i.jsx)(t.strong,{children:"tool calling"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Let's look at an example:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A user sends a prompt to their AI agent: ",(0,i.jsx)(t.em,{children:'"Fix the NullPointerException in my UserService.java file."'})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The agent sends the user request and the list of its available tools to the LLM in a structured format."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'User Request: "Fix the NullPointerException in my UserService.java file."\n\nAvailable Tools:\n1. read_file(file_path: str) \u2192 Returns the contents of the specified file.\n2. analyze_code(file_content: str) \u2192 Identifies potential errors and suggests fixes.\n3. edit_file(file_path: str, modifications: dict) \u2192 Applies code changes.\n4. run_tests() \u2192 Executes the test suite and returns results.\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"The LLM analyzes the request and selects the appropriate tools. It determines that it needs to read the file in order to help."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "tool": "read_file",\n    "parameters": { "file_path": "UserService.java" }\n  }\n]\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["The agent executes ",(0,i.jsx)(t.code,{children:"read_file()"})," and sends the code to the LLM."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public class UserService {\n    private Database db;\n\n    public void getUser(String userId) {\n        System.out.println(db.findUserById(userId).getName());\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["The LLM recognizes the issue (",(0,i.jsx)(t.code,{children:"db"})," variable is not initialized) and now selects another tool to fix the issue."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "tool": "edit_file",\n    "parameters": {\n      "file_path": "UserService.java",\n      "modifications": {\n        "line_number": 3,\n        "replacement": "private Database db = new Database();"\n      }\n    }\n  }\n]\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The agent executes ",(0,i.jsx)(t.code,{children:"edit_file()"})," to fix ",(0,i.jsx)(t.code,{children:"UserService.java"})," and informs the LLM."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The LLM determines that it's a good idea to run tests to confirm the change."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "tool": "run_tests",\n    "parameters": {}\n  }\n]\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"8",children:["\n",(0,i.jsxs)(t.li,{children:["The agent executes ",(0,i.jsx)(t.code,{children:"run_tests()"})," and provides the results to the LLM."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "tests_passed": true,\n  "failed_tests": []\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"9",children:["\n",(0,i.jsx)(t.li,{children:"The LLM generates a final message that the agent then presents to the user."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"I\u2019ve fixed the NullPointerException in UserService.java by initializing the db variable. All tests have passed. Let me know if you need further modifications!\n"})}),"\n",(0,i.jsx)(t.p,{children:"Without tool calling, LLMs would only guess answers based on their training data. But by using tools, agents can directly access the data they need to make accurate decisions and take actions."}),"\n",(0,i.jsx)(t.p,{children:"It's worth noting that not all agents are the same when it comes to tool access. Most proprietary agents are tightly scoped to a specific LLM and a predefined set of tools, as companies build agents tailored for their own applications."}),"\n",(0,i.jsxs)(t.p,{children:["Other agents, like Goose, are more extensible, allowing users to configure it with the LLM of their choice, as well as add tools for various APIs, databases, and even ",(0,i.jsx)(t.a,{href:"/docs/tutorials/jetbrains-mcp",children:"local environments like IDEs"}),". However, for agents to scale across different tools and systems without requiring custom integrations for each one, they need a standardized way to discover, call, and manage tools. This is exactly what the ",(0,i.jsx)(t.a,{href:"https://modelcontextprotocol.io/introduction",children:"Model Context Protocol (MCP)"})," provides."]}),"\n",(0,i.jsx)(t.h2,{id:"mcp-ecosystem",children:"MCP Ecosystem"}),"\n",(0,i.jsx)(t.p,{children:"Traditional AI integrations require custom API calls for every system, making scaling difficult. MCP solves this by providing an open, universal protocol for agents to communicate with external systems dynamically."}),"\n",(0,i.jsx)(t.p,{children:"With MCP, an agent like Goose can:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"connect to any API without a developer writing manual integration code"}),"\n",(0,i.jsx)(t.li,{children:"integrate with cloud services, dev tools, databases, and enterprise systems"}),"\n",(0,i.jsx)(t.li,{children:"retrieve and store context to enhance reasoning"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["At the time of this writing, there are more than ",(0,i.jsx)(t.a,{href:"https://www.pulsemcp.com/servers",children:"1000 MCP servers"})," (systems that expose tools) that any MCP-enabled AI agent like Goose can connect to! These MCP servers act as bridges between agents and external systems, enabling access to APIs, databases, and development environments. Some were developed by the official API providers, while the vast majority were developed by community members. Because MCP is an open standard, anyone can build an MCP server for any resource. This greatly increases the possibilities of AI agents!"]}),"\n",(0,i.jsx)(t.p,{children:"For example, let's say I want Goose to develop a new web app for me in my WebStorm IDE based on a Figma design and then commit the code to a new repo in GitHub. I can add the following MCP Servers as Goose extensions to give it all of these capabilities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/tutorials/figma-mcp",children:"Figma"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/tutorials/jetbrains-mcp",children:"JetBrains"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/tutorials/github-mcp",children:"GitHub"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"With this, I can prompt my AI agent in natural language and it'll take care of the work:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'"Based on the figma design with file ID XYZ, build a web app in WebStorm and commit the code to a new GitHub repo named angiejones/myapp"'})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Pretty powerful, right?!"}),"\n",(0,i.jsx)(t.h2,{id:"get-started-with-ai-agents",children:"Get Started with AI Agents"}),"\n",(0,i.jsxs)(t.p,{children:["Hopefully this has provided clear insight into what are AI agents, how they work, and what they can enable for you. ",(0,i.jsx)(t.a,{href:"/docs/getting-started/installation",children:"Goose"})," is free and open source and you can add as many ",(0,i.jsx)(t.a,{href:"/docs/getting-started/using-extensions#adding-extensions",children:"extensions"})," as you desire. This is a great way to get started with AI agents and see how they can automate tasks in your workflow to make you more efficient."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{property:"og:title",content:"Agentic AI and the MCP Ecosystem"}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/02/17/agentic-ai-mcp"}),(0,i.jsx)("meta",{property:"og:description",content:"A 101 introduction to AI Agents"}),(0,i.jsx)("meta",{property:"og:image",content:"https://block.github.io/goose/assets/images/agentic-ai-with-mcp-1e3050cc8d8ae7a620440e871ad9f0d2.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Agentic AI and the MCP Ecosystem"}),(0,i.jsx)("meta",{name:"twitter:description",content:"A 101 introduction to AI Agents"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://block.github.io/goose/assets/images/agentic-ai-with-mcp-1e3050cc8d8ae7a620440e871ad9f0d2.png"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1034:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/agentic-ai-with-mcp-1e3050cc8d8ae7a620440e871ad9f0d2.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}},4800:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1781/blog/2025/02/17/agentic-ai-mcp","source":"@site/blog/2025-02-17-agentic-ai-mcp/index.md","title":"Agentic AI and the MCP Ecosystem","description":"A 101 introduction to AI Agents","date":"2025-02-17T00:00:00.000Z","tags":[],"readingTime":6.065,"hasTruncateMarker":true,"authors":[{"name":"Angie Jones","title":"Head of Developer Relations","url":"https://angiejones.tech","page":{"permalink":"/goose/pr-preview/pr-1781/blog/authors/angie"},"socials":{"linkedin":"https://www.linkedin.com/in/angiejones/","github":"https://github.com/angiejones","x":"https://x.com/techgirl1908"},"imageURL":"https://avatars.githubusercontent.com/u/15972783?v=4","key":"angie"}],"frontMatter":{"title":"Agentic AI and the MCP Ecosystem","description":"A 101 introduction to AI Agents","authors":["angie"]},"unlisted":false,"prevItem":{"title":"Let A Team of AI Agents Do It For You","permalink":"/goose/pr-preview/pr-1781/blog/2025/02/21/gooseteam-mcp"},"nextItem":{"title":"Introducing codename goose","permalink":"/goose/pr-preview/pr-1781/blog/2025/01/28/introducing-codename-goose"}}')}}]);