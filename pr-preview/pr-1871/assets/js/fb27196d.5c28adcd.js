"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9710],{8785:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"guides/experimental-features","title":"Experimental Features","description":"Goose is an open source project that is constantly being improved, and new features are added regularly. Some of these features are considered experimental, meaning they are still in development and may not be fully stable or ready for production use. This guide covers how to enable and use experimental features in Goose, as well as how to provide feedback on them.","source":"@site/docs/guides/experimental-features.md","sourceDirName":"guides","slug":"/guides/experimental-features","permalink":"/goose/pr-preview/pr-1871/docs/guides/experimental-features","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Goose in Docker","permalink":"/goose/pr-preview/pr-1871/docs/guides/goose-in-docker"},"next":{"title":"Quick Tips","permalink":"/goose/pr-preview/pr-1871/docs/guides/tips"}}');var o=s(4848),t=s(8453);const l={},r="Experimental Features",i={},d=[{value:"Available Experimental Features",id:"available-experimental-features",level:2},{value:"Ollama Tool Shim",id:"ollama-tool-shim",level:3},{value:"How to use the Ollama Tool Shim",id:"how-to-use-the-ollama-tool-shim",level:4},{value:"Feedback",id:"feedback",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"experimental-features",children:"Experimental Features"})}),"\n",(0,o.jsx)(n.p,{children:"Goose is an open source project that is constantly being improved, and new features are added regularly. Some of these features are considered experimental, meaning they are still in development and may not be fully stable or ready for production use. This guide covers how to enable and use experimental features in Goose, as well as how to provide feedback on them."}),"\n",(0,o.jsx)(n.h2,{id:"available-experimental-features",children:"Available Experimental Features"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The list of experimental features may change as Goose development progresses. Some features may be promoted to stable features, while others might be modified or removed.This section will be updated with specific experimental features as they become available"})}),"\n",(0,o.jsx)(n.h3,{id:"ollama-tool-shim",children:"Ollama Tool Shim"}),"\n",(0,o.jsx)(n.p,{children:"The Ollama tool shim is an experimental feature that enables tool calling capabilities for language models that don't natively support tool calling (like DeepSeek). It works by instructing the primary model to output json for intended tool usage, the interpretive model uses ollama structured outputs to translate the primary model's message into valid json, and then that json is translated into valid tool calls to be invoked."}),"\n",(0,o.jsx)(n.h4,{id:"how-to-use-the-ollama-tool-shim",children:"How to use the Ollama Tool Shim"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Make sure you have ",(0,o.jsx)(n.a,{href:"https://ollama.com/download",children:"Ollama"})," installed and running"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The default interpreter model is ",(0,o.jsx)(n.code,{children:"mistral-nemo"}),", if you want to proceed with this, you have to pull it from ollama server by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ollama pull mistral-nemo\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you want to use a different model, make sure to pull it first from the Ollama server. Then override the default interpreter model using the ",(0,o.jsx)(n.code,{children:"GOOSE_TOOLSHIM_OLLAMA_MODEL"})," environment variable. For example, to use the ",(0,o.jsx)(n.code,{children:"llama3.2"})," model, run:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ollama pull llama3.2\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then,"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GOOSE_TOOLSHIM_OLLAMA_MODEL=llama3.2 \n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For optimal performance, run the Ollama server with an increased context length:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"OLLAMA_CONTEXT_LENGTH=32768 ollama serve\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Enable the tool shim by setting the ",(0,o.jsx)(n.code,{children:"GOOSE_TOOLSHIM"})," environment variable:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GOOSE_TOOLSHIM=1 \n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Start a new Goose session with your tool shim preferences:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GOOSE_TOOLSHIM=1 GOOSE_TOOLSHIM_OLLAMA_MODEL=llama3.2 cargo run --bin goose session\n"})}),"\n",(0,o.jsx)(n.h2,{id:"feedback",children:"Feedback"}),"\n",(0,o.jsxs)(n.p,{children:["If you encounter any issues with these features, check if the issue is already reported in the ",(0,o.jsx)(n.a,{href:"https://github.com/goose/goose/issues",children:"GitHub issues"})," or join the ",(0,o.jsx)(n.a,{href:"https://discord.gg/block-opensource",children:"Discord community"})," to share."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var a=s(6540);const o={},t=a.createContext(o);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);