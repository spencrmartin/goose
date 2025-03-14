"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6062],{2279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"tutorials/filesystem-mcp","title":"Filesystem Extension","description":"Add Filesystem MCP Server as Goose Extension","source":"@site/docs/tutorials/filesystem-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/filesystem-mcp","permalink":"/goose/pr-preview/pr-1671/docs/tutorials/filesystem-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Filesystem Extension","description":"Add Filesystem MCP Server as Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Figma Extension","permalink":"/goose/pr-preview/pr-1671/docs/tutorials/figma-mcp"},"next":{"title":"GitHub Extension","permalink":"/goose/pr-preview/pr-1671/docs/tutorials/github-mcp"}}');var s=t(4848),o=t(8453),r=t(5537),a=t(9329);t(5887);const l={title:"Filesystem Extension",description:"Add Filesystem MCP Server as Goose Extension"},d=void 0,c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/HEAD/src/filesystem",children:"Filesystem MCP server"})," as a Goose extension, enabling powerful code analysis and file management. With this extension, Goose can analyze project structures, edit and organize files, detect unused dependencies, and generate documentation to improve software maintainability."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx -y @modelcontextprotocol/server-filesystem </path/to/allowed/directory>\n"})}),(0,s.jsx)(n.p,{children:"You can specify multiple allowed directories by separating them with a space."})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this commands, as is uses ",(0,s.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"    \u250c   goose-configure \n    \u2502\n    \u25c7  What would you like to configure?\n    \u2502  Add Extension \n    \u2502\n    \u25c6  What type of extension would you like to add?\n    \u2502  \u25cb Built-in Extension \n    // highlight-start    \n    \u2502  \u25cf Command-line Extension (Run a local command or script)\n    // highlight-end    \n    \u2502  \u25cb Remote Extension \n    \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"    \u250c   goose-configure \n    \u2502\n    \u25c7  What would you like to configure?\n    \u2502  Add Extension \n    \u2502\n    \u25c7  What type of extension would you like to add?\n    \u2502  Command-line Extension \n    \u2502\n    // highlight-start\n    \u25c6  What would you like to call this extension?\n    \u2502  filesystem\n    // highlight-end\n    \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"    \u250c   goose-configure \n    \u2502\n    \u25c7  What would you like to configure?\n    \u2502  Add Extension \n    \u2502\n    \u25c7  What type of extension would you like to add?\n    \u2502  Command-line Extension \n    \u2502\n    \u25c7  What would you like to call this extension?\n    \u2502  filesystem\n    \u2502\n    // highlight-start\n    \u25c6  What command should be run?\n    \u2502  npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/directory\n    // highlight-end\n    \u2514 \n"})}),(0,s.jsx)(n.admonition,{title:"Multiple Directories",type:"tip",children:(0,s.jsx)(n.p,{children:"You can specify multiple allowed directories by separating them with a space."})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"    \u250c   goose-configure \n    \u2502\n    \u25c7  What would you like to configure?\n    \u2502  Add Extension \n    \u2502\n    \u25c7  What type of extension would you like to add?\n    \u2502  Command-line Extension \n    \u2502\n    \u25c7  What would you like to call this extension?\n    \u2502  filesystem\n    \u2502\n    \u25c7  What command should be run?\n    \u2502  npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/directory\n    \u2502\n    // highlight-start\n    \u25c6  Please set the timeout for this tool (in secs):\n    \u2502  300\n    // highlight-end\n    \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Choose No when asked to add environment variables"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"    \u250c   goose-configure \n    \u2502\n    \u25c7  What would you like to configure?\n    \u2502  Add Extension \n    \u2502\n    \u25c7  What type of extension would you like to add?\n    \u2502  Command-line Extension \n    \u2502\n    \u25c7  What would you like to call this extension?\n    \u2502  filesystem\n    \u2502\n    \u25c7  What command should be run?\n    \u2502  npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/directory\n    \u2502\n    \u25c7  Please set the timeout for this tool (in secs):\n    \u2502  300\n    \u2502    \n    // highlight-start\n    \u25c6  Would you like to add environment variables?\n    \u2502  No \n    \u2502\n    // highlight-end\n    \u2514  Added filesystem extension\n"})})]}),(0,s.jsxs)(a.A,{value:"ui",label:"Goose Desktop",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40modelcontextprotocol%2Fserver-filesystem&id=filesystem&name=Filesystem&description=Filesystem%20access%20server&env=FILESYSTEM_ALLOWED_DIRS",children:"Launch the installer"})}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,s.jsxs)(n.li,{children:["Scroll to the top and click ",(0,s.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]}),(0,s.jsx)(n.admonition,{title:"Multiple Directories",type:"tip",children:(0,s.jsx)(n.p,{children:"You can specify multiple directories by separating them with a space."})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"In this example, I'll use Goose to perform a comprehensive security audit across multiple projects, including a payment processing system, authentication service, and e-commerce dashboard. I need to identify security vulnerabilities, implement fixes, and ensure sensitive data and operations are properly protected."}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hey Goose, I need to perform a security audit and implement fixes across multiple projects:\n\n    1. Please analyze these codebases for security issues:\n        - /Users/ebonyl/e-commerce-dashboard\n        - /Users/ebonyl/client-projects/payment-system\n        - /Users/ebonyl/internal/auth-service\n\n    2. Look for:\n        - Hardcoded credentials (API keys, passwords, secrets)\n        - Insecure cryptographic practices (weak hashing, encryption)\n        - SQL injection vulnerabilities\n        - Exposed configuration files\n        - Insecure session handling\n        - Logging of sensitive data\n        - Outdated dependencies in package.json\n        - Unsafe authentication methods\n\n    3. For each vulnerability found:\n        - Show me the problematic code\n        - Explain the security risk\n        - Provide a secure implementation\n        - Help me apply and test the fixes\n\n    4. Create a detailed security report including:\n        - Critical findings by project\n        - Risk severity levels\n        - Exact file locations and snippets\n        - Applied fixes and improvements\n        - Verification steps taken\n\nPlease focus particularly on the payment system and authentication service as they handle sensitive data.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"I'll help you conduct the security audit, starting with the payment system project since it handles sensitive financial data. Let me first check if we have access to these directories.\n\n--- List Allowed Directories ---\n\nGreat, we have access to all the required directories. Let's start with the payment system project. First, I'll analyze its structure and files.\n\n--- Directory Tree ---\n\nLet's start by examining the key files for security issues. I'll first check the configuration and main payment processing files for potential vulnerabilities.\n\n--- Read Multiple Files ---\n\nI've identified several critical security vulnerabilities in the payment system. Let's address them one by one:\n\n1. Hardcoded Credentials (CRITICAL)\n\nLocation: Both config/production.js and payment.js Risk: Exposed sensitive credentials in source code can lead to unauthorized access.\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JS",children:"   // Current (Unsafe):\nconst STRIPE_SECRET = 'sk_live_abcdef123456';\nconst AWS_KEY = 'AKIA12345EXAMPLE';\n\n// Recommended Fix:\nconst STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;\nconst AWS_KEY = process.env.AWS_ACCESS_KEY_ID;\nLet's create a secure environment configuration:\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Let's create a new secure version of the payment processor:\n\n--- Write File ---\n\nLet's also update the package.json to fix vulnerable dependencies:\n\n--- Read File ---\n\nLet's update the dependencies to their latest secure versions:\n\n--- Write File ---\n\nSecurity Report for Payment System\nCritical Findings\n\n1. Hardcoded Credentials (CRITICAL)\n    - Multiple sensitive credentials in source code\n    - Fixed by implementing environment variables\n    - Added .env.example template\n    \n2. Insecure Cryptographic Implementation (HIGH)\n    - Weak encryption key\n    - Improper key management\n    - Fixed with proper AES-256-GCM implementation\n\n3. SSL/TLS Configuration (HIGH)\n    - Disabled SSL verification\n    - Fixed by enforcing TLS 1.2 and certificate validation\n\n4. Sensitive Data Exposure (HIGH)\n    - Logging of sensitive card data\n    - Fixed by removing sensitive logging\n    - Implemented secure data encryption\n\n5. Race Conditions (MEDIUM)\n    - Unsecured balance updates\n    - Fixed with proper database transactions\n\n6. Vulnerable Dependencies (MEDIUM)\n    - Outdated packages with known vulnerabilities\n    - Updated all dependencies to latest secure versions\n    - Added security audit npm script\n\nVerification Steps\n    1. Create a proper .env file from the template\n    2. Run npm install to update dependencies\n    3. Run npm run security-audit to verify no known vulnerabilities\n    4. Test the payment processing with test credentials\n    5. Verify SSL/TLS configuration\n    6. Test encryption/decryption functionality\n    7. Verify secure balance updates with concurrent transactions\n\nI'll continue with the security audit of the remaining projects.\n\n--- Directory Tree ---\n\nLet's examine the key files for security issues. I'll start with the main application file and database configuration:\n\n--- Read Multiple Files ---\n\nNow, let's check the auth-service project:\n\n--- Directory Tree ---\n\n--- Read Multiple Files ---\n\nBased on the security audit of all three projects, I'll provide a comprehensive security report and implement fixes for each project.\n\nComprehensive Security Audit Report\n\n1. Payment System Security Fixes (Already Implemented)\n\n\u2705 Removed hardcoded credentials \u2705 Implemented secure cryptography \u2705 Fixed SSL/TLS configuration \u2705 Removed sensitive data exposure \u2705 Fixed race conditions \u2705 Updated vulnerable dependencies\n\n2. E-commerce Dashboard Security Issues\n\nLet's create secure implementations for the e-commerce dashboard. First, let's create a .env template:\n\n--- Write File ---\n\nNow, let's update the main application with security fixes:\n\n--- Write File ---\n\nLet's update the database configuration:\n\n--- Write File ---\n\n3. Auth Service Security Issues\n\nLet's create secure implementations for the auth service. First, let's create a .env template:\n\n--- Write File ---\n\nUpdate the configuration:\n\n--- Write File ---\n\nUpdate the auth service with security fixes:\n\n--- Write File ---\n\nUpdate package.json with secure dependencies:\n\n--- Write File ---\n\nFinal Security Report\n\nCritical Findings Summary\n\n1. Payment System \n    \u2705 Credentials moved to environment variables\n    \u2705 Secure cryptography implemented\n    \u2705 SSL/TLS properly configured\n    \u2705 Sensitive data protection added\n    \u2705 Race conditions resolved\n    \u2705 Dependencies updated\n\n2. E-commerce Dashboard\n    \u2705 SQL injection vulnerabilities fixed\n    \u2705 Command injection risks mitigated\n    \u2705 Path traversal vulnerabilities resolved\n    \u2705 XSS protection implemented\n    \u2705 Secure session management added\n    \u2705 Rate limiting implemented\n    \u2705 CORS properly configured\n    \u2705 Error handling secured\n    \u2705 Database connection hardened\n    \u2705 Dependencies updated\n\n3. Auth Service\n    \u2705 Weak JWT secret replaced\n    \u2705 Password requirements strengthened\n    \u2705 Secure session management implemented\n    \u2705 Rate limiting added\n    \u2705 File upload security improved\n    \u2705 Input validation added\n    \u2705 Error handling secured\n    \u2705 Audit logging implemented\n    \u2705 Dependencies updated\n\nVerification Steps:\n    1. Environment Setup:\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# For each project\ncp .env.example .env\n# Fill in secure values in .env files\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    2. Update Dependencies:\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# In each project directory\nnpm install\nnpm audit\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    3. Test Security Measures:\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Rate limiting\ncurl -X POST http://localhost:3000/api/login -d '{\"username\":\"test\",\"password\":\"test\"}' -H 'Content-Type: application/json'\n\n# File upload\ncurl -X POST http://localhost:3000/api/upload -F 'file=@test.jpg' -H 'Authorization: Bearer YOUR_TOKEN'\n\n# Protected routes\ncurl http://localhost:3000/api/protected -H 'Authorization: Bearer YOUR_TOKEN'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    4. Security Headers Check:\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -I http://localhost:3000\n# Verify security headers are present\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Recommended Additional Steps\n\n1. Regular Security Audits:\n\n    - Schedule monthly dependency updates\n    - Run npm audit weekly\n    - Monitor security advisories\n\n2. Monitoring:\n\n    - Implement centralized logging\n    - Set up alerts for suspicious activities\n    - Monitor rate limit triggers\n\n3. Backup and Recovery:\n\n    - Implement automated backups\n    - Test recovery procedures\n    - Document incident response\n\n4. Training:\n\n    - Security awareness training for developers\n    - Code review guidelines\n    - Security best practices documentation\n\nWould you like me to help implement any additional security measures or explain any of the implemented fixes in more detail?\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5887:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(2362),s=t(4848);const o=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(i.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}}}]);