"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9797],{686:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"tutorials/computer-controller-mcp","title":"Computer Controller Extension","description":"Use Computer Controller MCP Server as a Goose Extension","source":"@site/docs/tutorials/computer-controller-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/computer-controller-mcp","permalink":"/goose/pr-preview/pr-1588/docs/tutorials/computer-controller-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Computer Controller Extension","description":"Use Computer Controller MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"CI/CD Environments","permalink":"/goose/pr-preview/pr-1588/docs/tutorials/cicd"},"next":{"title":"Developer Extension","permalink":"/goose/pr-preview/pr-1588/docs/tutorials/developer-mcp"}}');var s=o(4848),i=o(8453),r=o(5537),l=o(9329),a=o(5887);const c={title:"Computer Controller Extension",description:"Use Computer Controller MCP Server as a Goose Extension"},d=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3},{value:"Results",id:"results",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{videoUrl:"https://www.youtube.com/embed/EuMzToNOQtw"}),"\n",(0,s.jsx)(n.p,{children:"The Computer Controller extension helps automate everyday computer tasks and web interactions such as searching the web, controlling system settings, processing data files, and controlling applications without needing to know how to code."}),"\n",(0,s.jsx)(n.p,{children:"This tutorial covers enabling and using the Computer Controller MCP Server, which is a built-in Goose extension."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Let Goose complete its tasks without interruption - avoid using your mouse or keyboard until it's done."})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure extension is enabled:"}),"\n"]}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Built-in Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c6  What type of extension would you like to add?\n// highlight-start    \n\u2502  \u25cf Built-in Extension (Use an extension that comes with Goose)\n// highlight-end  \n\u2502  \u25cb Command-line Extension \n\u2502  \u25cb Remote Extension \n\u2514  \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"Computer Controller"})," extension"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n// highlight-start\n\u2502  \u25cf Computer Controller \n// highlight-end\n\u2502  \u25cb Memory \n|  \u25cb JetBrains\n\u2514  Enabled Computer Controller extension\n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  Computer Controller \n\u2502  \n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end  \n\u2514  Enabled Computer Controller extension\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Settings"})]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,s.jsx)(n.code,{children:"Computer Controller"})," to on."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"In this example, I'll show you how Goose can multitask, handling everything from system controls and music playback to web research and data organization."}),"\n",(0,s.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,s.jsx)(n.p,{children:"Anthropic's Claude 3.5 Sonnet was used for this task."})}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a terminal and start a new Goose session:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]})})]}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Goose, I need to decompress while researching AI models for tomorrow\'s meeting. Can you create a relaxing environment and help me research?\n\n1. Play classical music in Safari\n2. Dim screen brightness (2 levels)\n3. Research current flagship AI models (Anthropic, OpenAI, Google):\n    * Verify availability\n    * Collect: release date, features, pricing, context window\n    * Use official sources only\n4. Create "ai-models-comparison.csv" on desktop with collected data\n5. Launch Numbers and open the CSV file\n6. Reset brightness and close Safari\n'})}),"\n",(0,s.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"I'll help you create a relaxing research environment and gather information about AI models. I'll break this down into steps:\n\n1. First, let's set up the relaxing environment with classical music and dimmed screen:\n\n\u2500\u2500\u2500 computer_control | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nscript: ...\n\n\n\n2. Now, let's research the AI models. I'll use web search and scraping to gather\n information from official sources:\n\n\u2500\u2500\u2500 web_search | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nquery: Claude\n\n\n\n\n\u2500\u2500\u2500 web_search | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nquery: GPT4\n\n\n\n\n\u2500\u2500\u2500 web_search | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nquery: Gemini\n\n\n\n3. Let's create the CSV file with the collected information:\n\n\u2500\u2500\u2500 automation_script | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlanguage: shell\nscript: ...\n\n\n\n4. Now, let's open the CSV file in Numbers and reset the environment:\n\n\u2500\u2500\u2500 computer_control | computercontroller \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nscript: ...\n\nI've completed all the requested tasks:\n1. \u2705 Played classical music in Safari\n2. \u2705 Dimmed screen brightness\n3. \u2705 Researched current flagship AI models\n4. \u2705 Created the CSV file on desktop\n5. \u2705 Launched Numbers and opened the CSV file\n6. \u2705 Reset brightness and closed Safari\n\nThe CSV file has been created on your desktop with the following information for each model:\n- Model name\n- Company\n- Release date\n- Key features\n- Context window size\n- Pricing information\n\nThe file is now open in Numbers for your review. The environment has been reset to normal settings. Is there anything specific about any of the models you'd like me to elaborate on?\n"})}),"\n",(0,s.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Computer Controller MCP Output",src:o(8406).A+"",width:"2194",height:"530"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var t=o(2362),s=o(4848);const i=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}},8406:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/computer-controller-csv-result-e70478e8b2736ac21c595dba9e4cee3a.png"}}]);