"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2708],{3430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var s=a(9627),o=a(4848),i=a(8453);const n={title:"How Goose Catches AI Errors with Langfuse",description:"Get detailed insights into Goose's behavior with Langfuse's observability tools.",authors:["tania"]},r=void 0,l={authorsImageUrls:[void 0]},h=[{value:"What is Langfuse",id:"what-is-langfuse",level:2},{value:"How Langfuse Works With Goose",id:"how-langfuse-works-with-goose",level:2},{value:"Traces",id:"traces",level:3},{value:"Timeline View",id:"timeline-view",level:3},{value:"Structured Data",id:"structured-data",level:3},{value:"Practical Benefits",id:"practical-benefits",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"blog cover",src:a(8383).A+"",width:"1206",height:"633"})}),"\n",(0,o.jsxs)(t.p,{children:["How do we debug AI agents like Goose? In the ",(0,o.jsx)(t.a,{href:"https://youtube.com/playlist?list=PLyMFt_U2IX4uFFhd_2TD9-tlJkgHMMb6F&feature=shared",children:"Goosing Around"})," stream series, host ",(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/rizel-bobb-semple/",children:"Rizel Scarlett"})," invited ",(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/marcklingen/",children:"Marc Klingen"}),", Co-Founder at Langfuse, and ",(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/alice-hau/",children:"Alice Hau"}),", Machine Learning Engineer at Block, to demo how Langfuse enables observability into Goose's actions, letting you trace LLM behavior and catch errors."]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-langfuse",children:"What is Langfuse"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://langfuse.com/",children:"Langfuse"})," is an open source observability platform specifically designed for LLM-powered apps. Mark revealed during stream that Langfuse wasn't originally an observability platform, it was born from early attempts to build an AI agent like Goose."]}),"\n",(0,o.jsx)(t.p,{children:"While they were limited by the available models at the time, especially with multi-file edits, the team discovered the tooling they had built for debugging and monitoring their agent was more valuable to them than their agent."}),"\n",(0,o.jsx)(t.h2,{id:"how-langfuse-works-with-goose",children:"How Langfuse Works With Goose"}),"\n",(0,o.jsx)(t.p,{children:"Since traditional observability tools don't quite cut it when it comes to AI agents. Langfuse introduces 3 core concepts to make Goose's behavior more observable, and create logs that are easier to parse:"}),"\n",(0,o.jsx)(t.h3,{id:"traces",children:"Traces"}),"\n",(0,o.jsx)(t.p,{children:"Each interaction with Goose creates a trace to capture the full story of what happened. These traces include key information, from the initial prompt and user messages to tool calls and their responses. They also store valuable metadata about model outputs and timing information, giving developers a complete picture of each interaction."}),"\n",(0,o.jsx)(t.h3,{id:"timeline-view",children:"Timeline View"}),"\n",(0,o.jsx)(t.p,{children:"The timeline view takes these complex interactions and transforms it into a digestible format. Developers can see parallel task execution in real-time, understand the dependencies between different actions, and measure the actual duration of each opersation. This can be super helpful when debugging a complex sequence of actions taken by Goose, or to help optimize performance."}),"\n",(0,o.jsx)(t.h3,{id:"structured-data",children:"Structured Data"}),"\n",(0,o.jsx)(t.p,{children:'Alice explained, "Goose sessions can be really long... we have log files, but you\'ll just see a massive log of JSON."'}),"\n",(0,o.jsx)(t.p,{children:"Rather than rangle raw JSON log, Langfuse helps organize this data to help make navigating longer sessions and their data more straightforward. This approach can help developers easily analyze tool usage patterns, monitor token consumption, and quickly identify any performance bottlenecks and where they may happen."}),"\n",(0,o.jsx)(t.p,{children:"With this integration, you can instead better understand the sequence of actions taken by Goose, and analyze track token usage and model behavior across LLMs."}),"\n",(0,o.jsx)(t.h2,{id:"practical-benefits",children:"Practical Benefits"}),"\n",(0,o.jsx)(t.p,{children:"The observability the Goose and Langfuse integration brings is great for anyone who wants clear insight into what Goose is doing behind the scenes. Alice and Marc discussed the different ways this integration can help you debug faster."}),"\n",(0,o.jsx)(t.p,{children:"Developers can dive deeper into detailed session logs and identify the root cause to a reported issue and ensure Goose is operating as efficiently as possible. Like checking why certain commands may not be working as expected, or seeing exactly how Goose is processing information for a given task with a specific LLM."}),"\n",(0,o.jsx)(t.p,{children:"As developers focus on operational efficiency, researchers can use the analytical capabilities of this integration to better understand which models best suit their needs. Through comprehensive model evaluations, they can analyze how different models handle tool calling, understand decision-making patterns across LLMs, and establish a systematic approach to understanding and improving AI systems."}),"\n",(0,o.jsx)(t.h1,{id:"the-future-of-ai-observability",children:"The Future of AI Observability"}),"\n",(0,o.jsx)(t.p,{children:"These powerful debugging and analysis capabilities are only the beginning. This integration between Goose and Langfuse represents a significant step forward in making AI agents as transparent and debuggable as traditional code."}),"\n",(0,o.jsxs)(t.p,{children:["To keep up with the exciting developments as they release, you can check out both of the ",(0,o.jsx)(t.a,{href:"https://github.com/block/goose",children:"Goose"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/langfuse/langfuse",children:"Langfuse"})," repositories on GitHub."]}),"\n",(0,o.jsxs)(t.p,{children:["You can also watch the ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/live/W39BQjsTS9E?feature=shared",children:"livestream discussing the Goose and Langfuse integration"}),", and follow the ",(0,o.jsx)(t.a,{href:"https://block.github.io/goose/docs/tutorials/langfuse",children:"tutorial showing you how to integrate Langfuse with Goose"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Also, be sure to subscribe to our ",(0,o.jsx)(t.a,{href:"https://calget.com/c/t7jszrie",children:"events calendar"})," to catch upcoming events."]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("meta",{property:"og:title",content:"How Goose Catches AI Errors with Langfuse"}),(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/03/18/goose-langfuse"}),(0,o.jsx)("meta",{property:"og:description",content:"Get detailed insights into Goose's behavior with Langfuse's observability tools."}),(0,o.jsx)("meta",{property:"og:image",content:"http://block.github.io/goose/assets/images/goose_aierrors-22154af884db86789ce1a12a72897e8e.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,o.jsx)("meta",{name:"twitter:title",content:"How Goose Catches AI Errors with Langfuse"}),(0,o.jsx)("meta",{name:"twitter:description",content:"Get detailed insights into Goose's behavior with Langfuse's observability tools."}),(0,o.jsx)("meta",{name:"twitter:image",content:"http://block.github.io/goose/assets/images/goose_aierrors-22154af884db86789ce1a12a72897e8e.png"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8383:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/goose_aierrors-22154af884db86789ce1a12a72897e8e.png"},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>r});var s=a(6540);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}},9627:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1805/blog/2025/03/18/goose-langfuse","source":"@site/blog/2025-03-18-goose-langfuse/index.md","title":"How Goose Catches AI Errors with Langfuse","description":"Get detailed insights into Goose\'s behavior with Langfuse\'s observability tools.","date":"2025-03-18T00:00:00.000Z","tags":[],"readingTime":3.46,"hasTruncateMarker":true,"authors":[{"name":"Tania Chakraborty","title":"Senior Technical Community Manager","page":{"permalink":"/goose/pr-preview/pr-1805/blog/authors/tania"},"socials":{"linkedin":"https://www.linkedin.com/in/taniachakraborty/","x":"https://x.com/taniashiba","github":"https://github.com/taniashiba"},"imageURL":"https://avatars.githubusercontent.com/u/126204004?v=4","key":"tania"}],"frontMatter":{"title":"How Goose Catches AI Errors with Langfuse","description":"Get detailed insights into Goose\'s behavior with Langfuse\'s observability tools.","authors":["tania"]},"unlisted":false,"prevItem":{"title":"How I Use Goose to Plan My Week with Asana and Google Calendar MCPs","permalink":"/goose/pr-preview/pr-1805/blog/2025/03/20/asana-calendar-mcp"},"nextItem":{"title":"AI, But Make It Local With Goose and Ollama","permalink":"/goose/pr-preview/pr-1805/blog/2025/03/14/goose-ollama"}}')}}]);