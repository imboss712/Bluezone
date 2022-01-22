(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{348:function(e,t,a){"use strict";var o=a(0),r=o.createContext();t.a=r},370:function(e,t,a){"use strict";var o=a(0),r=o.createContext();t.a=r},476:function(e,t,a){"use strict";var o=a(2),r=a(8),n=a(0),i=(a(7),a(5)),c=a(101),s=a(12),l=a(9),d=a(85),b=a(102);function u(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var p=a(1),j=["className","component"],v=Object(l.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),m=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,b=Object(r.a)(a,j),m=Object(o.a)({},a,{component:d}),O=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(m);return Object(p.jsx)(v,Object(o.a)({ref:t,as:d,className:Object(i.a)(O.root,n),ownerState:m},b))}));t.a=m},477:function(e,t,a){"use strict";var o=a(8),r=a(2),n=a(0),i=(a(7),a(5)),c=a(101),s=a(370),l=a(12),d=a(9),b=a(85),u=a(102);function p(e){return Object(b.a)("MuiTable",e)}Object(u.a)("MuiTable",["root","stickyHeader"]);var j=a(1),v=["className","component","padding","size","stickyHeader"],m=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),O="table",g=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,u=void 0===b?O:b,g=a.padding,f=void 0===g?"normal":g,h=a.size,y=void 0===h?"medium":h,x=a.stickyHeader,k=void 0!==x&&x,w=Object(o.a)(a,v),N=Object(r.a)({},a,{component:u,padding:f,size:y,stickyHeader:k}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,p,t)}(N),R=n.useMemo((function(){return{padding:f,size:y,stickyHeader:k}}),[f,y,k]);return Object(j.jsx)(s.a.Provider,{value:R,children:Object(j.jsx)(m,Object(r.a)({as:u,role:u===O?null:"table",ref:t,className:Object(i.a)(M.root,d),ownerState:N},w))})}));t.a=g},478:function(e,t,a){"use strict";var o=a(11),r=a(2),n=a(8),i=a(0),c=(a(7),a(5)),s=a(101),l=a(235),d=a(348),b=a(12),u=a(9),p=a(85),j=a(102);function v(e){return Object(p.a)("MuiTableRow",e)}var m=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),O=a(1),g=["className","component","hover","selected"],f=Object(u.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(o.a)(t,"&.".concat(m.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(o.a)(t,"&.".concat(m.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),h=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),o=a.className,l=a.component,u=void 0===l?"tr":l,p=a.hover,j=void 0!==p&&p,m=a.selected,h=void 0!==m&&m,y=Object(n.a)(a,g),x=i.useContext(d.a),k=Object(r.a)({},a,{component:u,hover:j,selected:h,head:x&&"head"===x.variant,footer:x&&"footer"===x.variant}),w=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,v,t)}(k);return Object(O.jsx)(f,Object(r.a)({as:u,ref:t,className:Object(c.a)(w.root,o),role:"tr"===u?null:"row",ownerState:k},y))}));t.a=h},479:function(e,t,a){"use strict";var o=a(11),r=a(8),n=a(2),i=a(0),c=(a(7),a(5)),s=a(101),l=a(235),d=a(17),b=a(370),u=a(348),p=a(12),j=a(9),v=a(85),m=a(102);function O(e){return Object(v.a)("MuiTableCell",e)}var g=Object(m.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),f=a(1),h=["align","className","component","padding","scope","size","sortDirection","variant"],y=Object(j.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.d)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(o.a)({padding:"6px 16px"},"&.".concat(g.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),x=i.forwardRef((function(e,t){var a,o=Object(p.a)({props:e,name:"MuiTableCell"}),l=o.align,j=void 0===l?"inherit":l,v=o.className,m=o.component,g=o.padding,x=o.scope,k=o.size,w=o.sortDirection,N=o.variant,M=Object(r.a)(o,h),R=i.useContext(b.a),T=i.useContext(u.a),C=T&&"head"===T.variant;a=m||(C?"th":"td");var H=x;!H&&C&&(H="col");var z=N||T&&T.variant,S=Object(n.a)({},o,{align:j,component:a,padding:g||(R&&R.padding?R.padding:"normal"),size:k||(R&&R.size?R.size:"medium"),sortDirection:w,stickyHeader:"head"===z&&R&&R.stickyHeader,variant:z}),A=function(e){var t=e.classes,a=e.variant,o=e.align,r=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==o&&"align".concat(Object(d.a)(o)),"normal"!==r&&"padding".concat(Object(d.a)(r)),"size".concat(Object(d.a)(n))]};return Object(s.a)(i,O,t)}(S),B=null;return w&&(B="asc"===w?"ascending":"descending"),Object(f.jsx)(y,Object(n.a)({as:a,ref:t,className:Object(c.a)(A.root,v),"aria-sort":B,scope:H,ownerState:S},M))}));t.a=x},480:function(e,t,a){"use strict";var o=a(2),r=a(8),n=a(0),i=(a(7),a(5)),c=a(101),s=a(348),l=a(12),d=a(9),b=a(85),u=a(102);function p(e){return Object(b.a)("MuiTableBody",e)}Object(u.a)("MuiTableBody",["root"]);var j=a(1),v=["className","component"],m=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},g="tbody",f=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,b=void 0===d?g:d,u=Object(r.a)(a,v),f=Object(o.a)({},a,{component:b}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(f);return Object(j.jsx)(s.a.Provider,{value:O,children:Object(j.jsx)(m,Object(o.a)({className:Object(i.a)(h.root,n),as:b,ref:t,role:b===g?null:"rowgroup",ownerState:f},u))})}));t.a=f},680:function(e,t,a){"use strict";a.r(t);var o=a(11),r=(a(0),a(385)),n=a(122),i=a(185),c=a(476),s=a(477),l=a(480),d=a(478),b=a(479),u=a(242),p=a(1),j=Object(u.a)((function(e){var t;return{tableBox:(t={margin:e.spacing(2,0,.5,0)},Object(o.a)(t,e.breakpoints.down("md"),{margin:e.spacing(1.8,1.2)}),Object(o.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(1.6,.7)}),t),table:{width:"100%"}}})),v=function(e){var t=e.keyName,a=e.valueName;return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a,{children:t}),Object(p.jsx)(b.a,{align:"right",sx:{color:"#0D47A1"},children:a})]})};t.default=function(e){var t=j(),a=e.user,o=a.name,d=a.phone,b=a.dob,u=e.profile,m=u.gameName,O=u.gameId;return Object(p.jsx)(n.a,{className:t.tableBox,children:Object(p.jsx)(c.a,{component:i.a,variant:"outlined",elevation:0,children:Object(p.jsx)(s.a,{className:t.table,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(v,{keyName:"Name",valueName:o}),Object(p.jsx)(v,{keyName:"Phone",valueName:d}),Object(p.jsx)(v,{keyName:"Date of Birth",valueName:Object(r.a)(new Date(b),"EEE, do MMM yyyy")}),Object(p.jsx)(v,{keyName:"In Game Name",valueName:m}),Object(p.jsx)(v,{keyName:"Game Id",valueName:O})]})})})})}}}]);
//# sourceMappingURL=36.66fb0b5c.chunk.js.map