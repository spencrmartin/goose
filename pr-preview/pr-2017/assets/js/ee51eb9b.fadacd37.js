"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9951],{2356:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tutorials/developer-mcp","title":"Developer Extension","description":"Use Developer MCP Server as a Goose Extension","source":"@site/docs/tutorials/developer-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/developer-mcp","permalink":"/goose/pr-preview/pr-2017/docs/tutorials/developer-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Developer Extension","description":"Use Developer MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Computer Controller Extension","permalink":"/goose/pr-preview/pr-2017/docs/tutorials/computer-controller-mcp"},"next":{"title":"Fetch Extension","permalink":"/goose/pr-preview/pr-2017/docs/tutorials/fetch-mcp"}}');var t=s(4848),i=s(8453),r=s(5537),l=s(9329),a=s(5887);const d={title:"Developer Extension",description:"Use Developer MCP Server as a Goose Extension"},c=void 0,p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{videoUrl:"https://www.youtube.com/embed/on_p-LeIrak"}),"\n",(0,t.jsx)(n.p,{children:"The Developer extension allows Goose to automate developer-centric tasks such as file editing, shell command execution, and project setup."}),"\n",(0,t.jsx)(n.p,{children:"This tutorial will cover enabling and using the Developer MCP Server, which is a built-in Goose extension."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The Developer extension is already enabled by default when Goose is installed."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure extension is enabled:"}),"\n"]}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Choose to ",(0,t.jsx)(n.code,{children:"Toggle Extensions"})]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Toggle Extensions \n\u2502\n\u25c6  Enable extensions: (use "space" to toggle and "enter" to submit)\n// highlight-start    \n\u2502  \u25cf developer\n// highlight-end  \n\u2514  Extension settings updated successfully\n'})})]}),(0,t.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,t.jsx)(n.code,{children:"Developer"})," to on."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.p,{children:"In this example, I'm going to have Goose automate setting up my JavaScript developer environment with Express, Mongoose, Nodemon, Dotenv and initialize Git."}),"\n",(0,t.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,t.jsx)(n.p,{children:"Anthropic's Claude 3.5 Sonnet was used for this task."})}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a terminal and start a new Goose session:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,t.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]})})]}),"\n",(0,t.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set up a new JavaScript project with Express, Mongoose, Nodemon, and Dotenv? Fetch the latest package versions, generate a README with those versions, and initialize Git\n"})}),"\n",(0,t.jsx)(n.p,{children:"After 1 minute, Goose was done setting up my entire dev environment! \ud83c\udf89"}),"\n",(0,t.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:'I\'ll help you set up a new JavaScript project with those dependencies. I\'ll break this down into steps:\n\n1. First, let\'s create a new directory and initialize the project\n2. Then install the dependencies\n3. Create a detailed README\n4. Initialize git\n5. Create some starter files\n6. Let\'s begin:\n\n[... shell commands, files created ...]\n\nGreat! I\'ve set up a complete Express project with MongoDB and Dotenv integrations:\n\n1. Created a new project directory and initialized npm\n2. Installed Express, Mongoose, and dotenv dependencies\n3. set up the basic project structure with directories for:\n    - config/\n    - models/\n    - routes/ \n    - controllers/\n4. Created essential files:\n    - index.js (main server file)\n    - .env (environment variables)\n    - .ignore (with common node.js ignores)\n5. Added a basic user model with basic name and email fields\n6. Created a user controller with two methods:\n    - getUsers (GET all users)\n    - createUser (POST new user)\n7. Added user routes under `/api/routes`\n8. Updated package.json with start scripts\n9. Created a comprehensive README.md with:\n    - Installation scripts\n    - Project structure\n    - Available scripts\n    - Environment variables \n    - Latest package versions\n\nThe project structure is:\n\nmy-express-app/\n\u251c\u2500\u2500 config/         # Configuration files\n\u251c\u2500\u2500 models/        # MongoDB models\n\u2502   \u2514\u2500\u2500 User.js    # User model\n\u251c\u2500\u2500 routes/        # API routes\n\u2502   \u2514\u2500\u2500 userRoutes.js\n\u251c\u2500\u2500 controllers/   # Route controllers\n\u2502   \u2514\u2500\u2500 userController.js\n\u251c\u2500\u2500 .env           # Environment variables\n\u251c\u2500\u2500 .gitignore     # Git ignore file\n\u251c\u2500\u2500 index.js       # Entry point\n\u2514\u2500\u2500 package.json   # Project dependencies and scripts\n\nTo start developing you can:\n\n1. Run `npm install` to install dependencies\n2. start the server with `npm run dev` \n\nThe API will be available at:\n    - `http://localhost:3000/api/users` (GET to get all users)\n    - `http://localhost:3000/api/users` (POST to create a new user)\n\nTo test out the API you can use tools like postman or curl, for example, to create a new user:\n\ncurl x POST http://localhost:3000/api/users \\\n-H "Content-Type: application/json" \\\n-d \'{"name": "Ebony Louis" , "email": "ebony@example.com"}\'\n\nWould you like me to add any additional features or make other improvements to the setup?\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5887:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var o=s(2362),t=s(4848);const i=e=>{let{videoUrl:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Watch the demo"}),(0,t.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,t.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,t.jsx)("hr",{})]})}}}]);