import{_ as Et,$ as Bt,F as Ot,a0 as Mt,L as Te,h as y,e as Je,a1 as Ht,q as Ke,J as Ct,y as ze,r as E,M as Pt,G as It,a2 as Ze,a3 as Qe,a4 as et,a5 as Wt,A as I,E as $t,c as ce,d as xe,b as fe,f as tt,u as kt,K as nt,I as Dt,a6 as Lt,i as Nt,j as W,Y as We,a7 as Xt,a8 as _t,a9 as Ft,aa as At}from"./index.eec0c036.js";function Fn(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function An(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function Vn(e,t){const n=e.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function Yn(e,t){const[n,r]=e.split(" ");return t?t==="row"?n:r:{row:n,col:r||n}}function Vt(e,...t){if(Array.isArray(e))e.forEach(n=>Vt(n,...t));else return e(...t)}function Un(e){return Object.keys(e)}function ue(e){return e.some(t=>Et(t)?!(t.type===Bt||t.type===Ot&&!ue(t.children)):!0)?e:null}function jn(e,t){return e&&ue(e())||t()}function Gn(e,t,n){return e&&ue(e(t))||n(t)}function qn(e,t){const n=e&&ue(e());return t(n||null)}function Jn(e){return!(e&&ue(e()))}const Yt=/^(\d|\.)+$/,$e=/(\d|\.)+/;function Kn(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const i=(e+n)*t;return i===0?"0":`${i}px`}else if(typeof e=="string")if(Yt.test(e)){const i=(Number(e)+n)*t;return r?i===0?"0":`${i}px`:`${i}`}else{const i=$e.exec(e);return i?e.replace($e,String((Number(i[0])+n)*t)):e}return e}function Zn(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function Ut(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return Mt(e)!==null}const jt={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Gt(e,t,n){if(e==="mousemoveoutside"){const r=i=>{t.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const i=c=>{r=!t.contains(c.target)},l=c=>{!r||t.contains(c.target)||n(c)};return{mousedown:i,mouseup:l,touchstart:i,touchend:l}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function rt(e,t,n){const r=jt[e];let i=r.get(t);i===void 0&&r.set(t,i=new WeakMap);let l=i.get(n);return l===void 0&&i.set(n,l=Gt(e,t,n)),l}function qt(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=rt(e,t,n);return Object.keys(i).forEach(l=>{se(l,document,i[l],r)}),!0}return!1}function Jt(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=rt(e,t,n);return Object.keys(i).forEach(l=>{Q(l,document,i[l],r)}),!0}return!1}function Kt(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function i(u,s,d){const g=u[s];return u[s]=function(){return d.apply(u,arguments),g.apply(u,arguments)},u}function l(u,s){u[s]=Event.prototype[s]}const c=new WeakMap,w=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function v(){var u;return(u=c.get(this))!==null&&u!==void 0?u:null}function h(u,s){w!==void 0&&Object.defineProperty(u,"currentTarget",{configurable:!0,enumerable:!0,get:s!=null?s:w.get})}const p={bubble:{},capture:{}},b={};function j(){const u=function(s){const{type:d,eventPhase:g,target:x,bubbles:B}=s;if(g===2)return;const P=g===1?"capture":"bubble";let O=x;const M=[];for(;O===null&&(O=window),M.push(O),O!==window;)O=O.parentNode||null;const D=p.capture[d],A=p.bubble[d];if(i(s,"stopPropagation",n),i(s,"stopImmediatePropagation",r),h(s,v),P==="capture"){if(D===void 0)return;for(let L=M.length-1;L>=0&&!e.has(s);--L){const V=M[L],J=D.get(V);if(J!==void 0){c.set(s,V);for(const H of J){if(t.has(s))break;H(s)}}if(L===0&&!B&&A!==void 0){const H=A.get(V);if(H!==void 0)for(const be of H){if(t.has(s))break;be(s)}}}}else if(P==="bubble"){if(A===void 0)return;for(let L=0;L<M.length&&!e.has(s);++L){const V=M[L],J=A.get(V);if(J!==void 0){c.set(s,V);for(const H of J){if(t.has(s))break;H(s)}}}}l(s,"stopPropagation"),l(s,"stopImmediatePropagation"),h(s)};return u.displayName="evtdUnifiedHandler",u}function G(){const u=function(s){const{type:d,eventPhase:g}=s;if(g!==2)return;const x=b[d];x!==void 0&&x.forEach(B=>B(s))};return u.displayName="evtdUnifiedWindowEventHandler",u}const $=j(),X=G();function _(u,s){const d=p[u];return d[s]===void 0&&(d[s]=new Map,window.addEventListener(s,$,u==="capture")),d[s]}function q(u){return b[u]===void 0&&(b[u]=new Set,window.addEventListener(u,X)),b[u]}function k(u,s){let d=u.get(s);return d===void 0&&u.set(s,d=new Set),d}function F(u,s,d,g){const x=p[s][d];if(x!==void 0){const B=x.get(u);if(B!==void 0&&B.has(g))return!0}return!1}function T(u,s){const d=b[u];return!!(d!==void 0&&d.has(s))}function z(u,s,d,g){let x;if(typeof g=="object"&&g.once===!0?x=D=>{K(u,s,x,g),d(D)}:x=d,qt(u,s,x,g))return;const P=g===!0||typeof g=="object"&&g.capture===!0?"capture":"bubble",O=_(P,u),M=k(O,s);if(M.has(x)||M.add(x),s===window){const D=q(u);D.has(x)||D.add(x)}}function K(u,s,d,g){if(Jt(u,s,d,g))return;const B=g===!0||typeof g=="object"&&g.capture===!0,P=B?"capture":"bubble",O=_(P,u),M=k(O,s);if(s===window&&!F(s,B?"bubble":"capture",u,d)&&T(u,d)){const A=b[u];A.delete(d),A.size===0&&(window.removeEventListener(u,X),b[u]=void 0)}M.has(d)&&M.delete(d),M.size===0&&O.delete(s),O.size===0&&(window.removeEventListener(u,$,P==="capture"),p[P][u]=void 0)}return{on:z,off:K}}const{on:se,off:Q}=Kt();function Qn(e,t){return Te(e,n=>{n!==void 0&&(t.value=n)}),y(()=>e.value===void 0?t.value:e.value)}const Zt=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Qt(){return Zt}function ke(e,t){console.error(`[vueuc/${e}]: ${t}`)}var ee=[],en=function(){return ee.some(function(e){return e.activeTargets.length>0})},tn=function(){return ee.some(function(e){return e.skippedTargets.length>0})},De="ResizeObserver loop completed with undelivered notifications.",nn=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:De}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=De),window.dispatchEvent(e)},le;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(le||(le={}));var te=function(e){return Object.freeze(e)},rn=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,te(this)}return e}(),it=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,te(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,l=t.right,c=t.bottom,w=t.left,v=t.width,h=t.height;return{x:n,y:r,top:i,right:l,bottom:c,left:w,width:v,height:h}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Ee=function(e){return e instanceof SVGElement&&"getBBox"in e},ot=function(e){if(Ee(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,l=i.offsetWidth,c=i.offsetHeight;return!(l||c||e.getClientRects().length)},Le=function(e){var t,n;if(e instanceof Element)return!0;var r=(n=(t=e)===null||t===void 0?void 0:t.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},on=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},ae=typeof window!="undefined"?window:{},de=new WeakMap,Ne=/auto|scroll/,sn=/^tb|vertical/,an=/msie|trident/i.test(ae.navigator&&ae.navigator.userAgent),N=function(e){return parseFloat(e||"0")},ie=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new rn((n?t:e)||0,(n?e:t)||0)},Xe=te({devicePixelContentBoxSize:ie(),borderBoxSize:ie(),contentBoxSize:ie(),contentRect:new it(0,0,0,0)}),st=function(e,t){if(t===void 0&&(t=!1),de.has(e)&&!t)return de.get(e);if(ot(e))return de.set(e,Xe),Xe;var n=getComputedStyle(e),r=Ee(e)&&e.ownerSVGElement&&e.getBBox(),i=!an&&n.boxSizing==="border-box",l=sn.test(n.writingMode||""),c=!r&&Ne.test(n.overflowY||""),w=!r&&Ne.test(n.overflowX||""),v=r?0:N(n.paddingTop),h=r?0:N(n.paddingRight),p=r?0:N(n.paddingBottom),b=r?0:N(n.paddingLeft),j=r?0:N(n.borderTopWidth),G=r?0:N(n.borderRightWidth),$=r?0:N(n.borderBottomWidth),X=r?0:N(n.borderLeftWidth),_=b+h,q=v+p,k=X+G,F=j+$,T=w?e.offsetHeight-F-e.clientHeight:0,z=c?e.offsetWidth-k-e.clientWidth:0,K=i?_+k:0,u=i?q+F:0,s=r?r.width:N(n.width)-K-z,d=r?r.height:N(n.height)-u-T,g=s+_+z+k,x=d+q+T+F,B=te({devicePixelContentBoxSize:ie(Math.round(s*devicePixelRatio),Math.round(d*devicePixelRatio),l),borderBoxSize:ie(g,x,l),contentBoxSize:ie(s,d,l),contentRect:new it(b,v,s,d)});return de.set(e,B),B},at=function(e,t,n){var r=st(e,n),i=r.borderBoxSize,l=r.contentBoxSize,c=r.devicePixelContentBoxSize;switch(t){case le.DEVICE_PIXEL_CONTENT_BOX:return c;case le.BORDER_BOX:return i;default:return l}},ln=function(){function e(t){var n=st(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=te([n.borderBoxSize]),this.contentBoxSize=te([n.contentBoxSize]),this.devicePixelContentBoxSize=te([n.devicePixelContentBoxSize])}return e}(),lt=function(e){if(ot(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},un=function(){var e=1/0,t=[];ee.forEach(function(c){if(c.activeTargets.length!==0){var w=[];c.activeTargets.forEach(function(h){var p=new ln(h.target),b=lt(h.target);w.push(p),h.lastReportedSize=at(h.target,h.observedBox),b<e&&(e=b)}),t.push(function(){c.callback.call(c.observer,w,c.observer)}),c.activeTargets.splice(0,c.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},_e=function(e){ee.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(lt(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},cn=function(){var e=0;for(_e(e);en();)e=un(),_e(e);return tn()&&nn(),e>0},Se,ut=[],fn=function(){return ut.splice(0).forEach(function(e){return e()})},dn=function(e){if(!Se){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return fn()}).observe(n,r),Se=function(){n.textContent=""+(t?t--:t++)}}ut.push(e),Se()},hn=function(e){dn(function(){requestAnimationFrame(e)})},pe=0,vn=function(){return!!pe},pn=250,bn={attributes:!0,characterData:!0,childList:!0,subtree:!0},Fe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ae=function(e){return e===void 0&&(e=0),Date.now()+e},Re=!1,gn=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=pn),!Re){Re=!0;var r=Ae(t);hn(function(){var i=!1;try{i=cn()}finally{if(Re=!1,t=r-Ae(),!vn())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,bn)};document.body?n():ae.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Fe.forEach(function(n){return ae.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Fe.forEach(function(n){return ae.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),ye=new gn,Ve=function(e){!pe&&e>0&&ye.start(),pe+=e,!pe&&ye.stop()},mn=function(e){return!Ee(e)&&!on(e)&&getComputedStyle(e).display==="inline"},wn=function(){function e(t,n){this.target=t,this.observedBox=n||le.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=at(this.target,this.observedBox,!0);return mn(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),xn=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),he=new WeakMap,Ye=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},ve=function(){function e(){}return e.connect=function(t,n){var r=new xn(t,n);he.set(t,r)},e.observe=function(t,n,r){var i=he.get(t),l=i.observationTargets.length===0;Ye(i.observationTargets,n)<0&&(l&&ee.push(i),i.observationTargets.push(new wn(n,r&&r.box)),Ve(1),ye.schedule())},e.unobserve=function(t,n){var r=he.get(t),i=Ye(r.observationTargets,n),l=r.observationTargets.length===1;i>=0&&(l&&ee.splice(ee.indexOf(r),1),r.observationTargets.splice(i,1),Ve(-1))},e.disconnect=function(t){var n=this,r=he.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Sn=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ve.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Le(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ve.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Le(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ve.unobserve(this,t)},e.prototype.disconnect=function(){ve.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Rn{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new Sn(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}var Ue=new Rn,je=Je({name:"ResizeObserver",props:{onResize:Function},setup(e){return{registered:!1,handleResize(t){const{onResize:n}=e;n!==void 0&&n(t)}}},mounted(){const e=this.$el;if(e===void 0){ke("resize-observer","$el does not exist.");return}if(e.nextElementSibling!==e.nextSibling&&e.nodeType===3&&e.nodeValue!==""){ke("resize-observer","$el can not be observed (it may be a text node).");return}e.nextElementSibling!==null&&(Ue.registerHandler(e.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&Ue.unregisterHandler(this.$el.nextElementSibling)},render(){return Ht(this.$slots,"default")}});function er(e,t,n){var r;const i=Ke(e,null);if(i===null)return;const l=(r=Ct())===null||r===void 0?void 0:r.proxy;Te(n,c),c(n.value),ze(()=>{c(void 0,n.value)});function c(h,p){const b=i[t];p!==void 0&&w(b,p),h!==void 0&&v(b,h)}function w(h,p){h[p]||(h[p]=[]),h[p].splice(h[p].findIndex(b=>b===l),1)}function v(h,p){h[p]||(h[p]=[]),~h[p].findIndex(b=>b===l)||h[p].push(l)}}function tr(e,t,n){if(!t)return e;const r=E(e.value);let i=null;return Te(e,l=>{i!==null&&window.clearTimeout(i),l===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}const Ge=It("n-form-item");function nr(e,{defaultSize:t="medium",mergedSize:n,mergedDisabled:r}={}){const i=Ke(Ge,null);Pt(Ge,null);const l=y(n?()=>n(i):()=>{const{size:v}=e;if(v)return v;if(i){const{mergedSize:h}=i;if(h.value!==void 0)return h.value}return t}),c=y(r?()=>r(i):()=>{const{disabled:v}=e;return v!==void 0?v:i?i.disabled.value:!1}),w=y(()=>{const{status:v}=e;return v||(i==null?void 0:i.mergedValidationStatus.value)});return ze(()=>{i&&i.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:c,mergedStatusRef:w,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tn=/^\w*$/;function zn(e,t){if(Ze(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Qe(e)?!0:Tn.test(e)||!yn.test(e)||t!=null&&e in Object(t)}var En="Expected a function";function Be(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(En);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],l=n.cache;if(l.has(i))return l.get(i);var c=e.apply(this,r);return n.cache=l.set(i,c)||l,c};return n.cache=new(Be.Cache||et),n}Be.Cache=et;var Bn=500;function On(e){var t=Be(e,function(r){return n.size===Bn&&n.clear(),r}),n=t.cache;return t}var Mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hn=/\\(\\)?/g,Cn=On(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Mn,function(n,r,i,l){t.push(i?l.replace(Hn,"$1"):r||n)}),t}),Pn=Cn;function In(e,t){return Ze(e)?e:zn(e,t)?[e]:Pn(Wt(e))}var Wn=1/0;function $n(e){if(typeof e=="string"||Qe(e))return e;var t=e+"";return t=="0"&&1/e==-Wn?"-0":t}function kn(e,t){t=In(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[$n(t[n++])];return n&&n==r?e:void 0}function rr(e,t,n){var r=e==null?void 0:kn(e,t);return r===void 0?n:r}const{cubicBezierEaseInOut:qe}=$t;function Dn({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=qe,leaveCubicBezier:i=qe}={}){return[I(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),I(`&.${e}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),I(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),I(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}var Ln=ce("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[I(">",[ce("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[I("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),I(">",[ce("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),ce("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[xe("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[I(">",[fe("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),xe("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[I(">",[fe("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),xe("disabled",[I(">",[fe("scrollbar",{pointerEvents:"none"})])]),I(">",[fe("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Dn(),I("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const Nn=Object.assign(Object.assign({},tt.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),ct=Je({name:"Scrollbar",props:Nn,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=kt(e),r=E(null),i=E(null),l=E(null),c=E(null),w=E(null),v=E(null),h=E(null),p=E(null),b=E(null),j=E(null),G=E(null),$=E(0),X=E(0),_=E(!1),q=E(!1);let k=!1,F=!1,T,z,K=0,u=0,s=0,d=0;const g=Qt(),x=y(()=>{const{value:o}=p,{value:a}=v,{value:f}=j;return o===null||a===null||f===null?0:Math.min(o,f*o/a+e.size*1.5)}),B=y(()=>`${x.value}px`),P=y(()=>{const{value:o}=b,{value:a}=h,{value:f}=G;return o===null||a===null||f===null?0:f*o/a+e.size*1.5}),O=y(()=>`${P.value}px`),M=y(()=>{const{value:o}=p,{value:a}=$,{value:f}=v,{value:m}=j;if(o===null||f===null||m===null)return 0;{const R=f-o;return R?a/R*(m-x.value):0}}),D=y(()=>`${M.value}px`),A=y(()=>{const{value:o}=b,{value:a}=X,{value:f}=h,{value:m}=G;if(o===null||f===null||m===null)return 0;{const R=f-o;return R?a/R*(m-P.value):0}}),L=y(()=>`${A.value}px`),V=y(()=>{const{value:o}=p,{value:a}=v;return o!==null&&a!==null&&a>o}),J=y(()=>{const{value:o}=b,{value:a}=h;return o!==null&&a!==null&&a>o}),H=y(()=>{const{container:o}=e;return o?o():i.value}),be=y(()=>{const{content:o}=e;return o?o():l.value}),ft=Z,dt=o=>{const{onResize:a}=e;a&&a(o),Z()},ht=(o,a)=>{if(!e.scrollable)return;if(typeof o=="number"){ne(o,a!=null?a:0,0,!1,"auto");return}const{left:f,top:m,index:R,elSize:C,position:Y,behavior:S,el:U,debounce:oe=!0}=o;(f!==void 0||m!==void 0)&&ne(f!=null?f:0,m!=null?m:0,0,!1,S),U!==void 0?ne(0,U.offsetTop,U.offsetHeight,oe,S):R!==void 0&&C!==void 0?ne(0,R*C,C,oe,S):Y==="bottom"?ne(0,Number.MAX_SAFE_INTEGER,0,!1,S):Y==="top"&&ne(0,0,0,!1,S)},vt=(o,a)=>{if(!e.scrollable)return;const{value:f}=H;!f||(typeof o=="object"?f.scrollBy(o):f.scrollBy(o,a||0))};function ne(o,a,f,m,R){const{value:C}=H;if(!!C){if(m){const{scrollTop:Y,offsetHeight:S}=C;if(a>Y){a+f<=Y+S||C.scrollTo({left:o,top:a+f-S,behavior:R});return}}C.scrollTo({left:o,top:a,behavior:R})}}function pt(){wt(),xt(),Z()}function bt(){ge()}function ge(){gt(),mt()}function gt(){z!==void 0&&window.clearTimeout(z),z=window.setTimeout(()=>{q.value=!1},e.duration)}function mt(){T!==void 0&&window.clearTimeout(T),T=window.setTimeout(()=>{_.value=!1},e.duration)}function wt(){T!==void 0&&window.clearTimeout(T),_.value=!0}function xt(){z!==void 0&&window.clearTimeout(z),q.value=!0}function St(o){const{onScroll:a}=e;a&&a(o),Oe()}function Oe(){const{value:o}=H;o&&($.value=o.scrollTop,X.value=o.scrollLeft)}function Rt(){const{value:o}=be;o&&(v.value=o.offsetHeight,h.value=o.offsetWidth);const{value:a}=H;a&&(p.value=a.offsetHeight,b.value=a.offsetWidth);const{value:f}=w,{value:m}=c;f&&(G.value=f.offsetWidth),m&&(j.value=m.offsetHeight)}function Me(){const{value:o}=H;o&&($.value=o.scrollTop,X.value=o.scrollLeft,p.value=o.offsetHeight,b.value=o.offsetWidth,v.value=o.scrollHeight,h.value=o.scrollWidth);const{value:a}=w,{value:f}=c;a&&(G.value=a.offsetWidth),f&&(j.value=f.offsetHeight)}function Z(){!e.scrollable||(e.useUnifiedContainer?Me():(Rt(),Oe()))}function He(o){var a;return!(!((a=r.value)===null||a===void 0)&&a.contains(o.target))}function yt(o){o.preventDefault(),o.stopPropagation(),F=!0,se("mousemove",window,Ce,!0),se("mouseup",window,Pe,!0),u=X.value,s=o.clientX}function Ce(o){if(!F)return;T!==void 0&&window.clearTimeout(T),z!==void 0&&window.clearTimeout(z);const{value:a}=b,{value:f}=h,{value:m}=P;if(a===null||f===null)return;const C=(o.clientX-s)*(f-a)/(a-m),Y=f-a;let S=u+C;S=Math.min(Y,S),S=Math.max(S,0);const{value:U}=H;if(U){U.scrollLeft=S;const{internalOnUpdateScrollLeft:oe}=e;oe&&oe(S)}}function Pe(o){o.preventDefault(),o.stopPropagation(),Q("mousemove",window,Ce,!0),Q("mouseup",window,Pe,!0),F=!1,Z(),He(o)&&ge()}function Tt(o){o.preventDefault(),o.stopPropagation(),k=!0,se("mousemove",window,me,!0),se("mouseup",window,we,!0),K=$.value,d=o.clientY}function me(o){if(!k)return;T!==void 0&&window.clearTimeout(T),z!==void 0&&window.clearTimeout(z);const{value:a}=p,{value:f}=v,{value:m}=x;if(a===null||f===null)return;const C=(o.clientY-d)*(f-a)/(a-m),Y=f-a;let S=K+C;S=Math.min(Y,S),S=Math.max(S,0);const{value:U}=H;U&&(U.scrollTop=S)}function we(o){o.preventDefault(),o.stopPropagation(),Q("mousemove",window,me,!0),Q("mouseup",window,we,!0),k=!1,Z(),He(o)&&ge()}nt(()=>{const{value:o}=J,{value:a}=V,{value:f}=t,{value:m}=w,{value:R}=c;m&&(o?m.classList.remove(`${f}-scrollbar-rail--disabled`):m.classList.add(`${f}-scrollbar-rail--disabled`)),R&&(a?R.classList.remove(`${f}-scrollbar-rail--disabled`):R.classList.add(`${f}-scrollbar-rail--disabled`))}),Dt(()=>{e.container||Z()}),ze(()=>{T!==void 0&&window.clearTimeout(T),z!==void 0&&window.clearTimeout(z),Q("mousemove",window,me,!0),Q("mouseup",window,we,!0)});const zt=tt("Scrollbar","-scrollbar",Ln,Lt,e,t),Ie=y(()=>{const{common:{cubicBezierEaseInOut:o,scrollbarBorderRadius:a,scrollbarHeight:f,scrollbarWidth:m},self:{color:R,colorHover:C}}=zt.value;return{"--n-scrollbar-bezier":o,"--n-scrollbar-color":R,"--n-scrollbar-color-hover":C,"--n-scrollbar-border-radius":a,"--n-scrollbar-width":m,"--n-scrollbar-height":f}}),re=n?Nt("scrollbar",void 0,Ie,e):void 0;return Object.assign(Object.assign({},{scrollTo:ht,scrollBy:vt,sync:Z,syncUnifiedContainer:Me,handleMouseEnterWrapper:pt,handleMouseLeaveWrapper:bt}),{mergedClsPrefix:t,containerScrollTop:$,wrapperRef:r,containerRef:i,contentRef:l,yRailRef:c,xRailRef:w,needYBar:V,needXBar:J,yBarSizePx:B,xBarSizePx:O,yBarTopPx:D,xBarLeftPx:L,isShowXBar:_,isShowYBar:q,isIos:g,handleScroll:St,handleContentResize:ft,handleContainerResize:dt,handleYScrollMouseDown:Tt,handleXScrollMouseDown:yt,cssVars:n?void 0:Ie,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const i=()=>{var l,c;return(l=this.onRender)===null||l===void 0||l.call(this),W("div",Xt(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(c=t.default)===null||c===void 0?void 0:c.call(t):W("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},W(je,{onResize:this.handleContentResize},{default:()=>W("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),W("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},W(We,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?W("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),W("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},W(We,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?W("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():W(je,{onResize:this.handleContainerResize},{default:i})}});var ir=ct;const or=ct;function sr(e,t,n){if(!t)return;const r=_t(),i=y(()=>{const{value:c}=t;if(!c)return;const w=c[e];if(!!w)return w}),l=()=>{nt(()=>{const{value:c}=n,w=`${c}${e}Rtl`;if(Ut(w,r))return;const{value:v}=i;!v||v.style.mount({id:w,head:!0,anchorMetaName:At,props:{bPrefix:c?`.${c}-`:void 0},ssr:r})})};return r?l():Ft(l),i}export{Dn as A,ir as N,je as V,or as X,Gn as a,nr as b,sr as c,qn as d,Vt as e,Q as f,Vn as g,Zn as h,Jn as i,Kn as j,Un as k,rr as l,er as m,Ge as n,se as o,An as p,Fn as q,jn as r,In as s,$n as t,Qn as u,zn as v,kn as w,tr as x,Yn as y,Ue as z};
