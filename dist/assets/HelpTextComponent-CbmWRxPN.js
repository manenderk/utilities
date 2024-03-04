import{r as y,a as Ee,u as oe,R as h,g as te,j as N}from"./index-R2vJH_II.js";import{u as ne,m as Te,f as J,a as A,b as Ce,B as $,c as re,g as Re,s as se,d as ae,i as ie,e as le,O as ce,h as pe,j as ue,k as de,F as De,l as Me,n as Fe,o as Se,p as Oe,q as Ne,r as Ge,t as Ae,v as Ie,w as ke,x as ze,y as $e,z as je,A as He,C as Le,D as Be,T as Ue,E as qe,G as Ve}from"./use-floating-auto-update-K6C7CUkU.js";function Q(e,n){return Array.isArray(e)?[...e].reduce((t,o)=>({...t,...Q(o,n)}),{}):typeof e=="function"?e(n):e??{}}function Xe(e){if(!e||typeof e=="string")return 0;const n=e/36;return Math.round((4+15*n**.25+n/5)*10)}function Z(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const G=typeof window<"u"&&window.requestAnimationFrame;function Ye({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:t=()=>{},opened:o}){const a=y.useRef(null),d=0,u={display:"none",height:0,overflow:"hidden"},[f,l]=y.useState(o?{}:u),c=r=>{Ee.flushSync(()=>l(r))},p=r=>{c(s=>({...s,...r}))};function g(r){const s=e||Xe(r);return{transition:`height ${s}ms ${n}, opacity ${s}ms ${n}`}}ne(()=>{typeof G=="function"&&G(o?()=>{p({willChange:"height",display:"block",overflow:"hidden"}),G(()=>{const r=Z(a);p({...g(r),height:r})})}:()=>{const r=Z(a);p({...g(r),willChange:"height",height:r}),G(()=>p({height:d,overflow:"hidden"}))})},[o]);const x=r=>{if(!(r.target!==a.current||r.propertyName!=="height"))if(o){const s=Z(a);s===f.height?c({}):p({height:s}),t()}else f.height===d&&(c(u),t())};function i({style:r={},refKey:s="ref",...m}={}){const b=m[s];return{"aria-hidden":!o,...m,[s]:Te(a,b),onTransitionEnd:x,style:{boxSizing:"border-box",...r,...f}}}return i}const Ze={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},fe=J((e,n)=>{const{children:t,in:o,transitionDuration:a,transitionTimingFunction:d,style:u,onTransitionEnd:f,animateOpacity:l,...c}=A("Collapse",Ze,e),p=oe(),g=Ce(),i=(p.respectReducedMotion?g:!1)?0:a,r=Ye({opened:o,transitionDuration:i,transitionTimingFunction:d,onTransitionEnd:f});return i===0?o?h.createElement($,{...c},t):null:h.createElement($,{...r({style:{opacity:o||!l?1:0,transition:l?`opacity ${i}ms ${d}`:"none",...Q(u,p)},ref:n,...c})},t)});fe.displayName="@mantine/core/Collapse";const Je={duration:100,transition:"fade"};function Qe(e,n){return{...Je,...n,...e}}function We({offset:e,position:n}){const[t,o]=y.useState(!1),a=y.useRef(),{x:d,y:u,elements:f,refs:l,update:c,placement:p}=re({placement:n,middleware:[se({crossAxis:!0,padding:5,rootBoundary:"document"})]}),g=p.includes("right")?e:n.includes("left")?e*-1:0,x=p.includes("bottom")?e:n.includes("top")?e*-1:0,i=y.useCallback(({clientX:r,clientY:s})=>{l.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:r,y:s,left:r+g,top:s+x,right:r,bottom:s}}})},[f.reference]);return y.useEffect(()=>{if(l.floating.current){const r=a.current;r.addEventListener("mousemove",i);const s=Re(l.floating.current);return s.forEach(m=>{m.addEventListener("scroll",c)}),()=>{r.removeEventListener("mousemove",i),s.forEach(m=>{m.removeEventListener("scroll",c)})}}},[f.reference,l.floating.current,c,i,t]),{handleMouseMove:i,x:d,y:u,opened:t,setOpened:o,boundaryRef:a,floating:l.setFloating}}var j={tooltip:"m-1b3c8819",arrow:"m-f898399f"};const _e={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:pe("popover")},Ke=ue((e,{radius:n,color:t})=>({tooltip:{"--tooltip-radius":n===void 0?void 0:de(n),"--tooltip-bg":t?te(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),W=J((e,n)=>{const t=A("TooltipFloating",_e,e),{children:o,refProp:a,withinPortal:d,style:u,className:f,classNames:l,styles:c,unstyled:p,radius:g,color:x,label:i,offset:r,position:s,multiline:m,zIndex:b,disabled:C,variant:R,vars:D,portalProps:M,...F}=t,S=oe(),P=ae({name:"TooltipFloating",props:t,classes:j,className:f,style:u,classNames:l,styles:c,unstyled:p,rootSelector:"tooltip",vars:D,varsResolver:Ke}),{handleMouseMove:w,x:I,y:k,opened:L,boundaryRef:B,floating:U,setOpened:z}=We({offset:r,position:s});if(!ie(o))throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const q=le(B,o.ref,n),V=O=>{var E,T;(T=(E=o.props).onMouseEnter)==null||T.call(E,O),w(O),z(!0)},X=O=>{var E,T;(T=(E=o.props).onMouseLeave)==null||T.call(E,O),z(!1)};return h.createElement(h.Fragment,null,h.createElement(ce,{...M,withinPortal:d},h.createElement($,{...F,...P("tooltip",{style:{...Q(u,S),zIndex:b,display:!C&&L?"block":"none",top:(k&&Math.round(k))??"",left:(I&&Math.round(I))??""}}),variant:R,ref:U,mod:{multiline:m}},i)),y.cloneElement(o,{...o.props,[a]:q,onMouseEnter:V,onMouseLeave:X}))});W.classes=j;W.displayName="@mantine/core/TooltipFloating";const me=y.createContext(!1),eo=me.Provider,oo=()=>y.useContext(me),to={openDelay:0,closeDelay:0};function he(e){const{openDelay:n,closeDelay:t,children:o}=A("TooltipGroup",to,e);return h.createElement(eo,{value:!0},h.createElement(De,{delay:{open:n,close:t}},o))}he.displayName="@mantine/core/TooltipGroup";function no(e){var F,S,P;const[n,t]=y.useState(!1),a=typeof e.opened=="boolean"?e.opened:n,d=oo(),u=Me(),{delay:f,currentId:l,setCurrentId:c}=Fe(),p=y.useCallback(w=>{t(w),w&&c(u)},[c,u]),{x:g,y:x,context:i,refs:r,update:s,placement:m,middlewareData:{arrow:{x:b,y:C}={}}}=re({strategy:e.strategy,placement:e.position,open:a,onOpenChange:p,middleware:[Se(e.offset),se({padding:8}),Oe(),Ne({element:e.arrowRef,padding:e.arrowOffset}),...e.inline?[Ge()]:[]]}),{getReferenceProps:R,getFloatingProps:D}=Ae([Ie(i,{enabled:(F=e.events)==null?void 0:F.hover,delay:d?f:{open:e.openDelay,close:e.closeDelay},mouseOnly:!((S=e.events)!=null&&S.touch)}),ke(i,{enabled:(P=e.events)==null?void 0:P.focus,visibleOnly:!0}),ze(i,{role:"tooltip"}),$e(i,{enabled:typeof e.opened>"u"}),je(i,{id:u})]);He({opened:a,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:r,update:s}}),ne(()=>{var w;(w=e.onPositionChange)==null||w.call(e,m)},[m]);const M=a&&l&&l!==u;return{x:g,y:x,arrowX:b,arrowY:C,reference:r.setReference,floating:r.setFloating,getFloatingProps:D,getReferenceProps:R,isGroupPhase:M,opened:a,placement:m}}const ee={position:"top",refProp:"ref",withinPortal:!0,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},events:{hover:!0,focus:!1,touch:!1},zIndex:pe("popover"),positionDependencies:[]},ro=ue((e,{radius:n,color:t})=>({tooltip:{"--tooltip-radius":n===void 0?void 0:de(n),"--tooltip-bg":t?te(t,e):void 0,"--tooltip-color":t?"var(--mantine-color-white)":void 0}})),H=J((e,n)=>{const t=A("Tooltip",ee,e),{children:o,position:a,refProp:d,label:u,openDelay:f,closeDelay:l,onPositionChange:c,opened:p,withinPortal:g,radius:x,color:i,classNames:r,styles:s,unstyled:m,style:b,className:C,withArrow:R,arrowSize:D,arrowOffset:M,arrowRadius:F,arrowPosition:S,offset:P,transitionProps:w,multiline:I,events:k,zIndex:L,disabled:B,positionDependencies:U,onClick:z,onMouseEnter:q,onMouseLeave:V,inline:X,variant:O,keepMounted:E,vars:T,portalProps:ye,mod:ge,floatingStrategy:ve,...we}=A("Tooltip",ee,t),{dir:xe}=Le(),_=y.useRef(null),v=no({position:Be(xe,a),closeDelay:l,openDelay:f,onPositionChange:c,opened:p,events:k,arrowRef:_,arrowOffset:M,offset:typeof P=="number"?P+(R?D/2:0):P,positionDependencies:[...U,o],inline:X,strategy:ve}),Y=ae({name:"Tooltip",props:t,classes:j,className:C,style:b,classNames:r,styles:s,unstyled:m,rootSelector:"tooltip",vars:T,varsResolver:ro});if(!ie(o))throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");const Pe=le(v.reference,o.ref,n),K=Qe(w,{duration:100,transition:"fade"});return h.createElement(h.Fragment,null,h.createElement(ce,{...ye,withinPortal:g},h.createElement(Ue,{...K,keepMounted:E,mounted:!B&&!!v.opened,duration:v.isGroupPhase?10:K.duration},be=>h.createElement($,{...we,variant:O,mod:[{multiline:I},ge],...v.getFloatingProps({ref:v.floating,className:Y("tooltip").className,style:{...Y("tooltip").style,...be,zIndex:L,top:v.y??0,left:v.x??0}})},u,h.createElement(qe,{ref:_,arrowX:v.arrowX,arrowY:v.arrowY,visible:R,position:v.placement,arrowSize:D,arrowOffset:M,arrowRadius:F,arrowPosition:S,...Y("arrow")})))),y.cloneElement(o,v.getReferenceProps({onClick:z,onMouseEnter:q,onMouseLeave:V,onMouseMove:t.onMouseMove,onPointerDown:t.onPointerDown,onPointerEnter:t.onPointerEnter,[d]:Pe,className:Ve(C,o.props.className),...o.props})))});H.classes=j;H.displayName="@mantine/core/Tooltip";H.Floating=W;H.Group=he;const lo=async(e,n)=>{let t;if(e!=null&&e.current?t=e.current.innerText:n&&(t=n),!t){alert("Nothing to copy");return}if(navigator.clipboard){await navigator.clipboard.writeText(t);return}console.log('fallbacking to document.execCommand("copy")');const o=document.createElement("textarea");o.value=t,o.style.top="0",o.style.left="0",o.style.width="10px",o.style.height="10px",o.style.zIndex="1000",o.style.position="fixed",document.body.appendChild(o),o.focus(),o.select();let a;try{a=document.execCommand("copy")}catch(d){console.error(d)}a||console.log("Unable to copy text"),o.remove()},so=({isOpened:e,children:n})=>{const[t,o]=y.useState(e);return N.jsxs("div",{children:[N.jsxs("span",{className:"link",onClick:()=>o(!t),children:[N.jsx("i",{className:t?"fa fa-caret-down":"fa fa-caret-right"})," Help"]}),N.jsx(fe,{in:t,children:N.jsx("div",{className:"mt-2 p-2 help-container border",children:n})})]})};so.defaultProps={isOpened:!1};export{lo as C,so as H,H as T};
