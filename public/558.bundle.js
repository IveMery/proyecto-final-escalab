(self.webpackChunkproyecto_final=self.webpackChunkproyecto_final||[]).push([[558],{3248:function(e,t,n){"use strict";var r=n(7294),a=n(3727),o=n(4001);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function s(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,n,l,d,m,p=(d=f,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(d);if(m){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).state={hasError:!1},t}return t=f,l=[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}],(n=[{key:"render",value:function(){return this.state.hasError?r.createElement("div",null,r.createElement("p",null,"oops! Tenemos un Problema")," ",r.createElement(a.rU,{to:"/"},r.createElement(o.Z,null,"Inicio"))):this.props.children}}])&&c(t.prototype,n),l&&c(t,l),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component);t.Z=d},4001:function(e,t,n){"use strict";var r=n(7294),a=n(282);t.Z=function(e){var t=e.onClick,n=e.startIcon,o=e.variant,l=e.color,c=e.className,i=e.children;return r.createElement(a.Z,{onClick:t,startIcon:n,variant:o,color:l,className:c,children:i},i)}},1945:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(7294),a=n(8623),o=n(9525),l=n(6856),c=n(282),i=n(1120),s=function(e){var t=e.bgcolor,n=e.completed,a=e.value,o={height:"100%",width:"".concat(n,"%"),backgroundColor:t,borderRadius:"inherit",textAlign:"right",transition:"width 1s ease-in-out"};return r.createElement(r.Fragment,null,r.createElement("span",{style:{color:"#FFE61B"}},a),r.createElement("div",{style:{height:20,width:"100%",backgroundColor:"#e0e0de",borderRadius:50,margin:5}},r.createElement("div",{style:o},r.createElement("span",{style:{padding:5,color:"white",fontWeight:"bold"}}," ",n))))},u=n(2318),d=n(9956),m=function(e){var t=e.hero,n=e.closeModal,m=e.open,p=(0,i.Z)({dialog:{background:"5800FF",margin:"0",padding:"5"},dialogContent:{background:" #170070",border:"none"},paragraph:{width:"400px",fontSize:"28px",color:"white",margin:"0px",padding:"5px"},dialogTitle:{color:"#ef6c00",fontFamily:"Russo One"},dialogActions:{background:" #170070"}})(),f=t.powerstats,g=t.biography,h=f.intelligence,y=f.strength,b=f.speed,v=f.durability,E=f.power,Z=f.combat,w=parseInt(y)||0,x=parseInt(Z)||0,C=parseInt(v)||0,N=parseInt(E)||0,k=parseInt(h)||0,S=[{bgcolor:"#6a1b9a",completed:w,value:"Strength"},{bgcolor:"#00695c",completed:x,value:"Combat"},{bgcolor:"#ef6c00",completed:C,value:"Durability"},{bgcolor:"#6a1b4a",completed:N,value:"Power"},{bgcolor:"#ef6c80",completed:parseInt(b)||0,value:"Speed"},{bgcolor:"#00691c",completed:k,value:"Intelligence"}];return r.createElement(a.Z,{open:m,className:p.dialog},r.createElement(o.Z,{className:p.dialogContent},r.createElement(u.Z,{align:"center",className:p.dialogTitle,variant:"h6",gutterBottom:!0},"Estadisticas"),r.createElement(d.Z,{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},S.map((function(e,t){return r.createElement(s,{key:t,bgcolor:e.bgcolor,completed:e.completed,value:e.value})})),r.createElement("p",{className:p.paragraph,align:"center"},"Orientacion:"," ",r.createElement("span",null,"good"===g.alignment?"Heroe":"bad"===g.alignment?"Villano":"Neutral")))),r.createElement(l.Z,{className:p.dialogActions},r.createElement(c.Z,{style:{background:"#BF1363",color:"white"},onClick:n},"Cerrar")))},p=n.p+"6b773a685ac22e696530b07e71c270c1.jpg",f=n(5419),g=n(8463),h=n(9912),y=n(951),b=n(6220),v=n(8362),E=n(4001),Z=n(2054);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(){var e,t,n=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1];return{open:a,openModal:function(){return o(!0)},closeModal:function(){return o(!1)}}},C=n(5697),N=n.n(C),k=n(8428);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(e){var t,n,a=e.characters,o=(0,i.Z)({card:{margin:10,color:"white",background:"#E2C275",border:"none"},info:{margin:5,marginTop:2,fontFamily:"Russo One"}})(),l=a.name,c=a.id,s=a.image,d=(0,r.useContext)(f.t),w=d.selectedHero,C=d.heroes,N=(d.deleteHero,d.deleteHeroAlert),j=(0,r.useContext)(Z.Q),A=j.show,O=(j.setShow,x()),R=O.open,H=O.openModal,I=O.closeModal,T=(t=(0,r.useState)([]),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),M=T[0],F=T[1];return(0,r.useEffect)((function(){fetch("https://superheroapi.com/api.php/1187317678426591/".concat(c)).then((function(e){return e.json()})).then((function(e){return F(e)}))}),[]),r.createElement(r.Fragment,null,r.createElement(g.Z,{className:o.card},r.createElement(y.Z,{component:"img",image:s.url,height:"250",name:l,alt:l,onError:function(e){e.target.src=p}}),r.createElement(h.Z,null,r.createElement(u.Z,{gutterBottom:!0,variant:"h5",className:o.info},l),A?r.createElement(r.Fragment,null,r.createElement(E.Z,{startIcon:r.createElement(b.Z,null),variant:"contained",color:"primary",className:o.info,onClick:function(){return w(M,c)}},C.find((function(e){return e.id===c}))?"Agregado":"Agregar"),r.createElement(E.Z,{className:o.info,startIcon:r.createElement(v.Z,null),variant:"contained",color:"secondary",onClick:H},"Ver mAs"," ")):r.createElement(E.Z,{startIcon:r.createElement(k.Z,null),variant:"contained",color:"secondary",className:o.info,onClick:function(){return N(c)}},"Eliminar"))),R&&r.createElement(m,{hero:M,closeModal:I,open:R}))};j.propTypes={hero:N().object,characters:N().object,open:N().bool,show:N().bool,selectedHero:N().func,heroes:N().array,deleteHero:N().func,openModal:N().func,closeModal:N().func};var A=j},558:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(7294),a=n(9956),o=n(5419),l=n.p+"1d13a1ab6a2ac228cadacc566ee681e7.gif",c=n(1749),i=n(9059),s=function(){return r.createElement(c.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center"},r.createElement(i.Z,{variant:"h6",gutterBottom:!0},"Agrega algunos heroes o villanos..."),r.createElement(a.Z,null,r.createElement("img",{style:{width:"300px"},src:l,alt:"batman gif"})))},u=n(1945),d=n(2054),m=n(5697),p=n.n(m),f=n(1253),g=n(2122),h=n(6010),y=n(4670),b=r.createContext(),v="table",E=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,l=void 0===o?v:o,c=e.padding,i=void 0===c?"normal":c,s=e.size,u=void 0===s?"medium":s,d=e.stickyHeader,m=void 0!==d&&d,p=(0,f.Z)(e,["classes","className","component","padding","size","stickyHeader"]),y=r.useMemo((function(){return{padding:i,size:u,stickyHeader:m}}),[i,u,m]);return r.createElement(b.Provider,{value:y},r.createElement(l,(0,g.Z)({role:l===v?null:"table",ref:t,className:(0,h.Z)(n.root,a,m&&n.stickyHeader)},p)))})),Z=(0,y.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,g.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(E),w=r.createContext(),x={variant:"body"},C="tbody",N=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,l=void 0===o?C:o,c=(0,f.Z)(e,["classes","className","component"]);return r.createElement(w.Provider,{value:x},r.createElement(l,(0,g.Z)({className:(0,h.Z)(n.root,a),ref:t,role:l===C?null:"rowgroup"},c)))})),k=(0,y.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(N),S=n(3871),j=n(9693),A=r.forwardRef((function(e,t){var n,a,o=e.align,l=void 0===o?"inherit":o,c=e.classes,i=e.className,s=e.component,u=e.padding,d=e.scope,m=e.size,p=e.sortDirection,y=e.variant,v=(0,f.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=r.useContext(b),Z=r.useContext(w),x=Z&&"head"===Z.variant;s?(a=s,n=x?"columnheader":"cell"):a=x?"th":"td";var C=d;!C&&x&&(C="col");var N=u||(E&&E.padding?E.padding:"normal"),k=m||(E&&E.size?E.size:"medium"),j=y||Z&&Z.variant,A=null;return p&&(A="asc"===p?"ascending":"descending"),r.createElement(a,(0,g.Z)({ref:t,className:(0,h.Z)(c.root,c[j],i,"inherit"!==l&&c["align".concat((0,S.Z)(l))],"normal"!==N&&c["padding".concat((0,S.Z)(N))],"medium"!==k&&c["size".concat((0,S.Z)(k))],"head"===j&&E&&E.stickyHeader&&c.stickyHeader),"aria-sort":A,role:n,scope:C},v))})),O=(0,y.Z)((function(e){return{root:(0,g.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,j.$n)((0,j.Fq)(e.palette.divider,1),.88):(0,j._j)((0,j.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(A),R=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,l=void 0===o?"div":o,c=(0,f.Z)(e,["classes","className","component"]);return r.createElement(l,(0,g.Z)({ref:t,className:(0,h.Z)(n.root,a)},c))})),H=(0,y.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(R),I={variant:"head"},T="thead",M=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,l=void 0===o?T:o,c=(0,f.Z)(e,["classes","className","component"]);return r.createElement(w.Provider,{value:I},r.createElement(l,(0,g.Z)({className:(0,h.Z)(n.root,a),ref:t,role:l===T?null:"rowgroup"},c)))})),F=(0,y.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(M),P=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,l=void 0===o?"tr":o,c=e.hover,i=void 0!==c&&c,s=e.selected,u=void 0!==s&&s,d=(0,f.Z)(e,["classes","className","component","hover","selected"]),m=r.useContext(w);return r.createElement(l,(0,g.Z)({ref:t,className:(0,h.Z)(n.root,a,m&&{head:n.head,footer:n.footer}[m.variant],i&&n.hover,u&&n.selected),role:"tr"===l?null:"row"},d))})),z=(0,y.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,j.Fq)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(P),_=n(9895),B=n(1120);function D(e,t,n,r,a,o,l){return{name:e,speed:t,durability:n,intelligence:r,power:a,combat:o,strength:l}}var $=function(e){var t=e.totalStatsHero,n=(0,B.Z)({head:{background:"rgb(54, 57, 63)"},tablecell:{color:"white"}})(),a=t.speed,o=t.strength,l=[D("Total Stats",a,t.durability,t.intelligence,t.power,t.combat,o)];return r.createElement(H,{component:_.Z},r.createElement(Z,{sx:{minWidth:700},"aria-label":"customized table"},r.createElement(F,null,r.createElement(z,{className:n.head},r.createElement(O,{className:n.tablecell},"Stats"),r.createElement(O,{className:n.tablecell,align:"center"},"Speed"),r.createElement(O,{className:n.tablecell,align:"center"},"Durability"),r.createElement(O,{className:n.tablecell,align:"center"},"Intelligence"),r.createElement(O,{className:n.tablecell,align:"center"},"Power"),r.createElement(O,{className:n.tablecell,align:"center"},"Combat"),r.createElement(O,{className:n.tablecell,align:"center"},"Strength"))),r.createElement(k,null,l.map((function(e){return r.createElement(z,{key:e.name},r.createElement(O,{component:"th",scope:"row"},e.name),r.createElement(O,{align:"center"},e.speed),r.createElement(O,{align:"center"},e.durability),r.createElement(O,{align:"center"},e.intelligence),r.createElement(O,{align:"center"},e.power),r.createElement(O,{align:"center"},e.combat),r.createElement(O,{align:"center"},e.strength))})))))},q=n(4241),W=function(){var e=(0,r.useContext)(q.q).totalStatsHero;return r.createElement(r.Fragment,null,r.createElement(i.Z,{align:"center"},"Resumen de Stats"),r.createElement(c.Z,{container:!0,spacing:3,direction:"row",justifyContent:"center"},r.createElement(c.Z,{item:!0,xs:12,md:6},r.createElement($,{totalStatsHero:e}))))},L=n(3248),U=function(){var e=(0,r.useContext)(o.t),t=e.heroes,n=e.deleteHero,l=(0,r.useContext)(d.Q).setShow;return(0,r.useEffect)((function(){l(!1)}),[]),r.createElement(r.Fragment,null,t.length>0&&r.createElement(i.Z,{gutterBottom:!0,align:"center",variant:"h3"},"Mi equipo"),r.createElement(a.Z,{p:3},r.createElement(L.Z,null,r.createElement("div",null,t.length>0?t.map((function(e){var t=e.id;return r.createElement(u.Z,{key:t,characters:e,deleteHero:n})})):r.createElement(s,null))),r.createElement(a.Z,null,t.length>0&&r.createElement(W,null))))};U.propTypes={heroes:p().arrayOf(p().object),deleteHero:p().func};var Q=U},9059:function(e,t,n){"use strict";var r=n(7294),a=n(2318),o=n(1120);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}t.Z=function(e){var t=(0,o.Z)({title:{marginTop:25,fontFamily:"Chewy"}})(),n=e.children;return r.createElement(a.Z,l({},e,{className:t.title}),n)}}}]);
//# sourceMappingURL=558.bundle.js.map