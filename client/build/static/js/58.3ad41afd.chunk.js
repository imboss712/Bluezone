(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[58],{314:function(e,t,a){"use strict";var n=a(11),c=(a(0),a(19)),i=a(185),r=a(184),s=a(315),o=a.n(s),l=a(242),j=a(1),u=Object(l.a)((function(e){var t;return{buttonBox:(t={marginTop:e.spacing(4)},Object(n.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(3.5)}),Object(n.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3)}),Object(n.a)(t,"padding",e.spacing(1,0)),t),arrowIcon:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.link,a=e.text,n=u();return Object(j.jsx)(i.a,{className:n.buttonBox,elevation:0,children:Object(j.jsx)(c.b,{to:t,style:{textDecoration:"none"},children:Object(j.jsxs)(r.a,{color:"primary",children:[Object(j.jsx)(o.a,{className:n.arrowIcon,color:"primary"}),a]})})})}},317:function(e,t,a){"use strict";var n=a(11),c=a(242),i=Object(c.a)((function(e){var t,a;return{root:{maxWidth:600,margin:"auto"},paper:(t={marginTop:e.spacing(2),padding:e.spacing(3,4)},Object(n.a)(t,e.breakpoints.down("md"),{padding:e.spacing(2.8,3)}),Object(n.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.6,2)}),Object(n.a)(t,"borderRadius",e.spacing(.75)),Object(n.a)(t,"textAlign","center"),t),box:(a={margin:e.spacing(3,4)},Object(n.a)(a,e.breakpoints.down("md"),{margin:e.spacing(2.8,2.8)}),Object(n.a)(a,e.breakpoints.down("sm"),{margin:e.spacing(2.6,1.5)}),a),headingText:{marginTop:e.spacing(3),marginBottom:e.spacing(4),color:e.palette.text.secondary},headingIcon:{fontSize:e.spacing(6)},submitButton:{display:"flex",justifyContent:"flex-end"}}}));t.a=i},319:function(e,t,a){"use strict";var n=a(11),c=(a(0),a(122)),i=a(185),r=a(70),s=a(334),o=a(242),l=a.p+"static/media/loading.0655dbc7.svg",j=a(1),u=Object(o.a)((function(e){var t;return{loadingBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},loadingIcon:{marginLeft:e.spacing(.75),verticalAlign:"text-top"},image:(t={width:300,height:300},Object(n.a)(t,e.breakpoints.down("md"),{width:275,height:275}),Object(n.a)(t,e.breakpoints.down("sm"),{width:250,height:250}),Object(n.a)(t,e.breakpoints.down(void 0),{width:200,height:200}),t)}}));t.a=function(e){var t=u(),a=e.children,n=e.hideImage;return Object(j.jsx)(c.a,{className:t.loadingBox,children:Object(j.jsxs)(i.a,{className:t.paper,elevation:0,children:[n||!0===n?null:Object(j.jsx)("img",{src:l,alt:"Loading...",className:t.image}),Object(j.jsxs)(r.a,{color:"primary",variant:"h6",children:[a," ",Object(j.jsx)(s.a,{size:24,color:"primary",className:t.loadingIcon})]})]})})}},757:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(43),i=a(124),r=a(122),s=a(304),o=a(185),l=a(70),j=a(396),u=a.n(j),d=a(242),b=a(20),m=a(11),p=a(296),x=a(184),g=a(476),O=a(477),h=a(480),f=a(478),y=a(479),v=a(63),w=a(317),k=a(319),N=a(1),I=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,366))})),B={vpa:"UPI",bank_account:"Bank Account",paytm_wallet:"Paytm Wallet"},T=function(e){var t=e.keyName,a=e.valueName;return Object(N.jsxs)(f.a,{children:[Object(N.jsx)(y.a,{children:t}),Object(N.jsx)(y.a,{align:"right",sx:{color:"#0D47A1"},children:a})]})},q=function(e){var t=e.title,a=e.items;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(l.a,{sx:{color:"text.secondary",marginLeft:.5,marginBottom:1},children:Object(N.jsx)("b",{children:t})}),Object(N.jsx)(g.a,{component:o.a,variant:"outlined",elevation:0,children:Object(N.jsx)(O.a,{sx:{width:1},children:Object(N.jsx)(h.a,{children:a.map((function(e){return Object(N.jsx)(T,{keyName:e.keyName,valueName:e.valueName},e.id)}))})})})]})},A=Object(n.memo)((function(e){var t=Object(w.a)(),a=e.userId,c=e.amount,i=e.bank,s=i.bank,o=i.loadingBank,l=i.bankError,j=e.onSendLink,u=e.getDetailById;Object(n.useEffect)((function(){u(a)}),[u,a]);return o||null===s?Object(N.jsx)(k.a,{hideImage:!0,children:"Loading Bank Details..."}):null===s&&l&&l.status?Object(N.jsx)(n.Suspense,{children:Object(N.jsx)(I,{hideImage:!0,status:l.status,statusText:l.msg})}):s?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(r.a,{className:t.box,sx:{textAlign:"left"},children:["vpa"===s.accountType?Object(N.jsx)(q,{title:"UPI",items:[{id:11,keyName:"UPI Address",valueName:s.vpaAddress}]}):null,"bank_account"===s.accountType?Object(N.jsx)(q,{title:"Bank Account",items:[{id:21,keyName:"Account Number",valueName:s.bankAccNumber},{id:22,keyName:"IFSC Code",valueName:s.bankIfsc},{id:23,keyName:"Name",valueName:s.accHolderName}]}):null,"paytm_wallet"===s.accountType?Object(N.jsx)(q,{title:"Paytm Wallet",items:[{id:31,keyName:"Paytm Number",valueName:s.paytmNumber}]}):null]}),Object(N.jsx)(r.a,{className:t.box,children:Object(N.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){j({userId:a,to:B[s.accountType],amount:c})},disableElevation:!0,children:"Amount Sent via GPay"})})]}):void 0})),z=Object(c.b)((function(e){return{bank:e.bank,user:e.auth.user}}),(function(e){return{getDetailById:function(t){return e(v.n(t))},onSendLink:function(t){return e(v.J(t))}}}))(A),P=Object(d.a)((function(e){var t;return{root:(t={margin:e.spacing(3),padding:e.spacing(1.5)},Object(m.a)(t,e.breakpoints.down("md"),{margin:e.spacing(2.8,2.25)}),Object(m.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(2.6,1.5)}),t),secondaryText:{marginTop:e.spacing(.5),color:e.palette.text.secondary}}})),S=function(e){var t=P(),a=e.request,c=a._id,i=a.name,r=a.phone,s=a.isBank,j=a.requestedAmount,u=Object(n.useState)(!1),d=Object(b.a)(u,2),m=d[0],g=d[1];return Object(N.jsxs)(o.a,{variant:"outlined",className:t.root,children:[Object(N.jsxs)(p.a,{container:!0,spacing:3,alignItems:"center",children:[Object(N.jsxs)(p.a,{item:!0,xs:12,sm:m?6:4,children:[Object(N.jsx)(l.a,{children:Object(N.jsx)("b",{children:i})}),Object(N.jsx)(l.a,{variant:"body2",className:t.secondaryText,children:r})]}),Object(N.jsx)(p.a,{item:!0,xs:12,sm:m?6:4,children:Object(N.jsxs)(l.a,{variant:"h6",children:["\u20b9 ",j]})}),!m&&Object(N.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(N.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){g(!0)},disabled:!s,disableElevation:!0,children:"Get Bank Detail"})})]}),m&&Object(N.jsx)(z,{userId:c,amount:j})]})},R=a(314),W=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,366))})),_=Object(d.a)((function(e){return{root:{maxWidth:960,margin:"auto"}}}));t.default=Object(c.b)((function(e){return{request:e.withdrawal}}),(function(e){return{OnGetRequests:function(){return e(v.x())}}}))((function(e){var t=_(),a=Object(w.a)(),c=e.request,j=c.loading,d=c.requests,b=e.OnGetRequests;return Object(n.useEffect)((function(){b()}),[b]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(i.a,{children:[Object(N.jsx)("title",{children:"Withdrawal Payout Requests | Bluezone"}),Object(N.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/withdrawal-requests"}),Object(N.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),Object(N.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(N.jsx)("meta",{property:"og:type",content:"article"}),Object(N.jsx)("meta",{property:"og:title",content:"Withdrawal Payout Requests | Bluezone"}),Object(N.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/withdrawal-requests"}),Object(N.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(N.jsx)("meta",{name:"twitter:title",content:"Withdrawal Payout Requests | Bluezone"})]}),Object(N.jsx)(r.a,{className:t.root,children:Object(N.jsxs)(s.a,{children:[Object(N.jsx)(R.a,{link:"/tournaments",text:"Go To Tournaments"}),Object(N.jsxs)(o.a,{className:a.paper,variant:"outlined",children:[Object(N.jsx)(u.a,{color:"primary",className:a.headingIcon}),Object(N.jsx)(l.a,{className:a.headingText,variant:"h5",children:Object(N.jsx)("b",{children:"Withdrawal Requests"})}),j?Object(N.jsx)(k.a,{children:"Fetching Withdrawal Requests..."}):d.length>0?d.map((function(e){return Object(N.jsx)(S,{request:e},e._id)})):Object(N.jsx)(n.Suspense,{children:Object(N.jsx)(W,{status:"204",statusText:"No withdrawal requests yet."})})]})]})})]})}))}}]);
//# sourceMappingURL=58.3ad41afd.chunk.js.map