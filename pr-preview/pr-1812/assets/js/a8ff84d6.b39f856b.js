"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6478],{1557:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var n=o(4187),i=o(4848),s=o(8453);const r={title:"Cracking the Code in VS Code",description:"Connect Goose directly to your code editor with this Visual Studio Code MCP.",authors:["tania"]},a="What is the VSCode MCP?",c={authorsImageUrls:[void 0]},d=[{value:"Intelligent Context Awareness",id:"intelligent-context-awareness",level:2},{value:"Interactive Code Modifications",id:"interactive-code-modifications",level:2},{value:"Progressive Complexity Handling",id:"progressive-complexity-handling",level:2},{value:"Real-time Visual Feedback",id:"real-time-visual-feedback",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"blog cover",src:o(5929).A+"",width:"1206",height:"633"})}),"\n",(0,i.jsxs)(t.p,{children:["Want to use Goose in VS Code? On the recent ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=hG7AnTw-GLU&ab_channel=BlockOpenSource",children:"Wild Goose Case livestream"}),", hosts ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/ebonylouis/",children:"Ebony Louis"})," and ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/acekyd/",children:"Adewale Abati"})," were joined by ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/andrewgertig/",children:"Andrew Gertig"}),", Engineering Lead at Cash App, as he demonstrated the new VSCode MCP and how it brings powerful Goose-assisted coding capabilities directly into VS Code."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/block/vscode-mcp",children:"VSCode MCP Server"}),", and its companion VSCode Extension, together enable AI agents like Goose to interact with VS Code through the Model Context Protocol."]}),"\n",(0,i.jsxs)(t.p,{children:["As Andrew explained during the stream, an MCP (",(0,i.jsx)(t.a,{href:"https://modelcontextprotocol.io/introduction",children:"Model Context Protocol"}),") server acts as a proxy between a Large Language Model (LLM) and whatever applications or tools you want to access to - in this case, VS Code. Extensions are add-ons based on this protocol that provide a way to extend Goose's functionality for your workflow."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"vscode-mcp/\n\u251c\u2500\u2500 server/    # MCP server implementation\n\u2514\u2500\u2500 extension/ # VS Code extension\n"})}),"\n",(0,i.jsx)(t.h1,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsx)(t.p,{children:"VSCode MCP and VSCode Extension offer several powerful features for you to explore:"}),"\n",(0,i.jsx)(t.h2,{id:"intelligent-context-awareness",children:"Intelligent Context Awareness"}),"\n",(0,i.jsx)(t.p,{children:"The extension maintains synchronization between Goose and your VS Code environment to understand your project structure and make contextually relevant suggestions. During the live demo, this came in handy as Goose navigated complex codebases with precision."}),"\n",(0,i.jsx)(t.h2,{id:"interactive-code-modifications",children:"Interactive Code Modifications"}),"\n",(0,i.jsx)(t.p,{children:"Rather than making direct changes, the extension presents modifications through VS Code's diff tool. This ensures that no code changes happen without your explicit approval, allowing you to keep control over your codebase."}),"\n",(0,i.jsx)(t.h2,{id:"progressive-complexity-handling",children:"Progressive Complexity Handling"}),"\n",(0,i.jsx)(t.p,{children:"During the demo, the VSCode MCP seamlessly handled tasks ranging in complexity, from basic text modifications to implementing interactive features like animated emojis with mouse interactions."}),"\n",(0,i.jsx)(t.h2,{id:"real-time-visual-feedback",children:"Real-time Visual Feedback"}),"\n",(0,i.jsx)(t.p,{children:"Developers can see proposed changes in real-time with the diff view, making it easy to understand exactly what modifications Goose is suggesting before accepting them. This was demonstrated when an emoji's sizes visually while preserving existing functionality."}),"\n",(0,i.jsx)(t.h1,{id:"whats-next-for-vscode-mcp",children:"What's Next for VSCode MCP?"}),"\n",(0,i.jsx)(t.p,{children:"The features don't end here. The team is actively exploring several exciting features to take VSCode MCP to the next level:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Custom diff tool for granular control"})," - This means you will be able to be selective on specifici parts of changes you want to accept or reject."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Smart navigation to specific code locations"})," - Imagine being able to ask Goose to take you directly to a function definition or a specific implementation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Enhanced linting integration"})," - To help maintain code quality standards automatically, making it way easier to fix issues before production."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Terminal integration for command execution"})," - This would allow Goose to execute commands and display results right in your development environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Potential VS Code sidebar integration for Goose chat"})," - Andrew showed a quick preview of an early prototype showing Goose running directly inside VS Code."]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"community-and-contributing",children:"Community and Contributing"}),"\n",(0,i.jsxs)(t.p,{children:["The project is open-source, and welcomes contributions from the community. If you'd like to support the project or directly contribute to it, you can check out ",(0,i.jsx)(t.a,{href:"https://github.com/block/vscode-mcp",children:"the VSCode MCP repo on GitHub"}),", or ",(0,i.jsx)(t.a,{href:"https://discord.gg/block-opensource",children:"join the Block Open Source Discord"})," if you'd like to ask the team any questions or start discussions."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also follow the ",(0,i.jsx)(t.a,{href:"https://block.github.io/goose/docs/tutorials/vscode-mcp",children:"tutorial showing you how to integrate VS Code with Goose"}),"."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("meta",{property:"og:title",content:"Cracking the Code in VS Code"}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/03/21/goose-vscode"}),(0,i.jsx)("meta",{property:"og:description",content:"Connect Goose directly to your code editor with this Visual Studio Code MCP."}),(0,i.jsx)("meta",{property:"og:image",content:"http://block.github.io/goose/assets/images/vscodestream.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Cracking the Code in VS Code"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Connect Goose directly to your code editor with this Visual Studio Code MCP."}),(0,i.jsx)("meta",{name:"twitter:image",content:"http://block.github.io/goose/assets/images/vscodestream.png"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5929:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/vscodestream-74eafa34e7ae10cfb738feddecc98519.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},4187:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1812/blog/2025/03/21/goose-vscode","source":"@site/blog/2025-03-21-goose-vscode/index.md","title":"Cracking the Code in VS Code","description":"Connect Goose directly to your code editor with this Visual Studio Code MCP.","date":"2025-03-21T00:00:00.000Z","tags":[],"readingTime":3.07,"hasTruncateMarker":true,"authors":[{"name":"Tania Chakraborty","title":"Senior Technical Community Manager","page":{"permalink":"/goose/pr-preview/pr-1812/blog/authors/tania"},"socials":{"linkedin":"https://www.linkedin.com/in/taniachakraborty/","x":"https://x.com/taniashiba","github":"https://github.com/taniashiba"},"imageURL":"https://avatars.githubusercontent.com/u/126204004?v=4","key":"tania"}],"frontMatter":{"title":"Cracking the Code in VS Code","description":"Connect Goose directly to your code editor with this Visual Studio Code MCP.","authors":["tania"]},"unlisted":false,"prevItem":{"title":"Codename Goose Goes to Boston","permalink":"/goose/pr-preview/pr-1812/blog/2025/03/21/goose-boston-meetup"},"nextItem":{"title":"How I Use Goose to Plan My Week with Asana and Google Calendar MCPs","permalink":"/goose/pr-preview/pr-1812/blog/2025/03/20/asana-calendar-mcp"}}')}}]);