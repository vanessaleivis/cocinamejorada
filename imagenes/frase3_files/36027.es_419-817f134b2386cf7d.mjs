"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[36027],{32346:(e,t,i)=>{i.d(t,{Z:()=>a});function a(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},73006:(e,t,i)=>{i.d(t,{Z:()=>P});var a=i(667294),n=i(883119),o=i(401429),l=i(554786),s=i(785893);let r=({data:e,buttonType:t,calloutType:i})=>{let{accessibilityLabel:a,disabled:o,label:r}=e,d=(0,l.HG)(),c="transparent";"primary"===t&&(c="upsell"===i?"red":"gray");let u="md";switch(i){case"neutral":u=d?"sm":"md";break;case"upsell":u=d?"md":"sm";break;default:u="md"}return(0,s.jsx)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",paddingX:1,children:"link"===e.role?(0,s.jsx)(n.ZP,{accessibilityLabel:a,color:c,disabled:o,fullWidth:!0,href:e.href,onClick:e.onClick,rel:e.rel,size:u,target:e.target,text:r}):(0,s.jsx)(n.zx,{accessibilityLabel:a,color:c,disabled:o,fullWidth:!0,onClick:e.onClick,size:u,text:r})})};var d=i(140017);function c({dismissButton:e,message:t,primaryAction:i,secondaryAction:a,title:o}){let c=(0,l.HG)(),u=i||a,h=(0,d.ZP)(),p=e&&(0,s.jsx)(n.xu,{alignSelf:"baseline",children:(0,s.jsx)(n.hU,{accessibilityLabel:e.accessibilityLabel||h.bt("Ignorar texto explicativo", "Dismiss callout", "experiences.ExperienceCallout.CalloutNeutral.dismissLabel", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:e.onDismiss,size:"xs"})});return(0,s.jsxs)(n.xu,{borderStyle:"sm",color:"transparent",direction:"row",display:"flex",marginBottom:4,padding:4,rounding:4,children:[(0,s.jsxs)(n.kC,{direction:c?"row":"column",width:"100%",wrap:!c,children:[(0,s.jsxs)(n.kC,{flex:"grow",justifyContent:"between",minWidth:0,children:[(0,s.jsxs)(n.kC,{direction:"column",flex:"shrink",children:[o&&(0,s.jsx)(n.xu,{marginBottom:2,children:(0,s.jsx)(n.xv,{size:"400",weight:"bold",children:o})}),(0,s.jsx)(n.xv,{children:t})]}),!c&&p]}),u&&(0,s.jsxs)(n.xu,{display:"flex",flex:"none",marginStart:"auto",marginTop:c?0:2,children:[a&&(0,s.jsx)(r,{buttonType:"secondary",calloutType:"neutral",data:a}),i&&(0,s.jsx)(r,{buttonType:"primary",calloutType:"neutral",data:i})]})]}),c&&p]})}var u=i(213377),h=i(406893);let p=(u.yF+u.lX)*u.yc-u.lX,m=Array.from(Array(u.g5-u.yc).keys()).reduce((e,t)=>{let i=t+u.yc,a=(u.yF+u.lX)*i-u.lX;return e+(0,u.KN)(u.yF,i,i,`.masonry-width-wrapper {
          width: ${a}px;
          min-width: ${a}px;
          margin: 0 auto;

        }`,u.lX)},`.masonry-width-wrapper {
      width: ${p}px;
      min-width: ${p}px;
      margin: 0 auto;

  }`),y=({children:e})=>{let t=(0,l.HG)();return(0,s.jsxs)(a.Fragment,{children:[t&&(0,s.jsx)(h.Z,{unsafeCSS:m})," ",(0,s.jsx)("div",{className:"masonry-width-wrapper",children:e})]})};var x=i(696534);function g({dismissButton:e,imageData:t,message:i,primaryAction:a,secondaryAction:o,title:c}){let u;let h=t?.component&&t.component.type===n.Ee,p=(0,l.HG)(),m=(0,d.ZP)(),y=!!(a||o);"string"==typeof i&&(u=(0,s.jsx)(n.xv,{children:i}));let g=m.bt("Ignorar texto explicativo", "Dismiss callout", "experiences.ExperienceCallout.UpsellCallout.dismissLabel", undefined, true),b=e&&(0,s.jsx)(n.xu,{alignSelf:p?"center":"baseline",children:(0,s.jsx)(n.hU,{accessibilityLabel:e.accessibilityLabel||g,icon:"cancel",iconColor:"darkGray",onClick:e.onDismiss,size:"xs"})});return(0,s.jsxs)(n.xu,{borderStyle:"shadow",color:(0,x.Yc)()&&!p?"elevationFloating":"default",direction:"row",display:"flex",maxWidth:p?900:348,minWidth:p?380:348,padding:4,position:"relative",rounding:4,children:[(0,s.jsxs)(n.kC,{direction:p?"row":"column",width:"100%",wrap:!p,children:[(0,s.jsxs)(n.kC,{alignItems:p?"center":"start",flex:"grow",justifyContent:"between",minWidth:0,children:[t&&(0,s.jsx)(n.xu,{flex:"none",marginEnd:4,width:h?Math.min(t.width||128,128):void 0,children:(0,s.jsx)(n.zd,{rounding:t.mask?.rounding||0,wash:t.mask?.wash||!1,children:t.component})}),(0,s.jsx)(n.xu,{alignItems:"center",direction:"column",display:"flex",marginBottom:"auto",marginEnd:0,marginStart:0,marginTop:"auto",smDisplay:"block",smMarginEnd:6,smMarginStart:t?6:0,children:(0,s.jsxs)(n.xu,{maxWidth:648,children:[c&&(0,s.jsx)(n.xu,{marginBottom:2,children:(0,s.jsx)(n.xv,{size:"400",weight:"bold",children:c})}),u||i]})}),!p&&b]}),y&&(0,s.jsxs)(n.xu,{display:"flex",flex:"none",marginStart:"auto",marginTop:p?0:2,children:[o&&(0,s.jsx)(r,{buttonType:"secondary",calloutType:"upsell",data:o}),a&&(0,s.jsx)(r,{buttonType:"primary",calloutType:"upsell",data:a})]})]}),p&&b]})}var b=i(703404),f=i(256683),_=i(325362),w=i(862249),A=i(983983),k=i(33767);let E=new n.Ry(A.fe),j=new n.H3([E]),v=(e,t,i)=>e&&e.url?{label:e.text,accessibilityLabel:t,href:e.url,role:"link",rel:(0,w.Z)({url:e.url})?"nofollow":"none",onClick:i}:{label:e.text,accessibilityLabel:t,onClick:i},C=(e,t)=>{let i,a;switch(e){case 2:i="pinterest";break;case 1:i="sparkle";break;case 5:i="add";break;case 7:i="angled-pin";break;case 4:i="flashlight";break;case 3:i="search";break;case 6:i="speech-ellipsis";break;case 8:i="instagram";break;case 9:i="camera";break;case 10:i="camera-roll";break;case 11:i="board";break;case 12:i="layout";break;case 13:i="hand-pointing";break;case 14:i="share";break;case 15:i="download";break;case 16:i="shopping-bag";break;case 17:i="check";break;case 18:i="alert";break;case 19:i="bell";break;case 20:i="person";break;case 21:i="flag";break;case 22:i="lightbulb";break;case 23:i="home";break;case 24:i="speech-heart";break;case 25:i="speech-outline";break;case 26:i="heart-outline";break;case 27:i="smiley-outline";break;case 28:i="face-tryon";break;case 29:i="star-outline";break;case 30:i="ads-stats";break;case 31:i="filter";break;default:i=void 0}switch(t){case 1:a="default";break;case 2:case 3:a="subtle";break;case 4:a="inverse";break;case 5:a="info";break;case 6:a="success";break;case 7:a="warning";break;case 8:a="error";break;case 9:a="recommendation";break;case 10:a="brandPrimary";break;case 11:a="light";break;case 12:a="dark";break;default:a=void 0}return i?(0,s.jsx)(n.JO,{accessibilityLabel:"",color:a,icon:i,size:32}):null},P=({experience:e,placementId:t,customFooterHeight:i})=>{let r=(0,l.HG)(),u=(0,d.ZP)(),{navFooterHeight:h}=(0,k.U)();return(0,s.jsx)(o.Z,{eligibleTypes:[27,28],experience:e,placementId:t,children:({complete:e,dismiss:t,experience:o})=>{let l=(0,f.Z)(_.Z)(o.display_data),d=u.bt("Ignorar texto explicativo", "Dismiss callout", "experiences.ExperienceCallout.dismissLabel", undefined, true),p=l.completeButton?v(l.completeButton,d,()=>e()):void 0,m=l.dismissButton&&!l.dismissButton.hideDismissButton?v(l.dismissButton,d,()=>t()):void 0;switch(o.type){case 27:return(0,s.jsx)(y,{children:(0,s.jsx)(c,{dismissButton:{onDismiss:()=>t(),accessibilityLabel:d},message:(0,b.fL)(l.message),primaryAction:p,secondaryAction:m,title:l.title})});case 28:let x=C(l.icon,l.iconColor);return(0,s.jsx)(n.mh,{zIndex:j,children:(0,s.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{marginBottom:r?24:(i??h)+8,transition:"margin-bottom 300ms ease-in-out"}},display:"flex",justifyContent:"center",left:!0,position:"fixed",right:!0,children:(0,s.jsx)(n.xu,{children:(0,s.jsx)(g,{dismissButton:{onDismiss:()=>t(),accessibilityLabel:d},imageData:x?{component:x}:void 0,message:(0,b.fL)(l.message),primaryAction:p,secondaryAction:m,title:l.title})})})});default:return(0,s.jsx)(a.Fragment,{})}}})}},217764:(e,t,i)=>{i.d(t,{Z:()=>f});var a=i(667294),n=i(240684),o=i(883119),l=i(140017),s=i(862249),r=i(983983),d=i(785893);let c=new o.Ry(r.fe),u=new o.H3([c]),h=new o.H3([u]),p={modalMargin:24,gestaltModalMargin:6,closeButtonMargin:6},m={width:540,height:363},y={modalMargin:24,gestaltModalMargin:6,closeButtonMargin:4},x={width:320,height:215},g=(0,n.ZP)({resolved:{},chunkName:()=>"app-www-video-VideoWrapper",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.all([i.e(93041),i.e(84452),i.e(95813)]).then(i.bind(i,131348)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return i(this.resolve(e))},resolve:()=>131348}),b=e=>{let{isMobile:t,image:i,video:a,handleDismiss:n,title:s}=e,r=(0,l.ZP)(),c=t?y:p,u=t?x:m,b=(0,d.jsx)(o.xu,{display:"flex",justifyContent:t?"start":"end",margin:c.closeButtonMargin,position:"absolute",width:u.width-2*c.modalMargin,zIndex:h,children:(0,d.jsx)(o.hU,{accessibilityLabel:r.bt("Ignorar", "Dismiss", "experiences.ExperienceModalWindow.modalDismissIconButton", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:n,size:"sm"})}),f=i?i.imageAlt:s,_=i?i.url:a?.metadata?.thumbnail,w=i?.dominantColor?.length===3?`rgb(${i.dominantColor[0]}, ${i.dominantColor[1]}, ${i.dominantColor[2]})`:"rgb(111, 91, 77)",A=u.width/u.height,k={width:u.width,height:u.height};i&&i.width&&i.height?(A=i.width/i.height,k={width:i.width,height:i.height}):a&&a.metadata.width&&a.metadata.height&&(A=a.metadata.width/a.metadata.height,k={width:a.metadata.width,height:a.metadata.height});let E=_&&(0,d.jsx)(o.Ee,{alt:f||"",color:w,fit:"cover",naturalHeight:k.height,naturalWidth:k.width,src:_}),j=Math.trunc(u.width/A);return(0,d.jsxs)(o.xu,{bottom:!0,height:j,left:!0,overflow:"hidden",right:!0,top:!0,width:u.width,children:[b,i&&E,a&&(0,d.jsx)(g,{aspectRatio:A,captions:"",controls:!1,fallback:E,isAutoPlay:!0,loop:!0,objectFit:"cover",onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:i?.url||a.metadata.thumbnail,src:a.url,volume:0})]})};function f(e){let{displayData:t,handleComplete:i,handleDismiss:n,isMobile:l}=e,{video:r,image:c,title:u,body:h,completeButton:m,dismissButton:x}=t,g=l?y:p,f=l?"center":"start",_=(0,s.Z)({url:m.url});return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(b,{handleDismiss:n,image:c,isMobile:l,title:u,video:r}),(0,d.jsxs)(o.xu,{direction:"column",display:"flex",justifyContent:"center",margin:g.gestaltModalMargin,children:[(0,d.jsx)(o.X6,{align:f,children:u}),(0,d.jsx)(o.xu,{marginBottom:4,marginTop:2,children:(0,d.jsx)(o.xv,{align:f,children:h})}),(0,d.jsxs)(o.xu,{dangerouslySetInlineStyle:{__style:{flexWrap:"wrap-reverse"}},display:"flex",justifyContent:l?"center":"end",margin:-1,children:[x&&!x.hideDismissButton&&(0,d.jsx)(o.xu,{fit:!0,flex:l?"grow":"none",minWidth:l?130:void 0,padding:1,children:(0,d.jsx)(o.zx,{color:"gray",fullWidth:l,onClick:n,size:"lg",text:x.text})}),m&&(0,d.jsx)(o.xu,{fit:!0,flex:l?"grow":"none",minWidth:l?130:void 0,padding:1,children:m.url?(0,d.jsx)(o.ZP,{color:"red",fullWidth:l,href:m.url,onClick:()=>i(),rel:_?"nofollow":"none",size:"lg",text:m.text}):(0,d.jsx)(o.zx,{color:"red",fullWidth:l,onClick:()=>i(),size:"lg",text:m.text})})]})]})]})}},219651:(e,t,i)=>{i.d(t,{Z:()=>j});var a=i(667294),n=i(545007),o=i(883119),l=i(401429),s=i(217764),r=i(930837),d=i(256683),c=i(325362),u=i(554786),h=i(32346),p=i(844683),m=i(140017),y=i(30378),x=i(55202),g=i(239821),b=i(785893);let f=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},_=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function w({accessibilityModalLabel:e,allowScroll:t=!1,children:i,closeOnOutsideClick:n=!0,footer:l,isOpen:s,modalWidth:r,onDismiss:d,zIndex:c}){let u=(0,m.ZP)(),w=(0,a.useRef)(!1),{setAppFocusState:A}=(0,g.I)();return((0,a.useEffect)(()=>(w.current=(0,h.Z)(()=>{}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&w.current&&(window.cancelAnimationFrame(w.current),w.current=null)}),[]),(0,a.useEffect)(()=>(s?(y.Z.pause(),A(!1)):(y.Z.resume(),A(!0)),()=>{s&&(y.Z.resume(),A(!0))}),[A,s]),(0,a.useEffect)(()=>{let e=s&&!t;return e&&f(),()=>{e&&_()}},[s,t]),s)?(0,b.jsx)(x.Z,{children:(0,b.jsx)(o.mh,{children:(0,b.jsxs)(o.xu,{"aria-label":e,position:"relative",role:"dialog",zIndex:c||p.b7,children:[(0,b.jsx)(o.iP,{accessibilityLabel:u.bt("Máscara de la ventana modal emergente móvil", "Mobile Popup Modal Mask", "mweb.experience_popup_modal.mask", undefined, true),onTap:()=>{n&&d()},tapStyle:"none",children:(0,b.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new o.Ry(1)})}),(0,b.jsxs)(o.xu,{color:"default",dangerouslySetInlineStyle:{__style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",touchAction:"none",transitionProperty:"transform, opacity",transitionTimingFunction:"ease-out"}},overflow:"hidden",position:"fixed",rounding:4,top:!0,width:r,zIndex:new o.Ry(1),children:[i,l]})]})})}):null}var A=i(983983);let k=new o.Ry(A.fe),E=new o.H3([k]);function j(e){let t=(0,n.v9)(({experiences:t})=>e.experience||(e.placementId?t[e.placementId]:void 0)),i=t?.display_data?.delay_in_millis,[h,p]=(0,a.useState)(t&&!i),m=(0,u.HG)();return(0,a.useEffect)(()=>{p(t&&!t.display_data?.delay_in_millis)},[t]),(0,a.useEffect)(()=>{let e;return i&&(e=setTimeout(()=>{p(!0)},i)),()=>clearTimeout(e)},[i]),(0,b.jsx)(a.Fragment,{children:h&&(0,b.jsx)(l.Z,{eligibleTypes:[26],experience:t,placementId:e.placementId,children:({complete:e,dismiss:t,experience:{display_data:i}})=>{let a=(0,d.Z)(c.Z)(i),n=()=>{p(!1),t()},l=()=>{e(),p(!1)},{title:u,body:h,completeButton:y}=a;return u&&h&&y.text?m?(0,b.jsx)(o.mh,{zIndex:E,children:(0,b.jsx)(r.ZP,{accessibilityModalLabel:"",onDismiss:n,size:"sm",children:(0,b.jsx)(s.Z,{displayData:a,handleComplete:()=>l(),handleDismiss:n,isMobile:!1})})}):(0,b.jsx)(w,{accessibilityModalLabel:a?.title,isOpen:!0,modalWidth:320,onDismiss:n,children:(0,b.jsx)(s.Z,{displayData:a,handleComplete:()=>l(),handleDismiss:n,isMobile:!0})}):null}})})}},588664:(e,t,i)=>{i.d(t,{Z:()=>a});function a(e,t,i=28){let n;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;n=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let o=new Date,l=n?new Date(n):o;return l.setDate(l.getDate()+i),new Date().getTime()<l.getTime()}},317540:(e,t,i)=>{i.d(t,{Z:()=>a});let a={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},55202:(e,t,i)=>{i.d(t,{U:()=>l,Z:()=>s});var a=i(317540),n=i(785893);let o=()=>{},l=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function s({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:i,allowScroll:s,children:r}){let d=e=>{t&&e.keyCode===a.Z.ESCAPE||l(e)};return(0,n.jsx)("div",{onAbort:l,onAnimationEnd:l,onAnimationIteration:l,onAnimationStart:l,onBlur:o,onCanPlay:i?o:l,onCanPlayThrough:l,onChange:l,onClick:e?o:l,onCompositionEnd:l,onCompositionStart:l,onCompositionUpdate:l,onContextMenu:l,onCopy:l,onCut:l,onDoubleClick:l,onDurationChange:l,onEmptied:l,onEncrypted:l,onEnded:l,onError:l,onFocus:o,onInput:l,onInvalid:l,onKeyDown:d,onKeyPress:d,onKeyUp:d,onLoad:l,onLoadedData:l,onLoadedMetadata:l,onLoadStart:l,onMouseDown:l,onMouseEnter:l,onMouseLeave:l,onMouseMove:e?o:l,onMouseOut:l,onMouseOver:l,onMouseUp:e?o:l,onPaste:l,onPause:l,onPlay:l,onPlaying:l,onProgress:l,onRateChange:l,onScroll:s?o:l,onSeeked:l,onSeeking:l,onSelect:l,onStalled:l,onSubmit:l,onSuspend:l,onTimeUpdate:l,onTouchCancel:l,onTouchEnd:e?o:l,onTouchMove:e?o:l,onTouchStart:e?o:l,onTransitionEnd:l,onVolumeChange:l,onWaiting:l,onWheel:l,children:r})}},239821:(e,t,i)=>{i.d(t,{g:()=>h,I:()=>u});var a=i(667294),n=i(342513),o=i(705895),l=i(259866);let s={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},r=(e=s,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:a,isPromoted:n,currentTime:o}=i,{videosAutoplaying:s}=e,{currentlyPlayingOrganicVideoId:r,promotedVideosAutoplaying:d,organicVideosAutoplaying:c}=s,u=(0,l.Z)(d),h=(0,l.Z)(c);return!n&&r?e:(n?u[a]={pinId:a,currentTime:o,paused:!1}:h[a]={pinId:a,currentTime:o,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:n?r:a,promotedVideosAutoplaying:u,organicVideosAutoplaying:h}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:a,isPromoted:n,currentTime:o}=i,{videosAutoplaying:s}=e,{promotedVideosAutoplaying:r,organicVideosAutoplaying:d}=s,c=(0,l.Z)(r),u=(0,l.Z)(d);return n?c[a]={...c[a],paused:!0,currentTime:o}:u[a]={...u[a],paused:!0,currentTime:o},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:c,organicVideosAutoplaying:u}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var d=i(785893);let{Provider:c,useHook:u}=(0,n.Z)("AppUI");function h({children:e}){let[t,i]=(0,a.useReducer)(r,s),n=(0,a.useCallback)(e=>i({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),l=(0,a.useCallback)(e=>i({type:"SET_APP_FOCUS_STATE",payload:e}),[]),u=(0,a.useCallback)(e=>i({type:"SET_CURRENT_VIDEO",payload:e}),[]),h=(0,a.useCallback)(e=>i({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),p=(0,a.useCallback)(e=>i({type:"SET_IS_AUTOPLAY",payload:e}),[]),m=(0,a.useCallback)(e=>i({type:"SET_VIEWPORT_SIZE",payload:e}),[]),y=(0,a.useCallback)(e=>i({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),x=(0,a.useMemo)(()=>({pauseAutoplay:n,setCurrentVideo:u,setFooterPlusButtonVisible:h,setIsAutoplay:p,setViewportSize:m,toggleTypeaheadOverlay:y,setAppFocusState:l,appUI:t}),[n,u,h,p,m,y,l,t]);return(0,a.useEffect)(()=>{o.Z.onSessionResume(()=>{l(!0)}).onSessionPause(()=>{l(!1)})},[l]),(0,d.jsx)(c,{value:x,children:e})}},33767:(e,t,i)=>{i.d(t,{U:()=>u,m:()=>h});var a=i(667294),n=i(545007),o=i(342513),l=i(422210),s=i(588664),r=i(149722),d=i(785893);let{Provider:c,useHook:u}=(0,o.Z)("NavFooterContext");function h({children:e}){let[t,i]=(0,a.useState)(),[o,u]=(0,a.useState)(!1),[h,p]=(0,a.useState)(0),[m,y]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1),[_,w]=(0,a.useState)(!1),A=(0,s.Z)(null,(0,r.Z)()),k=(0,n.v9)(e=>e.session.isAuthenticated),E=(0,n.v9)(e=>k?e.users[e.session.userId]:void 0),j=(0,l.Z)(E?.created_at);return(0,d.jsx)(c,{value:{forceShowNavFooter:b,homeFlyoutText:t,isNavFooterHiddenAfterScroll:o,isNavFooterHiddenByPinActionBar:_,navFooterHeight:o?0:k&&(A||j)?64:52,numUnauthSavedPins:h,setForceShowNavFooter:f,setHomeFlyoutText:i,setIsNavFooterHiddenAfterScroll:u,setIsNavFooterHiddenByPinActionBar:w,setNumUnauthSavedPins:p,setShowHomeBadge:y,setShowHomeFlyoutWithButton:g,showHomeBadge:m,showHomeFlyoutWithButton:x},children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/36027.es_419-817f134b2386cf7d.mjs.map