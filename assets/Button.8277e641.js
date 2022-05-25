import{j as N,d as Z,k as ze,t as $e,r as S,l as Be,m as Se,p,q as b,v as Pe,x as ee,y as Te,z as y,A as s,B as J,C as ke,D as oe,E as Re,F as Ee,G as R,H as He,I as Ne,J as r,K as E,L as Ie,N as Oe,M as De,O as Fe}from"./index.299be698.js";import{u as je,a as _e,c as U,r as X,i as Ke,b as Me}from"./use-rtl.188806cf.js";var Ge=N("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Ve=Z({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ze("-base-wave",Ge,$e(e,"clsPrefix"));const f=S(null),h=S(!1);let u=null;return Be(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),Se(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});const{cubicBezierEaseInOut:C}=Pe;function We({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}function $(e){return ee(e,[255,255,255,.16])}function H(e){return ee(e,[0,0,0,.12])}const qe=Te("n-button-group");var Qe=b([N("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("color",[s("border",{borderColor:"var(--n-border-color)"}),y("disabled",[s("border",{borderColor:"var(--n-border-color-disabled)"})]),J("disabled",[b("&:focus",[s("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[s("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[s("border",{border:"var(--n-border-disabled)"})]),J("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[s("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[s("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),N("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,s("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),s("border",{border:"var(--n-border)"}),s("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),s("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[N("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[ke({top:"50%",originalTransform:"translateY(-50%)"})]),We()]),s("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[b("~",[s("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[s("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const Le=Object.assign(Object.assign({},oe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),Ae=Z({name:"Button",props:Le,setup(e){const f=S(null),h=S(null),u=S(!1),v=Re(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),re=Ee(qe,{}),{mergedSizeRef:I}=je({},{defaultSize:"medium",mergedSize:t=>{const{size:d}=e;if(d)return d;const{size:m}=re;if(m)return m;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),W=R(()=>e.focusable&&!e.disabled),te=t=>{var d;e.disabled||e.nativeFocusBehavior||W.value&&(t.preventDefault(),(d=f.value)===null||d===void 0||d.focus({preventScroll:!0}))},ne=t=>{var d;if(!e.disabled&&!e.loading){const{onClick:m}=e;m&&Me(m,t),e.text||(d=h.value)===null||d===void 0||d.play()}},ie=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;u.value=!1}},ae=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},le=()=>{u.value=!1},{inlineThemeDisabled:q,mergedClsPrefixRef:O,mergedRtlRef:se}=He(e),de=oe("Button","-button",Qe,Ne,e,O),ce=_e("Button",se,O),Q=R(()=>{const t=de.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:m},self:o}=t,{rippleDuration:D,opacityDisabled:P,fontWeight:F,fontWeightStrong:j}=o,x=I.value,{dashed:_,type:w,ghost:K,text:g,color:i,round:L,circle:M,textColor:z,secondary:ue,tertiary:A,quaternary:be,strong:fe}=e,he={"font-weight":fe?j:F};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const T=w==="tertiary",Y=w==="default",n=T?"default":w;if(g){const l=z||i,c=l||o[r("textColorText",n)];a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":l?$(l):o[r("textColorTextHover",n)],"--n-text-color-pressed":l?H(l):o[r("textColorTextPressed",n)],"--n-text-color-focus":l?$(l):o[r("textColorTextHover",n)],"--n-text-color-disabled":l||o[r("textColorTextDisabled",n)]}}else if(K||_){const l=z||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":l||o[r("textColorGhost",n)],"--n-text-color-hover":l?$(l):o[r("textColorGhostHover",n)],"--n-text-color-pressed":l?H(l):o[r("textColorGhostPressed",n)],"--n-text-color-focus":l?$(l):o[r("textColorGhostHover",n)],"--n-text-color-disabled":l||o[r("textColorGhostDisabled",n)]}}else if(ue){const l=Y?o.textColor:T?o.textColorTertiary:o[r("color",n)],c=i||l,k=w!=="default"&&w!=="tertiary";a={"--n-color":k?E(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?E(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?E(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?E(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(A||be){const l=Y?o.textColor:T?o.textColorTertiary:o[r("color",n)],c=i||l;A?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=c,a["--n-text-color-hover"]=c,a["--n-text-color-pressed"]=c,a["--n-text-color-focus"]=c,a["--n-text-color-disabled"]=c}else a={"--n-color":i||o[r("color",n)],"--n-color-hover":i?$(i):o[r("colorHover",n)],"--n-color-pressed":i?H(i):o[r("colorPressed",n)],"--n-color-focus":i?$(i):o[r("colorFocus",n)],"--n-color-disabled":i||o[r("colorDisabled",n)],"--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":z||(i?o.textColorPrimary:T?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":z||(i?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":z||(i?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":z||(i?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":z||(i?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let G={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};g?G={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:G={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",x)]:V,[r("fontSize",x)]:ve,[r("padding",x)]:pe,[r("paddingRound",x)]:xe,[r("iconSize",x)]:ye,[r("borderRadius",x)]:me,[r("iconMargin",x)]:ge,waveOpacity:Ce}=o,we={"--n-width":M&&!g?V:"initial","--n-height":g?"initial":V,"--n-font-size":ve,"--n-padding":M||g?"initial":L?xe:pe,"--n-icon-size":ye,"--n-icon-margin":ge,"--n-border-radius":g?"initial":M||L?V:me};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":m,"--n-ripple-duration":D,"--n-opacity-disabled":P,"--n-wave-opacity":Ce},he),a),G),we)}),B=q?Ie("button",R(()=>{let t="";const{dashed:d,type:m,ghost:o,text:D,color:P,round:F,circle:j,textColor:x,secondary:_,tertiary:w,quaternary:K,strong:g}=e;d&&(t+="a"),o&&(t+="b"),D&&(t+="c"),F&&(t+="d"),j&&(t+="e"),_&&(t+="f"),w&&(t+="g"),K&&(t+="h"),g&&(t+="i"),P&&(t+="j"+U(P)),x&&(t+="k"+U(x));const{value:i}=I;return t+="l"+i[0],t+="m"+m[0],t}),Q,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:O,mergedFocusable:W,mergedSize:I,showBorder:v,enterPressed:u,rtlEnabled:ce,handleMousedown:te,handleKeydown:ae,handleBlur:le,handleKeyup:ie,handleClick:ne,customColorCssVars:R(()=>{const{color:t}=e;if(!t)return null;const d=$(t);return{"--n-border-color":t,"--n-border-color-hover":d,"--n-border-color-pressed":H(t),"--n-border-color-focus":d,"--n-border-color-disabled":t}}),cssVars:q?void 0:Q,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h==null||h();const u=X(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(Oe,{width:!0},{default:()=>X(this.$slots.icon,v=>(this.loading||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Ke(this.$slots.default)?"0":""}},p(De,null,{default:()=>this.loading?p(Fe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Ve,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var Ue=Ae;export{Ue as N};
