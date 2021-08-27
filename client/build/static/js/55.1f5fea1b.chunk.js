(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[55],{259:function(e,t,a){"use strict";var r=a(52),n=(a(0),a(87)),i=a(86),c=a(51),s=a(271),o=a(195),l=a.p+"static/media/loading.46b68eb6.svg",d=a(1),h=Object(o.a)((function(e){var t;return{loadingBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},loadingIcon:{marginLeft:e.spacing(.75),verticalAlign:"text-top"},image:(t={width:300,height:300},Object(r.a)(t,e.breakpoints.down("sm"),{width:275,height:275}),Object(r.a)(t,e.breakpoints.down("xs"),{width:250,height:250}),Object(r.a)(t,e.breakpoints.down(375),{width:200,height:200}),t)}}));t.a=function(e){var t=h(),a=e.children,r=e.hideImage;return Object(d.jsx)(n.a,{className:t.loadingBox,children:Object(d.jsxs)(i.a,{className:t.paper,elevation:0,children:[r||!0===r?null:Object(d.jsx)("img",{src:l,alt:"Loading...",className:t.image}),Object(d.jsxs)(c.a,{color:"primary",variant:"h6",children:[a," ",Object(d.jsx)(s.a,{size:24,color:"primary",className:t.loadingIcon})]})]})})}},271:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(0),c=(a(7),a(8)),s=a(9),o=a(14),l=44,d=i.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.color,h=void 0===d?"primary":d,m=e.disableShrink,u=void 0!==m&&m,f=e.size,b=void 0===f?40:f,p=e.style,j=e.thickness,g=void 0===j?3.6:j,x=e.value,O=void 0===x?0:x,k=e.variant,v=void 0===k?"indeterminate":k,y=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},D={},M={};if("determinate"===v||"static"===v){var N=2*Math.PI*((l-g)/2);w.strokeDasharray=N.toFixed(3),M["aria-valuenow"]=Math.round(O),w.strokeDashoffset="".concat(((100-O)/100*N).toFixed(3),"px"),D.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(c.a)(a.root,s,"inherit"!==h&&a["color".concat(Object(o.a)(h))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[v]),style:Object(r.a)({width:b,height:b},D,p),ref:t,role:"progressbar"},M,y),i.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:Object(c.a)(a.circle,u&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[v]),style:w,cx:l,cy:l,r:(l-g)/2,fill:"none",strokeWidth:g})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},328:function(e,t,a){"use strict";t.a=["#b71c1c","#880e4f","#4a148c","#004d40","#1b5e20","#827717","#e65100","#3e2723","#212121","#263238"]},589:function(e,t,a){"use strict";a.r(t);var r=a(52),n=a(0),i=a(34),c=a(244),s=a(195),o=a(54),l=a(328),d=a(259),h=a(95),m=a(1),u=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,270))})),f=Object(n.lazy)((function(){return Promise.all([a.e(5),a.e(8)]).then(a.bind(null,350))})),b=Object(s.a)((function(e){return{grid:Object(r.a)({justifyContent:"flex-start"},e.breakpoints.down("sm"),{justifyContent:"center"})}}));t.default=Object(i.b)((function(e){return{match:e.match,user:e.auth.user}}),(function(e){return{fetchMyOpenMatches:function(t){return e(o.n(t))}}}))((function(e){var t=b(),a=e.fetchMyOpenMatches,r=e.user,i=e.match,s=i.loadingMyMatches,o=i.myMatches;return Object(n.useEffect)((function(){a("Open")}),[a]),Object(m.jsx)(c.a,{container:!0,spacing:3,className:t.grid,children:s?Object(m.jsx)(d.a,{children:"Loading Open & Live Matches..."}):o.length>0?Object(m.jsx)(n.Suspense,{fallback:Object(m.jsx)(h.a,{}),children:o.map((function(e){return Object(m.jsx)(c.a,{item:!0,children:Object(m.jsx)(f,{border:l.a[Math.floor(10*Math.random())],match:e})},e._id)}))}):Object(m.jsx)(n.Suspense,{children:Object(m.jsx)(u,{status:"204",statusText:r&&"admin"===r.role?"You have not hosted any tournament.":"You have not participated in any tournament."})})})}))}}]);
//# sourceMappingURL=55.1f5fea1b.chunk.js.map