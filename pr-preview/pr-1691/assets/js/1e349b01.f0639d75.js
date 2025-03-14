"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8780],{7257:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var n=o(6149),s=o(4848),a=o(8453);const r={title:"AI, But Make It Local With Goose and Ollama",description:"Integrate Goose with Ollama for a fully local experience.",authors:["tania"]},i="Getting Started",l={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"blog cover",src:o(584).A+"",width:"1206",height:"633"})}),"\n",(0,s.jsxs)(t.p,{children:["On the ",(0,s.jsx)(t.a,{href:"https://youtube.com/playlist?list=PLyMFt_U2IX4uFFhd_2TD9-tlJkgHMMb6F&feature=shared",children:"Goosing Around"})," stream series, host ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/rizel-bobb-semple/",children:"Rizel Scarlett"})," ",(0,s.jsx)(t.a,{href:"https://youtube.com/watch?v=WG10r2N0IwM?feature=share",children:"demonstrated how to use Goose locally with Ollama"})," for a fully local experience on your device. Her guest, ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/parthsareen/",children:"Parth Sareen"}),", an experienced software engineer with a focus on building frameworks and systems for AI/ML, showed us the magic of structured outputs and how Goose and Ollama work together under the hood."]}),"\n",(0,s.jsx)(t.p,{children:"Goose serves as an on-machine AI agent that can interact with your applications and tools through extensions, providing the framework and interface for AI-powered workflows. Ollama enables running large language models locally with a simple API, handling the optimization of models to run efficiently on consumer hardware."}),"\n",(0,s.jsx)(t.p,{children:"Together, they create a self-contained AI agent workflow that puts advanced capabilities directly in the hands of developers."}),"\n",(0,s.jsxs)(t.p,{children:["Before diving deep into various capabilities, Rizel walked us through how to set yourself up for success by integrating Goose with Ollama. To follow along, you can download Goose ",(0,s.jsx)(t.a,{href:"https://block.github.io/goose/",children:"here"})," and follow a step-by-step walk through in the ",(0,s.jsx)(t.a,{href:"https://block.github.io/goose/docs/getting-started/providers",children:"Configure LLM Provider"})," guide."]}),"\n",(0,s.jsxs)(t.p,{children:["If you have any questions or get stuck, feel free to chat with us on ",(0,s.jsx)(t.a,{href:"https://discord.gg/block-opensource",children:"Discord"})," or post an issue/discussion on ",(0,s.jsx)(t.a,{href:"https://github.com/block/goose/",children:"GitHub"}),". Thanks for reading!"]}),"\n",(0,s.jsx)(t.h1,{id:"why-go-local",children:"Why Go Local?"}),"\n",(0,s.jsx)(t.p,{children:"Using cloud-based LLMs and providers make it so you don't need substantial computing resources, so why go local? Here's some benefits you may want to consider:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"True data privacy"}),' since your conversations never leave your device. You have complete control over sensitive information. As Parth emphasized during the discussion, "Your data stays with you, period."']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Offline capability"}),' transforms when and where you can use AI. "I use Ollama all the time on planes\u2014it\'s a lot of fun!" Parth shared, highlighting how local models free you from the constraints of internet connectivity.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Direct control over model behavior"})," means you can fine-tune parameters without subscription fees or API limits. Open source models allow you to get a closer look at what's happening behind the scenes."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Personal use cases like development assistance, personal knowledge management, education, and content management are but some examples that can benefit from working locally and offline. You can keep research and sensitive data private, and utilize Goose when you have limited connectivity."}),"\n",(0,s.jsx)(t.h1,{id:"can-my-machine-handle-this",children:"Can My Machine Handle This?"}),"\n",(0,s.jsx)(t.p,{children:"This question came up repeatedly, and the answer is more encouraging than you think. As Parth pointed out, \"You don't need to run the largest models to get excellent results.\" The requirements you'll want to look out for on your device boils down to this:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RAM is key"}),": 32GB is a solid baseline for larger models and outputs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"For MacBooks, RAM is your primary concern"})," given the unified memory architecture."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"For Windows/Linux, GPU memory is more important"})," for acceleration"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Use cases can start with smaller, more efficient models that run on modest hardware. Models optimized for efficiency can deliver impressive performance even on standard laptops! Just start with a smaller model to test your workflow, then scale up as you need. This way you can figure out if you need the beefy hardware or not."}),"\n",(0,s.jsx)(t.h1,{id:"the-magic-of-structured-outputs",children:"The Magic of Structured Outputs"}),"\n",(0,s.jsxs)(t.p,{children:["Ollama supports ",(0,s.jsx)(t.a,{href:"https://ollama.com/blog/structured-outputs",children:"structured outputs"}),', making it possible to constrain a model\u2019s output to a specific format\u2014essentially teaching models to respond in specific formats like JSON. Parth explained the concept with an elegant analogy: "It\'s like teaching someone math operations. You show them how to add, subtract, multiply, and then they can solve different problems following those patterns."']}),"\n",(0,s.jsx)(t.p,{children:"Parth showed us how these structured outputs can dramatically improve reliability. By constraining the model to respond within specific parameters, you get more consistent, predictable results. This structured approach ensures the model's response can be reliably parsed and integrated into applications\u2014all while running locally on your device."}),"\n",(0,s.jsx)(t.p,{children:"Here's an example of how to structure an output from the livestream:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// Example of image analysis with structured output\n{\n  "scene": "sunset over mountains",\n  "objects": [\n    {\n      "type": "sun",\n      "attributes": ["orange", "setting", "partially visible"],\n      "confidence": 0.95\n    },\n    {\n      "type": "mountains",\n      "attributes": ["silhouetted", "range", "distant"],\n      "confidence": 0.92\n    },\n    {\n      "type": "sky",\n      "attributes": ["gradient", "orange to purple", "clear"],\n      "confidence": 0.98\n    }\n  ],\n  "mood": "peaceful",\n  "lighting": "golden hour",\n  "composition": "rule of thirds"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"As Parth walked through these examples, he shared key practices to ensure you get the most out of local LLMs:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"For precision tasks, lower the temperature"}),". Setting it to 0 makes responses more deterministic and factual."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Use structured outputs whenever possible"}),", be explicit about the format you want in your prompts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Be mindful of context windows"}),", local models have limits on how much information they can process at once."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Experiment with different models"}),"! Each has strengths and weaknesses you'll want to explore for your needs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"For larger documents, chunk them"})," into manageable pieces, this helps a lot when you're working with larger files."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"its-about-the-freedom-to-choose",children:"It's About The Freedom To Choose"}),"\n",(0,s.jsx)(t.p,{children:"While there are trade-offs in terms of raw processing power when you go local vs cloud, you don't have to choose one over the other. As Parth summarized during the livestream: \"Local AI isn't about replacing cloud options\u2014it's about having the freedom to choose the right approach for your specific needs.\""}),"\n",(0,s.jsx)(t.p,{children:"The benefits of owning your AI experience can be compelling for a variety of use cases. Whether you're a developer building tools, a writer working with confidential material, or simply someone who values privacy and control, I hope the Goose-Ollama integration offers a glimpse into how a local experience can benefit you, and explore a future where sophisticated AI is as personal and private as the data on your hard drive. Thanks for reading!"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("meta",{property:"og:title",content:"Goosing Around: AI, But Make It Local With Goose and Ollama"}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/03/13/goose-ollama-local"}),(0,s.jsx)("meta",{property:"og:description",content:"Integrate Goose with Ollama for a fully local experience."}),(0,s.jsx)("meta",{property:"og:image",content:"http://block.github.io/goose/assets/images/gooseollama.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Goosing Around: AI, But Make It Local With Goose and Ollama"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Integrate Goose with Ollama for a fully local experience."}),(0,s.jsx)("meta",{name:"twitter:image",content:"http://block.github.io/goose/assets/images/gooseollama.png"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},584:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/gooseollama-fbb2cb67117c81eaa189a6b6174e6c6c.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}},6149:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1691/blog/2025/03/14/goose-ollama","source":"@site/blog/2025-03-14-goose-ollama/index.md","title":"AI, But Make It Local With Goose and Ollama","description":"Integrate Goose with Ollama for a fully local experience.","date":"2025-03-14T00:00:00.000Z","tags":[],"readingTime":5.07,"hasTruncateMarker":true,"authors":[{"name":"Tania Chakraborty","title":"Senior Technical Community Manager","page":{"permalink":"/goose/pr-preview/pr-1691/blog/authors/tania"},"socials":{"linkedin":"https://www.linkedin.com/in/taniachakraborty/","x":"https://x.com/taniashiba","github":"https://github.com/taniashiba"},"imageURL":"https://avatars.githubusercontent.com/u/126204004?v=4","key":"tania"}],"frontMatter":{"title":"AI, But Make It Local With Goose and Ollama","description":"Integrate Goose with Ollama for a fully local experience.","authors":["tania"]},"unlisted":false,"nextItem":{"title":"Turn Figma Designs Into Code With Goose","permalink":"/goose/pr-preview/pr-1691/blog/2025/03/12/goose-figma-mcp"}}')}}]);