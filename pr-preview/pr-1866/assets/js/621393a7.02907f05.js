"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9031],{2935:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tutorials/speech-mcp","title":"Speech Extension","description":"Add Speech MCP Server as a Goose Extension","source":"@site/docs/tutorials/speech-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/speech-mcp","permalink":"/goose/pr-preview/pr-1866/docs/tutorials/speech-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Speech Extension","description":"Add Speech MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Puppeteer Extension","permalink":"/goose/pr-preview/pr-1866/docs/tutorials/puppeteer-mcp"},"next":{"title":"Tavily Web Search Extension","permalink":"/goose/pr-preview/pr-1866/docs/tutorials/tavily-mcp"}}');var i=o(4848),t=o(8453),l=o(5537),r=o(9329);o(5887);const a={title:"Speech Extension",description:"Add Speech MCP Server as a Goose Extension"},c=void 0,d={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3},{value:"Goose Speech \ud83c\udf99\ufe0f",id:"goose-speech-\ufe0f",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,i.jsx)(n.a,{href:"https://github.com/Kvadratni/speech-mcp",children:"Speech MCP Server"})," as a Goose extension to enable real-time voice interaction, audio/video transcription, text-to-speech conversion, and multi-speaker audio generation."]}),"\n",(0,i.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"uvx -p 3.10.14 speech-mcp@latest\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requirement"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/scripts/readme-gen/templates/install_portaudio.tmpl.rst#install-portaudio",children:"PortAudio"})," is required for PyAudio to capture audio from your microphone"]})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Note that you'll need ",(0,i.jsx)(n.a,{href:"https://docs.astral.sh/uv/#installation",children:"uv"})," installed on your system to run this command, as it uses ",(0,i.jsx)(n.code,{children:"uvx"}),"."]}),(0,i.jsxs)(n.p,{children:["Before adding this extension, make sure ",(0,i.jsx)(n.a,{href:"https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/scripts/readme-gen/templates/install_portaudio.tmpl.rst#install-portaudio",children:"PortAudio"})," is installed on your system. ",(0,i.jsx)(n.strong,{children:"PortAudio is required"})," for PyAudio to capture audio from your microphone."]})]}),"\n",(0,i.jsxs)(l.A,{groupId:"interface",children:[(0,i.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the ",(0,i.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to add a ",(0,i.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  speech\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  speech\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  uvx -p 3.10.14 speech-mcp@latest\n  // highlight-end\n  \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  speech\n \u2502\n \u25c7  What command should be run?\n \u2502  uvx -p 3.10.14 speech-mcp@latest\n \u2502\n // highlight-start\n \u25c6  Please set the timeout for this tool (in secs):\n \u2502  300\n // highlight-end\n \u2514 \n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Choose No when asked to add environment variables"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  speech\n \u2502\n \u25c7  What command should be run?\n \u2502  uvx -p 3.10.14 speech-mcp@latest\n \u2502\n \u25c7  Please set the timeout for this tool (in secs):\n \u2502  300\n \u2502\n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  No\n \u2502\n // highlight-end\n \u2514  Added speech extension\n"})})]}),(0,i.jsx)(r.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"goose://extension?cmd=uvx&&arg=-p&arg=3.10.14&arg=speech-mcp@latest&id=speech_mcp&name=Speech%20Interface&description=Voice%20interaction%20with%20audio%20visualization%20for%20Goose",children:"Launch the installer"})}),"\n",(0,i.jsxs)(n.li,{children:["Press ",(0,i.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,i.jsxs)(n.li,{children:["Scroll to the top and click ",(0,i.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.p,{children:"In this example, you'll see how to use Goose with the Speech MCP Server Extension to turn voice commands into code. By speaking directly to Goose, you can launch the speech interface, give a spoken prompt, and have Goose generate and open a webpage based on your request."}),"\n",(0,i.jsx)(n.p,{children:"This allows you to build with Goose hands-free, making development more accessible and interactive."}),"\n",(0,i.jsxs)(l.A,{groupId:"interface",children:[(0,i.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open a terminal and start a new Goose session:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,i.jsx)(r.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,i.jsx)(n.p,{children:"Here are some things you can say to activate the speech interface:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u201cGoose, I don\u2019t feel like typing today.\u201d"}),"\n",(0,i.jsx)(n.li,{children:"\u201cLet\u2019s talk using voice.\u201d"}),"\n",(0,i.jsx)(n.li,{children:"\u201cCan we have a voice conversation?\u201d"}),"\n",(0,i.jsx)(n.li,{children:"\u201cI\u2019d like to speak instead of typing.\u201d"}),"\n",(0,i.jsx)(n.li,{children:"\u201cGoose, launch the speech UI.\u201d"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Goose I don't feel like talking today\n"})}),"\n",(0,i.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"I understand! In that case, I can help you use voice commands instead. I'll launch the speech interface so you can speak your requests rather than type them\n\n---- Launch Speech UI ----\n"})}),"\n",(0,i.jsx)(n.h3,{id:"goose-speech-\ufe0f",children:"Goose Speech \ud83c\udf99\ufe0f"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goose:"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"I've launched the speech interface. You can now speak your requests instead of typing. Just speak after you hear my voice and see the microphone activate. What would you like help with?"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Max:"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Goose, lets create a simple page with the word 'vibes' on it and maybe change colors and make it move around the page and then open this page in the browser once you're done"})}),"\n"]}),"\n",(0,i.jsx)("div",{style:{width:"100%",height:0,position:"relative",paddingBottom:"56.25%"},children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/vbD8IHwx-OY",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube video",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>t});o(6540);var s=o(2362),i=o(4848);const t=e=>{let{videoUrl:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Watch the demo"}),(0,i.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,i.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,i.jsx)("hr",{})]})}}}]);