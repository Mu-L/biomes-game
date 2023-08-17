"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||n;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:5},l="Server Architecture",s={unversionedId:"basics/server-overview",id:"basics/server-overview",title:"Server Architecture",description:"Biomes server functions are divided across multiple microservices, to be able to scale efficiently according to demand.",source:"@site/docs/basics/server-overview.md",sourceDirName:"basics",slug:"/basics/server-overview",permalink:"/biomes-game/docs/basics/server-overview",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Entity Component System (ECS)",permalink:"/biomes-game/docs/basics/ecs"}},o={},c=[{value:"Web",id:"web",level:2},{value:"Logic",id:"logic",level:2},{value:"Asset",id:"asset",level:2},{value:"Trigger",id:"trigger",level:2},{value:"Chat",id:"chat",level:2},{value:"Task",id:"task",level:2},{value:"Sync",id:"sync",level:2},{value:"OOB",id:"oob",level:2},{value:"Newton",id:"newton",level:2},{value:"Anima",id:"anima",level:2},{value:"Map",id:"map",level:2},{value:"Replica",id:"replica",level:2},{value:"Gaia",id:"gaia",level:2},{value:"Redis / Redis Bridge",id:"redis--redis-bridge",level:2},{value:"ETCD",id:"etcd",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-architecture"},"Server Architecture"),(0,i.kt)("p",null,"Biomes server functions are divided across multiple microservices, to be able to scale efficiently according to demand."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Server Architecture",src:r(2683).Z,width:"1412",height:"1015"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a player loads the game, they load a client from the ",(0,i.kt)("inlineCode",{parentName:"li"},"web")," server."),(0,i.kt)("li",{parentName:"ul"},"The client then loads assets from the ",(0,i.kt)("inlineCode",{parentName:"li"},"asset")," server, and establishes a connection with the ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," server to fetch ECS data local to their player's position."),(0,i.kt)("li",{parentName:"ul"},"Players' interactions primarily send ECS events to the ",(0,i.kt)("inlineCode",{parentName:"li"},"logic")," server, but can also make calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"web"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"chat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"oob"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"map")," directly."),(0,i.kt)("li",{parentName:"ul"},"Interactions are relayed to players primarily through ECS updates, which are synced to the client with the ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," server"),(0,i.kt)("li",{parentName:"ul"},"Other servers are not directly player driven, but changes are made to ECS components that are synced similarly through the ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," server. An example is the ",(0,i.kt)("inlineCode",{parentName:"li"},"newton")," moving dropped items independently from any player interactions. ",(0,i.kt)("inlineCode",{parentName:"li"},"trigger"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"task"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"newton"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"anima"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"gaia")," all fall into the pattern.")),(0,i.kt)("p",null,"When running locally, you can specify a subset of servers that you're interested in running by specifying the server names, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"./b web trigger"),". Servers will automatically start any servers they depend upon to run correctly."),(0,i.kt)("h1",{id:"servers"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server"},"Servers")),(0,i.kt)("h2",{id:"web"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/web"},"Web")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NextJS based Web server"),(0,i.kt)("li",{parentName:"ul"},"Serves all API endpoints, the main splash page, and the admin site"),(0,i.kt)("li",{parentName:"ul"},"Stateless")),(0,i.kt)("h2",{id:"logic"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/logic"},"Logic")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runs high-level events for players, typically those that edit terrain")),(0,i.kt)("p",null,"Most player events will create logic server events through ",(0,i.kt)("a",{parentName:"p",href:"/biomes-game/docs/basics/ecs"},"ECS"),"."),(0,i.kt)("p",null,"Logic server events are defined by ECS event handlers in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ill-inc/biomes-game/blob/main/src/server/logic/events/all.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"server/logic/events/all.ts"))),(0,i.kt)("p",null,"If you are intending to modify or add player-facing game interactions or logic, this is likely the place to start."),(0,i.kt)("h2",{id:"asset"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/asset"},"Asset")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is just another copy of the Web server"),(0,i.kt)("li",{parentName:"ul"},"Different tier of servers as they have different characteristics due to running Python"),(0,i.kt)("li",{parentName:"ul"},"Generates the player mesh")),(0,i.kt)("h2",{id:"trigger"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/trigger"},"Trigger")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Listens to the Firehose, and has a time-based processor - both are inputs to triggers"),(0,i.kt)("li",{parentName:"ul"},"Triggers produce game updates, they:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unlock recipes"),(0,i.kt)("li",{parentName:"ul"},"Handle quest progression"),(0,i.kt)("li",{parentName:"ul"},"Handle expiry / icing / timeouts")))),(0,i.kt)("h2",{id:"chat"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/chat"},"Chat")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses a distributed lock to maintain a single instance"),(0,i.kt)("li",{parentName:"ul"},"Distributes chat messages to sync servers"),(0,i.kt)("li",{parentName:"ul"},"Processes a pub-sub feed of chats to guarantee distribution and storage"),(0,i.kt)("li",{parentName:"ul"},"Publishes firehose events around DMs")),(0,i.kt)("h2",{id:"task"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/task"},"Task")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processes long-lived asynchronous tasks"),(0,i.kt)("li",{parentName:"ul"},"Interacts with Firestore, produces Game events, interacts with crypto"),(0,i.kt)("li",{parentName:"ul"},"API is indirect, you schedule tasks by creating them in Firestore")),(0,i.kt)("h2",{id:"sync"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/sync"},"Sync")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebSocket termination endpoint for clients"),(0,i.kt)("li",{parentName:"ul"},"Maintains a copy of the entire world as a replica, serves the relevant parts of this to clients connected to it"),(0,i.kt)("li",{parentName:"ul"},"Publishes, on behalf of clients, game events")),(0,i.kt)("h2",{id:"oob"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/oob"},"OOB")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy of sync server for directly serving individual entities out of band"),(0,i.kt)("li",{parentName:"ul"},"Used for loading distant data to clients")),(0,i.kt)("h2",{id:"newton"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/newton"},"Newton")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handles drops, their physics and when they get picked up")),(0,i.kt)("h2",{id:"anima"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/anima"},"Anima")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handles the AI for NPCs in the world, is sharded so each server only handles a subset")),(0,i.kt)("h2",{id:"map"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/map"},"Map")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Periodically generates the top-down rendering of the world for the map")),(0,i.kt)("h2",{id:"replica"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/replica"},"Replica")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To eliminate the fan-out cost being directly impacting on the game, anyone who needs a copy of the world shall subscribe to a replica tier"),(0,i.kt)("li",{parentName:"ul"},"Maintains a copy of the world, subscribes directly to the World"),(0,i.kt)("li",{parentName:"ul"},"Supports the subscription part of the current Game API")),(0,i.kt)("h2",{id:"gaia"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/server/gaia_v2"},"Gaia")),(0,i.kt)("p",null,'Gaia authoritively controls all "natural" game simulation in game:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lighting"),(0,i.kt)("li",{parentName:"ul"},"Muck Creep"),(0,i.kt)("li",{parentName:"ul"},"Plant growth and regrowth"),(0,i.kt)("li",{parentName:"ul"},"Farming")),(0,i.kt)("h2",{id:"redis--redis-bridge"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/ill-inc/biomes-game/tree/main/src/redis"},"Redis / Redis Bridge")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main storage for the world data, and an ability to provide transactions ontop of it."),(0,i.kt)("li",{parentName:"ul"},"Bridge component maps updates that occur in Redis to the Firehose, only one bridge is running at a time.")),(0,i.kt)("h2",{id:"etcd"},"ETCD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distributed locks are maintained using a running etcd server")))}u.isMDXComponent=!0},2683:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/biomes-server-architecture-3389363dd49b39c0d728dff79743fe33.png"}}]);