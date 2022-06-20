import{e as E,j as s,G as q,c as m,ac as De,A as _,ad as Ue,b as n,u as Y,r as H,q as V,h as p,f as j,ae as We,L as Se,P as D,i as X,d as C,M as W,af as ve,C as Re,x as oe,ag as G,F as Ge,H as _e,T as qe,a as ne,ah as Ye,ai as Xe,K as ze,B as we,aj as Ze,N as Je,D as Qe,ak as eo,k as oo,al as to,am as ro,I as no,an as io,o as lo,ao,w as M,n as L,ap as co,p as me}from"./index.b8b4af24.js";import{t as so,C as uo,N as ho,a as vo,k as se,c as mo,u as fo,b as go,_ as bo}from"./Space.670529d8.js";import{h as po,d as U,V as xo,N as Ie,j as de,u as ie,e as O,k as fe,b as yo,p as ue,q as K,i as he}from"./use-rtl.57806fcd.js";var Co=E({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const zo=q("n-avatar-group");var wo=m("avatar",`
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
`,[De(_("&","--n-merged-color: var(--n-color-modal);")),Ue(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),n("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),m("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),n("text","line-height: 1.25")]);const So=Object.assign(Object.assign({},j.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var Ro=E({name:"Avatar",props:So,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),d=H(!1);let c=null;const v=H(null),f=H(null),h=()=>{const{value:g}=v;if(g&&(c===null||c!==g.innerHTML)){c=g.innerHTML;const{value:S}=f;if(S){const{offsetWidth:R,offsetHeight:P}=S,{offsetWidth:B,offsetHeight:F}=g,N=.9,i=Math.min(R/B*N,P/F*N,1);g.style.transform=`translateX(-50%) translateY(-50%) scale(${i})`}}},a=V(zo,null),x=p(()=>{const{size:g}=e;if(g)return g;const{size:S}=a||{};return S||"medium"}),z=j("Avatar","-avatar",wo,We,e,o),b=V(so,null),u=p(()=>{if(a)return!0;const{round:g,circle:S}=e;return g!==void 0||S!==void 0?g||S:b?b.roundRef.value:!1}),y=p(()=>a?!0:e.bordered||!1),w=g=>{d.value=!0;const{onError:S}=e;S&&S(g)};Se(()=>e.src,()=>d.value=!1);const A=p(()=>{const g=x.value,S=u.value,R=y.value,{color:P}=e,{self:{borderRadius:B,fontSize:F,color:N,border:i,colorModal:I,colorPopover:r},common:{cubicBezierEaseInOut:k}}=z.value;let $;return typeof g=="number"?$=`${g}px`:$=z.value.self[D("height",g)],{"--n-font-size":F,"--n-border":R?i:"none","--n-border-radius":S?"50%":B,"--n-color":P||N,"--n-color-modal":P||I,"--n-color-popover":P||r,"--n-bezier":k,"--n-merged-size":`var(--n-avatar-size-override, ${$})`}}),T=t?X("avatar",p(()=>{const g=x.value,S=u.value,R=y.value,{color:P}=e;let B="";return g&&(typeof g=="number"?B+=`a${g}`:B+=g[0]),S&&(B+="b"),R&&(B+="c"),P&&(B+=po(P)),B}),A,e):void 0;return{textRef:v,selfRef:f,mergedRoundRef:u,mergedClsPrefix:o,fitTextTransform:h,cssVars:t?void 0:A,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,hasLoadError:d,handleError:w}},render(){const{$slots:e,src:o,mergedClsPrefix:t,onRender:d}=this;d==null||d();let c;return this.hasLoadError?c=s("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):c=U(e.default,v=>{if(v)return s(xo,{onResize:this.fitTextTransform},{default:()=>s("span",{ref:"textRef",class:`${t}-avatar__text`},v)});if(o)return s("img",{src:o,onError:this.handleError,style:{objectFit:this.objectFit}})}),s("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},c)}}),_o=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const ke=q("n-layout-sider"),ge={type:String,default:"static"},Io={embedded:Boolean,position:ge,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=q("n-layout");function Te(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),Io),setup(o){const t=H(null),d=H(null),{mergedClsPrefixRef:c,inlineThemeDisabled:v}=Y(o),f=j("Layout","-layout",_o,ve,o,c);function h(u,y){if(o.nativeScrollbar){const{value:w}=t;w&&(y===void 0?w.scrollTo(u):w.scrollTo(u,y))}else{const{value:w}=d;w&&w.scrollTo(u,y)}}W(Pe,o);const a={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},x={scrollTo:h},z=p(()=>{const{common:{cubicBezierEaseInOut:u},self:y}=f.value;return{"--n-bezier":u,"--n-color":o.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),b=v?X("layout",void 0,z,o):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:t,scrollbarInstRef:d,hasSiderStyle:a,mergedTheme:f,cssVars:v?void 0:z,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},x)},render(){var o;const{mergedClsPrefix:t,hasSider:d}=this;(o=this.onRender)===null||o===void 0||o.call(this);const c=d?this.hasSiderStyle:void 0,v=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return s("div",{class:v,style:this.cssVars},this.nativeScrollbar?s("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,c],onScroll:this.onScroll},this.$slots):s(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,c]}),this.$slots))}})}var ko=Te(!1),Po=Te(!0),To=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),C("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const $o={position:ge,inverted:Boolean,bordered:{type:Boolean,default:!1}};var Ao=E({name:"LayoutHeader",props:Object.assign(Object.assign({},j.props),$o),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),d=j("Layout","-layout-header",To,ve,e,o),c=p(()=>{const{common:{cubicBezierEaseInOut:f},self:h}=d.value,a={"--n-bezier":f};return e.inverted?(a["--n-color"]=h.headerColorInverted,a["--n-text-color"]=h.textColorInverted,a["--n-border-color"]=h.headerBorderColorInverted):(a["--n-color"]=h.headerColor,a["--n-text-color"]=h.textColor,a["--n-border-color"]=h.headerBorderColor),a}),v=t?X("layout-header",p(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:c,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),No=m("layout-sider",`
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
`,[C("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[C("bordered",[n("border",`
 right: 0;
 `)])]),C("right-placement",`
 justify-content: flex-start;
 `,[C("bordered",[n("border",`
 left: 0;
 `)]),C("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[_("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[_("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[m("layout-toggle-bar",[_("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),_("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),_("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),C("show-content",[m("layout-sider-scroll-container",{opacity:1})]),C("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Bo=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(Re,{clsPrefix:e},{default:()=>s(uo,null)}))}}),Fo=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Ho={position:ge,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var Eo=E({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),Ho),setup(e){const o=V(Pe),t=H(null),d=H(null),c=p(()=>de(a.value?e.collapsedWidth:e.width)),v=p(()=>e.collapseMode!=="transform"?{}:{minWidth:de(e.width)}),f=p(()=>o?o.siderPlacement:"left"),h=H(e.defaultCollapsed),a=ie(oe(e,"collapsed"),h);function x(S,R){if(e.nativeScrollbar){const{value:P}=t;P&&(R===void 0?P.scrollTo(S):P.scrollTo(S,R))}else{const{value:P}=d;P&&P.scrollTo(S,R)}}function z(){const{"onUpdate:collapsed":S,onUpdateCollapsed:R,onExpand:P,onCollapse:B}=e,{value:F}=a;R&&O(R,!F),S&&O(S,!F),h.value=!F,F?P&&O(P):B&&O(B)}W(ke,{collapsedRef:a,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:u}=Y(e),y=j("Layout","-layout-sider",No,ve,e,b);function w(S){var R,P;S.propertyName==="max-width"&&(a.value?(R=e.onAfterLeave)===null||R===void 0||R.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const A={scrollTo:x},T=p(()=>{const{common:{cubicBezierEaseInOut:S},self:R}=y.value,{siderToggleButtonColor:P,siderToggleButtonBorder:B,siderToggleBarColor:F,siderToggleBarColorHover:N}=R,i={"--n-bezier":S,"--n-toggle-button-color":P,"--n-toggle-button-border":B,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":N};return e.inverted?(i["--n-color"]=R.siderColorInverted,i["--n-text-color"]=R.textColorInverted,i["--n-border-color"]=R.siderBorderColorInverted,i["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColorInverted,i.__invertScrollbar=R.__invertScrollbar):(i["--n-color"]=R.siderColor,i["--n-text-color"]=R.textColor,i["--n-border-color"]=R.siderBorderColor,i["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColor),i}),g=u?X("layout-sider",p(()=>e.inverted?"a":"b"),T,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:d,mergedClsPrefix:b,mergedTheme:y,styleMaxWidth:c,mergedCollapsed:a,scrollContainerStyle:v,siderPlacement:f,handleTransitionend:w,handleTriggerClick:z,inlineThemeDisabled:u,cssVars:T,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},A)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:d}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:de(this.width)}]},this.nativeScrollbar?s("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?s(Fo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(Bo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${o}-layout-sider__border`}):null)}});const te=q("n-menu"),be=q("n-submenu"),pe=q("n-menu-item-group"),re=8;function xe(e){const o=V(te),{props:t,mergedCollapsedRef:d}=o,c=V(be,null),v=V(pe,null),f=p(()=>t.mode==="horizontal"),h=p(()=>f.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=p(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),x=p(()=>{var u;return!f.value&&e.root&&d.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),z=p(()=>{if(f.value)return;const{collapsedWidth:u,indent:y,rootIndent:w}=t,{root:A,isGroup:T}=e,g=w===void 0?y:w;if(A)return d.value?u/2-a.value/2:g;if(v)return y/2+v.paddingLeftRef.value;if(c)return(T?y/2:y)+c.paddingLeftRef.value}),b=p(()=>{const{collapsedWidth:u,indent:y,rootIndent:w}=t,{value:A}=a,{root:T}=e;return f.value||!T||!d.value?re:(w===void 0?y:w)+A+re-(u+A)/2});return{dropdownPlacement:h,activeIconSize:x,maxIconSize:a,paddingLeft:z,iconMarginRight:b,NMenu:o,NSubmenu:c}}const ye={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},$e=Object.assign(Object.assign({},ye),{tmNodes:{type:Array,required:!0}}),Oo=E({name:"MenuOptionGroup",props:$e,setup(e){W(be,null);const o=xe(e);W(pe,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:d}=V(te);return function(){const{value:c}=t,v=o.paddingLeft.value;return s("div",{class:`${c}-menu-item-group`,role:"group"},s("span",{class:`${c}-menu-item-group-title`,style:v!==void 0?`padding-left: ${v}px;`:void 0},G(e.title),e.extra?s(Ge,null," ",G(e.extra)):null),s("div",null,e.tmNodes.map(f=>Ce(f,d))))}}});var Ae=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=V(te);return{menuProps:o,style:p(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:p(()=>{const{maxIconSize:t,activeIconSize:d,iconMarginRight:c}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${d}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:d,renderExtra:c,expandIcon:v,nodeProps:f}}=this,h=t?t(o.rawNode):G(this.icon),a=f==null?void 0:f(o.rawNode);return s("div",Object.assign({},a,{onClick:x=>{var z,b;(z=a==null?void 0:a.onClick)===null||z===void 0||z.call(a,x),(b=this.onClick)===null||b===void 0||b.call(this,x)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover},a==null?void 0:a.class],style:[this.style,(a==null?void 0:a.style)||""]}),h&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},d?d(o.rawNode):G(this.title),this.extra||c?s("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(o.rawNode):G(this.extra)):null),this.showArrow?s(Re,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>v?v(o.rawNode):s(Co,null)}):null)}});const Ne=Object.assign(Object.assign({},ye),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),jo=E({name:"Submenu",props:Ne,setup(e){const o=xe(e),{NMenu:t,NSubmenu:d}=o,{props:c,mergedCollapsedRef:v,mergedThemeRef:f}=t,h=p(()=>{const{disabled:u}=e;return d!=null&&d.mergedDisabledRef.value||c.disabled?!0:u}),a=H(!1);W(be,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:h}),W(pe,null);function x(){const{onClick:u}=e;u&&u()}function z(){h.value||(v.value||t.toggleExpand(e.internalKey),x())}function b(u){a.value=u}return{menuProps:c,mergedTheme:f,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:h,mergedValue:t.mergedValueRef,childActive:_e(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:p(()=>c.mode==="horizontal"?!1:v.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:p(()=>!h.value&&(c.mode==="horizontal"||v.value)),handlePopoverShowChange:b,handleClick:z}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:d}}=this,c=()=>{const{isHorizontal:f,paddingLeft:h,collapsed:a,mergedDisabled:x,maxIconSize:z,activeIconSize:b,title:u,childActive:y,icon:w,handleClick:A,dropdownShow:T,iconMarginRight:g,tmNode:S}=this;return s(Ae,{tmNode:S,paddingLeft:h,collapsed:a,disabled:x,iconMarginRight:g,maxIconSize:z,activeIconSize:b,title:u,showArrow:!f,childActive:y,clsPrefix:o,icon:w,hover:T,onClick:A})},v=()=>s(qe,null,{default:()=>{const{tmNodes:f,collapsed:h}=this;return h?null:s("div",{class:`${o}-submenu-children`,role:"menu"},f.map(a=>Ce(a,this.menuProps)))}});return this.root?s(ho,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:d}),{default:()=>s("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:v())}):s("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),v())}}),Be=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Mo=E({name:"MenuOption",props:Be,setup(e){const o=xe(e),{NSubmenu:t,NMenu:d}=o,{props:c,mergedClsPrefixRef:v,mergedCollapsedRef:f}=d,h=t?t.mergedDisabledRef:{value:!1},a=p(()=>h.value||e.disabled);function x(b){const{onClick:u}=e;u&&u(b)}function z(b){a.value||(d.doSelect(e.internalKey,e.tmNode.rawNode),x(b))}return{mergedClsPrefix:v,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:d.mergedThemeRef,menuProps:c,dropdownEnabled:_e(()=>e.root&&f.value&&c.mode!=="horizontal"&&!a.value),selected:p(()=>d.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:z}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:d}}=this;return s("div",{role:"menuitem",class:[`${e}-menu-item`]},s(vo,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>d?d(t.rawNode):G(this.title),trigger:()=>s(Ae,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Lo=E({name:"MenuDivider",setup(){const e=V(te),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:s("div",{class:`${o.value}-menu-divider`})}});const Vo=fe($e),Ko=fe(Be),Do=fe(Ne);function Uo(e){return e.type==="divider"||e.type==="render"}function Wo(e){return e.type==="divider"}function Ce(e,o){const{rawNode:t}=e;if(Uo(t))return Wo(t)?s(Lo,Object.assign({key:e.key},t.props)):void 0;const{labelField:d}=o,{key:c,level:v,isGroup:f}=e,h=Object.assign(Object.assign({},t),{title:t.title||t[d],extra:t.titleExtra||t.extra,key:c,internalKey:c,level:v,root:v===0,isGroup:f});return e.children?e.isGroup?s(Oo,se(h,Vo,{tmNodes:e.children,key:c})):s(jo,se(h,Do,{key:c,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):s(Mo,se(h,Ko,{key:c,tmNode:e}))}var Go=_([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[C("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),C("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[C("selected",[n("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),n("extra","color: var(--n-item-text-color-active-horizontal);")])]),C("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),n("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),n("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[C("selected, child-active",[ee(null,[n("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),n("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),ee("border-bottom: 2px solid var(--n-border-color-horizontal);",[n("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),n("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),m("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),C("collapsed",[m("menu-item",[C("selected",[_("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),m("menu-item-content",[m("menu-item-content-header","opacity: 0;"),n("arrow","opacity: 0;"),n("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `,[_("> *","z-index: 1;"),_("&::before",`
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
 `),C("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),C("collapsed",[n("arrow","transform: rotate(0);")]),C("selected",[_("&::before","background-color: var(--n-item-color-active);"),n("arrow","color: var(--n-arrow-color-active);"),n("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),n("extra","color: var(--n-item-text-color-active);")])]),C("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),n("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),n("arrow",`
 color: var(--n-arrow-color-child-active);
 `),n("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[C("selected, child-active",[ee(null,[n("arrow","color: var(--n-arrow-color-active-hover);"),n("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),n("extra","color: var(--n-item-text-color-active-hover);")])])]),C("selected",[ee(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),ee(null,[_("&::before","background-color: var(--n-item-color-hover);"),n("arrow",`
 color: var(--n-arrow-color-hover);
 `),n("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[_("a",`
 color: var(--n-item-text-color-hover);
 `),n("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),n("icon",`
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
 `),n("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[_("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),n("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ye({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[_("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ee(e,o){return[C("hover",e,o),_("&:hover",e,o)]}const qo=Object.assign(Object.assign({},j.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Yo=E({name:"Menu",props:qo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),d=j("Menu","-menu",Go,Xe,e,o),c=V(ke,null),v=p(()=>{var i;const{collapsed:I}=e;if(I!==void 0)return I;if(c){const{collapseModeRef:r,collapsedRef:k}=c;if(r.value==="width")return(i=k.value)!==null&&i!==void 0?i:!1}return!1}),f=p(()=>{const{keyField:i,childrenField:I}=e;return mo(e.items||e.options,{getChildren(r){return r[I]},getKey(r){var k;return(k=r[i])!==null&&k!==void 0?k:r.name}})}),h=p(()=>new Set(f.value.treeNodes.map(i=>i.key))),{watchProps:a}=e,x=H(null);a!=null&&a.includes("defaultValue")?ze(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const z=oe(e,"value"),b=ie(z,x),u=H([]),y=()=>{u.value=e.defaultExpandAll?f.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||f.value.getPath(b.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ze(y):y();const w=fo(e,["expandedNames","expandedKeys"]),A=ie(w,u),T=p(()=>f.value.treeNodes),g=p(()=>f.value.getPath(b.value).keyPath);W(te,{props:e,mergedCollapsedRef:v,mergedThemeRef:d,mergedValueRef:b,mergedExpandedKeysRef:A,activePathRef:g,mergedClsPrefixRef:o,isHorizontalRef:p(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:S,toggleExpand:P});function S(i,I){const{"onUpdate:value":r,onUpdateValue:k,onSelect:$}=e;k&&O(k,i,I),r&&O(r,i,I),$&&O($,i,I),x.value=i}function R(i){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:r,onExpandedNamesChange:k,onOpenNamesChange:$}=e;I&&O(I,i),r&&O(r,i),k&&O(k,i),$&&O($,i),u.value=i}function P(i){const I=Array.from(A.value),r=I.findIndex(k=>k===i);if(~r)I.splice(r,1);else{if(e.accordion&&h.value.has(i)){const k=I.findIndex($=>h.value.has($));k>-1&&I.splice(k,1)}I.push(i)}R(I)}const B=i=>{const I=f.value.getPath(i!=null?i:b.value,{includeSelf:!1}).keyPath;if(!I.length)return;const r=Array.from(A.value),k=new Set([...r,...I]);e.accordion&&h.value.forEach($=>{k.has($)&&!I.includes($)&&k.delete($)}),R(Array.from(k))},F=p(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:I},self:r}=d.value,{borderRadius:k,borderColorHorizontal:$,fontSize:Z,itemHeight:le,dividerColor:ae}=r,l={"--n-divider-color":ae,"--n-bezier":I,"--n-font-size":Z,"--n-border-color-horizontal":$,"--n-border-radius":k,"--n-item-height":le};return i?(l["--n-group-text-color"]=r.groupTextColorInverted,l["--n-color"]=r.colorInverted,l["--n-item-text-color"]=r.itemTextColorInverted,l["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,l["--n-item-text-color-active"]=r.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=r.itemIconColorInverted,l["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,l["--n-arrow-color"]=r.arrowColorInverted,l["--n-arrow-color-hover"]=r.arrowColorHoverInverted,l["--n-arrow-color-active"]=r.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,l["--n-item-color-hover"]=r.itemColorHoverInverted,l["--n-item-color-active"]=r.itemColorActiveInverted,l["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=r.groupTextColor,l["--n-color"]=r.color,l["--n-item-text-color"]=r.itemTextColor,l["--n-item-text-color-hover"]=r.itemTextColorHover,l["--n-item-text-color-active"]=r.itemTextColorActive,l["--n-item-text-color-child-active"]=r.itemTextColorChildActive,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,l["--n-item-icon-color"]=r.itemIconColor,l["--n-item-icon-color-hover"]=r.itemIconColorHover,l["--n-item-icon-color-active"]=r.itemIconColorActive,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,l["--n-arrow-color"]=r.arrowColor,l["--n-arrow-color-hover"]=r.arrowColorHover,l["--n-arrow-color-active"]=r.arrowColorActive,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,l["--n-arrow-color-child-active"]=r.arrowColorChildActive,l["--n-item-color-hover"]=r.itemColorHover,l["--n-item-color-active"]=r.itemColorActive,l["--n-item-color-active-hover"]=r.itemColorActiveHover,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),l}),N=t?X("menu",p(()=>e.inverted?"a":"b"),F,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:w,uncontrolledExpanededKeys:u,mergedExpandedKeys:A,uncontrolledValue:x,mergedValue:b,activePath:g,tmNodes:T,mergedTheme:d,mergedCollapsed:v,cssVars:t?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,showOption:B}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:d}=this;return d==null||d(),s("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>Ce(c,this.$props)))}}),Xo=m("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),m("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[we({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),_("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),C("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),ne("disabled",[ne("icon",[C("rubber-band",[C("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[_("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),C("active",[C("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[_("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),C("active",[n("rail",[n("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[we()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),C("active",[n("rail","background-color: var(--n-rail-color-active);")]),C("loading",[n("rail",`
 cursor: wait;
 `)]),C("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Zo=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Jo=E({name:"Switch",props:Zo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),d=j("Switch","-switch",Xo,Ze,e,o),c=yo(e),{mergedSizeRef:v,mergedDisabledRef:f}=c,h=H(e.defaultValue),a=oe(e,"value"),x=ie(a,h),z=p(()=>x.value===e.checkedValue),b=H(!1),u=H(!1),y=p(()=>{const{railStyle:i}=e;if(!!i)return i({focused:u.value,checked:z.value})});function w(i){const{"onUpdate:value":I,onChange:r,onUpdateValue:k}=e,{nTriggerFormInput:$,nTriggerFormChange:Z}=c;I&&O(I,i),k&&O(k,i),r&&O(r,i),h.value=i,$(),Z()}function A(){const{nTriggerFormFocus:i}=c;i()}function T(){const{nTriggerFormBlur:i}=c;i()}function g(){e.loading||f.value||(x.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function S(){u.value=!0,A()}function R(){u.value=!1,T(),b.value=!1}function P(i){e.loading||f.value||i.code==="Space"&&(x.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),b.value=!1)}function B(i){e.loading||f.value||i.code==="Space"&&(i.preventDefault(),b.value=!0)}const F=p(()=>{const{value:i}=v,{self:{opacityDisabled:I,railColor:r,railColorActive:k,buttonBoxShadow:$,buttonColor:Z,boxShadowFocus:le,loadingColor:ae,textColor:l,iconColor:Fe,[D("buttonHeight",i)]:J,[D("buttonWidth",i)]:He,[D("buttonWidthPressed",i)]:Ee,[D("railHeight",i)]:Q,[D("railWidth",i)]:ce,[D("railBorderRadius",i)]:Oe,[D("buttonBorderRadius",i)]:je},common:{cubicBezierEaseInOut:Me}}=d.value,Le=ue((K(Q)-K(J))/2),Ve=ue(Math.max(K(Q),K(J))),Ke=K(Q)>K(J)?ce:ue(K(ce)+K(J)-K(Q));return{"--n-bezier":Me,"--n-button-border-radius":je,"--n-button-box-shadow":$,"--n-button-color":Z,"--n-button-width":He,"--n-button-width-pressed":Ee,"--n-button-height":J,"--n-height":Ve,"--n-offset":Le,"--n-opacity-disabled":I,"--n-rail-border-radius":Oe,"--n-rail-color":r,"--n-rail-color-active":k,"--n-rail-height":Q,"--n-rail-width":ce,"--n-width":Ke,"--n-box-shadow-focus":le,"--n-loading-color":ae,"--n-text-color":l,"--n-icon-color":Fe}}),N=t?X("switch",p(()=>v.value[0]),F,e):void 0;return{handleClick:g,handleBlur:R,handleFocus:S,handleKeyup:P,handleKeydown:B,mergedRailStyle:y,pressed:b,mergedClsPrefix:o,mergedValue:x,checked:z,mergedDisabled:f,cssVars:t?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:o,checked:t,mergedRailStyle:d,onRender:c,$slots:v}=this;c==null||c();const{checked:f,unchecked:h,icon:a,"checked-icon":x,"unchecked-icon":z}=v,b=!(he(a)&&he(x)&&he(z));return s("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,b&&`${e}-switch--icon`,t&&`${e}-switch--active`,o&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},s("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:d},U(f,u=>U(h,y=>u||y?s("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),u),s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),y)):null)),s("div",{class:`${e}-switch__button`},U(a,u=>U(x,y=>U(z,w=>s(Je,null,{default:()=>this.loading?s(Qe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(y||u)?s("div",{class:`${e}-switch__button-icon`,key:y?"checked-icon":"icon"},y||u):!this.checked&&(w||u)?s("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||u):null})))),U(f,u=>u&&s("div",{key:"checked",class:`${e}-switch__checked`},u)),U(h,u=>u&&s("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}});const Qo=(e,o)=>s(eo,{to:{path:e}},{default:()=>o||"\u7A7A\u7A7A\u5982\u4E5F"});function et(e){return()=>s(go,null,{default:()=>s(e)})}const ot=me(" \u5C0F\u5377\u6751 "),tt=me(" \u{1F31E} "),rt=me(" \u{1F31A} "),at=E({name:"baseLayout",setup(e){const o=oo(),t=to(),d=H(""),c=H(!1),v=p(()=>{const h=ro.filter(a=>a.children)[0];return h.children&&h.children.map(a=>{var x;return{label:()=>{var z;return Qo(`${h.path}/${a.path}`,(z=a.meta)==null?void 0:z.title)},key:`${h.path}/${a.path}`,icon:et((x=a.meta)==null?void 0:x.icon)}})});function f(h){o.theme=h}return no(()=>{d.value=t.path}),Se(()=>t.path,h=>{d.value=h}),(h,a)=>{const x=Ro,z=bo,b=Yo,u=Eo,y=Jo,w=Ao,A=io("router-view"),T=Po,g=ko;return lo(),ao(g,{"has-sider":"",class:"base-layout_wrapper"},{default:M(()=>[L(u,{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":64,width:240,"native-scrollbar":!1,inverted:c.value,"content-style":"padding:24px 0"},{default:M(()=>[L(z,{justify:"center"},{default:M(()=>[L(x,{round:"",size:48},{default:M(()=>[ot]),_:1})]),_:1}),L(b,{value:d.value,inverted:c.value,"collapsed-width":64,"collapsed-icon-size":22,options:co(v)},null,8,["value","inverted","options"])]),_:1},8,["inverted"]),L(g,null,{default:M(()=>[L(w,{bordered:"",style:{height:"60px"}},{default:M(()=>[L(z,{justify:"end",align:"center"},{default:M(()=>[L(y,{"on-update:value":f,"rubber-band":"",size:"large"},{"unchecked-icon":M(()=>[tt]),"checked-icon":M(()=>[rt]),_:1})]),_:1})]),_:1}),L(T,{embedded:"","content-style":"padding: 12px;"},{default:M(()=>[L(A)]),_:1})]),_:1})]),_:1})}}});export{at as default};
