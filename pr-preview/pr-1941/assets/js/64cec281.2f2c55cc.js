/*! For license information please see 64cec281.2f2c55cc.js.LICENSE.txt */
"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[107],{2267:(e,s,t)=>{t.d(s,{E:()=>a});t(6540);var n=t(4848);const a=e=>{let{children:s,className:t="",variant:a="default"}=e;return(0,n.jsx)("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${{default:"bg-purple-100 text-purple-800",secondary:"bg-gray-100 text-gray-800"}[a]} ${t}`,children:s})}},6792:(e,s,t)=>{t.d(s,{$:()=>a});t(6540);var n=t(4848);const a=e=>{let{children:s,className:t="",variant:a="default",size:r="default",...i}=e;return(0,n.jsx)("button",{className:`flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-offset-gray-900 ${{default:"bg-black dark:bg-white text-white dark:text-black hover:bg-accent/90 dark:hover:bg-accent/80",ghost:"bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300",link:"bg-transparent text-accent hover:underline hover:text-textProminent dark:text-accent/90"}[a]} ${{default:"px-6 py-3",icon:"p-2"}[r]} ${t}`,...i,children:s})}},825:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var n=t(3938),a=t(6445),r=t(7360),i=t(2091),l=t(1224),c=t(8368),o=t(6792),d=t(2267),x=t(1547),m=t(6347),h=t(6540),u=t(8809),p=t(6289),v=t(4848);function j(e){let{server:s}=e;return(0,v.jsx)(n.A,{children:(0,v.jsx)("div",{className:"min-h-screen flex items-start justify-center py-16",children:(0,v.jsx)("div",{className:"container max-w-5xl mx-auto px-4",children:(0,v.jsxs)("div",{className:"flex gap-8",children:[(0,v.jsx)("div",{children:(0,v.jsx)(p.A,{to:"/extensions",className:"no-underline",children:(0,v.jsxs)(o.$,{className:"flex items-center gap-2 hover:cursor-pointer",children:[(0,v.jsx)(a.A,{className:"h-4 w-4"}),"Back"]})})}),(0,v.jsx)("div",{className:"server-card flex-1",children:(0,v.jsxs)("div",{className:"card p-8",children:[(0,v.jsx)("div",{className:"card-header mb-6",children:(0,v.jsxs)("div",{className:"flex items-center gap-4",children:[(0,v.jsx)("h1",{className:"font-medium text-5xl text-textProminent m-0",children:s.name}),s.is_builtin&&(0,v.jsx)(d.E,{variant:"secondary",className:"text-sm",children:"Built-in"})]})}),(0,v.jsxs)("div",{className:"card-content space-y-6",children:[(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:"text-xl text-textSubtle m-0",children:s.description})}),s.installation_notes&&(0,v.jsx)("div",{children:(0,v.jsx)("p",{className:"text-md text-textSubtle m-0",children:s.installation_notes})}),(0,v.jsx)("div",{className:"space-y-2",children:s.is_builtin?(0,v.jsxs)("div",{className:"flex items-center gap-2",children:[(0,v.jsx)(r.A,{className:"h-4 w-4 text-textSubtle shrink-0"}),(0,v.jsx)("span",{className:"text-sm text-textSubtle",children:"Can be enabled in the goose settings page"})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex items-center gap-2 text-textStandard",children:[(0,v.jsx)(i.A,{className:"h-4 w-4"}),(0,v.jsx)("h4",{className:"font-medium m-0",children:"Command"})]}),(0,v.jsx)("div",{className:"command-content",children:(0,v.jsx)("code",{className:"text-sm block",children:`goose session --with-extension "${s.command}"`})})]})}),s.environmentVariables&&(0,v.jsxs)("div",{className:"space-y-4",children:[(0,v.jsx)("h2",{className:"text-lg font-medium text-textStandard m-0",children:"Environment Variables"}),s.environmentVariables.length>0?(0,v.jsx)("div",{children:s.environmentVariables.map((e=>(0,v.jsxs)("div",{className:"border-b border-borderSubtle py-4 first:pt-0 last:border-0",children:[(0,v.jsx)("div",{className:"text-sm text-textStandard font-medium",children:e.name}),(0,v.jsx)("div",{className:"text-textSubtle text-sm mt-1",children:e.description}),e.required&&(0,v.jsx)(d.E,{variant:"secondary",className:"mt-2",children:"Required"})]},e.name)))}):(0,v.jsxs)("div",{className:"text-textSubtle text-sm flex items-center gap-2",children:[(0,v.jsx)(r.A,{className:"h-4 w-4"}),"No environment variables needed"]})]}),(0,v.jsxs)("div",{className:"card-footer",children:[(0,v.jsxs)("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"card-stats",children:[(0,v.jsx)(l.A,{className:"h-4 w-4"}),(0,v.jsxs)("span",{children:[s.githubStars," on Github"]})]}),s.is_builtin?(0,v.jsx)("div",{className:"built-in-badge",title:"This extension is built into goose and can be enabled in the settings page",children:"Built-in"}):(0,v.jsxs)("a",{href:(0,x.H)(s),target:"_blank",rel:"noopener noreferrer",className:"install-button",children:[(0,v.jsx)("span",{children:"Install"}),(0,v.jsx)(c.A,{className:"h-4 w-4"})]})]})]})]})})]})})})})}function f(){const e=(0,m.zy)(),[s,t]=(0,h.useState)(null),[r,i]=(0,h.useState)(!0),[l,c]=(0,h.useState)(null);return(0,h.useEffect)((()=>{(async()=>{try{i(!0),c(null);const s=await(0,u.V)(),n=new URLSearchParams(e.search).get("id");if(!n)return void c("No extension ID provided");const a=s.find((e=>e.id===n));a?t(a):c("Extension not found")}catch(s){c("Failed to load extension details"),console.error(s)}finally{i(!1)}})()}),[e]),r?(0,v.jsx)(n.A,{children:(0,v.jsx)("div",{className:"min-h-screen flex items-start justify-center py-16",children:(0,v.jsx)("div",{className:"container max-w-5xl mx-auto px-4",children:(0,v.jsxs)("div",{className:"flex gap-8",children:[(0,v.jsx)("div",{children:(0,v.jsx)(p.A,{to:"/extensions",className:"no-underline",children:(0,v.jsxs)(o.$,{className:"flex items-center gap-2 hover:text-textProminent hover:cursor-pointer",children:[(0,v.jsx)(a.A,{className:"h-4 w-4"}),"Back"]})})}),(0,v.jsx)("div",{className:"server-card flex-1",children:(0,v.jsx)("div",{className:"card p-8",children:(0,v.jsxs)("div",{className:"animate-pulse",children:[(0,v.jsx)("div",{className:"h-12 w-48 bg-bgSubtle rounded-lg mb-4"}),(0,v.jsx)("div",{className:"h-6 w-full bg-bgSubtle rounded-lg mb-2"}),(0,v.jsx)("div",{className:"h-6 w-2/3 bg-bgSubtle rounded-lg"})]})})})]})})})}):l||!s?(0,v.jsx)(n.A,{children:(0,v.jsx)("div",{className:"min-h-screen flex items-start justify-center py-16",children:(0,v.jsx)("div",{className:"container max-w-5xl mx-auto px-4",children:(0,v.jsxs)("div",{className:"flex gap-8",children:[(0,v.jsx)("div",{children:(0,v.jsx)(p.A,{to:"/extensions",className:"no-underline",children:(0,v.jsxs)(o.$,{variant:"ghost",className:"flex items-center gap-2 hover:text-textProminent hover:cursor-pointer",children:[(0,v.jsx)(a.A,{className:"h-4 w-4"}),"Back"]})})}),(0,v.jsx)("div",{className:"server-card flex-1",children:(0,v.jsx)("div",{className:"card p-8",children:(0,v.jsx)("div",{className:"text-red-500",children:l||"Extension not found"})})})]})})})}):(0,v.jsx)(j,{server:s})}},1547:(e,s,t)=>{function n(e){if(e.is_builtin){return`goose://extension?${["cmd=goosed","arg=mcp",`arg=${encodeURIComponent(e.id)}`,`description=${encodeURIComponent(e.id)}`].join("&")}`}const s=e.command.split(" "),t=s[0],n=s.slice(1);return`goose://extension?${[`cmd=${encodeURIComponent(t)}`,...n.map((e=>`arg=${encodeURIComponent(e)}`)),`id=${encodeURIComponent(e.id)}`,`name=${encodeURIComponent(e.name)}`,`description=${encodeURIComponent(e.description)}`,...e.environmentVariables.filter((e=>e.required)).map((e=>`env=${encodeURIComponent(`${e.name}=${e.description}`)}`))].join("&")}`}t.d(s,{H:()=>n})},8809:(e,s,t)=>{t.d(s,{V:()=>a,d:()=>r});const n="/goose/servers.json";async function a(){try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const s=await e.json();return console.log("Fetched MCP servers data:",s),s}catch(e){throw console.error("Error fetching MCP servers:",e),e}}async function r(e){const s=await a(),t=e.toLowerCase();return s.filter((e=>{const s=e.name.toLowerCase(),n=e.description.toLowerCase();return s.includes(t)||n.includes(t)}))}},5395:(e,s,t)=>{t.d(s,{A:()=>l});var n=t(6540);const a=(...e)=>e.filter(((e,s,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===s)).join(" ").trim();var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,n.forwardRef)((({color:e="currentColor",size:s=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:l="",children:c,iconNode:o,...d},x)=>(0,n.createElement)("svg",{ref:x,...r,width:s,height:s,stroke:e,strokeWidth:i?24*Number(t)/Number(s):t,className:a("lucide",l),...d},[...o.map((([e,s])=>(0,n.createElement)(e,s))),...Array.isArray(c)?c:[c]]))),l=(e,s)=>{const t=(0,n.forwardRef)((({className:t,...r},l)=>{return(0,n.createElement)(i,{ref:l,iconNode:s,className:a(`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...r});var c}));return t.displayName=`${e}`,t}},6445:(e,s,t)=>{t.d(s,{A:()=>n});const n=(0,t(5395).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},8368:(e,s,t)=>{t.d(s,{A:()=>n});const n=(0,t(5395).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},7360:(e,s,t)=>{t.d(s,{A:()=>n});const n=(0,t(5395).A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},1224:(e,s,t)=>{t.d(s,{A:()=>n});const n=(0,t(5395).A)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},2091:(e,s,t)=>{t.d(s,{A:()=>n});const n=(0,t(5395).A)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]])}}]);