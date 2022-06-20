import{c as F,a as C,b as u,d as r,e as $,u as E,f as k,g as R,h as A,i as N,j as v,F as P,k as D,l as V,r as y,o as T,m as j,n as l,w as p,p as B}from"./index.43587dd3.js";import{a as I}from"./request.d25d46f2.js";import{u as L,_ as M,a as O,b as U,N as Z}from"./use-message.182b55a2.js";import"./use-rtl.ed50d0c0.js";var q=F("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[C("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[C("no-title",`
 display: flex;
 align-items: center;
 `)]),u("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[u("line",[r("left",{width:"28px"})])]),r("title-position-right",[u("line",[r("right",{width:"28px"})])]),r("dashed",[u("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),u("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),C("dashed",[u("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[u("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]);const S=Object.assign(Object.assign({},k.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var G=$({name:"Divider",props:S,setup(o){const{mergedClsPrefixRef:i,inlineThemeDisabled:d}=E(o),s=k("Divider","-divider",q,R,o,i),c=A(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:n,textColor:h,fontWeight:b}}=s.value;return{"--n-bezier":e,"--n-color":n,"--n-text-color":h,"--n-font-weight":b}}),t=d?N("divider",void 0,c,o):void 0;return{mergedClsPrefix:i,cssVars:d?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{$slots:i,titlePlacement:d,vertical:s,dashed:c,cssVars:t,mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),v("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:s,[`${e}-divider--no-title`]:!i.default,[`${e}-divider--dashed`]:c,[`${e}-divider--title-position-${d}`]:i.default&&d}],style:t},s?null:v("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!s&&i.default?v(P,null,v("div",{class:`${e}-divider__title`},this.$slots),v("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});const H={class:"login-page glass-bg"},W=B(" \u767B\u5F55 "),J=B(" \u5377\u5377\u5377\u5377\u5377\u5377 "),K=B(" \u6CE8\u518C\u4E00\u4E2A\u8D26\u6237\u5427 "),te=$({name:"login",setup(o){const i=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,d=D(),s=V(),c=L(),t=y(null),e={email:[{required:!0,validator(_,a){return i.test(a)},message:"\u8BF7\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},n=y({email:"",password:""});function h(){var _;(_=t.value)==null||_.validate(async a=>{if(a)c.error("\u9A8C\u8BC1\u5931\u8D25");else{const m=await I.toLogin(n.value);if(m.code===200){const{email:g,userId:f,token:x}=m.data;d.savaUserInfo(g,f,x),s.push("/company")}}})}function b(){s.push("/register")}return(_,a)=>{const m=O,g=U,f=Z,x=G,z=M;return T(),j("div",H,[l(z,{ref_key:"formRef",ref:t,class:"glass-card",size:"large",rules:e,model:n.value,"label-placement":"left"},{default:p(()=>[l(g,{path:"email",label:""},{default:p(()=>[l(m,{value:n.value.email,"onUpdate:value":a[0]||(a[0]=w=>n.value.email=w),"input-props":{type:"email"},placeholder:"\u8BF7\u8F93\u5165\u6CE8\u518C\u7684\u90AE\u7BB1"},null,8,["value"])]),_:1}),l(g,{path:"password",label:""},{default:p(()=>[l(m,{value:n.value.password,"onUpdate:value":a[1]||(a[1]=w=>n.value.password=w),type:"password","show-password-on":"click",autocomplete:"new-password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1}),l(f,{round:"",onClick:h},{default:p(()=>[W]),_:1}),l(x,{dashed:""},{default:p(()=>[J]),_:1}),l(f,{text:"",type:"info",onClick:b},{default:p(()=>[K]),_:1})]),_:1},8,["model"])])}}});export{te as default};
