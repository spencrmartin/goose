"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6646],{126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var i=t(8286),o=t(4848),s=t(8453);const r={draft:!1,title:"Resolving CI Issues with Goose: A Practical Walkthrough",description:"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.",date:new Date("2024-12-11T00:00:00.000Z"),authors:["dalton"]},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"1. Install and Authenticate GitHub CLI (<code>gh</code>)",id:"1-install-and-authenticate-github-cli-gh",level:3},{value:"2. Configure Goose",id:"2-configure-goose",level:3},{value:"Resolving CI Failures with Goose",id:"resolving-ci-failures-with-goose",level:2},{value:"Step 1: Fetch CI Failure Details",id:"step-1-fetch-ci-failure-details",level:3},{value:"Step 2: Request Fixes from Goose",id:"step-2-request-fixes-from-goose",level:3},{value:"Step 3: Review the Changes",id:"step-3-review-the-changes",level:3},{value:"Benefits of Using Goose",id:"benefits-of-using-goose",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"CI",src:t(4954).A+"",width:"1280",height:"720"})}),"\n",(0,o.jsxs)(n.p,{children:["Running into Continuous Integration (CI) failures in pull requests can be quite frustrating but they happen very often. In this post, we leverage the GitHub CLI (",(0,o.jsx)(n.code,{children:"gh"}),") using Goose to simplify your CI debugging process, fetch detailed information about failed CI runs and annotations directly from GitHub, and even apply fixes directly."]}),"\n",(0,o.jsx)(n.admonition,{title:"Goose Beta Version",type:"warning",children:(0,o.jsx)(n.p,{children:"This post was written about a beta version of Goose and the commands and flow may have changed."})}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(n.p,{children:"Before diving in, ensure you have the necessary tools set up."}),"\n",(0,o.jsxs)(n.h3,{id:"1-install-and-authenticate-github-cli-gh",children:["1. Install and Authenticate GitHub CLI (",(0,o.jsx)(n.code,{children:"gh"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["You'll need the ",(0,o.jsx)(n.a,{href:"https://cli.github.com/",children:"GitHub CLI"})," ",(0,o.jsx)(n.code,{children:"gh"})," to enable Goose's access to CI check run details."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"brew install gh\ngh auth login\n"})}),"\n",(0,o.jsx)(n.p,{children:"Follow the prompts to authenticate your account."}),"\n",(0,o.jsx)(n.h3,{id:"2-configure-goose",children:"2. Configure Goose"}),"\n",(0,o.jsx)(n.p,{children:"Ensure Goose is configured and ready to interact with your repository and local tools. Specifically, you will need to configure a goose profile with the GitHub toolkit."}),"\n",(0,o.jsxs)(n.p,{children:["Update your ",(0,o.jsx)(n.code,{children:"profiles.yaml"})," file in ",(0,o.jsx)(n.code,{children:"~/.config/goose"})," with the necessary toolkits:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"my-profile:\n  provider: anthropic\n  processor: claude-3-5-sonnet\n  accelerator: claude-3-5-sonnet\n  moderator: truncate\n  toolkits:\n    - name: developer\n      requires: {}\n    - name: github\n      requires: {}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start a session with the profile:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"goose session start --profile my-profile\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If the profile\u2019s toolkits are not correctly configured, Goose might fail to access ",(0,o.jsx)(n.code,{children:"gh"})," commands."]}),"\n",(0,o.jsx)(n.h2,{id:"resolving-ci-failures-with-goose",children:"Resolving CI Failures with Goose"}),"\n",(0,o.jsx)(n.p,{children:"Once everything is set up, we can now use Goose to tackle CI issues with the following steps:"}),"\n",(0,o.jsx)(n.h3,{id:"step-1-fetch-ci-failure-details",children:"Step 1: Fetch CI Failure Details"}),"\n",(0,o.jsx)(n.p,{children:"Ask Goose to retrieve information about the CI failures for a specific PR."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\nCan you tell me about the CI failures on PR #11111 in the organization/repo repository? The check run ID is 123456.\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can access a check run ID by clicking on a PR\u2019s checks tab and selecting a failure. The ID will be available in the URL."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Goose's Workflow:"})}),"\n",(0,o.jsxs)(n.p,{children:["Goose will use the ",(0,o.jsx)(n.code,{children:"gh"})," CLI to check run information and provide a detailed summary of the issues. Goose uses the GitHub CLI to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fetch details about failed CI runs, including logs and annotations."}),"\n",(0,o.jsx)(n.li,{children:"Provide a clear and actionable summary of issues."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example Command Goose Runs:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-curl",children:'gh api -H "Accept: application/vnd.github+json" /repos/<owner>/<repo>/check-runs/<check-run-id>/annotations\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example Goose Output:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Here are the details for Check Run ID 123456:\n\n**Name**: CI-Build-All  \n**Status**: completed  \n**Conclusion**: failure  \n\n**Annotations Summary:**  \n1. **ModuleA Test Failure**  \n   File: `ModuleATests`  \n   Line: 35  \n   Error: Mismatched parameter order in function call.  \n\n2. **ModuleB Test Failure**  \n   File: `ModuleBTests`  \n   Line: 64  \n   Error: Unexpected nil value encountered during initialization.  \n\n3. **ModuleC Test Failure**  \n   File: `ModuleCTests`  \n   Line: 98  \n   Error: Type mismatch in returned value. Expected 'String', found 'Int'.  \n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-2-request-fixes-from-goose",children:"Step 2: Request Fixes from Goose"}),"\n",(0,o.jsx)(n.p,{children:"Once Goose provides the failure details, ask it to resolve the issues directly."}),"\n",(0,o.jsx)(n.p,{children:"Example Request:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Can you fix these issues and stage the changes so I can review them? Do not add unnecessary code comments.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"What Goose Does:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Applies fixes based on error messages."}),"\n",(0,o.jsx)(n.li,{children:"Stages changes for review."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example Goose Response:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"I have fixed the following files and staged them:\n\n- `ModuleATests`: Corrected the order of parameters in the function call.  \n- `ModuleBTests`: Resolved the unexpected nil value encountered during initialization.  \n- `ModuleCTests`: Adjusted the type mismatch in the returned value.  \n\nYou can now review the staged changes.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-review-the-changes",children:"Step 3: Review the Changes"}),"\n",(0,o.jsx)(n.p,{children:"Carefully review the staged changes to ensure they address the issues correctly and avoid unintended modifications."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Things to Check:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"No unnecessary comments (e.g., // Fix xyz)."}),"\n",(0,o.jsx)(n.li,{children:"No alterations to unrelated parts of the code."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If needed, clean up or re-stage the changes before committing."}),"\n",(0,o.jsx)(n.h2,{id:"benefits-of-using-goose",children:"Benefits of Using Goose"}),"\n",(0,o.jsx)(n.p,{children:"Using Goose to resolve CI issues streamlines your workflow by:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"identifying issues and applying fixes with minimal manual effort."}),"\n",(0,o.jsx)(n.li,{children:"integrating with tools like the GitHub CLI to validate changes."}),"\n",(0,o.jsx)(n.li,{children:"handling repetitive CI debugging tasks while you focus on code quality."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Goose allows you to resolve CI failures efficiently, ensuring confidence in your workflow while reducing the effort required for debugging and testing."}),"\n",(0,o.jsx)(n.p,{children:"Try it out, and let Goose handle the heavy lifting of CI debugging for you!"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("meta",{property:"og:title",content:"Resolving CI Issues with Goose: A Practical Walkthrough"}),(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough"}),(0,o.jsx)("meta",{property:"og:description",content:"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly."}),(0,o.jsx)("meta",{property:"og:image",content:"https://block.github.io/goose/assets/images/goose-github-ci-30930008ab57b0aebae15a03c73a12b5.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,o.jsx)("meta",{name:"twitter:title",content:"Resolving CI Issues with Goose: A Practical Walkthrough"}),(0,o.jsx)("meta",{name:"twitter:description",content:"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly."}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://block.github.io/goose/assets/images/goose-github-ci-30930008ab57b0aebae15a03c73a12b5.png"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4954:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/goose-github-ci-30930008ab57b0aebae15a03c73a12b5.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},8286:e=>{e.exports=JSON.parse('{"permalink":"/goose/pr-preview/pr-1223/blog/2024/12/11/resolving-ci-issues-with-goose-a-practical-walkthrough","source":"@site/blog/2024-12-11-resolving-ci-issues-with-goose-a-practical-walkthrough/index.md","title":"Resolving CI Issues with Goose: A Practical Walkthrough","description":"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.","date":"2024-12-11T00:00:00.000Z","tags":[],"readingTime":3.985,"hasTruncateMarker":true,"authors":[{"name":"Dalton Turner","title":"Software Engineer","page":{"permalink":"/goose/pr-preview/pr-1223/blog/authors/dalton"},"socials":{"github":"https://github.com/dalton-turner"},"imageURL":"https://avatars.githubusercontent.com/u/78099245?v=4","key":"dalton"}],"frontMatter":{"draft":false,"title":"Resolving CI Issues with Goose: A Practical Walkthrough","description":"Leverage Goose to simplify your CI debugging process, fetch detailed information about failed CI runs & annotations directly from GitHub, and even apply fixes directly.","date":"2024-12-11T00:00:00.000Z","authors":["dalton"]},"unlisted":false,"prevItem":{"title":"Introducing codename goose","permalink":"/goose/pr-preview/pr-1223/blog/2025/01/28/introducing-codename-goose"},"nextItem":{"title":"Connecting AI Agents to Your Systems with MCP","permalink":"/goose/pr-preview/pr-1223/blog/2024/12/10/connecting-ai-agents-to-your-systems-with-mcp"}}')}}]);