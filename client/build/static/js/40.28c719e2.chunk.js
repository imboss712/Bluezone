(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[40,6],{257:function(e,t,a){"use strict";var o=a(2),n=a(53),r=a(5),c=a(0),l=(a(7),a(8)),i=a(90),d=a(275),s=a(9),u=a(236),m=c.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,v=e.icon,g=e.id,O=e.inputProps,j=e.inputRef,y=e.name,k=e.onBlur,x=e.onChange,w=e.onFocus,C=e.readOnly,P=e.required,E=e.tabIndex,R=e.type,I=e.value,S=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(i.a)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),N=Object(n.a)(B,2),$=N[0],F=N[1],z=Object(d.a)(),L=f;z&&"undefined"===typeof L&&(L=z.disabled);var T="checkbox"===R||"radio"===R;return c.createElement(u.a,Object(o.a)({component:"span",className:Object(l.a)(p.root,b,$&&p.checked,L&&p.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){k&&k(e),z&&z.onBlur&&z.onBlur(e)},ref:t},S),c.createElement("input",Object(o.a)({autoFocus:a,checked:s,defaultChecked:h,className:p.input,disabled:L,id:T&&g,name:y,onChange:function(e){var t=e.target.checked;F(t),x&&x(e,t)},readOnly:C,ref:j,required:P,tabIndex:E,type:R,value:I},O)),$?m:v)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},264:function(e,t,a){"use strict";a.d(t,"b",(function(){return N})),a.d(t,"a",(function(){return $}));var o=a(298),n=a(2),r=a(5),c=a(0),l=(a(7),a(8)),i=a(9),d=a(24),s=a(14),u=a(257),m=c.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.color,d=void 0===i?"secondary":i,m=e.edge,p=void 0!==m&&m,b=e.size,h=void 0===b?"medium":b,f=Object(r.a)(e,["classes","className","color","edge","size"]),v=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(l.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===h&&a["size".concat(Object(s.a)(h))])},c.createElement(u.a,Object(n.a)({type:"checkbox",icon:v,checkedIcon:v,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(s.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),c.createElement("span",{className:a.track}))})),p=(Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(m),a(68)),b=Object(p.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=Object(p.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=Object(p.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=c.createElement(h,null),g=c.createElement(b,null),O=c.createElement(f,null),j=c.forwardRef((function(e,t){var a=e.checkedIcon,o=void 0===a?v:a,i=e.classes,d=e.color,m=void 0===d?"secondary":d,p=e.icon,b=void 0===p?g:p,h=e.indeterminate,f=void 0!==h&&h,j=e.indeterminateIcon,y=void 0===j?O:j,k=e.inputProps,x=e.size,w=void 0===x?"medium":x,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),P=f?y:b,E=f?y:o;return c.createElement(u.a,Object(n.a)({type:"checkbox",classes:{root:Object(l.a)(i.root,i["color".concat(Object(s.a)(m))],f&&i.indeterminate),checked:i.checked,disabled:i.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":f},k),icon:c.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===w?w:P.props.fontSize}),checkedIcon:c.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===w?w:E.props.fontSize}),ref:t},C))})),y=(Object(i.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(j),a(299),a(658),a(255)),k=(a(618),a(619),a(616),a(621),a(53)),x=c.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.row,d=void 0!==i&&i,s=Object(r.a)(e,["classes","className","row"]);return c.createElement("div",Object(n.a)({className:Object(l.a)(a.root,o,d&&a.row),ref:t},s))})),w=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(x),C=a(16),P=a(90),E=a(266),R=a(94),I=c.forwardRef((function(e,t){var a=e.actions,o=e.children,l=e.name,i=e.value,d=e.onChange,s=Object(r.a)(e,["actions","children","name","value","onChange"]),u=c.useRef(null),m=Object(P.a)({controlled:i,default:e.defaultValue,name:"RadioGroup"}),p=Object(k.a)(m,2),b=p[0],h=p[1];c.useImperativeHandle(a,(function(){return{focus:function(){var e=u.current.querySelector("input:not(:disabled):checked");e||(e=u.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var f=Object(C.a)(t,u),v=Object(R.a)(l);return c.createElement(E.a.Provider,{value:{name:v,onChange:function(e){h(e.target.value),d&&d(e,e.target.value)},value:b}},c.createElement(w,Object(n.a)({role:"radiogroup",ref:f},s),o))})),S=(a(676),function(){return(S=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)});function B(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(a[o[n]]=e[o[n]])}return a}function N(e){var t=e.children,a=B(e,["children"]);return Object(c.createElement)(o.a,S({},function(e){var t=e.disabled,a=e.field,o=a.onBlur,n=B(a,["onBlur"]),r=e.form,c=r.isSubmitting,l=r.touched,i=r.errors,d=e.onBlur,s=e.helperText,u=B(e,["disabled","field","form","onBlur","helperText"]),m=Object(y.e)(i,n.name),p=Object(y.e)(l,n.name)&&!!m;return S(S({variant:u.variant,error:p,helperText:p?m:s,disabled:null!==t&&void 0!==t?t:c,onBlur:null!==d&&void 0!==d?d:function(e){o(null!==e&&void 0!==e?e:n.name)}},n),u)}(a)),t)}N.displayName="FormikMaterialUITextField";function $(e){return Object(c.createElement)(I,S({},function(e){var t=e.field,a=t.onBlur,o=B(t,["onBlur"]),n=(e.form,e.onBlur),r=B(e,["field","form","onBlur"]);return S(S({onBlur:null!==n&&void 0!==n?n:function(e){a(null!==e&&void 0!==e?e:o.name)}},o),r)}(e)))}$.displayName="FormikMaterialUIRadioGroup"},266:function(e,t,a){"use strict";var o=a(0),n=o.createContext();t.a=n},298:function(e,t,a){"use strict";var o=a(2),n=a(5),r=a(0),c=(a(7),a(8)),l=a(616),i=a(617),d=a(677),s=a(619),u=a(618),m=a(621),p=a(658),b=a(9),h={standard:l.a,filled:i.a,outlined:d.a},f=r.forwardRef((function(e,t){var a=e.autoComplete,l=e.autoFocus,i=void 0!==l&&l,d=e.children,b=e.classes,f=e.className,v=e.color,g=void 0===v?"primary":v,O=e.defaultValue,j=e.disabled,y=void 0!==j&&j,k=e.error,x=void 0!==k&&k,w=e.FormHelperTextProps,C=e.fullWidth,P=void 0!==C&&C,E=e.helperText,R=e.hiddenLabel,I=e.id,S=e.InputLabelProps,B=e.inputProps,N=e.InputProps,$=e.inputRef,F=e.label,z=e.multiline,L=void 0!==z&&z,T=e.name,q=e.onBlur,M=e.onChange,H=e.onFocus,V=e.placeholder,W=e.required,D=void 0!==W&&W,G=e.rows,A=e.rowsMax,J=e.maxRows,U=e.minRows,X=e.select,K=void 0!==X&&X,Q=e.SelectProps,Y=e.type,Z=e.value,_=e.variant,ee=void 0===_?"standard":_,te=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var ae={};if("outlined"===ee&&(S&&"undefined"!==typeof S.shrink&&(ae.notched=S.shrink),F)){var oe,ne=null!==(oe=null===S||void 0===S?void 0:S.required)&&void 0!==oe?oe:D;ae.label=r.createElement(r.Fragment,null,F,ne&&"\xa0*")}K&&(Q&&Q.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var re=E&&I?"".concat(I,"-helper-text"):void 0,ce=F&&I?"".concat(I,"-label"):void 0,le=h[ee],ie=r.createElement(le,Object(o.a)({"aria-describedby":re,autoComplete:a,autoFocus:i,defaultValue:O,fullWidth:P,multiline:L,name:T,rows:G,rowsMax:A,maxRows:J,minRows:U,type:Y,value:Z,id:I,inputRef:$,onBlur:q,onChange:M,onFocus:H,placeholder:V,inputProps:B},ae,N));return r.createElement(u.a,Object(o.a)({className:Object(c.a)(b.root,f),disabled:y,error:x,fullWidth:P,hiddenLabel:R,ref:t,required:D,color:g,variant:ee},te),F&&r.createElement(s.a,Object(o.a)({htmlFor:I,id:ce},S),F),K?r.createElement(p.a,Object(o.a)({"aria-describedby":re,id:I,labelId:ce,value:Z,input:ie},Q),d):ie,E&&r.createElement(m.a,Object(o.a)({id:re},w),E))}));t.a=Object(b.a)({root:{}},{name:"MuiTextField"})(f)},299:function(e,t,a){"use strict";var o=a(2),n=a(5),r=a(0),c=(a(7),a(8)),l=a(275),i=a(9),d=a(51),s=a(14),u=r.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(n.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),v=Object(l.a)(),g=m;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&v&&(g=v.disabled);var O={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(O[t]=e[t])})),r.createElement("label",Object(o.a)({className:Object(c.a)(a.root,i,"end"!==h&&a["labelPlacement".concat(Object(s.a)(h))],g&&a.disabled),ref:t},f),r.cloneElement(u,O),r.createElement(d.a,{component:"span",className:Object(c.a)(a.label,g&&a.disabled)},p))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},650:function(e,t,a){"use strict";a.r(t);var o=a(52),n=(a(0),a(276)),r=a(35),c=a(8),l=a(88),i=a(141),d=a(51),s=a(255),u=a(264),m=a(271),p=a(195),b=a(54),h=a(1),f=Object(p.a)((function(e){var t;return{teamText:{color:e.palette.text.secondary},root:{margin:"auto"},box:(t={margin:e.spacing(3,4)},Object(o.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(2.8,2.8)}),Object(o.a)(t,e.breakpoints.down("xs"),{margin:e.spacing(2.6,1.5)}),t),icon:{marginLeft:e.spacing(1),color:e.palette.text.secondary}}}));t.default=Object(r.b)(null,(function(e){return{onSendDetail:function(t,a){return e(b.G(t,a))}}}))((function(e){var t=f(),a=e.tournamentId,o=e.onSendDetail;return Object(h.jsxs)(l.a,{className:t.root,children:[Object(h.jsx)(d.a,{className:Object(c.a)(t.teamText,t.box),children:"Share Room Id and Password"}),Object(h.jsx)(s.d,{initialValues:{roomId:"",roomPwd:""},validationSchema:n.e({roomId:n.d().required("Required"),roomPwd:n.d().required("Required")}),onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1),o(a,e)}),500)},children:function(e){var a=e.submitForm,o=e.isSubmitting,n=e.errors;return Object(h.jsxs)(s.c,{children:[Object(h.jsx)(l.a,{className:t.box,children:Object(h.jsx)(s.b,{component:u.b,variant:"outlined",name:"roomId",label:"Room Id",type:"number",placeholder:"Eg. 16823266",autoComplete:"off",fullWidth:!0})}),Object(h.jsx)(l.a,{className:t.box,children:Object(h.jsx)(s.b,{component:u.b,variant:"outlined",name:"roomPwd",type:"number",label:"Room Password",placeholder:"Eg. 123456",autoComplete:"off",fullWidth:!0})}),Object(h.jsx)(l.a,{className:t.box,children:Object(h.jsx)(i.a,{size:"large",variant:"contained",color:"primary",disabled:!!(o||n.roomId||n.roomPwd),onClick:a,disableElevation:!0,children:o?Object(h.jsxs)(h.Fragment,{children:["Sending..."," ",Object(h.jsx)(m.a,{size:16,className:t.icon})]}):"Send Room-Id Password"})})]})}})]})}))}}]);
//# sourceMappingURL=40.28c719e2.chunk.js.map