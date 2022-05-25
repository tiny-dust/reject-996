import{j as R,B as C,A as u,z as a,d as $,H as E,D as k,Y as F,G as A,L as D,p as v,R as N,u as P,f as V,r as y,b as L,c as T,g as l,w as p,i as B}from"./index.299be698.js";import{u as j,a as I,_ as M}from"./request.a96656e3.js";import{_ as O,a as U}from"./FormItem.8aeb271d.js";import{N as Z}from"./Button.8277e641.js";import"./use-rtl.188806cf.js";import"./ScrollBar.fd604f4a.js";var q=R("divider",`
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
 `),a("title-position-left",[u("line",[a("left",{width:"28px"})])]),a("title-position-right",[u("line",[a("right",{width:"28px"})])]),a("dashed",[u("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),a("vertical",`
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
 `),C("dashed",[u("line",{backgroundColor:"var(--n-color)"})]),a("dashed",[u("line",{borderColor:"var(--n-color)"})]),a("vertical",{backgroundColor:"var(--n-color)"})]);const G=Object.assign(Object.assign({},k.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var H=$({name:"Divider",props:G,setup(o){const{mergedClsPrefixRef:i,inlineThemeDisabled:d}=E(o),s=k("Divider","-divider",q,F,o,i),c=A(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:n,textColor:h,fontWeight:b}}=s.value;return{"--n-bezier":e,"--n-color":n,"--n-text-color":h,"--n-font-weight":b}}),t=d?D("divider",void 0,c,o):void 0;return{mergedClsPrefix:i,cssVars:d?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{$slots:i,titlePlacement:d,vertical:s,dashed:c,cssVars:t,mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),v("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:s,[`${e}-divider--no-title`]:!i.default,[`${e}-divider--dashed`]:c,[`${e}-divider--title-position-${d}`]:i.default&&d}],style:t},s?null:v("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!s&&i.default?v(N,null,v("div",{class:`${e}-divider__title`},this.$slots),v("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});const S={class:"login-page glass-bg"},W=B(" \u767B\u5F55 "),Y=B(" \u5377\u5377\u5377\u5377\u5377\u5377 "),J=B(" \u6CE8\u518C\u4E00\u4E2A\u8D26\u6237\u5427 "),ie=$({name:"login",setup(o){const i=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,d=P(),s=V(),c=j(),t=y(null),e={email:[{required:!0,validator(_,r){return i.test(r)},message:"\u8BF7\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},n=y({email:"",password:""});function h(){var _;(_=t.value)==null||_.validate(async r=>{if(r)c.error("\u9A8C\u8BC1\u5931\u8D25");else{const m=await I.toLogin(n.value);if(m.code===200){const{email:g,userId:f,token:x}=m.data;d.savaUserInfo(g,f,x),s.push("/company")}}})}function b(){s.push("/register")}return(_,r)=>{const m=M,g=U,f=Z,x=H,z=O;return L(),T("div",S,[l(z,{ref_key:"formRef",ref:t,class:"glass-card",size:"large",rules:e,model:n.value,"label-placement":"left"},{default:p(()=>[l(g,{path:"email",label:""},{default:p(()=>[l(m,{value:n.value.email,"onUpdate:value":r[0]||(r[0]=w=>n.value.email=w),"input-props":{type:"email"},placeholder:"\u8BF7\u8F93\u5165\u6CE8\u518C\u7684\u90AE\u7BB1"},null,8,["value"])]),_:1}),l(g,{path:"password",label:""},{default:p(()=>[l(m,{value:n.value.password,"onUpdate:value":r[1]||(r[1]=w=>n.value.password=w),type:"password","show-password-on":"click",autocomplete:"new-password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1}),l(f,{round:"",onClick:h},{default:p(()=>[W]),_:1}),l(x,{dashed:""},{default:p(()=>[Y]),_:1}),l(f,{text:"",type:"info",onClick:b},{default:p(()=>[J]),_:1})]),_:1},8,["model"])])}}});export{ie as default};
