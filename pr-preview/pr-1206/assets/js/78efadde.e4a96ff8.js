"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9045],{1630:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"goose-architecture/goose-architecture","title":"Goose Architecture","description":"Goose, an open source AI Agent, builds upon the basic interaction framework of Large Language Models (LLMs), which primarily functions as a text-based conversational interface. It processes text input and generates text output. This \\"text in, text out\\" approach is enhanced with tool integrations, which allows the AI agent to complete tasks, creating Goose.","source":"@site/docs/goose-architecture/goose-architecture.md","sourceDirName":"goose-architecture","slug":"/goose-architecture/","permalink":"/goose/pr-preview/pr-1206/docs/goose-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Goose Architecture","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Architecture Overview","permalink":"/goose/pr-preview/pr-1206/docs/category/architecture-overview"},"next":{"title":"Extensions Design","permalink":"/goose/pr-preview/pr-1206/docs/goose-architecture/extensions-design"}}');var n=o(4848),i=o(8453);const r={title:"Goose Architecture",sidebar_position:1},a="Goose Architecture",c={},l=[{value:"Goose Components",id:"goose-components",level:2},{value:"Interoperability with Extensions",id:"interoperability-with-extensions",level:2},{value:"Interactive Loop",id:"interactive-loop",level:2},{value:"Error Handling in Goose",id:"error-handling-in-goose",level:2},{value:"Context Revision: Token Management",id:"context-revision-token-management",level:2}];function h(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"goose-architecture",children:"Goose Architecture"})}),"\n",(0,n.jsx)(s.p,{children:'Goose, an open source AI Agent, builds upon the basic interaction framework of Large Language Models (LLMs), which primarily functions as a text-based conversational interface. It processes text input and generates text output. This "text in, text out" approach is enhanced with tool integrations, which allows the AI agent to complete tasks, creating Goose.'}),"\n",(0,n.jsx)(s.h2,{id:"goose-components",children:"Goose Components"}),"\n",(0,n.jsxs)(s.p,{children:["Goose operates using three main components, the ",(0,n.jsx)(s.strong,{children:"interface"}),", the ",(0,n.jsx)(s.strong,{children:"agent"}),", and the ",(0,n.jsxs)(s.strong,{children:["connected ",(0,n.jsx)(s.a,{href:"/docs/getting-started/using-extensions",children:"extensions"})]}),"."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Interface"}),": This is the desktop application or CLI that the user is using to run Goose. It collects input from the user and displays outputs to the user"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Agent"}),": The agent runs Goose's core logic, managing the interactive loop."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extensions"}),": Extensions are components that provide specific tools and capabilities for the agent to use. These tools enable Goose to perform actions such as running commands and managing files."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In a typical session, the interface spins up an instance of the agent, which then connects to one or more extensions simultaneously. The interface can also create multiple agents to handle different tasks concurrently. Extensions and the interactive loop are important parts of Goose's functionality. The next sections will explain how Goose connects to extensions and processes user requests."}),"\n",(0,n.jsx)(s.h2,{id:"interoperability-with-extensions",children:"Interoperability with Extensions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://modelcontextprotocol.io/",children:"Model Context Protocol (MCP)"})," is an open standard that allows for interoperability between data sources and AI agents. Goose utilizes MCP to connect to ",(0,n.jsx)(s.a,{href:"https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#model-context-protocol-servers",children:"MCP systems/servers"}),". In Goose, these systems/servers are referred to as extensions."]}),"\n",(0,n.jsx)(s.p,{children:"Extensions expose their functionality to Goose through tools. Tools are the functions that allow extensions to perform specific actions, such as running commands, or performing file operations. For example, the Google Drive extension includes a tool for searching documents. That tool is what gives Goose the ability to perform that action."}),"\n",(0,n.jsxs)(s.p,{children:["Goose comes with a set of ",(0,n.jsx)(s.a,{href:"/docs/getting-started/using-extensions#built-in-extensions",children:"built-in extensions"}),", each designed to enhance your interaction. These include tools for development, web scraping, automation, memory, and integrations with JetBrains and Google Drive. Goose also supports ",(0,n.jsx)(s.a,{href:"/docs/getting-started/using-extensions#adding-extensions",children:"connecting to external extensions"})," or ",(0,n.jsx)(s.a,{href:"/docs/tutorials/custom-extensions",children:"creating custom extensions"})," as MCP servers."]}),"\n",(0,n.jsxs)(s.p,{children:["To learn more about the design and implementation of extensions and tools, refer to the ",(0,n.jsx)(s.a,{href:"/docs/goose-architecture/extensions-design#tools",children:"Extensions Design Guide"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"interactive-loop",children:"Interactive Loop"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"interactive loop",src:o(4526).A+"",width:"2280",height:"1041"})}),"\n",(0,n.jsx)(s.p,{children:"Let's take a closer look at the interactive loop shown above."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Human Request"}),": The process begins and ends with you. Once you give Goose a request, question, command, or problem to solve, the flow begins."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Provider Chat"}),": Goose sends your request along with a list of available tools to the ",(0,n.jsx)(s.a,{href:"/docs/getting-started/providers",children:"LLM provider"})," you've connected. The provider processes it, and if necessary, creates a tool call as part of its response."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Model Extension Call"}),": The LLM is capable of creating a tool call request but not able to execute it, that's when Goose steps in. Goose takes the tool call which is formatted in JSON, runs it, and gathers the results."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Response to Model"}),": After executing the tool call, Goose sends the results back to the model. If more extensions are needed, those steps will repeat."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Context Revision"}),": Goose will remove any old or irrelevant information, ensuring the LLM focuses solely on the information that matters the most. This helps with token management."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Model Response"}),": Once all the tool calls are done, the LLM sends a final response back to you and restarts the loop once you respond."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"error-handling-in-goose",children:"Error Handling in Goose"}),"\n",(0,n.jsx)(s.p,{children:"As opposed to allowing an error to break the flow, Goose captures and handles traditional errors along with execution errors. Errors such as invalid JSON, missing tools, etc. are sent back to the model as tool responses giving the LLM the information it needs to resolve the error and continue."}),"\n",(0,n.jsxs)(s.p,{children:["For more details on how Goose handles errors, refer to the ",(0,n.jsx)(s.a,{href:"/docs/goose-architecture/error-handling",children:"Error Handling in Goose"})," Guide."]}),"\n",(0,n.jsx)(s.h2,{id:"context-revision-token-management",children:"Context Revision: Token Management"}),"\n",(0,n.jsx)(s.p,{children:"While Goose is free and open source, there is typically a cost associated with LLM token usage. Everything competes for token usage including messages, tool requests, resources, file content, instructions, etc. This is where Content Revision comes into play to help reduce some of those costs. There are a few things that are done to assist with this:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Goose summarizes with faster and smaller LLMs"}),"\n",(0,n.jsx)(s.li,{children:"Goose includes everything versus a semantic search"}),"\n",(0,n.jsx)(s.li,{children:"Goose uses algorithms to delete old or irrelevant content"}),"\n",(0,n.jsx)(s.li,{children:"Goose will use find and replace instead of rewriting large files, use ripgrep to skip system files, and summarize verbose command outputs"}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4526:(e,s,o)=>{o.d(s,{A:()=>t});const t=o.p+"assets/images/interactive-loop-55558c45ba877033b3bd355c500150ef.png"},8453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>a});var t=o(6540);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);