"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2172],{8476:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/using-gooseignore","title":"Prevent Goose from Accessing Files","description":".gooseignore is a text file that defines patterns for files and directories that Goose will not access. This means Goose cannot read, modify, delete, or run shell commands on these files when using the Developer extension\'s tools.","source":"@site/docs/guides/using-gooseignore.md","sourceDirName":"guides","slug":"/guides/using-gooseignore","permalink":"/goose/pr-preview/pr-1853/docs/guides/using-gooseignore","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Prevent Goose from Accessing Files","sidebar_label":"Using Gooseignore","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Running Tasks","permalink":"/goose/pr-preview/pr-1853/docs/guides/running-tasks"},"next":{"title":"Goose in Docker","permalink":"/goose/pr-preview/pr-1853/docs/guides/goose-in-docker"}}');var i=n(4848),r=n(8453);const t={title:"Prevent Goose from Accessing Files",sidebar_label:"Using Gooseignore",sidebar_position:8},l="Prevent Goose from Accessing Files",c={},d=[{value:"Creating your <code>.gooseignore</code> file",id:"creating-your-gooseignore-file",level:2},{value:"Example <code>.gooseignore</code> file",id:"example-gooseignore-file",level:2},{value:"Default patterns",id:"default-patterns",level:2},{value:"Common use cases",id:"common-use-cases",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"prevent-goose-from-accessing-files",children:"Prevent Goose from Accessing Files"})}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:".gooseignore"})," is a text file that defines patterns for files and directories that Goose will not access. This means Goose cannot read, modify, delete, or run shell commands on these files when using the Developer extension's tools."]}),"\n",(0,i.jsx)(o.admonition,{title:"Developer extension only",type:"info",children:(0,i.jsxs)(o.p,{children:["The .gooseignore feature currently only affects tools in the ",(0,i.jsx)(o.a,{href:"/docs/tutorials/developer-mcp",children:"Developer"})," extension. Other extensions are not restricted by these rules."]})}),"\n",(0,i.jsxs)(o.p,{children:["This guide will show you how to use ",(0,i.jsx)(o.code,{children:".gooseignore"})," files to prevent Goose from changing specific files and directories."]}),"\n",(0,i.jsxs)(o.h2,{id:"creating-your-gooseignore-file",children:["Creating your ",(0,i.jsx)(o.code,{children:".gooseignore"})," file"]}),"\n",(0,i.jsxs)(o.p,{children:["Goose supports two types of ",(0,i.jsx)(o.code,{children:".gooseignore"})," files:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Global ignore file"})," - Create a ",(0,i.jsx)(o.code,{children:".gooseignore"})," file in ",(0,i.jsx)(o.code,{children:"~/.config/goose"}),". These restrictions will apply to all your sessions with Goose, regardless of directory."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Local ignore file"})," - Create a ",(0,i.jsx)(o.code,{children:".gooseignore"})," file at the root of the directory you'd like it applied to. These restrictions will only apply when working in a specific directory."]}),"\n"]}),"\n",(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsxs)(o.p,{children:["You can use both global and local ",(0,i.jsx)(o.code,{children:".gooseignore"})," files simultaneously. When both exist, Goose will combine the restrictions from both files to determine which paths are restricted."]})}),"\n",(0,i.jsxs)(o.h2,{id:"example-gooseignore-file",children:["Example ",(0,i.jsx)(o.code,{children:".gooseignore"})," file"]}),"\n",(0,i.jsxs)(o.p,{children:["In your ",(0,i.jsx)(o.code,{children:".gooseignore"})," file, you can write patterns to match files you want Goose to ignore. Here are some common patterns:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-plaintext",children:'# Ignore specific files by name\nsettings.json         # Ignore only the file named "settings.json"\n\n# Ignore files by extension\n*.pdf                # Ignore all PDF files\n*.config             # Ignore all files ending in .config\n\n# Ignore directories and their contents\nbackup/              # Ignore everything in the "backup" directory\ndownloads/           # Ignore everything in the "downloads" directory\n\n# Ignore all files with this name in any directory\n**/credentials.json  # Ignore all files named "credentials.json" in any directory\n\n# Complex patterns\n*.log                # Ignore all .log files\n!error.log           # Except for error.log file\n'})}),"\n",(0,i.jsx)(o.h2,{id:"default-patterns",children:"Default patterns"}),"\n",(0,i.jsxs)(o.p,{children:["By default, if you haven't created any ",(0,i.jsx)(o.code,{children:".gooseignore"})," files, Goose will not modify files matching these patterns:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-plaintext",children:"**/.env\n**/.env.*\n**/secrets.*\n"})}),"\n",(0,i.jsx)(o.h2,{id:"common-use-cases",children:"Common use cases"}),"\n",(0,i.jsxs)(o.p,{children:["Here are some typical scenarios where ",(0,i.jsx)(o.code,{children:".gooseignore"})," is helpful:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Generated Files"}),": Prevent Goose from modifying auto-generated code or build outputs"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Third-Party Code"}),": Keep Goose from changing external libraries or dependencies"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Important Configurations"}),": Protect critical configuration files from accidental modifications"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Version Control"}),": Prevent changes to version control files like ",(0,i.jsx)(o.code,{children:".git"})," directory"]}),"\n"]})]})}function g(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function t(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);