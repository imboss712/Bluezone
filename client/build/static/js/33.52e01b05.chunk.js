(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[33],{314:function(e,t,a){"use strict";var n=a(11),r=(a(0),a(19)),i=a(185),c=a(184),o=a(315),s=a.n(o),l=a(242),d=a(1),u=Object(l.a)((function(e){var t;return{buttonBox:(t={marginTop:e.spacing(4)},Object(n.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(3.5)}),Object(n.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3)}),Object(n.a)(t,"padding",e.spacing(1,0)),t),arrowIcon:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.link,a=e.text,n=u();return Object(d.jsx)(i.a,{className:n.buttonBox,elevation:0,children:Object(d.jsx)(r.b,{to:t,style:{textDecoration:"none"},children:Object(d.jsxs)(c.a,{color:"primary",children:[Object(d.jsx)(s.a,{className:n.arrowIcon,color:"primary"}),a]})})})}},315:function(e,t,a){"use strict";var n=a(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(26)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 0 0-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=c},317:function(e,t,a){"use strict";var n=a(11),r=a(242),i=Object(r.a)((function(e){var t,a;return{root:{maxWidth:600,margin:"auto"},paper:(t={marginTop:e.spacing(2),padding:e.spacing(3,4)},Object(n.a)(t,e.breakpoints.down("md"),{padding:e.spacing(2.8,3)}),Object(n.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.6,2)}),Object(n.a)(t,"borderRadius",e.spacing(.75)),Object(n.a)(t,"textAlign","center"),t),box:(a={margin:e.spacing(3,4)},Object(n.a)(a,e.breakpoints.down("md"),{margin:e.spacing(2.8,2.8)}),Object(n.a)(a,e.breakpoints.down("sm"),{margin:e.spacing(2.6,1.5)}),a),headingText:{marginTop:e.spacing(3),marginBottom:e.spacing(4),color:e.palette.text.secondary},headingIcon:{fontSize:e.spacing(6)},submitButton:{display:"flex",justifyContent:"flex-end"}}}));t.a=i},318:function(e,t,a){"use strict";a(0);var n=a(184),r=a(334),i=a(242),c=a(1),o=Object(i.a)((function(e){return{loadingIcon:{marginLeft:e.spacing(1),color:e.palette.text.secondary}}}));t.a=function(e){var t=o(),a=e.variant,i=void 0===a?"contained":a,s=e.createText,l=e.creatingText,d=e.updateText,u=void 0===d?"":d,b=e.updatingText,j=void 0===b?"":b,p=e.isSubmitting,g=e.edit,m=void 0!==g&&g,v=e.disabled,h=e.onClick;return Object(c.jsx)(n.a,{size:"large",variant:i,color:"primary","aria-label":"Submit",disabled:v,onClick:h,disableElevation:!0,children:p?Object(c.jsxs)(c.Fragment,{children:[m?j:l,Object(c.jsx)(r.a,{size:16,className:t.loadingIcon})]}):m?u:s})}},319:function(e,t,a){"use strict";var n=a(11),r=(a(0),a(122)),i=a(185),c=a(70),o=a(334),s=a(242),l=a.p+"static/media/loading.0655dbc7.svg",d=a(1),u=Object(s.a)((function(e){var t;return{loadingBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},loadingIcon:{marginLeft:e.spacing(.75),verticalAlign:"text-top"},image:(t={width:300,height:300},Object(n.a)(t,e.breakpoints.down("md"),{width:275,height:275}),Object(n.a)(t,e.breakpoints.down("sm"),{width:250,height:250}),Object(n.a)(t,e.breakpoints.down(void 0),{width:200,height:200}),t)}}));t.a=function(e){var t=u(),a=e.children,n=e.hideImage;return Object(d.jsx)(r.a,{className:t.loadingBox,children:Object(d.jsxs)(i.a,{className:t.paper,elevation:0,children:[n||!0===n?null:Object(d.jsx)("img",{src:l,alt:"Loading...",className:t.image}),Object(d.jsxs)(c.a,{color:"primary",variant:"h6",children:[a," ",Object(d.jsx)(o.a,{size:24,color:"primary",className:t.loadingIcon})]})]})})}},334:function(e,t,a){"use strict";var n=a(72),r=a(8),i=a(2),c=a(0),o=(a(7),a(5)),s=a(101),l=a(64),d=a(17),u=a(12),b=a(9),j=a(85),p=a(102);function g(e){return Object(j.a)("MuiCircularProgress",e)}Object(p.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,v,h,f,O,x,k,w,y=a(1),S=["className","color","disableShrink","size","style","thickness","value","variant"],T=44,z=Object(l.c)(O||(O=m||(m=Object(n.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),P=Object(l.c)(x||(x=v||(v=Object(n.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),I=Object(b.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:a.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(l.b)(k||(k=h||(h=Object(n.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),z)})),N=Object(b.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),A=Object(b.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var a=e.ownerState;return[t.circle,t["circle".concat(Object(d.a)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.b)(w||(w=f||(f=Object(n.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),P)})),U=c.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiCircularProgress"}),n=a.className,c=a.color,l=void 0===c?"primary":c,b=a.disableShrink,j=void 0!==b&&b,p=a.size,m=void 0===p?40:p,v=a.style,h=a.thickness,f=void 0===h?3.6:h,O=a.value,x=void 0===O?0:O,k=a.variant,w=void 0===k?"indeterminate":k,z=Object(r.a)(a,S),P=Object(i.a)({},a,{color:l,disableShrink:j,size:m,thickness:f,value:x,variant:w}),U=function(e){var t=e.classes,a=e.variant,n=e.color,r=e.disableShrink,i={root:["root",a,"color".concat(Object(d.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(d.a)(a)),r&&"circleDisableShrink"]};return Object(s.a)(i,g,t)}(P),B={},C={},M={};if("determinate"===w){var R=2*Math.PI*((T-f)/2);B.strokeDasharray=R.toFixed(3),M["aria-valuenow"]=Math.round(x),B.strokeDashoffset="".concat(((100-x)/100*R).toFixed(3),"px"),C.transform="rotate(-90deg)"}return Object(y.jsx)(I,Object(i.a)({className:Object(o.a)(U.root,n),style:Object(i.a)({width:m,height:m},C,v),ownerState:P,ref:t,role:"progressbar"},M,z,{children:Object(y.jsx)(N,{className:U.svg,ownerState:P,viewBox:"".concat(22," ").concat(22," ").concat(T," ").concat(T),children:Object(y.jsx)(A,{className:U.circle,style:B,ownerState:P,cx:T,cy:T,r:(T-f)/2,fill:"none",strokeWidth:f})})}))}));t.a=U},456:function(e,t,a){"use strict";var n=a(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(26)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"}),"InsertPhotoRounded");t.default=c},473:function(e,t,a){"use strict";var n=a(20),r=a(11),i=a(0),c=a(316),o=a(19),s=a(5),l=a(122),d=a(304),u=a(185),b=a(184),j=a(70),p=a(766),g=a(775),m=a(774),v=a(776),h=a(456),f=a.n(h),O=a(242),x=a(314),k=a(127),w=a(318),y=a(317),S=a(340),T=["image/jpg","image/jpeg","image/png"],z=S.d().shape({avatar:S.b().required("Required").test("fileFormat","Unsupported format! Please upload an image in jpg, jpeg or png format",(function(e){return e&&T.includes(e.type)})).test("fileSize","Image is too large! Please upload less than 2MB",(function(e){return e&&e.size<=2e6}))}),P=a(1),I=Object(i.lazy)((function(){return a.e(72).then(a.bind(null,735))})),N=Object(O.a)((function(e){var t;return{paper:(t={padding:e.spacing(3,4)},Object(r.a)(t,e.breakpoints.down("md"),{padding:e.spacing(2.8,3)}),Object(r.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.6,2)}),Object(r.a)(t,"borderRadius",e.spacing(.75)),Object(r.a)(t,"textAlign","center"),t)}}));t.a=function(e){var t=N(),a=Object(y.a)(),r=e.edit,h=e.submitAvatar,O=e.previewImg,S=Object(i.useState)(null),T=Object(n.a)(S,2),A=T[0],U=T[1];return Object(i.useEffect)((function(){r&&O&&U(O)}),[r,O]),Object(P.jsx)(l.a,{className:a.root,children:Object(P.jsxs)(d.a,{children:[r&&Object(P.jsx)(x.a,{link:"/dashboard",text:"Back To Dashboard"}),Object(P.jsxs)(u.a,{className:t.paper,variant:"outlined",sx:{marginTop:r?2:4},children:[Object(P.jsx)(f.a,{color:"primary",className:a.headingIcon}),Object(P.jsx)(j.a,{className:a.headingText,variant:"h5",children:Object(P.jsx)("b",{children:r?"Update Profile Picture":"Upload Profile Picture"})}),Object(P.jsx)(c.d,{initialValues:{avatar:null},validationSchema:z,onSubmit:function(e,t){var a=t.setSubmitting,n=new FormData;n.append("avatar",e.avatar),setTimeout((function(){a(!1),h(n)}),500)},children:function(e){var t=e.isSubmitting,n=e.values,c=e.handleSubmit,d=e.setFieldValue,u=e.errors,j=e.submitForm;return Object(P.jsxs)("form",{onSubmit:c,children:[Object(P.jsx)(i.Suspense,{fallback:Object(P.jsx)(k.a,{}),children:Object(P.jsx)(I,{preview:A,values:n,errors:u})}),Object(P.jsx)(l.a,{className:a.box,children:Object(P.jsxs)(p.a,{fullWidth:!0,variant:"outlined",error:!!u.avatar,children:[Object(P.jsx)(g.a,{htmlFor:"avatar",shrink:!0,children:"Avatar"}),Object(P.jsx)(m.a,{id:"avatar","aria-describedby":"avatar-helper-text",name:"avatar",type:"file",onChange:function(e){d("avatar",e.currentTarget.files[0]),e.currentTarget.files[0]?U(URL.createObjectURL(e.currentTarget.files[0])):U(null)},inputProps:{accept:"image/*"}}),Object(P.jsx)(v.a,{id:"avatar-helper-text",children:u.avatar})]})}),Object(P.jsxs)(l.a,{className:Object(s.a)(a.box,a.submitButton),children:[Object(P.jsx)(o.b,{to:"/dashboard",style:{textDecoration:"none",marginRight:"10px"},children:Object(P.jsx)(b.a,{size:"large",color:"primary",children:r?"Cancel":"Skip"})}),Object(P.jsx)(w.a,{createText:"Upload Avatar",creatingText:"Uploading... ",updateText:"Update Avatar",updatingText:"Updating... ",isSubmitting:t,edit:r,disabled:!(!t&&!u.avatar),onClick:j})]})]})}})]})]})})}},719:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(43),i=a(23),c=a(124),o=a(473),s=a(63),l=a(319),d=a(1),u=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,366))}));t.default=Object(r.b)((function(e){return{auth:e.auth,profile:e.profile}}),(function(e){return{onGetAvatar:function(t){return e(s.m(t))},onUpload:function(t,a){return e(s.Q(t,a))}}}))((function(e){var t=e.history,a=e.onGetAvatar,r=e.onUpload,s=e.auth.user,b=e.profile,j=b.avatar,p=b.avatarLoading,g=b.avatarError;if(Object(n.useEffect)((function(){a(s._id)}),[a,s._id]),s&&!s.hasAvatar)return Object(d.jsx)(i.a,{to:"/upload-avatar"});if(p||null===j)return Object(d.jsx)(l.a,{hideImage:!0,children:"Fetching Profile Image..."});if(null===j&&g&&g.status)return Object(d.jsx)(n.Suspense,{children:Object(d.jsx)(u,{hideImage:!0,status:g.status,statusText:g.msg})});if(j){var m="data:image/png;base64,".concat(j);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)("title",{children:["Update Avatar ",void 0===s.name?null:"- ".concat(s.name)," | Bluezone"]}),Object(d.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/update-avatar"}),Object(d.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),Object(d.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(d.jsx)("meta",{property:"og:type",content:"website"}),Object(d.jsx)("meta",{property:"og:title",content:"Update Avatar | Bluezone"}),Object(d.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/update-avatar"}),Object(d.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(d.jsx)("meta",{name:"twitter:title",content:"Update Avatar | Bluezone"})]}),Object(d.jsx)(o.a,{submitAvatar:function(e){r(e,t)},previewImg:m,edit:!0})]})}}))}}]);
//# sourceMappingURL=33.52e01b05.chunk.js.map