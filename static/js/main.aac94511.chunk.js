(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{64:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),o=(a(64),a(12)),c=a(103),l=a(105),d=a(106),h=a(107),p=a(117),u=a(101),j=a(98),b=a(118),g=a(21),m=a(102),f=a(104),O=a(40),x=a(3);var w=function(e){return Object(x.jsx)(j.a,Object(O.a)({button:!0,component:"a",target:"_blank",rel:"noopener noreferrer"},e))};function y(e){var t=e.classes,a=Object(n.useState)(""),r=Object(o.a)(a,2),i=r[0],s=r[1],O=Object(n.useState)(""),y=Object(o.a)(O,2),v=y[0],k=y[1],T=Object(n.useState)(""),S=Object(o.a)(T,2),I=S[0],P=S[1],E=Object(n.useState)(""),G=Object(o.a)(E,2),C=G[0],N=G[1],F=Object(n.useState)(""),L=Object(o.a)(F,2),R=L[0],W=L[1],_=Object(n.useState)(""),A=Object(o.a)(_,2),D=A[0],z=A[1],B=Object(n.useState)(""),q=Object(o.a)(B,2),H=q[0],J=q[1],M=Object(n.useState)(!1),U=Object(o.a)(M,2),K=(U[0],U[1]);return Object(n.useEffect)((function(){fetch("https://api.github.com/users/whynot1597",{method:"GET",headers:new Headers({Accept:"application/vnd.github.cloak-preview"})}).then((function(e){return e.json()})).then((function(e){s(e.avatar_url),k(e.name),P(e.bio),N(e.html_url),W(e.login),z(e.blog),J(e.location),K(!0)})).catch((function(e){return console.error(e)}))})),Object(x.jsx)("div",{children:Object(x.jsxs)(p.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left",children:[Object(x.jsx)(u.a,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(b.a,{src:i,className:t.logo})},"avatarURL")}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{variant:"h3",children:v})},"name"),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{variant:"h4",children:I})},"bio"),Object(x.jsxs)(w,{button:!0,href:C,children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(c.a,{})}),Object(x.jsx)(f.a,{primary:"@"+R,primaryTypographyProps:{variant:"button"}})]},"github"),Object(x.jsxs)(w,{button:!0,href:D,children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(l.a,{})}),Object(x.jsx)(f.a,{primary:"LinkedIn Profile",primaryTypographyProps:{variant:"button"}})]},"linkedin"),Object(x.jsxs)(w,{button:!0,href:"https://whynot1597.github.io/Jeremy_Goldberg_Resume.pdf",children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(d.a,{})}),Object(x.jsx)(f.a,{primary:"Resume",primaryTypographyProps:{variant:"button"}})]},"resume"),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(h.a,{})}),Object(x.jsx)(f.a,{primary:H,primaryTypographyProps:{variant:"button"}})]},"location")]})})}var v=a(55),k=a(115),T=a(116),S=(a(70),a(114)),I=a(108),P=a(109),E=a(110),G=a(111),C=a(112),N=a(113),F=a(54),L=a.n(F);var R=function(e){var t=e.classes;return Object(x.jsx)(I.a,{onClick:function(t){window.open(e.url,"_blank")},children:Object(x.jsxs)(P.a,{className:t.card,children:[Object(x.jsx)(E.a,{avatar:Object(x.jsx)(L.a,{}),title:e.name,titleTypographyProps:{variant:"h4"}}),Object(x.jsx)(g.a,{className:t.cardText,color:"textPrimary",gutterBottom:!0,variant:"body2",children:e.description}),Object(x.jsx)(G.a,{children:Object(x.jsx)(C.a,{"aria-label":"open repo",children:Object(x.jsx)(N.a,{})})})]})})},W=[{name:"Cognitive System Design",description:"This was a group project where we completely designed a Pacman-like agent using approximate q-learning with a feature-based representation. This agent was completely designed by this group. My contribution consisted of implementing the features of the agent and updating its history."},{name:"Complier",description:"This was a group project where we designed a comouter langauge from scratch. We wrote a grammer, constructed abstract syntax trees, performed semantic analysis, and optimized the resulting code. I contributed to all of these sections in varying capacity. Larger sections of my work are located in the grammar and optimization secions"},{name:"Databases",description:"This was a group project where we took a sample dataset from Board Game Geek and built a full database sdk around the dataset. We provided functions to users to add ratings and games. We also wrote functions that allowed users to determine useful queries, such as the top rated games."},{name:"Intro to AI",description:"This was a group project where we created an agent using bayesian inference. The goal of this agent is to figure out how to capture the ghosts in the maze as quickly as possible. I was largely responsible for creating the code that did the majority of heavy calculations in this code."},{name:"Networks",description:"This was a solo project where I created a WebSocket server designed to run on a ESP-8266 Wi-Fi board. This server is used to control an LED light strip. I wrote all the code that is used to create the server as well as send the signals to the LED light strip."},{name:"Theory of Compuation",description:"This was a solo project where I wrote a React-based webapp that allowed users to create Determinisitc Finite Automaton and Nondeterminisitc Finite Automaton. This app also provides a variety of functionality to the user including creating the alphabet and converting between the different automaton."},{name:"Thesis",description:"This was a group project that created a React-based webapp that trained users on how to use a synthesizer online. I was responsible for creating all the webpages and creating a template for all the information. I also used Google's firebase product to store and update user information for easy navigation and credential storing."},{name:"portfolio-site",description:"This is a solo project I created to display my various projects. It is a React webapp that links people to useful information including social media links and code repositories. It is hosted on GitHub Pages."}];var _=function(e){e.classes;var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)([]),c=Object(o.a)(s,2),l=c[0],d=c[1];return Object(n.useEffect)((function(){r||fetch("https://api.github.com/repos/whynot1597/College-Portfolio/contents",{method:"GET",headers:new Headers({Accept:"application/vnd.github.cloak-preview"})}).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return"dir"===e.type}));t.forEach((function(e){var t=W.filter((function(t){return t.name===e.name}));e.description=t[0].description})),console.log(t),d(t),i(!0)})).catch((function(e){return console.error(e)}))})),Object(x.jsx)("div",{children:Object(x.jsxs)(S.a,{container:!0,spacing:3,children:[Object(x.jsx)(S.a,{item:!0,xs:12,children:Object(x.jsx)(g.a,{variant:"h4",children:"My Github Repositories"})},"header"),l.map((function(t){return Object(x.jsx)(S.a,{item:!0,children:Object(x.jsx)(R,Object(O.a)({name:t.name,url:t._links.html,description:t.description},e))},t.name)}))]})})},A=a(78),D=Object(v.a)({palette:{type:"dark"}}),z=(Object(v.a)({palette:{type:"light"}}),Object(k.a)((function(e){return{root:{display:"flex",height:"100%"},card:{minWidth:e.spacing(20),maxWidth:e.spacing(40),color:e.palette.text.primary,background:e.palette.background.paper},cardText:{color:e.palette.text.primary,padding:e.spacing(1),textAlign:"left",fontSize:15},drawer:{width:e.spacing(50),flexShrink:0},drawerPaper:{width:e.spacing(50),background:e.palette.action.active},logo:{width:e.spacing(20),height:e.spacing(20)},content:{flexGrow:1},background:{height:"100vh"}}})));var B=function(){var e=z();return Object(x.jsx)(T.a,{theme:D,children:Object(x.jsx)("div",{className:e.background,children:Object(x.jsxs)(A.a,{className:e.root,children:[Object(x.jsx)(y,{classes:e}),Object(x.jsx)(_,{classes:e})]})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),q()}},[[75,1,2]]]);
//# sourceMappingURL=main.aac94511.chunk.js.map