"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8148],{6118:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"guides/running-tasks","title":"Running Tasks","description":"When working with the Goose CLI, you can pass files and instructions to the goose run command to execute tasks and workflows. This could be a simple one-liner command or a complex set of instructions stored in a file.","source":"@site/docs/guides/running-tasks.md","sourceDirName":"guides","slug":"/guides/running-tasks","permalink":"/goose/pr-preview/pr-1958/docs/guides/running-tasks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Adjust Tool Output","permalink":"/goose/pr-preview/pr-1958/docs/guides/adjust-tool-output"},"next":{"title":"Using Gooseignore","permalink":"/goose/pr-preview/pr-1958/docs/guides/using-gooseignore"}}');var t=s(4848),o=s(8453);const r={sidebar_position:7},a="Running Tasks",c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Text in the command",id:"text-in-the-command",level:3},{value:"Using an instruction file",id:"using-an-instruction-file",level:3},{value:"With stdin",id:"with-stdin",level:3},{value:"Simple echo pipe",id:"simple-echo-pipe",level:4},{value:"Multi-line instructions",id:"multi-line-instructions",level:4},{value:"Key Features",id:"key-features",level:2},{value:"Interactive Mode",id:"interactive-mode",level:3},{value:"Session Management",id:"session-management",level:3},{value:"Working with Extensions",id:"working-with-extensions",level:3},{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"Running Script Files",id:"running-script-files",level:3},{value:"Quick Commands",id:"quick-commands",level:3},{value:"Development Workflows",id:"development-workflows",level:3},{value:"Combining Options",id:"combining-options",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"running-tasks",children:"Running Tasks"})}),"\n",(0,t.jsxs)(n.p,{children:["When working with the Goose CLI, you can pass files and instructions to the ",(0,t.jsx)(n.code,{children:"goose run"})," command to execute tasks and workflows. This could be a simple one-liner command or a complex set of instructions stored in a file."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"goose run"})," command starts a new session, begins executing using any arguments provided and exits the session automatically once the task is complete."]}),"\n",(0,t.jsxs)(n.p,{children:["There are multiple ways to run tasks with Goose; check out the ",(0,t.jsx)(n.a,{href:"/goose/pr-preview/pr-1958/docs/guides/goose-cli-commands#run-options",children:"list of options"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"text-in-the-command",children:"Text in the command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose run -t "your instructions here"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"-t"})," flag, one is able to pass a text instruction directly to the command. This is great for quick, one-off commands where you do not need an interactive session with Goose. The instructions will be executed, and the session will end. An example usage could be using in a CI/CD pipeline or running alongside other scripts."]}),"\n",(0,t.jsx)(n.h3,{id:"using-an-instruction-file",children:"Using an instruction file"}),"\n",(0,t.jsxs)(n.p,{children:["If you have a complex set of instructions or a workflow that you want to automate, you can store them in a file and pass it to the ",(0,t.jsx)(n.code,{children:"goose run"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"goose run -i instructions.md\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of an instruction file that runs a security audit on project dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"# Dependency Security Audit\n\n1. Analyze project dependencies:\n   - Check package.json and requirements.txt files\n   - List all dependencies with versions\n   - Identify outdated packages\n\n2. Security check:\n   - Run npm audit (for JavaScript packages)\n   - Check for known vulnerabilities in Python packages\n   - Identify dependencies with critical security issues\n\n3. Create an upgrade plan:\n   - List packages requiring immediate updates\n   - Note breaking changes in latest versions\n   - Estimate impact of required updates\n\nSave findings in 'security_audit.md' with severity levels highlighted.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"with-stdin",children:"With stdin"}),"\n",(0,t.jsxs)(n.p,{children:["You can also pass instructions to Goose using standard input via ",(0,t.jsx)(n.code,{children:"-i -"}),". This is useful when you want to pipe commands from another tool or script into Goose."]}),"\n",(0,t.jsx)(n.h4,{id:"simple-echo-pipe",children:"Simple echo pipe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "What is 2+2?" | goose run -i -\n'})}),"\n",(0,t.jsx)(n.h4,{id:"multi-line-instructions",children:"Multi-line instructions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat << EOF | goose run -i -\nPlease help me with these tasks:\n1. Calculate 15% of 85\n2. Convert 32\xb0C to Fahrenheit\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsx)(n.h3,{id:"interactive-mode",children:"Interactive Mode"}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want Goose to exit at the end of the task, you can pass the ",(0,t.jsx)(n.code,{children:"-s"})," or ",(0,t.jsx)(n.code,{children:"--interactive"})," flag to start an interactive session after processing your initial commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"goose run -i instructions.txt -s\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is useful when you want to continue working with Goose after your initial commands are processed."}),"\n",(0,t.jsx)(n.h3,{id:"session-management",children:"Session Management"}),"\n",(0,t.jsx)(n.p,{children:"You can name and manage your sessions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Start a new named session\ngoose run -n my-project -t "initial instructions"\n\n# Resume a previous session\ngoose run -n my-project -r\n'})}),"\n",(0,t.jsx)(n.h3,{id:"working-with-extensions",children:"Working with Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to ensure specific extensions are available when running your task, you can indicate this with arguments. This can be done using the ",(0,t.jsx)(n.code,{children:"--with-extension"})," or ",(0,t.jsx)(n.code,{children:"--with-builtin"})," flags:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using built-in extensions e.g developer and computercontroller extensions"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose run --with-builtin "developer,computercontroller" -t "your instructions"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using custom extensions"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose run --with-extension "ENV1=value1 custom-extension-args" -t "your instructions"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),"\n",(0,t.jsx)(n.h3,{id:"running-script-files",children:"Running Script Files"}),"\n",(0,t.jsxs)(n.p,{children:["Create an instruction file (e.g., ",(0,t.jsx)(n.code,{children:"build-script.txt"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Check the current branch\nRun the test suite\nBuild the documentation\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then run it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"goose run -i build-script.txt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"quick-commands",children:"Quick Commands"}),"\n",(0,t.jsx)(n.p,{children:"For one-off commands, use the text option:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose run -t "Create a CHANGELOG.md entry comparing current git branch with main"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"development-workflows",children:"Development Workflows"}),"\n",(0,t.jsx)(n.p,{children:"Start a session with specific extensions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'goose run --with-builtin "developer,git" -n dev-session -s\n'})}),"\n",(0,t.jsx)(n.h3,{id:"combining-options",children:"Combining Options"}),"\n",(0,t.jsx)(n.p,{children:"You can combine multiple options to create powerful workflows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Complex example combining multiple options\ngoose run \\\n  --with-builtin "developer,git" \\\n  --with-extension "API_KEY=xyz123 custom-tool" \\\n  -n project-setup \\\n  -t "Initialize project" \n'})}),"\n",(0,t.jsx)(n.p,{children:"This command:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Loads the developer and git built-in extensions"}),"\n",(0,t.jsx)(n.li,{children:"Adds a custom extension with an API key"}),"\n",(0,t.jsx)(n.li,{children:'Names the session "project-setup"'}),"\n",(0,t.jsx)(n.li,{children:'Starts with "Initialize project" instruction'}),"\n",(0,t.jsx)(n.li,{children:"Exits automatically after processing the command."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);