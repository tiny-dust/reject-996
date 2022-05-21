import{g as H,j as c,k as x,l as _e,m as W,n as d,p as $e,r as Pe,t as u,h as q,v as B,x as M,b,i as L,y as Te,z as Ae,A as R,B as V,D as re,E as Z,F as ke,G as ve,H as ue,I as Ne,e as me,o as he,J as He,K as Q,R as Ee,L as Oe,c as Be,w as D,M as K,a as Fe}from"./index.79757e06.js";import{t as je,u as Y,c as Me,r as Le,V as Ke,N as fe,a as pe,C as Ve,f as ee,b as te,d as F,e as U,g as De,h as Ue,i as We,k as ne,j as oe,l as Ge,m as qe,n as Ye}from"./Dropdown.7f7bd1fc.js";import{c as Xe,_ as Je}from"./Space.b79fa386.js";var Ze=H({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const{cubicBezierEaseInOut:j,cubicBezierEaseOut:Qe,cubicBezierEaseIn:eo}=_e;function oo({overflow:e="hidden",duration:o=".3s",originalTransition:t="",leavingDelay:i="0s",foldPadding:a=!1,enterToProps:s=void 0,leaveToProps:f=void 0,reverse:h=!1}={}){const l=h?"leave":"enter",z=h?"enter":"leave";return[x(`&.fade-in-height-expand-transition-${z}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},s),{opacity:1})),x(`&.fade-in-height-expand-transition-${z}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},f),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),x(`&.fade-in-height-expand-transition-${z}-active`,`
 overflow: ${e};
 transition:
 max-height ${o} ${j} ${i},
 opacity ${o} ${Qe} ${i},
 margin-top ${o} ${j} ${i},
 margin-bottom ${o} ${j} ${i},
 padding-top ${o} ${j} ${i},
 padding-bottom ${o} ${j} ${i}
 ${t?","+t:""}
 `),x(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${o} ${j},
 opacity ${o} ${eo},
 margin-top ${o} ${j},
 margin-bottom ${o} ${j},
 padding-top ${o} ${j},
 padding-bottom ${o} ${j}
 ${t?","+t:""}
 `)]}const to=W("n-avatar-group");var ro=d("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[$e(x("&","--n-merged-color: var(--n-color-modal);")),Pe(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),u("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),d("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),u("text","line-height: 1.25")]);const no=Object.assign(Object.assign({},L.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var io=H({name:"Avatar",props:no,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),i=B(!1);let a=null;const s=B(null),f=B(null),h=()=>{const{value:p}=s;if(p&&(a===null||a!==p.innerHTML)){a=p.innerHTML;const{value:y}=f;if(y){const{offsetWidth:C,offsetHeight:w}=y,{offsetWidth:A,offsetHeight:E}=p,O=.9,v=Math.min(C/A*O,w/E*O,1);p.style.transform=`translateX(-50%) translateY(-50%) scale(${v})`}}},l=M(to,null),z=b(()=>{const{size:p}=e;if(p)return p;const{size:y}=l||{};return y||"medium"}),$=L("Avatar","-avatar",ro,Te,e,o),g=M(je,null),m=b(()=>{if(l)return!0;const{round:p,circle:y}=e;return p!==void 0||y!==void 0?p||y:g?g.roundRef.value:!1}),I=b(()=>l?!0:e.bordered||!1),P=p=>{i.value=!0;const{onError:y}=e;y&&y(p)};Ae(()=>e.src,()=>i.value=!1);const N=b(()=>{const p=z.value,y=m.value,C=I.value,{color:w}=e,{self:{borderRadius:A,fontSize:E,color:O,border:v,colorModal:S,colorPopover:r},common:{cubicBezierEaseInOut:_}}=$.value;let k;return typeof p=="number"?k=`${p}px`:k=$.value.self[Xe("height",p)],{"--n-font-size":E,"--n-border":C?v:"none","--n-border-radius":y?"50%":A,"--n-color":w||O,"--n-color-modal":w||S,"--n-color-popover":w||r,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${k})`}}),T=t?Y("avatar",b(()=>{const p=z.value,y=m.value,C=I.value,{color:w}=e;let A="";return p&&(typeof p=="number"?A+=`a${p}`:A+=p[0]),y&&(A+="b"),C&&(A+="c"),w&&(A+=Me(w)),A}),N,e):void 0;return{textRef:s,selfRef:f,mergedRoundRef:m,mergedClsPrefix:o,fitTextTransform:h,cssVars:t?void 0:N,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,hasLoadError:i,handleError:P}},render(){const{$slots:e,src:o,mergedClsPrefix:t,onRender:i}=this;i==null||i();let a;return this.hasLoadError?a=c("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):a=Le(e.default,s=>{if(s)return c(Ke,{onResize:this.fitTextTransform},{default:()=>c("span",{ref:"textRef",class:`${t}-avatar__text`},s)});if(o)return c("img",{src:o,onError:this.handleError,style:{objectFit:this.objectFit}})}),c("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},a)}}),lo=d("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[d("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const ge=W("n-layout-sider"),ie={type:String,default:"static"},ao={embedded:Boolean,position:ie,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},be=W("n-layout");function xe(e){return H({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},L.props),ao),setup(o){const t=B(null),i=B(null),{mergedClsPrefixRef:a,inlineThemeDisabled:s}=q(o),f=L("Layout","-layout",lo,re,o,a);function h(m,I){if(o.nativeScrollbar){const{value:P}=t;P&&(I===void 0?P.scrollTo(m):P.scrollTo(m,I))}else{const{value:P}=i;P&&P.scrollTo(m,I)}}V(be,o);const l={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},z={scrollTo:h},$=b(()=>{const{common:{cubicBezierEaseInOut:m},self:I}=f.value;return{"--n-bezier":m,"--n-color":o.embedded?I.colorEmbedded:I.color,"--n-text-color":I.textColor}}),g=s?Y("layout",void 0,$,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:i,hasSiderStyle:l,mergedTheme:f,cssVars:s?void 0:$,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},z)},render(){var o;const{mergedClsPrefix:t,hasSider:i}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=i?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return c("div",{class:s,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.onScroll},this.$slots):c(fe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var co=xe(!1),so=xe(!0),uo=d("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),R("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const mo={position:ie,inverted:Boolean,bordered:{type:Boolean,default:!1}};var vo=H({name:"LayoutHeader",props:Object.assign(Object.assign({},L.props),mo),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),i=L("Layout","-layout-header",uo,re,e,o),a=b(()=>{const{common:{cubicBezierEaseInOut:f},self:h}=i.value,l={"--n-bezier":f};return e.inverted?(l["--n-color"]=h.headerColorInverted,l["--n-text-color"]=h.textColorInverted,l["--n-border-color"]=h.headerBorderColorInverted):(l["--n-color"]=h.headerColor,l["--n-text-color"]=h.textColor,l["--n-border-color"]=h.headerBorderColor),l}),s=t?Y("layout-header",b(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ho=d("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[R("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[R("bordered",[u("border",`
 right: 0;
 `)])]),R("right-placement",`
 justify-content: flex-start;
 `,[R("bordered",[u("border",`
 left: 0;
 `)]),R("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[x("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),R("collapsed",[d("layout-toggle-bar",[x("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),R("show-content",[d("layout-sider-scroll-container",{opacity:1})]),R("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),fo=H({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(pe,{clsPrefix:e},{default:()=>c(Ve,null)}))}}),po=H({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const go={position:ie,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var bo=H({name:"LayoutSider",props:Object.assign(Object.assign({},L.props),go),setup(e){const o=M(be),t=B(null),i=B(null),a=b(()=>ee(l.value?e.collapsedWidth:e.width)),s=b(()=>e.collapseMode!=="transform"?{}:{minWidth:ee(e.width)}),f=b(()=>o?o.siderPlacement:"left"),h=B(e.defaultCollapsed),l=te(Z(e,"collapsed"),h);function z(y,C){if(e.nativeScrollbar){const{value:w}=t;w&&(C===void 0?w.scrollTo(y):w.scrollTo(y,C))}else{const{value:w}=i;w&&w.scrollTo(y,C)}}function $(){const{"onUpdate:collapsed":y,onUpdateCollapsed:C,onExpand:w,onCollapse:A}=e,{value:E}=l;C&&F(C,!E),y&&F(y,!E),h.value=!E,E?w&&F(w):A&&F(A)}V(ge,{collapsedRef:l,collapseModeRef:Z(e,"collapseMode")});const{mergedClsPrefixRef:g,inlineThemeDisabled:m}=q(e),I=L("Layout","-layout-sider",ho,re,e,g);function P(y){var C,w;y.propertyName==="max-width"&&(l.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const N={scrollTo:z},T=b(()=>{const{common:{cubicBezierEaseInOut:y},self:C}=I.value,{siderToggleButtonColor:w,siderToggleButtonBorder:A,siderToggleBarColor:E,siderToggleBarColorHover:O}=C,v={"--n-bezier":y,"--n-toggle-button-color":w,"--n-toggle-button-border":A,"--n-toggle-bar-color":E,"--n-toggle-bar-color-hover":O};return e.inverted?(v["--n-color"]=C.siderColorInverted,v["--n-text-color"]=C.textColorInverted,v["--n-border-color"]=C.siderBorderColorInverted,v["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,v.__invertScrollbar=C.__invertScrollbar):(v["--n-color"]=C.siderColor,v["--n-text-color"]=C.textColor,v["--n-border-color"]=C.siderBorderColor,v["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),v}),p=m?Y("layout-sider",b(()=>e.inverted?"a":"b"),T,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:i,mergedClsPrefix:g,mergedTheme:I,styleMaxWidth:a,mergedCollapsed:l,scrollContainerStyle:s,siderPlacement:f,handleTransitionend:P,handleTriggerClick:$,inlineThemeDisabled:m,cssVars:T,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},N)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ee(this.width)}]},this.nativeScrollbar?c("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(fe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?c(po,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(fo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}});const X=W("n-menu"),le=W("n-submenu"),ae=W("n-menu-item-group"),J=8;function ce(e){const o=M(X),{props:t,mergedCollapsedRef:i}=o,a=M(le,null),s=M(ae,null),f=b(()=>t.mode==="horizontal"),h=b(()=>f.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=b(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),z=b(()=>{var m;return!f.value&&e.root&&i.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),$=b(()=>{if(f.value)return;const{collapsedWidth:m,indent:I,rootIndent:P}=t,{root:N,isGroup:T}=e,p=P===void 0?I:P;if(N)return i.value?m/2-l.value/2:p;if(s)return I/2+s.paddingLeftRef.value;if(a)return(T?I/2:I)+a.paddingLeftRef.value}),g=b(()=>{const{collapsedWidth:m,indent:I,rootIndent:P}=t,{value:N}=l,{root:T}=e;return f.value||!T||!i.value?J:(P===void 0?I:P)+N+J-(m+N)/2});return{dropdownPlacement:h,activeIconSize:z,maxIconSize:l,paddingLeft:$,iconMarginRight:g,NMenu:o,NSubmenu:a}}const se={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},se),{tmNodes:{type:Array,required:!0}}),xo=H({name:"MenuOptionGroup",props:ye,setup(e){V(le,null);const o=ce(e);V(ae,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:i}=M(X);return function(){const{value:a}=t,s=o.paddingLeft.value;return c("div",{class:`${a}-menu-item-group`,role:"group"},c("span",{class:`${a}-menu-item-group-title`,style:s!==void 0?`padding-left: ${s}px;`:void 0},U(e.title),e.extra?c(ke,null," ",U(e.extra)):null),c("div",null,e.tmNodes.map(f=>de(f,i))))}}});var Ce=H({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=M(X);return{menuProps:o,style:b(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:b(()=>{const{maxIconSize:t,activeIconSize:i,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${i}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:i,renderExtra:a,expandIcon:s,nodeProps:f}}=this,h=t?t(o.rawNode):U(this.icon),l=f==null?void 0:f(o.rawNode);return c("div",Object.assign({},l,{onClick:z=>{var $,g;($=l==null?void 0:l.onClick)===null||$===void 0||$.call(l,z),(g=this.onClick)===null||g===void 0||g.call(this,z)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover},l==null?void 0:l.class],style:[this.style,(l==null?void 0:l.style)||""]}),h&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(o.rawNode):U(this.title),this.extra||a?c("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):U(this.extra)):null),this.showArrow?c(pe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>s?s(o.rawNode):c(Ze,null)}):null)}});const ze=Object.assign(Object.assign({},se),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),yo=H({name:"Submenu",props:ze,setup(e){const o=ce(e),{NMenu:t,NSubmenu:i}=o,{props:a,mergedCollapsedRef:s,mergedThemeRef:f}=t,h=b(()=>{const{disabled:m}=e;return i!=null&&i.mergedDisabledRef.value||a.disabled?!0:m}),l=B(!1);V(le,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:h}),V(ae,null);function z(){const{onClick:m}=e;m&&m()}function $(){h.value||(s.value||t.toggleExpand(e.internalKey),z())}function g(m){l.value=m}return{menuProps:a,mergedTheme:f,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:l,paddingLeft:o.paddingLeft,mergedDisabled:h,mergedValue:t.mergedValueRef,childActive:ve(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>a.mode==="horizontal"?!1:s.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!h.value&&(a.mode==="horizontal"||s.value)),handlePopoverShowChange:g,handleClick:$}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:i}}=this,a=()=>{const{isHorizontal:f,paddingLeft:h,collapsed:l,mergedDisabled:z,maxIconSize:$,activeIconSize:g,title:m,childActive:I,icon:P,handleClick:N,dropdownShow:T,iconMarginRight:p,tmNode:y}=this;return c(Ce,{tmNode:y,paddingLeft:h,collapsed:l,disabled:z,iconMarginRight:p,maxIconSize:$,activeIconSize:g,title:m,showArrow:!f,childActive:I,clsPrefix:o,icon:P,hover:T,onClick:N})},s=()=>c(De,null,{default:()=>{const{tmNodes:f,collapsed:h}=this;return h?null:c("div",{class:`${o}-submenu-children`,role:"menu"},f.map(l=>de(l,this.menuProps)))}});return this.root?c(Ue,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:i}),{default:()=>c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:s())}):c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),s())}}),we=Object.assign(Object.assign({},se),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Co=H({name:"MenuOption",props:we,setup(e){const o=ce(e),{NSubmenu:t,NMenu:i}=o,{props:a,mergedClsPrefixRef:s,mergedCollapsedRef:f}=i,h=t?t.mergedDisabledRef:{value:!1},l=b(()=>h.value||e.disabled);function z(g){const{onClick:m}=e;m&&m(g)}function $(g){l.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),z(g))}return{mergedClsPrefix:s,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:a,dropdownEnabled:ve(()=>e.root&&f.value&&a.mode!=="horizontal"&&!l.value),selected:b(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:$}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:i}}=this;return c("div",{role:"menuitem",class:[`${e}-menu-item`]},c(We,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(t.rawNode):U(this.title),trigger:()=>c(Ce,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var zo=H({name:"MenuDivider",setup(){const e=M(X),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${o.value}-menu-divider`})}});const wo=ne(ye),So=ne(we),Io=ne(ze);function Ro(e){return e.type==="divider"||e.type==="render"}function _o(e){return e.type==="divider"}function de(e,o){const{rawNode:t}=e;if(Ro(t))return _o(t)?c(zo,Object.assign({key:e.key},t.props)):void 0;const{labelField:i}=o,{key:a,level:s,isGroup:f}=e,h=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:a,internalKey:a,level:s,root:s===0,isGroup:f});return e.children?e.isGroup?c(xo,oe(h,wo,{tmNodes:e.children,key:a})):c(yo,oe(h,Io,{key:a,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):c(Co,oe(h,So,{key:a,tmNode:e}))}var $o=x([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[R("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ue("disabled",[R("selected, child-active",[G(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),G("border-bottom: 2px solid var(--n-border-color-horizontal);",[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),d("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),R("collapsed",[d("menu-item",[R("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),d("menu-item-content",[d("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),d("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),d("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[u("arrow","transform: rotate(0);")]),R("selected",[x("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ue("disabled",[R("selected, child-active",[G(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),R("selected",[G(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),G(null,[x("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),u("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),d("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),d("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[d("menu-item-content",`
 height: var(--n-item-height);
 `),d("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[oo({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),d("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function G(e,o){return[R("hover",e,o),x("&:hover",e,o)]}const Po=Object.assign(Object.assign({},L.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var To=H({name:"Menu",props:Po,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),i=L("Menu","-menu",$o,Ne,e,o),a=M(ge,null),s=b(()=>{var v;const{collapsed:S}=e;if(S!==void 0)return S;if(a){const{collapseModeRef:r,collapsedRef:_}=a;if(r.value==="width")return(v=_.value)!==null&&v!==void 0?v:!1}return!1}),f=b(()=>{const{keyField:v,childrenField:S}=e;return Ge(e.items||e.options,{getChildren(r){return r[S]},getKey(r){var _;return(_=r[v])!==null&&_!==void 0?_:r.name}})}),h=b(()=>new Set(f.value.treeNodes.map(v=>v.key))),{watchProps:l}=e,z=B(null);l!=null&&l.includes("defaultValue")?me(()=>{z.value=e.defaultValue}):z.value=e.defaultValue;const $=Z(e,"value"),g=te($,z),m=B([]),I=()=>{m.value=e.defaultExpandAll?f.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||f.value.getPath(g.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?me(I):I();const P=qe(e,["expandedNames","expandedKeys"]),N=te(P,m),T=b(()=>f.value.treeNodes),p=b(()=>f.value.getPath(g.value).keyPath);V(X,{props:e,mergedCollapsedRef:s,mergedThemeRef:i,mergedValueRef:g,mergedExpandedKeysRef:N,activePathRef:p,mergedClsPrefixRef:o,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:Z(e,"inverted"),doSelect:y,toggleExpand:w});function y(v,S){const{"onUpdate:value":r,onUpdateValue:_,onSelect:k}=e;_&&F(_,v,S),r&&F(r,v,S),k&&F(k,v,S),z.value=v}function C(v){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:r,onExpandedNamesChange:_,onOpenNamesChange:k}=e;S&&F(S,v),r&&F(r,v),_&&F(_,v),k&&F(k,v),m.value=v}function w(v){const S=Array.from(N.value),r=S.findIndex(_=>_===v);if(~r)S.splice(r,1);else{if(e.accordion&&h.value.has(v)){const _=S.findIndex(k=>h.value.has(k));_>-1&&S.splice(_,1)}S.push(v)}C(S)}const A=v=>{const S=f.value.getPath(v!=null?v:g.value,{includeSelf:!1}).keyPath;if(!S.length)return;const r=Array.from(N.value),_=new Set([...r,...S]);e.accordion&&h.value.forEach(k=>{_.has(k)&&!S.includes(k)&&_.delete(k)}),C(Array.from(_))},E=b(()=>{const{inverted:v}=e,{common:{cubicBezierEaseInOut:S},self:r}=i.value,{borderRadius:_,borderColorHorizontal:k,fontSize:Se,itemHeight:Ie,dividerColor:Re}=r,n={"--n-divider-color":Re,"--n-bezier":S,"--n-font-size":Se,"--n-border-color-horizontal":k,"--n-border-radius":_,"--n-item-height":Ie};return v?(n["--n-group-text-color"]=r.groupTextColorInverted,n["--n-color"]=r.colorInverted,n["--n-item-text-color"]=r.itemTextColorInverted,n["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,n["--n-item-text-color-active"]=r.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=r.itemIconColorInverted,n["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,n["--n-arrow-color"]=r.arrowColorInverted,n["--n-arrow-color-hover"]=r.arrowColorHoverInverted,n["--n-arrow-color-active"]=r.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,n["--n-item-color-hover"]=r.itemColorHoverInverted,n["--n-item-color-active"]=r.itemColorActiveInverted,n["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=r.groupTextColor,n["--n-color"]=r.color,n["--n-item-text-color"]=r.itemTextColor,n["--n-item-text-color-hover"]=r.itemTextColorHover,n["--n-item-text-color-active"]=r.itemTextColorActive,n["--n-item-text-color-child-active"]=r.itemTextColorChildActive,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,n["--n-item-icon-color"]=r.itemIconColor,n["--n-item-icon-color-hover"]=r.itemIconColorHover,n["--n-item-icon-color-active"]=r.itemIconColorActive,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,n["--n-arrow-color"]=r.arrowColor,n["--n-arrow-color-hover"]=r.arrowColorHover,n["--n-arrow-color-active"]=r.arrowColorActive,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,n["--n-arrow-color-child-active"]=r.arrowColorChildActive,n["--n-item-color-hover"]=r.itemColorHover,n["--n-item-color-active"]=r.itemColorActive,n["--n-item-color-active-hover"]=r.itemColorActiveHover,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),n}),O=t?Y("menu",b(()=>e.inverted?"a":"b"),E,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:P,uncontrolledExpanededKeys:m,mergedExpandedKeys:N,uncontrolledValue:z,mergedValue:g,activePath:p,tmNodes:T,mergedTheme:i,mergedCollapsed:s,cssVars:t?void 0:E,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender,showOption:A}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:i}=this;return i==null||i(),c("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>de(a,this.$props)))}});const Ao={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ko=Q("path",{d:"M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36l30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.08 213.08 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0 0 56.93 240h93.18z",fill:"currentColor"},null,-1),No=Q("path",{d:"M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36l-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84z",fill:"currentColor"},null,-1),Ho=Q("path",{d:"M464 272h-21.35a260.11 260.11 0 0 1-18.25 32H464a16 16 0 0 0 0-32z",fill:"currentColor"},null,-1),Eo=Q("path",{d:"M48 240a16 16 0 0 0 0 32h21.35a225.22 225.22 0 0 1-12.42-32z",fill:"currentColor"},null,-1),Oo=[ko,No,Ho,Eo];var Bo=H({name:"Fitness",render:function(o,t){return he(),He("svg",Ao,Oo)}});const Fo=(e,o)=>c(Ee,{to:{path:e}},{default:()=>o||"\u7A7A\u7A7A\u5982\u4E5F"});function jo(e){return()=>c(Ye,null,{default:()=>c(e)})}const Mo=Fe(" \u5C0F\u5377\u6751 "),Do=H({name:"baseLayout",setup(e){const o=B(!1),t=[{label:()=>Fo("/company/list","\u5185\u5377\u4E4B\u738B"),key:"/company/list",icon:jo(Bo)}];return(i,a)=>{const s=io,f=Je,h=To,l=bo,z=vo,$=Oe("router-view"),g=so,m=co;return he(),Be(m,{"has-sider":"",class:"base-layout_wrapper"},{default:D(()=>[K(l,{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":64,width:240,"native-scrollbar":!1,inverted:o.value,"content-style":"padding:24px 0"},{default:D(()=>[K(f,{justify:"center"},{default:D(()=>[K(s,{round:"",size:48},{default:D(()=>[Mo]),_:1})]),_:1}),K(h,{inverted:o.value,"collapsed-width":64,"collapsed-icon-size":22,options:t},null,8,["inverted"])]),_:1},8,["inverted"]),K(m,null,{default:D(()=>[K(z,{bordered:"",style:{height:"60px"}}),K(g,{embedded:"","content-style":"padding: 12px;"},{default:D(()=>[K($)]),_:1})]),_:1})]),_:1})}}});export{Do as default};
