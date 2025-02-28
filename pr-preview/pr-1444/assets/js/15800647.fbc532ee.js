"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[884],{3948:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"tutorials/github-mcp","title":"GitHub Extension","description":"Add GitHub MCP Server as a Goose Extension","source":"@site/docs/tutorials/github-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/github-mcp","permalink":"/goose/pr-preview/pr-1444/docs/tutorials/github-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GitHub Extension","description":"Add GitHub MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Figma Extension","permalink":"/goose/pr-preview/pr-1444/docs/tutorials/figma-mcp"},"next":{"title":"Google Drive Extension","permalink":"/goose/pr-preview/pr-1444/docs/tutorials/google-drive-mcp"}}');var s=o(4848),i=o(8453),r=o(5537),l=o(9329),d=o(5887);const a={title:"GitHub Extension",description:"Add GitHub MCP Server as a Goose Extension"},c=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{videoUrl:"https://www.youtube.com/embed/TbmQDv3SQOE"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/github",children:"GitHub MCP Server"})," as a Goose extension to enable file operations, repository management, search functionality, and more."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx -y @modelcontextprotocol/server-github\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment Variable"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GITHUB_PERSONAL_ACCESS_TOKEN: <YOUR_TOKEN>\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,s.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  github\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  github\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @modelcontextprotocol/server-github\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Obtain a ",(0,s.jsx)(n.a,{href:"https://github.com/settings/personal-access-tokens",children:"GitHub Personal Access Token"})," and paste it in."]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"When creating your access token, you can specify the repositories and granular permissions you'd like Goose to have access to."})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  github\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @modelcontextprotocol/server-github\n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  GITHUB_PERSONAL_ACCESS_TOKEN\n \u2502\n \u25c7  Environment variable value:\n \u2502  \u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n \u2502\n \u25c7  Add another environment variable?\n \u2502  No \n // highlight-end\n \u2514  Added github extension\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Settings"})]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.code,{children:"Extensions"}),", click the ",(0,s.jsx)(n.code,{children:"Add"})," link"]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.code,{children:"Add Extension Manually"})," modal, enter the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"Standard IO"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ID"}),": ",(0,s.jsx)(n.code,{children:"gh-mcp"})," (",(0,s.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": ",(0,s.jsx)(n.code,{children:"github"})," (",(0,s.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": ",(0,s.jsx)(n.code,{children:"GitHub MCP Server"})," (",(0,s.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Command"}),": ",(0,s.jsx)(n.code,{children:"npx -y @modelcontextprotocol/server-github"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Environment Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": ",(0,s.jsx)(n.code,{children:"GITHUB_PERSONAL_ACCESS_TOKEN"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Value"}),": (",(0,s.jsxs)(n.em,{children:["Obtain a ",(0,s.jsx)(n.a,{href:"https://github.com/settings/personal-access-tokens",children:"GitHub Personal Access Token"})," and paste it in."]}),")","\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"When creating your access token, you can specify the repositories and granular permissions you'd like Goose to have access to."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Add"})," button"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Add Extension"})," button"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(n.p,{children:["When creating my ",(0,s.jsx)(n.a,{href:"https://github.com/settings/personal-access-tokens",children:"GitHub Personal Access Token"}),", I gave it the following access:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Repository: ",(0,s.jsx)(n.a,{href:"https://github.com/angiejones/goose-demo",children:"goose-demo"})]}),"\n",(0,s.jsx)(n.li,{children:"Read access to metadata"}),"\n",(0,s.jsx)(n.li,{children:"Read and Write access to code, commit status, issues, and pull requests"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'create a new branch called hello-world in my angiejones/goose-demo repository. Update the README.md file to say "this was written by goose" and commit it. Open a pull request with your changes.\n'})}),"\n",(0,s.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'I\'ll help you create a new branch, update the README, and open a pull request. Let me break this down into steps:\n\n1. First, let\'s create the new branch called "hello-world" in your repository\n2. Then update the README.md file\n3. Finally, create a pull request\n\nLet me execute these steps:\n\n1. Creating the new branch:\n\n\u2500\u2500\u2500 create_branch | github \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nbranch: hello-world\nowner: angiejones\nrepo: goose-demo\n\n2. Now, updating the README.md file in the new branch:\n\n\u2500\u2500\u2500 create_or_update_file | github \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nbranch: hello-world\ncontent: this was written by goose\nmessage: Update README.md with Goose message\nowner: angiejones\npath: README.md\nrepo: goose-demo\n\n\n\n3. Finally, creating the pull request:\n\n\u2500\u2500\u2500 create_pull_request | github \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nbase: main\nbody: ...\nhead: hello-world\nowner: angiejones\nrepo: goose-demo\ntitle: Update README.md\n\n\n\nGreat! I\'ve completed all the requested tasks:\n1. Created a new branch called "hello-world"\n2. Updated the README.md file with the text "this was written by goose"\n3. Created a pull request to merge these changes into the main branch\n\nYou can view the pull request at: https://github.com/angiejones/goose-demo/pull/1\n\nThe pull request is now ready for your review. Would you like me to do anything else with it?\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var t=o(2362),s=o(4848);const i=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}}}]);