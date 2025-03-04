"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9745],{5330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tutorials/google-maps-mcp","title":"Google Maps Extension","description":"Add Google Maps MCP Server as a Goose Extension","source":"@site/docs/tutorials/google-maps-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/google-maps-mcp","permalink":"/goose/pr-preview/pr-1510/docs/tutorials/google-maps-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Google Maps Extension","description":"Add Google Maps MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Google Drive Extension","permalink":"/goose/pr-preview/pr-1510/docs/tutorials/google-drive-mcp"},"next":{"title":"JetBrains Extension","permalink":"/goose/pr-preview/pr-1510/docs/tutorials/jetbrains-mcp"}}');var s=i(4848),t=i(8453),r=i(5537),l=i(9329);i(5887);const a={title:"Google Maps Extension",description:"Add Google Maps MCP Server as a Goose Extension"},d=void 0,c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps",children:"Google Maps MCP Server"})," as a Goose extension to enable geocoding, place searching, distance calculations, elevation data retrieval, and directions."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx -y @modelcontextprotocol/server-google-maps\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment Variable"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GOOGLE_MAPS_API_KEY: <YOUR_TOKEN>\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,s.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  Google Maps\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  Google Maps\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @modelcontextprotocol/server-google-maps\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Obtain a ",(0,s.jsx)(n.a,{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",children:"Google Maps API Key"})," and paste it in."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  Google Maps\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @modelcontextprotocol/server-google-maps\n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  Yes \n \u2502\n \u25c7  Environment variable name:\n \u2502  GOOGLE_MAPS_API_KEY\n \u2502\n \u25c7  Environment variable value:\n \u2502  \u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n \u2502\n \u25c7  Add another environment variable?\n \u2502  No \n // highlight-end\n \u2514  Added github extension\n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40modelcontextprotocol%2Fserver-google-maps&id=google-maps&name=Google%20Maps&description=Google%20Maps%20API%20integration&env=GOOGLE_MAPS_API_KEY%3DGoogle%20Maps%20API%20key",children:"Launch the installer"})}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,s.jsxs)(n.li,{children:["Obtain a ",(0,s.jsx)(n.a,{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",children:"GOOGLE_MAPS_API_KEY"})," and paste it in"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Scroll to the top and click ",(0,s.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"Goose acts as an autonomous agent that tracks a delivery driver\u2019s location, updates the customer in real-time, and adjusts ETAs dynamically based on Google Maps traffic data."}),"\n",(0,s.jsx)(n.p,{children:"Goose can:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Monitor Driver Location"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Goose gets the driver\u2019s GPS coordinates every few seconds."}),"\n",(0,s.jsx)(n.li,{children:"If the driver\u2019s location is significantly behind schedule, Goose recalculates the ETA."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Traffic-Aware ETA Adjustments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Goose queries Google Maps for live traffic conditions."}),"\n",(0,s.jsx)(n.li,{children:"If delays are detected, Goose updates the customer\u2019s tracker with a new estimated time."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dynamic Customer Notifications"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the driver is stuck in traffic, Goose sends an alert to the customer: \u201cYour driver is running late due to traffic. Updated ETA: 7:25 PM.\u201d"}),"\n",(0,s.jsx)(n.li,{children:"If the driver is ahead of schedule, Goose notifies the restaurant to prepare the food earlier."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Track the live GPS location of driver ID #12345. Query Google Maps for real-time traffic data and adjust the estimated delivery time if delays exceed 5 minutes. If ETA changes, update the customer\u2019s live tracker and send an SMS notification. If the delay is greater than 20 minutes, check if another driver within a 1-mile radius can take over the delivery.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsxs)(n.admonition,{title:"CLI",type:"note",children:[(0,s.jsx)(n.p,{children:"Okay, I will track Driver #12345, query Google Maps for traffic data, adjust the ETA, and notify the customer."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Track Driver's GPS Location"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Driver ID:"})," #12345"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Starting Point:"})," 1955 Broadway, Suite 600, Oakland, CA 94612"]}),"\n"]}),(0,s.jsx)(n.p,{children:"Driver #12345's movement:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2025-02-23 08:20:00: Latitude: 37.8074, Longitude: -122.2697 (Starting point)\n2025-02-23 08:21:00: Latitude: 37.8080, Longitude: -122.2690\n2025-02-23 08:22:00: Latitude: 37.8090, Longitude: -122.2680\n2025-02-23 08:23:00: Latitude: 37.8100, Longitude: -122.2670\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Geocode Destination Address"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customer Address:"})," 2111 Mission Street, San Francisco, CA"]}),"\n"]}),(0,s.jsx)(n.p,{children:"I will convert this address into geographic coordinates:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u2500\u2500\u2500 maps_geocode | googlemaps \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"})}),(0,s.jsx)(n.p,{children:"address: 2111 Mission Street, San Francisco, CA"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Latitude: 37.7631446\nLongitude: -122.4192073\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Get Initial Directions and ETA"})}),(0,s.jsx)(n.p,{children:"I will get the initial route and ETA from the driver's starting point to the customer's address."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u2500\u2500\u2500 maps_directions | googlemaps \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"})}),(0,s.jsx)(n.p,{children:"destination: 2111 Mission St, San Francisco, CA\nmode: driving\norigin: ..."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Distance: 12.1 miles\nInitial ETA: 21 minutes\nEstimated arrival at: 08:41 AM\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Monitor Traffic and Adjust ETA"})}),(0,s.jsx)(n.p,{children:"I will monitor traffic updates and recalculate the ETA periodically."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Remaining Distance: 8 miles\nUpdated ETA: 15 minutes\nEstimated arrival at: 08:45 AM\n"})}),(0,s.jsx)(n.p,{children:"There is no significant delay."}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"At 08:35 AM:"})," There's a traffic incident."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u2500\u2500\u2500 maps_directions | googlemaps \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"})}),(0,s.jsx)(n.p,{children:"destination: 2111 Mission St, San Francisco, CA\nmode: driving\norigin: Latitude: 37.8100, Longitude: -122.2670"}),(0,s.jsx)(n.p,{children:"I apologize, I am unable to use the lat/long for the request. I will call google maps api with names instead."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u2500\u2500\u2500 maps_directions | googlemaps \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"})}),(0,s.jsx)(n.p,{children:"destination: 2111 Mission St, San Francisco, CA\nmode: driving\norigin: ..."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Remaining Distance: 7 miles\nUpdated ETA: 26 minutes\nEstimated arrival at: 08:46 AM\n"})}),(0,s.jsx)(n.p,{children:'The ETA has increased by 5 minutes from the original ETA of 08:41 AM. The directions now include a message: "Expect delays due to congestion."'}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Update Customer and Send SMS"})}),(0,s.jsx)(n.p,{children:"[... other extensions used (e.g. Webhooks, MySQL, ClickSend)...]"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Update Live Tracker:"})," The customer's live tracking interface is updated to reflect the new ETA of 08:46 AM."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send SMS Notification:"})," ",(0,s.jsx)(n.em,{children:'"Your delivery is now expected to arrive at approximately 08:46 AM due to traffic. We apologize for the inconvenience."'})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5887:(e,n,i)=>{i.d(n,{A:()=>t});i(6540);var o=i(2362),s=i(4848);const t=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}}}]);