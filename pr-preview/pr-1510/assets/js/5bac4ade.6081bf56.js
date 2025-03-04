"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8498],{563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"goose-architecture/extensions-design","title":"Extensions Design","description":"This document describes the design and implementation of the Extensions framework in Goose, which enables AI agents to interact with different extensions through a unified tool-based interface.","source":"@site/docs/goose-architecture/extensions-design.md","sourceDirName":"goose-architecture","slug":"/goose-architecture/extensions-design","permalink":"/goose/pr-preview/pr-1510/docs/goose-architecture/extensions-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Goose Architecture","permalink":"/goose/pr-preview/pr-1510/docs/goose-architecture/"},"next":{"title":"Error Handling","permalink":"/goose/pr-preview/pr-1510/docs/goose-architecture/error-handling"}}');var i=t(4848),o=t(8453);const r={sidebar_position:2},l="Extensions Design",a={},c=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Extension",id:"extension",level:3},{value:"Tools",id:"tools",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Component Overview",id:"component-overview",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Tool Design",id:"tool-design",level:3},{value:"Extension Implementation",id:"extension-implementation",level:3},{value:"Example Implementation",id:"example-implementation",level:3},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"extensions-design",children:"Extensions Design"})}),"\n",(0,i.jsxs)(n.p,{children:["This document describes the design and implementation of the ",(0,i.jsx)(n.a,{href:"/docs/getting-started/using-extensions",children:"Extensions framework"})," in Goose, which enables AI agents to interact with different extensions through a unified tool-based interface."]}),"\n",(0,i.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,i.jsx)(n.h3,{id:"extension",children:"Extension"}),"\n",(0,i.jsxs)(n.p,{children:["An Extension represents any component that can be operated by an AI agent. Extensions expose their capabilities through Tools and maintain their own state. The core interface is defined by the ",(0,i.jsx)(n.code,{children:"Extension"})," trait:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[async_trait]\npub trait Extension: Send + Sync {\n    fn name(&self) -> &str;\n    fn description(&self) -> &str;\n    fn instructions(&self) -> &str;\n    fn tools(&self) -> &[Tool];\n    async fn status(&self) -> AnyhowResult<HashMap<String, Value>>;\n    async fn call_tool(&self, tool_name: &str, parameters: HashMap<String, Value>) -> ToolResult<Value>;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,i.jsx)(n.p,{children:"Tools are the primary way Extensions expose functionality to agents. Each tool has:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A name"}),"\n",(0,i.jsx)(n.li,{children:"A description"}),"\n",(0,i.jsx)(n.li,{children:"A set of parameters"}),"\n",(0,i.jsx)(n.li,{children:"An implementation that executes the tool's functionality"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A tool must take a Value and return an ",(0,i.jsx)(n.code,{children:"AgentResult<Value>"})," (it must also be async). This\nis what makes it compatible with the tool calling framework from the agent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"async fn echo(&self, params: Value) -> AgentResult<Value>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.h3,{id:"component-overview",children:"Component Overview"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extension Trait"}),": The core interface that all extensions must implement"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Handling"}),": Specialized error types for tool execution"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proc Macros"}),": Simplify tool definition and registration [",(0,i.jsx)(n.em,{children:"not yet implemented"}),"]"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsx)(n.p,{children:"The system uses two main error types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ToolError"}),": Specific errors related to tool execution"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"anyhow::Error"}),": General purpose errors for extension status and other operations"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This split allows precise error handling for tool execution while maintaining flexibility for general extension operations."}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.h3,{id:"tool-design",children:"Tool Design"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clear Names"}),': Use clear, action-oriented names for tools (e.g., "create_user" not "user")']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Descriptive Parameters"}),": Each parameter should have a clear description"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Handling"}),': Return specific errors when possible, the errors become "prompts"']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"State Management"}),": Be explicit about state modifications"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"extension-implementation",children:"Extension Implementation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"State Encapsulation"}),": Keep extension state private and controlled"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Propagation"}),": Use ",(0,i.jsx)(n.code,{children:"?"})," operator with ",(0,i.jsx)(n.code,{children:"ToolError"})," for tool execution"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Status Clarity"}),": Provide clear, structured status information"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Documentation"}),": Document all tools and their effects"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,i.jsx)(n.p,{children:"Here's a complete example of a simple extension:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'use goose_macros::tool;\n\nstruct FileSystem {\n    registry: ToolRegistry,\n    root_path: PathBuf,\n}\n\nimpl FileSystem {\n    #[tool(\n        name = "read_file",\n        description = "Read contents of a file"\n    )]\n    async fn read_file(&self, path: String) -> ToolResult<Value> {\n        let full_path = self.root_path.join(path);\n        let content = tokio::fs::read_to_string(full_path)\n            .await\n            .map_err(|e| ToolError::ExecutionError(e.to_string()))?;\n            \n        Ok(json!({ "content": content }))\n    }\n}\n\n#[async_trait]\nimpl Extension for FileSystem {\n    // ... implement trait methods ...\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"Extensions should be tested at multiple levels:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Unit tests for individual tools"}),"\n",(0,i.jsx)(n.li,{children:"Integration tests for extension behavior"}),"\n",(0,i.jsx)(n.li,{children:"Property tests for tool invariants"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[tokio::test]\nasync fn test_echo_tool() {\n    let extension = TestExtension::new();\n    let result = extension.call_tool(\n        "echo",\n        hashmap!{ "message" => json!("hello") }\n    ).await;\n    \n    assert_eq!(result.unwrap(), json!({ "response": "hello" }));\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);