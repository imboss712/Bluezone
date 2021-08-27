(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[61,4],{270:function(e,a,t){"use strict";t.r(a);var n=t(52),r=(t(0),t(87)),i=t(86),s=t(141),c=t(51),l=t(195),o=t.p+"static/media/no_data.73fe6b27.svg",u=t.p+"static/media/warning.b754a15b.svg",d=t.p+"static/media/unauthorised.49e4cd11.svg",b=t.p+"static/media/not_found.5453c178.svg",m=t.p+"static/media/server_error.59560577.svg",p=t(1),j=Object(l.a)((function(e){var a,t;return{errorBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},image:(a={width:300,height:300},Object(n.a)(a,e.breakpoints.down("sm"),{width:275,height:275}),Object(n.a)(a,e.breakpoints.down("xs"),{width:250,height:250}),Object(n.a)(a,e.breakpoints.down(375),{width:200,height:200}),a),imageUnauth:(t={width:270,height:270},Object(n.a)(t,e.breakpoints.down("sm"),{width:235,height:235}),Object(n.a)(t,e.breakpoints.down("xs"),{width:200,height:200}),Object(n.a)(t,e.breakpoints.down(375),{width:175,height:175}),t)}}));a.default=function(e){var a,t=j(),n=e.status,l=e.statusText,h=e.hideImage,g=e.hideButton;switch(parseInt(n)){case 204:a=Object(p.jsx)("img",{src:o,alt:"Error",style:{marginBottom:"16px"},className:t.imageUnauth});break;case 400:a=Object(p.jsx)("img",{src:u,alt:"Error",className:t.image});break;case 401:a=Object(p.jsx)("img",{src:d,alt:"Error",style:{marginBottom:"20px"},className:t.imageUnauth});break;case 404:a=Object(p.jsx)("img",{src:b,alt:"Error",className:t.image});break;case 500:a=Object(p.jsx)("img",{src:m,alt:"Error",className:t.image});break;default:a=Object(p.jsx)("img",{src:u,alt:"Error",className:t.image})}return Object(p.jsx)(r.a,{className:t.errorBox,children:Object(p.jsxs)(i.a,{className:t.paper,elevation:0,children:[h||!0===h?null:a,Object(p.jsxs)(c.a,{color:"secondary",variant:"h6",children:[204===parseInt(n)||400===parseInt(n)?null:"".concat(n," - "),l]}),400!==parseInt(n)&&500!==parseInt(n)||g?null:Object(p.jsx)(s.a,{variant:"outlined",color:"primary",style:{marginTop:"16px"},onClick:function(){window.location.reload()},children:"Refresh"})]})})}},303:function(e,a,t){"use strict";t(0);var n=t(255),r=t(618),i=t(658),s=t(619),c=t(621),l=t(1),o=function(e){var a=e.errorString,t=e.label,n=e.children,o=e.value,u=e.name,d=e.onChange,b=e.onBlur,m=e.required,p=e.error,j=e.disabled;return Object(l.jsxs)(r.a,{fullWidth:!0,variant:"outlined",error:p,disabled:j,children:[Object(l.jsx)(s.a,{required:m,children:t}),Object(l.jsx)(i.a,{native:!0,name:u,label:t,onChange:d,onBlur:b,value:o,children:n}),Object(l.jsx)(c.a,{error:!0,children:a})]})};a.a=function(e){var a=e.name,t=e.items,r=e.label,i=e.required,s=void 0!==i&&i,c=e.error,u=e.disabled;return Object(l.jsx)(n.b,{autoOk:!0,name:a,as:o,label:r,errorString:Object(l.jsx)(n.a,{name:a}),required:s,error:c,disabled:u,children:t.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.label},e.value)}))})}},594:function(e,a,t){"use strict";t.r(a);var n=t(52),r=(t(0),t(276)),i=t(34),s=t(87),c=t(244),l=t(86),o=t(141),u=t(51),d=t(255),b=t(271),m=t(195),p=t(54),j=t(303),h=t(270),g=t(1),O=[{label:"Open",value:"Open"},{label:"MailUnsent",value:"MailUnsent"},{label:"MailSent",value:"MailSent"},{label:"Live",value:"Live"},{label:"Completed",value:"Completed"},{label:"Result",value:"Result"}],x=[{label:"Open",value:"Open"},{label:"Full",value:"Full"},{label:"Closed",value:"Closed"}],v=Object(m.a)((function(e){var a,t;return{paper:(a={marginTop:e.spacing(2),padding:e.spacing(3,4)},Object(n.a)(a,e.breakpoints.down("sm"),{padding:e.spacing(2.8,3.75)}),Object(n.a)(a,e.breakpoints.down("xs"),{padding:e.spacing(2.6,3.5)}),Object(n.a)(a,"borderRadius",e.spacing(.75)),Object(n.a)(a,"textAlign","center"),a),box:(t={margin:e.spacing(3,4)},Object(n.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(2.8,2.75)}),Object(n.a)(t,e.breakpoints.down("xs"),{margin:e.spacing(2.6,1.35)}),Object(n.a)(t,"display","flex"),Object(n.a)(t,"justifyContent","center"),Object(n.a)(t,"alignItems","center"),t),typography:{marginTop:e.spacing(1),marginBottom:e.spacing(5),color:e.palette.text.secondary},icon:{marginLeft:e.spacing(1),color:e.palette.text.secondary}}}));a.default=Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{onChangeStatus:function(a,t){return e(p.b(a,t))}}}))((function(e){var a=v(),t=e.user,n=e.tournamentId,i=e.matchStatus,m=e.participantStatus,p=e.onChangeStatus;return Object(g.jsxs)(l.a,{className:a.paper,variant:"outlined",children:[Object(g.jsx)(u.a,{className:a.typography,variant:"h6",children:Object(g.jsx)("b",{children:"Change Tournament Status"})}),"admin"!==t.role?Object(g.jsx)(h.default,{status:"401",statusText:"User is not allowed change status",hideImage:!0}):Object(g.jsx)(d.d,{initialValues:{matchStatus:O.find((function(e){return e.value===i})).value,participantStatus:x.find((function(e){return e.value===m})).value},validationSchema:r.e({matchStatus:r.f().required("Required").oneOf(O.map((function(e){return e.value}))),participantStatus:r.f().required("Required").oneOf(x.map((function(e){return e.value})))}),onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){t(!1),p(n,e)}),500)},children:function(e){var t=e.submitForm,n=e.isSubmitting,r=e.errors,i=e.touched;return Object(g.jsx)(d.c,{children:Object(g.jsxs)(c.a,{container:!0,spacing:3,style:{justifyContent:"space-around"},children:[Object(g.jsx)(c.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(j.a,{name:"matchStatus",items:O,label:"Match Status",error:!(!r.matchStatus||!i.matchStatus),disabled:!!n})}),Object(g.jsx)(c.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(j.a,{name:"participantStatus",items:x,label:"Participation Status",disabled:!0})}),Object(g.jsx)(s.a,{className:a.box,children:Object(g.jsx)(o.a,{size:"large",variant:"contained",color:"primary",disabled:!(!n&&!r.matchStatus),onClick:t,disableElevation:!0,children:n?Object(g.jsxs)(g.Fragment,{children:["Changing status..."," ",Object(g.jsx)(b.a,{size:16,className:a.icon})]}):"Change Match Status"})})]})})}})]})}))}}]);
//# sourceMappingURL=61.42915e5e.chunk.js.map