"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7394],{5217:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tutorials/asana-mcp","title":"Asana Extension","description":"Add Asana MCP Server as a Goose Extension","source":"@site/docs/tutorials/asana-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/asana-mcp","permalink":"/goose/pr-preview/pr-2018/docs/tutorials/asana-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Asana Extension","description":"Add Asana MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Building Custom Extensions","permalink":"/goose/pr-preview/pr-2018/docs/tutorials/custom-extensions"},"next":{"title":"CI/CD Environments","permalink":"/goose/pr-preview/pr-2018/docs/tutorials/cicd"}}');var i=s(4848),t=s(8453),a=s(5537),r=s(9329);s(5887);const l={title:"Asana Extension",description:"Add Asana MCP Server as a Goose Extension"},d=void 0,c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,i.jsx)(n.a,{href:"https://github.com/roychri/mcp-server-asana",children:"Asana MCP Server"})," as a Goose extension to enable task automation, project tracking, and team collaboration."]}),"\n",(0,i.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx -y @roychri/mcp-server-asana\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Environment Variable"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ASANA_ACCESS_TOKEN: <YOUR_TOKEN>\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Note that you'll need ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,i.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,i.jsxs)(a.A,{groupId:"interface",children:[(0,i.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the ",(0,i.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to add a ",(0,i.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  Asana\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  Asana\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @roychri/mcp-server-asana\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  Asana\n\u2502\n\u25c7  What command should be run?\n\u2502  npx -y @roychri/mcp-server-asana\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Obtain a ",(0,i.jsx)(n.a,{href:"https://app.asana.com/0/my-apps",children:"Asana Access Token"})," and paste it in."]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://developers.asana.com/docs/personal-access-token",children:"Asana's developer docs"})," if you need detailed instructions on creating an access token."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  Asana\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @roychri/mcp-server-asana\n \u2502     \n \u25c7  Please set the timeout for this tool (in secs):\n \u2502  300\n \u2502    \n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  ASANA_ACCESS_TOKEN\n \u2502\n \u25c7  Environment variable value:\n \u2502  \u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n \u2502\n \u25c7  Add another environment variable?\n \u2502  No \n // highlight-end\n \u2514  Added Asana extension\n"})})]}),(0,i.jsxs)(r.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40roychri%2Fmcp-server-asana&id=asana&name=Asana&description=enable%20task%20automation%2C%20project%20tracking%2C%20and%20team%20collaboration&env=ASANA_ACCESS_TOKEN%3DAsana%20Access%20Token",children:"Launch the installer"})}),"\n",(0,i.jsxs)(n.li,{children:["Press ",(0,i.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,i.jsxs)(n.li,{children:["Obtain a ",(0,i.jsx)(n.a,{href:"https://app.asana.com/0/my-apps",children:"Asana Access Token"})," and paste it in"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://developers.asana.com/docs/personal-access-token",children:"Asana's developer docs"})," if you need detailed instructions on creating an access token."]})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,i.jsxs)(n.li,{children:["Scroll to the top and click ",(0,i.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,i.jsxs)(n.p,{children:["OpenAI's GPT-4o was used for this task. There's an ",(0,i.jsx)(n.a,{href:"https://github.com/block/goose/issues/1804",children:"open bug"})," for Amazon Bedrock models."]})}),"\n",(0,i.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Goose, I have one hour. Look through uncompleted tasks assigned to me in Asana and show me ones that you estimate will take an hour or less. Order them by deadline."})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,i.jsx)(n.p,{children:"Note that IDs have been changed to generic ones"}),"\n",(0,i.jsxs)(n.admonition,{title:"CLI",type:"note",children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Tool Calls"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_search_tasks | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"assignee.any: me"}),(0,i.jsx)(n.p,{children:"completed: false"}),(0,i.jsx)(n.p,{children:"workspace: 1234567890123"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000001"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000002"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000003"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000004"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000005"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000006"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000007"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000008"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000009"}),(0,i.jsx)(n.p,{children:"\u2500\u2500\u2500 asana_get_task | abcdefgh \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),(0,i.jsx)(n.p,{children:"opt_fields: due_on,estimated_hours"}),(0,i.jsx)(n.p,{children:"task_id: 1100000000000010"})]}),(0,i.jsx)(n.p,{children:"Here are your uncompleted tasks in Asana estimated to take an hour or less, ordered by their deadline:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Task:"})," Review team meeting notes"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Due Date:"})," 2025-03-21"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Task:"})," Draft quick status update"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Due Date:"})," 2025-03-21"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Task:"})," Proofread blog post"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Due Date:"})," 2025-03-21"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Task:"})," Send reminder to partners"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Due Date:"})," 2025-03-27"]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"Please let me know if you'd like more information or help with any specific task!"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},5887:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var o=s(2362),i=s(4848);const t=e=>{let{videoUrl:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Watch the demo"}),(0,i.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,i.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,i.jsx)("hr",{})]})}}}]);