"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[4896],{2643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"guides/handling-llm-rate-limits-with-goose","title":"LLM Rate Limits","description":"Rate limiting is the process of restricting the number of requests a user or application can send to an LLM API within a specific timeframe. LLM providers enforce this with the purpose of managing resources and preventing abuse.","source":"@site/docs/guides/handling-llm-rate-limits-with-goose.md","sourceDirName":"guides","slug":"/guides/handling-llm-rate-limits-with-goose","permalink":"/goose/pr-preview/pr-1811/docs/guides/handling-llm-rate-limits-with-goose","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"LLM Rate Limits","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"CLI Commands","permalink":"/goose/pr-preview/pr-1811/docs/guides/goose-cli-commands"},"next":{"title":"Logging System","permalink":"/goose/pr-preview/pr-1811/docs/guides/logs"}}');var i=r(4848),s=r(8453),o=r(5537),a=r(9329);const l={title:"LLM Rate Limits",sidebar_position:4},u="Handling LLM Rate Limits",c={},d=[{value:"Using OpenRouter",id:"using-openrouter",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"handling-llm-rate-limits",children:"Handling LLM Rate Limits"})}),"\n",(0,i.jsx)(t.p,{children:"Rate limiting is the process of restricting the number of requests a user or application can send to an LLM API within a specific timeframe. LLM providers enforce this with the purpose of managing resources and preventing abuse."}),"\n",(0,i.jsx)(t.p,{children:"Since Goose is working very quickly to implement your tasks, you may need to manage rate limits imposed by the provider. If you frequently hit rate limits, consider upgrading your LLM plan to access higher tier limits or using OpenRouter."}),"\n",(0,i.jsx)(t.h2,{id:"using-openrouter",children:"Using OpenRouter"}),"\n",(0,i.jsx)(t.p,{children:"OpenRouter provides a unified interface for LLMs that allows you to select and switch between different providers automatically - all under a single billing plan. With OpenRouter, you can utilize free models or purchase credits for paid models."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://openrouter.ai",children:"openrouter.ai"})," and create an account."]}),"\n",(0,i.jsxs)(t.li,{children:["Once verified, create your ",(0,i.jsx)(t.a,{href:"https://openrouter.ai/settings/keys",children:"API key"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.A,{groupId:"interface",children:[(0,i.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Run the Goose configuration command:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"Configure Providers"})," from the menu."]}),"\n",(0,i.jsx)(t.li,{children:"Follow the prompts to choose OpenRouter as your provider and enter your OpenRouter API key when prompted."}),"\n"]})]}),(0,i.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click on the three dots in the top-right corner."}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"Settings"})," from the menu."]}),"\n",(0,i.jsxs)(t.li,{children:['Click on "Browse" in the ',(0,i.jsx)(t.code,{children:"Models"})," section."]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"Configure"})]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"OpenRouter"})," from the list of available providers."]}),"\n",(0,i.jsx)(t.li,{children:"Enter your OpenRouter API key in the dialog that appears."}),"\n"]})})]}),"\n",(0,i.jsx)(t.p,{children:"Now Goose will send your requests through OpenRouter which will automatically switch models when necessary to avoid interruptions due to rate limiting."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9329:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const i={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:r,children:t})}},5537:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),i=r(4164),s=r(5627),o=r(6347),a=r(372),l=r(604),u=r(1861),c=r(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),b=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),i=a[r].value;i!==n&&(u(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);