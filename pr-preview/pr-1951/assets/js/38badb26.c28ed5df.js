"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7599],{2457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tutorials/youtube-transcript","title":"YouTube Transcript Extension","description":"Add YouTube Transcript MCP Server as a Goose Extension for accessing YouTube video transcripts","source":"@site/docs/tutorials/youtube-transcript.md","sourceDirName":"tutorials","slug":"/tutorials/youtube-transcript","permalink":"/goose/pr-preview/pr-1951/docs/tutorials/youtube-transcript","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"YouTube Transcript Extension","description":"Add YouTube Transcript MCP Server as a Goose Extension for accessing YouTube video transcripts"},"sidebar":"tutorialSidebar","previous":{"title":"VS Code Extension","permalink":"/goose/pr-preview/pr-1951/docs/tutorials/vscode-mcp"},"next":{"title":"Architecture Overview","permalink":"/goose/pr-preview/pr-1951/docs/category/architecture-overview"}}');var i=t(4848),s=t(8453),r=t(5537),a=t(9329);t(5887);const l={title:"YouTube Transcript Extension",description:"Add YouTube Transcript MCP Server as a Goose Extension for accessing YouTube video transcripts"},c=void 0,d={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,i.jsx)(n.a,{href:"https://github.com/jkawamoto/mcp-youtube-transcript",children:"YouTube Transcript MCP Server"})," as a Goose extension to enable fetching and working with YouTube video transcripts."]}),"\n",(0,i.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx @jkawamoto/mcp-youtube-transcript\n"})}),(0,i.jsx)(n.p,{children:"No environment variables are required for this extension."})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Note that you'll need ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,i.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the ",(0,i.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to add a ",(0,i.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  youtube-transcript\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  youtube-transcript\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx @jkawamoto/mcp-youtube-transcript\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  youtube-transcript\n\u2502\n\u25c7  What command should be run?\n\u2502  npx @jkawamoto/mcp-youtube-transcript\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"No environment variables are required for this extension"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  youtube-transcript\n  \u2502\n  \u25c7  What command should be run?\n  \u2502  npx @jkawamoto/mcp-youtube-transcript\n  \u2502     \n  \u25c7  Please set the timeout for this tool (in secs):\n  \u2502  300\n  \u2502    \n  // highlight-start\n  \u25c6  Would you like to add environment variables?\n  \u2502  No\n  // highlight-end\n  \u2514  Added youtube-transcript extension\n"})})]}),(0,i.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40jkawamoto%2Fmcp-youtube-transcript&id=youtube-transcript&name=YouTube%20Transcript&description=Access%20YouTube%20video%20transcripts",children:"Launch the installer"})}),"\n",(0,i.jsxs)(n.li,{children:["Press ",(0,i.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,i.jsxs)(n.li,{children:["Scroll to the top and click ",(0,i.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.p,{children:"The YouTube Transcript extension allows you to fetch and work with transcripts from YouTube videos. You'll need the video ID from the YouTube URL you want to get the transcript for."}),"\n",(0,i.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Get me the transcript for this YouTube video: https://www.youtube.com/watch?v=dQw4w9WgXcQ\n"})}),"\n",(0,i.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,i.jsxs)(n.admonition,{title:"CLI",type:"note",children:[(0,i.jsx)(n.p,{children:'I\'ll help you get the transcript for that video. The video ID is "dQw4w9WgXcQ". Let me fetch the transcript for you.'}),(0,i.jsx)(n.p,{children:"Here's the transcript:"}),(0,i.jsx)(n.p,{children:"[Transcript content would appear here with timestamps and text]"}),(0,i.jsx)(n.p,{children:'I\'ve retrieved the transcript for Rick Astley\'s "Never Gonna Give You Up" music video. The transcript shows the lyrics of the song, though there are some minor transcription errors due to the automated nature of the system. The transcript includes the iconic chorus and verses of this famous 1987 song, which has become one of the most well-known internet memes, often used for "rickrolling."'}),(0,i.jsx)(n.p,{children:"Would you like me to help you with anything else regarding the video or its transcript?"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5887:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var o=t(2362),i=t(4848);const s=e=>{let{videoUrl:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Watch the demo"}),(0,i.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,i.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,i.jsx)("hr",{})]})}}}]);