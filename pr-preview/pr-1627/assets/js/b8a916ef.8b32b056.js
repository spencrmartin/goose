"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[5355],{3850:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/goose-in-docker","title":"Goose in Docker","description":"There are various scenarios where you might want to build Goose in Docker. If the instructions below do not meet your needs, please contact us by replying to our discussion topic.","source":"@site/docs/guides/goose-in-docker.md","sourceDirName":"guides","slug":"/guides/goose-in-docker","permalink":"/goose/pr-preview/pr-1627/docs/guides/goose-in-docker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Goose in Docker","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Updating Goose","permalink":"/goose/pr-preview/pr-1627/docs/guides/updating-goose"},"next":{"title":"Goose Permissions","permalink":"/goose/pr-preview/pr-1627/docs/guides/goose-permissions"}}');var r=o(4848),s=o(8453);o(5537),o(9329);const i={title:"Goose in Docker",sidebar_position:3},a="Use Case 1: Building Goose from the source in Docker",l={},c=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Tell Us What You Need",type:"info",children:(0,r.jsxs)(n.p,{children:["There are various scenarios where you might want to build Goose in Docker. If the instructions below do not meet your needs, please contact us by replying to our ",(0,r.jsx)(n.a,{href:"https://github.com/block/goose/discussions/1496",children:"discussion topic"}),"."]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"use-case-1-building-goose-from-the-source-in-docker",children:"Use Case 1: Building Goose from the source in Docker"})}),"\n",(0,r.jsx)(n.p,{children:"As a Goose user and developer, you can build Goose from the source file within a Docker container. This approach not only provides security benefits by creating an isolated environment but also enhances consistency and portability. For example, if you need to troubleshoot an error on a platform you don't usually work with (such as Ubuntu), you can easily debug it using Docker."}),"\n",(0,r.jsxs)(n.p,{children:["To begin, you will need to modify the ",(0,r.jsx)(n.code,{children:"Dockerfile"})," and ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," files to suit your requirements. Some changes you might consider include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Setting your API key, provider, and model in the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file. Our example uses the Google API key and its corresponding settings, but you can find your own list of API keys ",(0,r.jsx)(n.a,{href:"https://github.com/block/goose/blob/main/ui/desktop/src/components/settings/models/hardcoded_stuff.tsx#L86-L94",children:"here"})," and the corresponding settings ",(0,r.jsx)(n.a,{href:"https://github.com/block/goose/blob/main/ui/desktop/src/components/settings/models/hardcoded_stuff.tsx#L67-L77",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Changing the base image to a different Linux distribution in the ",(0,r.jsx)(n.code,{children:"Dockerfile"}),". Our example uses Ubuntu, but you can switch to another distribution such as CentOS, Fedora, or Alpine."]}),"\n",(0,r.jsxs)(n.li,{children:["Mounting your personal Goose settings and hints files in the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file. This allows you to use your personal settings and hints files within the Docker container."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Among these, only the first change is mandatory. We need to set the API key, provider, and model as environment variables because the keyring settings do not work on Ubuntu in Docker."}),"\n",(0,r.jsx)(n.p,{children:"After setting the credentials, you can build the Docker image using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f documentation/docs/docker/docker-compose.yml build\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, run the container and connect to it using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f documentation/docs/docker/docker-compose.yml run --rm goose-cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"Inside the container, first try to run the following command to configure Goose:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"goose configure\n"})}),"\n",(0,r.jsx)(n.p,{children:"When prompted to save the API key to the keyring, select No, as we are already passing the API key as an environment variable."}),"\n",(0,r.jsx)(n.p,{children:"Then, you can configure Goose a second time, and this time, you can add extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"goose configure\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For example, you can add the ",(0,r.jsx)(n.code,{children:"Developer"})," extension. After that, you can start a session:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"goose session\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should now be able to connect to Goose with the developer extension enabled. Follow the other tutorials if you want to enable more extensions."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var t=o(4164);const r={tabItem:"tabItem_Ymn6"};var s=o(4848);function i(e){let{children:n,hidden:o,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:o,children:n})}},5537:(e,n,o)=>{o.d(n,{A:()=>j});var t=o(6540),r=o(4164),s=o(5627),i=o(6347),a=o(372),l=o(604),c=o(1861),u=o(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:o}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:o,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(o);return[r,(0,t.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=o(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=o(4848);function x(e){let{className:n,block:o,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,o=l.indexOf(n),r=a[o].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function v(e){let{lazy:n,children:o,selectedValue:s}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);