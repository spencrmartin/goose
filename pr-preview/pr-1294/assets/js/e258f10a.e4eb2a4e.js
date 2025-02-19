"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2279],{3935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/updating-goose","title":"Updating Goose","description":"This guide explains how to keep your Goose installation up to date with the latest features and improvements.","source":"@site/docs/guides/updating-goose.md","sourceDirName":"guides","slug":"/guides/updating-goose","permalink":"/goose/pr-preview/pr-1294/docs/guides/updating-goose","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Quick Tips","permalink":"/goose/pr-preview/pr-1294/docs/guides/tips"},"next":{"title":"Tutorials","permalink":"/goose/pr-preview/pr-1294/docs/category/tutorials"}}');var a=n(4848),s=n(8453),o=n(5537),l=n(9329);const i={},u="Updating Goose",c={},d=[];function p(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"updating-goose",children:"Updating Goose"})}),"\n","\n",(0,a.jsx)(t.p,{children:"This guide explains how to keep your Goose installation up to date with the latest features and improvements."}),"\n",(0,a.jsxs)(o.A,{groupId:"interface",children:[(0,a.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,a.jsxs)(t.p,{children:["You can update Goose by running the ",(0,a.jsx)(t.a,{href:"/docs/getting-started/installation",children:"installation"})," script again:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | CONFIGURE=false bash\n"})}),(0,a.jsx)(t.p,{children:"To check your current Goose version, use the following command:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"goose --version\n"})})]}),(0,a.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,a.jsx)(t.p,{children:"To update Goose Desktop:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Download the latest version of Goose from the ",(0,a.jsx)(t.a,{href:"https://github.com/block/goose/releases/download/stable/Goose.zip",children:"releases page"})]}),"\n",(0,a.jsxs)(t.li,{children:["Unzip the downloaded ",(0,a.jsx)(t.code,{children:"Goose.zip"})," file."]}),"\n",(0,a.jsx)(t.li,{children:"Overwrite the existing Goose application with the new version."}),"\n",(0,a.jsx)(t.li,{children:"Run the executable file to launch the Goose desktop application."}),"\n"]})]})]}),"\n",(0,a.jsx)(t.p,{children:"All configuration settings will remain the same, with Goose updated to the latest version."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),a=n(4164),s=n(5627),o=n(6347),l=n(372),i=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=u??g;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);