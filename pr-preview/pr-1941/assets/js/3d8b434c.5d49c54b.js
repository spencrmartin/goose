"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7588],{4070:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tutorials/vscode-mcp","title":"VS Code Extension","description":"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration","source":"@site/docs/tutorials/vscode-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/vscode-mcp","permalink":"/goose/pr-preview/pr-1941/docs/tutorials/vscode-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VS Code Extension","description":"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial Extension","permalink":"/goose/pr-preview/pr-1941/docs/tutorials/tutorial-extension"},"next":{"title":"Architecture Overview","permalink":"/goose/pr-preview/pr-1941/docs/category/architecture-overview"}}');var s=o(4848),t=o(8453),r=o(5537),l=o(9329),d=o(5887);const a={title:"VS Code Extension",description:"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration"},c=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Result",id:"result",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{videoUrl:"https://www.youtube.com/embed/gddEgvCLrgU"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/block/vscode-mcp",children:"VS Code MCP Server"})," as a Goose extension to enable VS Code integration, file operations, and development workflow management."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx vscode-mcp-server\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Setup"})}),(0,s.jsxs)(n.p,{children:["Install the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=block.vscode-mcp-extension",children:"VS Code MCP Extension"})," from the Visual Studio Marketplace."]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,s.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=block.vscode-mcp-extension",children:"VS Code MCP Extension"})," to your VS Code. No additional settings required in VS Code."]}),"\n"]}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  vscode-mcp\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  vscode-mcp\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx vscode-mcp-server\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Enter the timeout value (default 300s is recommended)"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  vscode-mcp\n\u2502\n\u25c7  What command should be run?\n\u2502  npx vscode-mcp-server install\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"No additional environment variables are required for basic setup"}),"\n"]})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=vscode-mcp-server&id=vscode-mcp&name=VS%20Code%20MCP&description=VS%20Code%20integration%20and%20file%20operations",children:"Launch the installer"})}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"The VS Code MCP extension enables Goose to interact with your VS Code environment, managing files, projects, and development workflows."}),"\n",(0,s.jsx)(n.p,{children:"The key strength of the VS Code MCP Server is its ability to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Show diffs before making changes"}),"\n",(0,s.jsx)(n.li,{children:"Integrate file operations with VS Code's interface"}),"\n",(0,s.jsx)(n.li,{children:"Manage project workspaces"}),"\n",(0,s.jsx)(n.li,{children:"Provide immediate visual feedback in the editor"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Every time you start a Goose session with the VS Code MCP server enabled, it checks to see if a matching project is open in VS Code. If not, it will prompt you to open the project before proceeding."})}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Update the contributing guide with instructions on how to start docusaurus dev server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"session showing goose making updates and VS Code prompting user to accept or reject changes",src:o(2964).A+"",width:"2550",height:"1408"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>t});o(6540);var i=o(2362),s=o(4848);const t=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(i.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}},2964:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/vscode-mcp-5e15828d0c528e5fd84b538ccd28c04a.png"}}]);