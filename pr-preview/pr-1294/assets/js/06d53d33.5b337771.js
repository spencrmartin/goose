"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6879],{177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tutorials/tavily-mcp","title":"Tavily Web Search Extension","description":"Add Tavily MCP Server as a Goose Extension","source":"@site/docs/tutorials/tavily-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/tavily-mcp","permalink":"/goose/pr-preview/pr-1294/docs/tutorials/tavily-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tavily Web Search Extension","description":"Add Tavily MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Memory Extension","permalink":"/goose/pr-preview/pr-1294/docs/tutorials/memory-mcp"},"next":{"title":"Architecture Overview","permalink":"/goose/pr-preview/pr-1294/docs/category/architecture-overview"}}');var r=t(4848),a=t(8453),s=t(5537),o=t(9329);const l={title:"Tavily Web Search Extension",description:"Add Tavily MCP Server as a Goose Extension"},c=void 0,d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,r.jsx)(n.a,{href:"https://github.com/RamXX/mcp-tavily",children:"Tavily Web Search MCP Server"})," as a Goose extension to enable AI-powered web search functionality."]}),"\n",(0,r.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Command"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"uvx mcp-tavily\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Variable"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TAVILY_API_KEY: <YOUR_API_KEY>\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Note that you'll need ",(0,r.jsx)(n.a,{href:"https://docs.astral.sh/uv/#installation",children:"uv"})," installed on your system to run this command, as it uses ",(0,r.jsx)(n.code,{children:"uvx"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(s.A,{groupId:"interface",children:[(0,r.jsxs)(o.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Run the ",(0,r.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Choose to add a ",(0,r.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  tavily\n  // highlight-end\n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  tavily\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  uvx mcp-tavily\n  // highlight-end\n  \u2514 \n"})}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Obtain a ",(0,r.jsx)(n.a,{href:"https://tavily.com/",children:"Tavily API Key"})," and paste it in."]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can get your API key by signing up at ",(0,r.jsx)(n.a,{href:"https://app.tavily.com/",children:"tavily.com"})," and navigating to your account settings."]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  tavily\n \u2502\n \u25c7  What command should be run?\n \u2502  uvx mcp-tavily\n \u2502\n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  TAVILY_API_KEY\n \u2502\n \u25c7  Environment variable value:\n \u2502  \u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n \u2502\n \u25c7  Add another environment variable?\n \u2502  No \n // highlight-end\n \u2514  Added tavily extension\n"})})]}),(0,r.jsx)(o.A,{value:"ui",label:"Goose Desktop",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Settings"})]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.code,{children:"Extensions"}),", click the ",(0,r.jsx)(n.code,{children:"Add"})," link"]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.code,{children:"Add Extension Manually"})," modal, enter the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"Standard IO"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ID"}),": ",(0,r.jsx)(n.code,{children:"tavily-mcp"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"Tavily"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": ",(0,r.jsx)(n.code,{children:"Tavily Web Search"})," (",(0,r.jsx)(n.em,{children:"set this to whatever you want"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Command"}),": ",(0,r.jsx)(n.code,{children:"uvx mcp-tavily"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Environment Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"TAVILY_API_KEY"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),": (",(0,r.jsxs)(n.em,{children:["Obtain a ",(0,r.jsx)(n.a,{href:"https://tavily.com/",children:"Tavily API Key"})," and paste it in."]}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add"})," button"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Add Extension"})," button"]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.p,{children:"The Tavily MCP server enables AI-powered web search functionality in your Goose interactions. When you obtain your API key, you'll have access to Tavily's advanced search capabilities including:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Real-time web search"}),"\n",(0,r.jsx)(n.li,{children:"Structured data extraction"}),"\n",(0,r.jsx)(n.li,{children:"Content analysis"}),"\n",(0,r.jsx)(n.li,{children:"Topic-specific search"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Search for recent news about artificial intelligence breakthroughs in medicine and summarize the key findings.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'I\'ll use the Tavily news search tool to find recent news about AI breakthroughs in medicine.\n\n\u2500\u2500\u2500 tavily_news_search | tavily \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nmax_results: 5\nquery: ...\n\n\n\nLet me summarize the key findings from the recent news about AI in medicine:\n\n1. Personalized AI-Driven Healthcare:\n- Development of AI systems that act as "personal doctors" that work alongside human clinicians rather than replacing them\n- Focus on augmenting clinical capabilities while maintaining human oversight\n\n2. Breakthrough in Medical Imaging:\n- A significant advancement in CT scan analysis has been reported in Nature\n- Development of a "Unified total-body CT image" (Uni-CT) algorithm that:\n  - Automatically generates single series of total-body CT images\n  - Concatenates multiple images of segmented organs using organ-specific window settings\n  - Reduces diagnosis time by 35% without compromising accuracy\n  - Improves efficiency in trauma cases\n\n3. Future Trends:\n- Movement toward democratized AI in healthcare, potentially reducing the gap between large and small healthcare providers\n- Development of hyper-personalized medical experiences powered by AI\n- Integration of AI systems that can perform human-like reasoning in medical contexts\n\nThe most concrete breakthrough appears to be in medical imaging, with the Uni-CT algorithm showing promising results in improving both the speed and accuracy of trauma diagnosis. This represents a practical application of AI that could have immediate benefits in emergency medicine.\n\nWould you like me to search for more specific information about any of these developments or explore other areas of AI in medicine?\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can adjust the ",(0,r.jsx)(n.a,{href:"https://github.com/RamXX/mcp-tavily?tab=readme-ov-file#prompts",children:"search parameters"})," for different types of queries and depths of information. The extension supports both quick searches and comprehensive research."]})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var i=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),r=t(4164),a=t(5627),s=t(6347),o=t(372),l=t(604),c=t(1861),d=t(8749);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);