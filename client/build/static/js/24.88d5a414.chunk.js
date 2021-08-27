(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[24,6],{252:function(e,t,a){"use strict";var n=a(21),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(23)).default)(o.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=c},253:function(e,t,a){"use strict";var n=a(52),r=(a(0),a(12)),o=a(86),c=a(141),i=a(252),l=a.n(i),s=a(195),d=a(1),u=Object(s.a)((function(e){var t;return{backBox:(t={marginTop:e.spacing(4)},Object(n.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3.5)}),Object(n.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(3)}),Object(n.a)(t,"padding",e.spacing(1,0)),t),arrow:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=u(),a=e.link,n=e.text;return Object(d.jsx)(o.a,{className:t.backBox,elevation:0,children:Object(d.jsx)(r.b,{to:a,style:{textDecoration:"none"},children:Object(d.jsxs)(c.a,{color:"primary",children:[Object(d.jsx)(l.a,{className:t.arrow,color:"primary"}),n]})})})}},257:function(e,t,a){"use strict";var n=a(2),r=a(53),o=a(5),c=a(0),i=(a(7),a(8)),l=a(89),s=a(275),d=a(9),u=a(236),b=c.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,b=e.checkedIcon,m=e.classes,p=e.className,h=e.defaultChecked,f=e.disabled,j=e.icon,v=e.id,g=e.inputProps,O=e.inputRef,y=e.name,x=e.onBlur,k=e.onChange,w=e.onFocus,C=e.readOnly,S=e.required,N=e.tabIndex,B=e.type,P=e.value,z=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),E=Object(l.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),R=Object(r.a)(E,2),I=R[0],F=R[1],M=Object(s.a)(),$=f;M&&"undefined"===typeof $&&($=M.disabled);var T="checkbox"===B||"radio"===B;return c.createElement(u.a,Object(n.a)({component:"span",className:Object(i.a)(m.root,p,I&&m.checked,$&&m.disabled),disabled:$,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){x&&x(e),M&&M.onBlur&&M.onBlur(e)},ref:t},z),c.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:h,className:m.input,disabled:$,id:T&&v,name:y,onChange:function(e){var t=e.target.checked;F(t),k&&k(e,t)},readOnly:C,ref:O,required:S,tabIndex:N,type:B,value:P},g)),I?b:j)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b)},264:function(e,t,a){"use strict";a.d(t,"b",(function(){return R})),a.d(t,"a",(function(){return I}));var n=a(298),r=a(2),o=a(5),c=a(0),i=(a(7),a(8)),l=a(9),s=a(24),d=a(14),u=a(257),b=c.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.color,s=void 0===l?"secondary":l,b=e.edge,m=void 0!==b&&b,p=e.size,h=void 0===p?"medium":p,f=Object(o.a)(e,["classes","className","color","edge","size"]),j=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(i.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[m],"small"===h&&a["size".concat(Object(d.a)(h))])},c.createElement(u.a,Object(r.a)({type:"checkbox",icon:j,checkedIcon:j,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(d.a)(s))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),c.createElement("span",{className:a.track}))})),m=(Object(l.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(b),a(68)),p=Object(m.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=Object(m.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=Object(m.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),j=c.createElement(h,null),v=c.createElement(p,null),g=c.createElement(f,null),O=c.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?j:a,l=e.classes,s=e.color,b=void 0===s?"secondary":s,m=e.icon,p=void 0===m?v:m,h=e.indeterminate,f=void 0!==h&&h,O=e.indeterminateIcon,y=void 0===O?g:O,x=e.inputProps,k=e.size,w=void 0===k?"medium":k,C=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=f?y:p,N=f?y:n;return c.createElement(u.a,Object(r.a)({type:"checkbox",classes:{root:Object(i.a)(l.root,l["color".concat(Object(d.a)(b))],f&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:b,inputProps:Object(r.a)({"data-indeterminate":f},x),icon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===w?w:S.props.fontSize}),checkedIcon:c.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===w?w:N.props.fontSize}),ref:t},C))})),y=(Object(l.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O),a(299),a(658),a(255)),x=(a(618),a(619),a(616),a(621),a(53)),k=c.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.row,s=void 0!==l&&l,d=Object(o.a)(e,["classes","className","row"]);return c.createElement("div",Object(r.a)({className:Object(i.a)(a.root,n,s&&a.row),ref:t},d))})),w=Object(l.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(k),C=a(16),S=a(89),N=a(266),B=a(93),P=c.forwardRef((function(e,t){var a=e.actions,n=e.children,i=e.name,l=e.value,s=e.onChange,d=Object(o.a)(e,["actions","children","name","value","onChange"]),u=c.useRef(null),b=Object(S.a)({controlled:l,default:e.defaultValue,name:"RadioGroup"}),m=Object(x.a)(b,2),p=m[0],h=m[1];c.useImperativeHandle(a,(function(){return{focus:function(){var e=u.current.querySelector("input:not(:disabled):checked");e||(e=u.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var f=Object(C.a)(t,u),j=Object(B.a)(i);return c.createElement(N.a.Provider,{value:{name:j,onChange:function(e){h(e.target.value),s&&s(e,e.target.value)},value:p}},c.createElement(w,Object(r.a)({role:"radiogroup",ref:f},d),n))})),z=(a(676),function(){return(z=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)});function E(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a}function R(e){var t=e.children,a=E(e,["children"]);return Object(c.createElement)(n.a,z({},function(e){var t=e.disabled,a=e.field,n=a.onBlur,r=E(a,["onBlur"]),o=e.form,c=o.isSubmitting,i=o.touched,l=o.errors,s=e.onBlur,d=e.helperText,u=E(e,["disabled","field","form","onBlur","helperText"]),b=Object(y.e)(l,r.name),m=Object(y.e)(i,r.name)&&!!b;return z(z({variant:u.variant,error:m,helperText:m?b:d,disabled:null!==t&&void 0!==t?t:c,onBlur:null!==s&&void 0!==s?s:function(e){n(null!==e&&void 0!==e?e:r.name)}},r),u)}(a)),t)}R.displayName="FormikMaterialUITextField";function I(e){return Object(c.createElement)(P,z({},function(e){var t=e.field,a=t.onBlur,n=E(t,["onBlur"]),r=(e.form,e.onBlur),o=E(e,["field","form","onBlur"]);return z(z({onBlur:null!==r&&void 0!==r?r:function(e){a(null!==e&&void 0!==e?e:n.name)}},n),o)}(e)))}I.displayName="FormikMaterialUIRadioGroup"},266:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},271:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),c=(a(7),a(8)),i=a(9),l=a(14),s=44,d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.color,u=void 0===d?"primary":d,b=e.disableShrink,m=void 0!==b&&b,p=e.size,h=void 0===p?40:p,f=e.style,j=e.thickness,v=void 0===j?3.6:j,g=e.value,O=void 0===g?0:g,y=e.variant,x=void 0===y?"indeterminate":y,k=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},C={},S={};if("determinate"===x||"static"===x){var N=2*Math.PI*((s-v)/2);w.strokeDasharray=N.toFixed(3),S["aria-valuenow"]=Math.round(O),w.strokeDashoffset="".concat(((100-O)/100*N).toFixed(3),"px"),C.transform="rotate(-90deg)"}return o.createElement("div",Object(n.a)({className:Object(c.a)(a.root,i,"inherit"!==u&&a["color".concat(Object(l.a)(u))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[x]),style:Object(n.a)({width:h,height:h},C,f),ref:t,role:"progressbar"},S,k),o.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(s," ").concat(s)},o.createElement("circle",{className:Object(c.a)(a.circle,m&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[x]),style:w,cx:s,cy:s,r:(s-v)/2,fill:"none",strokeWidth:v})))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},298:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),c=(a(7),a(8)),i=a(616),l=a(617),s=a(677),d=a(619),u=a(618),b=a(621),m=a(658),p=a(9),h={standard:i.a,filled:l.a,outlined:s.a},f=o.forwardRef((function(e,t){var a=e.autoComplete,i=e.autoFocus,l=void 0!==i&&i,s=e.children,p=e.classes,f=e.className,j=e.color,v=void 0===j?"primary":j,g=e.defaultValue,O=e.disabled,y=void 0!==O&&O,x=e.error,k=void 0!==x&&x,w=e.FormHelperTextProps,C=e.fullWidth,S=void 0!==C&&C,N=e.helperText,B=e.hiddenLabel,P=e.id,z=e.InputLabelProps,E=e.inputProps,R=e.InputProps,I=e.inputRef,F=e.label,M=e.multiline,$=void 0!==M&&M,T=e.name,L=e.onBlur,D=e.onChange,q=e.onFocus,H=e.placeholder,W=e.required,A=void 0!==W&&W,V=e.rows,G=e.rowsMax,_=e.maxRows,U=e.minRows,Y=e.select,J=void 0!==Y&&Y,X=e.SelectProps,Z=e.type,K=e.value,Q=e.variant,ee=void 0===Q?"standard":Q,te=Object(r.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var ae={};if("outlined"===ee&&(z&&"undefined"!==typeof z.shrink&&(ae.notched=z.shrink),F)){var ne,re=null!==(ne=null===z||void 0===z?void 0:z.required)&&void 0!==ne?ne:A;ae.label=o.createElement(o.Fragment,null,F,re&&"\xa0*")}J&&(X&&X.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var oe=N&&P?"".concat(P,"-helper-text"):void 0,ce=F&&P?"".concat(P,"-label"):void 0,ie=h[ee],le=o.createElement(ie,Object(n.a)({"aria-describedby":oe,autoComplete:a,autoFocus:l,defaultValue:g,fullWidth:S,multiline:$,name:T,rows:V,rowsMax:G,maxRows:_,minRows:U,type:Z,value:K,id:P,inputRef:I,onBlur:L,onChange:D,onFocus:q,placeholder:H,inputProps:E},ae,R));return o.createElement(u.a,Object(n.a)({className:Object(c.a)(p.root,f),disabled:y,error:k,fullWidth:S,hiddenLabel:B,ref:t,required:A,color:v,variant:ee},te),F&&o.createElement(d.a,Object(n.a)({htmlFor:P,id:ce},z),F),J?o.createElement(m.a,Object(n.a)({"aria-describedby":oe,id:P,labelId:ce,value:K,input:le},X),s):le,N&&o.createElement(b.a,Object(n.a)({id:oe},w),N))}));t.a=Object(p.a)({root:{}},{name:"MuiTextField"})(f)},299:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),c=(a(7),a(8)),i=a(275),l=a(9),s=a(51),d=a(14),u=o.forwardRef((function(e,t){e.checked;var a=e.classes,l=e.className,u=e.control,b=e.disabled,m=(e.inputRef,e.label),p=e.labelPlacement,h=void 0===p?"end":p,f=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),j=Object(i.a)(),v=b;"undefined"===typeof v&&"undefined"!==typeof u.props.disabled&&(v=u.props.disabled),"undefined"===typeof v&&j&&(v=j.disabled);var g={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(g[t]=e[t])})),o.createElement("label",Object(n.a)({className:Object(c.a)(a.root,l,"end"!==h&&a["labelPlacement".concat(Object(d.a)(h))],v&&a.disabled),ref:t},f),o.cloneElement(u,g),o.createElement(s.a,{component:"span",className:Object(c.a)(a.label,v&&a.disabled)},m))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},380:function(e,t,a){"use strict";var n=a(21),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(23)).default)(o.createElement("path",{d:"M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2z"}),"FeedbackRounded");t.default=c},576:function(e,t,a){"use strict";var n=a(21),r=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(23)).default)(o.createElement("path",{d:"M18.65 8.35l-2.79 2.79c-.32.32-.1.86.35.86H18c0 3.31-2.69 6-6 6-.79 0-1.56-.15-2.25-.44-.36-.15-.77-.04-1.04.23-.51.51-.33 1.37.34 1.64.91.37 1.91.57 2.95.57 4.42 0 8-3.58 8-8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01zM6 12c0-3.31 2.69-6 6-6 .79 0 1.56.15 2.25.44.36.15.77.04 1.04-.23.51-.51.33-1.37-.34-1.64C14.04 4.2 13.04 4 12 4c-4.42 0-8 3.58-8 8H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85H6z"}),"CachedRounded");t.default=c},651:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(42),o=a(52),c=a(0),i=a(276),l=a(34),s=a(90),d=a(8),u=a(87),b=a(242),m=a(86),p=a(141),h=a(51),f=a(618),j=a(620),v=a(299),g=a(2),O=a(5),y=(a(7),a(257)),x=a(68),k=Object(x.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),w=Object(x.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),C=a(9);var S=Object(C.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(d.a)(a.root,t&&a.checked)},c.createElement(k,{fontSize:n}),c.createElement(w,{fontSize:n,className:a.layer}))})),N=a(24),B=a(14),P=a(48),z=a(266);var E=c.createElement(S,{checked:!0}),R=c.createElement(S,null),I=c.forwardRef((function(e,t){var a=e.checked,n=e.classes,r=e.color,o=void 0===r?"secondary":r,i=e.name,l=e.onChange,s=e.size,u=void 0===s?"medium":s,b=Object(O.a)(e,["checked","classes","color","name","onChange","size"]),m=c.useContext(z.a),p=a,h=Object(P.a)(l,m&&m.onChange),f=i;return m&&("undefined"===typeof p&&(p=m.value===e.value),"undefined"===typeof f&&(f=m.name)),c.createElement(y.a,Object(g.a)({color:o,type:"radio",icon:c.cloneElement(R,{fontSize:"small"===u?"small":"medium"}),checkedIcon:c.cloneElement(E,{fontSize:"small"===u?"small":"medium"}),classes:{root:Object(d.a)(n.root,n["color".concat(Object(B.a)(o))]),checked:n.checked,disabled:n.disabled},name:f,checked:p,onChange:h,ref:t},b))})),F=Object(C.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(N.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(N.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(I),M=a(255),$=a(264),T=a(271),L=a(380),D=a.n(L),q=a(195),H=a(54),W=a(253),A=a(658),V=a(619),G=a(621),_=a(1),U=function(e){var t=e.errorString,a=e.label,n=e.children,r=e.value,o=e.name,c=e.onChange,i=e.onFocus,l=e.onBlur,s=e.required,d=e.error,u=e.disabled;return Object(_.jsxs)(f.a,{fullWidth:!0,variant:"outlined",error:d,disabled:u,children:[Object(_.jsx)(V.a,{required:s,children:a}),Object(_.jsx)(A.a,{native:!0,name:o,label:a,onChange:c,onBlur:l,value:r,inputProps:{onFocus:function(){return i()}},children:n}),Object(_.jsx)(G.a,{error:!0,children:t})]})},Y=function(e){var t=e.name,a=e.items,n=e.label,r=e.required,o=void 0!==r&&r,c=e.error,i=e.disabled,l=e.onBlur,s=e.onFocus;return Object(_.jsx)(M.b,{autoOk:!0,name:t,as:U,label:n,errorString:Object(_.jsx)(M.a,{name:t}),required:o,error:c,disabled:i,onBlur:l,onFocus:s,children:a.map((function(e){return Object(_.jsx)("option",{value:e.value,children:e.label},e.value)}))})},J=[{label:"Yes",value:"Yes"},{label:"Partially",value:"Partially"},{label:"No",value:"No"}],X=[{label:"Account and Login related",value:"Account and Login related"},{label:"Issues with OTP",value:"Issues with OTP"},{label:"Website related",value:"Website related"},{label:"User Interface related",value:"User Interface related"},{label:"Game related",value:"Game related"},{label:"Payment and Refund related",value:"Payment and Refund related"},{label:"Customer Service related",value:"Customer Service related"},{label:"Seeking Information",value:"Seeking Information"},{label:"Have Suggestions",value:"Have Suggestions"},{label:"Compliments",value:"Compliments"},{label:"Other",value:"Other"}],Z=a(236),K=a(576),Q=a.n(K),ee=Object(q.a)((function(e){return{paper:{borderRadius:e.spacing(.75),display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"center",padding:e.spacing(1.5,.75)}}})),te=function(e){var t=ee(),a=e.mathCaptcha,n=a.firstNumber,r=a.secondNumber,o=a.mathSign,c=e.refreshCaptcha;return Object(_.jsxs)(m.a,{variant:"outlined",className:t.paper,children:[Object(_.jsx)(u.a,{children:Object(_.jsx)(Z.a,{"aria-label":"refresh-math-captcha",color:"primary",onClick:c,children:Object(_.jsx)(Q.a,{size:"small"})})}),Object(_.jsx)(u.a,{style:{padding:"3px 5px",borderRadius:"4px",backgroundColor:"#f4f7fa"},children:Object(_.jsx)(h.a,{children:Object(_.jsx)("b",{children:"".concat(n," ").concat(o," ").concat(r)})})}),Object(_.jsx)(u.a,{children:Object(_.jsx)(h.a,{children:Object(_.jsx)("b",{children:"="})})}),Object(_.jsx)(u.a,{children:Object(_.jsx)(M.b,{component:$.b,variant:"outlined",name:"value",type:"tel",autoComplete:"off",size:"small",inputProps:{size:"4"}})})]})},ae=function(e,t,a){switch(a){case"+":return e+t;case"-":return e-t;case"*":return e*t;default:alert("Error in Math Captcha!")}},ne=["+","-","*"],re=Object(q.a)((function(e){var t,a;return{root:{maxWidth:600,margin:"auto"},paper:(t={marginTop:e.spacing(2),padding:e.spacing(3,4)},Object(o.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.8,3)}),Object(o.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2.6,2)}),Object(o.a)(t,"borderRadius",e.spacing(.75)),Object(o.a)(t,"textAlign","center"),t),box:(a={margin:e.spacing(3,4)},Object(o.a)(a,e.breakpoints.down("sm"),{margin:e.spacing(2.8,2.8)}),Object(o.a)(a,e.breakpoints.down("xs"),{margin:e.spacing(2.6,1.5)}),a),inputLabel:{textAlign:"left",lineHeight:1.6,marginLeft:e.spacing(.3),marginBottom:e.spacing(.5),fontSize:"14px"},typography:{marginTop:e.spacing(4),marginBottom:e.spacing(4),color:e.palette.text.secondary},icon:{marginLeft:e.spacing(1),color:e.palette.text.secondary},feedbackIcon:{fontSize:e.spacing(6),color:"#3f51b5"},submitBtn:Object(o.a)({display:"flex",justifyContent:"flex-end"},e.breakpoints.down("xs"),{justifyContent:"center"})}}));t.default=Object(l.b)(null,(function(e){return{onCreate:function(t){return e(H.c(t))}}}))((function(e){var t=re(),a=e.onCreate,o=Object(c.useState)({satisfy:!1,title:!1,reason:!1,suggestion:!1}),l=Object(r.a)(o,2),g=l[0],O=l[1],y=Object(c.useState)({firstNumber:"",secondNumber:"",mathSign:"",value:""}),x=Object(r.a)(y,2),k=x[0],w=x[1],C=Object(c.useCallback)((function(){var e=Math.floor(11*Math.random()),t=Math.floor(11*Math.random()),a=ne[Math.floor(3*Math.random())],n=ae(e,t,a);w({firstNumber:e,secondNumber:t,mathSign:a,value:n})}),[]);return Object(c.useEffect)((function(){C()}),[C]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(s.a,{children:[Object(_.jsx)("title",{children:"Submit a feedback | Online BGMI Tournament - Bluezone"}),Object(_.jsx)("meta",{name:"description",content:"Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."}),Object(_.jsx)("link",{rel:"canonical",href:"https://www.bluezone.fun/about/feedback"}),Object(_.jsx)("meta",{name:"robots",content:"index, follow"}),Object(_.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(_.jsx)("meta",{property:"og:type",content:"website"}),Object(_.jsx)("meta",{property:"og:title",content:"Submit a feedback | Online BGMI Tournament - Bluezone"}),Object(_.jsx)("meta",{property:"og:description",content:"Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."}),Object(_.jsx)("meta",{property:"og:url",content:"https://www.bluezone.fun/about/feedback"}),Object(_.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(_.jsx)("meta",{name:"twitter:description",content:"Please feel free to give us any feedback or suggestions. This will help us understand your demand and improve our service and website."}),Object(_.jsx)("meta",{name:"twitter:title",content:"Submit a feedback | Online BGMI Tournament - Bluezone"})]}),Object(_.jsx)(u.a,{className:t.root,children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(W.a,{link:"/",text:"Back To Home"}),Object(_.jsxs)(m.a,{className:t.paper,variant:"outlined",children:[Object(_.jsx)(D.a,{className:t.feedbackIcon}),Object(_.jsx)(h.a,{className:t.typography,variant:"h5",children:Object(_.jsx)("b",{children:"Feedback"})}),Object(_.jsx)(M.d,{initialValues:{satisfy:"Yes",title:"Account and Login related",reason:"",suggestion:"",value:""},validationSchema:i.e({satisfy:i.f().required("Required").oneOf(J.map((function(e){return e.value}))),title:i.f().required("Required").oneOf(X.map((function(e){return e.value}))),reason:i.f().required("Required"),suggestion:i.f()}),onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1),Number.parseInt(e.value)!==k.value?alert("Incorrect Math Captcha!"):a(e)}),500)},children:function(e){var a=e.submitForm,r=e.isSubmitting,o=e.errors,c=e.touched;return Object(_.jsxs)(M.c,{children:[Object(_.jsx)(u.a,{className:t.box,style:{textAlign:"left"},children:Object(_.jsxs)(f.a,{component:"fieldset",children:[Object(_.jsx)(j.a,{className:t.inputLabel,children:"Do you achieve your goal?"}),Object(_.jsxs)(M.b,{component:$.a,row:!0,name:"satisfy",children:[Object(_.jsx)(v.a,{value:"Yes",control:Object(_.jsx)(F,{color:"primary",disabled:r}),label:"Yes",disabled:r}),Object(_.jsx)(v.a,{value:"Partially",control:Object(_.jsx)(F,{color:"primary",disabled:r}),label:"Partially",disabled:r}),Object(_.jsx)(v.a,{value:"No",control:Object(_.jsx)(F,{color:"primary",disabled:r}),label:"No",disabled:r})]})]})}),Object(_.jsxs)(u.a,{className:t.box,children:[Object(_.jsx)(h.a,{className:t.inputLabel,variant:"body2",color:o.title&&c.title?"secondary":g.title?"primary":"textSecondary",children:"What was the reason for your visit?"}),Object(_.jsx)(Y,{name:"title",items:X,error:!(!o.title||!c.title),disabled:!!r,onFocus:function(){return O(Object(n.a)(Object(n.a)({},g),{},{title:!0}))},onBlur:function(){return O(Object(n.a)(Object(n.a)({},g),{},{title:!1}))}})]}),Object(_.jsxs)(u.a,{className:t.box,children:[Object(_.jsx)(h.a,{className:t.inputLabel,variant:"body2",color:o.reason&&c.reason?"secondary":g.reason?"primary":"textSecondary",children:"What was the reason you could not achieve your goal?"}),Object(_.jsx)(M.b,{component:$.b,variant:"outlined",name:"reason",type:"text",autoComplete:"off",multiline:!0,minRows:2,fullWidth:!0,inputProps:{onFocus:function(){return O(Object(n.a)(Object(n.a)({},g),{},{reason:!0}))},onBlur:function(){return O(Object(n.a)(Object(n.a)({},g),{},{reason:!1}))}}})]}),Object(_.jsxs)(u.a,{className:t.box,children:[Object(_.jsx)(h.a,{className:t.inputLabel,variant:"body2",color:g.suggestion?"primary":"textSecondary",children:"Do you have any suggestions to make our website or service better?"}),Object(_.jsx)(M.b,{component:$.b,variant:"outlined",name:"suggestion",type:"text",autoComplete:"off",multiline:!0,minRows:4,fullWidth:!0,inputProps:{onFocus:function(){return O(Object(n.a)(Object(n.a)({},g),{},{suggestion:!0}))},onBlur:function(){return O(Object(n.a)(Object(n.a)({},g),{},{suggestion:!1}))}}})]}),Object(_.jsx)(u.a,{className:t.box,children:Object(_.jsx)(te,{mathCaptcha:k,refreshCaptcha:C})}),Object(_.jsx)(u.a,{className:Object(d.a)(t.box,t.submitBtn),children:Object(_.jsx)(p.a,{size:"large",variant:"contained",color:"primary",disabled:!!(r||o.satisfy||o.title||o.reason),onClick:a,disableElevation:!0,children:r?Object(_.jsxs)(_.Fragment,{children:["Submitting..."," ",Object(_.jsx)(T.a,{size:16,className:t.icon})]}):"Submit"})})]})}})]})]})})]})}))}}]);
//# sourceMappingURL=24.88d5a414.chunk.js.map