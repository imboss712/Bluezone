(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[51],{253:function(e,a,t){"use strict";var r=t(52),n=(t(0),t(12)),i=t(86),l=t(141),o=t(252),c=t.n(o),u=t(195),s=t(1),d=Object(u.a)((function(e){var a;return{backBox:(a={marginTop:e.spacing(4)},Object(r.a)(a,e.breakpoints.down("sm"),{marginTop:e.spacing(3.5)}),Object(r.a)(a,e.breakpoints.down("xs"),{marginTop:e.spacing(3)}),Object(r.a)(a,"padding",e.spacing(1,0)),a),arrow:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));a.a=function(e){var a=d(),t=e.link,r=e.text;return Object(s.jsx)(i.a,{className:a.backBox,elevation:0,children:Object(s.jsx)(n.b,{to:t,style:{textDecoration:"none"},children:Object(s.jsxs)(l.a,{color:"primary",children:[Object(s.jsx)(c.a,{className:a.arrow,color:"primary"}),r]})})})}},312:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return o})),t.d(a,"f",(function(){return c}));var r=[{label:"IGL",value:"IGL"},{label:"Sniper",value:"Sniper"},{label:"Assaulter",value:"Assaulter"},{label:"Camper",value:"Camper"},{label:"Fragger",value:"Fragger"},{label:"Medic",value:"Medic"},{label:"Support",value:"Support"}],n=[{label:"AKM",value:"AKM"},{label:"M416",value:"M416"},{label:"GROZA",value:"GROZA"},{label:"AUG",value:"AUG"},{label:"M762",value:"M762"},{label:"Kar98K",value:"Kar98K"},{label:"M24",value:"M24"},{label:"AWM",value:"AWM"},{label:"Mk14",value:"Mk14"},{label:"UZI",value:"UZI"},{label:"Vector",value:"Vector"},{label:"M249",value:"M249"},{label:"DP-28",value:"DP-28"}],i=[{label:"Erangel",value:"Erangel"},{label:"Miramar",value:"Miramar"},{label:"Sanhok",value:"Sanhok"}],l=[{label:"TPP",value:"TPP"},{label:"FPP",value:"FPP"}],o=[{label:"Solo",value:"Solo"},{label:"Duo",value:"Duo"},{label:"Squad",value:"Squad"}],c=[{label:"Bronze",value:"Bronze"},{label:"Silver",value:"Silver"},{label:"Gold",value:"Gold"},{label:"Platinum",value:"Platinum"},{label:"Diamond",value:"Diamond"},{label:"Crown",value:"Crown"},{label:"Ace",value:"Ace"},{label:"Ace Master",value:"Ace Master"},{label:"Ace Dominator",value:"Ace Dominator"},{label:"Conqueror",value:"Conqueror"}]},384:function(e,a,t){"use strict";var r=t(52),n=t(0),i=t(255),l=t(87),o=t(242),c=t(244),u=t(86),s=t(141),d=t(51),b=t(600),p=t(559),j=t(598),m=t(271),f=t(420),v=t.n(f),g=t(195),O=t(253),x=t(95),h=t(276),q=t(312),y=[h.e({gameName:h.f().required("Required"),gameId:h.d("Must be a number type").required("Required"),bio:h.f().required("Required"),role:h.f().required("Required").oneOf(q.d.map((function(e){return e.value}))),favoriteGun:h.a().of(h.e().shape({label:h.f().required("Required").oneOf(q.a.map((function(e){return e.label}))),value:h.f().required("Required").oneOf(q.a.map((function(e){return e.value})))})).min(1,"Min of 1 Favorite Gun").max(3,"Max of 3 Favorite Gun")}),h.e({favoriteMap:h.f().required("Required").oneOf(q.b.map((function(e){return e.value}))),server:h.f().required("Required"),season:h.d().required("Required").min(19).max(30),perspective:h.f().required("Required").oneOf(q.c.map((function(e){return e.value}))),teamType:h.f().required("Required").oneOf(q.e.map((function(e){return e.value}))),rpValue:h.d().required("Required").min(0).max(100),kdValue:h.d().required("Required").min(0).max(15),tierValue:h.f().required("Required").oneOf(q.f.map((function(e){return e.value})))}),h.e({city:h.f().required("Required"),district:h.f().required("Required"),state:h.f().required("Required"),pincode:h.f().required("Required").matches(/^[1-9]{1}[0-9]{5}$/,"Invalid Pin Code")}),h.e({instagram:h.f().url(),youtube:h.f().url(),twitter:h.f().url(),facebook:h.f().url()})],k=t(1),S=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(11),t.e(58)]).then(t.bind(null,654))})),w=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(68)]).then(t.bind(null,641))})),M=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(72)]).then(t.bind(null,642))})),P=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(73)]).then(t.bind(null,643))})),R=Object(g.a)((function(e){var a,t;return{root:{maxWidth:960,margin:"auto"},paper:(a={padding:e.spacing(3,4)},Object(r.a)(a,e.breakpoints.down("sm"),{padding:e.spacing(2.8,3.75)}),Object(r.a)(a,e.breakpoints.down("xs"),{padding:e.spacing(2.6,3.5)}),Object(r.a)(a,"borderRadius",e.spacing(.75)),Object(r.a)(a,"textAlign","center"),a),typography:{marginTop:e.spacing(4),marginBottom:e.spacing(4),color:e.palette.text.secondary},icon:{marginLeft:e.spacing(1),color:e.palette.text.secondary},profileIcon:{fontSize:e.spacing(6),color:"#3F51B5"},stepper:{width:"100%"},stepperRoot:(t={padding:e.spacing(3),overflow:"auto",marginBottom:e.spacing(2)},Object(r.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(3,1.5)}),Object(r.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(3,0)}),t),buttonGroup:{display:"inline-block",marginTop:e.spacing(2)},button:{margin:e.spacing(1)}}}));a.a=function(e){var a=R(),t=e.activeStep,r=e.initialValues,f=e.handleSubmit,g=e.steps,h=e.setActiveStep,q=e.edit,A=y[t],G=function(){h((function(e){return e-1}))};return Object(k.jsx)(l.a,{className:a.root,children:Object(k.jsxs)(o.a,{children:[q&&Object(k.jsx)(O.a,{link:"/dashboard",text:"Back To Dashboard"}),Object(k.jsxs)(u.a,{className:a.paper,variant:"outlined",style:{marginTop:q?"16px":"32px"},children:[Object(k.jsx)(v.a,{className:a.profileIcon}),Object(k.jsx)(d.a,{className:a.typography,variant:"h5",children:Object(k.jsx)("b",{children:q?"Update Your Profile":"Create Your Profile"})}),Object(k.jsxs)(l.a,{className:a.stepper,children:[Object(k.jsx)(b.a,{activeStep:t,alternativeLabel:!0,className:a.stepperRoot,children:g.map((function(e){return Object(k.jsx)(p.a,{children:Object(k.jsx)(j.a,{children:e})},e)}))}),Object(k.jsx)(i.d,{initialValues:r,validationSchema:A,onSubmit:f,children:function(e){var r=e.isSubmitting,o=e.errors,u=e.touched,d=!A._nodes.every((function(e){return"undefined"===typeof o[e]}));return Object(k.jsxs)(i.c,{id:"profile-form",children:[Object(k.jsx)(c.a,{container:!0,spacing:3,style:{justifyContent:"space-around"},children:function(e){switch(e){case 0:return Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(x.a,{}),children:Object(k.jsx)(S,{errors:o,touched:u,disable:!!r})});case 1:return Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(x.a,{}),children:Object(k.jsx)(w,{errors:o,touched:u,disable:!!r})});case 2:return Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(x.a,{}),children:Object(k.jsx)(M,{})});case 3:return Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(x.a,{}),children:Object(k.jsx)(P,{})});default:return"Unknown stepIndex"}}(t)}),Object(k.jsxs)(l.a,{className:a.buttonGroup,children:[t>0&&Object(k.jsx)(s.a,{variant:"outlined",size:"large",disabled:0===t||!!r,onClick:G,className:a.button,children:"Back"}),Object(k.jsx)(s.a,{variant:"contained",size:"large",type:"submit",color:"primary",disabled:!(!r&&!d),className:a.button,disableElevation:!0,children:t===g.length-1?r?Object(k.jsxs)(k.Fragment,{children:[q?"Updating... ":"Completing... ",Object(k.jsx)(m.a,{size:16,className:a.icon})]}):q?"Update Profile":"Complete Profile":"Next"})]})]})}})]})]})]})})}},666:function(e,a,t){"use strict";t.r(a);var r=t(42),n=t(0),i=t(34),l=t(19),o=t(90),c=t(54),u=t(312),s={gameName:"",gameId:"",bio:"",role:"Assaulter",favoriteGun:[u.a[1],u.a[7]],favoriteMap:"Erangel",season:20,server:"India",perspective:"TPP",teamType:"Squad",rpValue:0,kdValue:0,tierValue:"Bronze",city:"",district:"",state:"",pincode:"",instagram:"",youtube:"",twitter:"",facebook:""},d=t(384),b=t(1);a.default=Object(i.b)((function(e){return{auth:e.auth}}),(function(e){return{onCreateProfile:function(a,t){return e(c.e(a,t))}}}))((function(e){var a=e.onCreateProfile,t=e.history,i=e.auth,c=i.isAuthenticated,u=i.user,p=Object(n.useState)(0),j=Object(r.a)(p,2),m=j[0],f=j[1],v=["General Information","Game Statistics","Address","Social Links"];if(!c)return Object(b.jsx)(l.a,{to:"/login"});if(c&&u&&u.isProfile)return Object(b.jsx)(l.a,{to:"/dashboard"});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(o.a,{children:[Object(b.jsxs)("title",{children:["Create Dashboard ",void 0===u.name?null:"- ".concat(u.name)," | Bluezone"]}),Object(b.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/create-dashboard"}),Object(b.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),Object(b.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(b.jsx)("meta",{property:"og:type",content:"article"}),Object(b.jsx)("meta",{property:"og:title",content:"Create Dashboard | Bluezone"}),Object(b.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/create-dashboard"}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(b.jsx)("meta",{name:"twitter:title",content:"Create Dashboard | Bluezone"})]}),Object(b.jsx)(d.a,{initialValues:s,handleSubmit:function(e,r){m===v.length-1?function(e,r){var n={gameName:e.gameName,gameId:e.gameId,bio:e.bio,role:e.role,favoriteGun:e.favoriteGun.map((function(e){return e.value})),stats:{favoriteMap:e.favoriteMap,server:e.server,season:e.season,perspective:e.perspective,teamType:e.teamType,rpValue:e.rpValue,kdValue:e.kdValue,tierValue:e.tierValue},address:{city:e.city,district:e.district,state:e.state,pincode:e.pincode},social:{instagram:e.instagram,youtube:e.youtube,twitter:e.twitter,facebook:e.facebook}};setTimeout((function(){r.setSubmitting(!1),a(n,t)}),500)}(e,r):(f((function(e){return e+1})),r.setTouched({}),r.setSubmitting(!1))},activeStep:m,steps:v,setActiveStep:f})]})}))}}]);
//# sourceMappingURL=51.4248aef4.chunk.js.map