(this.webpackJsonppyro_figma=this.webpackJsonppyro_figma||[]).push([[0],Array(32).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(15),r=n.n(i),o=n(6),c=n(10);n(71),n(18);c.a.initializeApp({apiKey:"AIzaSyDLur9qV5uHuCunlqNH82fyZvr1V54bUPY",authDomain:"pyro-intuit.firebaseapp.com",databaseURL:"https://pyro-intuit.firebaseio.com",projectId:"pyro-intuit",storageBucket:"pyro-intuit.appspot.com",messagingSenderId:"657829873421",appId:"1:657829873421:web:cbaee79c120744557d5244"});c.a.auth();var s=c.a.firestore(),l=c.a,u=Object(a.createContext)(),d=Object(a.createContext)(),b=n(3),h={figmaFile:null,authData:null,loading:!0,isMobile:!0,figmaData:null,currentFrameIDX:0,currentFrameID:null,currentPageIDX:0,currentPageID:null,protoWidth:375,protoHeight:812,tabletWidth:1024,tabletHeight:728,minWidth:324,minHeight:394,smoov:!1,onBoarding:0,fileImages:null,nodeTree:null,selection:null,vectors:null,me:null,breakPoints:null,currentBreakpoint:0,direction:!1,email:null,rotations:null,pluginState:null,pluginStateChanges:!1,hoverEnter:null,firstFrame:null,updateVis:!1,noPyroProto:!1,userIsAllowed:!1,pristine:!0,userData:null,requestSent:!1,token:null},p=function(e,t){switch(t.type){case"HIDE_REQUEST":var n=Object(b.a)({},e);return n.requestSent=!1,n;case"SHOW_REQUEST":var a=Object(b.a)({},e);return a.requestSent=!0,a;case"AUTHORISE_USER":var i=Object(b.a)({},e);return i.userIsAllowed=t.payload,i;case"SET_USER":var r=Object(b.a)({},e);return r.userData=t.payload,r;case"NOT_PRISTINE":var o=Object(b.a)({},e);return o.pristine=!1,o;case"NO_PROTO":var c=Object(b.a)({},e);return c.noPyroProto=!0,c;case"SET_FILEKEY":var s=Object(b.a)({},e);return s.figmaFile=t.payload,s;case"UPDATE_FIELD_VALUE":var l=Object(b.a)({},e);return l.pluginState.pluginVariables[t.payload.variable]=t.payload.val,l.updateVis=!l.updateVis,l;case"UPDATE_PLUGIN_STATE":var u=Object(b.a)({},e),d=String(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id]),h=t.payload.pluginAction.targetVariable.targetValue;-1!==t.payload.eventType.indexOf("MouseEnter")&&(u.hoverEnter=d);u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id];return"becomes"===t.payload.pluginAction.actionType&&d!==h&&(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id]=t.payload.pluginAction.targetVariable.targetValue),"toggles"===t.payload.pluginAction.actionType&&("true"!==String(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id])&&"false"!==String(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id])||(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id]=!u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id])),-1!==t.payload.eventType.indexOf("MouseLeave")&&(u.pluginState.pluginVariables[t.payload.pluginAction.targetVariable.id]=u.hoverEnter,u.hoverEnter=null),u.updateVis=!u.updateVis,u;case"ADD_CONDITION":var p=Object(b.a)({},e);if(null===p.pluginState){var j={};j.pluginConditions[t.payload.nodeID]=t.payload.conditions,p.pluginState=j}else p.pluginState.pluginConditions[t.payload.nodeID]=t.payload.conditions;return p.pluginStateChanges=!p.pluginStateChanges,p.loading=!1,p;case"SET_PLUGIN_STATE":var O=Object(b.a)({},e);return O.pluginStateChanges=!O.pluginStateChanges,O.pluginState=t.payload,O;case"SET_DIRECTION":var g=Object(b.a)({},e);return g.direction=t.payload,g;case"SET_CURRENT_BPOINT":var f=Object(b.a)({},e);return f.currentBreakpoint=t.payload,f;case"SET_BREAKPOINTS":var y=Object(b.a)({},e);return y.breakPoints=t.payload,y;case"SET_SELECTION":var x=Object(b.a)({},e);return x.currentPageID=t.payload.currentPage.id,x.selection=t.payload.selection,x;case"SET_ROTATES":var E=Object(b.a)({},e);return E.rotations=t.payload,E;case"SET_VECTORS":var m=Object(b.a)({},e);return m.vectors=t.payload,m;case"SET_EMAIL":var T=Object(b.a)({},e);return T.email=t.payload,T;case"SET_ONBARDING":var v=Object(b.a)({},e);return v.onBoarding=t.payload,v;case"SET_ATTRIBUTE":var N=Object(b.a)({},e);return N.nodeTree.hasOwnProperty(t.payload.id)&&(N.nodeTree[t.payload.id][t.payload.attribute]=t.payload.value),N;case"ADD_CHILD_ELEMENT":var S=Object(b.a)({},e),w={};return null===S.nodeTree?(w[t.payload.id]=t.payload,S.nodeTree=w):S.nodeTree[t.payload.id]=t.payload,S;case"GET_ME":var I=Object(b.a)({},e);return I.me=t.payload,I;case"GET_IMAGES":var C=Object(b.a)({},e);return C.fileImages=t.payload,C;case"REMOVE_SMOOV":var R=Object(b.a)({},e);return R.smoov=!1,R;case"SET_TABLET":var A=Object(b.a)({},e);return A.smoov=!0,A.protoWidth=A.tabletWidth,A.protoHeight=A.tabletHeight,A;case"SET_DESKTOP":var D=Object(b.a)({},e);return D.smoov=!0,D.protoWidth=window.innerWidth,D.protoHeight=window.innerHeight-34,D;case"SET_MOBILE":var k=Object(b.a)({},e);return k.smoov=!0,k.protoWidth=375,k.protoHeight=812,k;case"SET_WIDTH":var _=Object(b.a)({},e);return _.protoWidth=t.payload,_;case"SET_HEIGHT":var P=Object(b.a)({},e);return P.protoHeight=t.payload,P;case"SET_CURRENT_FRAME_ID":var M=Object(b.a)({},e);return M.currentFrameID=t.payload,M;case"SET_CURRENT_FRAME_IDX":var L=Object(b.a)({},e);return void 0!==t.payload&&(L.currentFrameIDX=t.payload),L;case"RESET_CURRENTPAGE":var B=Object(b.a)({},e);return B.nodeTree=null,B.currentPageIDX=t.payload,B;case"SET_CURRENT_PAGE_IDX":var H=Object(b.a)({},e);return H.currentPageIDX=t.payload,H;case"RMV_LOADING":var F=Object(b.a)({},e);return F.loading=!1,F;case"LOADING":var U=Object(b.a)({},e);return U.loading=!0,U;case"TOKEN":var V=Object(b.a)({},e);return V.token=t.payload,V;case"UPDATE_FILE_DATA_FROM_FIGMA":var G=Object(b.a)({},e);return G.authData=t.payload.authData,G.figmaData=t.payload.pageData,G.nodeTree=null,G;default:throw new Error("Unexpected action")}},j=n.p+"static/media/pyro_white.1a68b823.svg",O=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){return l.auth().onAuthStateChanged((function(e){return i(e)}))}),[]),n},g=(n(32),n(1)),f=function(){return Object(g.jsx)("main",{className:"Loading",children:"Loading..."})},y=function(){var e=c.a.auth();return Object(g.jsx)("main",{className:"SignIn",children:Object(g.jsx)("button",{className:"btn full",onClick:function(){var t=new c.a.auth.GoogleAuthProvider;e.signInWithPopup(t)},children:"Sign in"})})},x=(n(34),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return i(!0)}),500);return function(){return clearTimeout(e)}}),[]),n?Object(g.jsx)("main",{className:"Login",children:Object(g.jsxs)("section",{children:[Object(g.jsx)("h1",{children:"Welcome \ud83d\ude0a"}),Object(g.jsxs)("h2",{children:["Please sign in ",Object(g.jsx)("br",{}),"so we can let you in!"]}),Object(g.jsxs)("p",{children:["Let me check if you  have access. ",Object(g.jsx)("br",{}),"You only have to do this once."]}),Object(g.jsx)(y,{})]})}):Object(g.jsx)(f,{})}),E=function(e){var t=e.css,n=c.a.auth();return Object(g.jsx)("main",{className:"SignOut",children:Object(g.jsx)("button",{className:"btn ".concat(t),onClick:function(){return n.signOut()},children:"Sign out"})})},m=(n(35),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useContext)(d),c=Object(a.useContext)(u).userData;if(Object(a.useEffect)((function(){var e=setTimeout((function(){return i(!0)}),500);return function(){return clearTimeout(e)}}),[]),!n)return Object(g.jsx)(f,{});if(!c)return null;var s=c.displayName,l=c.email;return Object(g.jsx)("main",{className:"UserNotAllowed",children:Object(g.jsxs)("section",{children:[Object(g.jsxs)("h1",{children:["Sorry,",Object(g.jsx)("br",{}),"you're not on ",Object(g.jsx)("br",{}),"the list \ud83d\ude1e"]}),Object(g.jsxs)("p",{children:["You are logged in as ",Object(g.jsx)("strong",{children:s})]}),Object(g.jsxs)("p",{children:["With the email ",Object(g.jsx)("strong",{children:l})]}),Object(g.jsxs)("div",{className:"btnCtn",children:[Object(g.jsx)(E,{css:"ghost"}),Object(g.jsx)("button",{onClick:function(){console.log("sendRequest"),r({type:"SHOW_REQUEST"})},className:"btn full",children:"Request access"})]})]})})}),T=(n(36),function(){var e=Object(a.useContext)(u).userData,t=e.displayName,n=(e.email,e.photoURL);return Object(g.jsxs)("div",{className:"User",children:[n&&Object(g.jsx)("img",{src:n,width:"30",alt:t}),Object(g.jsx)("span",{children:t})]})}),v=(n(37),function(e){var t=e.msg,n=Object(a.useContext)(d);return Object(a.useEffect)((function(){setTimeout((function(){return n({type:"HIDE_REQUEST"})}),3e3)}),[]),Object(g.jsx)("main",{className:"Pile",children:Object(g.jsx)("article",{children:t})})}),N=n(12),S=function(e){return 0!==e&&1!==e?255*e:1===e?255:e},w=function(e){var t=e.r,n=e.g,a=e.b,i=e.a,r=i?","+i+")":")";return"rgb("+S(t)+","+S(n)+","+S(a)+r},I=(n(38),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.protoWidth,i=t.protoHeight,r=t.minWidth,o=t.minHeight,c=t.smoov,s=function(t,n){isNaN(Number(t.target.value))||e({type:n?"SET_WIDTH":"SET_HEIGHT",payload:Number(t.target.value)})},l=function(t,n){n?(Number(t.target.value)>window.innerWidth&&e({type:"SET_WIDTH",payload:window.innerWidth}),Number(t.target.value)<r&&e({type:"SET_WIDTH",payload:r})):(Number(t.target.value)>window.innerHeight&&e({type:"SET_HEIGHT",payload:window.innerHeight-35}),Number(t.target.value)<o&&e({type:n?"SET_WIDTH":"SET_HEIGHT",payload:o}))};return Object(g.jsxs)("div",{className:"InputDimensions",children:[Object(g.jsx)("span",{children:"w"}),Object(g.jsx)("input",{disabled:c,onFocus:function(e){return e.target.select()},onChange:function(e){return s(e,!0)},onBlur:function(e){return l(e,!0)},value:Math.round(n),type:"text"}),Object(g.jsx)("span",{children:"h"}),Object(g.jsx)("input",{disabled:c,onFocus:function(e){return e.target.select()},onChange:function(e){return s(e,!1)},onBlur:function(e){return l(e,!1)},value:Math.round(i),type:"text"})]})}),C=n.p+"static/media/mobile.bcb52078.svg",R=n.p+"static/media/tablet.cfcfcd73.svg",A=n.p+"static/media/desktop.9125ff19.svg",D=(n(39),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.protoWidth,i=t.protoHeight,r=t.smoov,o=t.tabletWidth,c=t.tabletHeight,s=function(t){var n="SET_MOBILE";switch(t){case"mobile":n="SET_MOBILE";break;case"desktop":n="SET_DESKTOP";break;case"tablet":n="SET_TABLET";break;default:n="SET_MOBILE"}e({type:n}),setTimeout((function(){return e({type:"REMOVE_SMOOV"})}),1e3)};return Object(g.jsxs)("div",{className:"Dimensions",children:[Object(g.jsx)("button",{disabled:r,onClick:function(){return s("mobile")},className:n<=450?"active":null,children:Object(g.jsx)("img",{src:C,alt:"mobile"})}),Object(g.jsx)("button",{disabled:r,onClick:function(){return s("desktop")},className:n>1024?"active":null,children:Object(g.jsx)("img",{src:A,alt:"desktop"})}),Object(g.jsx)("button",{disabled:r,onClick:function(){return s("tablet")},className:n===o&&i===c?"active":null,children:Object(g.jsx)("img",{src:R,alt:"mobile"})})]})}),k=(n(40),function(){Object(a.useContext)(d);var e=Object(a.useContext)(u),t=e.userData,n=(e.loading,e.figmaData),i=(e.token,e.currentPageIDX),r=(e.figmaFile,e.currentFrameID),c=Object(a.useState)(!1),s=Object(o.a)(c,2);s[0],s[1];return Object(g.jsxs)("nav",{className:"ProtoActions",children:[Object(g.jsx)("section",{children:Object(g.jsx)("img",{src:j,height:"27",alt:"pyro"})}),n&&r?Object(g.jsx)("section",{className:"fileInfo",children:Object(g.jsxs)("h1",{children:[n.name," - ",n.children[i].name]})}):Object(g.jsx)("h1",{className:"faded",children:"Proto name - Page name"}),Object(g.jsxs)("section",{className:"actions",children:[Object(g.jsx)("button",{className:"btn full",children:Object(g.jsx)("span",{children:"Share"})}),Object(g.jsx)(D,{}),Object(g.jsx)(I,{}),t&&Object(g.jsx)(T,{}),Object(g.jsx)(E,{css:"full"})]})]})}),_=n(25),P=(n(49),function(){return Object(g.jsx)("section",{className:"Empty",children:Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{children:"Nothing to see here"}),Object(g.jsx)("span",{children:"\ud83d\ude32"})]})})}),M=function(e,t){var n="true"===String(t.condition2)||"false"===String(t.condition2)?String(t.condition2):String(e.pluginVariables[t.condition2]).toLowerCase(),a=Number(e.pluginVariables[t.condition1]),i="mt"===n?0:Number(n),r=String(e.pluginVariables[t.condition1]).toLowerCase(),o="mt"===n?"":n;switch(t.operator){case"isEqualTo":return r===n?t.show:!t.show;case"different":return r!==o?t.show:!t.show;case"contains":return-1!==e.pluginVariables[t.condition1].toLowerCase().indexOf(o)?t.show:!t.show;case"isGreaterThan":return!isNaN(a)&&!isNaN(i)&&(a>i?t.show:!t.show);case"isInferiorTo":return!isNaN(a)&&!isNaN(i)&&(a<i?t.show:!t.show);case"isGreaterThanOrEqualTo":return!isNaN(a)&&!isNaN(i)&&(a>=i?t.show:!t.show);case"isInferiorOrEqualTo":return!isNaN(a)&&!isNaN(i)&&(a<=i?t.show:!t.show);default:return"nothing"}},L=(n(50),function(e){var t=e.bg,n=e.gradType,i=Object(a.useContext)(u),r=i.protoWidth,o=i.protoHeight,c=i.figmaData,s=Object(a.useRef)(null),l=t.opacity,d=t.blendMode,b=t.gradientStops,h=t.gradientTransform;return Object(a.useEffect)((function(){var e=h.start,t=h.end,a=s.current.getContext("2d");a.clearRect(0,0,Math.round(r),o);var i,c=e.x*Math.round(r),l=e.y*Math.round(o),u=t.x*Math.round(r),d=t.y*Math.round(o),p=Math.sqrt((c-l)*(c-l)+(u-d)*(u-d));switch(n){case"linear":i=a.createLinearGradient(c,l,u,d);break;case"radial":i=a.createRadialGradient(c,l,0,c,l,p);break;default:i=a.createLinearGradient(c,l,u,d)}b.forEach((function(e,t){var n=e.position,a=e.color;i.addColorStop(n,w(a))})),a.fillStyle=i,a.fillRect(0,0,Math.round(r),Math.round(o))}),[c,o,r]),Object(g.jsx)("div",{style:{opacity:l,mixBlendMode:d.toLowerCase().split("_").join("-")},className:"Gradients",children:Object(g.jsx)("canvas",{width:r,height:o,ref:s})})}),B=(n(51),function(e){var t=e.bg;return Object(g.jsx)("div",{className:"SolidBG",style:{background:w(t.color),opacity:t.opacity,mixBlendMode:t.blendMode.toLowerCase().split("_").join("-")}})}),H=(n(52),function(e){var t=e.bg,n=e.constraints,i=Object(a.useContext)(u),r=i.fileImages,o=i.protoWidth,c=i.protoHeight,s=i.smoov,l=function(){return{opacity:t.opacity,mixBlendMode:t.blendMode.toLowerCase().split("_").join("-")}};return r?Object(g.jsx)("div",{style:"TILE"===t.scaleMode?r?Object(b.a)(Object(b.a)({},l()),{},{backgroundImage:"url("+r[t.imageRef]+")"}):null:l(),className:"ImageBG ".concat(t.scaleMode.toLowerCase()," ").concat("CENTER"===n.horizontal?"maxWidth":null," ").concat(o<c?"portrait":"landscape"," ").concat(s?"smoov":""),children:"TILE"!==t.scaleMode&&Object(g.jsx)("img",{src:r[t.imageRef],style:"FILL"===t.scaleMode?o<c?{height:c}:{height:o}:null,alt:"protoBg"})}):null}),F=(n(53),function(e){var t=e.element,n=function(e,n){var a=t.id+n;if(!e.hasOwnProperty("visible")||e.visible)switch(e.type){case"GRADIENT_LINEAR":return Object(g.jsx)(L,{gradType:"linear",bg:e},a);case"GRADIENT_RADIAL":case"GRADIENT_DIAMOND":case"GRADIENT_ANGULAR":return Object(g.jsx)(L,{gradType:"radial",bg:e},a);case"IMAGE":return Object(g.jsx)(H,{constraints:t.constraints,bg:e},a);default:return Object(g.jsx)(B,{bg:e},a)}return null};return t.hasOwnProperty("background")||t.hasOwnProperty("fills")?Object(g.jsxs)("section",{className:"Background",children:[t.hasOwnProperty("background")&&t.background&&t.background.length>0&&t.background.map((function(e,t){return n(e,t)})),t.hasOwnProperty("fills")&&t.fills.length>0&&t.fills.map((function(e,t){return n(e,t)}))]}):null}),U=(n(54),function(e){var t=e.str,n=e.gradType,i=e.strokeWeight,r=Object(a.useContext)(u),o=r.protoWidth,c=r.protoHeight,s=r.figmaData,l=Object(a.useRef)(null),d=t.opacity,b=t.blendMode,h=t.gradientHandlePositions,p=t.gradientStops;return Object(a.useEffect)((function(){var e=h[0],t=h[1],a=l.current.getContext("2d");a.clearRect(0,0,Math.round(o),c);var r,s=e.x*Math.round(o),u=e.y*Math.round(c),d=t.x*Math.round(o),b=t.y*Math.round(c),j=Math.sqrt((s-u)*(s-u)+(d-b)*(d-b));switch(n){case"linear":r=a.createLinearGradient(s,u,d,b);break;case"radial":r=a.createRadialGradient(s,u,0,s,u,j);break;default:r=a.createLinearGradient(s,u,d,b)}p.forEach((function(e,t){var n=e.position,a=e.color;r.addColorStop(n,w(a))})),a.strokeStyle=r,a.lineWidth=2*i,a.strokeRect(0,0,Math.round(o),Math.round(c))}),[s,c,o]),Object(g.jsx)("div",{style:{opacity:d,mixBlendMode:b.toLowerCase().split("_").join("-")},className:"StrokeGradients",children:Object(g.jsx)("canvas",{width:o,height:c,ref:l})})}),V=(n(55),function(e){var t=e.element,n=e.str,a=e.strokeWeight;return Object(g.jsx)("div",{className:"StrokeSolidBG",style:{borderRadius:t.hasOwnProperty("rectangleCornerRadius")?t.rectangleCornerRadius.reduce((function(e,t,n){return e=e+t+"px "}),""):t.hasOwnProperty("cornerRadius")?t.cornerRadius+"px":null,border:a+"px solid "+w(n.color),opacity:n.opacity,mixBlendMode:n.blendMode.toLowerCase().split("_").join("-")}})}),G=(n(56),function(e){var t=e.element;if(!t.hasOwnProperty("strokes"))return null;return 0===t.strokes.length?null:Object(g.jsx)("section",{className:"Stroke",children:t.hasOwnProperty("strokes")&&t.strokes.map((function(e,n){return function(e,n){var a=t.id+n;if(!e.hasOwnProperty("visible")||e.visible)switch(e.type){case"GRADIENT_LINEAR":return Object(g.jsx)(U,{strokeWeight:t.strokeWeight,gradType:"linear",str:e},a);case"GRADIENT_RADIAL":case"GRADIENT_DIAMOND":case"GRADIENT_ANGULAR":return Object(g.jsx)(U,{strokeWeight:t.strokeWeight,gradType:"radial",str:e},a);default:return Object(g.jsx)(V,{strokeWeight:t.strokeWeight,element:t,str:e},a)}return null}(e,n)}))})}),W=(n(57),function(e){var t=e.handleClick,n=e.node,i=e.style,r=Object(a.useContext)(u).vectors,c=n.transitionNodeID,s=(n.name,n.id),l=n.strokeWeight,d=r[s],h=d.vectorPaths,p=d.width,j=d.height,O=Object(a.useState)(Object(b.a)({},i)),f=Object(o.a)(O,2),y=f[0],x=f[1],E=Object(a.useState)(null),m=Object(o.a)(E,2),T=m[0],v=m[1],N=Object(a.useState)(null),S=Object(o.a)(N,2),I=S[0],C=S[1];return Object(a.useEffect)((function(){var e=Object(b.a)({},y);e.width=p,e.height=j,e.WebkitClipPath="url(#"+s+")",x(e);var t={};t.width=p,t.height=j,v(t);var a={};a.stroke=p,a.strokeWidth=2*l,n.strokes.length&&(a.stroke=w(n.strokes[0].color)),C(a)}),[]),Object(g.jsxs)("article",{onClick:t,className:"Vector ".concat(c?"clickable":null),style:y,children:[Object(g.jsx)(F,{element:n}),Object(g.jsx)("svg",{style:T,xmlns:"http://www.w3.org/2000/svg",width:p,height:j,viewBox:"0 0 ".concat(p," ").concat(j),children:Object(g.jsx)("path",{strokeLinecap:"round",style:I,d:h})}),Object(g.jsx)("svg",{style:T,xmlns:"http://www.w3.org/2000/svg",width:p,height:j,viewBox:"0 0 ".concat(p," ").concat(j),children:Object(g.jsx)("defs",{children:Object(g.jsx)("clipPath",{id:s,children:Object(g.jsx)("path",{d:h})})})})]})}),X=(n(58),function(e){var t=e.handleClick,n=e.node,i=e.style,r=n.id,c=n.transitionNodeID,s=(n.name,n.characters),l=n.textAlignHorizontal,d=n.textAlignVertical,h=n.textAutoResize,p=n.textCase,j=n.textDecoration,O=n.fontName,f=n.fontSize,y=n.layoutAlign,x=n.layoutGrow,E=n.letterSpacing,m=n.lineHeight,T=n.listSpacing,v=Object(a.useState)(null),N=Object(o.a)(v,2),S=N[0],I=N[1],C={textAlign:l,textAlignVertical:d,textAutoResize:h,textTransform:p,textDecoration:j,fontStyle:O.style,fontFamily:O.family,fontSize:f,layoutAlign:y,layoutGrow:x,letterSpacing:E,lineHeight:m,listSpacing:T},R=Object(a.useContext)(u).pluginState;if(Object(a.useEffect)((function(){switch(C.textTransform){case"UPPER":C.textTransform="uppercase";break;case"LOWER":C.textTransform="lowercase";break;case"TITLE":C.textTransform="capitalize";break;default:C.textTransform="normal"}if(delete C.textCase,delete C.lineHeightPercent,delete C.lineHeightPx,delete C.textAutoResize,"TOP"!==C.textAlignVertical||"LEFT"!==C.textAlignHorizontal){var e,t;switch(C.display="flex",C.textAlignHorizontal){case"CENTER":e="center",C.margin="auto";break;case"RIGHT":e="flex-end"}switch(C.textAlignVertical){case"CENTER":t="center",C.margin="auto";break;case"BOTTOM":t="flex-end"}C.justifyContent=e,C.alignItems=t}C.color=w(n.fills[0].color),I(C)}),[]),!R)return null;var A=R.pluginTexts,D=R.pluginVariables;R.pluginConditions;return Object(g.jsx)("p",{onClick:t,style:function(){var e=Object(b.a)(Object(b.a)({},i),S);if(R.pluginConditions.hasOwnProperty(r)){var t=Object.keys(R.pluginConditions[r]).every((function(e){return!!M(R,R.pluginConditions[r][e])}));e.display=t?"block":"none"}return delete e.height,e}(),className:"Text ".concat(n.name.split(" ")[0]," ").concat(c?"clickable":null),children:A&&A.hasOwnProperty(r)&&"mt"===D[A[r].varID]?"":A&&A.hasOwnProperty(r)?String(D[A[r].varID]):s})}),z=(n(59),function(e){e.handleClick;var t=e.node,n=(e.style,t.transitionNodeID,t.name,t.id),i=Object(a.useContext)(d),r=Object(a.useContext)(u).pluginState,o=r.pluginFields,c=r.pluginVariables,s=o[n],l=s.placeHolder,b=s.type,h=s.varID;return Object(g.jsx)("input",{className:"Field",onFocus:function(e){return e.target.select()},onChange:function(e){return i({type:"UPDATE_FIELD_VALUE",payload:{val:e.target.value,variable:h}})},placeholder:l,type:b,value:"mt"===c[h]?"":c[h]})}),q=(n(60),function(e){var t=e.handleClick,n=e.node,a=e.style;return Object(g.jsx)("article",{onClick:t,style:a,className:"Ellipse ".concat(n.name.split(" ").join("_")," ").concat(n.transitionNodeID?"clickable":null),children:Object(g.jsx)(F,{element:n})})}),K=(n(61),function e(t){var n,i=t.node,r=t.parent,c=Object(a.useContext)(d),s=Object(a.useContext)(u),l=s.updateVis,h=s.pluginState,p=s.pluginStateChanges,j=(s.rotations,s.vectors),O=s.figmaData,f=s.currentFrameID,y=s.nodeTree,x=(s.protoWidth,s.protoHeight,s.currentPageIDX),E=O.children[x].children[f],m=i.transitionNodeID,T=i.opacity,v=i.effects,N=i.visible,S=i.constraints,I=i.type,C=i.id,R=i.name,A=i.absoluteBoundingBox,D=i.layoutMode,k=i.reactions,_=Object(a.useState)(E),P=Object(o.a)(_,2),L=(P[0],P[1]),B=Object(a.useState)(null),H=Object(o.a)(B,2),U=H[0],V=H[1],K=Object(a.useState)(!1),Y=Object(o.a)(K,2),Q=Y[0],J=Y[1],Z=Object(a.useState)(!1),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(o.a)(ne,2),ie=ae[0],re=ae[1],oe=i.hasOwnProperty("layoutMode"),ce={},se=function(e){var t=null;if(void 0!==e)switch(e){case"SPACE_AROUND":t="space-around";break;case"SPACE_BETWEEN":t="space-between";break;case"FIXED":t="flex-start";break;case"CENTER":t="center";break;case"MAX":t="flex-end";break;default:t="flex-start"}return t},le=function(){void 0!==N&&(c({type:"SET_ATTRIBUTE",payload:{id:C,attribute:"visible",value:N}}),N||(ce.display="none"));h&&h.pluginConditions.hasOwnProperty(C)&&(Object.keys(h.pluginConditions[C]).every((function(e){return!!M(h,h.pluginConditions[C][e])}))||(ce.display="none")),U&&V(Object(b.a)(Object(b.a)({},U),ce))},ue=function(e){if(U){var t=Object(b.a)({},U),n=Object(b.a)({},U);delete t.width,delete t.height,delete n.height,delete t.left,delete t.right;var a,r=i.absoluteBoundingBox.x-E.absoluteBoundingBox.x;if(r<=(E.absoluteBoundingBox.width-n.width)/2)a=E.absoluteBoundingBox.width-2*r;else{var o=E.absoluteBoundingBox.width-(n.width+n.left);a=E.absoluteBoundingBox.width-2*o,n.display="flex",n.justifyContent="flex-end"}return delete n.position,delete n.left,delete n.top,delete n.bottom,n.width=a,t.width||delete t.width,n.width||delete n.width,"parent"===e?t:n}return{background:"red"}},de=function(e){h&&(h.pluginActions.hasOwnProperty(C)&&(Object.keys(h.pluginActions[C]).forEach((function(t){-1!==e.indexOf(h.pluginActions[C][t].eventType)&&c({type:"UPDATE_PLUGIN_STATE",payload:{pluginAction:h.pluginActions[C][t],eventType:e}})})),te(!0)),k.length&&te(!0))},be=function(){de(["Click"]),k.length&&c({type:"SET_CURRENT_FRAME_ID",payload:k[0].action.destinationId})};if(Object(a.useEffect)((function(){var e="".concat(I," ").concat(R.split(" ").join("_"),"  ").concat(Q?"flexChild":""," ").concat(oe?"flexParent":""," ").concat(ee||m?"clickable":"");oe&&("VERTICAL"===i.layoutMode?e+=" column":e+=" row"),re(e)}),[y]),Object(a.useEffect)((function(){y&&r!==E.id&&L(y[r])}),[O,y]),Object(a.useEffect)((function(){if(h){var e=Object(b.a)({},i),t=h.pluginActions,n=h.pluginConditions;t.hasOwnProperty(C)&&(e.actions=t[C]),n.hasOwnProperty(C)&&(e.conditions=n[C]),c({type:"ADD_CHILD_ELEMENT",payload:e})}}),[y,f,p]),Object(a.useEffect)((function(){y&&Object.keys(y).length&&A&&(r&&y.hasOwnProperty(r)&&"NONE"!==y[r].layoutMode&&J(y[r].hasOwnProperty("layoutMode")),function(){if(i.hasOwnProperty("rectangleCornerRadius")){var e=i.rectangleCornerRadius.reduce((function(e,t,n){return e+t+"px "}),"");ce.borderRadius=e,ce.overflow="hidden"}i.hasOwnProperty("cornerRadius")&&(ce.borderRadius=i.cornerRadius,ce.overflow="hidden")}(),oe&&function(){var e=i.primaryAxisAlignItems,t=i.counterAxisAlignItems;ce.display="flex","VERTICAL"===D&&(ce.flexDirection="column"),ce.justifyContent=se(e),ce.alignItems=se(t);var n=i.paddingTop,a=i.paddingRight;i.paddingBottom,i.paddingLeft,ce.padding=n||a,ce.boxSizing="border-box"}(),T&&(ce.opacity=T.toFixed(2)),function(){var e=A.width,t=A.height;if(S){switch(S.horizontal){case"CENTER":case"MIN":case"MAX":"STRETCH"!==i.layoutAlign&&(ce.width=e)}switch(S.vertical){case"CENTER":case"MIN":case"MAX":1!==i.layoutGrow?ce.height=t:ce.height="100%"}}else ce.width=e,ce.height=t;v.length&&(ce.width=i.width,ce.height=i.height)}(),v&&v.forEach((function(e){var t=e.type,n=e.offset,a=e.radius,i=e.visible,r=e.color;if(i)switch(t){case"DROP_SHADOW":var o=n.x,c=n.y;ce.boxShadow=o+"px "+c+"px "+a+"px "+w(r)}})),Q?function(){var e=y[r],t=e.itemSpacing,n=Object.keys(e.children);e.order[0]!==C&&n.length>1&&(ce["VERTICAL"===e.layoutMode?"marginTop":"marginLeft"]=t);var a="HORIZONTAL"===e.layoutMode;Q&&"STRETCH"===i.layoutAlign&&(ce[a?"height":"width"]="100%"),Q&&(1===i.layoutGrow?ce.flex=1:ce[a?"width":"height"]=A[a?"width":"height"])}():function(){var e=A.x,t=A.y,n=A.width,a=A.height;ce.position="absolute";var o=t-E.absoluteBoundingBox.y,c=e-E.absoluteBoundingBox.x;if(S){switch(S.horizontal){case"SCALE":ce.left=c;break;case"MIN":case"CENTER":ce.left=c;break;case"MAX":ce.right=E.absoluteBoundingBox.width-(n+c);break;case"STRETCH":ce.left=c,ce.right=E.absoluteBoundingBox.width-(n+c)}switch(S.vertical){case"SCALE":ce.top=o;break;case"MIN":case"CENTER":ce.top=o;break;case"MAX":ce.bottom=E.absoluteBoundingBox.height-(a+o);break;case"STRETCH":ce.top=o,ce.bottom=E.absoluteBoundingBox.height-(a+o)}}else ce.top=o,ce.left=c;if(y.hasOwnProperty(r)&&"FRAME"!==y[r].type&&"GROUP"!==y[r].type){var s=y[r].absoluteBoundingBox;switch(S.horizontal){case"MIN":case"CENTER":case"SCALE":ce.left=ce.left-(s.x-E.absoluteBoundingBox.x);break;case"MAX":ce.right=ce.right-s.width-(n+c);break;case"STRETCH":ce.left=ce.left-s.x,ce.right=ce.right-s.width-(n+c)}switch(S.vertical){case"MIN":case"CENTER":case"SCALE":ce.top=ce.top-(s.y-E.absoluteBoundingBox.y);break;case"MAX":ce.bottom=ce.bottom-s.height-(a+o);break;case"STRETCH":ce.top=ce.top-s.y,ce.bottom=ce.bottom-s.width-(n+c)}}y.hasOwnProperty(i.parentNode)&&"GROUP"===y[i.parentNode].type&&(ce.top=0,ce.left=0),"Naho"===R&&(console.log(y),console.log(i.parentNode),console.log(y[i.parentNode]))}(),le(),V(ce))}),[O,y,Q]),Object(a.useEffect)((function(){p&&le()}),[y,p]),Object(a.useEffect)((function(){if(y&&y.hasOwnProperty(C)&&y[C].hasOwnProperty("conditions")){var e=Object.keys(y[C].conditions).every((function(e){return!!M(h,y[C].conditions[e])})),t={};t.display=e?oe?"flex":"block":"none",U&&V(Object(b.a)(Object(b.a)({},U),t))}}),[l,y]),null===U)return null;switch(I){case"VECTOR":if(!(U&&j&&j.hasOwnProperty(C)))return null;n=Object(g.jsx)(W,{handleClick:be,style:U,node:i});break;case"TEXT":n=Object(g.jsx)(X,{handleClick:be,style:U,node:i});break;case"ELLIPSE":n=Object(g.jsx)(q,{handleClick:be,style:U,node:i});break;default:n=Object(g.jsxs)("article",{style:U,onMouseEnter:function(){return de(["MouseEnter","Hover"])},onMouseLeave:function(){return de(["MouseLeave","Hover"])},onClick:be,className:"Element "+ie,children:["TEXT"!==I&&"VECTOR"!==I&&"BOOLEAN_OPERATION"!==I&&Object(g.jsx)(F,{element:i}),"TEXT"!==I&&"VECTOR"!==I&&"BOOLEAN_OPERATION"!==I&&Object(g.jsx)(G,{element:i}),h&&h.hasOwnProperty("pluginFields")&&h.pluginFields.hasOwnProperty(C)&&Object(g.jsx)(z,{handleClick:be,style:U,node:i}),i.children&&Object.keys(i.children).sort((function(e,t){return function(e,t){var n=i.order;return n.indexOf(e)-n.indexOf(t)}(e,t)})).map((function(t){var n=i.children[t];return Object(g.jsx)(e,{parent:i.id,node:n},t)}))]})}return i.hasOwnProperty("constraints")&&"CENTER"===i.constraints.horizontal?Object(g.jsx)("main",{style:ue("parent"),className:"centerParent",children:Object(g.jsx)("section",{className:"childStyle",style:ue("child"),children:n})}):n}),Y=(n(62),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.figmaData,i=t.currentPageIDX,r=t.currentFrameID,o=(t.nodeTree,t.currentPageID,n.children[i].children[r]);return Object(a.useEffect)((function(){r&&e({type:"ADD_CHILD_ELEMENT",payload:o})}),[r]),o?Object(g.jsx)("section",{style:{},className:"RenderElements",children:o.hasOwnProperty("children")?Object.keys(o.children).map((function(e){return Object(g.jsx)(K,{parent:o.id,node:o.children[e]},o.children[e].id)})):Object(g.jsx)(P,{})}):null}),Q=(n(63),function(){var e=Object(a.useContext)(u),t=e.figmaData,n=e.currentPageIDX,i=e.currentFrameID,r=(e.protoHeight,t.children[n]);return Object(g.jsxs)("section",{style:{},className:"Frame",children:[r.children.hasOwnProperty(i)&&r.children[i].hasOwnProperty("background")&&r.children[i].background.length>0&&Object(g.jsx)(F,{element:r.children[i]}),r.children.hasOwnProperty(i)&&r.children[i].hasOwnProperty("strokes")&&r.children[i].strokes.length>0&&Object(g.jsx)(G,{element:r.children[i]}),Object(g.jsx)(Y,{})]})}),J=(n(64),n(65),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.currentBreakpoint,i=t.breakPoints,r=(t.nodeTree,t.figmaData),o=t.currentPageIDX,c=t.currentFrameID,s=t.isMobile,l=t.protoWidth,b=t.protoHeight,h=t.smoov,p=t.minWidth,j=t.minHeight,O=r.children[o];return Object(a.useEffect)((function(){if(i&&i.length){var t=i.indexOf(i[n]);c!==t&&(e({type:"SET_CURRENT_FRAME_ID",payload:i[n].id}),e({type:"SET_CURRENT_FRAME_IDX",payload:t}))}}),[n,i]),Object(a.useEffect)((function(){var e=r.children[o];e.hasOwnProperty("children")&&Object.keys(e.children).forEach((function(t,n){var a=e.children[t];-1!==a.name.indexOf("|")&&(a[a.name.split("|")[0].split(" ").join("**").toLowerCase()]=a.absoluteBoundingBox.width,a.index=n)}))}),[r,o]),r.children[o].hasOwnProperty("children")?Object(g.jsx)(_.Resizable,{maxConstraints:[window.innerWidth,window.innerHeight-34],minConstraints:[p,j],onResize:function(t,n){var a=n.size,i=a.width,r=a.height;e({type:"SET_DIRECTION",payload:0>=l-i}),e({type:"SET_WIDTH",payload:i}),e({type:"SET_HEIGHT",payload:r})},width:l,height:b,children:Object(g.jsxs)("main",{style:{width:l,height:b},className:"Frames box ".concat(s?"mobile":"desktop"," ").concat(h?"smoov":""),children:[Object(g.jsxs)("p",{className:"pageName",children:[O.name," \xa0>\xa0 ",c&&O.children[c].name]}),Object(g.jsx)(Q,{})]})}):Object(g.jsx)(P,{})}),Z=function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.direction,i=t.currentBreakpoint,r=t.breakPoints,c=(t.rwd,t.currentFrameID),s=t.protoWidth,l=t.figmaData,b=(t.figmaFile,t.loading),h=t.currentPageIDX,p=t.currentPageID,j=t.selection,O=t.nodeTree,y=Object(a.useState)(null),x=Object(o.a)(y,2),E=x[0],m=x[1];return Object(a.useEffect)((function(){p&&l&&l.children.every((function(t,n){return t.id!==p||(e({type:"RESET_CURRENTPAGE",payload:n}),!1)}))}),[p,j]),Object(a.useEffect)((function(){if(r&&r.length){var t=Math.round(s);n?i+1<r.length&&t>r[i+1].breakPoint&&e({type:"SET_CURRENT_BPOINT",payload:i+1}):t<r[i].breakPoint&&i-1>=0&&e({type:"SET_CURRENT_BPOINT",payload:i-1})}}),[s]),Object(a.useEffect)((function(){Math.round(s);if(O){var t=l.children[h].children[c],n=Object.keys(t).filter((function(e){return-1!==e.indexOf("**")})),a=Object.keys(l.children[h].children).filter((function(e){return l.children[h].children[e].hasOwnProperty(n[0])})).map((function(e){var t=l.children[h].children[e];return{id:t.id,name:t.name,breakPoint:t[n[0]]}})).sort((function(e,t){return e.breakPoint-t.breakPoint}));e({type:"SET_BREAKPOINTS",payload:a})}}),[O]),Object(a.useEffect)((function(){if(l&&l.hasOwnProperty("document")){var e=w(l.children[h].backgroundColor);m("rgba(229.00000154972076,229.00000154972076,229.00000154972076,1)"!==e?{background:e}:null)}}),[l,h]),Object(g.jsxs)("main",{className:"FigmaProto",children:[Object(g.jsx)(k,{}),Object(g.jsx)("section",{style:E,className:"Prototype",children:l&&!b?Object(g.jsx)(J,{}):Object(g.jsx)(f,{})})]})},$=(n(66),function(){return Object(g.jsx)("main",{className:"NoPyro",children:"NoPyro"})}),ee=(n(67),n(68),n(69),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u),n=t.pristine,i=(t.pluginState,t.noPyroProto),r=(t.figmaData,t.figmaFile),c=(t.loading,s.collection("figma-files").doc(r).collection("fileData")),l=c.doc("pluginUIData").collection("variables"),b=c.doc("pluginUIData").collection("nodeActions"),h=c.doc("pluginUIData").collection("nodeConditions"),p=c.doc("pluginUIData").collection("nodeFields"),j=c.doc("pluginUIData").collection("nodeTexts"),O=Object(N.a)(l,{idField:"id"}),f=Object(o.a)(O,1)[0],y=Object(N.a)(b,{idField:"id"}),x=Object(o.a)(y,1)[0],E=Object(N.a)(h,{idField:"id"}),m=Object(o.a)(E,1)[0],T=Object(N.a)(p,{idField:"id"}),v=Object(o.a)(T,1)[0],S=Object(N.a)(j,{idField:"id"}),w=Object(o.a)(S,1)[0],I=Object(N.a)(c,{idField:"id"});Object(o.a)(I,1)[0];return Object(a.useEffect)((function(){n?e({type:"NOT_PRISTINE"}):m||e({type:"RMV_LOADING"})}),[n]),Object(a.useEffect)((function(){if(f&&x&&m&&v&&w){var t=f.reduce((function(e,t){return e[t.id]=Object.entries(t.var)[0][1],e}),{}),n=v.reduce((function(e,t){return e[t.id]=t,e}),{}),a=w.reduce((function(e,t){return e[t.id]=t,e}),{}),i=x.reduce((function(e,t){return b.doc(t.id).collection("actions").get().then((function(n){var a={};n.forEach((function(e){return a[e.id]=e.data()})),e[t.id]=a})),e}),{}),r=m.reduce((function(t,n){return h.doc(n.id).collection("conditions").get().then((function(a){var i={};a.forEach((function(e){return i[e.id]=e.data()})),t[n.id]=i;var r=n.id;e({type:"ADD_CONDITION",payload:{nodeID:r,conditions:i}})})),t}),{});e({type:"SET_PLUGIN_STATE",payload:{pluginVariables:t,pluginActions:i,pluginConditions:r,pluginFields:n,pluginTexts:a}})}}),[f,x,m,v,w]),i?Object(g.jsx)($,{}):Object(g.jsx)(Z,{})}),te=function(){var e=O(),t=window.location.href.split("/figma/?key=")[1],n=Object(a.useReducer)(p,h),i=Object(o.a)(n,2),r=i[0],c=i[1],l=r.requestSent,b=r.userData,f=r.authData,y=r.userIsAllowed,E=r.figmaFile,N=s.collection("figma-files").doc(t),S=function(){if(e){var t=e.photoURL,n=e.email,a=e.displayName;c({type:"SET_USER",payload:{photoURL:t,email:n,displayName:a}})}else c({type:"SET_USER",payload:null})},w=function(){var t=!1;if(e&&f&&b){var n=f.currentOrg,a=f.myEmail,i=(f.orgDomain,f.useOrg),r=f.users,o=(b.displayName,b.email),c=(b.photoURL,a===o),s=r.length&&-1!==r.indexOf(o);i&&-1!==o.indexOf(n)&&(t=!0),s&&(t=!0),c&&(t=!0)}return t};return Object(a.useEffect)((function(){N.get().then((function(e){if(e.exists){var t=e.data(),n=t.authData,a=t.pageData;c({type:"UPDATE_FILE_DATA_FROM_FIGMA",payload:{authData:n,pageData:a}}),c({type:"SET_CURRENT_FRAME_ID",payload:a.children[0].prototypeStartNodeID})}else c({type:"NO_PROTO"})})).catch((function(e){return console.error(e)})),S(),w()}),[]),Object(a.useEffect)((function(){S(),y!==w()&&c({type:"AUTHORISE_USER",payload:w})}),[w(),e]),Object(a.useEffect)((function(){c({type:"SET_FILEKEY",payload:t})}),[]),E?Object(g.jsx)(d.Provider,{value:c,children:Object(g.jsx)(u.Provider,{value:r,children:e&&w()?Object(g.jsx)(ee,{}):Object(g.jsxs)("main",{className:"SignIn",children:[Object(g.jsxs)("section",{children:[Object(g.jsx)("img",{src:j,height:"27",alt:"pyro"}),b&&Object(g.jsx)(T,{})]}),e&&!w()?Object(g.jsx)(m,{}):Object(g.jsx)(x,{}),l&&Object(g.jsx)(v,{msg:"Request sent succesfully"}),Object(g.jsx)("small",{children:"*Better design coming up!"})]})})}):Object(g.jsx)("p",{children:"no file"})};r.a.render(Object(g.jsx)(te,{}),document.getElementById("figma_pyro"))}]),[[70,1,2]]]);
//# sourceMappingURL=main.c7a62d87.chunk.js.map