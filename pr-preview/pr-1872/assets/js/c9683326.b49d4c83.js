"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[3891],{3649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tutorials/cicd","title":"CI/CD Environments","description":"Set up Goose in your CI/CD pipeline to automate tasks","source":"@site/docs/tutorials/cicd.md","sourceDirName":"tutorials","slug":"/tutorials/cicd","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/cicd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CI/CD Environments","description":"Set up Goose in your CI/CD pipeline to automate tasks"},"sidebar":"tutorialSidebar","previous":{"title":"Asana Extension","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/asana-mcp"},"next":{"title":"Computer Controller Extension","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/computer-controller-mcp"}}');var o=t(4848),r=t(8453);t(5537),t(9329);const i={title:"CI/CD Environments",description:"Set up Goose in your CI/CD pipeline to automate tasks"},a=void 0,l={},u=[{value:"Using Goose with GitHub Actions",id:"using-goose-with-github-actions",level:2},{value:"1. Create the Workflow File",id:"1-create-the-workflow-file",level:3},{value:"2. Define the Workflow Triggers and Permissions",id:"2-define-the-workflow-triggers-and-permissions",level:3},{value:"3. Install and Configure Goose",id:"3-install-and-configure-goose",level:3},{value:"4. Gather PR Changes and Prepare Instructions",id:"4-gather-pr-changes-and-prepare-instructions",level:3},{value:"5. Run Goose and Clean Output",id:"5-run-goose-and-clean-output",level:3},{value:"6. Post Comment to PR",id:"6-post-comment-to-pr",level:3},{value:"Security Considerations",id:"security-considerations",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Goose isn\u2019t just useful on your local machine, it can also streamline tasks in CI/CD environments. By integrating Goose into your pipeline, you can automate tasks such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Code reviews"}),"\n",(0,o.jsx)(n.li,{children:"Documentation checks"}),"\n",(0,o.jsx)(n.li,{children:"Build and deployment workflows"}),"\n",(0,o.jsx)(n.li,{children:"Infrastructure and environment management"}),"\n",(0,o.jsx)(n.li,{children:"Rollbacks and recovery processes"}),"\n",(0,o.jsx)(n.li,{children:"Intelligent test execution"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This guide walks you through setting up Goose in your CI/CD pipeline, with a focus on using GitHub Actions for code reviews."}),"\n",(0,o.jsx)(n.h2,{id:"using-goose-with-github-actions",children:"Using Goose with GitHub Actions"}),"\n",(0,o.jsx)(n.p,{children:"You can run Goose directly within GitHub Actions. Follow these steps to set up your workflow."}),"\n",(0,o.jsx)(n.admonition,{title:"TLDR",type:"info",children:(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Copy the GitHub Workflow"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="goose.yml"',children:'\nname: Goose\n\non:\n   pull_request:\n      types: [opened, synchronize, reopened, labeled]\n\npermissions:\n   contents: write\n   pull-requests: write\n   issues: write\n\nenv:\n   PROVIDER_API_KEY: ${{ secrets.REPLACE_WITH_PROVIDER_API_KEY }}\n   PR_NUMBER: ${{ github.event.pull_request.number }}\n\njobs:\n   goose-comment:\n      runs-on: ubuntu-latest\n\n      steps:\n            - name: Check out repository\n            uses: actions/checkout@v4\n            with:\n                  fetch-depth: 0\n\n            - name: Gather PR information\n            run: |\n                  {\n                  echo "# Files Changed"\n                  gh pr view $PR_NUMBER --json files \\\n                     -q \'.files[] | "* " + .path + " (" + (.additions|tostring) + " additions, " + (.deletions|tostring) + " deletions)"\'\n                  echo ""\n                  echo "# Changes Summary"\n                  gh pr diff $PR_NUMBER\n                  } > changes.txt\n\n            - name: Install Goose CLI\n            run: |\n                  mkdir -p /home/runner/.local/bin\n                  curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh \\\n                  | CONFIGURE=false INSTALL_PATH=/home/runner/.local/bin bash\n                  echo "/home/runner/.local/bin" >> $GITHUB_PATH\n\n            - name: Configure Goose\n            run: |\n                  mkdir -p ~/.config/goose\n                  cat <<EOF > ~/.config/goose/config.yaml\n                  GOOSE_PROVIDER: REPLACE_WITH_PROVIDER\n                  GOOSE_MODEL: REPLACE_WITH_MODEL\n                  keyring: false\n                  EOF\n\n            - name: Create instructions for Goose\n            run: |\n                  cat <<EOF > instructions.txt\n                  Create a summary of the changes provided. Don\'t provide any session or logging details.\n                  The summary for each file should be brief and structured as:\n                  <filename/path (wrapped in backticks)>\n                     - dot points of changes\n                  You don\'t need any extensions, don\'t mention extensions at all.\n                  The changes to summarise are:\n                  $(cat changes.txt)\n                  EOF\n\n            - name: Test\n            run: cat instructions.txt\n\n            - name: Run Goose and filter output\n            run: |\n                  goose run --instructions instructions.txt | \\\n                  # Remove ANSI color codes\n                  sed -E \'s/\\x1B\\[[0-9;]*[mK]//g\' | \\\n                  # Remove session/logging lines\n                  grep -v "logging to /home/runner/.config/goose/sessions/" | \\\n                  grep -v "^starting session" | \\\n                  grep -v "^Closing session" | \\\n                  # Trim trailing whitespace\n                  sed \'s/[[:space:]]*$//\' \\\n                  > pr_comment.txt\n\n            - name: Post comment to PR\n            run: |\n                  cat -A pr_comment.txt\n                  gh pr comment $PR_NUMBER --body-file pr_comment.txt\n'})})]})}),"\n",(0,o.jsx)(n.h3,{id:"1-create-the-workflow-file",children:"1. Create the Workflow File"}),"\n",(0,o.jsxs)(n.p,{children:["Create a new file in your repository at ",(0,o.jsx)(n.code,{children:".github/workflows/goose.yml"}),". This will contain your GitHub Actions workflow."]}),"\n",(0,o.jsx)(n.h3,{id:"2-define-the-workflow-triggers-and-permissions",children:"2. Define the Workflow Triggers and Permissions"}),"\n",(0,o.jsx)(n.p,{children:"Configure the action such that it:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Triggers the workflow when a pull request is opened, updated, reopened, or labeled"}),"\n",(0,o.jsx)(n.li,{children:"Grants the necessary permissions for Goose to interact with the repository"}),"\n",(0,o.jsx)(n.li,{children:"Configures environment variables for your chosen LLM provider"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"name: Goose\n\non:\n    pull_request:\n        types: [opened, synchronize, reopened, labeled]\n\npermissions:\n    contents: write\n    pull-requests: write\n    issues: write\n\nenv:\n   PROVIDER_API_KEY: ${{ secrets.REPLACE_WITH_PROVIDER_API_KEY }}\n   PR_NUMBER: ${{ github.event.pull_request.number }}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-install-and-configure-goose",children:"3. Install and Configure Goose"}),"\n",(0,o.jsx)(n.p,{children:"To install and set up Goose in your workflow, add the following steps:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'steps:\n    - name: Install Goose CLI\n      run: |\n          mkdir -p /home/runner/.local/bin\n          curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh \\\n            | CONFIGURE=false INSTALL_PATH=/home/runner/.local/bin bash\n          echo "/home/runner/.local/bin" >> $GITHUB_PATH\n\n    - name: Configure Goose\n      run: |\n          mkdir -p ~/.config/goose\n          cat <<EOF > ~/.config/goose/config.yaml\n          GOOSE_PROVIDER: REPLACE_WITH_PROVIDER\n          GOOSE_MODEL: REPLACE_WITH_MODEL\n          keyring: false\n          EOF\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"Replacements",type:"info",children:(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"REPLACE_WITH_PROVIDER"})," and ",(0,o.jsx)(n.code,{children:"REPLACE_WITH_MODEL"})," with your LLM provider and model names and add any other necessary configuration required."]})}),"\n",(0,o.jsx)(n.h3,{id:"4-gather-pr-changes-and-prepare-instructions",children:"4. Gather PR Changes and Prepare Instructions"}),"\n",(0,o.jsx)(n.p,{children:"This step extracts pull request details and formats them into structured instructions for Goose."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"    - name: Create instructions for Goose\n      run: |\n          cat <<EOF > instructions.txt\n          Create a summary of the changes provided. Don't provide any session or logging details.\n          The summary for each file should be brief and structured as:\n            <filename/path (wrapped in backticks)>\n              - dot points of changes\n          You don't need any extensions, don't mention extensions at all.\n          The changes to summarise are:\n          $(cat changes.txt)\n          EOF\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5-run-goose-and-clean-output",children:"5. Run Goose and Clean Output"}),"\n",(0,o.jsx)(n.p,{children:"Now, run Goose with the formatted instructions and clean the output by removing ANSI color codes and unnecessary log messages."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'    - name: Run Goose and filter output\n      run: |\n          goose run --instructions instructions.txt | \\\n            # Remove ANSI color codes\n            sed -E \'s/\\x1B\\[[0-9;]*[mK]//g\' | \\\n            # Remove session/logging lines\n            grep -v "logging to /home/runner/.config/goose/sessions/" | \\\n            grep -v "^starting session" | \\\n            grep -v "^Closing session" | \\\n            # Trim trailing whitespace\n            sed \'s/[[:space:]]*$//\' \\\n            > pr_comment.txt\n'})}),"\n",(0,o.jsx)(n.h3,{id:"6-post-comment-to-pr",children:"6. Post Comment to PR"}),"\n",(0,o.jsx)(n.p,{children:"Finally, post the Goose output as a comment on the pull request:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"    - name: Post comment to PR\n      run: |\n          cat -A pr_comment.txt\n          gh pr comment $PR_NUMBER --body-file pr_comment.txt\n"})}),"\n",(0,o.jsx)(n.p,{children:"With this workflow, Goose will run on pull requests, analyze the changes, and post a summary as a comment on the PR."}),"\n",(0,o.jsx)(n.p,{children:"This is just one example of what's possible. Feel free to modify your GitHub Action to meet your needs."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,o.jsx)(n.p,{children:"When running Goose in a CI/CD enviroment, keep these security practices in mind:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Secret Management"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Store your sensitive credentials (like API keys) as GitHub Secrets."}),"\n",(0,o.jsx)(n.li,{children:"Never expose these credentials in logs or PR comments."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Principle of Least Privilege"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Grant only the necessary permissions in your workflow and regularly audit them."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Input Validation"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ensure any inputs passed to Goose are sanitized and validated to prevent unexpected behavior."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>j});var s=t(6540),o=t(4164),r=t(5627),i=t(6347),a=t(372),l=t(604),u=t(1861),c=t(8749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:o}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),x=(()=>{const e=u??g;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==s&&(u(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);