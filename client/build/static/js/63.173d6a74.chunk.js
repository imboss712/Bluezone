(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[63],{393:function(t,e,a){"use strict";a(0);var n=a(294),r=a(290),s=a(517),c=a(298),i=a(242),o=a(1),l=Object(i.a)((function(t){return{avatar:{width:t.spacing(6),height:t.spacing(6)}}}));e.a=function(t){var e=l(),a=t.profile,i=a.profile,j=i.avatar,m=i.gameName,u=a.info.name;return Object(o.jsxs)(n.a,{children:[Object(o.jsx)(s.a,{children:null!==j?Object(o.jsx)(c.a,{className:e.avatar,src:"data:image/png;base64,".concat(j),alt:u}):Object(o.jsx)(c.a,{alt:u,className:e.avatar,sx:{backgroundColor:"orange"},children:Object(o.jsx)("span",{style:{fontSize:"28px"},children:u.charAt(0).toUpperCase()})})}),Object(o.jsx)(r.a,{sx:{marginLeft:2.5},primary:m,secondary:u})]})}},517:function(t,e,a){"use strict";var n=a(8),r=a(2),s=a(0),c=(a(7),a(5)),i=a(101),o=a(33),l=a(9),j=a(12),m=a(85),u=a(102);function d(t){return Object(m.a)("MuiListItemAvatar",t)}Object(u.a)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var b=a(1),p=["className"],O=Object(l.a)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,"flex-start"===a.alignItems&&e.alignItemsFlexStart]}})((function(t){var e=t.ownerState;return Object(r.a)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})})),g=s.forwardRef((function(t,e){var a=Object(j.a)({props:t,name:"MuiListItemAvatar"}),l=a.className,m=Object(n.a)(a,p),u=s.useContext(o.a),g=Object(r.a)({},a,{alignItems:u.alignItems}),f=function(t){var e=t.alignItems,a=t.classes,n={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return Object(i.a)(n,d,a)}(g);return Object(b.jsx)(O,Object(r.a)({className:Object(c.a)(f.root,l),ownerState:g,ref:e},m))}));e.a=g},775:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(43),s=a(11),c=a(122),i=a(185),o=a(301),l=a(70),j=a(242),m=a(393),u=a(1),d=Object(j.a)((function(t){var e,a;return{root:{marginBottom:t.spacing(2)},team:(e={padding:t.spacing(1.25,1,1.25,4)},Object(s.a)(e,t.breakpoints.down("md"),{padding:t.spacing(1.2,.9,1.2,3.5)}),Object(s.a)(e,t.breakpoints.down("sm"),{padding:t.spacing(1.2,.7,1.2,3)}),e),player:(a={padding:t.spacing(.5,1,1.2,2.5)},Object(s.a)(a,t.breakpoints.down("md"),{padding:t.spacing(.5,1,1.2,2.4)}),Object(s.a)(a,t.breakpoints.down("sm"),{padding:t.spacing(.5,1,1.2,2.2)}),a)}})),b=function(t){var e=d(),a=t.team,n=t.index;return Object(u.jsx)(c.a,{className:e.root,children:Object(u.jsxs)(i.a,{variant:"outlined",children:[Object(u.jsx)(c.a,{className:e.team,children:Object(u.jsx)(l.a,{variant:"h6",color:"primary",children:Object(u.jsxs)("b",{children:["Team ",n+1]})})}),Object(u.jsx)(c.a,{className:e.player,children:Object(u.jsx)(o.a,{children:a.players.map((function(t){return Object(u.jsx)(m.a,{profile:t},t.playerId)}))})})]})})},p=a(63),O=a(319),g=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,366))}));e.default=Object(r.b)((function(t){return{team:t.team}}),(function(t){return{onGetTeams:function(e){return t(p.l(e))}}}))((function(t){var e=t.team,a=e.loadingTeams,r=e.teams,s=t.onGetTeams,c=t.tournamentId;return Object(n.useEffect)((function(){s(c)}),[s,c]),Object(u.jsx)(u.Fragment,{children:a?Object(u.jsx)(O.a,{hideImage:!0,children:"Fetching Teams..."}):r.length>0?r.map((function(t,e){return Object(u.jsx)(b,{team:t,index:e},t._id.teamId)})):Object(u.jsx)(n.Suspense,{children:Object(u.jsx)(g,{hideImage:!0,status:"204",statusText:"No participants yet. Create team to play tournament."})})})}))}}]);
//# sourceMappingURL=63.173d6a74.chunk.js.map