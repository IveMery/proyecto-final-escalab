(self.webpackChunkproyecto_final=self.webpackChunkproyecto_final||[]).push([[932],{7281:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(7294),a=n(8623),o=n(9525),l=n(6856),c=n(282),i=n(1120),u=n(3248),s=function(e){var t=e.bgcolor,n=e.completed,a=e.value,o={height:"100%",width:"".concat(n,"%"),backgroundColor:t,borderRadius:"inherit",textAlign:"right",transition:"width 1s ease-in-out"};return r.createElement(u.Z,null,r.createElement(r.Fragment,null,r.createElement("span",{style:{color:"#FFE61B"}},a),r.createElement("div",{style:{height:20,width:"100%",backgroundColor:"#e0e0de",borderRadius:50,margin:5}},r.createElement("div",{style:o},r.createElement("span",{style:{padding:5,color:"white",fontWeight:"bold"}}," ",n)))))},m=n(2318),d=n(9956),p=function(e){var t=e.hero,n=e.closeModal,p=e.open,f=(0,i.Z)({dialog:{background:"5800FF",margin:"0",padding:"5"},dialogContent:{background:" #170070",border:"none"},paragraph:{width:"400px",fontSize:"28px",color:"white",margin:"0px",padding:"5px","@media (max-width:500px)":{width:"250px"},"@media (max-width:350px)":{width:"150px"}},dialogTitle:{color:"#ef6c00",fontFamily:"Russo One"},dialogActions:{background:" #170070"},containerStats:{"@media (max-width:500px)":{fontSize:15}}})(),g=t.powerstats,h=t.biography,y=g.intelligence,b=g.strength,E=g.speed,v=g.durability,Z=g.power,w=g.combat,x=parseInt(b)||0,C=parseInt(w)||0,S=parseInt(v)||0,A=parseInt(Z)||0,j=parseInt(y)||0,I=[{bgcolor:"#6a1b9a",completed:x,value:"Strength"},{bgcolor:"#00695c",completed:C,value:"Combat"},{bgcolor:"#ef6c00",completed:S,value:"Durability"},{bgcolor:"#6a1b4a",completed:A,value:"Power"},{bgcolor:"#ef6c80",completed:parseInt(E)||0,value:"Speed"},{bgcolor:"#00691c",completed:j,value:"Intelligence"}];return r.createElement(u.Z,null,r.createElement(a.Z,{open:p,className:f.dialog},r.createElement(o.Z,{className:f.dialogContent},r.createElement(m.Z,{align:"center",className:f.dialogTitle,variant:"h6",gutterBottom:!0},"Estadísticas"),r.createElement(d.Z,{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",className:f.containerStats},I.map((function(e,t){return r.createElement(s,{key:t,bgcolor:e.bgcolor,completed:e.completed,value:e.value})})),r.createElement("p",{className:f.paragraph,align:"center"},"Orientación:"," ",r.createElement("span",null,"good"===h.alignment?"Héroe":"bad"===h.alignment?"Villano":"Neutral")))),r.createElement(l.Z,{className:f.dialogActions},r.createElement(c.Z,{style:{background:"#BF1363",color:"white"},onClick:n},"Cerrar"))))},f=n.p+"6b773a685ac22e696530b07e71c270c1.jpg",g=n(5419),h=n(8463),y=n(9912),b=n(951),E=n(6220),v=n(8362),Z=n(4001),w=n(2054);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(){var e,t,n=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1];return{open:a,openModal:function(){return o(!0)},closeModal:function(){return o(!1)}}},S=n(5697),A=n.n(S),j=n(8428);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var t,n,a=(t=(0,r.useState)([]),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return(0,r.useEffect)((function(){try{fetch(e).then((function(e){return e.json()})).then((function(e){l(e)}))}catch(e){console.error(e)}}),[e]),{hero:o}},N=n(8309),F=function(e){var t=e.characters,n=(0,i.Z)({card:{margin:10,color:"white",background:"#E83A19",border:"none"},media:{height:320,width:320,overflow:"hidden",transition:"all 0.2s ease-in","&:hover":{transform:" scale(1.1) "}},info:{margin:5,marginTop:2,fontFamily:"Russo One"}})(),a=t.name,o=t.id,l=t.image,c=(0,r.useContext)(g.t),s=c.selectedHero,d=c.heroes,x=c.deleteHeroAlert,S=(0,r.useContext)(w.Q).show,A=C(),I=A.open,F=A.openModal,M=A.closeModal,O=k("".concat(N.Q+o)).hero;return r.createElement(u.Z,null,r.createElement(r.Fragment,null,r.createElement(h.Z,{className:n.card},r.createElement(b.Z,{component:"img",image:l.url,height:"250",name:a,alt:a,className:n.media,onError:function(e){e.target.src=f}}),r.createElement(y.Z,null,r.createElement(m.Z,{gutterBottom:!0,variant:"h5",className:n.info},a),S?r.createElement(r.Fragment,null,r.createElement(Z.Z,{startIcon:r.createElement(E.Z,null),variant:"contained",color:"primary",className:n.info,onClick:function(){return s(O,o)}},d.find((function(e){return e.id===o}))?"Agregado":"Agregar"),r.createElement(Z.Z,{className:n.info,startIcon:r.createElement(v.Z,null),variant:"contained",color:"secondary",onClick:F},"Ver más"," ")):r.createElement(Z.Z,{startIcon:r.createElement(j.Z,null),variant:"contained",color:"secondary",className:n.info,onClick:function(){return x(o)}},"Eliminar"))),I&&r.createElement(p,{hero:O,closeModal:M,open:I})))};F.propTypes={hero:A().object,characters:A().object,open:A().bool,show:A().bool,selectedHero:A().func,heroes:A().array,deleteHeroAlert:A().func,openModal:A().func,closeModal:A().func};var M=F},9059:function(e,t,n){"use strict";var r=n(7294),a=n(2318),o=n(1120),l=n(3248);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}t.Z=function(e){var t=(0,o.Z)({title:{marginTop:25,fontFamily:"Chewy"}})(),n=e.children;return r.createElement(l.Z,null,r.createElement(a.Z,c({},e,{className:t.title}),n))}},6932:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(5419),o=n(7281),l=n(5762),c=n(1749),i=n(5697),u=n.n(i),s=function(){return r.createElement("div",null,"Sorry, an error has ocurred.")},m=function(e){var t=e.data,n=(0,r.useContext)(a.t),i=n.loading,u=n.error;return r.createElement(c.Z,{container:!0,direction:"row",justifyContent:"center",style:{paddingBottom:"45px"}},i?r.createElement(l.Z,null):t?r.createElement(r.Fragment,null,null==t?void 0:t.map((function(e){return r.createElement(o.Z,{key:e.id,characters:e})}))):r.createElement("h3",null,"No encontramos heroes con ese nombre"),u&&r.createElement(s,null))};m.propTypes={loading:u().bool,data:u().object};var d=m,p=n(8995),f=n(6664),g=n(7397),h=n(2054),y=n(9895),b=n(3248),E=n(9059),v=function(){var e=(0,r.useContext)(a.t),t=e.handleChange,n=e.handleSubmit,o=e.query,l=e.data,i=e.value,u=(0,r.useContext)(h.Q).setShow;return(0,r.useEffect)((function(){u(!0)}),[]),r.createElement(b.Z,null,r.createElement(c.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center"},r.createElement(E.Z,null,"Buscar Personajes"),r.createElement(y.Z,{style:{marginTop:"20px",marginBottom:"20px"}},r.createElement("form",{onSubmit:n},r.createElement(f.Z,{type:"text",placeholder:"ej... Batman",value:i,onChange:t,InputProps:{startAdornment:r.createElement(g.Z,{position:"start"},r.createElement(p.Z,null))}}))),l&&r.createElement(E.Z,null,"Lista de Personajes"),o&&r.createElement(d,{data:l})))}}}]);
//# sourceMappingURL=932.bundle.js.map