"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[701],{8876:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/managing-goose-sessions","title":"Managing Sessions","description":"A session is a single, continuous interaction between you and Goose, providing a space to ask questions and prompt action. In this guide, we\'ll cover how to start, exit, and resume a session.","source":"@site/docs/guides/managing-goose-sessions.md","sourceDirName":"guides","slug":"/guides/managing-goose-sessions","permalink":"/goose/pr-preview/pr-1255/docs/guides/managing-goose-sessions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Managing Sessions"},"sidebar":"tutorialSidebar","previous":{"title":"Guides","permalink":"/goose/pr-preview/pr-1255/docs/category/guides"},"next":{"title":"CLI Commands","permalink":"/goose/pr-preview/pr-1255/docs/guides/goose-cli-commands"}}');var t=n(4848),r=n(8453),i=n(5537),a=n(9329);const l={sidebar_position:1,title:"Managing Sessions"},u="Managing Goose Sessions",c={},d=[{value:"Start Session",id:"start-session",level:2},{value:"Name Session",id:"name-session",level:2},{value:"Exit Session",id:"exit-session",level:2},{value:"Resume Session",id:"resume-session",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"managing-goose-sessions",children:"Managing Goose Sessions"})}),"\n",(0,t.jsx)(s.p,{children:"A session is a single, continuous interaction between you and Goose, providing a space to ask questions and prompt action. In this guide, we'll cover how to start, exit, and resume a session."}),"\n",(0,t.jsx)(s.h2,{id:"start-session",children:"Start Session"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsx)(s.p,{children:"From your terminal, navigate to the directory from which you'd like to start, and run:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"goose session \n"})})]}),(0,t.jsxs)(a.A,{value:"ui",label:"Goose Desktop",children:[(0,t.jsx)(s.p,{children:"After choosing an LLM provider, you\u2019ll see the session interface ready for use. Type your questions, tasks, or instructions directly into the input field, and Goose will immediately get to work."}),(0,t.jsxs)(s.p,{children:["To start a new session at any time, click the three dots in the top-right corner of the application and select ",(0,t.jsx)(s.strong,{children:"New Session"})," from the dropdown menu."]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["If this is your first session, Goose will prompt you for an API key to access an LLM (Large Language Model) of your choice. For more information on setting up your API key, see the ",(0,t.jsx)(s.a,{href:"/docs/getting-started/installation#set-llm-provider",children:"Installation Guide"}),". Here is the list of ",(0,t.jsx)(s.a,{href:"/docs/getting-started/providers",children:"supported LLMs"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"name-session",children:"Name Session"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(s.p,{children:["By default, Goose will provide a random string as the name of your session. If you'd like to provide a specific name, this is where you'd do so. For example to name your session ",(0,t.jsx)(s.code,{children:"react-migration"}),", you would run:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"goose session -n react-migration\n"})}),(0,t.jsx)(s.p,{children:"You'll know your session has started when your terminal looks similar to the following:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"starting session | provider: openai model: gpt-4o\nlogging to ~/.config/goose/sessions/react-migration.json1\n"})})]}),(0,t.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(s.p,{children:["Session management features, such as ",(0,t.jsx)(s.strong,{children:"naming"})," and ",(0,t.jsx)(s.strong,{children:"resuming"})," sessions, are ",(0,t.jsx)(s.strong,{children:"not"})," currently available in the Goose Desktop. If you'd like to see these features added, please ",(0,t.jsx)(s.a,{href:"https://github.com/block/goose/issues/new?template=Blank+issue",children:"open an issue on GitHub"}),"."]})})]}),"\n",(0,t.jsx)(s.h2,{id:"exit-session",children:"Exit Session"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(s.p,{children:["To save and exit a session, hold down ",(0,t.jsx)(s.code,{children:"Ctrl"})," + ",(0,t.jsx)(s.code,{children:"C"}),". Alternatively, you can type ",(0,t.jsx)(s.code,{children:"exit"})," to save and exit the session."]}),(0,t.jsxs)(s.p,{children:["Your session will be stored locally in ",(0,t.jsx)(s.code,{children:"~/.config/goose/sessions"}),"."]})]}),(0,t.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsx)(s.p,{children:"To exit a session, simply close the application."})})]}),"\n",(0,t.jsx)(s.h2,{id:"resume-session",children:"Resume Session"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsx)(s.p,{children:"To resume your latest session, you can run the following command:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:" goose session -r\n"})}),(0,t.jsx)(s.p,{children:"To resume a specific session, run the following command:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"goose session -r --name <name>\n"})}),(0,t.jsxs)(s.p,{children:["For example, to resume the session named ",(0,t.jsx)(s.code,{children:"react-migration"}),", you would run:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"goose session -r --name react-migration\n"})}),(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["While you can resume sessions using the commands above, we recommend creating new sessions for new tasks to reduce the chance of ",(0,t.jsx)(s.a,{href:"/docs/troubleshooting#stuck-in-a-loop-or-unresponsive",children:"doom spiraling"}),"."]})})]}),(0,t.jsx)(a.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(s.p,{children:["Session management features, such as ",(0,t.jsx)(s.strong,{children:"naming"})," and ",(0,t.jsx)(s.strong,{children:"resuming"})," sessions, are ",(0,t.jsx)(s.strong,{children:"not"})," currently available in the Goose Desktop. If you'd like to see these features added, please ",(0,t.jsx)(s.a,{href:"https://github.com/block/goose/issues/new?template=Blank+issue",children:"open an issue on GitHub"}),"."]})})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,s,n)=>{n.d(s,{A:()=>i});n(6540);var o=n(4164);const t={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,i),hidden:n,children:s})}},5537:(e,s,n)=>{n.d(s,{A:()=>w});var o=n(6540),t=n(4164),r=n(5627),i=n(6347),a=n(372),l=n(604),u=n(1861),c=n(8749);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,o.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:o,default:t}}=e;return{value:s,label:n,attributes:o,default:t}}))}(n);return function(e){const s=(0,u.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(t.location.search);s.set(r,e),t.replace({...t.location,search:s.toString()})}),[r,t])]}function g(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,r=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:r}))),[u,d]=m({queryString:n,groupId:t}),[g,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,r]=(0,c.Dv)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),x=(()=>{const e=u??g;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function v(e){let{className:s,block:n,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const s=e.currentTarget,n=l.indexOf(s),t=a[n].value;t!==o&&(u(s),i(t))},d=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===s?0:-1,"aria-selected":o===s,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...r,className:(0,t.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":o===s}),children:n??s},s)}))})}function j(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,o.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=g(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...s,...e}),(0,b.jsx)(j,{...s,...e})]})}function w(e){const s=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var o=n(6540);const t={},r=o.createContext(t);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);