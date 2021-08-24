(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[52],{252:function(e,t,n){"use strict";var a=n(21),c=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(0,a(n(23)).default)(r.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=o},253:function(e,t,n){"use strict";var a=n(52),c=(n(0),n(12)),r=n(87),o=n(141),i=n(252),s=n.n(i),l=n(195),b=n(1),j=Object(l.a)((function(e){var t;return{backBox:(t={marginTop:e.spacing(4)},Object(a.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3.5)}),Object(a.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(3)}),Object(a.a)(t,"padding",e.spacing(1,0)),t),arrow:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=j(),n=e.link,a=e.text;return Object(b.jsx)(r.a,{className:t.backBox,elevation:0,children:Object(b.jsx)(c.b,{to:n,style:{textDecoration:"none"},children:Object(b.jsxs)(o.a,{color:"primary",children:[Object(b.jsx)(s.a,{className:t.arrow,color:"primary"}),a]})})})}},305:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return a}))},630:function(e,t,n){"use strict";n.r(t);var a=n(33),c=n(4),r=n(305),o=n(52),i=n(0),s=n(91),l=n(241),b=n(349),j=n(347),u=n(88),p=n(242),d=n(195),O=n(240),m=n(253),x=n(96),g=n(1),f=["children","value","index"],h=Object(i.lazy)((function(){return n.e(55).then(n.bind(null,589))})),y=Object(i.lazy)((function(){return n.e(54).then(n.bind(null,590))})),w=Object(d.a)((function(e){var t;return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabpanel:(t={padding:e.spacing(3)},Object(o.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.75,1.5)}),Object(o.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2.5,.75)}),Object(o.a)(t,e.breakpoints.down(375),{padding:e.spacing(2.5,.5)}),t),appBar:{backgroundColor:"white",marginTop:e.spacing(1),position:"sticky",top:0,bottom:8,zIndex:5}}})),v=function(e){var t=w(),n=e.children,a=e.value,o=e.index,i=Object(r.a)(e,f);return Object(g.jsx)("div",Object(c.a)(Object(c.a)({role:"tabpanel",hidden:a!==o,id:"tournament-tabpanel-".concat(o),"aria-labelledby":"tournament-tab-".concat(o)},i),{},{children:a===o&&Object(g.jsx)(u.a,{className:t.tabpanel,children:n})}))},k=function(e){return{id:"tournament-tab-".concat(e),"aria-controls":"tournament-tabpanel-".concat(e)}};t.default=function(){var e=w(),t=Object(O.a)("(max-width:960px)"),n=Object(i.useState)(0),r=Object(a.a)(n,2),o=r[0],d=r[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(s.a,{children:[Object(g.jsx)("title",{children:"My Tournaments | Bluezone"}),Object(g.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/my-tournaments"}),Object(g.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),Object(g.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(g.jsx)("meta",{property:"og:type",content:"article"}),Object(g.jsx)("meta",{property:"og:title",content:"My Tournaments | Bluezone"}),Object(g.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/my-tournaments"}),Object(g.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(g.jsx)("meta",{name:"twitter:title",content:"My Tournaments | Bluezone"})]}),Object(g.jsx)(u.a,{style:{marginBottom:"16px"},children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(m.a,{link:"/tournaments",text:"Go To Tournaments"}),Object(g.jsxs)(u.a,{className:e.root,children:[Object(g.jsx)(l.a,{position:"static",className:e.appBar,elevation:0,style:{borderBottom:"1px solid rgb(224 224 224)"},children:Object(g.jsxs)(b.a,{value:o,onChange:function(e,t){d(t)},"aria-label":"my tournament tabs",indicatorColor:"primary",textColor:"primary",centered:!!t,children:[Object(g.jsx)(j.a,Object(c.a)({label:"Open & Live"},k(0))),Object(g.jsx)(j.a,Object(c.a)({label:"Completed"},k(1)))]})}),Object(g.jsx)(v,{value:o,index:0,children:Object(g.jsx)(i.Suspense,{fallback:Object(g.jsx)(x.a,{}),children:Object(g.jsx)(h,{})})}),Object(g.jsx)(v,{value:o,index:1,children:Object(g.jsx)(i.Suspense,{fallback:Object(g.jsx)(x.a,{}),children:Object(g.jsx)(y,{})})})]})]})})]})}}}]);
//# sourceMappingURL=52.423e96dd.chunk.js.map