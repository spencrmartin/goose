"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6190],{2515:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"tutorials/memory-mcp","title":"Memory Extension","description":"Use Memory MCP Server as a Goose Extension","source":"@site/docs/tutorials/memory-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/memory-mcp","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/memory-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Memory Extension","description":"Use Memory MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Observability with Langfuse","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/langfuse"},"next":{"title":"Puppeteer Extension","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/puppeteer-mcp"}}');var s=o(4848),r=o(8453),i=o(5537),l=o(9329),d=o(5887);const a={title:"Memory Extension",description:"Use Memory MCP Server as a Goose Extension"},c=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Why Use Memory?",id:"why-use-memory",level:2},{value:"Trigger Words and When to Use Them",id:"trigger-words-and-when-to-use-them",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Step 1: Teach Goose Your API Standards",id:"step-1-teach-goose-your-api-standards",level:3},{value:"Goose Prompt #1",id:"goose-prompt-1",level:4},{value:"Goose Output",id:"goose-output",level:4},{value:"Step 2: Use Stored Knowledge to Create a New API Endpoint",id:"step-2-use-stored-knowledge-to-create-a-new-api-endpoint",level:3},{value:"Goose Prompt # 2",id:"goose-prompt--2",level:4},{value:"Goose Output",id:"goose-output-1",level:4}];function m(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{videoUrl:"https://youtube.com/embed/BZ0yrSLXQwk"}),"\n",(0,s.jsx)(n.p,{children:"The Memory extension turns Goose into a knowledgeable assistant by allowing you to teach it personalized key information (e.g. commands, code snippets, preferences and configurations) that it can recall and apply later. Whether it\u2019s project-specific (local) or universal (global) knowledge, Goose learns and remembers what matters most to you."}),"\n",(0,s.jsx)(n.p,{children:"This tutorial covers enabling and using the Memory MCP Server, which is a built-in Goose extension."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure extension is enabled:"}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Built-in Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c6  What type of extension would you like to add?\n// highlight-start    \n\u2502  \u25cf Built-in Extension (Use an extension that comes with Goose)\n// highlight-end  \n\u2502  \u25cb Command-line Extension \n\u2502  \u25cb Remote Extension \n\u2514  \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Arrow down to the ",(0,s.jsx)(n.code,{children:"Memory"})," extension and press Enter"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n\u2502  \u25cb Computer Controller \n// highlight-start\n\u2502  \u25cf Memory \n// highlight-end\n|  \u25cb JetBrains\n\u2514  \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c7  Which built-in extension would you like to enable?\n\u2502  Memory \n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2514  Enabled Memory extension\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Settings"})]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,s.jsx)(n.code,{children:"Memory"})," to on."]}),"\n",(0,s.jsxs)(n.li,{children:["Scroll to the top and click ",(0,s.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"why-use-memory",children:"Why Use Memory?"}),"\n",(0,s.jsx)(n.p,{children:"With the Memory extension, you\u2019re not just storing static notes, you\u2019re teaching Goose how to assist you better. Imagine telling Goose:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"learn everything about MCP servers and save it to memory."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Later, you can ask:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"utilizing our MCP server knowledge help me build an MCP server."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Goose will recall everything you\u2019ve saved as long as you instruct it to remember. This makes it easier to have consistent results when working with Goose."}),"\n",(0,s.jsx)(n.h2,{id:"trigger-words-and-when-to-use-them",children:"Trigger Words and When to Use Them"}),"\n",(0,s.jsx)(n.p,{children:"Goose also recognizes certain trigger words that signal when to store, retrieve, or remove memory."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Trigger Words"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"When to Use"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remember"}),(0,s.jsx)(n.td,{children:"Store useful info for later use"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forget"}),(0,s.jsx)(n.td,{children:"Remove a stored memory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"memory"}),(0,s.jsx)(n.td,{children:"General memory-related actions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"save"}),(0,s.jsx)(n.td,{children:"Save a command, config, or preference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remove memory"}),(0,s.jsx)(n.td,{children:"Delete specific stored data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clear memory"}),(0,s.jsx)(n.td,{children:"Wipe all stored memories"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"search memory"}),(0,s.jsx)(n.td,{children:"Find previously stored data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"find memory"}),(0,s.jsx)(n.td,{children:"Locate specific saved information"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"In this example, I\u2019ll show you how to make Goose a knowledgeable development assistant by teaching it about your project\u2019s API standards. With the Memory extension, Goose can store structured information and recall it when needed, helping you stay consistent in your work."}),"\n",(0,s.jsx)(n.p,{children:"This means you no longer have to repeat yourself. Goose will remember your project\u2019s requirements and automatically apply them to new tasks."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"If you frequently work with API standards or other structured knowledge, Goose may automatically suggest saving them to memory for you when it detects a pattern in your workflow."})]}),"\n",(0,s.jsxs)(i.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a terminal and start a new Goose session:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-1-teach-goose-your-api-standards",children:"Step 1: Teach Goose Your API Standards"}),"\n",(0,s.jsx)(n.h4,{id:"goose-prompt-1",children:"Goose Prompt #1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Goose, learn our API development standards:\n\n- All endpoints must use TypeScript interfaces\n- Error responses follow RFC 7807 Problem Details spec\n- Rate limiting headers are required\n- Authentication uses JWT in Authorization header\n- All endpoints need OpenAPI documentation\n\nRemember this so you can help me follow these practices.\n"})}),"\n",(0,s.jsx)(n.h4,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"I've learned your API standards. I'll help enforce these requirements when working on API endpoints.\n\nStoring in:\n    - Category: development_standards\n    - Tags: #api #typescript #security #documentation\n    - Scope: global (these are general standards)\n\nI can now help with:\n    - API endpoint implementation\n    - Error handling patterns\n    - Authentication flows\n    - Documentation requirements\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-use-stored-knowledge-to-create-a-new-api-endpoint",children:"Step 2: Use Stored Knowledge to Create a New API Endpoint"}),"\n",(0,s.jsx)(n.h4,{id:"goose-prompt--2",children:"Goose Prompt # 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Help me create a new endpoint for user preferences\n"})}),"\n",(0,s.jsx)(n.h4,{id:"goose-output-1",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"I see you need a new endpoint. Based on our API development standards that I have stored in memory, I'll ensure it meets all our requirements.\n\n[.. Checking stored API standards ...]\n\nI've included all our required elements:\n\n\u2705 TypeScript interfaces\n\u2705 RFC 7807 error response format\n\u2705 Rate limiting\n\u2705 JWT auth header\n\u2705 OpenAPI documentation\n\nHere's your compliant endpoint:\n\ninterface UserPreferences {\n    userId: string;\n    theme: 'light' | 'dark';\n    notifications: boolean;\n    timezone: string;\n}\n\ninterface ErrorResponse { \n    type: string;\n    title: string;\n    status: number;\n    detail: string;\n    instance: string;\n}\n\n@Route('/api/users/:userId/preferences')\nclass UserPreferencesController {\n    @Get()\n    @RateLimit(100)  // Adding required rate limiting\n    @OpenAPI({ ... }) // Including mandatory OpenAPI docs\n    async getUserPreferences(\n        @Header('Authorization') token: string,  // JWT auth as per our standard\n        @Param('userId') userId: string\n    ): Promise<UserPreferences | ErrorResponse> {\n        // Implementation following our error handling pattern\n    }\n}\n\nWould you like me to implement the full endpoint logic?\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>r});o(6540);var t=o(2362),s=o(4848);const r=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}}}]);