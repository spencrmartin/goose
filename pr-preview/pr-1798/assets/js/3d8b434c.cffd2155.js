"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7588],{4070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tutorials/vscode-mcp","title":"VS Code Extension","description":"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration","source":"@site/docs/tutorials/vscode-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/vscode-mcp","permalink":"/goose/pr-preview/pr-1798/docs/tutorials/vscode-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VS Code Extension","description":"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial Extension","permalink":"/goose/pr-preview/pr-1798/docs/tutorials/tutorial-extension"},"next":{"title":"Architecture Overview","permalink":"/goose/pr-preview/pr-1798/docs/category/architecture-overview"}}');var s=t(4848),r=t(8453),i=t(5537),a=t(9329);const l={title:"VS Code Extension",description:"Use VS Code MCP Server as a Goose Extension for file operations and VS Code integration"},c=void 0,d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Result",id:"result",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/block/vscode-mcp",children:"VS Code MCP Server"})," as a Goose extension to enable VS Code integration, file operations, and development workflow management."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx vscode-mcp-server\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Setup"})}),(0,s.jsxs)(n.p,{children:["Install the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=block.vscode-mcp-extension",children:"VS Code MCP Extension"})," from the Visual Studio Marketplace."]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,s.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=block.vscode-mcp-extension",children:"VS Code MCP Extension"})," to your VS Code. No additional settings required in VS Code."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"interface",children:[(0,s.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  vscode-mcp\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  vscode-mcp\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx vscode-mcp-server\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Enter the timeout value (default 300s is recommended)"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  vscode-mcp\n\u2502\n\u25c7  What command should be run?\n\u2502  npx vscode-mcp-server install\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"No additional environment variables are required for basic setup"}),"\n"]})]}),(0,s.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=vscode-mcp-server&id=vscode-mcp&name=VS%20Code%20MCP&description=VS%20Code%20integration%20and%20file%20operations",children:"Launch the installer"})}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"No additional setup is required to use the VS Code MCP extension in VS Code."}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"The VS Code MCP extension enables Goose to interact with your VS Code environment, managing files, projects, and development workflows."}),"\n",(0,s.jsx)(n.p,{children:"The key strength of the VS Code MCP Server is its ability to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Show diffs before making changes"}),"\n",(0,s.jsx)(n.li,{children:"Integrate file operations with VS Code's interface"}),"\n",(0,s.jsx)(n.li,{children:"Manage project workspaces"}),"\n",(0,s.jsx)(n.li,{children:"Provide immediate visual feedback in the editor"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Every time you start a Goose session with the VS Code MCP server enabled, it checks to see if a matching project is open in VS Code. If not, it will prompt you to open the project before proceeding."})}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Update the contributing guide with instructions on how to start docusaurus dev server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"session showing goose making updates and VS Code prompting user to accept or reject changes",src:t(2964).A+"",width:"2550",height:"1408"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(6540),s=t(4164),r=t(5627),i=t(6347),a=t(372),l=t(604),c=t(1861),d=t(8749);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==o&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function C(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,v.jsx)(C,{...e,children:u(e.children)},String(n))}},2964:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/vscode-mcp-5e15828d0c528e5fd84b538ccd28c04a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);