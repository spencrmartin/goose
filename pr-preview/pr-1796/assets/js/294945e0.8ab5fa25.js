"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2415],{5030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tutorials/jetbrains-mcp","title":"JetBrains Extension","description":"Use JetBrains MCP Server as a Goose Extension","source":"@site/docs/tutorials/jetbrains-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/jetbrains-mcp","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/jetbrains-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JetBrains Extension","description":"Use JetBrains MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Google Maps Extension","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/google-maps-mcp"},"next":{"title":"Knowledge Graph Memory Extension","permalink":"/goose/pr-preview/pr-1796/docs/tutorials/knowledge-graph-mcp"}}');var i=t(4848),o=t(8453),a=t(5537),r=t(9329),l=t(5887);const d={title:"JetBrains Extension",description:"Use JetBrains MCP Server as a Goose Extension"},c=void 0,h={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{videoUrl:"https://www.youtube.com/embed/1fP5elf9qQM"}),"\n",(0,i.jsx)(n.p,{children:"The JetBrains extension is designed to work within your IDE. Goose can accomplish a lot of the developer-centric tasks with the Developer extension that is enabled on install, however, the JetBrains extension provides a more integrated and project-aware way to work with code."}),"\n",(0,i.jsx)(n.p,{children:"This tutorial covers how to enable and use the JetBrains MCP Server as a built-in Goose extension to integrate with any JetBrains IDE."}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/26071-mcp-server",children:"MCP Server plugin"})," to your IDE."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable built-in Goose extension:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.A,{groupId:"interface",children:[(0,i.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the ",(0,i.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Choose to add a ",(0,i.jsx)(n.code,{children:"Built-in Extension"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c6  What type of extension would you like to add?\n// highlight-start    \n\u2502  \u25cf Built-in Extension (Use an extension that comes with Goose)\n// highlight-end  \n\u2502  \u25cb Command-line Extension \n\u2502  \u25cb Remote Extension \n\u2514  \n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Arrow down to the ",(0,i.jsx)(n.code,{children:"JetBrains"})," extension and press Enter"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n\u2502  \u25cb Computer Controller \n\u2502  \u25cb Google Drive \n\u2502  \u25cb Memory \n// highlight-start\n\u2502  \u25cf JetBrains (Connect to jetbrains IDEs)\n// highlight-end\n\u2514\n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c7  Which built-in extension would you like to enable?\n\u2502  JetBrains\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514  Enabled jetbrains extension\n"})})]}),(0,i.jsx)(r.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Settings"})]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,i.jsx)(n.code,{children:"Jetbrains"})," to on."]}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.p,{children:"In this example, I'm going to upgrade a Java project to the latest LTS version."}),"\n",(0,i.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,i.jsx)(n.p,{children:"Anthropic's Claude 3.5 Sonnet was used for this task."})}),"\n",(0,i.jsxs)(a.A,{groupId:"interface",children:[(0,i.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/idea/download",children:"IntelliJ"})," (JetBrains' Java and Kotlin IDE)"]}),"\n",(0,i.jsx)(n.li,{children:"Open a terminal within your IDE and start a new Goose session:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,i.jsxs)(r.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/idea/download",children:"IntelliJ"})," (JetBrains' Java and Kotlin IDE)"]}),"\n",(0,i.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You will interact with two separate apps: the Goose Desktop app and the IntelliJ IDE."})})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["When using Goose to refactor code, it's recommended to commit your code to version control ",(0,i.jsx)(n.em,{children:"before"})," making changes. This way, you have a clean snapshot to compare against, making it easy to review Goose\u2019s modifications, revert if needed, and track improvements."]})]}),"\n",(0,i.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"using the JetBrains IDE tools, upgrade this project to use the latest Java LTS version and refactor the codebase to use newer Java features where beneficial.\n"})}),"\n",(0,i.jsx)(n.p,{children:"After 2 minutes, Goose was done with the upgrade! \ud83c\udf89"}),"\n",(0,i.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"I'll make several improvements to modernize this codebase to use Java 21 (latest LTS) features. Here are the changes I'll implement:\n\n1. Update the `pom.xml` to use Java 21\n2. Use newer Java features \n\n[... code changes ...]\n\nHere's a summary of the modernization changes made:\n\n1. `pom.xml`:\n   - Set Java version to 21\n   - Enabled preview features\n   - Updated all dependencies to their latest stable versions\n\n2. `AccountsOverviewPage.java`:\n   - Made the class `final` since it extends the sealed `Page` class\n   - Updated stream collection to use `.toList()` instead of `collect(Collectors.toList())`\n   - Made fields final for better immutability\n\n3. `Page.java`:\n   - Converted to a sealed class\n   - Restricted which classes can extend it using `permits`\n   - Made fields protected and final where appropriate\n   - Added pattern matching for exception handling\n   - Implemented Optional for null safety\n   - Used String Templates for error messages\n   - Added functional programming concepts with Supplier\n   - Enhanced error handling with specific exception types\n\n4. `LoginComponent.java`:\n   - Added a private record for credentials\n   - Implemented pattern matching with record patterns\n   - Made fields final for better immutability\n\n5. `AccountTests.java`:\n   - Implemented structured concurrency using `StructuredTaskScope`\n   - Used parallel execution for UI and API tasks\n   - Improved error handling with structured task management\n   - Used pattern matching and type inference with `var`\n\n6. `BaseTests.java`:\n   - Implemented structured concurrency for setup tasks\n   - Improved resource management\n   - Better exception handling\n   - Used modern Duration API\n\n7. `APIUtil.java`:\n   - Implemented String Templates (Java 21 preview feature)\n   - Used modern text blocks\n\n8. `Customers.java`:\n   - Added sealed interface for customer types\n   - Implemented pattern matching for switch expressions\n   - Added pattern matching for instanceof\n   - Enhanced type safety with records\n\nKey modern Java features used:\n- String Templates (Java 21 Preview)\n- Pattern Matching for switch (Java 21)\n- Sealed Classes and Interfaces (Java 17)\n- Records (Java 16)\n- Pattern Matching for instanceof (Java 16)\n- Text Blocks (Java 15)\n- Switch Expressions (Java 14)\n\nThe codebase is now using the latest Java LTS version (21) and incorporates many modern Java features that improve:\n- Type safety\n- Null safety\n- Code readability\n- Error handling\n- Performance\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using the JetBrains extension provided several advantages and made it easier for Goose to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"navigate through the codebase"}),"\n",(0,i.jsx)(n.li,{children:"track changes"}),"\n",(0,i.jsx)(n.li,{children:"make consistent modifications across files"}),"\n",(0,i.jsx)(n.li,{children:"verify the content of files before and after changes"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5887:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(2362),i=t(4848);const o=e=>{let{videoUrl:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Watch the demo"}),(0,i.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,i.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,i.jsx)("hr",{})]})}}}]);