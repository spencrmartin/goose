"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[1547],{7872:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var n=o(8307),s=o(4848),r=o(8453);const i={title:"AI Prompting 101: How to Get the Best Responses from Your AI Agent",description:"How to prompt your AI agent the right way.",authors:["ebony"]},a=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Instruction-Based Prompting",id:"instruction-based-prompting",level:2},{value:"Chain-of-Thought Prompting",id:"chain-of-thought-prompting",level:2},{value:"Few-Shot Prompting",id:"few-shot-prompting",level:2},{value:"Iterative Refinement Prompting",id:"iterative-refinement-prompting",level:2},{value:"Zero-Shot Prompting",id:"zero-shot-prompting",level:2},{value:"Politeness-Based Prompting",id:"politeness-based-prompting",level:2},{value:"The Best Prompts Feel Natural",id:"the-best-prompts-feel-natural",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"blog cover",src:o(1368).A+"",width:"2240",height:"1260"})}),"\n",(0,s.jsxs)(t.p,{children:['Remember that saying, "it\u2019s not what you ask, but ',(0,s.jsx)(t.strong,{children:"how you ask"}),'"?']}),"\n",(0,s.jsxs)(t.p,{children:["When I first started working with Goose as an AI agent, I was convinced there had to be one \u2018best' prompting style. I spent so much time trying to figure out which one was superior, but the more I used Goose, the more I realized that couldn't be further from the truth. There isn\u2019t one ",(0,s.jsx)(t.em,{children:"right"}),"  way to prompt AI, but there are better approaches depending on what your end goal is."]}),"\n",(0,s.jsxs)(t.p,{children:["So, let\u2019s go through ",(0,s.jsx)(t.strong,{children:"which prompt style works best for your specific needs"}),", and how you can use them to vibe code a little better with Goose."]}),"\n",(0,s.jsx)(t.h2,{id:"instruction-based-prompting",children:"Instruction-Based Prompting"}),"\n",(0,s.jsx)(t.p,{children:"If you\u2019re not a developer or you're just new to Goose, this is a great place to start. The best way to get good responses is to be as clear and direct as possible. Goose works best when given specific instructions, so tell it exactly what you need and include all of the important details. If you\u2019re too vague, you might end up with an overly technical or even a possibly incomplete answer that doesn\u2019t actually help you."}),"\n",(0,s.jsx)(t.p,{children:"For example, instead of saying:"}),"\n",(0,s.jsx)(t.p,{children:"\u274c Okay Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, what\u2019s a pull request?"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This might give you a super technical definition that assumes you already know the basics."}),"\n",(0,s.jsx)(t.p,{children:"So, you could say:"}),"\n",(0,s.jsx)(t.p,{children:"\u2705 Better Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, explain how GitHub pull requests work like I\u2019m new to coding"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This tells Goose exactly what you need and at what level."}),"\n",(0,s.jsxs)(t.admonition,{title:"pro tip",type:"tip",children:[(0,s.jsx)(t.p,{children:"If you want Goose to remember your preferences, you can say,"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, remember I\u2019m not a developer. Explain things at a high level unless I ask for technical details"})})}),"\n"]}),(0,s.jsxs)(t.p,{children:["If you have the ",(0,s.jsx)(t.a,{href:"/docs/tutorials/memory-mcp",children:"Memory Extension"})," enabled, Goose will save this preference so you won\u2019t have to remind it every time."]})]}),"\n",(0,s.jsx)(t.h2,{id:"chain-of-thought-prompting",children:"Chain-of-Thought Prompting"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes a topic or task can just be too much to tackle all at once, and that\u2019s where Chain-of-Thought Prompting comes in. Instead of getting this enormous and complicated response back, you can guide Goose to break things down step by step so it\u2019s easier to follow."}),"\n",(0,s.jsx)(t.p,{children:"For example, instead of saying:"}),"\n",(0,s.jsx)(t.p,{children:"\u274c Okay Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, what are Model Context Protocol Servers, and how are they used in goose?"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"which might get you a response that's hard to follow, you could say:"}),"\n",(0,s.jsx)(t.p,{children:"\u2705 Better Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, walk me through what MCPs are and how they're used in gosoe, step by step"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This forces Goose to slow down and explain each part clearly, making it easier to understand."}),"\n",(0,s.jsx)(t.p,{children:"Now, if you want to take it a step further and make sure Goose understands the exact style of responses you're expecting, that\u2019s when Few-Shot Prompting is the way to go."}),"\n",(0,s.jsx)(t.h2,{id:"few-shot-prompting",children:"Few-Shot Prompting"}),"\n",(0,s.jsx)(t.p,{children:"If you need Goose to match a specific style or format, the best way to get there is by showing it what you want. I use this all the time! Since AI models learn patterns from examples, giving Goose a reference helps it skip the guesswork and just get straight to the point."}),"\n",(0,s.jsx)(t.p,{children:"For example, instead of saying:"}),"\n",(0,s.jsx)(t.p,{children:"\u274c Okay Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, summarize this report"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"you could say:"}),"\n",(0,s.jsx)(t.p,{children:"\u2705 Better Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, here\u2019s how I usually summarize reports: (example summary). Can you summarize this new report the same way?"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By providing an example, you\u2019re guiding Goose to the answer that you actually want."}),"\n",(0,s.jsx)(t.p,{children:"Now, what if you've given Goose an example and it\u2019s first response isn\u2019t quite right? There's no need to end the session and start over, that\u2019s when Iterative Refinement Prompting is useful."}),"\n",(0,s.jsx)(t.h2,{id:"iterative-refinement-prompting",children:"Iterative Refinement Prompting"}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s be real, Goose just like any AI agent isn\u2019t always going to get it 'right' on the first try. Sometimes, it gives you a response that's way too technical, other times, it might completely miss the mark or even worse, hallucinate its way into a weird, made-up answer, that kind of sounds true. But instead of giving up and starting over, you can steer the conversation by giving feedback on what needs to change."}),"\n",(0,s.jsx)(t.p,{children:"Since Goose allows you to bring your own LLM, the way it responds depends a lot on which model you\u2019re using. Some LLMs need a little extra guidance, while others might require a few rounds of refinement before they get things right. The good news? You can shape the response without completely starting over."}),"\n",(0,s.jsx)(t.p,{children:"For example, if Goose spits out something overly complicated, don\u2019t just accept it, you can push back! Try saying:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, this response is too technical. Can you simplify it?"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Or if something sounds off and you want to do a fact check:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, where did you get that information? How do you know it's accurate?"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Think of working with Goose like pair programming or collaborating with a coworker. Sometimes, you need to clarify what you want or redirect the conversation to get make sure you're both on the same page."}),"\n",(0,s.jsx)(t.p,{children:"But what if you don\u2019t have a clear example or specific instructions to guide Goose? That\u2019s when I would use Zero-Shot Prompting."}),"\n",(0,s.jsx)(t.h2,{id:"zero-shot-prompting",children:"Zero-Shot Prompting"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes, you just want Goose to take a wild guess, get a little creative, and run with it. That\u2019s exactly what Zero-Shot Prompting is for, it lets Goose figure things out on its own, without any examples or extra guidance from you."}),"\n",(0,s.jsx)(t.p,{children:"For example, you might say:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, write me a project update for my team"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"or:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, I want to build a cool prompt directory"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"I love using this approach when I have a rough idea but no real clear direction. It\u2019s like brainstorming but with AI, Goose will throw out ideas, suggest next steps, and sometimes even point out things I would\u2019ve never even thought of. More often than not, my original idea ends up 10x better just by letting Goose take the lead."}),"\n",(0,s.jsx)(t.p,{children:"Now, if you want Goose to not just come up with amazing ideas but also be funny, helpful, and maybe even a little nicer to you, that\u2019s when you need to put those manners you learned in elementary school to use."}),"\n",(0,s.jsx)(t.h2,{id:"politeness-based-prompting",children:"Politeness-Based Prompting"}),"\n",(0,s.jsx)(t.p,{children:"Believe it or not, being polite actually makes AI responses better! Even though Goose isn\u2019t self-aware\u2026\u2026yet\u2026\u2026 \ud83d\udc40, AI models tend to generate more thoughtful, structured, and sometimes even friendlier replies when asked nicely. So yes, saying \u201cplease\u201d and \u201cthank you\u201d actually makes a difference."}),"\n",(0,s.jsx)(t.p,{children:"For example, instead of saying:"}),"\n",(0,s.jsx)(t.p,{children:"\u274c Okay Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, generate a project update"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"you could say:"}),"\n",(0,s.jsx)(t.p,{children:"\u2705 Better Prompt:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Goose, could you generate a project update for me, please? Thanks!"})})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Goose will respond either way, but ",(0,s.jsx)(t.strong,{children:"trust me"}),", polite prompts tend to get you better answers. One of our users once got the sweetest response from Goose at the end of a project, like it was genuinely grateful for the collaboration and even wished them sweet dreams. It was adorable!!"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"goose response",src:o(2162).A+"",width:"2322",height:"1470"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Here\u2019s the actual response, Goose is really out here making people\u2019s day."})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"And the best part? This works with any prompting style. So, if you want Goose to be helpful, clear, and maybe even a little extra nice to you, be good to Goose and Goose will be good to you."}),"\n",(0,s.jsx)(t.h2,{id:"the-best-prompts-feel-natural",children:"The Best Prompts Feel Natural"}),"\n",(0,s.jsx)(t.p,{children:"At the end of the day, all these prompting styles are just tools, at your disposal. The most important thing is to keep your prompts clear and natural. You don\u2019t have to overthink it, but adding a little structure can make a huge difference in getting the responses you actually want."}),"\n",(0,s.jsx)(t.p,{children:"Goose is here to make your life easier, so the next time you open up a session, just keep your goal in mind, experiment with different prompting styles, and see what works best for you."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("meta",{property:"og:title",content:"AI Prompting 101: How to Get the Best Responses from Your AI Agent"}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/03/13/better-ai-prompting"}),(0,s.jsx)("meta",{property:"og:description",content:"How to prompt and vibe code your way to better responses."}),(0,s.jsx)("meta",{property:"og:image",content:"http://block.github.io/goose/assets/images/prompt-078b12695f95c4f0eac3861a8a2611ef.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,s.jsx)("meta",{name:"twitter:title",content:"AI Prompting 101: How to Get the Best Responses from Your AI Agent"}),(0,s.jsx)("meta",{name:"twitter:description",content:"How to prompt and vibe code your way to better responses."}),(0,s.jsx)("meta",{name:"twitter:image",content:"http://block.github.io/goose/assets/images/prompt-078b12695f95c4f0eac3861a8a2611ef.png"})]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2162:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/politenessprompt-8bde8ee9a219af685f98f45be5977226.png"},1368:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/prompt-078b12695f95c4f0eac3861a8a2611ef.png"},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var n=o(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}},8307:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1853/blog/2025/03/19/better-ai-prompting","source":"@site/blog/2025-03-19-better-ai-prompting/index.md","title":"AI Prompting 101: How to Get the Best Responses from Your AI Agent","description":"How to prompt your AI agent the right way.","date":"2025-03-19T00:00:00.000Z","tags":[],"readingTime":6.845,"hasTruncateMarker":true,"authors":[{"name":"Ebony Louis","title":"Developer Advocate","page":{"permalink":"/goose/pr-preview/pr-1853/blog/authors/ebony"},"socials":{"linkedin":"https://www.linkedin.com/in/ebonylouis/","x":"https://x.com/ebonyjlouis","github":"https://github.com/ebonylouis"},"imageURL":"https://avatars.githubusercontent.com/u/55366651?v=4","key":"ebony"}],"frontMatter":{"title":"AI Prompting 101: How to Get the Best Responses from Your AI Agent","description":"How to prompt your AI agent the right way.","authors":["ebony"]},"unlisted":false,"prevItem":{"title":"How I Use Goose to Plan My Week with Asana and Google Calendar MCPs","permalink":"/goose/pr-preview/pr-1853/blog/2025/03/20/asana-calendar-mcp"},"nextItem":{"title":"How Goose Catches AI Errors with Langfuse","permalink":"/goose/pr-preview/pr-1853/blog/2025/03/18/goose-langfuse"}}')}}]);