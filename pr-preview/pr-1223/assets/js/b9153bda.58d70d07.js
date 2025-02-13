"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8848],{4435:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/using-goosehints","title":"Using Goosehints","description":".goosehints is a text file used to provide additional context about your project and improve the communication with Goose. The use of goosehints ensures that Goose understands your requirements better and can execute tasks more effectively.","source":"@site/docs/guides/using-goosehints.md","sourceDirName":"guides","slug":"/guides/using-goosehints","permalink":"/goose/pr-preview/pr-1223/docs/guides/using-goosehints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Using Goosehints","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"CLI Commands","permalink":"/goose/pr-preview/pr-1223/docs/guides/goose-cli-commands"},"next":{"title":"LLM Rate Limits","permalink":"/goose/pr-preview/pr-1223/docs/guides/handling-llm-rate-limits-with-goose"}}');var i=o(4848),t=o(8453);const r={title:"Using Goosehints",sidebar_position:3},l="Providing Hints to Goose",a={},c=[{value:"Creating your hints file",id:"creating-your-hints-file",level:2},{value:"Setting up hints",id:"setting-up-hints",level:2},{value:"Example global <code>.goosehints</code> file",id:"example-global-goosehints-file",level:3},{value:"Example local <code>.goosehints</code> file",id:"example-local-goosehints-file",level:3},{value:"Common use cases",id:"common-use-cases",level:2},{value:"Best practices",id:"best-practices",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"providing-hints-to-goose",children:"Providing Hints to Goose"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:".goosehints"})," is a text file used to provide additional context about your project and improve the communication with Goose. The use of ",(0,i.jsx)(s.code,{children:"goosehints"})," ensures that Goose understands your requirements better and can execute tasks more effectively."]}),"\n",(0,i.jsx)(s.admonition,{title:"Developer extension required",type:"info",children:(0,i.jsxs)(s.p,{children:["To make use of the hints file, you need to have the ",(0,i.jsx)(s.code,{children:"Developer"})," extension ",(0,i.jsx)(s.a,{href:"/docs/getting-started/using-extensions",children:"enabled"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:["This guide will walk you through creating and using your ",(0,i.jsx)(s.code,{children:".goosehints"})," file to streamline your workflow with custom instructions and context."]}),"\n",(0,i.jsx)(s.h2,{id:"creating-your-hints-file",children:"Creating your hints file"}),"\n",(0,i.jsx)(s.p,{children:"Goose supports two types of hint files:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Global hints file"})," - Create a ",(0,i.jsx)(s.code,{children:".goosehints"})," file in ",(0,i.jsx)(s.code,{children:"~/.config/goose"}),". These hints will apply to all your sessions with Goose, regardless of directory."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Local hints file"})," -  Create a ",(0,i.jsx)(s.code,{children:".goosehints"})," file at the root of your project directory. These hints will only apply when working in that specific directory."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"You can use both global and local hints at the same time. When both exist, Goose will consider both your global preferences and project-specific requirements. If the instructions in your local hints file conflict with your global preferences, Goose will prioritize the local hints."})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".goosehints"})," file can include any instructions or contextual details relevant to your projects."]}),"\n",(0,i.jsxs)(s.p,{children:["A good time to consider adding a ",(0,i.jsx)(s.code,{children:".goosehints"})," file is when you find yourself repeating prompts, or providing the same kind of instructions multiple times. It's also a great way to provide a lot of context which might be better suited in a file."]}),"\n",(0,i.jsx)(s.h2,{id:"setting-up-hints",children:"Setting up hints"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".goosehints"})," file supports natural language."]}),"\n",(0,i.jsxs)(s.h3,{id:"example-global-goosehints-file",children:["Example global ",(0,i.jsx)(s.code,{children:".goosehints"})," file"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Always use TypeScript for new Next.js projects.\n\nFollow the [Google Style Guide](https://google.github.io/styleguide/pyguide.html) for Python code.\n\nRun unit tests before committing any changes.\n\nPrefer functional programming patterns where applicable.\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"example-local-goosehints-file",children:["Example local ",(0,i.jsx)(s.code,{children:".goosehints"})," file"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"This is a simple example JavaScript web application that uses the Express.js framework. View [Express documentation](https://expressjs.com/) for extended guidance.\n\nGo through the README.md for information on how to build and test it as needed.\n\nMake sure to confirm all changes with me before applying.\n\nRun tests with `npm run test` ideally after each change.\n"})}),"\n",(0,i.jsx)(s.h2,{id:"common-use-cases",children:"Common use cases"}),"\n",(0,i.jsx)(s.p,{children:"Here are some ways people have used hints to provide additional context to Goose:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Decision-Making"}),": Specify if Goose should autonomously make changes or confirm actions with you first."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Validation Routines"}),": Provide test cases or validation methods that Goose should perform to ensure changes meet project specifications."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Feedback Loop"}),": Include steps that allow Goose to receive feedback and iteratively improve its suggestions."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Point to more detailed documentation"}),": Indicate important files like ",(0,i.jsx)(s.code,{children:"README.md"}),", ",(0,i.jsx)(s.code,{children:"CONTRIBUTING.md"}),", or others that Goose should consult for detailed explanations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Like prompts, this is not an extensive list to shape your ",(0,i.jsx)(s.code,{children:".goosehints"})," file. You can include as much context as you need."]}),"\n",(0,i.jsx)(s.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Keep file updated"}),": Regularly update the ",(0,i.jsx)(s.code,{children:".goosehints"})," file to reflect any changes in project protocols or priorities."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Be concise"}),": Make sure the content is straightforward and to the point, ensuring Goose can quickly parse and act on the information."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Start small"}),": Create a small set of clear, specific hints and gradually expand them based on your needs. This makes it easier to understand how Goose interprets and applies your instructions."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>l});var n=o(6540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);