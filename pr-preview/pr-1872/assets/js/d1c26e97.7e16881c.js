"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7590],{3521:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tutorials/knowledge-graph-mcp","title":"Knowledge Graph Memory Extension","description":"Add Knowledge Graph Memory MCP Server as a Goose Extension","source":"@site/docs/tutorials/knowledge-graph-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/knowledge-graph-mcp","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/knowledge-graph-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Knowledge Graph Memory Extension","description":"Add Knowledge Graph Memory MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"JetBrains Extension","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/jetbrains-mcp"},"next":{"title":"Observability with Langfuse","permalink":"/goose/pr-preview/pr-1872/docs/tutorials/langfuse"}}');var t=o(4848),i=o(8453),r=o(5537),a=o(9329),l=o(5887);const d={title:"Knowledge Graph Memory Extension",description:"Add Knowledge Graph Memory MCP Server as a Goose Extension"},c=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Step 1: Teach Goose About Security Patterns",id:"step-1-teach-goose-about-security-patterns",level:3},{value:"Goose Prompt #1",id:"goose-prompt-1",level:4},{value:"Goose Output",id:"goose-output",level:4},{value:"Step 2:  Use Connected Knowledge for Code Review",id:"step-2--use-connected-knowledge-for-code-review",level:3},{value:"Goose Prompt # 2",id:"goose-prompt--2",level:4},{value:"Goose Output",id:"goose-output-1",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{videoUrl:"https://www.youtube.com/embed/PF6hpDaI9Mc"}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/memory",children:"Knowledge Graph Memory MCP Server"})," as a Goose extension. This enables Goose to analyze relationships, detect patterns, and gain a deeper understanding of your data. The knowledge graph builds on the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/memory-mcp",children:"memory extension"})," by mapping complex relationships between concepts and providing persistent memory across Goose sessions."]}),"\n",(0,t.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Command"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx -y @modelcontextprotocol/server-memory\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Note that you'll need ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,t.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,t.jsxs)(r.A,{groupId:"interface",children:[(0,t.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Choose to add a ",(0,t.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  knowledge graph memory\n  // highlight-end\n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  knowledge graph memory\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @modelcontextprotocol/server-memory\n  // highlight-end\n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  knowledge graph memory\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @modelcontextprotocol/server-memory\n \u2502\n // highlight-start\n \u25c6  Please set the timeout for this tool (in secs):\n \u2502  300\n // highlight-end\n \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Choose No when asked to add environment variables"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  knowledge graph memory\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @modelcontextprotocol/server-memory\n \u2502\n \u25c7  Please set the timeout for this tool (in secs):\n \u2502  300\n \u2502    \n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  No \n \u2502\n // highlight-end\n \u2514  Added knowledge graph memory extension\n"})})]}),(0,t.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40modelcontextprotocol%2Fserver-memory&id=knowledge_graph_memory&name=Knowledge%20Graph%20Memory&description=Graph-based%20memory%20system%20for%20persistent%20knowledge%20storage",children:"Launch the installer"})}),"\n",(0,t.jsxs)(n.li,{children:["Press ",(0,t.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll to the top and click ",(0,t.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.p,{children:"In this example, I'll show you how Goose can become an intelligent security reviewer by using connected knowledge patterns to detect and analyze vulnerabilities. Goose will be able to understand the relationship between security issues, their impacts, and mitigations."}),"\n",(0,t.jsx)(n.p,{children:"This means Goose doesn't just spot issues - it understands how vulnerabilities connect to real world impacts and can suggest comprehensive solutions."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-teach-goose-about-security-patterns",children:"Step 1: Teach Goose About Security Patterns"}),"\n",(0,t.jsx)(n.h4,{id:"goose-prompt-1",children:"Goose Prompt #1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"goose, learn these security vulnerability patterns and their relationships:\n\n1. SQL Injection relates to:\n\n    - Unvalidated database inputs\n    - Data theft risks\n    - Parameterized query solutions\n    \n2. XSS Vulnerabilities connect to:\n\n    - Unescaped user output\n    - Session hijacking risks\n    - Content sanitization fixes\n\n3.Authentication Weaknesses link to:\n\n    - Session management\n    - Account compromise\n    - JWT-based solutions\n"})}),"\n",(0,t.jsx)(n.h4,{id:"goose-output",children:"Goose Output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"I'll store this security knowledge in the Knowledge Graph Memory with proper entities and relationships\n\n[.... Create Entities .....]\n\nNow, let's create the relationships between these security concepts:\n\n[.... Create Relations .....]\n\nLet me verify what's been stored:\n\n[... Read Graph ...]\n\nI've now stored your security knowledge in the graph with:\n\n1. Vulnerability Entities:\n\n    - SQL Injection (with observations about unvalidated inputs and data theft)\n    - XSS Vulnerabilities (with observations about unescaped output and session risks)\n    - Authentication Weaknesses (with observations about session management)\n\n2. Solution Entities:\n\n    - Parameterized Queries\n    - Content Sanitization\n    - JWT Authentication\n    \n3. Connected Relationships:\n\n    - Vulnerabilities \u2192 their potential impacts\n    - Solutions \u2192 the vulnerabilities they mitigate\n\nThe knowledge is now structured in a way that I can:\n\n    - Trace vulnerability impact chains\n    - Identify appropriate solutions for each vulnerability\n    - Understand how different security issues are related\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2--use-connected-knowledge-for-code-review",children:"Step 2:  Use Connected Knowledge for Code Review"}),"\n",(0,t.jsx)(n.h4,{id:"goose-prompt--2",children:"Goose Prompt # 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Review this API endpoint for security issues:\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post('/api/login', (req, res) => {\n    const { username, password } = req.body;\n    const query = `SELECT * FROM users WHERE username = '${username}'`;\n    db.query(query, (err, result) => {\n        if (err) throw err;\n        if (result.length > 0) {\n        res.cookie('user', username);\n        res.json({ success: true });\n        }\n    });\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"goose-output-1",children:"Goose Output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"I'll analyze this code using our connected knowledge graph to trace security vulnerabilities and their implications:\n\n[.... Search Nodes ... Open Nodes ...]\n\nBased on our knowledge graph analysis, I've found multiple critical security issues:\n\n1. SQL Injection Vulnerability:\n    - Issue: Using string concatenation in query WHERE username = '${username}'\n    - Impact Chain: SQL Injection \u2192 Data Theft\n    - Risk Level: Critical\n    - Solution (from parameterized_queries): Use parameterized queries instead\n\n2. Authentication Weakness:\n    - Issue: Using basic cookie-based session res.cookie('user', username)\n    - Impact Chain: Auth Weakness \u2192 Account Compromise\n    - Risk Level: High\n    - Solution (from jwt_auth): Implement JWT with proper expiration\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Here's the secure implementation based on our stored patterns:\n\napp.post('/api/login', async (req, res) => {\n    try {\n        // Input validation\n        if (!req.body.username || !req.body.password) {\n        return res.status(400).json({\n            success: false,\n            error: 'Username and password required'\n        });\n        }\n\n        // Parameterized query (prevents SQL injection)\n        const query = 'SELECT * FROM users WHERE username = ?';\n        const result = await db.query(query, [req.body.username]);\n\n        if (!result.length) {\n        return res.status(401).json({\n            success: false,\n            error: 'Invalid credentials'\n        });\n        }\n\n        // Password verification would go here\n        // const validPassword = await bcrypt.compare(req.body.password, result[0].password);\n\n        // JWT-based session management (prevents session hijacking)\n        const token = jwt.sign(\n        { userId: result[0].id },\n        process.env.JWT_SECRET,\n        { expiresIn: '1h' }\n        );\n\n        res.json({\n        success: true,\n        token: token\n        });\n\n    } catch (error) {\n        res.status(500).json({\n        success: false,\n        error: 'Internal server error'\n        });\n    }\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" The fixes address the vulnerability chains our knowledge graph identified:\n\n     1. SQL Injection \u2192 Data Theft: Mitigated by parameterized queries\n     2. Auth Weakness \u2192 Account Compromise: Mitigated by JWT implementation\n \n Additional security improvements based on connected patterns:\n\n     - Added input validation\n     - Proper error handling\n     - No exposure of internal errors\n     - Token-based instead of cookie-based auth\n     - Expiration time on authentication\n \n Would you like me to:\n\n     1. Explain any of these security relationships in more detail?\n     2. Show how to implement additional security patterns?\n     3. Analyze another endpoint?\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var s=o(2362),t=o(4848);const i=e=>{let{videoUrl:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Watch the demo"}),(0,t.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,t.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,t.jsx)("hr",{})]})}}}]);