"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2675],{7364:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var s=t(8685),i=t(4848),n=t(8453);const r={title:"6 Essential Tips for Working with Goose",description:"Practical tips to help you use Goose more effectively and efficiently.",authors:["angie"]},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"1. Keep Sessions Focused and Short",id:"1-keep-sessions-focused-and-short",level:2},{value:"2. Minimize Active Extensions",id:"2-minimize-active-extensions",level:2},{value:"3. Teach Goose with .goosehints Files",id:"3-teach-goose-with-goosehints-files",level:2},{value:"4. Choose the Right Mode for Your Workflow",id:"4-choose-the-right-mode-for-your-workflow",level:2},{value:"5. Guide Goose with Step-by-Step Execution",id:"5-guide-goose-with-step-by-step-execution",level:2},{value:"6. Refine and Iterate for Better Responses",id:"6-refine-and-iterate-for-better-responses",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"goose tips",src:t(6134).A+"",width:"1200",height:"630"})}),"\n",(0,i.jsx)(o.p,{children:"Working with AI agents can sometimes feel unpredictable. After using Goose extensively for the last few months, I've compiled a few key tips that will help you get the most out of this tool. No matter your workflow, these guidelines will help you work more efficiently with Goose."}),"\n",(0,i.jsx)(o.h2,{id:"1-keep-sessions-focused-and-short",children:"1. Keep Sessions Focused and Short"}),"\n",(0,i.jsx)(o.p,{children:"One of the most common mistakes users make is trying to accomplish too much in a single session. While it might seem efficient to keep the conversation going, longer sessions can actually hinder Goose's performance."}),"\n",(0,i.jsx)(o.p,{children:"Every message adds to the context window, which is the amount of conversation history Goose can retain at any given time. This history is made up of tokens, the individual pieces of text (words or even parts of words) that Goose processes to generate responses. More tokens don\u2019t just increase processing time, they also contribute to LLM usage costs. And once the context window fills up, older messages get pushed out, which can lead to loss of important details or unexpected behavior."}),"\n",(0,i.jsxs)(o.p,{children:["Think of it like keeping too many browser tabs open. Eventually, it impacts performance. Instead, start fresh sessions for distinct tasks. Don't worry about losing context; that's exactly what the ",(0,i.jsx)(o.a,{href:"/docs/tutorials/memory-mcp",children:"Memory extension"})," is for. Keeping sessions focused and concise ensures more accurate, relevant responses while also keeping your LLM costs under control."]}),"\n",(0,i.jsx)(o.h2,{id:"2-minimize-active-extensions",children:"2. Minimize Active Extensions"}),"\n",(0,i.jsxs)(o.p,{children:["When it comes to Goose extensions, less is often more. It's tempting to enable ",(0,i.jsx)(o.a,{href:"https://www.pulsemcp.com/servers",children:"every available extension"})," just in case (I'm guilty of this!), but this approach can be counterproductive. Each active extension adds to the system prompt, increasing complexity and making Goose work harder to decide which tools to use."]}),"\n",(0,i.jsx)(o.p,{children:"Consider this: if you're cooking in a kitchen, having every possible utensil and appliance out on the counter doesn't make you a better chef. It just creates clutter and confusion. The same principle applies here."}),"\n",(0,i.jsxs)(o.p,{children:["Go ahead and install any extensions that interest you, but ",(0,i.jsx)(o.a,{href:"/docs/getting-started/using-extensions#enablingdisabling-extensions",children:"keep them disabled"})," until you need them. Start with the built-in ",(0,i.jsx)(o.a,{href:"/docs/tutorials/developer-mcp",children:"Developer extension"})," enabled, which is surprisingly powerful on its own, and only enable others when you need their specific capabilities. This leads to faster responses, lower token usage, and often more focused solutions."]}),"\n",(0,i.jsx)(o.admonition,{title:"Bonus Tip",type:"tip",children:(0,i.jsx)(o.p,{children:'Before starting a complex task, ask Goose about its current capabilities. A simple prompt like "Do you have tools available to work with [specific technology/service]?" can save time and prevent false starts. Goose can tell you whether it has the necessary tools for your task, and if not, suggest which extensions you might need to enable. This quick check ensures you have the right tools ready before diving in too deep.'})}),"\n",(0,i.jsx)(o.h2,{id:"3-teach-goose-with-goosehints-files",children:"3. Teach Goose with .goosehints Files"}),"\n",(0,i.jsxs)(o.p,{children:["One of Goose's most powerful features is its ability to understand context through ",(0,i.jsx)(o.a,{href:"/docs/guides/using-goosehints",children:".goosehints"}),' files, acting like a "README for AI". These hints can be set at both the project and global levels to guide Goose\u2019s responses.']}),"\n",(0,i.jsx)(o.p,{children:"At the project level, placing .goosehints files in your directory helps Goose understand your structure, conventions, and special considerations. You can even use multiple files - one at the root for overall guidance and others in specific directories for more granular instructions (e.g., frontend styling conventions)."}),"\n",(0,i.jsxs)(o.p,{children:["Beyond projects, global .goosehints files (",(0,i.jsx)(o.code,{children:"~/.config/goose/.goosehints"}),") apply across all sessions, making them perfect for things like:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Personal coding style preferences"}),"\n",(0,i.jsx)(o.li,{children:"Favorite tools and workflows"}),"\n",(0,i.jsx)(o.li,{children:"Standard testing practices"}),"\n",(0,i.jsx)(o.li,{children:"Documentation conventions"}),"\n",(0,i.jsx)(o.li,{children:"Git commit message formatting"}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"4-choose-the-right-mode-for-your-workflow",children:"4. Choose the Right Mode for Your Workflow"}),"\n",(0,i.jsxs)(o.p,{children:["Goose offers ",(0,i.jsx)(o.a,{href:"/docs/guides/goose-permissions",children:"different modes"})," that determine how much autonomy it has when modifying files, using extensions, and performing automated actions."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u26a1\ufe0f ",(0,i.jsx)(o.strong,{children:"Auto Mode (Default):"})," Goose can modify, create, and delete files, as well as use extensions, without requiring approval. Best for users who want seamless automation."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u2705 ",(0,i.jsx)(o.strong,{children:"Approve Mode:"})," Goose asks for confirmation before making changes. With ",(0,i.jsx)(o.a,{href:"/docs/guides/goose-permissions#smart-approve",children:"Smart Approve"})," enabled, it evaluates risk levels and prompts for high-risk actions while executing safe ones automatically."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\ud83d\udcac ",(0,i.jsx)(o.strong,{children:"Chat Mode:"})," Goose operates in chat-only mode, without modifying files or using extensions. Ideal for users who want AI assistance without automation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"If you\u2019re new to Goose or working on a critical project, Approve Mode offers a great balance of automation and oversight. For hands-free workflows, Auto Mode keeps things moving, while Chat Mode is perfect for brainstorming and general AI assistance."}),"\n",(0,i.jsx)(o.h2,{id:"5-guide-goose-with-step-by-step-execution",children:"5. Guide Goose with Step-by-Step Execution"}),"\n",(0,i.jsx)(o.p,{children:"Complex tasks are best handled in stages, and Goose excels when you allow it to break problems into manageable steps. Instead of expecting an instant solution, ask Goose to generate a step-by-step plan first. Review the plan to ensure it aligns with your goals, then let Goose execute each step in sequence."}),"\n",(0,i.jsx)(o.p,{children:"This structured approach not only improves accuracy but also gives you more control over the process. You can pause, adjust, or refine each step as needed, giving you more control while ensuring better results."}),"\n",(0,i.jsx)(o.h2,{id:"6-refine-and-iterate-for-better-responses",children:"6. Refine and Iterate for Better Responses"}),"\n",(0,i.jsx)(o.p,{children:"Goose is powerful, but like any AI, it sometimes needs a second pass to get things right. If you don\u2019t get the response you need, try refining your prompt or asking Goose to adjust its answer."}),"\n",(0,i.jsx)(o.p,{children:"Good iteration techniques include:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Asking Goose to explain its reasoning before taking action"}),"\n",(0,i.jsx)(o.li,{children:"Requesting alternative solutions to compare different approaches"}),"\n",(0,i.jsx)(o.li,{children:"Asking for a step-by-step breakdown of its thought process"}),"\n",(0,i.jsx)(o.li,{children:"Rewording prompts to add more detail or constraints"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:'For example, instead of asking, "Help me debug this error," try, "I\u2019m getting a NullPointerException in my Java method. Here\u2019s the stack trace. What could be causing it?" A small tweak in how you ask can dramatically improve the quality of the response.'}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"By following these tips, you'll be able to work more effectively with Goose, getting better results while using fewer resources. Remember, the goal is to solve problems efficiently and effectively. Whether you're writing code, automating tasks, or managing complex projects, these guidelines will help you make the most of what Goose has to offer."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{property:"og:title",content:"6 Essential Tips for Working with Goose"}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/03/06/goose-tips"}),(0,i.jsx)("meta",{property:"og:description",content:"Practical tips to help you use Goose more effectively and efficiently."}),(0,i.jsx)("meta",{property:"og:image",content:"https://block.github.io/goose/assets/images/goose-tips-4add28cc7201737dfb468ad11980f070.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,i.jsx)("meta",{name:"twitter:title",content:"6 Essential Tips for Working with Goose"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Practical tips to help you use Goose more effectively and efficiently."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://block.github.io/goose/assets/images/goose-tips-4add28cc7201737dfb468ad11980f070.png"})]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6134:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/goose-tips-4add28cc7201737dfb468ad11980f070.png"},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var s=t(6540);const i={},n=s.createContext(i);function r(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:o},e.children)}},8685:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1938/blog/2025/03/06/goose-tips","source":"@site/blog/2025-03-06-goose-tips/index.md","title":"6 Essential Tips for Working with Goose","description":"Practical tips to help you use Goose more effectively and efficiently.","date":"2025-03-06T00:00:00.000Z","tags":[],"readingTime":5.37,"hasTruncateMarker":true,"authors":[{"name":"Angie Jones","title":"Head of Developer Relations","url":"https://angiejones.tech","page":{"permalink":"/goose/pr-preview/pr-1938/blog/authors/angie"},"socials":{"linkedin":"https://www.linkedin.com/in/angiejones/","github":"https://github.com/angiejones","x":"https://x.com/techgirl1908"},"imageURL":"https://avatars.githubusercontent.com/u/15972783?v=4","key":"angie"}],"frontMatter":{"title":"6 Essential Tips for Working with Goose","description":"Practical tips to help you use Goose more effectively and efficiently.","authors":["angie"]},"unlisted":false,"prevItem":{"title":"Automating Phone Calls with Goose","permalink":"/goose/pr-preview/pr-1938/blog/2025/03/10/goose-calls-vyop"},"nextItem":{"title":"Let A Team of AI Agents Do It For You","permalink":"/goose/pr-preview/pr-1938/blog/2025/02/21/gooseteam-mcp"}}')}}]);