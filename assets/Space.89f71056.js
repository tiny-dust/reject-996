import{a as z,F as A,C as M,q as j,u as B,b as x,d as C,e as E,f as P,g as T,h as W,i as w,j as y,s as _}from"./index.0f48c180.js";function b(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function V(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function D(e,r){const n=e.trim().split(/\s+/g),t={top:n[0]};switch(n.length){case 1:t.right=n[0],t.bottom=n[0],t.left=n[0];break;case 2:t.right=n[1],t.left=n[1],t.bottom=n[0];break;case 3:t.right=n[1],t.bottom=n[2],t.left=n[1];break;case 4:t.right=n[1],t.bottom=n[2],t.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return r===void 0?t:t[r]}function k(e,r){const[n,t]=e.split(" ");return r?r==="row"?n:t:{row:n,col:t||n}}function G(e,r="default",n=[]){const o=e.$slots[r];return o===void 0?n:o()}function d(e,r=!0,n=[]){return e.forEach(t=>{if(t!==null){if(typeof t!="object"){(typeof t=="string"||typeof t=="number")&&n.push(z(String(t)));return}if(Array.isArray(t)){d(t,r,n);return}if(t.type===A){if(t.children===null)return;Array.isArray(t.children)&&d(t.children,r,n)}else t.type!==M&&n.push(t)}}),n}function L(e,r){if(e===void 0)return!1;if(r){const{context:{ids:n}}=r;return n.has(e)}return j(e)!==null}function S(e,r){return e+(r==="default"?"":r.replace(/^[a-z]/,n=>n.toUpperCase()))}S("abc","def");function O(e,r,n){if(!r)return;const t=B(),o=x(()=>{const{value:i}=r;if(!i)return;const s=i[e];if(!!s)return s}),a=()=>{E(()=>{const{value:i}=n,s=`${i}${e}Rtl`;if(L(s,t))return;const{value:c}=o;!c||c.style.mount({id:s,head:!0,anchorMetaName:P,props:{bPrefix:i?`.${i}-`:void 0},ssr:t})})};return t?a():C(a),o}const q=Object.assign(Object.assign({},w.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var H=T({name:"Space",props:q,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:n}=W(e),t=w("Space","-space",void 0,_,e,r);return{rtlEnabled:O("Space",n,r),mergedClsPrefix:r,margin:x(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[S("gap",a)]:i}}=t.value,{row:s,col:c}=k(i);return{horizontal:b(c),vertical:b(s)}})}},render(){const{vertical:e,align:r,inline:n,justify:t,itemStyle:o,margin:a,wrap:i,mergedClsPrefix:s,rtlEnabled:c}=this,m=d(G(this));if(!m.length)return null;const h=`${a.horizontal}px`,p=`${a.horizontal/2}px`,$=`${a.vertical}px`,f=`${a.vertical/2}px`,u=m.length-1,g=t.startsWith("space-");return y("div",{role:"none",class:[`${s}-space`,c&&`${s}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!i||e?"nowrap":"wrap",marginTop:e?"":`-${f}`,marginBottom:e?"":`-${f}`,alignItems:r}},m.map((R,l)=>y("div",{role:"none",style:[o,{maxWidth:"100%"},e?{marginBottom:l!==u?$:""}:c?{marginLeft:g?t==="space-between"&&l===u?"":p:l!==u?h:"",marginRight:g?t==="space-between"&&l===0?"":p:"",paddingTop:f,paddingBottom:f}:{marginRight:g?t==="space-between"&&l===u?"":p:l!==u?h:"",marginLeft:g?t==="space-between"&&l===0?"":p:"",paddingTop:f,paddingBottom:f}]},R)))}});export{H as _,G as a,S as c,b as d,d as f,D as g,V as p,O as u};
