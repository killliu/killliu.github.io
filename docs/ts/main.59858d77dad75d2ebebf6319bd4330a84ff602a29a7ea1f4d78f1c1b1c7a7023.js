(()=>{var Yt=Object.create;var Je=Object.defineProperty;var Jt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Qt=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty;var we=(T,i)=>()=>(i||T((i={exports:{}}).exports,i),i.exports);var tr=(T,i,m,h)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of Xt(i))!er.call(T,s)&&s!==m&&Je(T,s,{get:()=>i[s],enumerable:!(h=Jt(i,s))||h.enumerable});return T};var Le=(T,i,m)=>(m=T!=null?Yt(Qt(T)):{},tr(i||!T||!T.__esModule?Je(m,"default",{value:T,enumerable:!0}):m,T));var et=we((ke,He)=>{(function(T,i){typeof ke=="object"&&typeof He<"u"?He.exports=i():typeof define=="function"&&define.amd?define(i):T.Jump=i()})(ke,function(){"use strict";var T=function(o,g,y,S){return o/=S/2,o<1?y/2*o*o+g:(o--,-y/2*(o*(o-2)-1)+g)},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},m=function(){var o=void 0,g=void 0,y=void 0,S=void 0,w=void 0,_=void 0,L=void 0,b=void 0,u=void 0,d=void 0,A=void 0,k=void 0,V=void 0;function U(){var I=o.scrollTop||o.scrollY||o.pageYOffset;return I=typeof I>"u"?0:I,I}function M(I){var N=I.getBoundingClientRect().top,B=o.getBoundingClientRect?o.getBoundingClientRect().top:0;return N-B+y}function $(I){o.scrollTo?o.scrollTo(0,I):o.scrollTop=I}function K(I){d||(d=I),A=I-d,k=_(A,y,b,u),$(k),A<u?window.requestAnimationFrame(K):G()}function G(){$(y+b),g&&L&&(g.setAttribute("tabindex","-1"),g.focus()),typeof V=="function"&&V(),d=!1}function ee(I){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(u=N.duration||1e3,w=N.offset||0,V=N.callback,_=N.easing||T,L=N.a11y||!1,i(N.container)){case"object":o=N.container;break;case"string":o=document.querySelector(N.container);break;default:o=window}switch(y=U(),typeof I>"u"?"undefined":i(I)){case"number":g=void 0,L=!1,S=y+I;break;case"object":g=I,S=M(g);break;case"string":g=document.querySelector(I),S=M(g);break}switch(b=S-y+w,i(N.duration)){case"number":u=N.duration;break;case"function":u=N.duration(b);break}window.requestAnimationFrame(K)}return ee},h=m();return h})});var tt=we((Me,Ne)=>{(function(T,i){typeof Me=="object"&&typeof Ne<"u"?Ne.exports=i():typeof define=="function"&&define.amd?define(i):(T=T||self,T.mediumZoom=i())})(Me,function(){"use strict";var T=Object.assign||function(b){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var A in d)Object.prototype.hasOwnProperty.call(d,A)&&(b[A]=d[A])}return b},i=function(u){return u.tagName==="IMG"},m=function(u){return NodeList.prototype.isPrototypeOf(u)},h=function(u){return u&&u.nodeType===1},s=function(u){var d=u.currentSrc||u.src;return d.substr(-4).toLowerCase()===".svg"},o=function(u){try{return Array.isArray(u)?u.filter(i):m(u)?[].slice.call(u).filter(i):h(u)?[u].filter(i):typeof u=="string"?[].slice.call(document.querySelectorAll(u)).filter(i):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},g=function(u){var d=document.createElement("div");return d.classList.add("medium-zoom-overlay"),d.style.background=u,d},y=function(u){var d=u.getBoundingClientRect(),A=d.top,k=d.left,V=d.width,U=d.height,M=u.cloneNode(),$=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,K=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return M.removeAttribute("id"),M.style.position="absolute",M.style.top=A+$+"px",M.style.left=k+K+"px",M.style.width=V+"px",M.style.height=U+"px",M.style.transform="",M},S=function(u,d){var A=T({bubbles:!1,cancelable:!1,detail:void 0},d);if(typeof window.CustomEvent=="function")return new CustomEvent(u,A);var k=document.createEvent("CustomEvent");return k.initCustomEvent(u,A.bubbles,A.cancelable,A.detail),k},w=function b(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=window.Promise||function(c){function f(){}c(f,f)},k=function(c){var f=c.target;if(f===p){B();return}R.indexOf(f)!==-1&&P({target:f})},V=function(){if(!(W||!n.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ie-c)>C.scrollOffset&&setTimeout(B,150)}},U=function(c){var f=c.key||c.keyCode;(f==="Escape"||f==="Esc"||f===27)&&B()},M=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=c;if(c.background&&(p.style.background=c.background),c.container&&c.container instanceof Object&&(f.container=T({},C.container,c.container)),c.template){var O=h(c.template)?c.template:document.querySelector(c.template);f.template=O}return C=T({},C,f),R.forEach(function(x){x.dispatchEvent(S("medium-zoom:update",{detail:{zoom:l}}))}),l},$=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return b(T({},C,c))},K=function(){for(var c=arguments.length,f=Array(c),O=0;O<c;O++)f[O]=arguments[O];var x=f.reduce(function(z,j){return[].concat(z,o(j))},[]);return x.filter(function(z){return R.indexOf(z)===-1}).forEach(function(z){R.push(z),z.classList.add("medium-zoom-image")}),q.forEach(function(z){var j=z.type,D=z.listener,re=z.options;x.forEach(function(Y){Y.addEventListener(j,D,re)})}),l},G=function(){for(var c=arguments.length,f=Array(c),O=0;O<c;O++)f[O]=arguments[O];n.zoomed&&B();var x=f.length>0?f.reduce(function(z,j){return[].concat(z,o(j))},[]):R;return x.forEach(function(z){z.classList.remove("medium-zoom-image"),z.dispatchEvent(S("medium-zoom:detach",{detail:{zoom:l}}))}),R=R.filter(function(z){return x.indexOf(z)===-1}),l},ee=function(c,f){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return R.forEach(function(x){x.addEventListener("medium-zoom:"+c,f,O)}),q.push({type:"medium-zoom:"+c,listener:f,options:O}),l},I=function(c,f){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return R.forEach(function(x){x.removeEventListener("medium-zoom:"+c,f,O)}),q=q.filter(function(x){return!(x.type==="medium-zoom:"+c&&x.listener.toString()===f.toString())}),l},N=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=c.target,O=function(){var z={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},j=void 0,D=void 0;if(C.container)if(C.container instanceof Object)z=T({},z,C.container),j=z.width-z.left-z.right-C.margin*2,D=z.height-z.top-z.bottom-C.margin*2;else{var re=h(C.container)?C.container:document.querySelector(C.container),Y=re.getBoundingClientRect(),se=Y.width,de=Y.height,pe=Y.left,ce=Y.top;z=T({},z,{width:se,height:de,left:pe,top:ce})}j=j||z.width-C.margin*2,D=D||z.height-C.margin*2;var ne=n.zoomedHd||n.original,ae=s(ne)?j:ne.naturalWidth||j,ge=s(ne)?D:ne.naturalHeight||D,J=ne.getBoundingClientRect(),he=J.top,ye=J.left,X=J.width,be=J.height,Te=Math.min(ae,j)/X,Q=Math.min(ge,D)/be,le=Math.min(Te,Q),Ee=(-ye+(j-X)/2+C.margin+z.left)/le,Se=(-he+(D-be)/2+C.margin+z.top)/le,Z="scale("+le+") translate3d("+Ee+"px, "+Se+"px, 0)";n.zoomed.style.transform=Z,n.zoomedHd&&(n.zoomedHd.style.transform=Z)};return new A(function(x){if(f&&R.indexOf(f)===-1){x(l);return}var z=function se(){W=!1,n.zoomed.removeEventListener("transitionend",se),n.original.dispatchEvent(S("medium-zoom:opened",{detail:{zoom:l}})),x(l)};if(n.zoomed){x(l);return}if(f)n.original=f;else if(R.length>0){var j=R;n.original=j[0]}else{x(l);return}if(n.original.dispatchEvent(S("medium-zoom:open",{detail:{zoom:l}})),ie=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,W=!0,n.zoomed=y(n.original),document.body.appendChild(p),C.template){var D=h(C.template)?C.template:document.querySelector(C.template);n.template=document.createElement("div"),n.template.appendChild(D.content.cloneNode(!0)),document.body.appendChild(n.template)}if(document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",B),n.zoomed.addEventListener("transitionend",z),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(re),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,O()};var re=setInterval(function(){n.zoomedHd.complete&&(clearInterval(re),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",B),document.body.appendChild(n.zoomedHd),O())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var Y=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",Y),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",B),document.body.appendChild(n.zoomedHd),O()})}else O()})},B=function(){return new A(function(c){if(W||!n.original){c(l);return}var f=function O(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild(p),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),W=!1,n.zoomed.removeEventListener("transitionend",O),n.original.dispatchEvent(S("medium-zoom:closed",{detail:{zoom:l}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,c(l)};W=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(S("medium-zoom:close",{detail:{zoom:l}})),n.zoomed.addEventListener("transitionend",f)})},P=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=c.target;return n.original?B():N({target:f})},te=function(){return C},oe=function(){return R},ue=function(){return n.original},R=[],q=[],W=!1,ie=0,C=d,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(u)==="[object Object]"?C=u:(u||typeof u=="string")&&K(u),C=T({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},C);var p=g(C.background);document.addEventListener("click",k),document.addEventListener("keyup",U),document.addEventListener("scroll",V),window.addEventListener("resize",B);var l={open:N,close:B,toggle:P,update:M,clone:$,attach:K,detach:G,on:ee,off:I,getOptions:te,getImages:oe,getZoomedImage:ue};return l};function _(b,u){u===void 0&&(u={});var d=u.insertAt;if(!(!b||typeof document>"u")){var A=document.head||document.getElementsByTagName("head")[0],k=document.createElement("style");k.type="text/css",d==="top"&&A.firstChild?A.insertBefore(k,A.firstChild):A.appendChild(k),k.styleSheet?k.styleSheet.cssText=b:k.appendChild(document.createTextNode(b))}}var L=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";return _(L),w})});var rt=we((Be,Re)=>{(function(T,i){typeof Be=="object"&&typeof Re<"u"?Re.exports=i():typeof define=="function"&&define.amd?define(i):(T=typeof globalThis<"u"?globalThis:T||self,T.LazyLoad=i())})(Be,function(){"use strict";function T(){return T=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},T.apply(this,arguments)}var i=typeof window<"u",m=i&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),h=i&&"IntersectionObserver"in window,s=i&&"classList"in document.createElement("p"),o=i&&window.devicePixelRatio>1,g={elements_selector:".lazy",container:m||i?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},y=function(e){return T({},g,e)},S=function(e,t){var r,v="LazyLoad::Initialized",H=new e(t);try{r=new CustomEvent(v,{detail:{instance:H}})}catch{r=document.createEvent("CustomEvent"),r.initCustomEvent(v,!1,!1,{instance:H})}window.dispatchEvent(r)},w=function(e,t){if(!!t)if(!t.length)S(e,t);else for(var r=0,v;v=t[r];r+=1)S(e,v)},_="src",L="srcset",b="sizes",u="poster",d="llOriginalAttrs",A="data",k="loading",V="loaded",U="applied",M="entered",$="error",K="native",G="data-",ee="ll-status",I=function(e,t){return e.getAttribute(G+t)},N=function(e,t,r){var v=G+t;if(r===null){e.removeAttribute(v);return}e.setAttribute(v,r)},B=function(e){return I(e,ee)},P=function(e,t){return N(e,ee,t)},te=function(e){return P(e,null)},oe=function(e){return B(e)===null},ue=function(e){return B(e)===k},R=function(e){return B(e)===$},q=function(e){return B(e)===K},W=[k,V,U,$],ie=function(e){return W.indexOf(B(e))>=0},C=function(e,t,r,v){if(!!e){if(v!==void 0){e(t,r,v);return}if(r!==void 0){e(t,r);return}e(t)}},n=function(e,t){if(s){e.classList.add(t);return}e.className+=(e.className?" ":"")+t},p=function(e,t){if(s){e.classList.remove(t);return}e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},l=function(e){e.llTempImage=document.createElement("IMG")},E=function(e){delete e.llTempImage},c=function(e){return e.llTempImage},f=function(e,t){if(!!t){var r=t._observer;!r||r.unobserve(e)}},O=function(e){e.disconnect()},x=function(e,t,r){t.unobserve_entered&&f(e,r)},z=function(e,t){!e||(e.loadingCount+=t)},j=function(e){!e||(e.toLoadCount-=1)},D=function(e,t){!e||(e.toLoadCount=t)},re=function(e){return e.loadingCount>0},Y=function(e){return e.toLoadCount>0},se=function(e){for(var t=[],r=0,v;v=e.children[r];r+=1)v.tagName==="SOURCE"&&t.push(v);return t},de=function(e,t){var r=e.parentNode;if(!(!r||r.tagName!=="PICTURE")){var v=se(r);v.forEach(t)}},pe=function(e,t){var r=se(e);r.forEach(t)},ce=[_],ne=[_,u],ae=[_,L,b],ge=[A],J=function(e){return!!e[d]},he=function(e){return e[d]},ye=function(e){return delete e[d]},X=function(e,t){if(!J(e)){var r={};t.forEach(function(v){r[v]=e.getAttribute(v)}),e[d]=r}},be=function(e){J(e)||(e[d]={backgroundImage:e.style.backgroundImage})},Te=function(e,t,r){if(!r){e.removeAttribute(t);return}e.setAttribute(t,r)},Q=function(e,t){if(!!J(e)){var r=he(e);t.forEach(function(v){Te(e,v,r[v])})}},le=function(e){if(!!J(e)){var t=he(e);e.style.backgroundImage=t.backgroundImage}},Ee=function(e,t,r){n(e,t.class_applied),P(e,U),r&&(t.unobserve_completed&&f(e,t),C(t.callback_applied,e,r))},Se=function(e,t,r){n(e,t.class_loading),P(e,k),r&&(z(r,1),C(t.callback_loading,e,r))},Z=function(e,t,r){!r||e.setAttribute(t,r)},qe=function(e,t){Z(e,b,I(e,t.data_sizes)),Z(e,L,I(e,t.data_srcset)),Z(e,_,I(e,t.data_src))},ct=function(e,t){de(e,function(r){X(r,ae),qe(r,t)}),X(e,ae),qe(e,t)},ut=function(e,t){X(e,ce),Z(e,_,I(e,t.data_src))},dt=function(e,t){pe(e,function(r){X(r,ce),Z(r,_,I(r,t.data_src))}),X(e,ne),Z(e,u,I(e,t.data_poster)),Z(e,_,I(e,t.data_src)),e.load()},lt=function(e,t){X(e,ge),Z(e,A,I(e,t.data_src))},ft=function(e,t,r){var v=I(e,t.data_bg),H=I(e,t.data_bg_hidpi),F=o&&H?H:v;!F||(e.style.backgroundImage='url("'.concat(F,'")'),c(e).setAttribute(_,F),Se(e,t,r))},mt=function(e,t,r){var v=I(e,t.data_bg_multi),H=I(e,t.data_bg_multi_hidpi),F=o&&H?H:v;!F||(e.style.backgroundImage=F,Ee(e,t,r))},vt=function(e,t,r){var v=I(e,t.data_bg_set);if(!!v){var H=v.split("|"),F=H.map(function(me){return"image-set(".concat(me,")")});e.style.backgroundImage=F.join(),e.style.backgroundImage===""&&(F=H.map(function(me){return"-webkit-image-set(".concat(me,")")}),e.style.backgroundImage=F.join()),Ee(e,t,r)}},Fe={IMG:ct,IFRAME:ut,VIDEO:dt,OBJECT:lt},pt=function(e,t){var r=Fe[e.tagName];!r||r(e,t)},gt=function(e,t,r){var v=Fe[e.tagName];!v||(v(e,t),Se(e,t,r))},ht=["IMG","IFRAME","VIDEO","OBJECT"],yt=function(e){return ht.indexOf(e.tagName)>-1},Ve=function(e,t){t&&!re(t)&&!Y(t)&&C(e.callback_finish,t)},Ue=function(e,t,r){e.addEventListener(t,r),e.llEvLisnrs[t]=r},bt=function(e,t,r){e.removeEventListener(t,r)},Ae=function(e){return!!e.llEvLisnrs},Et=function(e,t,r){Ae(e)||(e.llEvLisnrs={});var v=e.tagName==="VIDEO"?"loadeddata":"load";Ue(e,v,t),Ue(e,"error",r)},ze=function(e){if(!!Ae(e)){var t=e.llEvLisnrs;for(var r in t){var v=t[r];bt(e,r,v)}delete e.llEvLisnrs}},$e=function(e,t,r){E(e),z(r,-1),j(r),p(e,t.class_loading),t.unobserve_completed&&f(e,r)},St=function(e,t,r,v){var H=q(t);$e(t,r,v),n(t,r.class_loaded),P(t,V),C(r.callback_loaded,t,v),H||Ve(r,v)},_t=function(e,t,r,v){var H=q(t);$e(t,r,v),n(t,r.class_error),P(t,$),C(r.callback_error,t,v),r.restore_on_error&&Q(t,ae),H||Ve(r,v)},Ie=function(e,t,r){var v=c(e)||e;if(!Ae(v)){var H=function(Oe){St(Oe,e,t,r),ze(v)},F=function(Oe){_t(Oe,e,t,r),ze(v)};Et(v,H,F)}},wt=function(e,t,r){l(e),Ie(e,t,r),be(e),ft(e,t,r),mt(e,t,r),vt(e,t,r)},Lt=function(e,t,r){Ie(e,t,r),gt(e,t,r)},Ce=function(e,t,r){yt(e)?Lt(e,t,r):wt(e,t,r)},Tt=function(e,t,r){e.setAttribute("loading","lazy"),Ie(e,t,r),pt(e,t),P(e,K)},Ke=function(e){e.removeAttribute(_),e.removeAttribute(L),e.removeAttribute(b)},At=function(e){de(e,function(t){Ke(t)}),Ke(e)},Ge=function(e){de(e,function(t){Q(t,ae)}),Q(e,ae)},zt=function(e){pe(e,function(t){Q(t,ce)}),Q(e,ne),e.load()},It=function(e){Q(e,ce)},Ct=function(e){Q(e,ge)},Ot={IMG:Ge,IFRAME:It,VIDEO:zt,OBJECT:Ct},xt=function(e){var t=Ot[e.tagName];if(!t){le(e);return}t(e)},kt=function(e,t){oe(e)||q(e)||(p(e,t.class_entered),p(e,t.class_exited),p(e,t.class_applied),p(e,t.class_loading),p(e,t.class_loaded),p(e,t.class_error))},Ht=function(e,t){xt(e),kt(e,t),te(e),ye(e)},Mt=function(e,t,r,v){!r.cancel_on_exit||!ue(e)||e.tagName==="IMG"&&(ze(e),At(e),Ge(e),p(e,r.class_loading),z(v,-1),te(e),C(r.callback_cancel,e,t,v))},Nt=function(e,t,r,v){var H=ie(e);P(e,M),n(e,r.class_entered),p(e,r.class_exited),x(e,r,v),C(r.callback_enter,e,t,v),!H&&Ce(e,r,v)},Bt=function(e,t,r,v){oe(e)||(n(e,r.class_exited),Mt(e,t,r,v),C(r.callback_exit,e,t,v))},Rt=["IMG","IFRAME","VIDEO"],We=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},jt=function(e,t,r){e.forEach(function(v){Rt.indexOf(v.tagName)!==-1&&Tt(v,t,r)}),D(r,0)},Pt=function(e){return e.isIntersecting||e.intersectionRatio>0},Dt=function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}},qt=function(e,t,r){e.forEach(function(v){return Pt(v)?Nt(v.target,v,t,r):Bt(v.target,v,t,r)})},Ft=function(e,t){t.forEach(function(r){e.observe(r)})},Vt=function(e,t){O(e),Ft(e,t)},Ut=function(e,t){!h||We(e)||(t._observer=new IntersectionObserver(function(r){qt(r,e,t)},Dt(e)))},Ze=function(e){return Array.prototype.slice.call(e)},_e=function(e){return e.container.querySelectorAll(e.elements_selector)},$t=function(e){return Ze(e).filter(oe)},Kt=function(e){return R(e)},Gt=function(e){return Ze(e).filter(Kt)},Ye=function(e,t){return $t(e||_e(t))},Wt=function(e,t){var r=Gt(_e(e));r.forEach(function(v){p(v,e.class_error),te(v)}),t.update()},Zt=function(e,t){!i||window.addEventListener("online",function(){Wt(e,t)})},fe=function(e,t){var r=y(e);this._settings=r,this.loadingCount=0,Ut(r,this),Zt(r,this),this.update(t)};return fe.prototype={update:function(e){var t=this._settings,r=Ye(e,t);if(D(this,r.length),m||!h){this.loadAll(r);return}if(We(t)){jt(r,t,this);return}Vt(this._observer,r)},destroy:function(){this._observer&&this._observer.disconnect(),_e(this._settings).forEach(function(e){ye(e)}),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,r=this._settings,v=Ye(e,r);v.forEach(function(H){f(H,t),Ce(H,r,t)})},restoreAll:function(){var e=this._settings;_e(e).forEach(function(t){Ht(t,e)})}},fe.load=function(a,e){var t=y(e);Ce(a,t)},fe.resetStatus=function(a){te(a)},i&&w(fe,window.lazyLoadOptions),fe})});var nt=we((ve,je)=>{(function(i,m){typeof ve=="object"&&typeof je=="object"?je.exports=m():typeof define=="function"&&define.amd?define([],m):typeof ve=="object"?ve.ClipboardJS=m():i.ClipboardJS=m()})(ve,function(){return function(){var T={686:function(h,s,o){"use strict";o.d(s,{default:function(){return C}});var g=o(279),y=o.n(g),S=o(370),w=o.n(S),_=o(817),L=o.n(_);function b(n){try{return document.execCommand(n)}catch{return!1}}var u=function(p){var l=L()(p);return b("cut"),l},d=u;function A(n){var p=document.documentElement.getAttribute("dir")==="rtl",l=document.createElement("textarea");l.style.fontSize="12pt",l.style.border="0",l.style.padding="0",l.style.margin="0",l.style.position="absolute",l.style[p?"right":"left"]="-9999px";var E=window.pageYOffset||document.documentElement.scrollTop;return l.style.top="".concat(E,"px"),l.setAttribute("readonly",""),l.value=n,l}var k=function(p,l){var E=A(p);l.container.appendChild(E);var c=L()(E);return b("copy"),E.remove(),c},V=function(p){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},E="";return typeof p=="string"?E=k(p,l):p instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(p?.type)?E=k(p.value,l):(E=L()(p),b("copy")),E},U=V;function M(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(l){return typeof l}:M=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},M(n)}var $=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=p.action,E=l===void 0?"copy":l,c=p.container,f=p.target,O=p.text;if(E!=="copy"&&E!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&M(f)==="object"&&f.nodeType===1){if(E==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(E==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(O)return U(O,{container:c});if(f)return E==="cut"?d(f):U(f,{container:c})},K=$;function G(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?G=function(l){return typeof l}:G=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},G(n)}function ee(n,p){if(!(n instanceof p))throw new TypeError("Cannot call a class as a function")}function I(n,p){for(var l=0;l<p.length;l++){var E=p[l];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(n,E.key,E)}}function N(n,p,l){return p&&I(n.prototype,p),l&&I(n,l),n}function B(n,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(p&&p.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),p&&P(n,p)}function P(n,p){return P=Object.setPrototypeOf||function(E,c){return E.__proto__=c,E},P(n,p)}function te(n){var p=R();return function(){var E=q(n),c;if(p){var f=q(this).constructor;c=Reflect.construct(E,arguments,f)}else c=E.apply(this,arguments);return oe(this,c)}}function oe(n,p){return p&&(G(p)==="object"||typeof p=="function")?p:ue(n)}function ue(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function R(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function q(n){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},q(n)}function W(n,p){var l="data-clipboard-".concat(n);if(!!p.hasAttribute(l))return p.getAttribute(l)}var ie=function(n){B(l,n);var p=te(l);function l(E,c){var f;return ee(this,l),f=p.call(this),f.resolveOptions(c),f.listenClick(E),f}return N(l,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=G(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var f=this;this.listener=w()(c,"click",function(O){return f.onClick(O)})}},{key:"onClick",value:function(c){var f=c.delegateTarget||c.currentTarget,O=this.action(f)||"copy",x=K({action:O,container:this.container,target:this.target(f),text:this.text(f)});this.emit(x?"success":"error",{action:O,text:x,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return W("action",c)}},{key:"defaultTarget",value:function(c){var f=W("target",c);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(c){return W("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return U(c,f)}},{key:"cut",value:function(c){return d(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof c=="string"?[c]:c,O=!!document.queryCommandSupported;return f.forEach(function(x){O=O&&!!document.queryCommandSupported(x)}),O}}]),l}(y()),C=ie},828:function(h){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}function g(y,S){for(;y&&y.nodeType!==s;){if(typeof y.matches=="function"&&y.matches(S))return y;y=y.parentNode}}h.exports=g},438:function(h,s,o){var g=o(828);function y(_,L,b,u,d){var A=w.apply(this,arguments);return _.addEventListener(b,A,d),{destroy:function(){_.removeEventListener(b,A,d)}}}function S(_,L,b,u,d){return typeof _.addEventListener=="function"?y.apply(null,arguments):typeof b=="function"?y.bind(null,document).apply(null,arguments):(typeof _=="string"&&(_=document.querySelectorAll(_)),Array.prototype.map.call(_,function(A){return y(A,L,b,u,d)}))}function w(_,L,b,u){return function(d){d.delegateTarget=g(d.target,L),d.delegateTarget&&u.call(_,d)}}h.exports=S},879:function(h,s){s.node=function(o){return o!==void 0&&o instanceof HTMLElement&&o.nodeType===1},s.nodeList=function(o){var g=Object.prototype.toString.call(o);return o!==void 0&&(g==="[object NodeList]"||g==="[object HTMLCollection]")&&"length"in o&&(o.length===0||s.node(o[0]))},s.string=function(o){return typeof o=="string"||o instanceof String},s.fn=function(o){var g=Object.prototype.toString.call(o);return g==="[object Function]"}},370:function(h,s,o){var g=o(879),y=o(438);function S(b,u,d){if(!b&&!u&&!d)throw new Error("Missing required arguments");if(!g.string(u))throw new TypeError("Second argument must be a String");if(!g.fn(d))throw new TypeError("Third argument must be a Function");if(g.node(b))return w(b,u,d);if(g.nodeList(b))return _(b,u,d);if(g.string(b))return L(b,u,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function w(b,u,d){return b.addEventListener(u,d),{destroy:function(){b.removeEventListener(u,d)}}}function _(b,u,d){return Array.prototype.forEach.call(b,function(A){A.addEventListener(u,d)}),{destroy:function(){Array.prototype.forEach.call(b,function(A){A.removeEventListener(u,d)})}}}function L(b,u,d){return y(document.body,b,u,d)}h.exports=S},817:function(h){function s(o){var g;if(o.nodeName==="SELECT")o.focus(),g=o.value;else if(o.nodeName==="INPUT"||o.nodeName==="TEXTAREA"){var y=o.hasAttribute("readonly");y||o.setAttribute("readonly",""),o.select(),o.setSelectionRange(0,o.value.length),y||o.removeAttribute("readonly"),g=o.value}else{o.hasAttribute("contenteditable")&&o.focus();var S=window.getSelection(),w=document.createRange();w.selectNodeContents(o),S.removeAllRanges(),S.addRange(w),g=S.toString()}return g}h.exports=s},279:function(h){function s(){}s.prototype={on:function(o,g,y){var S=this.e||(this.e={});return(S[o]||(S[o]=[])).push({fn:g,ctx:y}),this},once:function(o,g,y){var S=this;function w(){S.off(o,w),g.apply(y,arguments)}return w._=g,this.on(o,w,y)},emit:function(o){var g=[].slice.call(arguments,1),y=((this.e||(this.e={}))[o]||[]).slice(),S=0,w=y.length;for(S;S<w;S++)y[S].fn.apply(y[S].ctx,g);return this},off:function(o,g){var y=this.e||(this.e={}),S=y[o],w=[];if(S&&g)for(var _=0,L=S.length;_<L;_++)S[_].fn!==g&&S[_].fn._!==g&&w.push(S[_]);return w.length?y[o]=w:delete y[o],this}},h.exports=s,h.exports.TinyEmitter=s}},i={};function m(h){if(i[h])return i[h].exports;var s=i[h]={exports:{}};return T[h](s,s.exports,m),s.exports}return function(){m.n=function(h){var s=h&&h.__esModule?function(){return h.default}:function(){return h};return m.d(s,{a:s}),s}}(),function(){m.d=function(h,s){for(var o in s)m.o(s,o)&&!m.o(h,o)&&Object.defineProperty(h,o,{enumerable:!0,get:s[o]})}}(),function(){m.o=function(h,s){return Object.prototype.hasOwnProperty.call(h,s)}}(),m(686)}().default})});var xe="",Qe="/ts/search.js";var ot=Le(et()),at=Le(tt()),it=Le(rt()),st=Le(nt());function nr(T){let i={};return T.forEach(m=>{let s=m.querySelector("a").getAttribute("href");s.startsWith("#")&&(i[s.slice(1)]=m)}),i}function or(){let T=document.getElementById("TableOfContents"),i=Array.from(document.querySelectorAll(".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]")),m=[];i.forEach(y=>{m.push({id:y.id,offset:y.offsetTop})}),m.sort((y,S)=>y.offset-S.offset);let h=document.querySelectorAll("#TableOfContents li"),s=nr(h),o;function g(){if(!document.getElementById("TableOfContents")||window.innerWidth<1536)return console.log("not"),document.querySelectorAll(".toc-active").forEach(L=>{console.log(L),L.classList.remove("toc-active")}),document.removeEventListener("scroll",g),!1;let S=document.documentElement.scrollTop||document.body.scrollTop,w;m.forEach(L=>{S>=L.offset-20&&(w=document.getElementById(L.id))});let _;w&&(_=s[w.id]),w&&!_?console.debug("No link found for section",w):_!==o&&(o&&o.querySelector("a").classList.remove("toc-active"),_&&_.querySelector("a").classList.add("toc-active"),o=_)}T&&window.innerWidth>=1536?document.addEventListener("scroll",g):document.removeEventListener("scroll",g)}var Pe=or;var De=class{_LazyLoad;zoom;jump;clipboard;constructor(){window.__theme.imageZoom&&(this.zoom=(0,at.default)("[data-zoomable]:not([data-lazyload])",{background:"var(--color-zoom-bg)"})),this._LazyLoad=new it.default({elements_selector:"[data-lazyload]",class_loading:"lazy-loading",class_error:"lazy-error",class_loaded:"lazy-loaded",unobserve_entered:!0,callback_loaded:i=>{setTimeout(()=>{i.hasAttribute("data-zoomable")&&(i.setAttribute("data-zoom-src",i.currentSrc||i.getAttribute("src")),this.zoom.attach(i))},500)},callback_error:i=>{let m=window.__theme.assets.error_svg;i.setAttribute("src",m),i.setAttribute("srcset",m),i.previousSibling.tagName==="SOURCE"&&(i.previousSibling.setAttribute("src",m),i.previousSibling.setAttribute("srcset",m))}})}async init(){this.hugoEncrypt(),this.initKatex(),this.initActiveMenu(),this.initSearch(),this.initGallery(),this.initCodeBlockCopy(),this.initClipboard(),this.initFooterTime(),this.initBackTop(),this.initNightMode(),Pe()}renderPost(){window.rednerKatex&&window.rednerKatex(),this._LazyLoad.update(),this.updateZoom(),this.initGallery(),this.initCodeBlockCopy(),this.initClipboard(),Pe()}switchLanguage(i){window.location.href=i}initActiveMenu(){let i=document.querySelector(".link-exact-active");i&&i.classList.remove("link-exact-active");let m=document.querySelector(`[data-active-link="${window.location.pathname.replace(/\/$/,"")}/"]`);m&&m.classList.add("link-exact-active")}async initSearch(){if(!document.getElementById("search-input"))return!1;if(!window.initSearch){let m=document.createElement("script");m.src=`${window.__theme.cdn}${Qe}`,document.body.appendChild(m)}}initGallery(){let i=Array.from(document.querySelectorAll(".typo figure.gallery-image")),m=[];if(i.length<2)return!1;for(let s of i){if(s.parentElement.classList.contains("gallery"))return!1;m.length?s.previousElementSibling.previousElementSibling===m[m.length-1]?m.push(s):m.length&&(h(m),m=[s]):m=[s]}m.length>0&&h(m);function h(s){let o=document.createElement("div");o.className="gallery";let g=s[0].parentNode,y=s[0];g.insertBefore(o,y);for(let S of s)o.appendChild(S)}}initFooterTime(){if(!document.getElementById("run-time"))return!1;setInterval(()=>{let i=new Date(window.__theme.creatTime),s=(new Date().getTime()-i.getTime())/(1e3*60*60*24),o=24*parseFloat("0."+s.toString().replace(/\d+\.(\d*)/,"$1")),g=60*parseFloat("0."+o.toString().replace(/\d+\.(\d*)/,"$1")),y=60*parseFloat("0."+g.toString().replace(/\d+\.(\d*)/,"$1"));document.getElementById("run-time-d").innerText=(~~s).toString(),document.getElementById("run-time-h").innerText=(~~o).toString(),document.getElementById("run-time-m").innerText=(~~g).toString(),document.getElementById("run-time-s").innerText=(~~y).toString()},1e3)}initBackTop(){let i=document.getElementById("back-top");if(!i)return!1;window.addEventListener("scroll",()=>{let s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)-document.documentElement.clientHeight-150,o=157-~~(document.documentElement.scrollTop/s*100)*1.57;o<=0?i.classList.add("back-top-completed"):i.classList.remove("back-top-completed");let g=i.querySelector("svg circle");g.style.strokeDashoffset=o<0?"0":o.toString()});let m=s=>s.stopPropagation();function h(s){s?(document.addEventListener("wheel",m,{passive:!0}),document.addEventListener("touchstart",m,{passive:!0})):(document.removeEventListener("wheel",m),document.removeEventListener("touchstart",m))}i.onclick=s=>{if(s.stopPropagation(),s.preventDefault(),this.jump)return!1;this.jump=!0,h(!0);let o=(g,y,S,w)=>g===w?y+S:S*(-(2**(-10*g/w))+1)+y;(0,ot.default)(document.body,{duration:400,offset:0,callback:()=>{this.jump=!1,h(!1)},easing:o,a11y:!1})},window.addEventListener("scroll",()=>{if(!i)return!1;window.scrollY>800?i.classList.add("x"):i.classList.remove("x")},{passive:!0})}initCodeBlockCopy(){let i=Array.from(document.querySelectorAll(".highlight"));for(let m=0;m<i.length;m++){let h=i[m];if(h.querySelector("[data-clipboard-text]"))continue;let s=document.createElement("header"),g=h.querySelector("pre code[data-lang]").getAttribute("data-lang"),y=h.querySelector("table td:nth-child(2) pre").textContent;s.innerHTML=`<div><span></span> <span></span> <span></span> ${g}</div><i title="${window.__theme.i18n.copyCode}" class="eva eva-clipboard-outline"></i>`;let S=s.querySelector("i.eva");h.prepend(s),S.setAttribute("data-clipboard-text",y)}}initClipboard(){if(!document.querySelector("[data-clipboard-text]"))return!1;this.clipboard&&this.clipboard.destroy(),this.clipboard=new st.default("[data-clipboard-text]"),this.clipboard.on("success",function(i){alert(window.__theme.i18n.copySuccess)}),this.clipboard.on("error",function(i){alert(window.__theme.i18n.copyFailed),console.error("Action:",i.action),console.error("Trigger:",i.trigger)})}initNightMode(){let i=document.querySelector(".dark-mode-switch"),m=i.querySelector("i");function h(s){s?(m.classList.remove("eva-moon"),m.classList.add("eva-sun"),document.documentElement.classList.add("dark")):(m.classList.remove("eva-sun"),m.classList.add("eva-moon"),document.documentElement.classList.remove("dark"))}window.__theme.autoDarkMode?h(localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches):h(localStorage.theme==="dark"),i.addEventListener("click",()=>{m.classList.contains("eva-sun")?(localStorage.setItem("theme","light"),h(!1)):(localStorage.setItem("theme","dark"),h(!0))})}async hugoEncrypt(){let i=location.pathname+"password",m=Array.from(document.querySelectorAll("hugo-encrypt")),h=window.__theme.hugoEncrypt.userStorage;function s(w,_){return _=_||crypto.getRandomValues(new Uint8Array(8)),crypto.subtle.importKey("raw",new TextEncoder().encode(w),"PBKDF2",!1,["deriveKey"]).then(L=>crypto.subtle.deriveKey({name:"PBKDF2",salt:_,iterations:1e3,hash:"SHA-256"},L,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])).then(L=>[L,_])}function o(w,_){let[L,b,u]=_.split("-").map(d=>new Uint8Array(d.match(/.{2}/g).map(A=>parseInt(A,16))));return s(w,L).then(([d])=>crypto.subtle.decrypt({name:"AES-GCM",iv:b},d,u)).then(d=>new TextDecoder("utf-8").decode(new Uint8Array(d)))}async function g(w){let _=new TextEncoder().encode(w),L=await crypto.subtle.digest("SHA-1",_);return Array.from(new Uint8Array(L)).map(d=>d.toString(16).padStart(2,"0")).join("")}async function y(w,_,L,b){let u=L.querySelector("cipher-text");try{let d=await o(w,u.innerText),A=await g(d.replace(/\r?\n?[^\r\n]*$/,""));d.includes(A)&&(L.querySelector(".hugo-encrypt-encryption-notice").remove(),u.outerHTML=d,h.setItem(i+b,w),document.querySelector(`#r${b} .hugo-encrypt-sha1sum`).innerHTML="Success: "+A,console.log(`Decryption successful. Storing password in ${h}.`))}catch(d){_==="input"?(L.querySelector(".hugo-encrypt-input-response").innerHTML=window.__theme.hugoEncrypt.wrongPasswordText,console.log(window.__theme.hugoEncrypt.wrongPasswordText,d)):_==="storage"&&(h.removeItem(location.pathname+"password"),console.log("Password changed. Clearing userStorage.",d))}}let S=Array.from(document.querySelectorAll(".hugo-encrypt-button"));for(let w=0;w<S.length;w++)S[w].addEventListener("click",async L=>{let b=L.target.getAttribute("data-hugo-encrypt-id"),u=document.getElementById(`r${b}`),d=u.querySelector(".hugo-encrypt-input").value;await y(d,"input",u,b),this.renderPost()});if(m.length)for(let w of m){let _=w.id.replace(/^r/,""),L=h.getItem(i+_);L&&(await y(L,"storage",w,_),this.renderPost())}}initKatex(){if(xe){let i=document.createElement("script");i.src=xe,document.body.appendChild(i),i.addEventListener("load",()=>{window.rednerKatex()})}}updateZoom(){if(!window.__theme.imageZoom)return!1;this.zoom.detach(),this.zoom.attach("[data-zoomable]:not([data-lazyload])")}updateI18n(){}};window.addEventListener("load",async()=>{window.Luna=new De,window.Luna.init()});})();
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
