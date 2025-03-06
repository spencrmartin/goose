"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7924],{4575:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>p,contentTitle:()=>u,default:()=>j,frontMatter:()=>h,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"getting-started/installation","title":"Install Goose","description":"Choose to install Goose on CLI and/or Desktop:","source":"@site/docs/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/goose/pr-preview/pr-1546/docs/getting-started/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/goose/pr-preview/pr-1546/docs/category/getting-started"},"next":{"title":"Configure LLM Provider","permalink":"/goose/pr-preview/pr-1546/docs/getting-started/providers"}}');var i=o(4848),r=o(8453),t=o(5537),l=o(9329),a=o(5561),d=o(8127),c=o(9773);const h={sidebar_position:1},u="Install Goose",p={},g=[{value:"Set LLM Provider",id:"set-llm-provider",level:2},{value:"Update Provider",id:"update-provider",level:2},{value:"Running Goose",id:"running-goose",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"install-goose",children:"Install Goose"})}),"\n",(0,i.jsx)(a.A,{}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsxs)(l.A,{value:"mac",label:"macOS",default:!0,children:[(0,i.jsx)(s.p,{children:"Choose to install Goose on CLI and/or Desktop:"}),(0,i.jsxs)(t.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(s.p,{children:"Run the following command to install the latest version of Goose on macOS:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash\n"})}),(0,i.jsx)(s.p,{children:"This script will fetch the latest version of Goose and set it up on your system."}),(0,i.jsxs)(s.p,{children:["If you'd like to install without interactive configuration, disable ",(0,i.jsx)(s.code,{children:"CONFIGURE"}),":"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | CONFIGURE=false bash\n"})}),(0,i.jsxs)(s.admonition,{title:"Updating Goose",type:"tip",children:[(0,i.jsx)(s.p,{children:"It's best to keep Goose updated. To update Goose, run:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"goose update\n"})})]})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsxs)(s.p,{children:["Install Goose directly from the browser or with ",(0,i.jsx)(s.a,{href:"https://brew.sh/",children:"Homebrew"}),"."]}),(0,i.jsx)("h3",{style:{marginTop:"1rem"},children:"Option 1: Install via Download"}),(0,i.jsx)(c.A,{}),(0,i.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Unzip the downloaded zip file."}),"\n",(0,i.jsx)(s.li,{children:"Run the executable file to launch the Goose desktop application."}),"\n"]}),(0,i.jsx)(s.admonition,{title:"Updating Goose",type:"tip",children:(0,i.jsx)(s.p,{children:"It's best to keep Goose updated. To update, reperform installation steps."})})]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("h3",{children:"Option 2: Install via Homebrew"}),"\nHomebrew downloads the ",(0,i.jsx)(s.a,{href:"https://github.com/Homebrew/homebrew-cask/blob/master/Casks/b/block-goose.rb",children:"same app"})," but can take care of updates too."]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"  brew install --cask block-goose\n"})}),(0,i.jsx)(s.hr,{}),(0,i.jsx)("div",{style:{marginTop:"1rem"},children:(0,i.jsxs)(s.admonition,{title:"Permissions",type:"note",children:[(0,i.jsx)(s.p,{children:"If you\u2019re on an Apple Mac M3 and the Goose desktop app shows no window on launch, check and update the following:"}),(0,i.jsxs)(s.p,{children:["Ensure the ",(0,i.jsx)(s.code,{children:"~/.config"})," directory has read and write access."]}),(0,i.jsxs)(s.p,{children:["Goose needs this access to create the log directory and file. Once permissions are granted, the app should load correctly. For steps on how to do this, refer to the  ",(0,i.jsx)(s.a,{href:"/goose/pr-preview/pr-1546/docs/troubleshooting#macos-permission-issues-m3-macs",children:"Troubleshooting Guide"})]})]})})]})]})]}),(0,i.jsxs)(l.A,{value:"linux",label:"Linux",default:!0,children:[(0,i.jsx)(s.p,{children:"Run the following command to install the Goose CLI on Linux:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash\n"})}),(0,i.jsx)(s.p,{children:"This script will fetch the latest version of Goose and set it up on your system."}),(0,i.jsxs)(s.p,{children:["If you'd like to install without interactive configuration, disable ",(0,i.jsx)(s.code,{children:"CONFIGURE"}),":"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | CONFIGURE=false bash\n"})})]}),(0,i.jsxs)(l.A,{value:"windows",label:"Windows",children:[(0,i.jsx)(s.p,{children:"There isn't native installation support for Windows, however you can run Goose using WSL (Windows Subsystem for Linux)."}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Open ",(0,i.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows",children:"PowerShell"})," as Administrator and install WSL and the default Ubuntu distribution:"]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"wsl --install\n"})}),(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Restart your computer if prompted."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Run the Goose installation script:"}),"\n"]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash\n"})}),(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsxs)(s.p,{children:["If you encounter any issues on download, you might need to install ",(0,i.jsx)(s.code,{children:"bzip2"})," to extract the downloaded file:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo apt update && sudo apt install bzip2 -y\n"})})]}),(0,i.jsxs)(s.p,{children:["If you'd like to install without interactive configuration, disable ",(0,i.jsx)(s.code,{children:"CONFIGURE"}),":"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | CONFIGURE=false bash\n"})})]})]}),"\n",(0,i.jsx)(s.h2,{id:"set-llm-provider",children:"Set LLM Provider"}),"\n",(0,i.jsxs)(s.p,{children:["Goose works with a set of ",(0,i.jsx)(s.a,{href:"/docs/getting-started/providers",children:"supported LLM providers"}),", and you\u2019ll need an API key to get started. When you use Goose for the first time, you\u2019ll be prompted to select a provider and enter your API key."]}),"\n",(0,i.jsxs)(t.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(s.p,{children:"Upon installing, Goose will automatically enter its configuration screen. Here is where you can set up your LLM provider."}),(0,i.jsx)(s.admonition,{title:"Windows Users",type:"tip",children:(0,i.jsx)(s.p,{children:"Choose to not store to keyring when prompted."})}),(0,i.jsx)(s.p,{children:"Example:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 OpenAI\n\u2502\n\u25c7 Provider openai requires OPENAI_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502\n\u25c7 Enter a model from that provider:\n\u2502 gpt-4o\n\u2502\n\u25c7  Welcome aboard! You're all set to start using this agent\u2014let's achieve great things together!\n\u2502\n\u2514  Configuration saved successfully\n"})}),(0,i.jsxs)(s.admonition,{title:"Windows Users",type:"info",children:[(0,i.jsx)(s.p,{children:"On initial run, you may encounter errors about keyrings when setting your API Keys. Set the needed environment variables manually, e.g.:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"export OPENAI_API_KEY={your_api_key}\n"})}),(0,i.jsxs)(s.p,{children:["To make the changes persist in WSL across sessions, add the goose path and export commands to your ",(0,i.jsx)(s.code,{children:".bashrc"})," or ",(0,i.jsx)(s.code,{children:".bash_profile"})," file so you can load it later."]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.bashrc\necho 'export OPENAI_API_KEY=your_api_key' >> ~/.bashrc\nsource ~/.bashrc\n"})})]})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(s.p,{children:"Upon installing, the Provider screen will appear. Here is where you can choose your LLM Provider."}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Set Up a Provider UI",src:o(6034).A+"",width:"752",height:"802"})}),(0,i.jsxs)(s.p,{children:["Once selecting your provider, you'll be prompted to enter an API key if applicable. Do so, and click ",(0,i.jsx)(s.code,{children:"Submit"}),"."]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"update-provider",children:"Update Provider"}),"\n",(0,i.jsxs)(t.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Run the following command:"}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["Select ",(0,i.jsx)(s.code,{children:"Configure Providers"})," from the menu."]}),"\n",(0,i.jsx)(s.li,{children:"Follow the prompts to choose your LLM provider and enter or update your API key."}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example:"})}),(0,i.jsx)(s.p,{children:"To select an option during configuration, use the up and down arrows to highlight your choice then press Enter."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 Google Gemini\n\u2502\n\u25c7 Provider Google Gemini requires GOOGLE_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502\n\u25c7 Enter a model from that provider:\n\u2502 gemini-2.0-flash-exp\n\u2502\n\u25c7  Hello there! You're all set to use me, so please ask away!\n\u2502\n\u2514  Configuration saved successfully\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Click on the three dots in the top-right corner."}),"\n",(0,i.jsxs)(s.li,{children:["Select ",(0,i.jsx)(s.code,{children:"Provider Settings"})," from the menu."]}),"\n",(0,i.jsx)(s.li,{children:"Choose a provider from the list."}),"\n",(0,i.jsxs)(s.li,{children:["Click Edit, enter your API key, and click ",(0,i.jsx)(s.code,{children:"Set as Active"}),"."]}),"\n"]})]})]}),"\n",(0,i.jsx)(d.A,{}),"\n",(0,i.jsx)(s.h2,{id:"running-goose",children:"Running Goose"}),"\n",(0,i.jsxs)(t.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(s.p,{children:"From your terminal, navigate to the directory you'd like to start from and run:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"goose session\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(s.p,{children:"Starting a session in the Goose Desktop is straightforward. After choosing your provider, you\u2019ll see the session interface ready for use."}),(0,i.jsx)(s.p,{children:"Type your questions, tasks, or instructions directly into the input field, and Goose will get to work immediately."})]})]}),"\n",(0,i.jsx)(s.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(s.p,{children:["You can also configure Extensions to extend Goose's functionality, including adding new ones or toggling them on and off. For detailed instructions, visit the ",(0,i.jsx)(s.a,{href:"/docs/getting-started/using-extensions",children:"Using Extensions Guide"}),"."]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},9773:(e,s,o)=>{o.d(s,{A:()=>t});var n=o(6289),i=o(6960),r=o(4848);const t=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"To download Goose Desktop for macOS, click one of the buttons below:"}),(0,r.jsxs)("div",{className:"pill-button",children:[(0,r.jsxs)(n.A,{className:"button button--primary button--lg",to:"https://github.com/block/goose/releases/download/stable/Goose.zip",children:[(0,r.jsx)(i.i,{})," macOS Silicon"]}),(0,r.jsxs)(n.A,{className:"button button--primary button--lg",to:"https://github.com/block/goose/releases/download/stable/Goose_intel_mac.zip",children:[(0,r.jsx)(i.i,{})," macOS Intel"]})]})]})},8127:(e,s,o)=>{o.d(s,{A:()=>r});o(6540);var n=o(2362),i=o(4848);const r=()=>(0,i.jsxs)(n.A,{type:"info",title:"Billing",children:[(0,i.jsx)("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",children:"Google Gemini"})," ","offers a free tier you can get started with. Otherwise, you'll need to ensure that you have credits available in your LLM Provider account to successfully make requests.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Some providers also have rate limits on API usage, which can affect your experience. Check out our"," ",(0,i.jsx)("a",{href:"/goose/docs/guides/handling-llm-rate-limits-with-goose",target:"_blank",children:"Handling Rate Limits"})," ","guide to learn how to efficiently manage these limits while using Goose."]})},5561:(e,s,o)=>{o.d(s,{A:()=>r});o(6540);var n=o(2362),i=o(4848);const r=()=>(0,i.jsxs)(n.A,{type:"info",title:"Supported Environments",children:["The Goose CLI currently works on ",(0,i.jsx)("strong",{children:"macOS"})," and ",(0,i.jsx)("strong",{children:"Linux"})," systems and supports both ",(0,i.jsx)("strong",{children:"ARM"})," and ",(0,i.jsx)("strong",{children:"x86"})," architectures. On ",(0,i.jsx)("strong",{children:"Windows"}),", Goose CLI can run via WSL. If you'd like to request support for additional operating systems, please"," ",(0,i.jsx)("a",{href:"https://github.com/block/goose/discussions/867",target:"_blank",rel:"noopener noreferrer",children:"vote on GitHub"}),"."]})},6960:(e,s,o)=>{o.d(s,{i:()=>i});var n=o(4848);const i=e=>{let{className:s=""}=e;return(0,n.jsx)("svg",{width:"1.5rem",height:"1.5rem",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",className:s,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 12.15a1 1 0 0 0-1.52-1.3L13 12.296V3a1 1 0 1 0-2 0v9.297l-1.24-1.448a1 1 0 0 0-1.52 1.302l3 3.5a1 1 0 0 0 1.52 0l3-3.5ZM5 16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3H5v-3Z",fill:"currentColor"})})}},6034:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/set-up-provider-ui-a6ba5f66d16937ee91dbad22c101c232.png"}}]);