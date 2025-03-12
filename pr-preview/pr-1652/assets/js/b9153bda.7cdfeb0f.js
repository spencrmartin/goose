"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[8848],{4435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"guides/using-goosehints","title":"Using Goosehints","description":".goosehints is a text file used to provide additional context about your project and improve the communication with Goose. The use of goosehints ensures that Goose understands your requirements better and can execute tasks more effectively.","source":"@site/docs/guides/using-goosehints.md","sourceDirName":"guides","slug":"/guides/using-goosehints","permalink":"/goose/pr-preview/pr-1652/docs/guides/using-goosehints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Using Goosehints","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Goose Permissions","permalink":"/goose/pr-preview/pr-1652/docs/guides/goose-permissions"},"next":{"title":"CLI Commands","permalink":"/goose/pr-preview/pr-1652/docs/guides/goose-cli-commands"}}');var i=t(4848),o=t(8453),r=t(5537),l=t(9329);const a={title:"Using Goosehints",sidebar_position:3},c="Providing Hints to Goose",d={},u=[{value:"Creating your hints file",id:"creating-your-hints-file",level:2},{value:"Global hints file",id:"global-hints-file",level:4},{value:"Local hints file",id:"local-hints-file",level:4},{value:"Setting up hints",id:"setting-up-hints",level:2},{value:"Example global <code>.goosehints</code> file",id:"example-global-goosehints-file",level:3},{value:"Example local <code>.goosehints</code> file",id:"example-local-goosehints-file",level:3},{value:"Common use cases",id:"common-use-cases",level:2},{value:"Best practices",id:"best-practices",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"providing-hints-to-goose",children:"Providing Hints to Goose"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".goosehints"})," is a text file used to provide additional context about your project and improve the communication with Goose. The use of ",(0,i.jsx)(n.code,{children:"goosehints"})," ensures that Goose understands your requirements better and can execute tasks more effectively."]}),"\n",(0,i.jsx)(n.admonition,{title:"Developer extension required",type:"info",children:(0,i.jsxs)(n.p,{children:["To make use of the hints file, you need to have the ",(0,i.jsx)(n.code,{children:"Developer"})," extension ",(0,i.jsx)(n.a,{href:"/docs/getting-started/using-extensions",children:"enabled"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["This guide will walk you through creating and using your ",(0,i.jsx)(n.code,{children:".goosehints"})," file to streamline your workflow with custom instructions and context."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-your-hints-file",children:"Creating your hints file"}),"\n",(0,i.jsx)(n.p,{children:"Goose supports two types of hint files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Global hints file"})," - These hints will apply to all your sessions with Goose, regardless of directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local hints file"})," -  These hints will only apply when working in a specific directory."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You can use both global and local hints at the same time. When both exist, Goose will consider both your global preferences and project-specific requirements. If the instructions in your local hints file conflict with your global preferences, Goose will prioritize the local hints."})}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(l.A,{value:"manual",label:"Manual",default:!0,children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Global hints file"})," - Create a ",(0,i.jsx)(n.code,{children:".goosehints"})," file in ",(0,i.jsx)(n.code,{children:"~/.config/goose"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local hints file"})," -  Create a ",(0,i.jsx)(n.code,{children:".goosehints"})," file at the root of the directory you'd like it applied to."]}),"\n"]})}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(n.h4,{id:"global-hints-file",children:"Global hints file"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:".goosehints"})," file in ",(0,i.jsx)(n.code,{children:"~/.config/goose"}),"."]}),"\n"]}),(0,i.jsx)(n.h4,{id:"local-hints-file",children:"Local hints file"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Change the directory to where you'd like to set up the file. You can do this by clicking the directory path in the lower left bottom of the screen"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Configure .goosehints"})]}),"\n",(0,i.jsx)(n.li,{children:"Enter your local tips into the textarea"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save"})]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You may have to adjust the screen size to fully see the Save and Cancel buttons."})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".goosehints"})," file can include any instructions or contextual details relevant to your projects."]}),"\n",(0,i.jsxs)(n.p,{children:["A good time to consider adding a ",(0,i.jsx)(n.code,{children:".goosehints"})," file is when you find yourself repeating prompts, or providing the same kind of instructions multiple times. It's also a great way to provide a lot of context which might be better suited in a file."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-hints",children:"Setting up hints"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".goosehints"})," file supports natural language."]}),"\n",(0,i.jsxs)(n.h3,{id:"example-global-goosehints-file",children:["Example global ",(0,i.jsx)(n.code,{children:".goosehints"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Always use TypeScript for new Next.js projects.\n\nFollow the [Google Style Guide](https://google.github.io/styleguide/pyguide.html) for Python code.\n\nRun unit tests before committing any changes.\n\nPrefer functional programming patterns where applicable.\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"example-local-goosehints-file",children:["Example local ",(0,i.jsx)(n.code,{children:".goosehints"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This is a simple example JavaScript web application that uses the Express.js framework. View [Express documentation](https://expressjs.com/) for extended guidance.\n\nGo through the README.md for information on how to build and test it as needed.\n\nMake sure to confirm all changes with me before applying.\n\nRun tests with `npm run test` ideally after each change.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"common-use-cases",children:"Common use cases"}),"\n",(0,i.jsx)(n.p,{children:"Here are some ways people have used hints to provide additional context to Goose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Decision-Making"}),": Specify if Goose should autonomously make changes or confirm actions with you first."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validation Routines"}),": Provide test cases or validation methods that Goose should perform to ensure changes meet project specifications."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Feedback Loop"}),": Include steps that allow Goose to receive feedback and iteratively improve its suggestions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Point to more detailed documentation"}),": Indicate important files like ",(0,i.jsx)(n.code,{children:"README.md"}),", ",(0,i.jsx)(n.code,{children:"CONTRIBUTING.md"}),", or others that Goose should consult for detailed explanations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Like prompts, this is not an extensive list to shape your ",(0,i.jsx)(n.code,{children:".goosehints"})," file. You can include as much context as you need."]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keep file updated"}),": Regularly update the ",(0,i.jsx)(n.code,{children:".goosehints"})," file to reflect any changes in project protocols or priorities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Be concise"}),": Make sure the content is straightforward and to the point, ensuring Goose can quickly parse and act on the information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start small"}),": Create a small set of clear, specific hints and gradually expand them based on your needs. This makes it easier to understand how Goose interprets and applies your instructions."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(4164);const i={tabItem:"tabItem_Ymn6"};var o=t(4848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(6540),i=t(4164),o=t(5627),r=t(6347),l=t(372),a=t(604),c=t(1861),d=t(8749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[r,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=f({queryString:t,groupId:i}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),x=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=l[t].value;i!==s&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{a.push(e)},onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);