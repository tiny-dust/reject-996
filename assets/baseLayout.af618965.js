import{e as E,j as c,G,c as v,ac as We,A as _,ad as qe,b as n,u as Y,r as H,q as V,h as p,f as j,ae as Ge,L as _e,P as D,i as X,d as y,M as W,af as me,C as Re,x as oe,ag as q,F as Ye,H as Ie,T as Xe,a as ne,ah as Ze,ai as Je,K as we,B as Se,aj as Qe,N as eo,D as oo,o as ke,m as to,ak as le,al as ro,k as no,am as io,I as lo,an as ao,ao as co,w as M,n as L,p as fe}from"./index.eec0c036.js";import{t as so,C as uo,N as ho,a as vo,k as de,c as mo,u as fo,b as go,_ as bo}from"./Space.9e754ebb.js";import{h as po,d as U,V as xo,N as Pe,j as ue,u as ie,e as O,k as ge,b as yo,p as he,q as K,i as ve}from"./use-rtl.75d4725a.js";var Co=E({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const zo=G("n-avatar-group");var wo=v("avatar",`
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
`,[We(_("&","--n-merged-color: var(--n-color-modal);")),qe(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),n("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),v("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),n("text","line-height: 1.25")]);const So=Object.assign(Object.assign({},j.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var _o=E({name:"Avatar",props:So,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),s=H(!1);let a=null;const h=H(null),f=H(null),m=()=>{const{value:g}=h;if(g&&(a===null||a!==g.innerHTML)){a=g.innerHTML;const{value:w}=f;if(w){const{offsetWidth:S,offsetHeight:P}=w,{offsetWidth:B,offsetHeight:F}=g,N=.9,i=Math.min(S/B*N,P/F*N,1);g.style.transform=`translateX(-50%) translateY(-50%) scale(${i})`}}},u=V(zo,null),C=p(()=>{const{size:g}=e;if(g)return g;const{size:w}=u||{};return w||"medium"}),I=j("Avatar","-avatar",wo,Ge,e,o),b=V(so,null),d=p(()=>{if(u)return!0;const{round:g,circle:w}=e;return g!==void 0||w!==void 0?g||w:b?b.roundRef.value:!1}),x=p(()=>u?!0:e.bordered||!1),z=g=>{s.value=!0;const{onError:w}=e;w&&w(g)};_e(()=>e.src,()=>s.value=!1);const $=p(()=>{const g=C.value,w=d.value,S=x.value,{color:P}=e,{self:{borderRadius:B,fontSize:F,color:N,border:i,colorModal:R,colorPopover:r},common:{cubicBezierEaseInOut:k}}=I.value;let A;return typeof g=="number"?A=`${g}px`:A=I.value.self[D("height",g)],{"--n-font-size":F,"--n-border":S?i:"none","--n-border-radius":w?"50%":B,"--n-color":P||N,"--n-color-modal":P||R,"--n-color-popover":P||r,"--n-bezier":k,"--n-merged-size":`var(--n-avatar-size-override, ${A})`}}),T=t?X("avatar",p(()=>{const g=C.value,w=d.value,S=x.value,{color:P}=e;let B="";return g&&(typeof g=="number"?B+=`a${g}`:B+=g[0]),w&&(B+="b"),S&&(B+="c"),P&&(B+=po(P)),B}),$,e):void 0;return{textRef:h,selfRef:f,mergedRoundRef:d,mergedClsPrefix:o,fitTextTransform:m,cssVars:t?void 0:$,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,hasLoadError:s,handleError:z}},render(){const{$slots:e,src:o,mergedClsPrefix:t,onRender:s}=this;s==null||s();let a;return this.hasLoadError?a=c("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):a=U(e.default,h=>{if(h)return c(xo,{onResize:this.fitTextTransform},{default:()=>c("span",{ref:"textRef",class:`${t}-avatar__text`},h)});if(o)return c("img",{src:o,onError:this.handleError,style:{objectFit:this.objectFit}})}),c("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},a)}}),Ro=v("layout",`
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
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const Te=G("n-layout-sider"),be={type:String,default:"static"},Io={embedded:Boolean,position:be,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ae=G("n-layout");function $e(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),Io),setup(o){const t=H(null),s=H(null),{mergedClsPrefixRef:a,inlineThemeDisabled:h}=Y(o),f=j("Layout","-layout",Ro,me,o,a);function m(d,x){if(o.nativeScrollbar){const{value:z}=t;z&&(x===void 0?z.scrollTo(d):z.scrollTo(d,x))}else{const{value:z}=s;z&&z.scrollTo(d,x)}}W(Ae,o);const u={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},C={scrollTo:m},I=p(()=>{const{common:{cubicBezierEaseInOut:d},self:x}=f.value;return{"--n-bezier":d,"--n-color":o.embedded?x.colorEmbedded:x.color,"--n-text-color":x.textColor}}),b=h?X("layout",void 0,I,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:s,hasSiderStyle:u,mergedTheme:f,cssVars:h?void 0:I,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},C)},render(){var o;const{mergedClsPrefix:t,hasSider:s}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=s?this.hasSiderStyle:void 0,h=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return c("div",{class:h,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.onScroll},this.$slots):c(Pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var ko=$e(!1),Po=$e(!0),To=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),y("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const Ao={position:be,inverted:Boolean,bordered:{type:Boolean,default:!1}};var $o=E({name:"LayoutHeader",props:Object.assign(Object.assign({},j.props),Ao),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),s=j("Layout","-layout-header",To,me,e,o),a=p(()=>{const{common:{cubicBezierEaseInOut:f},self:m}=s.value,u={"--n-bezier":f};return e.inverted?(u["--n-color"]=m.headerColorInverted,u["--n-text-color"]=m.textColorInverted,u["--n-border-color"]=m.headerBorderColorInverted):(u["--n-color"]=m.headerColor,u["--n-text-color"]=m.textColor,u["--n-border-color"]=m.headerBorderColor),u}),h=t?X("layout-header",p(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),No=v("layout-sider",`
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
`,[y("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[y("bordered",[n("border",`
 right: 0;
 `)])]),y("right-placement",`
 justify-content: flex-start;
 `,[y("bordered",[n("border",`
 left: 0;
 `)]),y("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[_("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[_("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),y("collapsed",[v("layout-toggle-bar",[_("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
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
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
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
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),y("show-content",[v("layout-sider-scroll-container",{opacity:1})]),y("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Bo=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Re,{clsPrefix:e},{default:()=>c(uo,null)}))}}),Fo=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Ho={position:be,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var Eo=E({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),Ho),setup(e){const o=V(Ae),t=H(null),s=H(null),a=p(()=>ue(u.value?e.collapsedWidth:e.width)),h=p(()=>e.collapseMode!=="transform"?{}:{minWidth:ue(e.width)}),f=p(()=>o?o.siderPlacement:"left"),m=H(e.defaultCollapsed),u=ie(oe(e,"collapsed"),m);function C(w,S){if(e.nativeScrollbar){const{value:P}=t;P&&(S===void 0?P.scrollTo(w):P.scrollTo(w,S))}else{const{value:P}=s;P&&P.scrollTo(w,S)}}function I(){const{"onUpdate:collapsed":w,onUpdateCollapsed:S,onExpand:P,onCollapse:B}=e,{value:F}=u;S&&O(S,!F),w&&O(w,!F),m.value=!F,F?P&&O(P):B&&O(B)}W(Te,{collapsedRef:u,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:d}=Y(e),x=j("Layout","-layout-sider",No,me,e,b);function z(w){var S,P;w.propertyName==="max-width"&&(u.value?(S=e.onAfterLeave)===null||S===void 0||S.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const $={scrollTo:C},T=p(()=>{const{common:{cubicBezierEaseInOut:w},self:S}=x.value,{siderToggleButtonColor:P,siderToggleButtonBorder:B,siderToggleBarColor:F,siderToggleBarColorHover:N}=S,i={"--n-bezier":w,"--n-toggle-button-color":P,"--n-toggle-button-border":B,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":N};return e.inverted?(i["--n-color"]=S.siderColorInverted,i["--n-text-color"]=S.textColorInverted,i["--n-border-color"]=S.siderBorderColorInverted,i["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColorInverted,i.__invertScrollbar=S.__invertScrollbar):(i["--n-color"]=S.siderColor,i["--n-text-color"]=S.textColor,i["--n-border-color"]=S.siderBorderColor,i["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColor),i}),g=d?X("layout-sider",p(()=>e.inverted?"a":"b"),T,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:s,mergedClsPrefix:b,mergedTheme:x,styleMaxWidth:a,mergedCollapsed:u,scrollContainerStyle:h,siderPlacement:f,handleTransitionend:z,handleTriggerClick:I,inlineThemeDisabled:d,cssVars:T,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},$)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ue(this.width)}]},this.nativeScrollbar?c("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),s?s==="bar"?c(Fo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(Bo,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}});const te=G("n-menu"),pe=G("n-submenu"),xe=G("n-menu-item-group"),re=8;function ye(e){const o=V(te),{props:t,mergedCollapsedRef:s}=o,a=V(pe,null),h=V(xe,null),f=p(()=>t.mode==="horizontal"),m=p(()=>f.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=p(()=>{var d;return Math.max((d=t.collapsedIconSize)!==null&&d!==void 0?d:t.iconSize,t.iconSize)}),C=p(()=>{var d;return!f.value&&e.root&&s.value&&(d=t.collapsedIconSize)!==null&&d!==void 0?d:t.iconSize}),I=p(()=>{if(f.value)return;const{collapsedWidth:d,indent:x,rootIndent:z}=t,{root:$,isGroup:T}=e,g=z===void 0?x:z;if($)return s.value?d/2-u.value/2:g;if(h)return x/2+h.paddingLeftRef.value;if(a)return(T?x/2:x)+a.paddingLeftRef.value}),b=p(()=>{const{collapsedWidth:d,indent:x,rootIndent:z}=t,{value:$}=u,{root:T}=e;return f.value||!T||!s.value?re:(z===void 0?x:z)+$+re-(d+$)/2});return{dropdownPlacement:m,activeIconSize:C,maxIconSize:u,paddingLeft:I,iconMarginRight:b,NMenu:o,NSubmenu:a}}const Ce={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ne=Object.assign(Object.assign({},Ce),{tmNodes:{type:Array,required:!0}}),Oo=E({name:"MenuOptionGroup",props:Ne,setup(e){W(pe,null);const o=ye(e);W(xe,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:s}=V(te);return function(){const{value:a}=t,h=o.paddingLeft.value;return c("div",{class:`${a}-menu-item-group`,role:"group"},c("span",{class:`${a}-menu-item-group-title`,style:h!==void 0?`padding-left: ${h}px;`:void 0},q(e.title),e.extra?c(Ye,null," ",q(e.extra)):null),c("div",null,e.tmNodes.map(f=>ze(f,s))))}}});var Be=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=V(te);return{menuProps:o,style:p(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:p(()=>{const{maxIconSize:t,activeIconSize:s,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${s}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:s,renderExtra:a,expandIcon:h,nodeProps:f}}=this,m=t?t(o.rawNode):q(this.icon),u=f==null?void 0:f(o.rawNode);return c("div",Object.assign({},u,{onClick:C=>{var I,b;(I=u==null?void 0:u.onClick)===null||I===void 0||I.call(u,C),(b=this.onClick)===null||b===void 0||b.call(this,C)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover},u==null?void 0:u.class],style:[this.style,(u==null?void 0:u.style)||""]}),m&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[m]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},s?s(o.rawNode):q(this.title),this.extra||a?c("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):q(this.extra)):null),this.showArrow?c(Re,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>h?h(o.rawNode):c(Co,null)}):null)}});const Fe=Object.assign(Object.assign({},Ce),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),jo=E({name:"Submenu",props:Fe,setup(e){const o=ye(e),{NMenu:t,NSubmenu:s}=o,{props:a,mergedCollapsedRef:h,mergedThemeRef:f}=t,m=p(()=>{const{disabled:d}=e;return s!=null&&s.mergedDisabledRef.value||a.disabled?!0:d}),u=H(!1);W(pe,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:m}),W(xe,null);function C(){const{onClick:d}=e;d&&d()}function I(){m.value||(h.value||t.toggleExpand(e.internalKey),C())}function b(d){u.value=d}return{menuProps:a,mergedTheme:f,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:u,paddingLeft:o.paddingLeft,mergedDisabled:m,mergedValue:t.mergedValueRef,childActive:Ie(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:p(()=>a.mode==="horizontal"?!1:h.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:p(()=>!m.value&&(a.mode==="horizontal"||h.value)),handlePopoverShowChange:b,handleClick:I}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:s}}=this,a=()=>{const{isHorizontal:f,paddingLeft:m,collapsed:u,mergedDisabled:C,maxIconSize:I,activeIconSize:b,title:d,childActive:x,icon:z,handleClick:$,dropdownShow:T,iconMarginRight:g,tmNode:w}=this;return c(Be,{tmNode:w,paddingLeft:m,collapsed:u,disabled:C,iconMarginRight:g,maxIconSize:I,activeIconSize:b,title:d,showArrow:!f,childActive:x,clsPrefix:o,icon:z,hover:T,onClick:$})},h=()=>c(Xe,null,{default:()=>{const{tmNodes:f,collapsed:m}=this;return m?null:c("div",{class:`${o}-submenu-children`,role:"menu"},f.map(u=>ze(u,this.menuProps)))}});return this.root?c(ho,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:s}),{default:()=>c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:h())}):c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),h())}}),He=Object.assign(Object.assign({},Ce),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Mo=E({name:"MenuOption",props:He,setup(e){const o=ye(e),{NSubmenu:t,NMenu:s}=o,{props:a,mergedClsPrefixRef:h,mergedCollapsedRef:f}=s,m=t?t.mergedDisabledRef:{value:!1},u=p(()=>m.value||e.disabled);function C(b){const{onClick:d}=e;d&&d(b)}function I(b){u.value||(s.doSelect(e.internalKey,e.tmNode.rawNode),C(b))}return{mergedClsPrefix:h,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:s.mergedThemeRef,menuProps:a,dropdownEnabled:Ie(()=>e.root&&f.value&&a.mode!=="horizontal"&&!u.value),selected:p(()=>s.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:I}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:s}}=this;return c("div",{role:"menuitem",class:[`${e}-menu-item`]},c(vo,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>s?s(t.rawNode):q(this.title),trigger:()=>c(Be,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Lo=E({name:"MenuDivider",setup(){const e=V(te),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${o.value}-menu-divider`})}});const Vo=ge(Ne),Ko=ge(He),Do=ge(Fe);function Uo(e){return e.type==="divider"||e.type==="render"}function Wo(e){return e.type==="divider"}function ze(e,o){const{rawNode:t}=e;if(Uo(t))return Wo(t)?c(Lo,Object.assign({key:e.key},t.props)):void 0;const{labelField:s}=o,{key:a,level:h,isGroup:f}=e,m=Object.assign(Object.assign({},t),{title:t.title||t[s],extra:t.titleExtra||t.extra,key:a,internalKey:a,level:h,root:h===0,isGroup:f});return e.children?e.isGroup?c(Oo,de(m,Vo,{tmNodes:e.children,key:a})):c(jo,de(m,Do,{key:a,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):c(Mo,de(m,Ko,{key:a,tmNode:e}))}var qo=_([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[y("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[_("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[y("selected",[n("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-horizontal);"),n("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),n("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),n("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ne("disabled",[y("selected, child-active",[ee(null,[n("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[_("a","color: var(--n-item-text-color-active-hover-horizontal);"),n("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),ee("border-bottom: 2px solid var(--n-border-color-horizontal);",[n("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[_("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),n("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),v("menu-item-content-header",[_("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[v("menu-item",[y("selected",[_("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),v("menu-item-content",[v("menu-item-content-header","opacity: 0;"),n("arrow","opacity: 0;"),n("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
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
 `),y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),y("collapsed",[n("arrow","transform: rotate(0);")]),y("selected",[_("&::before","background-color: var(--n-item-color-active);"),n("arrow","color: var(--n-arrow-color-active);"),n("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[_("a","color: var(--n-item-text-color-active);"),n("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[_("a",`
 color: var(--n-item-text-color-child-active);
 `),n("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),n("arrow",`
 color: var(--n-arrow-color-child-active);
 `),n("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ne("disabled",[y("selected, child-active",[ee(null,[n("arrow","color: var(--n-arrow-color-active-hover);"),n("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[_("a","color: var(--n-item-text-color-active-hover);"),n("extra","color: var(--n-item-text-color-active-hover);")])])]),y("selected",[ee(null,[_("&::before","background-color: var(--n-item-color-active-hover);")])]),ee(null,[_("&::before","background-color: var(--n-item-color-hover);"),n("arrow",`
 color: var(--n-arrow-color-hover);
 `),n("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
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
 `),v("menu-item-content-header",`
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
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ze({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
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
 `)])]),v("menu-tooltip",[_("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ee(e,o){return[y("hover",e,o),_("&:hover",e,o)]}const Go=Object.assign(Object.assign({},j.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}});var Yo=E({name:"Menu",props:Go,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),s=j("Menu","-menu",qo,Je,e,o),a=V(Te,null),h=p(()=>{var i;const{collapsed:R}=e;if(R!==void 0)return R;if(a){const{collapseModeRef:r,collapsedRef:k}=a;if(r.value==="width")return(i=k.value)!==null&&i!==void 0?i:!1}return!1}),f=p(()=>{const{keyField:i,childrenField:R}=e;return mo(e.items||e.options,{getChildren(r){return r[R]},getKey(r){var k;return(k=r[i])!==null&&k!==void 0?k:r.name}})}),m=p(()=>new Set(f.value.treeNodes.map(i=>i.key))),{watchProps:u}=e,C=H(null);u!=null&&u.includes("defaultValue")?we(()=>{C.value=e.defaultValue}):C.value=e.defaultValue;const I=oe(e,"value"),b=ie(I,C),d=H([]),x=()=>{d.value=e.defaultExpandAll?f.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||f.value.getPath(b.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?we(x):x();const z=fo(e,["expandedNames","expandedKeys"]),$=ie(z,d),T=p(()=>f.value.treeNodes),g=p(()=>f.value.getPath(b.value).keyPath);W(te,{props:e,mergedCollapsedRef:h,mergedThemeRef:s,mergedValueRef:b,mergedExpandedKeysRef:$,activePathRef:g,mergedClsPrefixRef:o,isHorizontalRef:p(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:w,toggleExpand:P});function w(i,R){const{"onUpdate:value":r,onUpdateValue:k,onSelect:A}=e;k&&O(k,i,R),r&&O(r,i,R),A&&O(A,i,R),C.value=i}function S(i){const{"onUpdate:expandedKeys":R,onUpdateExpandedKeys:r,onExpandedNamesChange:k,onOpenNamesChange:A}=e;R&&O(R,i),r&&O(r,i),k&&O(k,i),A&&O(A,i),d.value=i}function P(i){const R=Array.from($.value),r=R.findIndex(k=>k===i);if(~r)R.splice(r,1);else{if(e.accordion&&m.value.has(i)){const k=R.findIndex(A=>m.value.has(A));k>-1&&R.splice(k,1)}R.push(i)}S(R)}const B=i=>{const R=f.value.getPath(i!=null?i:b.value,{includeSelf:!1}).keyPath;if(!R.length)return;const r=Array.from($.value),k=new Set([...r,...R]);e.accordion&&m.value.forEach(A=>{k.has(A)&&!R.includes(A)&&k.delete(A)}),S(Array.from(k))},F=p(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:R},self:r}=s.value,{borderRadius:k,borderColorHorizontal:A,fontSize:Z,itemHeight:ae,dividerColor:ce}=r,l={"--n-divider-color":ce,"--n-bezier":R,"--n-font-size":Z,"--n-border-color-horizontal":A,"--n-border-radius":k,"--n-item-height":ae};return i?(l["--n-group-text-color"]=r.groupTextColorInverted,l["--n-color"]=r.colorInverted,l["--n-item-text-color"]=r.itemTextColorInverted,l["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,l["--n-item-text-color-active"]=r.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=r.itemIconColorInverted,l["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,l["--n-arrow-color"]=r.arrowColorInverted,l["--n-arrow-color-hover"]=r.arrowColorHoverInverted,l["--n-arrow-color-active"]=r.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,l["--n-item-color-hover"]=r.itemColorHoverInverted,l["--n-item-color-active"]=r.itemColorActiveInverted,l["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=r.groupTextColor,l["--n-color"]=r.color,l["--n-item-text-color"]=r.itemTextColor,l["--n-item-text-color-hover"]=r.itemTextColorHover,l["--n-item-text-color-active"]=r.itemTextColorActive,l["--n-item-text-color-child-active"]=r.itemTextColorChildActive,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,l["--n-item-icon-color"]=r.itemIconColor,l["--n-item-icon-color-hover"]=r.itemIconColorHover,l["--n-item-icon-color-active"]=r.itemIconColorActive,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,l["--n-arrow-color"]=r.arrowColor,l["--n-arrow-color-hover"]=r.arrowColorHover,l["--n-arrow-color-active"]=r.arrowColorActive,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,l["--n-arrow-color-child-active"]=r.arrowColorChildActive,l["--n-item-color-hover"]=r.itemColorHover,l["--n-item-color-active"]=r.itemColorActive,l["--n-item-color-active-hover"]=r.itemColorActiveHover,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),l}),N=t?X("menu",p(()=>e.inverted?"a":"b"),F,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:z,uncontrolledExpanededKeys:d,mergedExpandedKeys:$,uncontrolledValue:C,mergedValue:b,activePath:g,tmNodes:T,mergedTheme:s,mergedCollapsed:h,cssVars:t?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,showOption:B}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:s}=this;return s==null||s(),c("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>ze(a,this.$props)))}}),Xo=v("switch",`
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
 `),v("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Se({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
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
 `)]),y("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),ne("disabled",[ne("icon",[y("rubber-band",[y("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[_("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[_("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[n("rail",[n("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),n("rail",`
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
 `,[Se()]),n("button",`
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
 `)]),y("active",[n("rail","background-color: var(--n-rail-color-active);")]),y("loading",[n("rail",`
 cursor: wait;
 `)]),y("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Zo=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Jo=E({name:"Switch",props:Zo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Y(e),s=j("Switch","-switch",Xo,Qe,e,o),a=yo(e),{mergedSizeRef:h,mergedDisabledRef:f}=a,m=H(e.defaultValue),u=oe(e,"value"),C=ie(u,m),I=p(()=>C.value===e.checkedValue),b=H(!1),d=H(!1),x=p(()=>{const{railStyle:i}=e;if(!!i)return i({focused:d.value,checked:I.value})});function z(i){const{"onUpdate:value":R,onChange:r,onUpdateValue:k}=e,{nTriggerFormInput:A,nTriggerFormChange:Z}=a;R&&O(R,i),k&&O(k,i),r&&O(r,i),m.value=i,A(),Z()}function $(){const{nTriggerFormFocus:i}=a;i()}function T(){const{nTriggerFormBlur:i}=a;i()}function g(){e.loading||f.value||(C.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue))}function w(){d.value=!0,$()}function S(){d.value=!1,T(),b.value=!1}function P(i){e.loading||f.value||i.code==="Space"&&(C.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue),b.value=!1)}function B(i){e.loading||f.value||i.code==="Space"&&(i.preventDefault(),b.value=!0)}const F=p(()=>{const{value:i}=h,{self:{opacityDisabled:R,railColor:r,railColorActive:k,buttonBoxShadow:A,buttonColor:Z,boxShadowFocus:ae,loadingColor:ce,textColor:l,iconColor:Ee,[D("buttonHeight",i)]:J,[D("buttonWidth",i)]:Oe,[D("buttonWidthPressed",i)]:je,[D("railHeight",i)]:Q,[D("railWidth",i)]:se,[D("railBorderRadius",i)]:Me,[D("buttonBorderRadius",i)]:Le},common:{cubicBezierEaseInOut:Ve}}=s.value,Ke=he((K(Q)-K(J))/2),De=he(Math.max(K(Q),K(J))),Ue=K(Q)>K(J)?se:he(K(se)+K(J)-K(Q));return{"--n-bezier":Ve,"--n-button-border-radius":Le,"--n-button-box-shadow":A,"--n-button-color":Z,"--n-button-width":Oe,"--n-button-width-pressed":je,"--n-button-height":J,"--n-height":De,"--n-offset":Ke,"--n-opacity-disabled":R,"--n-rail-border-radius":Me,"--n-rail-color":r,"--n-rail-color-active":k,"--n-rail-height":Q,"--n-rail-width":se,"--n-width":Ue,"--n-box-shadow-focus":ae,"--n-loading-color":ce,"--n-text-color":l,"--n-icon-color":Ee}}),N=t?X("switch",p(()=>h.value[0]),F,e):void 0;return{handleClick:g,handleBlur:S,handleFocus:w,handleKeyup:P,handleKeydown:B,mergedRailStyle:x,pressed:b,mergedClsPrefix:o,mergedValue:C,checked:I,mergedDisabled:f,cssVars:t?void 0:F,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:o,checked:t,mergedRailStyle:s,onRender:a,$slots:h}=this;a==null||a();const{checked:f,unchecked:m,icon:u,"checked-icon":C,"unchecked-icon":I}=h,b=!(ve(u)&&ve(C)&&ve(I));return c("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,b&&`${e}-switch--icon`,t&&`${e}-switch--active`,o&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:s},U(f,d=>U(m,x=>d||x?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),d),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),x)):null)),c("div",{class:`${e}-switch__button`},U(u,d=>U(C,x=>U(I,z=>c(eo,null,{default:()=>this.loading?c(oo,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(x||d)?c("div",{class:`${e}-switch__button-icon`,key:x?"checked-icon":"icon"},x||d):!this.checked&&(z||d)?c("div",{class:`${e}-switch__button-icon`,key:z?"unchecked-icon":"icon"},z||d):null})))),U(f,d=>d&&c("div",{key:"checked",class:`${e}-switch__checked`},d)),U(m,d=>d&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},d)))))}});const Qo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},et=le("path",{d:"M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36l30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.08 213.08 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51c-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0 0 56.93 240h93.18z",fill:"currentColor"},null,-1),ot=le("path",{d:"M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36l-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84z",fill:"currentColor"},null,-1),tt=le("path",{d:"M464 272h-21.35a260.11 260.11 0 0 1-18.25 32H464a16 16 0 0 0 0-32z",fill:"currentColor"},null,-1),rt=le("path",{d:"M48 240a16 16 0 0 0 0 32h21.35a225.22 225.22 0 0 1-12.42-32z",fill:"currentColor"},null,-1),nt=[et,ot,tt,rt];var it=E({name:"Fitness",render:function(o,t){return ke(),to("svg",Qo,nt)}});const lt=(e,o)=>c(ro,{to:{path:e}},{default:()=>o||"\u7A7A\u7A7A\u5982\u4E5F"});function at(e){return()=>c(go,null,{default:()=>c(e)})}const ct=fe(" \u5C0F\u5377\u6751 "),st=fe(" \u{1F31E} "),dt=fe(" \u{1F31A} "),mt=E({name:"baseLayout",setup(e){const o=no(),t=io(),s=H(""),a=H(!1),h=[{label:()=>lt("/company/list","\u5185\u5377\u4E4B\u738B"),key:"/company/list",icon:at(it)}];function f(m){o.theme=m}return lo(()=>{s.value=t.path}),_e(()=>t.path,m=>{s.value=m}),(m,u)=>{const C=_o,I=bo,b=Yo,d=Eo,x=Jo,z=$o,$=ao("router-view"),T=Po,g=ko;return ke(),co(g,{"has-sider":"",class:"base-layout_wrapper"},{default:M(()=>[L(d,{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":64,width:240,"native-scrollbar":!1,inverted:a.value,"content-style":"padding:24px 0"},{default:M(()=>[L(I,{justify:"center"},{default:M(()=>[L(C,{round:"",size:48},{default:M(()=>[ct]),_:1})]),_:1}),L(b,{value:s.value,inverted:a.value,"collapsed-width":64,"collapsed-icon-size":22,options:h},null,8,["value","inverted"])]),_:1},8,["inverted"]),L(g,null,{default:M(()=>[L(z,{bordered:"",style:{height:"60px"}},{default:M(()=>[L(I,{justify:"end",align:"center"},{default:M(()=>[L(x,{"on-update:value":f,"rubber-band":"",size:"large"},{"unchecked-icon":M(()=>[st]),"checked-icon":M(()=>[dt]),_:1})]),_:1})]),_:1}),L(T,{embedded:"","content-style":"padding: 12px;"},{default:M(()=>[L($)]),_:1})]),_:1})]),_:1})}}});export{mt as default};
