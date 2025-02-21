"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7440],{6694:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tutorials/google-drive-mcp","title":"Google Drive Extension","description":"Add Google Drive MCP Server as a Goose Extension","source":"@site/docs/tutorials/google-drive-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/google-drive-mcp","permalink":"/goose/pr-preview/pr-1328/docs/tutorials/google-drive-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Google Drive Extension","description":"Add Google Drive MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Extension","permalink":"/goose/pr-preview/pr-1328/docs/tutorials/github-mcp"},"next":{"title":"JetBrains Extension","permalink":"/goose/pr-preview/pr-1328/docs/tutorials/jetbrains-mcp"}}');var r=o(4848),s=o(8453),t=o(5537),l=o(9329),d=o(5887);const c={title:"Google Drive Extension",description:"Add Google Drive MCP Server as a Goose Extension"},a=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{videoUrl:"https://www.youtube.com/embed/p9HGYbJk9wU"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,r.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive",children:"Google Drive MCP Server"})," as a Goose extension, allowing you to list, read, and search files in Google Drive."]}),"\n",(0,r.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Authentication Command"})}),(0,r.jsx)(n.p,{children:"In your terminal run the following:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"GDRIVE_OAUTH_PATH=/Users/<username>/.config/gcp-oauth.keys.json \\ \nGDRIVE_CREDENTIALS_PATH=/Users/<username>/.config/.gdrive-server-credentials.json \\ \nnpx -y @modelcontextprotocol/server-gdrive auth\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Command"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npx -y @modelcontextprotocol/server-gdrive \n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Variables"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GDRIVE_CREDENTIALS_PATH: ~/.config/.gdrive-server-credentials.json\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GDRIVE_OAUTH_PATH: ~/.config/gcp-oauth.keys.json\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"To obtain your Google Drive server credentials and oauth keys, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set up your Google Cloud Credentials, to enable API access:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create Google Cloud Project","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/projectcreate",children:"Google Cloud Console"})," and create a new project"]}),"\n",(0,r.jsxs)(n.li,{children:["You can leave ",(0,r.jsx)(n.code,{children:"location"})," as ",(0,r.jsx)(n.code,{children:"No organization"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Enable Google Drive API","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In your project, go to the ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/workspace-api/products",children:"API Product Library`"})]}),"\n",(0,r.jsx)(n.li,{children:"Confirm you're in the right project by checking the top left corner"}),"\n",(0,r.jsxs)(n.li,{children:["Search ",(0,r.jsx)(n.code,{children:"Google Drive API"})," and enable it"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure OAuth Consent Screen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/auth/overview/create",children:"OAuth Consent Screen"})]}),"\n",(0,r.jsxs)(n.li,{children:["Enter required information, ",(0,r.jsx)(n.code,{children:"project name"})," , ",(0,r.jsx)(n.code,{children:"user support email"})]}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.code,{children:"Internal"})," for ",(0,r.jsx)(n.code,{children:"Audience"})," and press ",(0,r.jsx)(n.code,{children:"create"})]}),"\n",(0,r.jsxs)(n.li,{children:["If you are unable to choose ",(0,r.jsx)(n.code,{children:"Internal"})," select ",(0,r.jsx)(n.code,{children:"External"})," and follow these additional steps:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/auth/audience",children:"Audience"})," screen"]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.code,{children:"Test users"})," click ",(0,r.jsx)(n.code,{children:"Add Users"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create OAuth Credential"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials/oauthclient",children:"OAuth Clients"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Create Client"})]}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Application Type: Desktop App"})]}),"\n",(0,r.jsx)(n.li,{children:"Download the JSON key file"}),"\n",(0,r.jsxs)(n.li,{children:["Rename it to ",(0,r.jsx)(n.code,{children:"gcp-oauth.keys.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Move it to a secure location where the extension can access it:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mv ~/Downloads/gcp-oauth.keys.json ~/.config/gcp-oauth.keys.json\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect Google Account"}),"\n",(0,r.jsx)(n.p,{children:"To connect your Google account, run the following authentication command in your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"GDRIVE_OAUTH_PATH=/Users/<username>/.config/gcp-oauth.keys.json \\ \nGDRIVE_CREDENTIALS_PATH=/Users/<username>/.config/.gdrive-server-credentials.json \\ \nnpx -y @modelcontextprotocol/server-gdrive auth\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A browser window will open for authentication. Follow the prompts to connect your Google account and complete the OAuth process. At this stage, your environment variable ",(0,r.jsx)(n.code,{children:"GDRIVE_CREDENTIALS_PATH"})," will be set with the saved credentials."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You'll need to re-authenticate once a day when using the Google Drive extension. To re-authenticate, simply re-run the authentication command in your terminal."})}),"\n",(0,r.jsxs)(t.A,{groupId:"interface",children:[(0,r.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Run the ",(0,r.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Choose to add a ",(0,r.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  google drive\n  // highlight-end\n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  google drive\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @modelcontextprotocol/server-gdrive \n  // highlight-end\n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Add your environment variables"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  google drive\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @modelcontextprotocol/server-gdrive \n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  GDRIVE_CREDENTIALS_PATH\n \u2502\n \u25c7  Environment variable value:\n \u2502  ~/.config/.gdrive-server-credentials.json\n \u2502\n \u25c7  Add another environment variable?\n \u2502  yes \n |\n \u25c7  Environment variable name:\n \u2502  GDRIVE_OAUTH_PATH\n \u2502\n \u25c7  Environment variable value:\n \u2502  ~/.config/gcp-oauth.keys.json\n \u2502\n // highlight-end\n \u2514  Added google drive extension\n"})})]}),(0,r.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Settings"})]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.code,{children:"Extensions"}),", click the ",(0,r.jsx)(n.code,{children:"Add"})," link"]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.code,{children:"Add Extension Manually"})," modal, enter the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"Standard IO"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ID"}),": ",(0,r.jsx)(n.code,{children:"g-drive-mcp"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"google drive"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": ",(0,r.jsx)(n.code,{children:"Google Drive MCP Server"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Command"}),": ",(0,r.jsx)(n.code,{children:"npx -y @modelcontextprotocol/server-gdrive"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Environment Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"GDRIVE_CREDENTIALS_PATH"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),": ",(0,r.jsx)(n.code,{children:"~/.config/.gdrive-server-credentials.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add"})," button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Environment Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"GDRIVE_OAUTH_PATH"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),": ",(0,r.jsx)(n.code,{children:"~/.config/gcp-oauth.keys.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add"})," button"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add Extension"})," button"]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.p,{children:"In this example, I\u2019ll use Goose to quickly gather and summarize important information for my upcoming marketing budget review meeting in 30 minutes. I\u2019ll ask Goose to find relevant documents from my Google Drive, summarize Q1 performance, highlight critical decisions on marketing automation and video production, and identify any outstanding action items from our last meeting."}),"\n",(0,r.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"I have an important marketing budget review meeting in 30 minutes and I need your help getting prepared. I have several documents in my Google Drive from our previous meetings and planning sessions. Could you help me by:\n\n1. Finding all relevant documents about our marketing budget and performance\n2. Giving me a quick summary of our Q1 performance\n3. Highlighting the key decisions we need to make about the marketing automation tool and video production\n4. Identifying any outstanding action items from our last meeting\n\nI need a quick but comprehensive overview so I can walk into this meeting well-prepared.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"I'll help you prepare for your meeting. Let me first list available resources from Google Drive to make sure we access the correct files. \n\n[... list resources ...]\n\nGreat! I can see several relevant documents. Let me access them one by one to gather the information you need. \n\n[... reads resources ...]\n\nBased on all these documents, here's your comprehensive overview for the meeting: \n\nQ1 Performance Summary:\n\n  - Overall 5% under budget ($104,200 spent vs $107,000 budgeted)\n  - Digital Marketing performing well with highest ROI:\n      - Email marketing: 3.2 ROI\n      - Google Ads: 2.4 ROI\n      - Content Marketing: 2.1 ROI\n  - Social media engagement up 23% from previous quarter\n  - Content marketing blog posts generating 2x expected leads\n\nKey Decisions Needed:\n\n  1. Marketing Automation Tool (License Renewal Due):\n    - Current tool (BasicAutomation Pro): $12,000/year\n    - Options:\n        - GrowthStack ($15,000/year) - recommended option, balanced features/price\n        - MarketingHub Enterprise ($18,000/year) - premium option with AI features\n        - Decision needed on whether to upgrade or maintain current solution\n    - Implementation would take 6 weeks if changing providers\n\n  2. Video Production Investment:\n    - Three vendor options:\n        - CreativeForce Media ($16,200) - most comprehensive, unlimited revisions\n        - VisualCraft Studios ($14,500) - solid middle option\n        - Digital Narrative Pro ($12,800) - basic package\n    - CreativeForce Media is recommended despite higher cost due to comprehensive deliverables\n    - Timeline ranges from 3-5 weeks depending on vendor choice\n\nOutstanding Action Items from Last Meeting:\n\n  1. Sarah needs to present ROI analysis for video content investment\n  2. John needs to complete software license review\n  3. Lisa to present new PPC strategy\n  4. Mike has completed the video production agency quotes\n\nQ2 Planning Considerations:\n\n  - Proposed 12% budget increase for Q2 ($120,000 total)\n  - Potential reallocation needed based on new tool and video production decisions\n  - PPC strategy review pending\n\nWould you like me to focus on any particular aspect of this overview in more detail?\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>s});o(6540);var i=o(2362),r=o(4848);const s=e=>{let{videoUrl:n}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Watch the demo"}),(0,r.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,r.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,r.jsx)("hr",{})]})}}}]);