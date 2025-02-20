"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[378],{2776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"getting-started/using-extensions","title":"Using Extensions","description":"Extensions are add-ons that provide a way to extend the functionality of Goose by connecting with applications and tools you already use in your workflow. These extensions can be used to add new features, access data and resources, or integrate with other systems.","source":"@site/docs/getting-started/using-extensions.md","sourceDirName":"getting-started","slug":"/getting-started/using-extensions","permalink":"/goose/pr-preview/pr-1320/docs/getting-started/using-extensions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Using Extensions"},"sidebar":"tutorialSidebar","previous":{"title":"Configure LLM Provider","permalink":"/goose/pr-preview/pr-1320/docs/getting-started/providers"},"next":{"title":"Guides","permalink":"/goose/pr-preview/pr-1320/docs/category/guides"}}');var t=s(4848),i=s(8453),r=s(5537),l=s(9329);const a={sidebar_position:3,title:"Using Extensions"},c=void 0,d={},h=[{value:"Built-in Extensions",id:"built-in-extensions",level:2},{value:"Toggling Built-in Extensions",id:"toggling-built-in-extensions",level:4},{value:"Discovering Extensions",id:"discovering-extensions",level:2},{value:"Adding Extensions",id:"adding-extensions",level:2},{value:"MCP Servers",id:"mcp-servers",level:3},{value:"Example of adding the Fetch MCP Server:",id:"example-of-adding-the-fetch-mcp-server",level:4},{value:"Example of adding the Fetch MCP Server:",id:"example-of-adding-the-fetch-mcp-server-1",level:4},{value:"Config Entry",id:"config-entry",level:3},{value:"Enabling/Disabling Extensions",id:"enablingdisabling-extensions",level:2},{value:"Removing Extensions",id:"removing-extensions",level:2},{value:"Starting Session with Extensions",id:"starting-session-with-extensions",level:2},{value:"Built-in Extensions",id:"built-in-extensions-1",level:3},{value:"External Extensions",id:"external-extensions",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Developing Extensions",id:"developing-extensions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Extensions are add-ons that provide a way to extend the functionality of Goose by connecting with applications and tools you already use in your workflow. These extensions can be used to add new features, access data and resources, or integrate with other systems."}),"\n",(0,t.jsxs)(n.p,{children:["Extensions are based on the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol",children:"Model Context Protocol (MCP)"}),", so you can connect\nGoose to a wide ecosystem of capabilities."]}),"\n",(0,t.jsx)(n.h2,{id:"built-in-extensions",children:"Built-in Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Out of the box, Goose is installed with a few extensions but with only the ",(0,t.jsx)(n.code,{children:"Developer"})," extension enabled by default."]}),"\n",(0,t.jsx)(n.p,{children:"Here are the built-in extensions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Developer"}),": provides a set of general development tools that are useful for software development."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Computer Controller"}),": provides general computer control tools for webscraping, file caching, and automations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory"}),": teaches goose to remember your preferences as you use it"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JetBrains"}),": provides an integration for working with JetBrains IDEs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Google Drive"}),": provides an integration for working with Google Drive for file management and access."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"toggling-built-in-extensions",children:"Toggling Built-in Extensions"}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsx)(n.p,{children:"If you know the exact name of the extension you'd like to add, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose mcp {name}\n"})}),(0,t.jsx)(n.p,{children:"To navigate through available extensions:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Add Extension"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the type of extension you\u2019d like to add:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Built-In Extension"}),": Use an extension that comes pre-installed with Goose."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Command-Line Extension"}),": Add a local command or script to run as an extension."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Remote Extension"}),": Connect to a remote system via SSE (Server-Sent Events)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Follow the prompts based on the type of extension you selected."}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example: Adding Built-in Extension"})}),(0,t.jsx)(n.p,{children:"To select an option during configuration, hover over it and press Enter."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n\u2502  \u25cb Computer Controller (controls for webscraping, file caching, and automations)\n\u2502  \u25cb Google Drive \n\u2502  \u25cb Memory \n\u2502  \u25cf JetBrains \n\u2514  \n"})})]}),(0,t.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"..."})," in the top right corner of the Goose Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Settings"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Extensions"}),", you can toggle the built-in extensions on or off."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"All of Goose's built-in extensions are MCP servers in their own right. If you'd like\nto use the MCP servers included with Goose with any other agent, you are free to do so."})}),"\n",(0,t.jsx)(n.h2,{id:"discovering-extensions",children:"Discovering Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Goose provides a ",(0,t.jsx)(n.a,{href:"https://block.github.io/goose/v1/extensions",children:"central directory"})," of extensions that you can install and use."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also add any other ",(0,t.jsx)(n.a,{href:"#mcp-servers",children:"MCP Server"})," as a Goose extension, even if it's not listed in our directory."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-extensions",children:"Adding Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Extensions can be installed directly via the ",(0,t.jsx)(n.a,{href:"https://block.github.io/goose/v1/extensions",children:"extensions directory"}),", CLI, or UI."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For advanced users, you can also edit the ",(0,t.jsx)(n.code,{children:"~/.config/goose/config.yaml"})," file directly to add an extension."]})}),"\n",(0,t.jsx)(n.h3,{id:"mcp-servers",children:"MCP Servers"}),"\n",(0,t.jsx)(n.p,{children:"You can install any MCP server as a Goose extension."}),"\n",(0,t.jsx)(n.admonition,{title:"MCP Server Directory",type:"tip",children:(0,t.jsxs)(n.p,{children:["See available servers in the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#model-context-protocol-servers",children:"MCP Server Directory"})}),"."]})}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"Add Extension"})," from the menu."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Choose the type of extension you\u2019d like to add:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Built-In Extension"}),": Use an extension that comes pre-installed with Goose."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Command-Line Extension"}),": Add a local command or script to run as an extension."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Remote Extension"}),": Connect to a remote system via SSE (Server-Sent Events)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Follow the prompts based on the type of extension you selected."}),"\n"]}),"\n"]}),(0,t.jsxs)(n.h4,{id:"example-of-adding-the-fetch-mcp-server",children:["Example of adding the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",children:"Fetch MCP Server"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  fetch\n\u2502\n\u25c7  What command should be run?\n\u2502  uvx mcp-server-fetch\n\u2502\n\u25c7  Would you like to add environment variables?\n\u2502  No \n\u2502\n\u2514  Added fetch extension\n"})})]}),(0,t.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"..."})," in the top right corner of the Goose Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Settings"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Extensions"}),", click ",(0,t.jsx)(n.code,{children:"Add"})," link."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Add Extension Manually"})," modal, enter the necessary details and click ",(0,t.jsx)(n.code,{children:"Add"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Add Extension"})," button"]}),"\n"]}),(0,t.jsxs)(n.h4,{id:"example-of-adding-the-fetch-mcp-server-1",children:["Example of adding the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",children:"Fetch MCP Server"}),":"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": ",(0,t.jsx)(n.code,{children:"Standard IO"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID"}),": ",(0,t.jsx)(n.code,{children:"fetch"})," (",(0,t.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": ",(0,t.jsx)(n.code,{children:"fetch"})," (",(0,t.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": ",(0,t.jsx)(n.code,{children:"Fetch MCP Server"})," (",(0,t.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Command"}),": ",(0,t.jsx)(n.code,{children:"uvx mcp-server-fetch"})]}),"\n"]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Tutorials",type:"tip",children:(0,t.jsxs)(n.p,{children:["Check out our ",(0,t.jsx)(n.a,{href:"/docs/category/tutorials",children:"tutorials"})," with step-by-step instructions on adding MCP Servers."]})}),"\n",(0,t.jsx)(n.h3,{id:"config-entry",children:"Config Entry"}),"\n",(0,t.jsxs)(n.p,{children:["For advanced users, you can also directly edit the config file (",(0,t.jsx)(n.code,{children:"~/.config/goose/config.yaml"}),") to add, remove, or update an extension:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  fetch:\n    name: GitHub\n    cmd: npx\n    args: [-y @modelcontextprotocol/server-github]\n    enabled: true\n    envs: { "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>" }\n    type: stdio\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enablingdisabling-extensions",children:"Enabling/Disabling Extensions"}),"\n",(0,t.jsx)(n.p,{children:"You can enable or disable installed extensions based on your workflow needs."}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the following command to open up Goose's configurations:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Toggle Extensions"})," from the menu."]}),"\n",(0,t.jsx)(n.li,{children:"A list of already installed extensions will populate."}),"\n",(0,t.jsxs)(n.li,{children:["Press the ",(0,t.jsx)(n.code,{children:"space bar"})," to toggle the extension. Solid means enabled."]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Toggle Extensions \n\u2502\n\u25c6  enable extensions: (use "space" to toggle and "enter" to submit)\n\u2502  \u25fc developer \n\u2502  \u25fb fetch \n\u2514   \n'})})]}),(0,t.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click the three dots in the top-right corner of the application."}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Settings"})," from the menu, then click on the ",(0,t.jsx)(n.code,{children:"Extensions"})," section."]}),"\n",(0,t.jsx)(n.li,{children:"Use the toggle switch next to each extension to enable or disable it."}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Install Extension",src:s(9058).A+"",width:"749",height:"289"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"removing-extensions",children:"Removing Extensions"}),"\n",(0,t.jsx)(n.p,{children:"You can remove installed extensions."}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Config file",default:!0,children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To remove an extension, you must ",(0,t.jsx)(n.a,{href:"#enablingdisabling-extensions",children:"disable"})," it first."]})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the following command to open up Goose's configurations:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Remove"})," from the menu. Disabled extensions will be listed."]}),"\n",(0,t.jsx)(n.li,{children:"Arrow down to the extension you want to remove."}),"\n",(0,t.jsxs)(n.li,{children:["Press the ",(0,t.jsx)(n.code,{children:"space bar"})," to select the extension. Solid means selected."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Remove Extension \n\u2502\n\u25c6  Select extensions to remove (note: you can only remove disabled extensions - use "space" to toggle and "enter" to submit)\n\u2502  \u25fc fetch \n\u2514  \n'})}),(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Press Enter to save"}),"\n"]})]}),(0,t.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"..."})," in the top right corner of the Goose Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Settings"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Extensions"}),", find the extension you'd like to remove and click on the settings icon beside it."]}),"\n",(0,t.jsxs)(n.li,{children:["In the dialog that appears, click ",(0,t.jsx)(n.code,{children:"Remove Extension"}),"."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"starting-session-with-extensions",children:"Starting Session with Extensions"}),"\n",(0,t.jsx)(n.p,{children:"You can start a tailored Goose session with specific extensions directly from the CLI. This will add and enable the extensions, so there's no need to do this if you already have the extensions enabled."}),"\n",(0,t.jsx)(n.h3,{id:"built-in-extensions-1",children:"Built-in Extensions"}),"\n",(0,t.jsx)(n.p,{children:"To enable a built-in extension while starting a session, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-builtin "{extension_id}"\n'})}),"\n",(0,t.jsx)(n.p,{children:"For example, to enable the Developer and Computer Controller extensions and start a session, you'd run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-builtin "developer,computercontroller"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or alternatively:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"goose session --with-builtin developer --with-builtin computercontroller\n"})}),"\n",(0,t.jsx)(n.h3,{id:"external-extensions",children:"External Extensions"}),"\n",(0,t.jsx)(n.p,{children:"To enable an extension while starting a session, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-extension "{extension command}" --with-extension "{antoher extension command}"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For example, to start a session with the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",children:"Fetch extension"}),", you'd run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-extension "uvx mcp-server-fetch"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Some extensions require environment variables. You can include these in your command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-extension "VAR=value command arg1 arg2"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For example, to start a session with the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/github",children:"GitHub extension"}),", you'd run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose session --with-extension "GITHUB_PERSONAL_ACCESS_TOKEN=<YOUR_TOKEN> npx -y @modelcontextprotocol/server-github"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Note that you'll need ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses npx."]})}),"\n",(0,t.jsx)(n.h2,{id:"developing-extensions",children:"Developing Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Goose extensions are implemented with MCP, a standard protocol that allows AI models and agents to securely connect with local or remote resources. Learn how to build your own ",(0,t.jsx)(n.a,{href:"https://modelcontextprotocol.io/quickstart/server",children:"extension as an MCP server"}),"."]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9329:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var o=s(4164);const t={tabItem:"tabItem_Ymn6"};var i=s(4848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,r),hidden:s,children:n})}},5537:(e,n,s)=>{s.d(n,{A:()=>w});var o=s(6540),t=s(4164),i=s(5627),r=s(6347),l=s(372),a=s(604),c=s(1861),d=s(8749);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:o,default:t}}=e;return{value:n,label:s,attributes:o,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=u(e),[r,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:s,groupId:t}),[g,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(s);return[t,(0,o.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),j=(()=>{const e=c??g;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{j&&a(j)}),[j]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function v(e){let{className:n,block:s,selectedValue:o,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),t=l[s].value;t!==o&&(c(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{a.push(e)},onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":o===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},9058:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/manage-extensions-ui-566a099ac6d76775e599085e06f02ba4.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);