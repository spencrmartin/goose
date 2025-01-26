"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[3822],{9575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>u,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"Goose currently works on macOS and Linux systems and supports both ARM and x86 architectures. If you\'d like to request support for additional operating systems, please open an issue on GitHub.","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/goose/v1/docs/quickstart","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Quickstart"},"sidebar":"tutorialSidebar","next":{"title":"Getting Started","permalink":"/goose/v1/docs/category/getting-started"}}');var o=t(4848),r=t(8453),i=t(5537),l=t(9329),a=t(6289),c=t(6960);const u={sidebar_position:2,title:"Quickstart"},d="Goose in 5 minutes",h={},p=[{value:"Install Goose",id:"install-goose",level:2},{value:"Configure Provider",id:"configure-provider",level:2},{value:"Start Session",id:"start-session",level:2},{value:"Write Prompt",id:"write-prompt",level:2},{value:"Install an Extension",id:"install-an-extension",level:2},{value:"Next Steps",id:"next-steps",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"goose-in-5-minutes",children:"Goose in 5 minutes"})}),"\n",(0,o.jsx)(n.admonition,{title:"Supported Environments",type:"info",children:(0,o.jsxs)(n.p,{children:["Goose currently works on ",(0,o.jsx)(n.strong,{children:"macOS"})," and ",(0,o.jsx)(n.strong,{children:"Linux"})," systems and supports both ",(0,o.jsx)(n.strong,{children:"ARM"})," and ",(0,o.jsx)(n.strong,{children:"x86"})," architectures. If you'd like to request support for additional operating systems, please ",(0,o.jsx)(n.a,{href:"https://github.com/block/goose/issues/new?template=Blank+issue",children:"open an issue on GitHub"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Goose is an open source AI agent that supercharges your software development by automating coding tasks. This quick tutorial will guide you through getting started with Goose!"}),"\n",(0,o.jsx)(n.h2,{id:"install-goose",children:"Install Goose"}),"\n",(0,o.jsx)(n.p,{children:"You can use Goose via CLI or Desktop application."}),"\n",(0,o.jsxs)(i.A,{groupId:"interface",children:[(0,o.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,o.jsx)(n.p,{children:"Run the following command to install the latest version of Goose:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | sh\n"})})]}),(0,o.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,o.jsxs)(n.p,{children:["To install the latest version of Goose, click the ",(0,o.jsx)(n.strong,{children:"button"})," below:"]}),(0,o.jsx)("div",{className:"pill-button",children:(0,o.jsxs)(a.A,{className:"button button--primary button--lg",to:"https://github.com/block/goose/releases/download/stable/Goose.zip",children:[(0,o.jsx)(c.i,{}),(0,o.jsx)(n.p,{children:"download goose desktop"})]})}),(0,o.jsx)("div",{style:{marginTop:"1rem"},children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Unzip the downloaded ",(0,o.jsx)(n.code,{children:"Goose.zip"})," file."]}),"\n",(0,o.jsx)(n.li,{children:"Run the executable file to launch the Goose desktop application."}),"\n"]})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"configure-provider",children:"Configure Provider"}),"\n",(0,o.jsxs)(n.p,{children:["Goose works with ",(0,o.jsx)(n.a,{href:"/docs/getting-started/providers",children:"supported LLM providers"}),". When you install Goose, you'll be prompted to choose your preferred LLM and supply an API key."]}),"\n",(0,o.jsxs)(i.A,{groupId:"interface",children:[(0,o.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,o.jsx)(n.p,{children:"Use the up and down arrow keys to navigate the CLI menu, and press Enter once you've selected a choice."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 Google Gemini\n\u2502\n\u25c7 Provider Google Gemini requires GOOGLE_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502    \n\u25c7 Enter a model from that provider:\n\u2502 gemini-2.0-flash-exp\n\u2502\n\u25c7 Hello! You're all set and ready to go, feel free to ask me anything!\n\u2502\n\u2514 Configuration saved successfully\n"})})]}),(0,o.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Set Up a Provider UI",src:t(6034).A+"",width:"752",height:"802"})})})]}),"\n",(0,o.jsxs)(n.admonition,{title:"Billing",type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://aistudio.google.com/app/apikey",children:"Google Gemini"})," offers a free tier you can get started with. Otherwise, you'll need to ensure that you have credits available in your LLM Provider account to successfully make requests."]}),(0,o.jsxs)(n.p,{children:["Some providers also have rate limits on API usage, which can affect your experience. Check out our ",(0,o.jsx)(n.a,{href:"/docs/guides/handling-llm-rate-limits-with-goose",children:"Handling Rate Limits"})," guide to learn how to efficiently manage these limits while using Goose."]})]}),"\n",(0,o.jsx)(n.h2,{id:"start-session",children:"Start Session"}),"\n",(0,o.jsx)(n.p,{children:"Sessions are single, continuous conversations between you and Goose. Let's start one."}),"\n",(0,o.jsxs)(i.A,{groupId:"interface",children:[(0,o.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Make an empty directory (e.g. ",(0,o.jsx)(n.code,{children:"goose-demo"}),") and navigate to that directory from the terminal."]}),"\n",(0,o.jsx)(n.li,{children:"To start a new session, run:"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"goose session \n"})})]}),(0,o.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,o.jsx)(n.p,{children:"After choosing an LLM provider, you\u2019ll see the session interface ready for use."}),(0,o.jsx)(n.p,{children:"Type your questions, tasks, or instructions directly into the input field, and Goose will immediately get to work."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Install Extension",src:t(7318).A+"",width:"1490",height:"1160"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"write-prompt",children:"Write Prompt"}),"\n",(0,o.jsx)(n.p,{children:"From the prompt, you can interact with Goose by typing your instructions exactly as you would speak to a developer."}),"\n",(0,o.jsx)(n.p,{children:"Let's ask Goose to make a tic-tac-toe game!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"create an interactive browser-based tic-tac-toe game in javascript where a player competes against a bot\n"})}),"\n",(0,o.jsx)(n.p,{children:"Goose will create a plan and then get right to work on implementing it. Once done, your directory should contain a JavaScript file as well as an HTML page for playing."}),"\n",(0,o.jsx)(n.h2,{id:"install-an-extension",children:"Install an Extension"}),"\n",(0,o.jsxs)(n.p,{children:["While you're able to manually navigate to your working directory and open the HTML file in a browser, wouldn't it be better if Goose did that for you? Let's give Goose the ability to open a web browser by enabling the ",(0,o.jsx)(n.code,{children:"Computer Controller"})," extension."]}),"\n",(0,o.jsxs)(i.A,{groupId:"interface",children:[(0,o.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["End the current session by entering ",(0,o.jsx)(n.code,{children:"Ctrl+C"})," so that you can return to the terminal's command prompt."]}),"\n",(0,o.jsx)(n.li,{children:"Run the configuration command"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"Add extension"})," > ",(0,o.jsx)(n.code,{children:"Built-in Extension"})," > ",(0,o.jsx)(n.code,{children:"Computer Controller"}),". This ",(0,o.jsx)(n.a,{href:"https://block.github.io/goose/v1/extensions/detail/nondeveloper",children:"extension"})," enables webscraping, file caching, and automations."]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n\u2502  \u25cf Computer Controller (controls for webscraping, file caching, and automations)\n\u2502  \u25cb Google Drive \n\u2502  \u25cb Memory \n\u2502  \u25cb JetBrains \n\u2514  \n"})}),(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Now that Goose has browser capabilities, let's resume your last session:"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:" goose session -r\n"})}),(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Ask Goose to launch your game in a browser:"}),"\n"]})]}),(0,o.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Locate the menu (",(0,o.jsx)(n.code,{children:"..."}),") in the top right corner of the Goose Desktop."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"Settings"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Under the ",(0,o.jsx)(n.code,{children:"Extensions"})," section, toggle the ",(0,o.jsx)(n.code,{children:"Computer Controller"})," extension to enable it. This ",(0,o.jsx)(n.a,{href:"https://block.github.io/goose/v1/extensions/detail/nondeveloper",children:"extension"})," enables webscraping, file caching, and automations."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"<- Back"})," in the upper left corner to return to your session."]}),"\n",(0,o.jsx)(n.li,{children:"Now that Goose has browser capabilities, let's ask it to launch your game in a browser:"}),"\n"]})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"open index.html in a browser\n"})}),"\n",(0,o.jsx)(n.p,{children:"Go ahead and play your game, I know you want to \ud83d\ude02 ... good luck!"}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsx)(n.p,{children:"Congrats, you've successfully used Goose to develop a web app! \ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:"Here are some ideas for next steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Continue your session with Goose and it improve your game (styling, functionality, etc)."}),"\n",(0,o.jsxs)(n.li,{children:["Browse other available ",(0,o.jsx)(n.a,{href:"/docs/getting-started/using-extensions",children:"extensions"})," and install more to enhance Goose's functionality even further."]}),"\n",(0,o.jsxs)(n.li,{children:["Provide Goose with a ",(0,o.jsx)(n.a,{href:"/docs/guides/using-goosehints",children:"set of hints"})," to use within your sessions."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(6540),o=t(4164),r=t(5627),i=t(6347),l=t(372),a=t(604),c=t(1861),u=t(8749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),o=l[t].value;o!==s&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{a.push(e)},onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},6960:(e,n,t)=>{t.d(n,{i:()=>o});var s=t(4848);const o=e=>{let{className:n=""}=e;return(0,s.jsx)("svg",{width:"1.5rem",height:"1.5rem",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",className:n,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 12.15a1 1 0 0 0-1.52-1.3L13 12.296V3a1 1 0 1 0-2 0v9.297l-1.24-1.448a1 1 0 0 0-1.52 1.302l3 3.5a1 1 0 0 0 1.52 0l3-3.5ZM5 16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3H5v-3Z",fill:"currentColor"})})}},6034:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/set-up-provider-ui-a6ba5f66d16937ee91dbad22c101c232.png"},7318:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ui-session-interface-b4c3044f513ad12b0332a70304e2d8d6.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);