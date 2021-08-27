(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[37],{252:function(e,t,a){"use strict";var n=a(21),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(23)).default)(i.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=c},253:function(e,t,a){"use strict";var n=a(52),r=(a(0),a(12)),i=a(86),c=a(141),s=a(252),o=a.n(s),l=a(195),d=a(1),u=Object(l.a)((function(e){var t;return{backBox:(t={marginTop:e.spacing(4)},Object(n.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3.5)}),Object(n.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(3)}),Object(n.a)(t,"padding",e.spacing(1,0)),t),arrow:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=u(),a=e.link,n=e.text;return Object(d.jsx)(i.a,{className:t.backBox,elevation:0,children:Object(d.jsx)(r.b,{to:a,style:{textDecoration:"none"},children:Object(d.jsxs)(c.a,{color:"primary",children:[Object(d.jsx)(o.a,{className:t.arrow,color:"primary"}),n]})})})}},259:function(e,t,a){"use strict";var n=a(52),r=(a(0),a(87)),i=a(86),c=a(51),s=a(271),o=a(195),l=a.p+"static/media/loading.46b68eb6.svg",d=a(1),u=Object(o.a)((function(e){var t;return{loadingBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},loadingIcon:{marginLeft:e.spacing(.75),verticalAlign:"text-top"},image:(t={width:300,height:300},Object(n.a)(t,e.breakpoints.down("sm"),{width:275,height:275}),Object(n.a)(t,e.breakpoints.down("xs"),{width:250,height:250}),Object(n.a)(t,e.breakpoints.down(375),{width:200,height:200}),t)}}));t.a=function(e){var t=u(),a=e.children,n=e.hideImage;return Object(d.jsx)(r.a,{className:t.loadingBox,children:Object(d.jsxs)(i.a,{className:t.paper,elevation:0,children:[n||!0===n?null:Object(d.jsx)("img",{src:l,alt:"Loading...",className:t.image}),Object(d.jsxs)(c.a,{color:"primary",variant:"h6",children:[a," ",Object(d.jsx)(s.a,{size:24,color:"primary",className:t.loadingIcon})]})]})})}},271:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(0),c=(a(7),a(8)),s=a(9),o=a(14),l=44,d=i.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.color,u=void 0===d?"primary":d,p=e.disableShrink,j=void 0!==p&&p,m=e.size,b=void 0===m?40:m,h=e.style,g=e.thickness,x=void 0===g?3.6:g,O=e.value,f=void 0===O?0:O,v=e.variant,y=void 0===v?"indeterminate":v,k=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},N={},q={};if("determinate"===y||"static"===y){var z=2*Math.PI*((l-x)/2);w.strokeDasharray=z.toFixed(3),q["aria-valuenow"]=Math.round(f),w.strokeDashoffset="".concat(((100-f)/100*z).toFixed(3),"px"),N.transform="rotate(-90deg)"}return i.createElement("div",Object(n.a)({className:Object(c.a)(a.root,s,"inherit"!==u&&a["color".concat(Object(o.a)(u))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[y]),style:Object(n.a)({width:b,height:b},N,h),ref:t,role:"progressbar"},q,k),i.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:Object(c.a)(a.circle,j&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[y]),style:w,cx:l,cy:l,r:(l-x)/2,fill:"none",strokeWidth:x})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},323:function(e,t,a){"use strict";var n=a(21),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(23)).default)(i.createElement("path",{d:"M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"AccountBalanceWalletRounded");t.default=c},667:function(e,t,a){"use strict";a.r(t);var n=a(52),r=a(0),i=a(34),c=a(90),s=a(87),o=a(242),l=a(86),d=a(51),u=a(323),p=a.n(u),j=a(195),m=a(54),b=a(259),h=a(253),g=a(244),x=a(141),O=a(1),f=Object(j.a)((function(e){var t;return{root:(t={margin:e.spacing(3),padding:e.spacing(1.5)},Object(n.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(2.8,2.25)}),Object(n.a)(t,e.breakpoints.down("xs"),{margin:e.spacing(2.6,1.5)}),t),phone:{marginTop:e.spacing(.5),color:e.palette.text.secondary}}})),v=Object(i.b)(null,(function(e){return{onSendLink:function(t){return e(m.F(t))}}}))((function(e){var t=f(),a=e.onSendLink,n=e.request,r=n.name,i=n.phone,c=n.requestedAmount;return Object(O.jsx)(l.a,{variant:"outlined",className:t.root,children:Object(O.jsxs)(g.a,{container:!0,spacing:3,alignItems:"center",children:[Object(O.jsxs)(g.a,{item:!0,xs:12,sm:4,children:[Object(O.jsx)(d.a,{children:Object(O.jsx)("b",{children:r})}),Object(O.jsx)(d.a,{variant:"body2",className:t.phone,children:i})]}),Object(O.jsx)(g.a,{item:!0,xs:12,sm:4,children:Object(O.jsxs)(d.a,{variant:"h6",children:["Rs. ",c]})}),Object(O.jsx)(g.a,{item:!0,xs:12,sm:4,children:Object(O.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){a({phone:i})},disableElevation:!0,children:"Send Payout Link"})})]})})})),y=Object(r.lazy)((function(){return a.e(4).then(a.bind(null,270))})),k=Object(j.a)((function(e){var t;return{root:{maxWidth:960,margin:"auto"},paper:(t={marginTop:e.spacing(2),padding:e.spacing(3,4)},Object(n.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.8,3)}),Object(n.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2.6,2)}),Object(n.a)(t,"borderRadius",e.spacing(.75)),Object(n.a)(t,"textAlign","center"),t),typography:{marginTop:e.spacing(4),marginBottom:e.spacing(4),color:e.palette.text.secondary},paymentIcon:{fontSize:e.spacing(6),color:"#3F51B5"}}}));t.default=Object(i.b)((function(e){return{request:e.payout}}),(function(e){return{OnGetRequests:function(){return e(m.q())}}}))((function(e){var t=k(),a=e.request,n=a.loading,i=a.requests,u=e.OnGetRequests;return Object(r.useEffect)((function(){u()}),[u]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(c.a,{children:[Object(O.jsx)("title",{children:"Withdrawal Payout Requests | Bluezone"}),Object(O.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/payout-requests"}),Object(O.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),Object(O.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(O.jsx)("meta",{property:"og:type",content:"article"}),Object(O.jsx)("meta",{property:"og:title",content:"Withdrawal Payout Requests | Bluezone"}),Object(O.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/payout-requests"}),Object(O.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(O.jsx)("meta",{name:"twitter:title",content:"Withdrawal Payout Requests | Bluezone"})]}),Object(O.jsx)(s.a,{className:t.root,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(h.a,{link:"/tournaments",text:"Go To Tournaments"}),Object(O.jsxs)(l.a,{className:t.paper,variant:"outlined",children:[Object(O.jsx)(p.a,{className:t.paymentIcon}),Object(O.jsx)(d.a,{className:t.typography,variant:"h5",children:Object(O.jsx)("b",{children:"Withdrawal Requests"})}),n?Object(O.jsx)(b.a,{children:"Fetching Payouts..."}):i.length>0?i.map((function(e){return Object(O.jsx)(v,{request:e},e._id)})):Object(O.jsx)(r.Suspense,{children:Object(O.jsx)(y,{status:"204",statusText:"No withdrawal requests yet."})})]})]})})]})}))}}]);
//# sourceMappingURL=37.7326c933.chunk.js.map