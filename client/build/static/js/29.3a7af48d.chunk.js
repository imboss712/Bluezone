(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[29],{252:function(e,a,t){"use strict";var n=t(21),o=t(22);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t(0)),r=(0,n(t(23)).default)(i.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");a.default=r},253:function(e,a,t){"use strict";var n=t(52),o=(t(0),t(12)),i=t(87),r=t(141),s=t(252),l=t.n(s),c=t(195),d=t(1),u=Object(c.a)((function(e){var a;return{backBox:(a={marginTop:e.spacing(4)},Object(n.a)(a,e.breakpoints.down("sm"),{marginTop:e.spacing(3.5)}),Object(n.a)(a,e.breakpoints.down("xs"),{marginTop:e.spacing(3)}),Object(n.a)(a,"padding",e.spacing(1,0)),a),arrow:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));a.a=function(e){var a=u(),t=e.link,n=e.text;return Object(d.jsx)(i.a,{className:a.backBox,elevation:0,children:Object(d.jsx)(o.b,{to:t,style:{textDecoration:"none"},children:Object(d.jsxs)(r.a,{color:"primary",children:[Object(d.jsx)(l.a,{className:a.arrow,color:"primary"}),n]})})})}},332:function(e,a,t){"use strict";var n=t(0),o=n.createContext({});a.a=o},382:function(e,a,t){"use strict";var n=t(21),o=t(22);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t(0)),r=(0,n(t(23)).default)(i.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=r},421:function(e,a,t){"use strict";var n=t(2),o=t(53),i=t(5),r=t(0),s=t(8),l=(t(7),t(107)),c=t(9),d=t(27),u=t(31),m=t(36),p=t(16),h=r.forwardRef((function(e,a){var t=e.children,c=e.classes,h=e.className,b=e.collapsedHeight,f=e.collapsedSize,g=void 0===f?"0px":f,y=e.component,j=void 0===y?"div":y,v=e.disableStrictModeCompat,x=void 0!==v&&v,w=e.in,O=e.onEnter,B=e.onEntered,k=e.onEntering,I=e.onExit,z=e.onExited,T=e.onExiting,E=e.style,R=e.timeout,N=void 0===R?d.b.standard:R,C=e.TransitionComponent,M=void 0===C?l.a:C,A=Object(i.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),W=Object(m.a)(),P=r.useRef(),q=r.useRef(null),H=r.useRef(),S="number"===typeof(b||g)?"".concat(b||g,"px"):b||g;r.useEffect((function(){return function(){clearTimeout(P.current)}}),[]);var D=W.unstable_strictMode&&!x,F=r.useRef(null),G=Object(p.a)(a,D?F:void 0),L=function(e){return function(a,t){if(e){var n=D?[F.current,a]:[a,t],i=Object(o.a)(n,2),r=i[0],s=i[1];void 0===s?e(r):e(r,s)}}},$=L((function(e,a){e.style.height=S,O&&O(e,a)})),Y=L((function(e,a){var t=q.current?q.current.clientHeight:0,n=Object(u.a)({style:E,timeout:N},{mode:"enter"}).duration;if("auto"===N){var o=W.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),H.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(t,"px"),k&&k(e,a)})),Q=L((function(e,a){e.style.height="auto",B&&B(e,a)})),V=L((function(e){var a=q.current?q.current.clientHeight:0;e.style.height="".concat(a,"px"),I&&I(e)})),_=L(z),U=L((function(e){var a=q.current?q.current.clientHeight:0,t=Object(u.a)({style:E,timeout:N},{mode:"exit"}).duration;if("auto"===N){var n=W.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(n,"ms"),H.current=n}else e.style.transitionDuration="string"===typeof t?t:"".concat(t,"ms");e.style.height=S,T&&T(e)}));return r.createElement(M,Object(n.a)({in:w,onEnter:$,onEntered:Q,onEntering:Y,onExit:V,onExited:_,onExiting:U,addEndListener:function(e,a){var t=D?e:a;"auto"===N&&(P.current=setTimeout(t,H.current||0))},nodeRef:D?F:void 0,timeout:"auto"===N?null:N},A),(function(e,a){return r.createElement(j,Object(n.a)({className:Object(s.a)(c.root,c.container,h,{entered:c.entered,exited:!w&&"0px"===S&&c.hidden}[e]),style:Object(n.a)({minHeight:S},E),ref:G},a),r.createElement("div",{className:c.wrapper,ref:q},r.createElement("div",{className:c.wrapperInner},t)))}))}));h.muiSupportAuto=!0,a.a=Object(c.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(h)},581:function(e,a,t){"use strict";var n=t(2),o=t(5),i=t(0),r=(t(7),t(8)),s=t(89),l=t(236),c=t(9),d=t(332),u=i.forwardRef((function(e,a){var t=e.children,c=e.classes,u=e.className,m=e.expandIcon,p=e.focusVisibleClassName,h=e.IconButtonProps,b=void 0===h?{}:h,f=e.onClick,g=Object(o.a)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),y=i.useContext(d.a),j=y.disabled,v=void 0!==j&&j,x=y.expanded,w=y.toggle;return i.createElement(s.a,Object(n.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":x,className:Object(r.a)(c.root,u,v&&c.disabled,x&&c.expanded),focusVisibleClassName:Object(r.a)(c.focusVisible,c.focused,p),onClick:function(e){w&&w(e),f&&f(e)},ref:a},g),i.createElement("div",{className:Object(r.a)(c.content,x&&c.expanded)},t),m&&i.createElement(l.a,Object(n.a)({className:Object(r.a)(c.expandIcon,x&&c.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},b),m))}));a.a=Object(c.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},582:function(e,a,t){"use strict";var n=t(2),o=t(5),i=t(0),r=(t(7),t(8)),s=t(9),l=i.forwardRef((function(e,a){var t=e.classes,s=e.className,l=Object(o.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(t.root,s),ref:a},l))}));a.a=Object(s.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(l)},599:function(e,a,t){"use strict";var n=t(2),o=t(109),i=t(108),r=t(72),s=t(110);var l=t(53),c=t(5),d=t(0),u=(t(97),t(7),t(8)),m=t(421),p=t(87),h=t(9),b=t(332),f=t(90),g=d.forwardRef((function(e,a){var t,h=e.children,g=e.classes,y=e.className,j=e.defaultExpanded,v=void 0!==j&&j,x=e.disabled,w=void 0!==x&&x,O=e.expanded,B=e.onChange,k=e.square,I=void 0!==k&&k,z=e.TransitionComponent,T=void 0===z?m.a:z,E=e.TransitionProps,R=Object(c.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),N=Object(f.a)({controlled:O,default:v,name:"Accordion",state:"expanded"}),C=Object(l.a)(N,2),M=C[0],A=C[1],W=d.useCallback((function(e){A(!M),B&&B(e,!M)}),[M,B,A]),P=d.Children.toArray(h),q=(t=P,Object(o.a)(t)||Object(i.a)(t)||Object(r.a)(t)||Object(s.a)()),H=q[0],S=q.slice(1),D=d.useMemo((function(){return{expanded:M,disabled:w,toggle:W}}),[M,w,W]);return d.createElement(p.a,Object(n.a)({className:Object(u.a)(g.root,y,M&&g.expanded,w&&g.disabled,!I&&g.rounded),ref:a,square:I},R),d.createElement(b.a.Provider,{value:D},H),d.createElement(T,Object(n.a)({in:M,timeout:"auto"},E),d.createElement("div",{"aria-labelledby":H.props.id,id:H.props["aria-controls"],role:"region"},S)))}));a.a=Object(h.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(g)},669:function(e,a,t){"use strict";t.r(a);var n=t(33),o=t(0),i=t(91),r=t(88),s=t(242),l=t(599),c=t(581),d=t(582),u=t(51),m=t(382),p=t.n(m),h=t(195),b=t(253),f=[{id:1,title:"Platform and Games",faqs:[{panel:"panel1",summary:"What is Bluezone eSports?",detail:"Bluezone eSports is a platform where BGMI players can participate in daily online tournaments and earn money and enjoy real gaming experience."},{panel:"panel2",summary:"What games can I play on Bluezone?",detail:"Currently, you can only play Battlegrounds Mobile India (BGMI) and we will add more games soon in the future."},{panel:"panel3",summary:"How to Play BGMI Tournament on Bluezone?",detail:"First, create your account on Bluezone and then choose a suitable match and make sure the time, map, and team type suits you and then join the BGMI Custom Room and show your gaming skills and earn money."},{panel:"panel4",summary:"Requirements to participate in the BGMI Tournament.",detail:"You must have the latest version of Battlegrounds Mobile India (BGMI) and make sure you have downloaded the map in which you want to play the tournament."},{panel:"panel5",summary:"How do I make a request for a specific game?",detail:"For game requests, you can contact us through the Feedback page or Contact page on the Website."},{panel:"panel6",summary:"What device can we use to play tournaments on Bluezone?",detail:"We currently support mobile and tab devices."}]},{id:2,title:"Account and Login",faqs:[{panel:"panel7",summary:"What information do I need to play tournaments on Bluezone?",detail:"We ask for your name, mobile number, date of birth, address, in-game name, game ID to provide you authentic service on our platform. Do not worry, we will keep your data safe."},{panel:"panel8",summary:"How do I change my mobile number?",detail:"To change your mobile number, please contact us through the Feedback page or Contact page on the website."},{panel:"panel9",summary:"Can I have more than one Bluezone account?",detail:"Players are only allowed to register an account with Bluezone. Having more than one registered account on Bluezone is a violation of our Terms and Conditions. This may lead to permanent account termination and forfeiture of the Wallet amount for the particular account(s)."},{panel:"panel10",summary:"I can not verify my mobile number?",detail:"You can contact us through the contact page on the website."},{panel:"panel11",summary:"I am unable to get OTP?",detail:"Try again and contact us if the problem persists."},{panel:"panel12",summary:"How do I delete my Bluezone account?",detail:"To delete your Bluezone account, please contact us through the Feedback page or Contact page on the website."},{panel:"panel13",summary:"I can not login to my account?",detail:"Refresh and try again and contact us if the problem persists."}]},{id:3,title:"Tournaments",faqs:[{panel:"panel14",summary:"Where can I get the latest information about Bluezone tournaments?",detail:"You get all the upcoming and live tournaments on Tournament page."},{panel:"panel15",summary:"How and when will I get the Room ID and Password?",detail:"You will get the Room ID and Password on your registered mobile number via SMS 10 minutes before the start of the tournament."},{panel:"panel16",summary:"Are there free tournaments available?",detail:"Every weekend we host free tournaments."},{panel:"panel17",summary:"Why was I kicked out of the room?",detail:"It may be that your game name or game ID/UID is invalid or does not match with your profile."},{panel:"panel18",summary:"What are the rules for playing tournaments on Bluezone?",detail:"You can visit the Tournament page to see all the rules."}]},{id:4,title:"Prize Money",faqs:[{panel:"panel19",summary:"When do I receive my winnings from a tournament?",detail:"Prizes will be transferred to your Bluezone Wallet within 1 hour of the completion of the tournament. You can then withdraw the cash available in your wallet to your preferred account."},{panel:"panel20",summary:"I have not received the prize money, what should I do?",detail:"If you still have not received the prize money in your Bluezone Wallet after 12 hours, you can contact us to resolve the issue. Make sure you have a screenshot of your tournament result for proof."}]},{id:5,title:"Wallet Payments and Payouts",faqs:[{panel:"panel21",summary:"What are the payment modes available to deposit money in my Bluezone Wallet?",detail:"We accept all standard payment methods on our platform. You can get more details on the Payment page on the website."},{panel:"panel22",summary:"How to request withdrawal?",detail:"You can request a withdrawal from the My Wallet page. We will send you a payout link within 12-24 hours."},{panel:"panel23",summary:"Which withdrawal modes are available?",detail:"Players can withdraw money directly to their UPI, Mobile wallet or Bank account by submitting their details in the payout link."}]},{id:6,title:"Legality and Restrictions",faqs:[{panel:"panel24",summary:"Is Bluezone legal?",detail:'This is a game of skill where you use your skills and strategies to play tournaments on Bluezone. Skill Games are excluded from the definition and scope of "gambling" under applicable Indian laws. Therefore, joining a tournament and winning cash on Bluezone is legal, safe and a lot of fun too!'},{panel:"panel25",summary:"Am I allowed to play if I am under the age of 18?",detail:"No, Bluezone is strictly for users who are at least 18 years of age."},{panel:"panel26",summary:"Can residents of Andhra Pradesh, Assam, Odisha, Telangana, Tamil Nadu, Nagaland and Sikkim participate in paid tournaments on Bluezone?",detail:"The laws of Assam, Andhra Pradesh, Odisha, Telangana, Tamil Nadu, Nagaland and Sikkim prohibit skill gaming for money in accordance with the respective Gaming Acts of the states. Therefore, residents of these states are not allowed to participate in any paid tournaments on Bluezone."},{panel:"panel27",summary:"What is the gameplay management system in Bluezone?",detail:"We are working hard to develop a healthy environment for gamers. We welcome your feedback/suggestions to improve our service/platform."}]},{id:7,title:"Upcoming Features",faqs:[{panel:"panel28",summary:"What new features will be added to Bluezone?",detail:"We will add chat system, live help and support system, and new games like Freefire, Call of Duty Mobile, PUBG: New State, Valorant Mobile, Apex Legends Mobile etc."}]}],g=t(1),y=Object(h.a)((function(e){return{root:{marginTop:e.spacing(4)},heading:{fontSize:e.spacing(4),lineHeight:1.3,fontWeight:"bold",textAlign:"center",margin:e.spacing(1.5,0)},accordian:{marginTop:e.spacing(2.5),marginBottom:e.spacing(2.5),borderRadius:e.shape.borderRadius,backgroundColor:e.palette.background.default,"&:before":{display:"none"}},summary:{padding:e.spacing(1),paddingRight:e.spacing(2.5)},details:{padding:e.spacing(1),marginBottom:e.spacing(2)},expandIcon:{fontSize:e.spacing(3.75)},summaryTypo:{fontSize:e.spacing(2.25),marginLeft:e.spacing(1.5)},detailsTypo:{fontSize:e.spacing(2),marginLeft:e.spacing(1)},moreButton:{margin:"24px auto",textAlign:"center"}}}));a.default=function(){var e=y(),a=Object(o.useState)(!1),t=Object(n.a)(a,2),m=t[0],h=t[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(i.a,{children:[Object(g.jsx)("title",{children:"FAQs | Online BGMI Tournament - Bluezone"}),Object(g.jsx)("meta",{name:"description",content:"In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."}),Object(g.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/help/faq"}),Object(g.jsx)("meta",{name:"robots",content:"index, follow"}),Object(g.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(g.jsx)("meta",{property:"og:type",content:"website"}),Object(g.jsx)("meta",{property:"og:title",content:"FAQs | Online BGMI Tournament - Bluezone"}),Object(g.jsx)("meta",{property:"og:description",content:"In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."}),Object(g.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/help/faq"}),Object(g.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(g.jsx)("meta",{name:"twitter:description",content:"In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."}),Object(g.jsx)("meta",{name:"twitter:title",content:"FAQs | Online BGMI Tournament - Bluezone"})]}),Object(g.jsx)(r.a,{className:e.root,children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(b.a,{link:"/",text:"Back To Home"}),Object(g.jsx)(u.a,{variant:"h1",className:e.heading,children:"FAQs"}),Object(g.jsx)(r.a,{style:{margin:"36px 0"},children:f.map((function(a){return Object(g.jsxs)(r.a,{style:{margin:"4px 0 16px 0"},children:[Object(g.jsx)(u.a,{variant:"h6",children:Object(g.jsxs)("b",{children:[a.title,":"]})}),a.faqs.map((function(a){return Object(g.jsxs)(l.a,{className:e.accordian,expanded:m===a.panel,onChange:(t=a.panel,function(e,a){h(!!a&&t)}),elevation:0,children:[Object(g.jsx)(c.a,{className:e.summary,expandIcon:Object(g.jsx)(p.a,{className:e.expandIcon,color:"primary"}),"aria-controls":a.panel+"a-content",id:a.panel+"a-header",children:Object(g.jsx)(u.a,{className:e.summaryTypo,color:"primary",children:a.summary})}),Object(g.jsx)(d.a,{className:e.details,children:Object(g.jsx)(u.a,{className:e.detailsTypo,children:a.detail})})]},a.panel);var t}))]},a.id)}))})]})})]})}}}]);
//# sourceMappingURL=29.3a7af48d.chunk.js.map