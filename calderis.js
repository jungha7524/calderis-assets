(function(){"use strict";var Tp={exports:{}},Oa={},Ap={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),bx=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Dx=Symbol.for("react.forward_ref"),Nx=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),Ux=Symbol.for("react.lazy"),Cp=Symbol.iterator;function Fx(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bp=Object.assign,Pp={};function cs(t,e,n){this.props=t,this.context=e,this.refs=Pp,this.updater=n||Rp}cs.prototype.isReactComponent={},cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lp(){}Lp.prototype=cs.prototype;function iu(t,e,n){this.props=t,this.context=e,this.refs=Pp,this.updater=n||Rp}var ru=iu.prototype=new Lp;ru.constructor=iu,bp(ru,cs.prototype),ru.isPureReactComponent=!0;var Dp=Array.isArray,Np=Object.prototype.hasOwnProperty,su={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function Up(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Np.call(e,i)&&!Ip.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wo,type:t,key:s,ref:o,props:r,_owner:su.current}}function Ox(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ou(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function kx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fp=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kx(""+t.key):e.toString(36)}function ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case Ax:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,Dp(r)?(n="",t!=null&&(n=t.replace(Fp,"$&/")+"/"),ka(r,e,n,"",function(c){return c})):r!=null&&(ou(r)&&(r=Ox(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=ka(s,e,n,l,r)}else if(l=Fx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var i=[],r=0;return ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Ba={transition:null},Bx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:su};function Op(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!ou(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},Ke.Component=cs,Ke.Fragment=Cx,Ke.Profiler=bx,Ke.PureComponent=iu,Ke.StrictMode=Rx,Ke.Suspense=Nx,Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx,Ke.act=Op,Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=su.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Np.call(e,l)&&!Ip.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:wo,type:t.type,key:r,ref:s,props:i,_owner:o}},Ke.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Px,_context:t},t.Consumer=t},Ke.createElement=Up,Ke.createFactory=function(t){var e=Up.bind(null,t);return e.type=t,e},Ke.createRef=function(){return{current:null}},Ke.forwardRef=function(t){return{$$typeof:Dx,render:t}},Ke.isValidElement=ou,Ke.lazy=function(t){return{$$typeof:Ux,_payload:{_status:-1,_result:t},_init:zx}},Ke.memo=function(t,e){return{$$typeof:Ix,type:t,compare:e===void 0?null:e}},Ke.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}},Ke.unstable_act=Op,Ke.useCallback=function(t,e){return nn.current.useCallback(t,e)},Ke.useContext=function(t){return nn.current.useContext(t)},Ke.useDebugValue=function(){},Ke.useDeferredValue=function(t){return nn.current.useDeferredValue(t)},Ke.useEffect=function(t,e){return nn.current.useEffect(t,e)},Ke.useId=function(){return nn.current.useId()},Ke.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)},Ke.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)},Ke.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)},Ke.useMemo=function(t,e){return nn.current.useMemo(t,e)},Ke.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)},Ke.useRef=function(t){return nn.current.useRef(t)},Ke.useState=function(t){return nn.current.useState(t)},Ke.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)},Ke.useTransition=function(){return nn.current.useTransition()},Ke.version="18.3.1",Ap.exports=Ke;var qe=Ap.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=qe,Vx=Symbol.for("react.element"),Gx=Symbol.for("react.fragment"),Wx=Object.prototype.hasOwnProperty,Xx=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function kp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Wx.call(e,i)&&!jx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vx,type:t,key:s,ref:o,props:r,_owner:Xx.current}}Oa.Fragment=Gx,Oa.jsx=kp,Oa.jsxs=kp,Tp.exports=Oa;var Z=Tp.exports,zp={exports:{}},Cn={},Bp={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var $=D.length;D.push(q);e:for(;0<$;){var se=$-1>>>1,j=D[se];if(0<r(j,q))D[se]=q,D[$]=j,$=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],$=D.pop();if($!==q){D[0]=$;e:for(var se=0,j=D.length,fe=j>>>1;se<fe;){var V=2*(se+1)-1,K=D[V],de=V+1,pe=D[de];if(0>r(K,$))de<j&&0>r(pe,K)?(D[se]=pe,D[de]=$,se=de):(D[se]=K,D[V]=$,se=V);else if(de<j&&0>r(pe,$))D[se]=pe,D[de]=$,se=de;else break e}}return q}function r(D,q){var $=D.sortIndex-q.sortIndex;return $!==0?$:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(D){if(y=!1,g(D),!_)if(n(l)!==null)_=!0,U(P);else{var q=n(c);q!==null&&te(S,q.startTime-D)}}function P(D,q){_=!1,y&&(y=!1,d(C),C=-1),p=!0;var $=h;try{for(g(q),f=n(l);f!==null&&(!(f.expirationTime>q)||D&&!E());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var j=se(f.expirationTime<=q);q=t.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&i(l),g(q)}else i(l);f=n(l)}if(f!==null)var fe=!0;else{var V=n(c);V!==null&&te(S,V.startTime-q),fe=!1}return fe}finally{f=null,h=$,p=!1}}var T=!1,A=null,C=-1,B=5,x=-1;function E(){return!(t.unstable_now()-x<B)}function z(){if(A!==null){var D=t.unstable_now();x=D;var q=!0;try{q=A(!0,D)}finally{q?I():(T=!1,A=null)}}else T=!1}var I;if(typeof v=="function")I=function(){v(z)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=z,I=function(){X.postMessage(null)}}else I=function(){m(z,0)};function U(D){A=D,T||(T=!0,I())}function te(D,q){C=m(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,U(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var $=h;h=q;try{return D()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=h;h=D;try{return q()}finally{h=$}},t.unstable_scheduleCallback=function(D,q,$){var se=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?se+$:se):$=se,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=$+j,D={id:u++,callback:q,priorityLevel:D,startTime:$,expirationTime:j,sortIndex:-1},$>se?(D.sortIndex=$,e(c,D),n(l)===null&&D===n(c)&&(y?(d(C),C=-1):y=!0,te(S,$-se))):(D.sortIndex=j,e(l,D),_||p||(_=!0,U(P))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var q=h;return function(){var $=h;h=q;try{return D.apply(this,arguments)}finally{h=$}}}})(Hp),Bp.exports=Hp;var Yx=Bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=qe,Rn=Yx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vp=new Set,To={};function Pr(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(To[t]=e,t=0;t<e.length;t++)Vp.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Wp={};function Kx(t){return lu.call(Wp,t)?!0:lu.call(Gp,t)?!1:qx.test(t)?Wp[t]=!0:(Gp[t]=!0,!1)}function Zx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qx(t,e,n,i){if(e===null||typeof e>"u"||Zx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new rn(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new rn(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new rn(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new rn(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Bt[t]=new rn(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Bt[t]=new rn(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Bt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cu=/[\-:]([a-z])/g;function uu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cu,uu);Bt[e]=new rn(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cu,uu);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cu,uu);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)}),Bt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fu(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,n,r,i)&&(n=null),i||r===null?Kx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),$p=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,_u;function Co(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var xu=!1;function yu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function Jx(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case du:return"Profiler";case hu:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jp:return(t.displayName||"Context")+".Consumer";case Xp:return(t._context.displayName||"Context")+".Provider";case pu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vu:return e=t.displayName||null,e!==null?e:Su(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Su(t(e))}catch{}}return null}function ey(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(e);case 8:return e===hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ty(t){var e=qp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=ty(t))}function Kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qp(t,e){e=e.checked,e!=null&&fu(t,"checked",e,!1)}function Eu(t,e){Qp(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ro(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function tm(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,rm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ny=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){ny.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(iy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,ps=null,ms=null;function am(t){if(t=Qo(t)){if(typeof Lu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=dl(e),Lu(t.stateNode,t.type,e))}}function lm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function cm(){if(ps){var t=ps,e=ms;if(ms=ps=null,am(t),e)for(t=0;t<e.length;t++)am(e[t])}}function um(t,e){return t(e)}function fm(){}var Du=!1;function hm(t,e,n){if(Du)return t(e,n);Du=!0;try{return um(t,e,n)}finally{Du=!1,(ps!==null||ms!==null)&&(fm(),cm())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var i=dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Nu=!1;if(Ti)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Nu=!1}function ry(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var No=!1,Xa=null,ja=!1,Iu=null,sy={onError:function(t){No=!0,Xa=t}};function oy(t,e,n,i,r,s,o,a,l){No=!1,Xa=null,ry.apply(sy,arguments)}function ay(t,e,n,i,r,s,o,a,l){if(oy.apply(this,arguments),No){if(No){var c=Xa;No=!1,Xa=null}else throw Error(ae(198));ja||(ja=!0,Iu=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pm(t){if(Lr(t)!==t)throw Error(ae(188))}function ly(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pm(r),t;if(s===i)return pm(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function mm(t){return t=ly(t),t!==null?gm(t):null}function gm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gm(t);if(e!==null)return e;t=t.sibling}return null}var vm=Rn.unstable_scheduleCallback,_m=Rn.unstable_cancelCallback,cy=Rn.unstable_shouldYield,uy=Rn.unstable_requestPaint,At=Rn.unstable_now,fy=Rn.unstable_getCurrentPriorityLevel,Uu=Rn.unstable_ImmediatePriority,xm=Rn.unstable_UserBlockingPriority,Ya=Rn.unstable_NormalPriority,hy=Rn.unstable_LowPriority,ym=Rn.unstable_IdlePriority,$a=null,vi=null;function dy(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:gy,py=Math.log,my=Math.LN2;function gy(t){return t>>>=0,t===0?32:31-(py(t)/my|0)|0}var qa=64,Ka=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function vy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _y(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=vy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sm(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function xy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ku(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Em,zu,wm,Tm,Am,Bu=!1,Qa=[],tr=null,nr=null,ir=null,Fo=new Map,Oo=new Map,rr=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qo(e),e!==null&&zu(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Sy(t,e,n,i,r){switch(e){case"focusin":return tr=ko(tr,t,e,n,i,r),!0;case"dragenter":return nr=ko(nr,t,e,n,i,r),!0;case"mouseover":return ir=ko(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,ko(Fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oo.set(s,ko(Oo.get(s)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=Dr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=dm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bu=i,n.target.dispatchEvent(i),bu=null}else return e=Qo(n),e!==null&&zu(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){Ja(t)&&n.delete(e)}function My(){Bu=!1,tr!==null&&Ja(tr)&&(tr=null),nr!==null&&Ja(nr)&&(nr=null),ir!==null&&Ja(ir)&&(ir=null),Fo.forEach(bm),Oo.forEach(bm)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,My)))}function Bo(t){function e(r){return zo(r,t)}if(0<Qa.length){zo(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&zo(tr,t),nr!==null&&zo(nr,t),ir!==null&&zo(ir,t),Fo.forEach(e),Oo.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&rr.shift()}var gs=Ai.ReactCurrentBatchConfig,el=!0;function Ey(t,e,n,i){var r=st,s=gs.transition;gs.transition=null;try{st=1,Hu(t,e,n,i)}finally{st=r,gs.transition=s}}function wy(t,e,n,i){var r=st,s=gs.transition;gs.transition=null;try{st=4,Hu(t,e,n,i)}finally{st=r,gs.transition=s}}function Hu(t,e,n,i){if(el){var r=Vu(t,e,n,i);if(r===null)of(t,e,i,tl,n),Cm(t,i);else if(Sy(r,t,e,n,i))i.stopPropagation();else if(Cm(t,i),e&4&&-1<yy.indexOf(t)){for(;r!==null;){var s=Qo(r);if(s!==null&&Em(s),s=Vu(t,e,n,i),s===null&&of(t,e,i,tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else of(t,e,i,null,n)}}var tl=null;function Vu(t,e,n,i){if(tl=null,t=Pu(i),t=Dr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case Uu:return 1;case xm:return 4;case Ya:case hy:return 16;case ym:return 536870912;default:return 16}default:return 16}}var sr=null,Gu=null,nl=null;function Lm(){if(nl)return nl;var t,e=Gu,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Dm(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Dm,this.isPropagationStopped=Dm,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=bn(vs),Ho=_t({},vs,{view:0,detail:0}),Ty=bn(Ho),Xu,ju,Vo,sl=_t({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Xu=t.screenX-Vo.screenX,ju=t.screenY-Vo.screenY):ju=Xu=0,Vo=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Nm=bn(sl),Ay=_t({},sl,{dataTransfer:0}),Cy=bn(Ay),Ry=_t({},Ho,{relatedTarget:0}),Yu=bn(Ry),by=_t({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=bn(by),Ly=_t({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dy=bn(Ly),Ny=_t({},vs,{data:0}),Im=bn(Ny),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function $u(){return Oy}var ky=_t({},Ho,{key:function(t){if(t.key){var e=Iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zy=bn(ky),By=_t({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=bn(By),Hy=_t({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),Vy=bn(Hy),Gy=_t({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=bn(Gy),Xy=_t({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=bn(Xy),Yy=[9,13,27,32],qu=Ti&&"CompositionEvent"in window,Go=null;Ti&&"documentMode"in document&&(Go=document.documentMode);var $y=Ti&&"TextEvent"in window&&!Go,Fm=Ti&&(!qu||Go&&8<Go&&11>=Go),Om=" ",km=!1;function zm(t,e){switch(t){case"keyup":return Yy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function qy(t,e){switch(t){case"compositionend":return Bm(e);case"keypress":return e.which!==32?null:(km=!0,Om);case"textInput":return t=e.data,t===Om&&km?null:t;default:return null}}function Ky(t,e){if(_s)return t==="compositionend"||!qu&&zm(t,e)?(t=Lm(),nl=Gu=sr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fm&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zy[t.type]:e==="textarea"}function Vm(t,e,n,i){lm(i),e=ul(e,"onChange"),0<e.length&&(n=new Wu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,Xo=null;function Qy(t){o0(t,0)}function ol(t){var e=Es(t);if(Kp(e))return t}function Jy(t,e){if(t==="change")return e}var Gm=!1;if(Ti){var Ku;if(Ti){var Zu="oninput"in document;if(!Zu){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Zu=typeof Wm.oninput=="function"}Ku=Zu}else Ku=!1;Gm=Ku&&(!document.documentMode||9<document.documentMode)}function Xm(){Wo&&(Wo.detachEvent("onpropertychange",jm),Xo=Wo=null)}function jm(t){if(t.propertyName==="value"&&ol(Xo)){var e=[];Vm(e,Xo,t,Pu(t)),hm(Qy,e)}}function eS(t,e,n){t==="focusin"?(Xm(),Wo=e,Xo=n,Wo.attachEvent("onpropertychange",jm)):t==="focusout"&&Xm()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Xo)}function nS(t,e){if(t==="click")return ol(e)}function iS(t,e){if(t==="input"||t==="change")return ol(e)}function rS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:rS;function jo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,e){var n=Ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Km(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function Qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sS(t){var e=Km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(i!==null&&Qu(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$m(n,s);var o=$m(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oS=Ti&&"documentMode"in document&&11>=document.documentMode,xs=null,Ju=null,Yo=null,ef=!1;function Zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||xs==null||xs!==Ga(i)||(i=xs,"selectionStart"in i&&Qu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&jo(Yo,i)||(Yo=i,i=ul(Ju,"onSelect"),0<i.length&&(e=new Wu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},tf={},Qm={};Ti&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function ll(t){if(tf[t])return tf[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qm)return tf[t]=e[n];return t}var Jm=ll("animationend"),e0=ll("animationiteration"),t0=ll("animationstart"),n0=ll("transitionend"),i0=new Map,r0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){i0.set(t,e),Pr(e,[t])}for(var nf=0;nf<r0.length;nf++){var rf=r0[nf],aS=rf.toLowerCase(),lS=rf[0].toUpperCase()+rf.slice(1);or(aS,"on"+lS)}or(Jm,"onAnimationEnd"),or(e0,"onAnimationIteration"),or(t0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(n0,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function s0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ay(i,e,void 0,t),t.currentTarget=null}function o0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;s0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;s0(r,a,c),s=l}}}if(ja)throw t=Iu,ja=!1,Iu=null,t}function dt(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(a0(e,t,2,!1),n.add(i))}function sf(t,e,n){var i=0;e&&(i|=4),a0(n,t,i,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[cl]){t[cl]=!0,Vp.forEach(function(n){n!=="selectionchange"&&(cS.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,sf("selectionchange",!1,e))}}function a0(t,e,n,i){switch(Pm(e)){case 1:var r=Ey;break;case 4:r=wy;break;default:r=Hu}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function of(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hm(function(){var c=s,u=Pu(n),f=[];e:{var h=i0.get(t);if(h!==void 0){var p=Wu,_=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":p=zy;break;case"focusin":_="focus",p=Yu;break;case"focusout":_="blur",p=Yu;break;case"beforeblur":case"afterblur":p=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Vy;break;case Jm:case e0:case t0:p=Py;break;case n0:p=Wy;break;case"scroll":p=Ty;break;case"wheel":p=jy;break;case"copy":case"cut":case"paste":p=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Um}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=Lo(v,d),S!=null&&y.push(Ko(v,S,g)))),m)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==bu&&(_=n.relatedTarget||n.fromElement)&&(Dr(_)||_[Ci]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Dr(_):null,_!==null&&(m=Lr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Nm,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Um,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Es(p),g=_==null?h:Es(_),h=new y(S,v+"leave",p,n,u),h.target=m,h.relatedTarget=g,S=null,Dr(u)===c&&(y=new y(d,v+"enter",_,n,u),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,d=_,v=0,g=y;g;g=Ss(g))v++;for(g=0,S=d;S;S=Ss(S))g++;for(;0<v-g;)y=Ss(y),v--;for(;0<g-v;)d=Ss(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ss(y),d=Ss(d)}y=null}else y=null;p!==null&&l0(f,h,p,y,!1),_!==null&&m!==null&&l0(f,m,_,y,!0)}}e:{if(h=c?Es(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=Jy;else if(Hm(h))if(Gm)P=iS;else{P=tS;var T=eS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=nS);if(P&&(P=P(t,c))){Vm(f,P,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&wu(h,"number",h.value)}switch(T=c?Es(c):window,t){case"focusin":(Hm(T)||T.contentEditable==="true")&&(xs=T,Ju=c,Yo=null);break;case"focusout":Yo=Ju=xs=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Zm(f,n,u);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Zm(f,n,u)}var A;if(qu)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else _s?zm(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Fm&&n.locale!=="ko"&&(_s||C!=="onCompositionStart"?C==="onCompositionEnd"&&_s&&(A=Lm()):(sr=u,Gu="value"in sr?sr.value:sr.textContent,_s=!0)),T=ul(c,C),0<T.length&&(C=new Im(C,t,null,n,u),f.push({event:C,listeners:T}),A?C.data=A:(A=Bm(n),A!==null&&(C.data=A)))),(A=$y?qy(t,n):Ky(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(u=new Im("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}o0(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Lo(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function l0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Lo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function fl(t,e,n){if(e=c0(e),c0(t)!==e&&n)throw Error(ae(425))}function hl(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(pS)}:uf;function pS(t){setTimeout(function(){throw t})}function ff(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Bo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function f0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+Ms,Zo="__reactProps$"+Ms,Ci="__reactContainer$"+Ms,hf="__reactEvents$"+Ms,mS="__reactListeners$"+Ms,gS="__reactHandles$"+Ms;function Dr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=f0(t);t!==null;){if(n=t[_i])return n;t=f0(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[_i]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function dl(t){return t[Zo]||null}var df=[],ws=-1;function lr(t){return{current:t}}function pt(t){0>ws||(t.current=df[ws],df[ws]=null,ws--)}function ut(t,e){ws++,df[ws]=t.current,t.current=e}var cr={},Yt=lr(cr),gn=lr(!1),Nr=cr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function pl(){pt(gn),pt(Yt)}function h0(t,e,n){if(Yt.current!==cr)throw Error(ae(168));ut(Yt,e),ut(gn,n)}function d0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,ey(t)||"Unknown",r));return _t({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Nr=Yt.current,ut(Yt,t),ut(gn,gn.current),!0}function p0(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=d0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,pt(gn),pt(Yt),ut(Yt,t)):pt(gn),ut(gn,n)}var Ri=null,gl=!1,pf=!1;function m0(t){Ri===null?Ri=[t]:Ri.push(t)}function vS(t){gl=!0,m0(t)}function ur(){if(!pf&&Ri!==null){pf=!0;var t=0,e=st;try{var n=Ri;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,gl=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),vm(Uu,ur),r}finally{st=e,pf=!1}}return null}var As=[],Cs=0,vl=null,_l=0,Bn=[],Hn=0,Ir=null,bi=1,Pi="";function Ur(t,e){As[Cs++]=_l,As[Cs++]=vl,vl=t,_l=e}function g0(t,e,n){Bn[Hn++]=bi,Bn[Hn++]=Pi,Bn[Hn++]=Ir,Ir=t;var i=bi;t=Pi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-Qn(e)+r|n<<r|i,Pi=s+t}else bi=1<<s|n<<r|i,Pi=t}function mf(t){t.return!==null&&(Ur(t,1),g0(t,1,0))}function gf(t){for(;t===vl;)vl=As[--Cs],As[Cs]=null,_l=As[--Cs],As[Cs]=null;for(;t===Ir;)Ir=Bn[--Hn],Bn[Hn]=null,Pi=Bn[--Hn],Bn[Hn]=null,bi=Bn[--Hn],Bn[Hn]=null}var Pn=null,Ln=null,vt=!1,ei=null;function v0(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Ln=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:bi,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Ln=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(vt){var e=Ln;if(e){var n=e;if(!_0(t,e)){if(vf(t))throw Error(ae(418));e=ar(n.nextSibling);var i=Pn;e&&_0(t,e)?v0(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if(vf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function x0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function xl(t){if(t!==Pn)return!1;if(!vt)return x0(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=Ln)){if(vf(t))throw y0(),Error(ae(418));for(;e;)v0(t,e),e=ar(e.nextSibling)}if(x0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Pn?ar(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=Ln;t;)t=ar(t.nextSibling)}function Rs(){Ln=Pn=null,vt=!1}function xf(t){ei===null?ei=[t]:ei.push(t)}var _S=Ai.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function S0(t){var e=t._init;return e(t._payload)}function M0(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=_r(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,S){return v===null||v.tag!==6?(v=uh(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,S){var P=g.type;return P===hs?u(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&S0(P)===v.type)?(S=r(v,g.props),S.ref=Jo(d,v,g),S.return=d,S):(S=Wl(g.type,g.key,g.props,null,d.mode,S),S.ref=Jo(d,v,g),S.return=d,S)}function c(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=fh(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function u(d,v,g,S,P){return v===null||v.tag!==7?(v=Gr(g,d.mode,S,P),v.return=d,v):(v=r(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uh(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return g=Wl(v.type,v.key,v.props,null,d.mode,g),g.ref=Jo(d,null,v),g.return=d,g;case fs:return v=fh(v,d.mode,g),v.return=d,v;case Ji:var S=v._init;return f(d,S(v._payload),g)}if(Ro(v)||Ao(v))return v=Gr(v,d.mode,g,null),v.return=d,v;yl(d,v)}return null}function h(d,v,g,S){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:return g.key===P?l(d,v,g,S):null;case fs:return g.key===P?c(d,v,g,S):null;case Ji:return P=g._init,h(d,v,P(g._payload),S)}if(Ro(g)||Ao(g))return P!==null?null:u(d,v,g,S,null);yl(d,g)}return null}function p(d,v,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(v,d,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ha:return d=d.get(S.key===null?g:S.key)||null,l(v,d,S,P);case fs:return d=d.get(S.key===null?g:S.key)||null,c(v,d,S,P);case Ji:var T=S._init;return p(d,v,g,T(S._payload),P)}if(Ro(S)||Ao(S))return d=d.get(g)||null,u(v,d,S,P,null);yl(v,S)}return null}function _(d,v,g,S){for(var P=null,T=null,A=v,C=v=0,B=null;A!==null&&C<g.length;C++){A.index>C?(B=A,A=null):B=A.sibling;var x=h(d,A,g[C],S);if(x===null){A===null&&(A=B);break}t&&A&&x.alternate===null&&e(d,A),v=s(x,v,C),T===null?P=x:T.sibling=x,T=x,A=B}if(C===g.length)return n(d,A),vt&&Ur(d,C),P;if(A===null){for(;C<g.length;C++)A=f(d,g[C],S),A!==null&&(v=s(A,v,C),T===null?P=A:T.sibling=A,T=A);return vt&&Ur(d,C),P}for(A=i(d,A);C<g.length;C++)B=p(A,d,C,g[C],S),B!==null&&(t&&B.alternate!==null&&A.delete(B.key===null?C:B.key),v=s(B,v,C),T===null?P=B:T.sibling=B,T=B);return t&&A.forEach(function(E){return e(d,E)}),vt&&Ur(d,C),P}function y(d,v,g,S){var P=Ao(g);if(typeof P!="function")throw Error(ae(150));if(g=P.call(g),g==null)throw Error(ae(151));for(var T=P=null,A=v,C=v=0,B=null,x=g.next();A!==null&&!x.done;C++,x=g.next()){A.index>C?(B=A,A=null):B=A.sibling;var E=h(d,A,x.value,S);if(E===null){A===null&&(A=B);break}t&&A&&E.alternate===null&&e(d,A),v=s(E,v,C),T===null?P=E:T.sibling=E,T=E,A=B}if(x.done)return n(d,A),vt&&Ur(d,C),P;if(A===null){for(;!x.done;C++,x=g.next())x=f(d,x.value,S),x!==null&&(v=s(x,v,C),T===null?P=x:T.sibling=x,T=x);return vt&&Ur(d,C),P}for(A=i(d,A);!x.done;C++,x=g.next())x=p(A,d,C,x.value,S),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?C:x.key),v=s(x,v,C),T===null?P=x:T.sibling=x,T=x);return t&&A.forEach(function(z){return e(d,z)}),vt&&Ur(d,C),P}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===hs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:e:{for(var P=g.key,T=v;T!==null;){if(T.key===P){if(P=g.type,P===hs){if(T.tag===7){n(d,T.sibling),v=r(T,g.props.children),v.return=d,d=v;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&S0(P)===T.type){n(d,T.sibling),v=r(T,g.props),v.ref=Jo(d,T,g),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}g.type===hs?(v=Gr(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=Wl(g.type,g.key,g.props,null,d.mode,S),S.ref=Jo(d,v,g),S.return=d,d=S)}return o(d);case fs:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=fh(g,d.mode,S),v.return=d,d=v}return o(d);case Ji:return T=g._init,m(d,v,T(g._payload),S)}if(Ro(g))return _(d,v,g,S);if(Ao(g))return y(d,v,g,S);yl(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=uh(g,d.mode,S),v.return=d,d=v),o(d)):n(d,v)}return m}var bs=M0(!0),E0=M0(!1),Sl=lr(null),Ml=null,Ps=null,yf=null;function Sf(){yf=Ps=Ml=null}function Mf(t){var e=Sl.current;pt(Sl),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Ml=t,yf=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Ml===null)throw Error(ae(308));Ps=t,Ml.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Fr=null;function wf(t){Fr===null?Fr=[t]:Fr.push(t)}function w0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ku(t,n)}}function A0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=_t({},f,h);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=f}}function C0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ea={},xi=lr(ea),ta=lr(ea),na=lr(ea);function Or(t){if(t===ea)throw Error(ae(174));return t}function Af(t,e){switch(ut(na,e),ut(ta,t),ut(xi,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}pt(xi),ut(xi,e)}function Ds(){pt(xi),pt(ta),pt(na)}function R0(t){Or(na.current);var e=Or(xi.current),n=Au(e,t.type);e!==n&&(ut(ta,t),ut(xi,n))}function Cf(t){ta.current===t&&(pt(xi),pt(ta))}var xt=lr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rf=[];function bf(){for(var t=0;t<Rf.length;t++)Rf[t]._workInProgressVersionPrimary=null;Rf.length=0}var Al=Ai.ReactCurrentDispatcher,Pf=Ai.ReactCurrentBatchConfig,kr=0,yt=null,Nt=null,Ot=null,Cl=!1,ia=!1,ra=0,xS=0;function $t(){throw Error(ae(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Df(t,e,n,i,r,s){if(kr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?ES:wS,t=n(i,r),ia){s=0;do{if(ia=!1,ra=0,25<=s)throw Error(ae(301));s+=1,Ot=Nt=null,e.updateQueue=null,Al.current=TS,t=n(i,r)}while(ia)}if(Al.current=Pl,e=Nt!==null&&Nt.next!==null,kr=0,Ot=Nt=yt=null,Cl=!1,e)throw Error(ae(300));return t}function Nf(){var t=ra!==0;return ra=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Gn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ot===null?yt.memoizedState:Ot.next;if(e!==null)Ot=e,Nt=t;else{if(t===null)throw Error(ae(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function sa(t,e){return typeof e=="function"?e(t):e}function If(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=u,zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uf(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function b0(){}function P0(t,e){var n=yt,i=Gn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Ff(N0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,oa(9,D0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ae(349));kr&30||L0(n,e,r)}return r}function L0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D0(t,e,n,i){e.value=n,e.getSnapshot=i,I0(e)&&U0(t)}function N0(t,e,n){return n(function(){I0(e)&&U0(t)})}function I0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function U0(t){var e=Li(t,1);e!==null&&ri(e,t,1,-1)}function F0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=MS.bind(null,yt,t),[e.memoizedState,t]}function oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function O0(){return Gn().memoizedState}function Rl(t,e,n,i){var r=yi();yt.flags|=t,r.memoizedState=oa(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Lf(i,o.deps)){r.memoizedState=oa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=oa(1|e,n,s,i)}function k0(t,e){return Rl(8390656,8,t,e)}function Ff(t,e){return bl(2048,8,t,e)}function z0(t,e){return bl(4,2,t,e)}function B0(t,e){return bl(4,4,t,e)}function H0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V0(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,H0.bind(null,e,t),n)}function Of(){}function G0(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return kr&21?(Jn(n,e)||(n=Sm(),yt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function yS(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Pf.transition;Pf.transition={};try{t(!1),e()}finally{st=n,Pf.transition=i}}function j0(){return Gn().memoizedState}function SS(t,e,n){var i=gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))$0(e,n);else if(n=w0(t,e,n,i),n!==null){var r=on();ri(n,t,i,r),q0(n,e,i)}}function MS(t,e,n){var i=gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))$0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=w0(t,e,r,i),n!==null&&(r=on(),ri(n,t,i,r),q0(n,e,i))}}function Y0(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function $0(t,e){ia=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ku(t,n)}}var Pl={readContext:Vn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},ES={readContext:Vn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:k0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,H0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=SS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:F0,useDebugValue:Of,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=F0(!1),e=t[0];return t=yS.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=yi();if(vt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),kt===null)throw Error(ae(349));kr&30||L0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,k0(N0.bind(null,i,s,t),[t]),i.flags|=2048,oa(9,D0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=kt.identifierPrefix;if(vt){var n=Pi,i=bi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:Vn,useCallback:G0,useContext:Vn,useEffect:Ff,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:W0,useReducer:If,useRef:O0,useState:function(){return If(sa)},useDebugValue:Of,useDeferredValue:function(t){var e=Gn();return X0(e,Nt.memoizedState,t)},useTransition:function(){var t=If(sa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:P0,useId:j0,unstable_isNewReconciler:!1},TS={readContext:Vn,useCallback:G0,useContext:Vn,useEffect:Ff,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:W0,useReducer:Uf,useRef:O0,useState:function(){return Uf(sa)},useDebugValue:Of,useDeferredValue:function(t){var e=Gn();return Nt===null?e.memoizedState=t:X0(e,Nt.memoizedState,t)},useTransition:function(){var t=Uf(sa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:P0,useId:j0,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=gr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ri(e,t,r,i),El(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=gr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ri(e,t,r,i),El(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=gr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(ri(e,t,i,n),El(e,t,i))}};function K0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function Z0(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=vn(e)?Nr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Q0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function zf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=vn(e)?Nr:Yt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=Jx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,nh=i),Hf(t,e)},n}function eg(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BS.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var CS=Ai.ReactCurrentOwner,_n=!1;function sn(t,e,n,i){e.child=t===null?E0(e,null,n,i):bs(e,t.child,n,i)}function rg(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Df(t,e,n,i,s,r),n=Nf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(vt&&n&&mf(e),e.flags|=1,sn(t,e,i,r),e.child)}function sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,og(t,e,s,i,r)):(t=Wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function og(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Vf(t,e,n,i,r)}function ag(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Us,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Us,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Us,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Us,Dn),Dn|=i;return sn(t,e,r,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,i,r){var s=vn(n)?Nr:Yt.current;return s=Ts(e,s),Ls(e,r),n=Df(t,e,n,i,s,r),i=Nf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(vt&&i&&mf(e),e.flags|=1,sn(t,e,n,r),e.child)}function cg(t,e,n,i,r){if(vn(n)){var s=!0;ml(e)}else s=!1;if(Ls(e,r),e.stateNode===null)Nl(t,e),Z0(e,n,i),zf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=vn(n)?Nr:Yt.current,c=Ts(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Q0(e,o,i,c),fr=!1;var h=e.memoizedState;o.state=h,wl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||fr?(typeof u=="function"&&(kf(e,n,u,i),l=e.memoizedState),(a=fr||K0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,T0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=vn(n)?Nr:Yt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Q0(e,o,i,l),fr=!1,h=e.memoizedState,o.state=h,wl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||gn.current||fr?(typeof p=="function"&&(kf(e,n,p,i),_=e.memoizedState),(c=fr||K0(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){lg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&p0(e,n,!1),Ni(t,e,s);i=e.stateNode,CS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&p0(e,n,!0),e.child}function ug(t){var e=t.stateNode;e.pendingContext?h0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&h0(t,e.context,!1),Af(t,e.containerInfo)}function fg(t,e,n,i,r){return Rs(),xf(r),e.flags|=256,sn(t,e,n,i),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function hg(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=Wf,t):jf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return RS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jf(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,i){return i!==null&&xf(i),bs(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bf(Error(ae(422))),Dl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return Dl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Bf(s,i,void 0),Dl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ri(i,t,r,-1))}return lh(),i=Bf(Error(ae(421))),Dl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=HS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=ar(r.nextSibling),Pn=e,vt=!0,ei=null,t!==null&&(Bn[Hn++]=bi,Bn[Hn++]=Pi,Bn[Hn++]=Ir,bi=t.id,Pi=t.overflow,Ir=e),e=jf(e,i.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function Yf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function pg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yf(e,!0,n,null,s);break;case"together":Yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bS(t,e,n){switch(e.tag){case 3:ug(e),Rs();break;case 5:R0(e);break;case 1:vn(e.type)&&ml(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?hg(t,e,n):(ut(xt,xt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return pg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,ag(t,e,n)}return Ni(t,e,n)}var mg,$f,gg,vg;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$f=function(){},gg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(xi.current);var s=null;switch(n){case"input":r=Mu(t,r),i=Mu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}Cu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}},vg=function(t,e,n,i){n!==i&&(e.flags|=4)};function aa(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PS(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&pl(),qt(e),null;case 3:return i=e.stateNode,Ds(),pt(gn),pt(Yt),bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(sh(ei),ei=null))),$f(t,e),qt(e),null;case 5:Cf(e);var r=Or(na.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return qt(e),null}if(t=Or(xi.current),xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)dt($o[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Zp(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":em(i,s),dt("invalid",i)}Cu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":Va(i),Jp(i,s,!0);break;case"textarea":Va(i),nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[Zo]=i,mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ru(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)dt($o[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Zp(t,i),r=Mu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":em(t,i),r=Tu(t,i),dt("invalid",t);break;default:r=i}Cu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?om(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bo(t,l):typeof l=="number"&&bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&fu(t,s,l,o))}switch(n){case"input":Va(t),Jp(t,i,!1);break;case"textarea":Va(t),nm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)vg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Or(na.current),Or(xi.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return qt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Ln!==null&&e.mode&1&&!(e.flags&128))y0(),Rs(),e.flags|=98560,s=!1;else if(s=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[_i]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ei!==null&&(sh(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?It===0&&(It=3):lh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ds(),$f(t,e),t===null&&qo(e.stateNode.containerInfo),qt(e),null;case 10:return Mf(e.type._context),qt(e),null;case 17:return vn(e.type)&&pl(),qt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)aa(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,aa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Fs&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return qt(e),null}else 2*At()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function LS(t,e){switch(gf(e),e.tag){case 1:return vn(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),pt(gn),pt(Yt),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Ds(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Il=!1,Kt=!1,DS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function qf(t,e,n){try{n()}catch(i){Et(t,e,i)}}var _g=!1;function NS(t,e){if(af=el,t=Km(),Qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},el=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:ti(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=_g,_g=!1,_}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qf(e,n,s)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xg(t){var e=t.alternate;e!==null&&(t.alternate=null,xg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[Zo],delete e[hf],delete e[mS],delete e[gS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yg(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var Ht=null,ni=!1;function dr(t,e,n){for(n=n.child;n!==null;)Mg(t,e,n),n=n.sibling}function Mg(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Kt||Is(n,e);case 6:var i=Ht,r=ni;Ht=null,dr(t,e,n),Ht=i,ni=r,Ht!==null&&(ni?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(ni?(t=Ht,n=n.stateNode,t.nodeType===8?ff(t.parentNode,n):t.nodeType===1&&ff(t,n),Bo(t)):ff(Ht,n.stateNode));break;case 4:i=Ht,r=ni,Ht=n.stateNode.containerInfo,ni=!0,dr(t,e,n),Ht=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qf(n,e,o),r=r.next}while(r!==i)}dr(t,e,n);break;case 1:if(!Kt&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,dr(t,e,n),Kt=i):dr(t,e,n);break;default:dr(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DS),e.forEach(function(i){var r=VS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,ni=!1;break e;case 3:Ht=a.stateNode.containerInfo,ni=!0;break e;case 4:Ht=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Ht===null)throw Error(ae(160));Mg(s,o,r),Ht=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wg(e,t),e=e.sibling}function wg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),Si(t),i&4){try{la(3,t,t.return),Ul(3,t)}catch(y){Et(t,t.return,y)}try{la(5,t,t.return)}catch(y){Et(t,t.return,y)}}break;case 1:ii(e,t),Si(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(ii(e,t),Si(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{bo(r,"")}catch(y){Et(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qp(r,s),Ru(a,o);var c=Ru(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?om(r,f):u==="dangerouslySetInnerHTML"?rm(r,f):u==="children"?bo(r,f):fu(r,u,f,c)}switch(a){case"input":Eu(r,s);break;case"textarea":tm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){Et(t,t.return,y)}}break;case 6:if(ii(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Et(t,t.return,y)}}break;case 3:if(ii(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(y){Et(t,t.return,y)}break;case 4:ii(e,t),Si(t);break;case 13:ii(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(th=At())),i&4&&Eg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||u,ii(e,t),Kt=c):ii(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(f=Te=u;Te!==null;){switch(h=Te,p=h.child,h.tag){case 0:case 11:case 14:case 15:la(4,h,h.return);break;case 1:Is(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Et(i,n,y)}}break;case 5:Is(h,h.return);break;case 22:if(h.memoizedState!==null){Cg(f);continue}}p!==null?(p.return=h,Te=p):Cg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sm("display",o))}catch(y){Et(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Et(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ii(e,t),Si(t),i&4&&Eg(t);break;case 21:break;default:ii(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(bo(r,""),i.flags&=-33);var s=Sg(t);Qf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sg(t);Zf(t,a,o);break;default:throw Error(ae(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IS(t,e,n){Te=t,Tg(t)}function Tg(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Il;var c=Kt;if(Il=o,(Kt=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Rg(r):l!==null?(l.return=o,Te=l):Rg(r);for(;s!==null;)Te=s,Tg(s),s=s.sibling;Te=r,Il=a,Kt=c}Ag(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ag(t)}}function Ag(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&C0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}C0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Bo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Kt||e.flags&512&&Kf(e)}catch(h){Et(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Cg(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Rg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Kf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var US=Math.ceil,Fl=Ai.ReactCurrentDispatcher,Jf=Ai.ReactCurrentOwner,Wn=Ai.ReactCurrentBatchConfig,Je=0,kt=null,bt=null,Vt=0,Dn=0,Us=lr(0),It=0,ca=null,zr=0,Ol=0,eh=0,ua=null,xn=null,th=0,Fs=1/0,Ii=null,kl=!1,nh=null,pr=null,zl=!1,mr=null,Bl=0,fa=0,ih=null,Hl=-1,Vl=0;function on(){return Je&6?At():Hl!==-1?Hl:Hl=At()}function gr(t){return t.mode&1?Je&2&&Vt!==0?Vt&-Vt:_S.transition!==null?(Vl===0&&(Vl=Sm()),Vl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function ri(t,e,n,i){if(50<fa)throw fa=0,ih=null,Error(ae(185));Uo(t,n,i),(!(Je&2)||t!==kt)&&(t===kt&&(!(Je&2)&&(Ol|=n),It===4&&vr(t,Vt)),yn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Fs=At()+500,gl&&ur()))}function yn(t,e){var n=t.callbackNode;_y(t,e);var i=Za(t,t===kt?Vt:0);if(i===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?vS(Pg.bind(null,t)):m0(Pg.bind(null,t)),dS(function(){!(Je&6)&&ur()}),n=null;else{switch(Mm(i)){case 1:n=Uu;break;case 4:n=xm;break;case 16:n=Ya;break;case 536870912:n=ym;break;default:n=Ya}n=kg(n,bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bg(t,e){if(Hl=-1,Vl=0,Je&6)throw Error(ae(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Za(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=Je;Je|=2;var s=Dg();(kt!==t||Vt!==e)&&(Ii=null,Fs=At()+500,Hr(t,e));do try{kS();break}catch(a){Lg(t,a)}while(!0);Sf(),Fl.current=s,Je=r,bt!==null?e=0:(kt=null,Vt=0,e=It)}if(e!==0){if(e===2&&(r=Fu(t),r!==0&&(i=r,e=rh(t,r))),e===1)throw n=ca,Hr(t,0),vr(t,i),yn(t,At()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!FS(r)&&(e=Gl(t,i),e===2&&(s=Fu(t),s!==0&&(i=s,e=rh(t,s))),e===1))throw n=ca,Hr(t,0),vr(t,i),yn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Vr(t,xn,Ii);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=th+500-At(),10<e)){if(Za(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Vr.bind(null,t,xn,Ii),e);break}Vr(t,xn,Ii);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*US(i/1960))-i,10<i){t.timeoutHandle=uf(Vr.bind(null,t,xn,Ii),i);break}Vr(t,xn,Ii);break;case 5:Vr(t,xn,Ii);break;default:throw Error(ae(329))}}}return yn(t,At()),t.callbackNode===n?bg.bind(null,t):null}function rh(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=xn,xn=n,e!==null&&sh(e)),t}function sh(t){xn===null?xn=t:xn.push.apply(xn,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~eh,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Pg(t){if(Je&6)throw Error(ae(327));Os();var e=Za(t,0);if(!(e&1))return yn(t,At()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=Fu(t);i!==0&&(e=i,n=rh(t,i))}if(n===1)throw n=ca,Hr(t,0),vr(t,e),yn(t,At()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,xn,Ii),yn(t,At()),null}function oh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Fs=At()+500,gl&&ur())}}function Br(t){mr!==null&&mr.tag===0&&!(Je&6)&&Os();var e=Je;Je|=1;var n=Wn.transition,i=st;try{if(Wn.transition=null,st=1,t)return t()}finally{st=i,Wn.transition=n,Je=e,!(Je&6)&&ur()}}function ah(){Dn=Us.current,pt(Us)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ds(),pt(gn),pt(Yt),bf();break;case 5:Cf(i);break;case 4:Ds();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Mf(i.type._context);break;case 22:case 23:ah()}n=n.return}if(kt=t,bt=t=_r(t.current,null),Vt=Dn=e,It=0,ca=null,eh=Ol=zr=0,xn=ua=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Lg(t,e){do{var n=bt;try{if(Sf(),Al.current=Pl,Cl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(kr=0,Ot=Nt=yt=null,ia=!1,ra=0,Jf.current=null,n===null||n.return===null){It=1,ca=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ng(o);if(p!==null){p.flags&=-257,ig(p,o,a,s,e),p.mode&1&&tg(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){tg(s,c,e),lh();break e}l=Error(ae(426))}}else if(vt&&a.mode&1){var m=ng(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ig(m,o,a,s,e),xf(Ns(l,a));break e}}s=l=Ns(l,a),It!==4&&(It=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=J0(s,l,e);A0(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pr===null||!pr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=eg(s,a,e);A0(s,S);break e}}s=s.return}while(s!==null)}Ig(n)}catch(P){e=P,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Dg(){var t=Fl.current;return Fl.current=Pl,t===null?Pl:t}function lh(){(It===0||It===3||It===2)&&(It=4),kt===null||!(zr&268435455)&&!(Ol&268435455)||vr(kt,Vt)}function Gl(t,e){var n=Je;Je|=2;var i=Dg();(kt!==t||Vt!==e)&&(Ii=null,Hr(t,e));do try{OS();break}catch(r){Lg(t,r)}while(!0);if(Sf(),Je=n,Fl.current=i,bt!==null)throw Error(ae(261));return kt=null,Vt=0,It}function OS(){for(;bt!==null;)Ng(bt)}function kS(){for(;bt!==null&&!cy();)Ng(bt)}function Ng(t){var e=Og(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?Ig(t):bt=e,Jf.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,bt=null;return}}else if(n=PS(n,e,Dn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);It===0&&(It=5)}function Vr(t,e,n){var i=st,r=Wn.transition;try{Wn.transition=null,st=1,zS(t,e,n,i)}finally{Wn.transition=r,st=i}return null}function zS(t,e,n,i){do Os();while(mr!==null);if(Je&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xy(t,s),t===kt&&(bt=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,kg(Ya,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=st;st=1;var a=Je;Je|=4,Jf.current=null,NS(t,n),wg(n,t),sS(lf),el=!!af,lf=af=null,t.current=n,IS(n),uy(),Je=a,st=o,Wn.transition=s}else t.current=n;if(zl&&(zl=!1,mr=t,Bl=r),s=t.pendingLanes,s===0&&(pr=null),dy(n.stateNode),yn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=nh,nh=null,t;return Bl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===ih?fa++:(fa=0,ih=t):fa=0,ur(),null}function Os(){if(mr!==null){var t=Mm(Bl),e=Wn.transition,n=st;try{if(Wn.transition=null,st=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Bl=0,Je&6)throw Error(ae(331));var r=Je;for(Je|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:la(8,u,s)}var f=u.child;if(f!==null)f.return=u,Te=f;else for(;Te!==null;){u=Te;var h=u.sibling,p=u.return;if(xg(u),u===c){Te=null;break}if(h!==null){h.return=p,Te=h;break}Te=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Te=g;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(P){Et(a,a.return,P)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(Je=r,ur(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot($a,t)}catch{}i=!0}return i}finally{st=n,Wn.transition=e}}return!1}function Ug(t,e,n){e=Ns(n,e),e=J0(t,e,1),t=hr(t,e,1),e=on(),t!==null&&(Uo(t,1,e),yn(t,e))}function Et(t,e,n){if(t.tag===3)Ug(t,t,n);else for(;e!==null;){if(e.tag===3){Ug(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=Ns(n,t),t=eg(e,t,1),e=hr(e,t,1),t=on(),e!==null&&(Uo(e,1,t),yn(e,t));break}}e=e.return}}function BS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(It===4||It===3&&(Vt&130023424)===Vt&&500>At()-th?Hr(t,0):eh|=n),yn(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var n=on();t=Li(t,e),t!==null&&(Uo(t,e,n),yn(t,n))}function HS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function VS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Fg(t,n)}var Og;Og=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,bS(t,e,n);_n=!!(t.flags&131072)}else _n=!1,vt&&e.flags&1048576&&g0(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=Ts(e,Yt.current);Ls(e,n),r=Df(null,e,i,t,r,n);var s=Nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tf(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,zf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&mf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WS(i),t=ti(i,t),r){case 0:e=Vf(null,e,i,t,n);break e;case 1:e=cg(null,e,i,t,n);break e;case 11:e=rg(null,e,i,t,n);break e;case 14:e=sg(null,e,i,ti(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),cg(t,e,i,r,n);case 3:e:{if(ug(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,T0(t,e),wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ae(423)),e),e=fg(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(ae(424)),e),e=fg(t,e,i,n,r);break e}else for(Ln=ar(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,ei=null,n=E0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=Ni(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return R0(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),lg(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return hg(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),rg(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Sl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!gn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Vn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),sg(t,e,i,r,n);case 15:return og(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Nl(t,e),e.tag=1,vn(i)?(t=!0,ml(e)):t=!1,Ls(e,n),Z0(e,i,r),zf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return pg(t,e,n);case 22:return ag(t,e,n)}throw Error(ae(156,e.tag))};function kg(t,e){return vm(t,e)}function GS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new GS(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WS(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pu)return 11;if(t===vu)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Gr(n.children,r,s,e);case hu:o=8,r|=8;break;case du:return t=Xn(12,n,e,r|2),t.elementType=du,t.lanes=s,t;case mu:return t=Xn(13,n,e,r),t.elementType=mu,t.lanes=s,t;case gu:return t=Xn(19,n,e,r),t.elementType=gu,t.lanes=s,t;case Yp:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xp:o=10;break e;case jp:o=9;break e;case pu:o=11;break e;case vu:o=14;break e;case Ji:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=Yp,t.lanes=n,t.stateNode={isHidden:!1},t}function uh(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,s,o,a,l){return t=new XS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function jS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return cr;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(vn(n))return d0(t,n,e)}return e}function Bg(t,e,n,i,r,s,o,a,l){return t=hh(n,i,!0,t,r,s,o,a,l),t.context=zg(null),n=t.current,i=on(),r=gr(n),s=Di(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,Uo(t,r,i),yn(t,i),t}function jl(t,e,n,i){var r=e.current,s=on(),o=gr(r);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(ri(t,r,o,s),El(t,r,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dh(t,e){Hg(t,e),(t=t.alternate)&&Hg(t,e)}function YS(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}$l.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));jl(t,e,null,null)},$l.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){jl(null,t,null,null)}),e[Ci]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&Rm(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function $S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yl(o);s.call(c)}}var o=Bg(e,i,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[Ci]=o.current,qo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yl(l);a.call(c)}}var l=hh(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=l,t[Ci]=l.current,qo(t.nodeType===8?t.parentNode:t),Br(function(){jl(e,l,n,i)}),l}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yl(o);a.call(l)}}jl(e,o,t,r)}else o=$S(n,e,t,r,i);return Yl(o)}Em=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(ku(e,n|1),yn(e,At()),!(Je&6)&&(Fs=At()+500,ur()))}break;case 13:Br(function(){var i=Li(t,1);if(i!==null){var r=on();ri(i,t,1,r)}}),dh(t,1)}},zu=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=on();ri(e,t,134217728,n)}dh(t,134217728)}},wm=function(t){if(t.tag===13){var e=gr(t),n=Li(t,e);if(n!==null){var i=on();ri(n,t,e,i)}dh(t,e)}},Tm=function(){return st},Am=function(t,e){var n=st;try{return st=t,e()}finally{st=n}},Lu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dl(i);if(!r)throw Error(ae(90));Kp(i),Eu(i,r)}}}break;case"textarea":tm(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}},um=oh,fm=Br;var qS={usingClientEntryPoint:!1,Events:[Qo,Es,dl,lm,cm,oh]},ha={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mm(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{$a=Zl.inject(KS),vi=Zl}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS,Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(ae(200));return jS(t,e,null,n)},Cn.createRoot=function(t,e){if(!mh(t))throw Error(ae(299));var n=!1,i="",r=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,qo(t.nodeType===8?t.parentNode:t),new ph(e)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=mm(e),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Br(t)},Cn.hydrate=function(t,e,n){if(!ql(e))throw Error(ae(200));return Kl(null,t,e,!0,n)},Cn.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)},Cn.render=function(t,e,n){if(!ql(e))throw Error(ae(200));return Kl(null,t,e,!1,n)},Cn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(ae(40));return t._reactRootContainer?(Br(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},Cn.unstable_batchedUpdates=oh,Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Kl(t,e,n,!1,i)},Cn.version="18.3.1-next-f1338f8080-20240426";function Wg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg)}catch(t){console.error(t)}}Wg(),zp.exports=Cn;var ZS=zp.exports,Xg,jg=ZS;Xg=jg.createRoot,jg.hydrateRoot;function QS({rootRef:t}){const e="LITTORA",n="TYPE 01";return Z.jsx("div",{className:"hero",ref:t,children:Z.jsxs("div",{className:"hero-inner",children:[Z.jsx("div",{className:"kicker micro",children:"CALDERIS · MANIFATTURA LIGURE"}),Z.jsx("h1",{className:"sr-only",children:"LITTORA Type 01 — a grand tourer by Calderis"}),Z.jsxs("svg",{className:"title-svg",viewBox:"0 0 1000 300",role:"presentation",focusable:"false",children:[Z.jsxs("defs",{children:[Z.jsxs("linearGradient",{id:"lightbar",x1:"0",y1:"0",x2:"1",y2:"0",children:[Z.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0"}),Z.jsx("stop",{offset:"42%",stopColor:"#ffe6c8",stopOpacity:"0.42"}),Z.jsx("stop",{offset:"52%",stopColor:"#ffffff",stopOpacity:"0.62"}),Z.jsx("stop",{offset:"62%",stopColor:"#ffe6c8",stopOpacity:"0.36"}),Z.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0"})]}),Z.jsxs("clipPath",{id:"titleClip",children:[Z.jsx("text",{x:"500",y:"168",fontSize:"196",children:e}),Z.jsx("text",{x:"500",y:"266",fontSize:"82",letterSpacing:"0.3em",dx:"0.15em",children:n})]})]}),Z.jsxs("g",{children:[Z.jsx("text",{className:"tt-stroke",x:"500",y:"168",fontSize:"196",children:e}),Z.jsx("text",{className:"tt-stroke",x:"500",y:"266",fontSize:"82",letterSpacing:"0.3em",dx:"0.15em",children:n}),Z.jsx("text",{className:"tt-fill",x:"500",y:"168",fontSize:"196",children:e}),Z.jsx("text",{className:"tt-fill",x:"500",y:"266",fontSize:"82",letterSpacing:"0.3em",dx:"0.15em",children:n}),Z.jsx("text",{className:"tt-solid",x:"500",y:"168",fontSize:"196",children:e}),Z.jsx("text",{className:"tt-solid",x:"500",y:"266",fontSize:"82",letterSpacing:"0.3em",dx:"0.15em",children:n}),Z.jsx("g",{clipPath:"url(#titleClip)",children:Z.jsx("rect",{className:"tt-bar",x:"420",y:"0",width:"160",height:"300"})}),Z.jsx("line",{className:"tt-rule",x1:"330",y1:"292",x2:"670",y2:"292"})]})]}),Z.jsx("p",{className:"sub",children:"A grand tourer, assembled in five acts."})]})})}const JS=[{id:"01",name:"Specification",note:"Every dimension, every material, every tolerance held to a hundredth."},{id:"02",name:"Configure",note:"Paint, wheels, interior. Nine satins, four forged sets, hides tanned in Ligure."},{id:"03",name:"Ateliers",note:"Ligure · Seoul · Los Angeles. By appointment, before the light comes up."},{id:"04",name:"Ownership",note:"Delivery, service, custodianship. A car is only ever on loan from the road."}],e1=[["Dry mass","1,180","kg"],["Power","620","hp @ 6,750 rpm"],["0–100 km/h","3.2","s"],["Top speed","328","km/h"],["Transmission","8-speed","transaxle DCT"],["From","280,000,000","KRW"]];function t1(){return Z.jsxs(Z.Fragment,{children:[Z.jsxs("section",{className:"littora",id:"specs",children:[Z.jsx("div",{className:"littora-kicker micro",children:"The Littora"}),Z.jsx("nav",{className:"menu","aria-label":"The Littora",children:JS.map(t=>Z.jsxs("a",{className:"menu-row",href:"#specs",children:[Z.jsx("span",{className:"idx",children:t.id}),Z.jsx("span",{className:"name",children:t.name}),Z.jsx("span",{className:"note",children:t.note}),Z.jsx("span",{className:"arrow","aria-hidden":"true",children:"→"})]},t.id))}),Z.jsx("dl",{className:"spec-table",children:e1.map(([t,e,n])=>Z.jsxs("div",{className:"spec-cell",children:[Z.jsx("dt",{children:t}),Z.jsxs("dd",{children:[e,Z.jsx("small",{children:n})]})]},t))})]}),Z.jsxs("footer",{className:"foot",children:[Z.jsx("div",{className:"wordmark",children:"CALDERIS"}),Z.jsx("div",{className:"micro",children:"Manifattura Ligure · Littora Type 01"}),Z.jsxs("div",{className:"foot-legal",children:[Z.jsxs("div",{className:"micro",children:["© ",new Date().getFullYear()," Calderis S.r.l. All rights reserved."]}),Z.jsx("div",{className:"micro credit",children:"Calderis is a fiction. Coast footage by Luciann Photography (Pexels); environment by Greg Zaal (Poly Haven, CC0)."})]})]})]})}const an=(t,e=0,n=1)=>t<e?e:t>n?n:t,Wr=(t,e,n)=>t+(e-t)*n,ln=(t,e,n)=>t===e?n>=e?1:0:an((n-t)/(e-t)),n1=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,gh=t=>t*t*(3-2*t),i1=(t,e=1.12)=>{const n=e+1,i=t-1;return 1+n*i*i*i+e*i*i},r1=t=>t<=0?0:t>=1?1:i1(t),Ui=[{id:"01",key:"chassis",name:"Chassis",caption:["A single carbon tub, cured in one piece.","Aluminium subframes bolt fore and aft;","the hoop closes the survival cell."],anchor:"CARBON MONOCOQUE · 1,180 kg dry",alt:"Phase one: a carbon fibre monocoque tub descends onto a lit work pad, with front and rear aluminium tube subframes and a roll hoop seating around it."},{id:"02",key:"powertrain",name:"Powertrain",caption:["A dry-sumped V8 sits front-mid, behind the axle line.","Twin turbochargers feed one plenum;","titanium carries the heat out the back."],anchor:"V8 TWIN-TURBO · 620 hp @ 6,750 rpm",alt:"Phase two: a cast aluminium twin-turbo V8 lowers into the chassis, with intake plenum, exhaust manifolds running into underbody pipes and titanium tips, a rear transaxle and a driveshaft through the tunnel."},{id:"03",key:"running",name:"Running Gear",caption:["Double wishbones at every corner, adaptive four ways.","Carbon-ceramic discs, six-piston calipers,","then twenty-two inches of forged aluminium."],anchor:"DOUBLE WISHBONE · 4-WAY ADAPTIVE",alt:"Phase three: upper and lower wishbones, coilover dampers and anti-roll bars assemble at each corner, drilled carbon-ceramic discs with amber six-piston calipers mount to the hubs, and four polished six-spoke wheels rotate in from outside the frame and lock on."},{id:"04",key:"body",name:"Body",caption:["The diffuser goes on first, then sills, fenders, doors.","The roof draws back into the fastback tail","and the shape finally closes over the structure."],anchor:"DEEP OCEAN SATIN · HAND-LAID",alt:"Phase four: a deep ocean blue satin body closes over the structure — diffuser, polished silver sills, fenders, frameless doors, rear quarters, hood, and a roof flowing into a fastback tail with green-tinted glass."},{id:"05",key:"ignition",name:"Ignition",caption:["Vertical slats fill the intake, one at a time.","The daytime strips take current, the tail bar answers,","and the wheels pick up speed."],anchor:"ENGINE // COLD START",alt:"Phase five: tall narrow vertical grille slats seat one by one, vertical LED daytime running strips and a full-width rear light bar illuminate amber, and the wheels spin up."},{id:"06",key:"finale",name:"The Road",caption:["The garage door lifts. Cold daylight arrives","all at once, and the workshop is behind us."],anchor:"COAST ROAD · LIGURIA",alt:"Finale: the garage door lifts, daylight floods the workshop and the view blows out to white before handing over to footage of the finished car on a cliff road above the sea."}],vh=1,_h=1.15,s1=2,o1=()=>vh+_h*6+s1,xh=t=>Number.isFinite(t)&&t>0?t:800,Yg=t=>Math.round(xh(t)*o1());function a1(t,e){const n=xh(e),i=Number.isFinite(t)?t:0,r=n*vh,s=n*_h*6;return an((i-r)/s,0,1)*6}function l1(t,e){const n=xh(e);return n*vh+an(t,0,6)/6*n*_h*6}function yh(t,e,{start:n=.03,end:i=.96,dur:r=.3}={}){const s=Math.max(1e-4,i-n-r),o=e>1?s/(e-1):0,a=n+o*t;return{a,b:a+r}}function c1(t,e,n,i){const{a:r,b:s}=yh(e,n,i);return ln(r,s,t)}function u1(t){const e=Number.isFinite(t)?an(t,0,6):0,n=Math.min(Ui.length-1,Math.max(0,Math.floor(e)));return{index:n,local:an(e-n,0,1),phase:Ui[n]}}function $g(t){const e=1180*ln(.02,3.9,t),n=620*ln(1,2,t),i=t>=3?9.6-(9.6-3.2)*ln(3,4.9,t):null;return{mass:e,power:n,t100:i}}function Ql(t){return{door:ln(5,5.32,t),flood:ln(5.02,5.4,t),blowout:ln(5.16,5.42,t),video:ln(5.28,5.56,t),caption:ln(5.6,5.82,t)}}function qg(t,e){if(typeof document>"u")return!1;const n=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return n==="1"?!0:n==="0"?!1:typeof matchMedia=="function"?matchMedia(e).matches:!1}const da=()=>qg("--mobile","(max-width: 860px)"),f1=()=>qg("--reduced","(prefers-reduced-motion: reduce)");function h1(t){let e=da();const n=()=>{const r=da();r!==e&&(e=r,t(r))};window.addEventListener("resize",n),window.addEventListener("orientationchange",n);let i=null;return typeof ResizeObserver=="function"&&(i=new ResizeObserver(n),i.observe(document.documentElement)),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n),i&&i.disconnect()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="169",d1=0,Kg=1,p1=2,Zg=1,Qg=2,Fi=3,xr=0,cn=1,jn=2,Oi=0,ks=1,zs=2,Jg=3,ev=4,m1=5,Xr=100,g1=101,v1=102,_1=103,x1=104,y1=200,S1=201,M1=202,E1=203,Mh=204,Eh=205,w1=206,T1=207,A1=208,C1=209,R1=210,b1=211,P1=212,L1=213,D1=214,wh=0,Th=1,Ah=2,Bs=3,Ch=4,Rh=5,bh=6,Ph=7,tv=0,N1=1,I1=2,yr=0,nv=1,iv=2,rv=3,Lh=4,U1=5,sv=6,ov=7,Dh=300,Hs=301,Vs=302,Jl=303,Nh=304,ec=306,Gs=1e3,si=1001,Ih=1002,Sn=1003,F1=1004,tc=1005,Zt=1006,Uh=1007,Sr=1008,ki=1009,av=1010,lv=1011,pa=1012,Fh=1013,jr=1014,Yn=1015,Nn=1016,Oh=1017,kh=1018,Ws=1020,cv=35902,uv=1021,fv=1022,oi=1023,hv=1024,dv=1025,Xs=1026,js=1027,pv=1028,zh=1029,mv=1030,Bh=1031,Hh=1033,nc=33776,ic=33777,rc=33778,sc=33779,Vh=35840,Gh=35841,Wh=35842,Xh=35843,jh=36196,Yh=37492,$h=37496,qh=37808,Kh=37809,Zh=37810,Qh=37811,Jh=37812,ed=37813,td=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,oc=36492,cd=36494,ud=36495,gv=36283,fd=36284,hd=36285,dd=36286,O1=3200,k1=3201,vv=0,z1=1,Mr="",un="srgb",zi="srgb-linear",pd="display-p3",ac="display-p3-linear",lc="linear",ft="srgb",cc="rec709",uc="p3",Ys=7680,_v=519,B1=512,H1=513,V1=514,xv=515,G1=516,W1=517,X1=518,j1=519,yv=35044,Sv="300 es",Bi=2e3,fc=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mv=1234567;const ma=Math.PI/180,ga=180/Math.PI;function Yr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function md(t,e){return(t%e+e)%e}function Y1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function $1(t,e,n){return t!==e?(n-t)/(e-t):0}function va(t,e,n){return(1-n)*t+n*e}function q1(t,e,n,i){return va(t,e,1-Math.exp(-n*i))}function K1(t,e=1){return e-Math.abs(md(t,e*2)-e)}function Z1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Q1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function J1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eM(t,e){return t+Math.random()*(e-t)}function tM(t){return t*(.5-Math.random())}function nM(t){t!==void 0&&(Mv=t);let e=Mv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iM(t){return t*ma}function rM(t){return t*ga}function sM(t){return(t&t-1)===0&&t!==0}function oM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function aM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cM={DEG2RAD:ma,RAD2DEG:ga,generateUUID:Yr,clamp:Pt,euclideanModulo:md,mapLinear:Y1,inverseLerp:$1,lerp:va,damp:q1,pingpong:K1,smoothstep:Z1,smootherstep:Q1,randInt:J1,randFloat:eM,randFloatSpread:tM,seededRandom:nM,degToRad:iM,radToDeg:rM,isPowerOfTwo:sM,ceilPowerOfTwo:oM,floorPowerOfTwo:aM,setQuaternionFromProperEuler:lM,normalize:fn,denormalize:qs};class re{constructor(e=0,n=0){re.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],y=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],P=r[2],T=r[5],A=r[8];return s[0]=o*y+a*v+l*P,s[3]=o*m+a*g+l*T,s[6]=o*d+a*S+l*A,s[1]=c*y+u*v+f*P,s[4]=c*m+u*g+f*T,s[7]=c*d+u*S+f*A,s[2]=h*y+p*v+_*P,s[5]=h*m+p*g+_*T,s[8]=h*d+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gd.makeScale(e,n)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new je;function Ev(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uM(){const t=hc("canvas");return t.style.display="block",t}const wv={};function dc(t){t in wv||(wv[t]=!0,console.warn(t))}function fM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function hM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tv=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Av=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_a={[zi]:{transfer:lc,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[un]:{transfer:ft,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:lc,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Av),fromReference:t=>t.applyMatrix3(Tv)},[pd]:{transfer:ft,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Av),fromReference:t=>t.applyMatrix3(Tv).convertLinearToSRGB()}},pM=new Set([zi,ac]),tt={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_a[e].toReference,r=_a[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _a[t].primaries},getTransfer:function(t){return t===Mr?lc:_a[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(_a[e].luminanceCoefficients)}};function Ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zs;class mM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=hc("canvas")),Zs.width=e.width,Zs.height=e.height;const i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_d(r[o].image)):s.push(_d(r[o]))}else s=_d(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _d(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class Jt extends $s{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=si,r=si,s=Zt,o=Sr,a=oi,l=ki,c=Jt.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Yr(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=Dh,Jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,P=(d+1)/2,T=(u+h)/4,A=(f+y)/4,C=(_+m)/4;return g>S&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends $s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends _M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const P=Math.sqrt(g),T=Math.atan2(P,d*v);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const S=a*v;if(l=l*m+h*S,c=c*m+p*S,u=u*m+_*S,f=f*m+y*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new L,bv=new $r;class Qs{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),mc.subVectors(this.max,xa),Js.subVectors(e.a,xa),eo.subVectors(e.b,xa),to.subVectors(e.c,xa),Er.subVectors(eo,Js),wr.subVectors(to,eo),qr.subVectors(Js,to);let n=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-qr.z,qr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,qr.z,0,-qr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-qr.y,qr.x,0];return!yd(n,Js,eo,to,mc)||(n=[1,0,0,0,1,0,0,0,1],!yd(n,Js,eo,to,mc))?!1:(gc.crossVectors(Er,wr),n=[gc.x,gc.y,gc.z],yd(n,Js,eo,to,mc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new L,new L,new L,new L,new L,new L,new L,new L],li=new L,pc=new Qs,Js=new L,eo=new L,to=new L,Er=new L,wr=new L,qr=new L,xa=new L,mc=new L,gc=new L,Kr=new L;function yd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Kr.fromArray(t,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=n.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yM=new Qs,ya=new L,Sd=new L;class Md{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const n=ya.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Sd)),this.expandByPoint(ya.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new L,Ed=new L,vc=new L,Tr=new L,wd=new L,_c=new L,Td=new L;class SM{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ed.copy(e).add(n).multiplyScalar(.5),vc.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(Ed);const s=e.distanceTo(n)*.5,o=-this.direction.dot(vc),a=Tr.dot(this.direction),l=-Tr.dot(vc),c=Tr.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ed).addScaledVector(vc,h),p}intersectSphere(e,n){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,i,r,s){wd.subVectors(n,e),_c.subVectors(i,e),Td.crossVectors(wd,_c);let o=this.direction.dot(Td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);const l=a*this.direction.dot(_c.crossVectors(Tr,_c));if(l<0)return null;const c=a*this.direction.dot(wd.cross(Tr));if(c<0||l+c>o)return null;const u=-a*Tr.dot(Td);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,_,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/no.setFromMatrixColumn(e,0).length(),s=1/no.setFromMatrixColumn(e,1).length(),o=1/no.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,y=c*f;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,EM)}lookAt(e,n,i){const r=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),Ar.crossVectors(i,In),Ar.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ar.crossVectors(i,In)),Ar.normalize(),xc.crossVectors(In,Ar),r[0]=Ar.x,r[4]=xc.x,r[8]=In.x,r[1]=Ar.y,r[5]=xc.y,r[9]=In.y,r[2]=Ar.z,r[6]=xc.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],y=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],P=i[15],T=r[0],A=r[4],C=r[8],B=r[12],x=r[1],E=r[5],z=r[9],I=r[13],N=r[2],X=r[6],U=r[10],te=r[14],D=r[3],q=r[7],$=r[11],se=r[15];return s[0]=o*T+a*x+l*N+c*D,s[4]=o*A+a*E+l*X+c*q,s[8]=o*C+a*z+l*U+c*$,s[12]=o*B+a*I+l*te+c*se,s[1]=u*T+f*x+h*N+p*D,s[5]=u*A+f*E+h*X+p*q,s[9]=u*C+f*z+h*U+p*$,s[13]=u*B+f*I+h*te+p*se,s[2]=_*T+y*x+m*N+d*D,s[6]=_*A+y*E+m*X+d*q,s[10]=_*C+y*z+m*U+d*$,s[14]=_*B+y*I+m*te+d*se,s[3]=v*T+g*x+S*N+P*D,s[7]=v*A+g*E+S*X+P*q,s[11]=v*C+g*z+S*U+P*$,s[15]=v*B+g*I+S*te+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=f*m*c-y*h*c+y*l*p-a*m*p-f*l*d+a*h*d,g=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,S=u*y*c-_*f*c+_*a*p-o*y*p-u*a*d+o*f*d,P=_*f*l-u*y*l-_*a*h+o*y*h+u*a*m-o*f*m,T=n*v+i*g+r*S+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*d+n*h*d)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*d-n*l*d)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(_*f*s-u*y*s-_*i*p+n*y*p+u*i*d-n*f*d)*A,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*d+n*a*d)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(u*y*r-_*f*r+_*i*h-n*y*h-u*i*m+n*f*m)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,y=o*u,m=o*f,d=a*f,v=l*c,g=l*u,S=l*f,P=i.x,T=i.y,A=i.z;return r[0]=(1-(y+d))*P,r[1]=(p+S)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+g)*A,r[9]=(m-v)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=no.set(r[0],r[1],r[2]).length();const o=no.set(r[4],r[5],r[6]).length(),a=no.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);const c=1/s,u=1/o,f=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,n.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Bi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let _,y;if(a===Bi)_=(o+s)*f,y=-2*f;else if(a===fc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const no=new L,ci=new St,MM=new L(0,0,0),EM=new L(1,1,1),Ar=new L,xc=new L,In=new L,Pv=new St,Lv=new $r;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wM=0;const Nv=new L,io=new $r,Gi=new St,yc=new L,Sa=new L,TM=new L,AM=new $r,Iv=new L(1,0,0),Uv=new L(0,1,0),Fv=new L(0,0,1),Ov={type:"added"},CM={type:"removed"},ro={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Gt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new L,n=new Mi,i=new $r,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(Uv,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,n){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(Uv,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yc.copy(e):yc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Sa,yc,this.up):Gi.lookAt(yc,Sa,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),io.setFromRotationMatrix(Gi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ov),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CM),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ov),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new L(0,1,0),Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new L,Wi=new L,Cd=new L,Xi=new L,so=new L,oo=new L,kv=new L,Rd=new L,bd=new L,Pd=new L,Ld=new wt,Dd=new wt,Nd=new wt;class fi{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ui.subVectors(e,n),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ui.subVectors(r,n),Wi.subVectors(i,n),Cd.subVectors(e,n);const o=ui.dot(ui),a=ui.dot(Wi),l=ui.dot(Cd),c=Wi.dot(Wi),u=Wi.dot(Cd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ld.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Ld.fromBufferAttribute(e,n),Dd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ld,s.x),o.addScaledVector(Dd,s.y),o.addScaledVector(Nd,s.z),o}static isFrontFacing(e,n,i,r){return ui.subVectors(i,n),Wi.subVectors(e,n),ui.cross(Wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ui.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;so.subVectors(r,i),oo.subVectors(s,i),Rd.subVectors(e,i);const l=so.dot(Rd),c=oo.dot(Rd);if(l<=0&&c<=0)return n.copy(i);bd.subVectors(e,r);const u=so.dot(bd),f=oo.dot(bd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(so,o);Pd.subVectors(e,s);const p=so.dot(Pd),_=oo.dot(Pd);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(oo,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return kv.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(kv,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(so,o).addScaledVector(oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Id(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=md(e,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Id(o,s,e+1/3),this.g=Id(o,s,e),this.b=Id(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=zv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=vd(e.r),this.g=vd(e.g),this.b=vd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return tt.fromWorkingColorSpace(en.copy(this),e),Math.round(Pt(en.r*255,0,255))*65536+Math.round(Pt(en.g*255,0,255))*256+Math.round(Pt(en.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=un){tt.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+n,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Cr),e.getHSL(Sc);const i=va(Cr.h,Sc.h,n),r=va(Cr.s,Sc.s,n),s=va(Cr.l,Sc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ze;ze.NAMES=zv;let RM=0;class Ma extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Eh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==Eh&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mn extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ji=bM();function bM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function PM(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Pt(t,-65504,65504),ji.floatView[0]=t;const e=ji.uint32View[0],n=e>>23&511;return ji.baseTable[n]+((e&8388607)>>ji.shiftTable[n])}function LM(t){const e=t>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(t&1023)]+ji.exponentTable[e],ji.floatView[0]}const Mc={toHalfFloat:PM,fromHalfFloat:LM},Lt=new L,Ec=new re;class Wt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yv,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ec.fromBufferAttribute(this,n),Ec.applyMatrix3(e),this.setXY(n,Ec.x,Ec.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class Bv extends Wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hv extends Wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ot extends Wt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DM=0;const $n=new St,Ud=new Gt,ao=new L,Un=new Qs,Ea=new Qs,zt=new L;class Xt extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ev(e)?Hv:Bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,i){return $n.makeTranslation(e,n,i),this.applyMatrix4($n),this}scale(e,n,i){return $n.makeScale(e,n,i),this.applyMatrix4($n),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Un.min,Ea.min),Un.expandByPoint(zt),zt.addVectors(Un.max,Ea.max),Un.expandByPoint(zt)):(Un.expandByPoint(Ea.min),Un.expandByPoint(Ea.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),zt.add(ao)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;const c=new L,u=new L,f=new L,h=new re,p=new re,_=new re,y=new L,m=new L;function d(C,B,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,B),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,B),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(E),a[C].add(y),a[B].add(y),a[x].add(y),l[C].add(m),l[B].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,B=v.length;C<B;++C){const x=v[C],E=x.start,z=x.count;for(let I=E,N=E+z;I<N;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const g=new L,S=new L,P=new L,T=new L;function A(C){P.fromBufferAttribute(r,C),T.copy(P);const B=a[C];g.copy(B),g.sub(P.multiplyScalar(P.dot(B))).normalize(),S.crossVectors(T,B);const E=S.dot(l[C])<0?-1:1;o.setXYZW(C,g.x,g.y,g.z,E)}for(let C=0,B=v.length;C<B;++C){const x=v[C],E=x.start,z=x.count;for(let I=E,N=E+z;I<N;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Wt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vv=new St,Zr=new SM,wc=new Md,Gv=new L,Tc=new L,Ac=new L,Cc=new L,Fd=new L,Rc=new L,Wv=new L,bc=new L;class at extends Gt{constructor(e=new Xt,n=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Fd.fromBufferAttribute(f,e),o?Rc.addScaledVector(Fd,u):Rc.addScaledVector(Fd.sub(n),u))}n.add(Rc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(wc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(wc,Gv)===null||Zr.origin.distanceToSquared(Gv)>(e.far-e.near)**2))&&(Vv.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Vv),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const T=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=Pc(this,d,e,i,c,u,f,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Pc(this,o,e,i,c,u,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const T=S,A=S+1,C=S+2;r=Pc(this,d,e,i,c,u,f,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,S=m+2;r=Pc(this,o,e,i,c,u,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NM(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;bc.copy(a),bc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bc);return c<n.near||c>n.far?null:{distance:c,point:bc.clone(),object:t}}function Pc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Tc),t.getVertexPosition(l,Ac),t.getVertexPosition(c,Cc);const u=NM(t,e,n,i,Tc,Ac,Cc,Wv);if(u){const f=new L;fi.getBarycoord(Wv,Tc,Ac,Cc,f),r&&(u.uv=fi.getInterpolatedAttribute(r,a,l,c,f,new re)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,f,new re)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};fi.getNormal(Tc,Ac,Cc,h.normal),u.face=h,u.barycoord=f}return u}class hi extends Xt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function _(y,m,d,v,g,S,P,T,A,C,B){const x=S/A,E=P/C,z=S/2,I=P/2,N=T/2,X=A+1,U=C+1;let te=0,D=0;const q=new L;for(let $=0;$<U;$++){const se=$*E-I;for(let j=0;j<X;j++){const fe=j*x-z;q[y]=fe*v,q[m]=se*g,q[d]=N,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=T>0?1:-1,u.push(q.x,q.y,q.z),f.push(j/A),f.push(1-$/C),te+=1}}for(let $=0;$<C;$++)for(let se=0;se<A;se++){const j=h+se+X*$,fe=h+se+X*($+1),V=h+(se+1)+X*($+1),K=h+(se+1)+X*$;l.push(j,fe,K),l.push(fe,V,K),D+=6}a.addGroup(p,D,B),p+=D,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function IM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const wa={clone:lo,merge:hn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new L,Yv=new re,$v=new re;class qn extends jv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,n){return this.getViewBounds(e,Yv,$v),n.subVectors($v,Yv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class OM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(co,uo,e,n);r.layers=this.layers,this.add(r);const s=new qn(co,uo,e,n);s.layers=this.layers,this.add(s);const o=new qn(co,uo,e,n);o.layers=this.layers,this.add(o);const a=new qn(co,uo,e,n);a.layers=this.layers,this.add(a);const l=new qn(co,uo,e,n);l.layers=this.layers,this.add(l);const c=new qn(co,uo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qv extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kM extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hi(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Oi});s.uniforms.tEquirect.value=n;const o=new at(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Zt),new OM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Od=new L,zM=new L,BM=new je;class Qr{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Od.subVectors(i,n).cross(zM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BM.getNormalMatrix(e),r=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Md,Lc=new L;class kd{constructor(e=new Qr,n=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],y=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-d).normalize(),i[1].setComponents(l+s,h+c,m+p,S+d).normalize(),i[2].setComponents(l+o,h+u,m+_,S+v).normalize(),i[3].setComponents(l-o,h-u,m-_,S-v).normalize(),i[4].setComponents(l-a,h-f,m-y,S-g).normalize(),n===Bi)i[5].setComponents(l+a,h+f,m+y,S+g).normalize();else if(n===fc)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lc.x=r.normal.x>0?e.max.x:e.min.x,Lc.y=r.normal.y>0?e.max.y:e.min.y,Lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class di extends Xt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],y=[],m=[];for(let d=0;d<u;d++){const v=d*h-o;for(let g=0;g<c;g++){const S=g*f-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+c*d,S=v+c*(d+1),P=v+1+c*(d+1),T=v+1+c*d;p.push(g,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.widthSegments,e.heightSegments)}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ye={alphahash_fragment:VM,alphahash_pars_fragment:GM,alphamap_fragment:WM,alphamap_pars_fragment:XM,alphatest_fragment:jM,alphatest_pars_fragment:YM,aomap_fragment:$M,aomap_pars_fragment:qM,batching_pars_vertex:KM,batching_vertex:ZM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:eE,iridescence_fragment:tE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:oE,color_fragment:aE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:fE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:dE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:vE,colorspace_fragment:_E,colorspace_pars_fragment:xE,envmap_fragment:yE,envmap_common_pars_fragment:SE,envmap_pars_fragment:ME,envmap_pars_vertex:EE,envmap_physical_pars_fragment:IE,envmap_vertex:wE,fog_vertex:TE,fog_pars_vertex:AE,fog_fragment:CE,fog_pars_fragment:RE,gradientmap_pars_fragment:bE,lightmap_pars_fragment:PE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:DE,lights_pars_begin:NE,lights_toon_fragment:UE,lights_toon_pars_fragment:FE,lights_phong_fragment:OE,lights_phong_pars_fragment:kE,lights_physical_fragment:zE,lights_physical_pars_fragment:BE,lights_fragment_begin:HE,lights_fragment_maps:VE,lights_fragment_end:GE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:XE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:YE,map_fragment:$E,map_pars_fragment:qE,map_particle_fragment:KE,map_particle_pars_fragment:ZE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphinstance_vertex:ew,morphcolor_vertex:tw,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:rw,normal_fragment_begin:sw,normal_fragment_maps:ow,normal_pars_fragment:aw,normal_pars_vertex:lw,normal_vertex:cw,normalmap_pars_fragment:uw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:gw,premultiplied_alpha_fragment:vw,project_vertex:_w,dithering_fragment:xw,dithering_pars_fragment:yw,roughnessmap_fragment:Sw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:ww,shadowmap_vertex:Tw,shadowmask_pars_fragment:Aw,skinbase_vertex:Cw,skinning_pars_vertex:Rw,skinning_vertex:bw,skinnormal_vertex:Pw,specularmap_fragment:Lw,specularmap_pars_fragment:Dw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Iw,transmission_fragment:Uw,transmission_pars_fragment:Fw,uv_pars_fragment:Ow,uv_pars_vertex:kw,uv_vertex:zw,worldpos_vertex:Bw,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},_e={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ei={basic:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:hn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:hn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:hn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:hn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:hn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:hn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:hn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:hn([_e.lights,_e.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ei.physical={uniforms:hn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Dc={r:0,b:0,g:0},es=new Mi,Hw=new St;function Vw(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const S=_(v);S===null?d(a,l):S&&S.isColor&&(d(S,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const S=_(g);S&&(S.isCubeTexture||S.mapping===ec)?(u===void 0&&(u=new at(new hi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:lo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),es.copy(g.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(es)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,(f!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new at(new di(2,2),new dn({name:"BackgroundMaterial",uniforms:lo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,g){v.getRGB(Dc,Xv(t)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:y,addToRenderList:m}}function Gw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,z,I,N){let X=!1;const U=f(I,z,E);s!==U&&(s=U,c(s.object)),X=p(x,I,z,N),X&&_(x,I,z,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(x,E,z,I),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,E,z){const I=z.wireframe===!0;let N=i[x.id];N===void 0&&(N={},i[x.id]=N);let X=N[E.id];X===void 0&&(X={},N[E.id]=X);let U=X[I];return U===void 0&&(U=h(l()),X[I]=U),U}function h(x){const E=[],z=[],I=[];for(let N=0;N<n;N++)E[N]=0,z[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:I,object:x,attributes:{},index:null}}function p(x,E,z,I){const N=s.attributes,X=E.attributes;let U=0;const te=z.getAttributes();for(const D in te)if(te[D].location>=0){const $=N[D];let se=X[D];if(se===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;U++}return s.attributesNum!==U||s.index!==I}function _(x,E,z,I){const N={},X=E.attributes;let U=0;const te=z.getAttributes();for(const D in te)if(te[D].location>=0){let $=X[D];$===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),N[D]=se,U++}s.attributes=N,s.attributesNum=U,s.index=I}function y(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function m(x){d(x,0)}function d(x,E){const z=s.newAttributes,I=s.enabledAttributes,N=s.attributeDivisors;z[x]=1,I[x]===0&&(t.enableVertexAttribArray(x),I[x]=1),N[x]!==E&&(t.vertexAttribDivisor(x,E),N[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,I=E.length;z<I;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function g(x,E,z,I,N,X,U){U===!0?t.vertexAttribIPointer(x,E,z,N,X):t.vertexAttribPointer(x,E,z,I,N,X)}function S(x,E,z,I){y();const N=I.attributes,X=z.getAttributes(),U=E.defaultAttributeValues;for(const te in X){const D=X[te];if(D.location>=0){let q=N[te];if(q===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const $=q.normalized,se=q.itemSize,j=e.get(q);if(j===void 0)continue;const fe=j.buffer,V=j.type,K=j.bytesPerElement,de=V===t.INT||V===t.UNSIGNED_INT||q.gpuType===Fh;if(q.isInterleavedBufferAttribute){const pe=q.data,ue=pe.stride,oe=q.offset;if(pe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<D.locationSize;Ae++)d(D.location+Ae,pe.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ae=0;Ae<D.locationSize;Ae++)m(D.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let Ae=0;Ae<D.locationSize;Ae++)g(D.location+Ae,se/D.locationSize,V,$,ue*K,(oe+se/D.locationSize*Ae)*K,de)}else{if(q.isInstancedBufferAttribute){for(let pe=0;pe<D.locationSize;pe++)d(D.location+pe,q.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<D.locationSize;pe++)m(D.location+pe);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let pe=0;pe<D.locationSize;pe++)g(D.location+pe,se/D.locationSize,V,$,se*K,se/D.locationSize*pe*K,de)}}else if(U!==void 0){const $=U[te];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(D.location,$);break;case 3:t.vertexAttrib3fv(D.location,$);break;case 4:t.vertexAttrib4fv(D.location,$);break;default:t.vertexAttrib1fv(D.location,$)}}}}v()}function P(){C();for(const x in i){const E=i[x];for(const z in E){const I=E[z];for(const N in I)u(I[N].object),delete I[N];delete E[z]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const I=E[z];for(const N in I)u(I[N].object),delete I[N];delete E[z]}delete i[x.id]}function A(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const I=z[x.id];for(const N in I)u(I[N].object),delete I[N];delete z[x.id]}}function C(){B(),o=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Ww(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ki&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yn&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:P,maxSamples:T}}function jw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;l.value=S,S=u(_,h,g,p);for(let P=0;P!==g;++P)S[P]=n[P];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Yw(t){let e=new WeakMap;function n(o,a){return a===Jl?o.mapping=Hs:a===Nh&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zd extends jv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fo=4,Zv=[.125,.215,.35,.446,.526,.582],ts=20,Bd=new zd,Qv=new ze;let Hd=null,Vd=0,Gd=0,Wd=!1;const ns=(1+Math.sqrt(5))/2,ho=1/ns,Jv=[new L(-ns,ho,0),new L(ns,ho,0),new L(-ho,0,ns),new L(ho,0,ns),new L(0,ns,-ho),new L(0,ns,ho),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Vd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Nn,format:oi,colorSpace:zi,depthBuffer:!1},r=e_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$w(s)),this._blurMaterial=qw(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Bd)}_sceneToCubeUV(e,n,i,r){const a=new qn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qv),u.toneMapping=yr,u.autoClear=!1;const p=new Mn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new at(new hi,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Qv),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;Ic(r,v*g,d>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jv[(r-s-1)%Jv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new at(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):ts;m>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const d=[];let v=0;for(let A=0;A<ts;++A){const C=A/y,B=Math.exp(-C*C/2);d.push(B),A===0?v+=B:A<m&&(v+=2*B)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],P=3*S*(r>g-fo?r-g+fo:0),T=4*(this._cubeSize-S);Ic(n,P,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Bd)}}function $w(t){const e=[],n=[],i=[];let r=t;const s=t-fo+1+Zv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fo?l=Zv[o-t+fo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,C=T>2?0:-1,B=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(B,y*_*T),g.set(h,m*_*T);const x=[T,T,T,T,T,T];S.set(x,d*_*T)}const P=new Xt;P.setAttribute("position",new Wt(v,y)),P.setAttribute("uv",new Wt(g,m)),P.setAttribute("faceIndex",new Wt(S,d)),e.push(P),r>fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function e_(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qw(t,e,n){const i=new Float32Array(ts),r=new L(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function t_(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function n_(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Nh,u=l===Hs||l===Vs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Nc(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Nc(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&dc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const P=v[g+0],T=v[g+1],A=v[g+2];h.push(P,T,T,A,A,P)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const P=g+0,T=g+1,A=g+2;h.push(P,T,T,A,A,P)}}else return;const m=new(Ev(h)?Hv:Bv)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function eT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tT(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let B=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),_===!0&&(g=2),y===!0&&(g=3);let S=a.attributes.position.count*g,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*P*4*f),A=new Rv(T,S,P,f);A.type=Yn,A.needsUpdate=!0;const C=g*4;for(let x=0;x<f;x++){const E=m[x],z=d[x],I=v[x],N=S*P*4*x;for(let X=0;X<E.count;X++){const U=X*C;p===!0&&(r.fromBufferAttribute(E,X),T[N+U+0]=r.x,T[N+U+1]=r.y,T[N+U+2]=r.z,T[N+U+3]=0),_===!0&&(r.fromBufferAttribute(z,X),T[N+U+4]=r.x,T[N+U+5]=r.y,T[N+U+6]=r.z,T[N+U+7]=0),y===!0&&(r.fromBufferAttribute(I,X),T[N+U+8]=r.x,T[N+U+9]=r.y,T[N+U+10]=r.z,T[N+U+11]=I.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new re(S,P)},i.set(a,h),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class i_ extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=Xs){if(u!==Xs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=jr),i===void 0&&u===js&&(i=Ws),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const r_=new Jt,s_=new i_(1,1),o_=new Rv,a_=new xM,l_=new qv,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=c_[r];if(s===void 0&&(s=new Float32Array(r),c_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uc(t,e){let n=u_[e];n===void 0&&(n=new Int32Array(e),u_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;d_.set(i),t.uniformMatrix2fv(this.addr,!1,d_),Ft(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;h_.set(i),t.uniformMatrix3fv(this.addr,!1,h_),Ft(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;f_.set(i),t.uniformMatrix4fv(this.addr,!1,f_),Ft(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(s_.compareFunction=xv,s=s_):s=r_,n.setTexture2D(e||s,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||a_,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||l_,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o_,r)}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function DT(t,e){t.uniform3iv(this.addr,e)}function NT(t,e){t.uniform4iv(this.addr,e)}function IT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function OT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||r_,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||a_,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||l_,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||o_,s[o])}function VT(t){switch(t){case 5126:return ET;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return bT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return NT;case 5125:return IT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MT(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function p_(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(jd.lastIndex=0;;){const s=jd.exec(i),o=jd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){p_(n,c===void 0?new GT(a,t,e):new WT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new XT(a),p_(n,f)),n=f}}}class Fc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function m_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YT=37297;let $T=0;function qT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KT(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===uc&&n===cc?i="LinearDisplayP3ToLinearSRGB":e===cc&&n===uc&&(i="LinearSRGBToLinearDisplayP3"),t){case zi:case ac:return[i,"LinearTransferOETF"];case un:case pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function g_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qT(t.getShaderSource(e),o)}else return r}function ZT(t,e){const n=KT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function QT(t,e){let n;switch(e){case nv:n="Linear";break;case iv:n="Reinhard";break;case rv:n="Cineon";break;case Lh:n="ACESFilmic";break;case sv:n="AgX";break;case ov:n="Neutral";break;case U1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oc=new L;function JT(){tt.getLuminanceCoefficients(Oc);const t=Oc.x.toFixed(4),e=Oc.y.toFixed(4),n=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function t2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function n2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ta(t){return t!==""}function v_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(i2,s2)}const r2=new Map;function s2(t,e){let n=Ye[e];if(n===void 0){const i=r2.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(n)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(t){return t.replace(o2,a2)}function a2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function c2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function f2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tv:e="ENVMAP_BLENDING_MULTIPLY";break;case N1:e="ENVMAP_BLENDING_MIX";break;case I1:e="ENVMAP_BLENDING_ADD";break}return e}function h2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=l2(n),c=c2(n),u=u2(n),f=f2(n),h=h2(n),p=e2(n),_=t2(s),y=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(m=[y_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[y_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==yr?QT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),JT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Yd(o),o=v_(o,n),o=__(o,n),a=Yd(a),a=v_(a,n),a=__(a,n),o=x_(o),a=x_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+o,S=v+d+a,P=m_(r,r.VERTEX_SHADER,g),T=m_(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),I=r.getShaderInfoLog(P).trim(),N=r.getShaderInfoLog(T).trim();let X=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,T);else{const te=g_(r,P,"vertex"),D=g_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+te+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||N==="")&&(U=!1);U&&(E.diagnostics={runnable:X,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:d}})}r.deleteShader(P),r.deleteShader(T),C=new Fc(r,y),B=n2(r,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let B;this.getAttributes=function(){return B===void 0&&A(this),B};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,YT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}let p2=0;class m2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new g2(e),n.set(e,i)),i}}class g2{constructor(e){this.id=p2++,this.code=e,this.usedTimes=0}}function v2(t,e,n,i,r,s,o){const a=new Dv,l=new m2,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,E,z,I,N){const X=I.fog,U=N.geometry,te=x.isMeshStandardMaterial?I.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||te),q=D&&D.mapping===ec?D.image.height:null,$=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const se=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=se!==void 0?se.length:0;let fe=0;U.morphAttributes.position!==void 0&&(fe=1),U.morphAttributes.normal!==void 0&&(fe=2),U.morphAttributes.color!==void 0&&(fe=3);let V,K,de,pe;if($){const An=Ei[$];V=An.vertexShader,K=An.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const ue=t.getRenderTarget(),oe=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,Oe=!!x.map,ee=!!x.matcap,b=!!D,me=!!x.aoMap,ge=!!x.lightMap,le=!!x.bumpMap,ve=!!x.normalMap,Ie=!!x.displacementMap,Me=!!x.emissiveMap,R=!!x.metalnessMap,M=!!x.roughnessMap,H=x.anisotropy>0,Q=x.clearcoat>0,ne=x.dispersion>0,J=x.iridescence>0,Le=x.sheen>0,xe=x.transmission>0,Ce=H&&!!x.anisotropyMap,Ze=Q&&!!x.clearcoatMap,ce=Q&&!!x.clearcoatNormalMap,Re=Q&&!!x.clearcoatRoughnessMap,He=J&&!!x.iridescenceMap,Ve=J&&!!x.iridescenceThicknessMap,be=Le&&!!x.sheenColorMap,Qe=Le&&!!x.sheenRoughnessMap,We=!!x.specularMap,ht=!!x.specularColorMap,F=!!x.specularIntensityMap,Ee=xe&&!!x.transmissionMap,Y=xe&&!!x.thicknessMap,ie=!!x.gradientMap,ye=!!x.alphaMap,we=x.alphaTest>0,et=!!x.alphaHash,Dt=!!x.extensions;let Tn=yr;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Tn=t.toneMapping);const nt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:oe,instancingColor:oe&&N.instanceColor!==null,instancingMorph:oe&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:zi,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:ee,envMap:b,envMapMode:b&&D.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:ge,bumpMap:le,normalMap:ve,displacementMap:p&&Ie,emissiveMap:Me,normalMapObjectSpace:ve&&x.normalMapType===z1,normalMapTangentSpace:ve&&x.normalMapType===vv,metalnessMap:R,roughnessMap:M,anisotropy:H,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Ze,clearcoatNormalMap:ce,clearcoatRoughnessMap:Re,dispersion:ne,iridescence:J,iridescenceMap:He,iridescenceThicknessMap:Ve,sheen:Le,sheenColorMap:be,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:ht,specularIntensityMap:F,transmission:xe,transmissionMap:Ee,thicknessMap:Y,gradientMap:ie,opaque:x.transparent===!1&&x.blending===ks&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:we,alphaHash:et,combine:x.combine,mapUv:Oe&&m(x.map.channel),aoMapUv:me&&m(x.aoMap.channel),lightMapUv:ge&&m(x.lightMap.channel),bumpMapUv:le&&m(x.bumpMap.channel),normalMapUv:ve&&m(x.normalMap.channel),displacementMapUv:Ie&&m(x.displacementMap.channel),emissiveMapUv:Me&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Ce&&m(x.anisotropyMap.channel),clearcoatMapUv:Ze&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&m(x.sheenRoughnessMap.channel),specularMapUv:We&&m(x.specularMap.channel),specularColorMapUv:ht&&m(x.specularColorMap.channel),specularIntensityMapUv:F&&m(x.specularIntensityMap.channel),transmissionMapUv:Ee&&m(x.transmissionMap.channel),thicknessMapUv:Y&&m(x.thicknessMap.channel),alphaMapUv:ye&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Oe||ye),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tn,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(g(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const E=y[x.type];let z;if(E){const I=Ei[E];z=wa.clone(I.uniforms)}else z=x.uniforms;return z}function T(x,E){let z;for(let I=0,N=u.length;I<N;I++){const X=u[I];if(X.cacheKey===E){z=X,++z.usedTimes;break}}return z===void 0&&(z=new d2(t,E,x,s),u.push(z)),z}function A(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function B(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:P,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:B}}function _2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function x2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function S_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function M_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||x2),i.length>1&&i.sort(h||S_),r.length>1&&r.sort(h||S_)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function y2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new M_,t.set(i,[o])):r>=s.length?(o=new M_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new ze};break;case"SpotLight":n={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function M2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E2=0;function w2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T2(t){const e=new S2,n=M2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new St,o=new St;function a(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,v=0,g=0,S=0,P=0,T=0,A=0;c.sort(w2);for(let B=0,x=c.length;B<x;B++){const E=c[B],z=E.color,I=E.intensity,N=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=z.r*I,f+=z.g*I,h+=z.b*I;else if(E.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(E.sh.coefficients[U],I);A++}else if(E.isDirectionalLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,D=n.get(E);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=U,p++}else if(E.isSpotLight){const U=e.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(z).multiplyScalar(I),U.distance=N,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,i.spot[y]=U;const te=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,te.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[y]=te.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=X,S++}y++}else if(E.isRectAreaLight){const U=e.get(E);U.color.copy(z).multiplyScalar(I),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=U,m++}else if(E.isPointLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){const te=E.shadow,D=n.get(E);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,D.shadowCameraNear=te.camera.near,D.shadowCameraFar=te.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=E.shadow.matrix,g++}i.point[_]=U,_++}else if(E.isHemisphereLight){const U=e.get(E);U.skyColor.copy(E.color).multiplyScalar(I),U.groundColor.copy(E.groundColor).multiplyScalar(I),i.hemi[d]=U,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==g||C.numSpotShadows!==S||C.numSpotMaps!==P||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=p,C.pointLength=_,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=g,C.numSpotShadows=S,C.numSpotMaps=P,C.numLightProbes=A,i.version=E2++)}function l(c,u){let f=0,h=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const g=c[d];if(g.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function E_(t){const e=new T2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function A2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new E_(t),e.set(r,[a])):s>=o.length?(a=new E_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class C2 extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R2 extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L2(t,e,n){let i=new kd;const r=new re,s=new re,o=new wt,a=new C2({depthPacking:k1}),l=new R2,c={},u=n.maxTextureSize,f={[xr]:cn,[cn]:xr,[jn]:jn},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:b2,fragmentShader:P2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Xt;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let d=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const B=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Oi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=d!==Fi&&this.type===Fi,N=d===Fi&&this.type!==Fi;for(let X=0,U=T.length;X<U;X++){const te=T[X],D=te.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||I===!0||N===!0){const se=this.type!==Fi?{minFilter:Sn,magFilter:Sn}:{};D.map!==null&&D.map.dispose(),D.map=new ai(r.x,r.y,se),D.map.texture.name=te.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const $=D.getViewportCount();for(let se=0;se<$;se++){const j=D.getViewport(se);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(o),D.updateMatrices(te,se),i=D.getFrustum(),S(A,C,D.camera,te,this.type)}D.isPointLightShadow!==!0&&this.type===Fi&&v(D,C),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(B,x,E)};function v(T,A){const C=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,p,y,null)}function g(T,A,C,B){let x=null;const E=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,I=A.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let X=N[I];X===void 0&&(X=x.clone(),N[I]=X,A.addEventListener("dispose",P)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,B===Fi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=C}return x}function S(T,A,C,B,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Fi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const I=e.update(T),N=T.material;if(Array.isArray(N)){const X=I.groups;for(let U=0,te=X.length;U<te;U++){const D=X[U],q=N[D.materialIndex];if(q&&q.visible){const $=g(T,q,B,x);T.onBeforeShadow(t,T,A,C,I,$,D),t.renderBufferDirect(C,null,I,$,T,D),T.onAfterShadow(t,T,A,C,I,$,D)}}}else if(N.visible){const X=g(T,N,B,x);T.onBeforeShadow(t,T,A,C,I,X,null),t.renderBufferDirect(C,null,I,X,T,null),T.onAfterShadow(t,T,A,C,I,X,null)}}const z=T.children;for(let I=0,N=z.length;I<N;I++)S(z[I],A,C,B,x)}function P(T){T.target.removeEventListener("dispose",P);for(const C in c){const B=c[C],x=T.target.uuid;x in B&&(B[x].dispose(),delete B[x])}}}const D2={[wh]:Th,[Ah]:bh,[Ch]:Ph,[Bs]:Rh,[Th]:wh,[bh]:Ah,[Ph]:Ch,[Rh]:Bs};function N2(t){function e(){let F=!1;const Ee=new wt;let Y=null;const ie=new wt(0,0,0,0);return{setMask:function(ye){Y!==ye&&!F&&(t.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){F=ye},setClear:function(ye,we,et,Dt,Tn){Tn===!0&&(ye*=Dt,we*=Dt,et*=Dt),Ee.set(ye,we,et,Dt),ie.equals(Ee)===!1&&(t.clearColor(ye,we,et,Dt),ie.copy(Ee))},reset:function(){F=!1,Y=null,ie.set(-1,0,0,0)}}}function n(){let F=!1,Ee=!1,Y=null,ie=null,ye=null;return{setReversed:function(we){Ee=we},setTest:function(we){we?de(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(we){Y!==we&&!F&&(t.depthMask(we),Y=we)},setFunc:function(we){if(Ee&&(we=D2[we]),ie!==we){switch(we){case wh:t.depthFunc(t.NEVER);break;case Th:t.depthFunc(t.ALWAYS);break;case Ah:t.depthFunc(t.LESS);break;case Bs:t.depthFunc(t.LEQUAL);break;case Ch:t.depthFunc(t.EQUAL);break;case Rh:t.depthFunc(t.GEQUAL);break;case bh:t.depthFunc(t.GREATER);break;case Ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=we}},setLocked:function(we){F=we},setClear:function(we){ye!==we&&(t.clearDepth(we),ye=we)},reset:function(){F=!1,Y=null,ie=null,ye=null}}}function i(){let F=!1,Ee=null,Y=null,ie=null,ye=null,we=null,et=null,Dt=null,Tn=null;return{setTest:function(nt){F||(nt?de(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(nt){Ee!==nt&&!F&&(t.stencilMask(nt),Ee=nt)},setFunc:function(nt,An,Qi){(Y!==nt||ie!==An||ye!==Qi)&&(t.stencilFunc(nt,An,Qi),Y=nt,ie=An,ye=Qi)},setOp:function(nt,An,Qi){(we!==nt||et!==An||Dt!==Qi)&&(t.stencilOp(nt,An,Qi),we=nt,et=An,Dt=Qi)},setLocked:function(nt){F=nt},setClear:function(nt){Tn!==nt&&(t.clearStencil(nt),Tn=nt)},reset:function(){F=!1,Ee=null,Y=null,ie=null,ye=null,we=null,et=null,Dt=null,Tn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,S=null,P=null,T=new ze(0,0,0),A=0,C=!1,B=null,x=null,E=null,z=null,I=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,U=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=U>=1):te.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=U>=2);let D=null,q={};const $=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),j=new wt().fromArray($),fe=new wt().fromArray(se);function V(F,Ee,Y,ie){const ye=new Uint8Array(4),we=t.createTexture();t.bindTexture(F,we),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<Y;et++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(Ee+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return we}const K={};K[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Bs),ge(!1),le(Kg),de(t.CULL_FACE),b(Oi);function de(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function pe(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function ue(F,Ee){return u[F]!==Ee?(t.bindFramebuffer(F,Ee),u[F]=Ee,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Ee),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function oe(F,Ee){let Y=h,ie=!1;if(F){Y=f.get(Ee),Y===void 0&&(Y=[],f.set(Ee,Y));const ye=F.textures;if(Y.length!==ye.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let we=0,et=ye.length;we<et;we++)Y[we]=t.COLOR_ATTACHMENT0+we;Y.length=ye.length,ie=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ie=!0);ie&&t.drawBuffers(Y)}function Ae(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Oe={[Xr]:t.FUNC_ADD,[g1]:t.FUNC_SUBTRACT,[v1]:t.FUNC_REVERSE_SUBTRACT};Oe[_1]=t.MIN,Oe[x1]=t.MAX;const ee={[y1]:t.ZERO,[S1]:t.ONE,[M1]:t.SRC_COLOR,[Mh]:t.SRC_ALPHA,[R1]:t.SRC_ALPHA_SATURATE,[A1]:t.DST_COLOR,[w1]:t.DST_ALPHA,[E1]:t.ONE_MINUS_SRC_COLOR,[Eh]:t.ONE_MINUS_SRC_ALPHA,[C1]:t.ONE_MINUS_DST_COLOR,[T1]:t.ONE_MINUS_DST_ALPHA,[b1]:t.CONSTANT_COLOR,[P1]:t.ONE_MINUS_CONSTANT_COLOR,[L1]:t.CONSTANT_ALPHA,[D1]:t.ONE_MINUS_CONSTANT_ALPHA};function b(F,Ee,Y,ie,ye,we,et,Dt,Tn,nt){if(F===Oi){_===!0&&(pe(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),F!==m1){if(F!==y||nt!==C){if((m!==Xr||g!==Xr)&&(t.blendEquation(t.FUNC_ADD),m=Xr,g=Xr),nt)switch(F){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zs:t.blendFunc(t.ONE,t.ONE);break;case Jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ev:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zs:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ev:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,v=null,S=null,P=null,T.set(0,0,0),A=0,y=F,C=nt}return}ye=ye||Ee,we=we||Y,et=et||ie,(Ee!==m||ye!==g)&&(t.blendEquationSeparate(Oe[Ee],Oe[ye]),m=Ee,g=ye),(Y!==d||ie!==v||we!==S||et!==P)&&(t.blendFuncSeparate(ee[Y],ee[ie],ee[we],ee[et]),d=Y,v=ie,S=we,P=et),(Dt.equals(T)===!1||Tn!==A)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Tn),T.copy(Dt),A=Tn),y=F,C=!1}function me(F,Ee){F.side===jn?pe(t.CULL_FACE):de(t.CULL_FACE);let Y=F.side===cn;Ee&&(Y=!Y),ge(Y),F.blending===ks&&F.transparent===!1?b(Oi):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ie=F.stencilWrite;o.setTest(ie),ie&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ge(F){B!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),B=F)}function le(F){F!==d1?(de(t.CULL_FACE),F!==x&&(F===Kg?t.cullFace(t.BACK):F===p1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),x=F}function ve(F){F!==E&&(X&&t.lineWidth(F),E=F)}function Ie(F,Ee,Y){F?(de(t.POLYGON_OFFSET_FILL),(z!==Ee||I!==Y)&&(t.polygonOffset(Ee,Y),z=Ee,I=Y)):pe(t.POLYGON_OFFSET_FILL)}function Me(F){F?de(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+N-1),D!==F&&(t.activeTexture(F),D=F)}function M(F,Ee,Y){Y===void 0&&(D===null?Y=t.TEXTURE0+N-1:Y=D);let ie=q[Y];ie===void 0&&(ie={type:void 0,texture:void 0},q[Y]=ie),(ie.type!==F||ie.texture!==Ee)&&(D!==Y&&(t.activeTexture(Y),D=Y),t.bindTexture(F,Ee||K[F]),ie.type=F,ie.texture=Ee)}function H(){const F=q[D];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(F){j.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function be(F){fe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function Qe(F,Ee){let Y=l.get(Ee);Y===void 0&&(Y=new WeakMap,l.set(Ee,Y));let ie=Y.get(F);ie===void 0&&(ie=t.getUniformBlockIndex(Ee,F.name),Y.set(F,ie))}function We(F,Ee){const ie=l.get(Ee).get(F);a.get(Ee)!==ie&&(t.uniformBlockBinding(Ee,ie,F.__bindingPointIndex),a.set(Ee,ie))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,q={},u={},f=new WeakMap,h=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,S=null,P=null,T=new ze(0,0,0),A=0,C=!1,B=null,x=null,E=null,z=null,I=null,j.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:pe,bindFramebuffer:ue,drawBuffers:oe,useProgram:Ae,setBlending:b,setMaterial:me,setFlipSided:ge,setCullFace:le,setLineWidth:ve,setPolygonOffset:Ie,setScissorTest:Me,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:Re,texImage3D:He,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:ce,texSubImage2D:J,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ce,scissor:Ve,viewport:be,reset:ht}}function w_(t,e,n,i){const r=I2(i);switch(n){case uv:return t*e;case hv:return t*e;case dv:return t*e*2;case pv:return t*e/r.components*r.byteLength;case zh:return t*e/r.components*r.byteLength;case mv:return t*e*2/r.components*r.byteLength;case Bh:return t*e*2/r.components*r.byteLength;case fv:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Hh:return t*e*4/r.components*r.byteLength;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(t,16)*Math.max(e,8)/4;case Vh:case Wh:return Math.max(t,8)*Math.max(e,8)/2;case jh:case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case oc:case cd:case ud:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gv:case fd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hd:case dd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I2(t){switch(t){case ki:case av:return{byteLength:1,components:1};case pa:case lv:case Nn:return{byteLength:2,components:1};case Oh:case kh:return{byteLength:2,components:4};case jr:case Fh:case Yn:return{byteLength:4,components:1};case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function U2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):hc("canvas")}function y(R,M,H){let Q=1;const ne=Me(R);if((ne.width>H||ne.height>H)&&(Q=H/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ne.width),Le=Math.floor(Q*ne.height);f===void 0&&(f=_(J,Le));const xe=M?_(J,Le):f;return xe.width=J,xe.height=Le,xe.getContext("2d").drawImage(R,0,0,J,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Le+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Sn&&R.minFilter!==Zt}function d(R){t.generateMipmap(R)}function v(R,M,H,Q,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),M===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGB8UI),H===t.UNSIGNED_SHORT&&(J=t.RGB16UI),H===t.UNSIGNED_INT&&(J=t.RGB32UI),H===t.BYTE&&(J=t.RGB8I),H===t.SHORT&&(J=t.RGB16I),H===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),H===t.UNSIGNED_INT&&(J=t.RGBA32UI),H===t.BYTE&&(J=t.RGBA8I),H===t.SHORT&&(J=t.RGBA16I),H===t.INT&&(J=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Le=ne?lc:tt.getTransfer(Q);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=Le===ft?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(R,M){let H;return R?M===null||M===jr||M===Ws?H=t.DEPTH24_STENCIL8:M===Yn?H=t.DEPTH32F_STENCIL8:M===pa&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===Ws?H=t.DEPTH_COMPONENT24:M===Yn?H=t.DEPTH_COMPONENT32F:M===pa&&(H=t.DEPTH_COMPONENT16),H}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&u.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),B(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,Q=h.get(H);if(Q){const ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(R),Object.keys(Q).length===0&&h.delete(H)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,Q=h.get(H);delete Q[M.__cacheKey],o.memory.textures--}function B(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,ne=H.length;Q<ne;Q++){const J=i.get(H[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(R)}let x=0;function E(){x=0}function z(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function I(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function N(R,M){const H=i.get(R);if(R.isVideoTexture&&ve(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function X(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){fe(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function U(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){fe(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function te(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){V(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[Gs]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},q={[Sn]:t.NEAREST,[F1]:t.NEAREST_MIPMAP_NEAREST,[tc]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Uh]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},$={[B1]:t.NEVER,[j1]:t.ALWAYS,[H1]:t.LESS,[xv]:t.LEQUAL,[V1]:t.EQUAL,[X1]:t.GEQUAL,[G1]:t.GREATER,[W1]:t.NOTEQUAL};function se(R,M){if(M.type===Yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zt||M.magFilter===Uh||M.magFilter===tc||M.magFilter===Sr||M.minFilter===Zt||M.minFilter===Uh||M.minFilter===tc||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==tc&&M.minFilter!==Sr||M.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function j(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const Q=M.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const J=I(M);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[J].usedTimes++;const Le=ne[R.__cacheKey];Le!==void 0&&(ne[R.__cacheKey].usedTimes--,Le.usedTimes===0&&C(M)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return H}function fe(R,M,H){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=j(R,M),J=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const Le=i.get(J);if(J.version!==Le.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const xe=tt.getPrimaries(tt.workingColorSpace),Ce=M.colorSpace===Mr?null:tt.getPrimaries(M.colorSpace),Ze=M.colorSpace===Mr||xe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ce=y(M.image,!1,r.maxTextureSize);ce=Ie(M,ce);const Re=s.convert(M.format,M.colorSpace),He=s.convert(M.type);let Ve=v(M.internalFormat,Re,He,M.colorSpace,M.isVideoTexture);se(Q,M);let be;const Qe=M.mipmaps,We=M.isVideoTexture!==!0,ht=Le.__version===void 0||ne===!0,F=J.dataReady,Ee=S(M,ce);if(M.isDepthTexture)Ve=g(M.format===js,M.type),ht&&(We?n.texStorage2D(t.TEXTURE_2D,1,Ve,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Ve,ce.width,ce.height,0,Re,He,null));else if(M.isDataTexture)if(Qe.length>0){We&&ht&&n.texStorage2D(t.TEXTURE_2D,Ee,Ve,Qe[0].width,Qe[0].height);for(let Y=0,ie=Qe.length;Y<ie;Y++)be=Qe[Y],We?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,be.width,be.height,Re,He,be.data):n.texImage2D(t.TEXTURE_2D,Y,Ve,be.width,be.height,0,Re,He,be.data);M.generateMipmaps=!1}else We?(ht&&n.texStorage2D(t.TEXTURE_2D,Ee,Ve,ce.width,ce.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Re,He,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,ce.width,ce.height,0,Re,He,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Ve,Qe[0].width,Qe[0].height,ce.depth);for(let Y=0,ie=Qe.length;Y<ie;Y++)if(be=Qe[Y],M.format!==oi)if(Re!==null)if(We){if(F)if(M.layerUpdates.size>0){const ye=w_(be.width,be.height,M.format,M.type);for(const we of M.layerUpdates){const et=be.data.subarray(we*ye/be.data.BYTES_PER_ELEMENT,(we+1)*ye/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,we,be.width,be.height,1,Re,et,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,be.width,be.height,ce.depth,Re,be.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ve,be.width,be.height,ce.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,be.width,be.height,ce.depth,Re,He,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ve,be.width,be.height,ce.depth,0,Re,He,be.data)}else{We&&ht&&n.texStorage2D(t.TEXTURE_2D,Ee,Ve,Qe[0].width,Qe[0].height);for(let Y=0,ie=Qe.length;Y<ie;Y++)be=Qe[Y],M.format!==oi?Re!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,be.width,be.height,Re,be.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,be.width,be.height,Re,He,be.data):n.texImage2D(t.TEXTURE_2D,Y,Ve,be.width,be.height,0,Re,He,be.data)}else if(M.isDataArrayTexture)if(We){if(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Ve,ce.width,ce.height,ce.depth),F)if(M.layerUpdates.size>0){const Y=w_(ce.width,ce.height,M.format,M.type);for(const ie of M.layerUpdates){const ye=ce.data.subarray(ie*Y/ce.data.BYTES_PER_ELEMENT,(ie+1)*Y/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,Re,He,ye)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Re,He,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,ce.width,ce.height,ce.depth,0,Re,He,ce.data);else if(M.isData3DTexture)We?(ht&&n.texStorage3D(t.TEXTURE_3D,Ee,Ve,ce.width,ce.height,ce.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Re,He,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,ce.width,ce.height,ce.depth,0,Re,He,ce.data);else if(M.isFramebufferTexture){if(ht)if(We)n.texStorage2D(t.TEXTURE_2D,Ee,Ve,ce.width,ce.height);else{let Y=ce.width,ie=ce.height;for(let ye=0;ye<Ee;ye++)n.texImage2D(t.TEXTURE_2D,ye,Ve,Y,ie,0,Re,He,null),Y>>=1,ie>>=1}}else if(Qe.length>0){if(We&&ht){const Y=Me(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Ee,Ve,Y.width,Y.height)}for(let Y=0,ie=Qe.length;Y<ie;Y++)be=Qe[Y],We?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Re,He,be):n.texImage2D(t.TEXTURE_2D,Y,Ve,Re,He,be);M.generateMipmaps=!1}else if(We){if(ht){const Y=Me(ce);n.texStorage2D(t.TEXTURE_2D,Ee,Ve,Y.width,Y.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,He,ce)}else n.texImage2D(t.TEXTURE_2D,0,Ve,Re,He,ce);m(M)&&d(Q),Le.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function V(R,M,H){if(M.image.length!==6)return;const Q=j(R,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const J=i.get(ne);if(ne.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const Le=tt.getPrimaries(tt.workingColorSpace),xe=M.colorSpace===Mr?null:tt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Mr||Le===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let ie=0;ie<6;ie++)!Ze&&!ce?Re[ie]=y(M.image[ie],!0,r.maxCubemapSize):Re[ie]=ce?M.image[ie].image:M.image[ie],Re[ie]=Ie(M,Re[ie]);const He=Re[0],Ve=s.convert(M.format,M.colorSpace),be=s.convert(M.type),Qe=v(M.internalFormat,Ve,be,M.colorSpace),We=M.isVideoTexture!==!0,ht=J.__version===void 0||Q===!0,F=ne.dataReady;let Ee=S(M,He);se(t.TEXTURE_CUBE_MAP,M);let Y;if(Ze){We&&ht&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Qe,He.width,He.height);for(let ie=0;ie<6;ie++){Y=Re[ie].mipmaps;for(let ye=0;ye<Y.length;ye++){const we=Y[ye];M.format!==oi?Ve!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,we.width,we.height,Ve,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Qe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,we.width,we.height,Ve,be,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Qe,we.width,we.height,0,Ve,be,we.data)}}}else{if(Y=M.mipmaps,We&&ht){Y.length>0&&Ee++;const ie=Me(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re[ie].width,Re[ie].height,Ve,be,Re[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Re[ie].width,Re[ie].height,0,Ve,be,Re[ie].data);for(let ye=0;ye<Y.length;ye++){const et=Y[ye].image[ie].image;We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,et.width,et.height,Ve,be,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Qe,et.width,et.height,0,Ve,be,et.data)}}else{We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,be,Re[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Ve,be,Re[ie]);for(let ye=0;ye<Y.length;ye++){const we=Y[ye];We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Ve,be,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Qe,Ve,be,we.image[ie])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function K(R,M,H,Q,ne,J){const Le=s.convert(H.format,H.colorSpace),xe=s.convert(H.type),Ce=v(H.internalFormat,Le,xe,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ce=Math.max(1,M.width>>J),Re=Math.max(1,M.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,Ce,ce,Re,M.depth,0,Le,xe,null):n.texImage2D(ne,J,Ce,ce,Re,0,Le,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,i.get(H).__webglTexture,0,ge(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,i.get(H).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=g(M.stencilBuffer,ne),Le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=ge(M);le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,J,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],Le=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),Ce=v(J.internalFormat,Le,xe,J.colorSpace),Ze=ge(M);H&&le(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,Ce,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,Ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ne=ge(M);if(M.depthTexture.format===Xs)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===js)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ue(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Q],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,M,H){const Q=i.get(R);M!==void 0&&K(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ue(R)}function Ae(R){const M=R.texture,H=i.get(R),Q=i.get(M);R.addEventListener("dispose",T);const ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Le=ne.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)H.__webglFramebuffer[xe][Ce]=t.createFramebuffer()}else H.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)H.__webglFramebuffer[xe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Le)for(let xe=0,Ce=ne.length;xe<Ce;xe++){const Ze=i.get(ne[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&le(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<ne.length;xe++){const Ce=ne[xe];H.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const Ze=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),Re=v(Ce.internalFormat,Ze,ce,Ce.colorSpace,R.isXRRenderTarget===!0),He=ge(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),de(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)K(H.__webglFramebuffer[xe][Ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else K(H.__webglFramebuffer[xe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let xe=0,Ce=ne.length;xe<Ce;xe++){const Ze=ne[xe],ce=i.get(Ze);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),se(t.TEXTURE_2D,Ze),K(H.__webglFramebuffer,R,Ze,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),m(Ze)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Q.__webglTexture),se(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)K(H.__webglFramebuffer[Ce],R,M,t.COLOR_ATTACHMENT0,xe,Ce);else K(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,xe,0);m(M)&&d(xe),n.unbindTexture()}R.depthBuffer&&ue(R)}function Oe(R){const M=R.textures;for(let H=0,Q=M.length;H<Q;H++){const ne=M[H];if(m(ne)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(ne).__webglTexture;n.bindTexture(J,Le),d(J),n.unbindTexture()}}}const ee=[],b=[];function me(R){if(R.samples>0){if(le(R)===!1){const M=R.textures,H=R.width,Q=R.height;let ne=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(R),xe=M.length>1;if(xe)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const Ze=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,t.NEAREST),l===!0&&(ee.length=0,b.length=0,ee.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(J),b.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const Ze=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ge(R){return Math.min(r.maxSamples,R.samples)}function le(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ie(R,M){const H=R.colorSpace,Q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==zi&&H!==Mr&&(tt.getTransfer(H)===ft?(Q!==oi||ne!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=U,this.setTextureCube=te,this.rebindTextures=oe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=K,this.useMultisampledRTT=le}function F2(t,e){function n(i,r=Mr){let s;const o=tt.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===Oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===av)return t.BYTE;if(i===lv)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===Fh)return t.INT;if(i===jr)return t.UNSIGNED_INT;if(i===Yn)return t.FLOAT;if(i===Nn)return t.HALF_FLOAT;if(i===uv)return t.ALPHA;if(i===fv)return t.RGB;if(i===oi)return t.RGBA;if(i===hv)return t.LUMINANCE;if(i===dv)return t.LUMINANCE_ALPHA;if(i===Xs)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===pv)return t.RED;if(i===zh)return t.RED_INTEGER;if(i===mv)return t.RG;if(i===Bh)return t.RG_INTEGER;if(i===Hh)return t.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vh||i===Gh||i===Wh||i===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jh||i===Yh||i===$h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jh||i===Yh)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$h)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ed)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===td)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===id)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===od)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ad)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ld)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===cd||i===ud)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ud)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gv||i===fd||i===hd||i===dd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class O2 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k2={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new dn({vertexShader:z2,fragmentShader:B2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V2 extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const y=new H2,m=n.getContextAttributes();let d=null,v=null;const g=[],S=[],P=new re;let T=null;const A=new qn;A.layers.enable(1),A.viewport=new wt;const C=new qn;C.layers.enable(2),C.viewport=new wt;const B=[A,C],x=new O2;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=g[V];return K===void 0&&(K=new $d,g[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=g[V];return K===void 0&&(K=new $d,g[V]=K),K.getGripSpace()},this.getHand=function(V){let K=g[V];return K===void 0&&(K=new $d,g[V]=K),K.getHandSpace()};function I(V){const K=S.indexOf(V.inputSource);if(K===-1)return;const de=g[K];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let V=0;V<g.length;V++){const K=S[V];K!==null&&(S[V]=null,g[V].disconnect(K))}E=null,z=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ai(p.framebufferWidth,p.framebufferHeight,{format:oi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,de=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=m.stencil?js:Xs,de=m.stencil?Ws:jr);const ue={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ai(h.textureWidth,h.textureHeight,{format:oi,type:ki,depthTexture:new i_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(V){for(let K=0;K<V.removed.length;K++){const de=V.removed[K],pe=S.indexOf(de);pe>=0&&(S[pe]=null,g[pe].disconnect(de))}for(let K=0;K<V.added.length;K++){const de=V.added[K];let pe=S.indexOf(de);if(pe===-1){for(let oe=0;oe<g.length;oe++)if(oe>=S.length){S.push(de),pe=oe;break}else if(S[oe]===null){S[oe]=de,pe=oe;break}if(pe===-1)break}const ue=g[pe];ue&&ue.connect(de)}}const U=new L,te=new L;function D(V,K,de){U.setFromMatrixPosition(K.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const pe=U.distanceTo(te),ue=K.projectionMatrix.elements,oe=de.projectionMatrix.elements,Ae=ue[14]/(ue[10]-1),Oe=ue[14]/(ue[10]+1),ee=(ue[9]+1)/ue[5],b=(ue[9]-1)/ue[5],me=(ue[8]-1)/ue[0],ge=(oe[8]+1)/oe[0],le=Ae*me,ve=Ae*ge,Ie=pe/(-me+ge),Me=Ie*-me;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Me),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ue[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=Ae+Ie,M=Oe+Ie,H=le-Me,Q=ve+(pe-Me),ne=ee*Oe/M*R,J=b*Oe/M*R;V.projectionMatrix.makePerspective(H,Q,ne,J,R,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function q(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let K=V.near,de=V.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(de=y.depthFar)),x.near=C.near=A.near=K,x.far=C.far=A.far=de,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const pe=V.parent,ue=x.cameras;q(x,pe);for(let oe=0;oe<ue.length;oe++)q(ue[oe],pe);ue.length===2?D(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),$(V,x,pe)};function $(V,K,de){de===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ga*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let se=null;function j(V,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;de.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let oe=0;oe<de.length;oe++){const Ae=de[oe];let Oe=null;if(p!==null)Oe=p.getViewport(Ae);else{const b=f.getViewSubImage(h,Ae);Oe=b.viewport,oe===0&&(e.setRenderTargetTextures(v,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(v))}let ee=B[oe];ee===void 0&&(ee=new qn,ee.layers.enable(oe),ee.viewport=new wt,B[oe]=ee),ee.matrix.fromArray(Ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),oe===0&&(x.matrix.copy(ee.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(ee)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const oe=f.getDepthInformation(de[0]);oe&&oe.isValid&&oe.texture&&y.init(e,oe,r.renderState)}}for(let de=0;de<g.length;de++){const pe=S[de],ue=g[de];pe!==null&&ue!==void 0&&ue.update(pe,K,c||o)}se&&se(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const fe=new Kv;fe.setAnimationLoop(j),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}const is=new Mi,G2=new St;function W2(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Xv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,S=v.envMapRotation;g&&(m.envMap.value=g,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(G2.makeRotationFromEuler(is)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),P=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let B=0,x=C.length;B<x;B++){const E=C[B];if(p(E,T,B,P)===!0){const z=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let X=0;X<I.length;X++){const U=I[X],te=y(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,z+N,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,N),N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,P){const T=v.value,A=g+"_"+S;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const C=P[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(v){const g=v.uniforms;let S=0;const P=16;for(let A=0,C=g.length;A<C;A++){const B=Array.isArray(g[A])?g[A]:[g[A]];for(let x=0,E=B.length;x<E;x++){const z=B[x],I=Array.isArray(z.value)?z.value:[z.value];for(let N=0,X=I.length;N<X;N++){const U=I[N],te=y(U),D=S%P,q=D%te.boundary,$=D+q;S+=q,$!==0&&P-$<te.storage&&(S+=P-$),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=te.storage}}}const T=S%P;return T>0&&(S+=P-T),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class j2{constructor(e={}){const{canvas:n=uM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=yr,this.toneMappingExposure=1;const g=this;let S=!1,P=0,T=0,A=null,C=-1,B=null;const x=new wt,E=new wt;let z=null;const I=new ze(0);let N=0,X=n.width,U=n.height,te=1,D=null,q=null;const $=new wt(0,0,X,U),se=new wt(0,0,X,U);let j=!1;const fe=new kd;let V=!1,K=!1;const de=new St,pe=new St,ue=new L,oe=new wt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ee(){return A===null?te:1}let b=i;function me(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sh}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",we,!1),b===null){const O="webgl2";if(b=me(O,w),b===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,le,ve,Ie,Me,R,M,H,Q,ne,J,Le,xe,Ce,Ze,ce,Re,He,Ve,be,Qe,We,ht,F;function Ee(){ge=new Zw(b),ge.init(),We=new F2(b,ge),le=new Xw(b,ge,e,We),ve=new N2(b),le.reverseDepthBuffer&&ve.buffers.depth.setReversed(!0),Ie=new eT(b),Me=new _2,R=new U2(b,ge,ve,Me,le,We,Ie),M=new Yw(g),H=new Kw(g),Q=new HM(b),ht=new Gw(b,Q),ne=new Qw(b,Q,Ie,ht),J=new nT(b,ne,Q,Ie),Ve=new tT(b,le,R),ce=new jw(Me),Le=new v2(g,M,H,ge,le,ht,ce),xe=new W2(g,Me),Ce=new y2,Ze=new A2(ge),He=new Vw(g,M,H,ve,J,h,l),Re=new L2(g,J,le),F=new X2(b,Ie,le,ve),be=new Ww(b,ge,Ie),Qe=new Jw(b,ge,Ie),Ie.programs=Le.programs,g.capabilities=le,g.extensions=ge,g.properties=Me,g.renderLists=Ce,g.shadowMap=Re,g.state=ve,g.info=Ie}Ee();const Y=new V2(g,b);this.xr=Y,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(X,U,!1))},this.getSize=function(w){return w.set(X,U)},this.setSize=function(w,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,U=O,n.width=Math.floor(w*te),n.height=Math.floor(O*te),G===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*te,U*te).floor()},this.setDrawingBufferSize=function(w,O,G){X=w,U=O,te=G,n.width=Math.floor(w*G),n.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,O,G,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,O,G,W),ve.viewport(x.copy($).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,O,G,W){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,O,G,W),ve.scissor(E.copy(se).multiplyScalar(te).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){ve.setScissorTest(j=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let k=!1;if(A!==null){const he=A.texture.format;k=he===Hh||he===Bh||he===zh}if(k){const he=A.texture.type,Se=he===ki||he===jr||he===pa||he===Ws||he===Oh||he===kh,Pe=He.getClearColor(),De=He.getClearAlpha(),ke=Pe.r,Be=Pe.g,Ne=Pe.b;Se?(p[0]=ke,p[1]=Be,p[2]=Ne,p[3]=De,b.clearBufferuiv(b.COLOR,0,p)):(_[0]=ke,_[1]=Be,_[2]=Ne,_[3]=De,b.clearBufferiv(b.COLOR,0,_))}else W|=b.COLOR_BUFFER_BIT}O&&(W|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ce.dispose(),Ze.dispose(),Me.dispose(),M.dispose(),H.dispose(),J.dispose(),ht.dispose(),F.dispose(),Le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",_x),Y.removeEventListener("sessionend",xx),ls.stop()};function ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ie.autoReset,O=Re.enabled,G=Re.autoUpdate,W=Re.needsUpdate,k=Re.type;Ee(),Ie.autoReset=w,Re.enabled=O,Re.autoUpdate=G,Re.needsUpdate=W,Re.type=k}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){const O=w.target;O.removeEventListener("dispose",et),Dt(O)}function Dt(w){Tn(w),Me.remove(w)}function Tn(w){const O=Me.get(w).programs;O!==void 0&&(O.forEach(function(G){Le.releaseProgram(G)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,k,he){O===null&&(O=Ae);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Pe=LR(w,O,G,W,k);ve.setMaterial(W,Se);let De=G.index,ke=1;if(W.wireframe===!0){if(De=ne.getWireframeAttribute(G),De===void 0)return;ke=2}const Be=G.drawRange,Ne=G.attributes.position;let lt=Be.start*ke,gt=(Be.start+Be.count)*ke;he!==null&&(lt=Math.max(lt,he.start*ke),gt=Math.min(gt,(he.start+he.count)*ke)),De!==null?(lt=Math.max(lt,0),gt=Math.min(gt,De.count)):Ne!=null&&(lt=Math.max(lt,0),gt=Math.min(gt,Ne.count));const Tt=gt-lt;if(Tt<0||Tt===1/0)return;ht.setup(k,W,Pe,G,De);let kn,it=be;if(De!==null&&(kn=Q.get(De),it=Qe,it.setIndex(kn)),k.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*ee()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(k.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),ve.setLineWidth(Ue*ee()),k.isLineSegments?it.setMode(b.LINES):k.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else k.isPoints?it.setMode(b.POINTS):k.isSprite&&it.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ue=k._multiDrawStarts,jt=k._multiDrawCounts,rt=k._multiDrawCount,gi=De?Q.get(De).bytesPerElement:1,Eo=Me.get(W).currentProgram.getUniforms();for(let zn=0;zn<rt;zn++)Eo.setValue(b,"_gl_DrawID",zn),it.render(Ue[zn]/gi,jt[zn])}else if(k.isInstancedMesh)it.renderInstances(lt,Tt,k.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jt=Math.min(G.instanceCount,Ue);it.renderInstances(lt,Tt,jt)}else it.render(lt,Tt)};function nt(w,O,G){w.transparent===!0&&w.side===jn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,nu(w,O,G),w.side=xr,w.needsUpdate=!0,nu(w,O,G),w.side=jn):nu(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),m=Ze.get(G),m.init(O),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==G&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const W=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Pe=he[Se];nt(Pe,G,k),W.add(Pe)}else nt(he,G,k),W.add(he)}),v.pop(),m=null,W},this.compileAsync=function(w,O,G=null){const W=this.compile(w,O,G);return new Promise(k=>{function he(){if(W.forEach(function(Se){Me.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){k(w);return}setTimeout(he,10)}ge.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let An=null;function Qi(w){An&&An(w)}function _x(){ls.stop()}function xx(){ls.start()}const ls=new Kv;ls.setAnimationLoop(Qi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(w){An=w,Y.setAnimationLoop(w),w===null?ls.stop():ls.start()},Y.addEventListener("sessionstart",_x),Y.addEventListener("sessionend",xx),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,O,A),m=Ze.get(w,v.length),m.init(O),v.push(m),pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),fe.setFromProjectionMatrix(pe),K=this.localClippingEnabled,V=ce.init(this.clippingPlanes,K),y=Ce.get(w,d.length),y.init(),d.push(y),Y.enabled===!0&&Y.isPresenting===!0){const he=g.xr.getDepthSensingMesh();he!==null&&Sp(he,O,-1/0,g.sortObjects)}Sp(w,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,q),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&He.addToRenderList(y,w),this.info.render.frame++,V===!0&&ce.beginShadows();const G=m.state.shadowsArray;Re.render(G,w,O),V===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,k=y.transmissive;if(m.setupLights(),O.isArrayCamera){const he=O.cameras;if(k.length>0)for(let Se=0,Pe=he.length;Se<Pe;Se++){const De=he[Se];Sx(W,k,w,De)}Oe&&He.render(w);for(let Se=0,Pe=he.length;Se<Pe;Se++){const De=he[Se];yx(y,w,De,De.viewport)}}else k.length>0&&Sx(W,k,w,O),Oe&&He.render(w),yx(y,w,O);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,O),ht.resetDefaultState(),C=-1,B=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&ce.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Sp(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){W&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const Se=J.update(w),Pe=w.material;Pe.visible&&y.push(w,Se,Pe,G,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){const Se=J.update(w),Pe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),oe.copy(Se.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(Pe)){const De=Se.groups;for(let ke=0,Be=De.length;ke<Be;ke++){const Ne=De[ke],lt=Pe[Ne.materialIndex];lt&&lt.visible&&y.push(w,Se,lt,G,oe.z,Ne)}}else Pe.visible&&y.push(w,Se,Pe,G,oe.z,null)}}const he=w.children;for(let Se=0,Pe=he.length;Se<Pe;Se++)Sp(he[Se],O,G,W)}function yx(w,O,G,W){const k=w.opaque,he=w.transmissive,Se=w.transparent;m.setupLightsView(G),V===!0&&ce.setGlobalState(g.clippingPlanes,G),W&&ve.viewport(x.copy(W)),k.length>0&&tu(k,O,G),he.length>0&&tu(he,O,G),Se.length>0&&tu(Se,O,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Sx(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ai(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Nn:ki,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const he=m.state.transmissionRenderTarget[W.id],Se=W.viewport||x;he.setSize(Se.z,Se.w);const Pe=g.getRenderTarget();g.setRenderTarget(he),g.getClearColor(I),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear(),Oe&&He.render(G);const De=g.toneMapping;g.toneMapping=yr;const ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),V===!0&&ce.setGlobalState(g.clippingPlanes,W),tu(w,G,W),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,lt=O.length;Ne<lt;Ne++){const gt=O[Ne],Tt=gt.object,kn=gt.geometry,it=gt.material,Ue=gt.group;if(it.side===jn&&Tt.layers.test(W.layers)){const jt=it.side;it.side=cn,it.needsUpdate=!0,Mx(Tt,G,W,kn,it,Ue),it.side=jt,it.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}g.setRenderTarget(Pe),g.setClearColor(I,N),ke!==void 0&&(W.viewport=ke),g.toneMapping=De}function tu(w,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=w.length;k<he;k++){const Se=w[k],Pe=Se.object,De=Se.geometry,ke=W===null?Se.material:W,Be=Se.group;Pe.layers.test(G.layers)&&Mx(Pe,O,G,De,ke,Be)}}function Mx(w,O,G,W,k,he){w.onBeforeRender(g,O,G,W,k,he),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(g,O,G,W,w,he),k.transparent===!0&&k.side===jn&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,g.renderBufferDirect(G,O,W,k,w,he),k.side=xr,k.needsUpdate=!0,g.renderBufferDirect(G,O,W,k,w,he),k.side=jn):g.renderBufferDirect(G,O,W,k,w,he),w.onAfterRender(g,O,G,W,k,he)}function nu(w,O,G){O.isScene!==!0&&(O=Ae);const W=Me.get(w),k=m.state.lights,he=m.state.shadowsArray,Se=k.state.version,Pe=Le.getParameters(w,k.state,he,O,G),De=Le.getProgramCacheKey(Pe);let ke=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",et),ke=new Map,W.programs=ke);let Be=ke.get(De);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Se)return wx(w,Pe),Be}else Pe.uniforms=Le.getUniforms(w),w.onBeforeCompile(Pe,g),Be=Le.acquireProgram(Pe,De),ke.set(De,Be),W.uniforms=Pe.uniforms;const Ne=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),wx(w,Pe),W.needsLights=NR(w),W.lightsStateVersion=Se,W.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Ex(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function wx(w,O){const G=Me.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function LR(w,O,G,W,k){O.isScene!==!0&&(O=Ae),R.resetTextureUnits();const he=O.fog,Se=W.isMeshStandardMaterial?O.environment:null,Pe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zi,De=(W.isMeshStandardMaterial?H:M).get(W.envMap||Se),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,gt=!!G.morphAttributes.color;let Tt=yr;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const kn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=kn!==void 0?kn.length:0,Ue=Me.get(W),jt=m.state.lights;if(V===!0&&(K===!0||w!==B)){const Zn=w===B&&W.id===C;ce.setState(W,w,Zn)}let rt=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==jt.state.version||Ue.outputColorSpace!==Pe||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==De||W.fog===!0&&Ue.fog!==he||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ce.numPlanes||Ue.numIntersection!==ce.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==Be||Ue.morphTargets!==Ne||Ue.morphNormals!==lt||Ue.morphColors!==gt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ue.__version=W.version);let gi=Ue.currentProgram;rt===!0&&(gi=nu(W,O,k));let Eo=!1,zn=!1,Mp=!1;const Rt=gi.getUniforms(),br=Ue.uniforms;if(ve.useProgram(gi.program)&&(Eo=!0,zn=!0,Mp=!0),W.id!==C&&(C=W.id,zn=!0),Eo||B!==w){le.reverseDepthBuffer?(de.copy(w.projectionMatrix),hM(de),dM(de),Rt.setValue(b,"projectionMatrix",de)):Rt.setValue(b,"projectionMatrix",w.projectionMatrix),Rt.setValue(b,"viewMatrix",w.matrixWorldInverse);const Zn=Rt.map.cameraPosition;Zn!==void 0&&Zn.setValue(b,ue.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&Rt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,zn=!0,Mp=!0)}if(k.isSkinnedMesh){Rt.setOptional(b,k,"bindMatrix"),Rt.setOptional(b,k,"bindMatrixInverse");const Zn=k.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Rt.setValue(b,"boneTexture",Zn.boneTexture,R))}k.isBatchedMesh&&(Rt.setOptional(b,k,"batchingTexture"),Rt.setValue(b,"batchingTexture",k._matricesTexture,R),Rt.setOptional(b,k,"batchingIdTexture"),Rt.setValue(b,"batchingIdTexture",k._indirectTexture,R),Rt.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&Rt.setValue(b,"batchingColorTexture",k._colorsTexture,R));const Ep=G.morphAttributes;if((Ep.position!==void 0||Ep.normal!==void 0||Ep.color!==void 0)&&Ve.update(k,G,gi),(zn||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Rt.setValue(b,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(br.envMap.value=De,br.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(br.envMapIntensity.value=O.environmentIntensity),zn&&(Rt.setValue(b,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&DR(br,Mp),he&&W.fog===!0&&xe.refreshFogUniforms(br,he),xe.refreshMaterialUniforms(br,W,te,U,m.state.transmissionRenderTarget[w.id]),Fc.upload(b,Ex(Ue),br,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fc.upload(b,Ex(Ue),br,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(b,"center",k.center),Rt.setValue(b,"modelViewMatrix",k.modelViewMatrix),Rt.setValue(b,"normalMatrix",k.normalMatrix),Rt.setValue(b,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zn=W.uniformsGroups;for(let wp=0,IR=Zn.length;wp<IR;wp++){const Tx=Zn[wp];F.update(Tx,gi),F.bind(Tx,gi)}}return gi}function DR(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function NR(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,G){Me.get(w.texture).__webglTexture=O,Me.get(w.depthTexture).__webglTexture=G;const W=Me.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const G=Me.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){A=w,P=O,T=G;let W=!0,k=null,he=!1,Se=!1;if(w){const De=Me.get(w);if(De.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(b.FRAMEBUFFER,null),W=!1;else if(De.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(De.__hasExternalTextures)R.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ne=w.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&Me.has(Ne)&&(w.width!==Ne.image.width||w.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Be=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?k=Be[O][G]:k=Be[O],he=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[G]:k=Be,x.copy(w.viewport),E.copy(w.scissor),z=w.scissorTest}else x.copy($).multiplyScalar(te).floor(),E.copy(se).multiplyScalar(te).floor(),z=j;if(ve.bindFramebuffer(b.FRAMEBUFFER,k)&&W&&ve.drawBuffers(w,k),ve.viewport(x),ve.scissor(E),ve.setScissorTest(z),he){const De=Me.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,G)}else if(Se){const De=Me.get(w.texture),ke=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,De.__webglTexture,G||0,ke)}C=-1},this.readRenderTargetPixels=function(w,O,G,W,k,he,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){ve.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const De=w.texture,ke=De.format,Be=De.type;if(!le.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-k&&b.readPixels(O,G,W,k,We.convert(ke),We.convert(Be),he)}finally{const De=A!==null?Me.get(A).__webglFramebuffer:null;ve.bindFramebuffer(b.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,W,k,he,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){const De=w.texture,ke=De.format,Be=De.type;if(!le.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&G>=0&&G<=w.height-k){ve.bindFramebuffer(b.FRAMEBUFFER,Pe);const Ne=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ne),b.bufferData(b.PIXEL_PACK_BUFFER,he.byteLength,b.STREAM_READ),b.readPixels(O,G,W,k,We.convert(ke),We.convert(Be),0);const lt=A!==null?Me.get(A).__webglFramebuffer:null;ve.bindFramebuffer(b.FRAMEBUFFER,lt);const gt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await fM(b,gt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ne),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,he),b.deleteBuffer(Ne),b.deleteSync(gt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(dc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(w.image.width*W),he=Math.floor(w.image.height*W),Se=O!==null?O.x:0,Pe=O!==null?O.y:0;R.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,G,0,0,Se,Pe,k,he),ve.unbindTexture()},this.copyTextureToTexture=function(w,O,G=null,W=null,k=0){w.isTexture!==!0&&(dc("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let he,Se,Pe,De,ke,Be;G!==null?(he=G.max.x-G.min.x,Se=G.max.y-G.min.y,Pe=G.min.x,De=G.min.y):(he=w.image.width,Se=w.image.height,Pe=0,De=0),W!==null?(ke=W.x,Be=W.y):(ke=0,Be=0);const Ne=We.convert(O.format),lt=We.convert(O.type);R.setTexture2D(O,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=b.getParameter(b.UNPACK_ROW_LENGTH),Tt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),kn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),Ue=b.getParameter(b.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[k]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,jt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,jt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pe),b.pixelStorei(b.UNPACK_SKIP_ROWS,De),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,k,ke,Be,he,Se,Ne,lt,jt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,k,ke,Be,jt.width,jt.height,Ne,jt.data):b.texSubImage2D(b.TEXTURE_2D,k,ke,Be,he,Se,Ne,lt,jt),b.pixelStorei(b.UNPACK_ROW_LENGTH,gt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,kn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ue),k===0&&O.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,W=null,k=0){w.isTexture!==!0&&(dc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],k=arguments[4]||0);let he,Se,Pe,De,ke,Be,Ne,lt,gt;const Tt=w.isCompressedTexture?w.mipmaps[k]:w.image;G!==null?(he=G.max.x-G.min.x,Se=G.max.y-G.min.y,Pe=G.max.z-G.min.z,De=G.min.x,ke=G.min.y,Be=G.min.z):(he=Tt.width,Se=Tt.height,Pe=Tt.depth,De=0,ke=0,Be=0),W!==null?(Ne=W.x,lt=W.y,gt=W.z):(Ne=0,lt=0,gt=0);const kn=We.convert(O.format),it=We.convert(O.type);let Ue;if(O.isData3DTexture)R.setTexture3D(O,0),Ue=b.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Ue=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),gi=b.getParameter(b.UNPACK_SKIP_PIXELS),Eo=b.getParameter(b.UNPACK_SKIP_ROWS),zn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,De),b.pixelStorei(b.UNPACK_SKIP_ROWS,ke),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Be),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Ue,k,Ne,lt,gt,he,Se,Pe,kn,it,Tt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Ue,k,Ne,lt,gt,he,Se,Pe,kn,Tt.data):b.texSubImage3D(Ue,k,Ne,lt,gt,he,Se,Pe,kn,it,Tt),b.pixelStorei(b.UNPACK_ROW_LENGTH,jt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gi),b.pixelStorei(b.UNPACK_SKIP_ROWS,Eo),b.pixelStorei(b.UNPACK_SKIP_IMAGES,zn),k===0&&O.generateMipmaps&&b.generateMipmap(Ue),ve.unbindTexture()},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){P=0,T=0,A=null,ve.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===ac?"display-p3":"srgb"}}class qd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=n}clone(){return new qd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class T_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Y2 extends Jt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Sn,u=Sn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo extends Jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,r=[],s=[],o=[],a=new L,l=new St;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kd extends wi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new re){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $2 extends Kd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const kc=new L,Qd=new Zd,Jd=new Zd,ep=new Zd;class A_ extends wi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(kc.subVectors(r[0],r[1]).add(r[0]),c=kc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(kc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=kc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Qd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),Jd.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),ep.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Jd.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ep.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Qd.calc(l),Jd.calc(l),ep.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function C_(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function q2(t,e){const n=1-t;return n*n*e}function K2(t,e){return 2*(1-t)*t*e}function Z2(t,e){return t*t*e}function Aa(t,e,n,i){return q2(t,e)+K2(t,n)+Z2(t,i)}function Q2(t,e){const n=1-t;return n*n*n*e}function J2(t,e){const n=1-t;return 3*n*n*t*e}function eA(t,e){return 3*(1-t)*t*t*e}function tA(t,e){return t*t*t*e}function Ca(t,e,n,i,r){return Q2(t,e)+J2(t,n)+eA(t,i)+tA(t,r)}class R_ extends wi{constructor(e=new re,n=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new re){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nA extends wi{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y),Ca(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends wi{constructor(e=new re,n=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new re){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new re){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iA extends wi{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends wi{constructor(e=new re,n=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new re){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends wi{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Aa(e,r.x,s.x,o.x),Aa(e,r.y,s.y,o.y),Aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new re){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(C_(a,l.x,c.x,u.x,f.x),C_(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new re().fromArray(r))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:$2,CatmullRomCurve3:A_,CubicBezierCurve:R_,CubicBezierCurve3:nA,EllipseCurve:Kd,LineCurve:b_,LineCurve3:iA,QuadraticBezierCurve:P_,QuadraticBezierCurve3:L_,SplineCurve:D_});class rA extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new zc[r.type]().fromJSON(r))}return this}}class Bc extends rA{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new b_(this.currentPoint.clone(),new re(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new P_(this.currentPoint.clone(),new re(e,n),new re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new R_(this.currentPoint.clone(),new re(e,n),new re(i,r),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new D_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Kd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tp extends Xt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Pt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,f=new L,h=new re,p=new L,_=new L,y=new L;let m=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let v=0;v<=n;v++){const g=i+v*u*r,S=Math.sin(g),P=Math.cos(g);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*S,f.y=e[T].y,f.z=e[T].x*P,o.push(f.x,f.y,f.z),h.x=v/n,h.y=T/(e.length-1),a.push(h.x,h.y);const A=l[3*T+0]*S,C=l[3*T+1],B=l[3*T+0]*P;c.push(A,C,B)}}for(let v=0;v<n;v++)for(let g=0;g<e.length-1;g++){const S=g+v*e.length,P=S,T=S+e.length,A=S+e.length+1,C=S+1;s.push(P,T,C),s.push(A,C,T)}this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.points,e.segments,e.phiStart,e.phiLength)}}class Hc extends Xt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new L,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends Xt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const y=[],m=i/2;let d=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(p,2));function v(){const S=new L,P=new L;let T=0;const A=(n-e)/i;for(let C=0;C<=s;C++){const B=[],x=C/s,E=x*(n-e)+e;for(let z=0;z<=r;z++){const I=z/r,N=I*l+a,X=Math.sin(N),U=Math.cos(N);P.x=E*X,P.y=-x*i+m,P.z=E*U,f.push(P.x,P.y,P.z),S.set(X,A,U).normalize(),h.push(S.x,S.y,S.z),p.push(I,1-x),B.push(_++)}y.push(B)}for(let C=0;C<r;C++)for(let B=0;B<s;B++){const x=y[B][C],E=y[B+1][C],z=y[B+1][C+1],I=y[B][C+1];e>0&&(u.push(x,E,I),T+=3),n>0&&(u.push(E,z,I),T+=3)}c.addGroup(d,T,0),d+=T}function g(S){const P=_,T=new re,A=new L;let C=0;const B=S===!0?e:n,x=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),_++;const E=_;for(let z=0;z<=r;z++){const N=z/r*l+a,X=Math.cos(N),U=Math.sin(N);A.x=B*U,A.y=m*x,A.z=B*X,f.push(A.x,A.y,A.z),h.push(0,x,0),T.x=X*.5+.5,T.y=U*.5*x+.5,p.push(T.x,T.y),_++}for(let z=0;z<r;z++){const I=P+z,N=E+z;S===!0?u.push(N,N+1,I):u.push(N+1,N,I),C+=3}c.addGroup(d,C,S===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class np extends Bc{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Bc().fromJSON(r))}return this}}const sA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=N_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=uA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let _=n;_<r;_+=n)f=t[_],h=t[_+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ra(s,o,n,a,l,p,0),o}};function N_(t,e,n,i,r){let s,o;if(r===SA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=F_(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=F_(s,t[s],t[s+1],o);return o&&Vc(o,o.next)&&(Pa(o),o=o.next),o}function rs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Vc(n,n.next)||Mt(n.prev,n,n.next)===0)){if(Pa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ra(t,e,n,i,r,s,o){if(!t)return;!o&&s&&mA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?aA(t,i,r,s):oA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Pa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=lA(rs(t),e,n),Ra(t,e,n,i,r,s,2)):o===2&&cA(t,e,n,i,r,s):Ra(rs(t),e,n,i,r,s,1);break}}}function oA(t){const e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&go(r,a,s,l,o,c,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function aA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<f?u<h?u:h:f<h?f:h,y=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,d=ip(p,_,e,n,i),v=ip(y,m,e,n,i);let g=t.prevZ,S=t.nextZ;for(;g&&g.z>=d&&S&&S.z<=v;){if(g.x>=p&&g.x<=y&&g.y>=_&&g.y<=m&&g!==r&&g!==o&&go(a,u,l,f,c,h,g.x,g.y)&&Mt(g.prev,g,g.next)>=0||(g=g.prevZ,S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&go(a,u,l,f,c,h,S.x,S.y)&&Mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;g&&g.z>=d;){if(g.x>=p&&g.x<=y&&g.y>=_&&g.y<=m&&g!==r&&g!==o&&go(a,u,l,f,c,h,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&go(a,u,l,f,c,h,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function lA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Vc(r,s)&&I_(r,i,i.next,s)&&ba(r,s)&&ba(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Pa(i),Pa(i.next),i=t=s),i=i.next}while(i!==t);return rs(i)}function cA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_A(o,a)){let l=U_(o,a);o=rs(o,o.next),l=rs(l,l.next),Ra(o,e,n,i,r,s,0),Ra(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function uA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=N_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(vA(c));for(r.sort(fA),s=0;s<r.length;s++)n=hA(r[s],n);return n}function fA(t,e){return t.x-e.x}function hA(t,e){const n=dA(t,e);if(!n)return e;const i=U_(n,t);return rs(i,i.next),rs(n,n.next)}function dA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&go(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),ba(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&pA(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function pA(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function mA(t,e,n,i){let r=t;do r.z===0&&(r.z=ip(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,gA(r)}function gA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function ip(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function vA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function go(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function _A(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!xA(t,e)&&(ba(t,e)&&ba(e,t)&&yA(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||Vc(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Vc(t,e){return t.x===e.x&&t.y===e.y}function I_(t,e,n,i){const r=Wc(Mt(t,e,n)),s=Wc(Mt(t,e,i)),o=Wc(Mt(n,i,t)),a=Wc(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Gc(t,n,e)||s===0&&Gc(t,i,e)||o===0&&Gc(n,t,i)||a===0&&Gc(n,e,i))}function Gc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Wc(t){return t>0?1:t<0?-1:0}function xA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&I_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ba(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function yA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function U_(t,e){const n=new rp(t.i,t.x,t.y),i=new rp(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function F_(t,e,n,i){const r=new rp(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Pa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function rp(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class La{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return La.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];O_(e),k_(i,e);let o=e.length;n.forEach(O_);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,k_(i,n[l]);const a=sA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function O_(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function k_(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Xc extends Xt{constructor(e=new np([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ot(r,3)),this.setAttribute("uv",new ot(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:MA;let g,S=!1,P,T,A,C;d&&(g=d.getSpacedPoints(u),S=!0,h=!1,P=d.computeFrenetFrames(u,!1),T=new L,A=new L,C=new L),h||(m=0,p=0,_=0,y=0);const B=a.extractPoints(c);let x=B.shape;const E=B.holes;if(!La.isClockWise(x)){x=x.reverse();for(let ee=0,b=E.length;ee<b;ee++){const me=E[ee];La.isClockWise(me)&&(E[ee]=me.reverse())}}const I=La.triangulateShape(x,E),N=x;for(let ee=0,b=E.length;ee<b;ee++){const me=E[ee];x=x.concat(me)}function X(ee,b,me){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(b,me)}const U=x.length,te=I.length;function D(ee,b,me){let ge,le,ve;const Ie=ee.x-b.x,Me=ee.y-b.y,R=me.x-ee.x,M=me.y-ee.y,H=Ie*Ie+Me*Me,Q=Ie*M-Me*R;if(Math.abs(Q)>Number.EPSILON){const ne=Math.sqrt(H),J=Math.sqrt(R*R+M*M),Le=b.x-Me/ne,xe=b.y+Ie/ne,Ce=me.x-M/J,Ze=me.y+R/J,ce=((Ce-Le)*M-(Ze-xe)*R)/(Ie*M-Me*R);ge=Le+Ie*ce-ee.x,le=xe+Me*ce-ee.y;const Re=ge*ge+le*le;if(Re<=2)return new re(ge,le);ve=Math.sqrt(Re/2)}else{let ne=!1;Ie>Number.EPSILON?R>Number.EPSILON&&(ne=!0):Ie<-Number.EPSILON?R<-Number.EPSILON&&(ne=!0):Math.sign(Me)===Math.sign(M)&&(ne=!0),ne?(ge=-Me,le=Ie,ve=Math.sqrt(H)):(ge=Ie,le=Me,ve=Math.sqrt(H/2))}return new re(ge/ve,le/ve)}const q=[];for(let ee=0,b=N.length,me=b-1,ge=ee+1;ee<b;ee++,me++,ge++)me===b&&(me=0),ge===b&&(ge=0),q[ee]=D(N[ee],N[me],N[ge]);const $=[];let se,j=q.concat();for(let ee=0,b=E.length;ee<b;ee++){const me=E[ee];se=[];for(let ge=0,le=me.length,ve=le-1,Ie=ge+1;ge<le;ge++,ve++,Ie++)ve===le&&(ve=0),Ie===le&&(Ie=0),se[ge]=D(me[ge],me[ve],me[Ie]);$.push(se),j=j.concat(se)}for(let ee=0;ee<m;ee++){const b=ee/m,me=p*Math.cos(b*Math.PI/2),ge=_*Math.sin(b*Math.PI/2)+y;for(let le=0,ve=N.length;le<ve;le++){const Ie=X(N[le],q[le],ge);pe(Ie.x,Ie.y,-me)}for(let le=0,ve=E.length;le<ve;le++){const Ie=E[le];se=$[le];for(let Me=0,R=Ie.length;Me<R;Me++){const M=X(Ie[Me],se[Me],ge);pe(M.x,M.y,-me)}}}const fe=_+y;for(let ee=0;ee<U;ee++){const b=h?X(x[ee],j[ee],fe):x[ee];S?(A.copy(P.normals[0]).multiplyScalar(b.x),T.copy(P.binormals[0]).multiplyScalar(b.y),C.copy(g[0]).add(A).add(T),pe(C.x,C.y,C.z)):pe(b.x,b.y,0)}for(let ee=1;ee<=u;ee++)for(let b=0;b<U;b++){const me=h?X(x[b],j[b],fe):x[b];S?(A.copy(P.normals[ee]).multiplyScalar(me.x),T.copy(P.binormals[ee]).multiplyScalar(me.y),C.copy(g[ee]).add(A).add(T),pe(C.x,C.y,C.z)):pe(me.x,me.y,f/u*ee)}for(let ee=m-1;ee>=0;ee--){const b=ee/m,me=p*Math.cos(b*Math.PI/2),ge=_*Math.sin(b*Math.PI/2)+y;for(let le=0,ve=N.length;le<ve;le++){const Ie=X(N[le],q[le],ge);pe(Ie.x,Ie.y,f+me)}for(let le=0,ve=E.length;le<ve;le++){const Ie=E[le];se=$[le];for(let Me=0,R=Ie.length;Me<R;Me++){const M=X(Ie[Me],se[Me],ge);S?pe(M.x,M.y+g[u-1].y,g[u-1].x+me):pe(M.x,M.y,f+me)}}}V(),K();function V(){const ee=r.length/3;if(h){let b=0,me=U*b;for(let ge=0;ge<te;ge++){const le=I[ge];ue(le[2]+me,le[1]+me,le[0]+me)}b=u+m*2,me=U*b;for(let ge=0;ge<te;ge++){const le=I[ge];ue(le[0]+me,le[1]+me,le[2]+me)}}else{for(let b=0;b<te;b++){const me=I[b];ue(me[2],me[1],me[0])}for(let b=0;b<te;b++){const me=I[b];ue(me[0]+U*u,me[1]+U*u,me[2]+U*u)}}i.addGroup(ee,r.length/3-ee,0)}function K(){const ee=r.length/3;let b=0;de(N,b),b+=N.length;for(let me=0,ge=E.length;me<ge;me++){const le=E[me];de(le,b),b+=le.length}i.addGroup(ee,r.length/3-ee,1)}function de(ee,b){let me=ee.length;for(;--me>=0;){const ge=me;let le=me-1;le<0&&(le=ee.length-1);for(let ve=0,Ie=u+m*2;ve<Ie;ve++){const Me=U*ve,R=U*(ve+1),M=b+ge+Me,H=b+le+Me,Q=b+le+R,ne=b+ge+R;oe(M,H,Q,ne)}}}function pe(ee,b,me){l.push(ee),l.push(b),l.push(me)}function ue(ee,b,me){Ae(ee),Ae(b),Ae(me);const ge=r.length/3,le=v.generateTopUV(i,r,ge-3,ge-2,ge-1);Oe(le[0]),Oe(le[1]),Oe(le[2])}function oe(ee,b,me,ge){Ae(ee),Ae(b),Ae(ge),Ae(b),Ae(me),Ae(ge);const le=r.length/3,ve=v.generateSideWallUV(i,r,le-6,le-3,le-2,le-1);Oe(ve[0]),Oe(ve[1]),Oe(ve[3]),Oe(ve[1]),Oe(ve[2]),Oe(ve[3])}function Ae(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function Oe(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return EA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zc[r.type]().fromJSON(r)),new Xc(i,e.options)}}const MA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new re(s,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],y=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-f),new re(h,1-_),new re(y,1-d)]:[new re(a,1-l),new re(u,1-f),new re(p,1-_),new re(m,1-d)]}};function EA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class vo extends Xt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new L,h=new L,p=[],_=[],y=[],m=[];for(let d=0;d<=i;d++){const v=[],g=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const T=P/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(T+S,1-g),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const g=u[d][v+1],S=u[d][v],P=u[d+1][v],T=u[d+1][v+1];(d!==0||o>0)&&p.push(g,S,T),(d!==i-1||l<Math.PI)&&p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _o extends Xt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,f=new L,h=new L;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,d=(r+1)*(p-1)+_,v=(r+1)*p+_;o.push(y,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sp extends Xt{constructor(e=new L_(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new re;let u=new L;const f=[],h=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(p,2));function y(){for(let g=0;g<n;g++)m(g);m(s===!1?n:0),v(),d()}function m(g){u=e.getPointAt(g/n,u);const S=o.normals[g],P=o.binormals[g];for(let T=0;T<=r;T++){const A=T/r*Math.PI*2,C=Math.sin(A),B=-Math.cos(A);l.x=B*S.x+C*P.x,l.y=B*S.y+C*P.y,l.z=B*S.z+C*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let g=1;g<=n;g++)for(let S=1;S<=r;S++){const P=(r+1)*(g-1)+(S-1),T=(r+1)*g+(S-1),A=(r+1)*g+S,C=(r+1)*(g-1)+S;_.push(P,T,C),_.push(T,A,C)}}function v(){for(let g=0;g<=n;g++)for(let S=0;S<=r;S++)c.x=g/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new sp(new zc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wA extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pn extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const z_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class TA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const AA=new TA;class op{constructor(e){this.manager=e!==void 0?e:AA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}op.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class CA extends Error{constructor(e,n){super(e),this.response=n}}class RA extends op{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=z_.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if($i[e]!==void 0){$i[e].push({onLoad:n,onProgress:i,onError:r});return}$i[e]=[],$i[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$i[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let y=0;const m=new ReadableStream({start(d){v();function v(){f.read().then(({done:g,value:S})=>{if(g)d.close();else{y+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let T=0,A=u.length;T<A;T++){const C=u[T];C.onProgress&&C.onProgress(P)}d.enqueue(S),v()}},g=>{d.error(g)})}}});return new Response(m)}else throw new CA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{z_.add(e,c);const u=$i[e];delete $i[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=$i[e];if(u===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bA extends op{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new Y2,a=new RA(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:si,o.wrapT=c.wrapT!==void 0?c.wrapT:si,o.magFilter=c.magFilter!==void 0?c.magFilter:Zt,o.minFilter=c.minFilter!==void 0?c.minFilter:Zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Sr),c.mipmapCount===1&&(o.minFilter=Zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class B_ extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class PA extends B_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ap=new St,H_=new L,V_=new L;class LA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;H_.setFromMatrixPosition(e.matrixWorld),n.position.copy(H_),V_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(V_),n.updateMatrixWorld(),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ap)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DA extends LA{constructor(){super(new zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lp extends B_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new DA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=G_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=G_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function G_(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);const W_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IA=new zd(-1,1,1,-1,0,1);class UA extends Xt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const FA=new UA;class cp{constructor(e){this._mesh=new at(FA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class OA extends xo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wa.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cp(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class X_ extends xo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class kA extends xo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new re);this._width=i.width,this._height=i.height,n=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new OA(W_),this.copyPass.material.blending=Oi,this.clock=new NA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}X_!==void 0&&(o instanceof X_?i=!0:o instanceof kA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class BA extends xo{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const HA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yo extends xo{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(s,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new ai(s,o,{type:Nn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new ai(s,o,{type:Nn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=HA;this.highPassUniforms=wa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new re(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=W_;this.copyUniforms=wa.clone(u.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new Mn,this.fsQuad=new cp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=yo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}yo.BlurDirectionX=new re(1,0),yo.BlurDirectionY=new re(0,1);const VA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class GA extends xo{constructor(){super();const e=VA;this.uniforms=wa.clone(e.uniforms),this.material=new wA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new cp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nv?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===iv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rv?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sv?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ov&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class WA extends bA{constructor(e){super(e),this.type=Nn}parse(e){const o=function(C,B){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(B||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(B||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(B||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(B||""))}},u=`
`,f=function(C,B,x){B=B||1024;let z=C.pos,I=-1,N=0,X="",U=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));for(;0>(I=U.indexOf(u))&&N<B&&z<C.byteLength;)X+=U,N+=U.length,z+=128,U+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));return-1<I?(C.pos+=N+I+1,X+U.slice(0,I)):!1},h=function(C){const B=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let X,U;for((C.pos>=C.byteLength||!(X=f(C)))&&o(1,"no header found"),(U=X.match(B))||o(3,"bad initial token"),N.valid|=1,N.programtype=U[1],N.string+=X+`
`;X=f(C),X!==!1;){if(N.string+=X+`
`,X.charAt(0)==="#"){N.comments+=X+`
`;continue}if((U=X.match(x))&&(N.gamma=parseFloat(U[1])),(U=X.match(E))&&(N.exposure=parseFloat(U[1])),(U=X.match(z))&&(N.valid|=2,N.format=U[1]),(U=X.match(I))&&(N.valid|=4,N.height=parseInt(U[1],10),N.width=parseInt(U[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},p=function(C,B,x){const E=B;if(E<8||E>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);E!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*B*x);z.length||o(4,"unable to allocate buffer space");let I=0,N=0;const X=4*E,U=new Uint8Array(4),te=new Uint8Array(X);let D=x;for(;D>0&&N<C.byteLength;){N+4>C.byteLength&&o(1),U[0]=C[N++],U[1]=C[N++],U[2]=C[N++],U[3]=C[N++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=E)&&o(3,"bad rgbe scanline format");let q=0,$;for(;q<X&&N<C.byteLength;){$=C[N++];const j=$>128;if(j&&($-=128),($===0||q+$>X)&&o(3,"bad scanline data"),j){const fe=C[N++];for(let V=0;V<$;V++)te[q++]=fe}else te.set(C.subarray(N,N+$),q),q+=$,N+=$}const se=E;for(let j=0;j<se;j++){let fe=0;z[I]=te[j+fe],fe+=E,z[I+1]=te[j+fe],fe+=E,z[I+2]=te[j+fe],fe+=E,z[I+3]=te[j+fe],I+=4}D--}return z},_=function(C,B,x,E){const z=C[B+3],I=Math.pow(2,z-128)/255;x[E+0]=C[B+0]*I,x[E+1]=C[B+1]*I,x[E+2]=C[B+2]*I,x[E+3]=1},y=function(C,B,x,E){const z=C[B+3],I=Math.pow(2,z-128)/255;x[E+0]=Mc.toHalfFloat(Math.min(C[B+0]*I,65504)),x[E+1]=Mc.toHalfFloat(Math.min(C[B+1]*I,65504)),x[E+2]=Mc.toHalfFloat(Math.min(C[B+2]*I,65504)),x[E+3]=Mc.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=h(m),v=d.width,g=d.height,S=p(m.subarray(m.pos),v,g);let P,T,A;switch(this.type){case Yn:A=S.length/4;const C=new Float32Array(A*4);for(let x=0;x<A;x++)_(S,x*4,C,x*4);P=C,T=Yn;break;case Nn:A=S.length/4;const B=new Uint16Array(A*4);for(let x=0;x<A;x++)y(S,x*4,B,x*4);P=B,T=Nn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:g,data:P,header:d.string,gamma:d.gamma,exposure:d.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){switch(o.type){case Yn:case Nn:o.colorSpace=zi,o.minFilter=Zt,o.magFilter=Zt,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,i,r)}}const Da=new Map,pi=(t,e)=>(Da.has(t)||Da.set(t,e()),Da.get(t));function Na(t){const e=document.createElement("canvas");return e.width=e.height=t,e}function ss(t,e=1,n=null){const i=new mo(t);return i.wrapS=i.wrapT=Gs,i.repeat.set(e,e),i.anisotropy=8,n&&(i.colorSpace=n),i}function Yc(t,e=1.6){const n=t.width,i=t.getContext("2d").getImageData(0,0,n,n).data,r=Na(n),s=r.getContext("2d"),o=s.createImageData(n,n),a=(l,c)=>{const u=(l+n)%n,h=((c+n)%n*n+u)*4;return(i[h]*.299+i[h+1]*.587+i[h+2]*.114)/255};for(let l=0;l<n;l++)for(let c=0;c<n;c++){const u=a(c-1,l-1)+2*a(c-1,l)+a(c-1,l+1)-(a(c+1,l-1)+2*a(c+1,l)+a(c+1,l+1)),f=a(c-1,l-1)+2*a(c,l-1)+a(c+1,l-1)-(a(c-1,l+1)+2*a(c,l+1)+a(c+1,l+1)),h=u*e,p=f*e,_=1,y=Math.hypot(h,p,_),m=(l*n+c)*4;o.data[m]=(h/y*.5+.5)*255,o.data[m+1]=(p/y*.5+.5)*255,o.data[m+2]=(_/y*.5+.5)*255,o.data[m+3]=255}return s.putImageData(o,0,0),r}function j_(t=512,e=32){const n=Na(t),i=n.getContext("2d"),r=t/e;i.fillStyle="#0a0b0d",i.fillRect(0,0,t,t);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=(a+o)%4<2,c=a*r,u=o*r,f=l?i.createLinearGradient(c,u,c+r,u):i.createLinearGradient(c,u,c,u+r);f.addColorStop(0,"#111317"),f.addColorStop(.42,"#33383f"),f.addColorStop(.62,"#3c424a"),f.addColorStop(1,"#0e1013"),i.fillStyle=f,i.fillRect(c+.35,u+.35,r-.7,r-.7)}const s=i.createLinearGradient(0,0,t,t);return s.addColorStop(0,"rgba(255,255,255,0.05)"),s.addColorStop(.5,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(255,255,255,0.04)"),i.fillStyle=s,i.fillRect(0,0,t,t),n}function $c(t,{base:e=128,spread:n=46,blobs:i=900,blobR:r=14}={}){const s=Na(t),o=s.getContext("2d");o.fillStyle=`rgb(${e},${e},${e})`,o.fillRect(0,0,t,t);for(let a=0;a<i;a++){const l=Math.round(e+(Math.random()-.5)*n*2),c=Math.random()*r+1;o.fillStyle=`rgba(${l},${l},${l},0.5)`,o.beginPath(),o.arc(Math.random()*t,Math.random()*t,c,0,Math.PI*2),o.fill()}return s}const XA=()=>pi("carbon.map",()=>ss(j_(),1,un)),jA=()=>pi("carbon.n",()=>ss(Yc(j_(),2.1))),YA=()=>pi("carbon.r",()=>ss($c(256,{base:92,spread:22,blobs:500})));function $A(t=256){const e=Na(t),n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,t,t);for(let i=0;i<5200;i++){const r=Math.random()<.5?40+Math.random()*50:170+Math.random()*60;n.fillStyle=`rgb(${r},${r},${r})`;const s=Math.random()<.85?1:1.8;n.beginPath(),n.arc(Math.random()*t,Math.random()*t,s,0,Math.PI*2),n.fill()}return e}const qA=()=>pi("flake.n",()=>ss(Yc($A(),3.2)));function Y_(t=1024,e=256){const n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.fillStyle="#7c7c7c",i.fillRect(0,0,t,e);const r=(s,o,a)=>{i.fillStyle=a,i.fillRect(0,s*e,t,(o-s)*e)};for(const[s,o]of[[0,.26],[.74,1]]){r(s,o,"#6f6f6f");for(let a=0;a<22;a++){const l=s+(o-s)*a/22;i.fillStyle=a%2?"#787878":"#666666",i.fillRect(0,l*e,t,e*(o-s)/44)}}for(const[s,o]of[[.26,.36],[.64,.74]]){r(s,o,"#8a8a8a");for(let a=0;a<46;a++)i.fillStyle="#4a4a4a",i.save(),i.translate(a/46*t,s*e),i.transform(1,0,-.32,1,0,0),i.fillRect(0,0,t/46/2.6,(o-s)*e),i.restore()}r(.36,.64,"#8e8e8e");for(const s of[.415,.5,.585])i.fillStyle="#3a3a3a",i.fillRect(0,(s-.011)*e,t,.022*e);for(let s=0;s<84;s++)i.fillStyle="#5a5a5a",i.save(),i.translate(s/84*t,.36*e),i.transform(1,0,-.18,1,0,0),i.fillRect(0,0,t/84/3,.28*e),i.restore();i.font=`700 ${Math.round(e*.062)}px Inter, system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle";for(let s=0;s<4;s++){const o=s/4*t+t/8;i.fillStyle="#a6a6a6",i.fillText("CALDERIS",o,.145*e),i.font=`500 ${Math.round(e*.045)}px Inter, system-ui, sans-serif`,i.fillText("305/30 ZR22",o,.205*e),i.font=`700 ${Math.round(e*.062)}px Inter, system-ui, sans-serif`,i.fillText("CALDERIS",o,.855*e)}return n}const KA=()=>pi("tread.n",()=>{const t=new mo(Yc(Y_(),1.5));return t.wrapS=t.wrapT=Gs,t.anisotropy=8,t}),ZA=()=>pi("tread.r",()=>{const t=new mo(Y_());return t.wrapS=t.wrapT=Gs,t.anisotropy=8,t}),QA=()=>pi("cast.r",()=>ss($c(512,{base:165,spread:62,blobs:2600,blobR:7}))),JA=()=>pi("cast.n",()=>ss(Yc($c(512,{base:128,spread:70,blobs:2600,blobR:7}),1.1))),eC=()=>pi("conc.r",()=>ss($c(512,{base:76,spread:34,blobs:260,blobR:60}),3));function tC(){return pi("heat",()=>{const t=document.createElement("canvas");t.width=256,t.height=1;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,0);n.addColorStop(0,"#2f5f96"),n.addColorStop(.22,"#3f6fae"),n.addColorStop(.46,"#6d54a6"),n.addColorStop(.62,"#8f5c96"),n.addColorStop(.8,"#c0a06d"),n.addColorStop(1,"#ddc899"),e.fillStyle=n,e.fillRect(0,0,256,1);const i=new mo(t);return i.colorSpace=un,i.wrapS=i.wrapT=si,i})}function nC(t=1024){return pi("pad",()=>{const e=Na(t),n=e.getContext("2d"),i=t/2;n.clearRect(0,0,t,t);const r=(o,a,l)=>{n.beginPath(),n.arc(i,i,o,0,Math.PI*2),n.strokeStyle=`rgba(127,184,196,${a})`,n.lineWidth=l,n.stroke()};r(i*.955,.5,2.5),r(i*.93,.16,1);for(let o=1;o<=5;o++)r(i*.9*o/5.6,.1,1);for(let o=0;o<360;o+=3){const a=o*Math.PI/180,l=o%15===0,c=i*.955,u=c-(l?22:10);n.beginPath(),n.moveTo(i+Math.cos(a)*c,i+Math.sin(a)*c),n.lineTo(i+Math.cos(a)*u,i+Math.sin(a)*u),n.strokeStyle=`rgba(127,184,196,${l?.42:.16})`,n.lineWidth=l?2:1,n.stroke()}n.strokeStyle="rgba(127,184,196,0.2)",n.lineWidth=1;for(const[o,a,l,c]of[[i*.08,i,i*.86,i],[t-i*.08,i,t-i*.86,i],[i,i*.08,i,i*.86],[i,t-i*.08,i,t-i*.86]])n.beginPath(),n.moveTo(o,a),n.lineTo(l,c),n.stroke();n.font=`500 ${Math.round(t/58)}px Inter, system-ui, sans-serif`,n.fillStyle="rgba(127,184,196,0.55)",n.textAlign="center",n.textBaseline="middle";for(const[o,a]of[["0",-90],["090",0],["180",90],["270",180]]){const l=a*Math.PI/180;n.fillText(o,i+Math.cos(l)*i*.885,i+Math.sin(l)*i*.885)}n.textAlign="left",n.fillText("CALDERIS // ASSEMBLY PAD  ·  4620 × 1990",i*.2,t-i*.09);const s=new mo(e);return s.colorSpace=un,s})}function iC(){for(const t of Da.values())t&&t.dispose&&t.dispose();Da.clear()}const qc={amberEmissive:16763274,paint:1784408};function qi({repeat:t=3,color:e=16777215}={}){const n=new jc({color:e,map:XA().clone(),normalMap:jA().clone(),roughnessMap:YA().clone(),roughness:.42,metalness:.22,clearcoat:.62,clearcoatRoughness:.22,normalScale:new re(.5,.5),envMapIntensity:1.15});for(const i of[n.map,n.normalMap,n.roughnessMap])i.repeat.set(t,t),i.needsUpdate=!0;return n}const Kn=(t=7172986)=>new pn({color:t,metalness:1,roughness:.34,envMapIntensity:1.3});function up(t=9343381){const e=new pn({color:t,metalness:.86,roughness:.66,roughnessMap:QA().clone(),normalMap:JA().clone(),normalScale:new re(.55,.55),envMapIntensity:1.05});for(const n of[e.roughnessMap,e.normalMap])n.repeat.set(2,2),n.needsUpdate=!0;return e}const fp=()=>new pn({color:13159634,metalness:1,roughness:.09,envMapIntensity:1.6}),rC=(t=13817563)=>new pn({color:t,metalness:1,roughness:.13,envMapIntensity:1.7}),sC=()=>new jc({color:11843773,metalness:1,roughness:.19,clearcoat:.8,clearcoatRoughness:.14,envMapIntensity:1.5}),oC=()=>new pn({color:4869458,metalness:.32,roughness:.52,envMapIntensity:.9}),aC=()=>new pn({color:9265719,emissive:2759180,emissiveIntensity:.6,metalness:.75,roughness:.36,envMapIntensity:1.2});function lC({tread:t=!0,repeat:e=5}={}){const n=new pn({color:855570,metalness:0,roughness:.86,envMapIntensity:.85});if(!t)return n;n.normalMap=KA().clone(),n.roughnessMap=ZA().clone(),n.normalScale=new re(1.1,1.1);for(const i of[n.normalMap,n.roughnessMap])i.repeat.set(e,1),i.needsUpdate=!0;return n}const hp=(t=1382171)=>new pn({color:t,metalness:.05,roughness:.92,envMapIntensity:.6});function cC(t=qc.paint){const e=new jc({color:t,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.45,side:jn,normalMap:qA().clone(),normalScale:new re(.055,.055)});return e.normalMap.repeat.set(90,90),e.normalMap.needsUpdate=!0,e}function dp(){const t=new jc({color:928293,metalness:.1,roughness:.06,clearcoat:1,clearcoatRoughness:.04,transparent:!0,opacity:.58,envMapIntensity:1.55,side:jn});return t.userData.alwaysTransparent=!0,t.userData.baseOpacity=.58,t}function Kc(t,e=2.6,n=1314827){return new pn({color:n,emissive:t,emissiveIntensity:e,metalness:.2,roughness:.35})}const uC=(t=.85)=>new Mn({map:nC(),transparent:!0,opacity:t,blending:zs,depthWrite:!1,side:jn,toneMapped:!1});function fC(){const t=new pn({color:461072,metalness:.08,roughness:.55,roughnessMap:eC().clone(),envMapIntensity:.2});return t.roughnessMap.repeat.set(6,6),t.roughnessMap.needsUpdate=!0,t}function pp({z0:t=1.35,z1:e=-2}={}){const n=new pn({color:9409168,metalness:1,roughness:.26,envMapIntensity:1.5});return n.userData.heat=0,n.userData.edge=0,n.onBeforeCompile=i=>{i.uniforms.uHeat={value:n.userData.heat},i.uniforms.uEdge={value:n.userData.edge},i.uniforms.uRamp={value:tC()},i.uniforms.uZ0={value:t},i.uniforms.uZ1={value:e},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWPos;
        uniform float uHeat;
        uniform float uEdge;
        uniform sampler2D uRamp;
        uniform float uZ0;
        uniform float uZ1;
        float calHeatCoord() { return clamp((uZ0 - vWPos.z) / (uZ0 - uZ1), 0.0, 1.0); }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float c = calHeatCoord();
          float w = smoothstep(uHeat + 0.07, uHeat - 0.07, c);
          vec3 hot = texture2D(uRamp, vec2(c, 0.5)).rgb;
          diffuseColor.rgb = mix(diffuseColor.rgb, hot, w * 0.94);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.17, smoothstep(uHeat + 0.07, uHeat - 0.07, calHeatCoord()));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float c = calHeatCoord();
          float band = exp(-pow((c - uHeat) / 0.05, 2.0));
          totalEmissiveRadiance += vec3(1.0, 0.52, 0.24) * band * uEdge * 1.3;
        }`),n.userData.shader=i},n.customProgramCacheKey=()=>"calderis-titanium",n.userData.setHeat=(i,r=0)=>{n.userData.heat=i,n.userData.edge=r;const s=n.userData.shader;s&&(s.uniforms.uHeat.value=i,s.uniforms.uEdge.value=r)},n}function hC(t){const e=new Set;return t.traverse(n=>{if(!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)e.add(r)}),[...e]}function dC(t,e){const n=e>=.999;for(const i of t){if(i.userData.alwaysTransparent){i.opacity=(i.userData.baseOpacity??1)*e;continue}n?(i.transparent&&(i.transparent=!1,i.needsUpdate=!0),i.opacity=1):(i.transparent||(i.transparent=!0,i.needsUpdate=!0),i.depthWrite=e>.5,i.opacity=e)}}const Fn={length:14,width:1.2,x:3.1,y:6.4},os={x:.3,y:.36,w:.26,h:.26,gain:.8};function $_(t){const e=new hi(Fn.width,.09,Fn.length),n=new Mn({color:new ze(t,t,t),toneMapped:!1});return new at(e,n)}function pC(){const t=new T_,e=new at(new vo(26,32,24),new Mn({color:2106411,side:cn}));t.add(e);const n=new at(new di(52,52),new Mn({color:921878}));n.rotation.x=-Math.PI/2,t.add(n);const i=new at(new di(40,40),new Mn({color:1514016}));i.rotation.x=Math.PI/2,i.position.y=6.6,t.add(i);for(const o of[-1,1]){const a=$_(7.5);a.position.set(o*Fn.x,Fn.y,0),t.add(a);const l=$_(1.1);l.scale.set(3.4,1,1.02),l.position.set(o*Fn.x,Fn.y-.16,0),t.add(l)}const r=new at(new di(20,9),new Mn({color:new ze(12179684).multiplyScalar(1.5),toneMapped:!1}));r.position.set(-11,3.2,0),r.rotation.y=Math.PI/2,t.add(r);const s=new at(new di(14,6),new Mn({color:new ze(3812384).multiplyScalar(1.2)}));return s.position.set(0,2.6,-12),t.add(s),t}function mC(t){const e=new Nc(t);e.compileEquirectangularShader();const n=pC(),i=e.fromScene(n,.035,.1,60);return n.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),e.dispose(),i.texture}function gC(){const t=document.createElement("canvas");t.width=32,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.22,"rgba(255,255,255,0.5)"),n.addColorStop(.5,"rgba(255,255,255,0.85)"),n.addColorStop(.78,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,256);const i=e.createLinearGradient(0,0,32,0);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=i,e.fillRect(0,0,32,256);const r=new mo(t);return r.colorSpace=un,r}function vC(){const t=new Yi;t.name="room";const e=new at(new di(80,80),fC());e.rotation.x=-Math.PI/2,e.receiveShadow=!0,t.add(e);const n=gC();for(const p of[-1,1]){const _=new at(new hi(Fn.width,.1,Fn.length),new Mn({color:new ze(2.6,2.6,2.6),toneMapped:!1}));_.position.set(p*Fn.x,Fn.y,0),t.add(_);const y=new at(new di(Fn.width*2.6,Fn.length*1.08),new Mn({map:n,color:9413812,transparent:!0,opacity:.085,blending:zs,depthWrite:!1,toneMapped:!1}));y.rotation.x=-Math.PI/2,y.rotation.z=Math.PI/2,y.position.set(p*Fn.x*.72,.002,0),t.add(y)}const i=new at(new Hc(3.15,96),uC(.8));i.rotation.x=-Math.PI/2,i.position.y=.004,t.add(i);const r=new at(new Hc(3.4,64),new Mn({color:2837074,transparent:!0,opacity:.09,blending:zs,depthWrite:!1,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.position.y=.0015,t.add(r);const s={height:9,width:18},o=new pn({color:658449,metalness:.2,roughness:.85}),a=new at(new hi(.36,9,46),o);a.position.set(-8.72,s.height+4.5,0),t.add(a);for(const p of[-1,1]){const _=new at(new hi(.36,22,14),o);_.position.set(-8.72,11,p*(s.width/2+7)),t.add(_)}const l=new at(new di(s.width,s.height),new Mn({color:new ze(.9,.97,1.05),toneMapped:!1}));l.position.set(-8.66,s.height/2,0),l.rotation.y=Math.PI/2,t.add(l);const c=new Yi,u=new at(new hi(.16,s.height+.3,s.width+.4),new pn({color:658448,metalness:.7,roughness:.55}));c.add(u);const f=12;for(let p=0;p<f;p++){const _=new at(new hi(.22,.08,s.width+.4),new pn({color:1316637,metalness:.8,roughness:.4}));_.position.y=-9/2+(p+.5)*(s.height/f),c.add(_)}c.position.set(-8.46,s.height/2,0),t.add(c);function h(p){const _=p.clone();_.mapping=Dh,_.wrapS=_.wrapT=si,_.repeat.set(os.w,-.26),_.offset.set(os.x,os.y+os.h),_.needsUpdate=!0,l.material.map=_,l.material.toneMapped=!0,l.material.color.setRGB(os.gain,os.gain,os.gain),l.material.needsUpdate=!0}return{group:t,door:c,daylight:l,pad:i,padGlow:r,floor:e,setView:h,doorRest:s.height/2}}function _C(t,e,n){const i=-t/2,r=-e/2,s=Math.min(n,t/2-1e-4,e/2-1e-4),o=new np;return o.moveTo(i+s,r),o.lineTo(i+t-s,r),o.quadraticCurveTo(i+t,r,i+t,r+s),o.lineTo(i+t,r+e-s),o.quadraticCurveTo(i+t,r+e,i+t-s,r+e),o.lineTo(i+s,r+e),o.quadraticCurveTo(i,r+e,i,r+e-s),o.lineTo(i,r+s),o.quadraticCurveTo(i,r,i+s,r),o}function $e(t,e,n,i=.012,r=.006){const s=Math.min(r,n/3),o=new Xc(_C(t,e,i),{depth:Math.max(.001,n-s*2),bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return o.center(),o.computeVertexNormals(),o}function So(t,e,n=null,i=10,r=!1){const s=new A_(t.map(a=>Array.isArray(a)?new L(...a):a),r),o=n||Math.max(12,Math.round(s.getLength()*18));return new sp(s,o,e,i,r)}function On(t,e,n,i=8){const r=Array.isArray(t)?new L(...t):t,s=Array.isArray(e)?new L(...e):e,o=r.distanceTo(s),a=new mt(n,n,o,i,1);a.translate(0,o/2,0);const l=new $r().setFromUnitVectors(new L(0,1,0),s.clone().sub(r).normalize());return a.applyQuaternion(l),a.translate(r.x,r.y,r.z),a}function xC(t,e,n,{rings:i=2,per:r=18,holeR:s=.011}={}){const o=new np;o.absarc(0,0,t,0,Math.PI*2,!1);const a=new Bc;a.absarc(0,0,e,0,Math.PI*2,!0),o.holes.push(a);for(let c=0;c<i;c++){const u=e+(t-e)*(c+1)/(i+1),f=c%2*(Math.PI/r);for(let h=0;h<r;h++){const p=h/r*Math.PI*2+f,_=new Bc;_.absarc(Math.cos(p)*u,Math.sin(p)*u,s,0,Math.PI*2,!0),o.holes.push(_)}}const l=new Xc(o,{depth:n,bevelEnabled:!0,bevelThickness:.0016,bevelSize:.0016,bevelSegments:1,curveSegments:10});return l.translate(0,0,-n/2),l.rotateY(Math.PI/2),l.computeVertexNormals(),l}function yC(t,e,n,i=.012){const r=[],s=n*16;for(let o=0;o<=s;o++){const a=o/s,l=a*n*Math.PI*2;r.push(new L(Math.cos(l)*t,a*e,Math.sin(l)*t))}return So(r,i,s,6)}function q_(t,e=48){const n=new tp(t.map(i=>new re(i[0],i[1])),e);return n.rotateZ(Math.PI/2),n.computeVertexNormals(),n}function K_(t,{u0:e=0,u1:n=1,v0:i=0,v1:r=1,su:s=24,sv:o=20,flip:a=!1}={}){const l=new Float32Array((s+1)*(o+1)*3),c=new Float32Array((s+1)*(o+1)*2),u=[],f=new L,h=typeof i=="function"?i:()=>i,p=typeof r=="function"?r:()=>r;for(let y=0;y<=s;y++){const m=e+(n-e)*y/s,d=h(m),v=p(m);for(let g=0;g<=o;g++){const S=d+(v-d)*g/o;t(m,S,f);const P=(y*(o+1)+g)*3;l[P]=f.x,l[P+1]=f.y,l[P+2]=f.z;const T=(y*(o+1)+g)*2;c[T]=y/s,c[T+1]=g/o}}for(let y=0;y<s;y++)for(let m=0;m<o;m++){const d=y*(o+1)+m,v=d+1,g=(y+1)*(o+1)+m,S=g+1;a?u.push(d,v,g,v,S,g):u.push(d,g,v,v,g,S)}const _=new Xt;return _.setAttribute("position",new Wt(l,3)),_.setAttribute("uv",new Wt(c,2)),_.setIndex(u),_.computeVertexNormals(),_}function Z_(t){if(t.index)return t;const e=t.attributes.position.count,n=e>65535?new Uint32Array(e):new Uint16Array(e);for(let i=0;i<e;i++)n[i]=i;return t.setIndex(new Wt(n,1)),t}function ct(t){t.forEach(Z_);let e=0,n=0;for(const u of t)e+=u.attributes.position.count,n+=u.index.count;const i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e*2),o=new Uint32Array(n);let a=0,l=0;for(const u of t){i.set(u.attributes.position.array,a*3),u.attributes.normal&&r.set(u.attributes.normal.array,a*3),u.attributes.uv&&s.set(u.attributes.uv.array,a*2);const f=u.index.array;for(let h=0;h<f.length;h++)o[l+h]=f[h]+a;a+=u.attributes.position.count,l+=f.length,u.dispose()}const c=new Xt;return c.setAttribute("position",new Wt(i,3)),c.setAttribute("normal",new Wt(r,3)),c.setAttribute("uv",new Wt(s,2)),c.setIndex(new Wt(o,1)),c}function Q_(t,e=[0,.7,0]){const n=t.attributes.normal,i=t.attributes.position,r=new L(...e);let s=0;const o=Math.max(1,Math.floor(i.count/64));for(let a=0;a<i.count;a+=o){const l=new L(i.getX(a),i.getY(a),i.getZ(a)).sub(r);l.lengthSq()<1e-6||(s+=l.normalize().dot(new L(n.getX(a),n.getY(a),n.getZ(a))))}if(s<0){const a=t.index.array;for(let l=0;l<a.length;l+=3){const c=a[l];a[l]=a[l+2],a[l+2]=c}t.index.needsUpdate=!0,t.computeVertexNormals()}return t}function Zc(t){const e=Z_(t.clone());e.scale(-1,1,1);const n=e.index.array;for(let i=0;i<n.length;i+=3){const r=n[i];n[i]=n[i+2],n[i+2]=r}return e.index.needsUpdate=!0,e.computeVertexNormals(),e}function Ia(t){const e=new Yi;return e.name=t,e.userData.parts=[],e.userData.annotations=[],e}const mp=new L;function Ge(t,e,n={}){const{lift:i=1.35,scatter:r=.7,spin:s=[0,0,0],dir:o=null,shadow:a=!0}=n;e.traverse(f=>{f.isMesh&&(f.castShadow=a,f.receiveShadow=a)});const l=e.position.clone();let c;o?c=new L(...o).normalize():(mp.set(l.x,0,l.z),c=mp.lengthSq()>4e-4?mp.clone().normalize():new L(.4,0,.9).normalize()),t.add(e);const u={obj:e,lift:i,scatter:r,spin:new L(...s),dir:c,base:l,baseRot:e.rotation.clone(),mats:null};return t.userData.parts.push(u),e}function mn(t,e,n,i){t.userData.annotations.push({key:i||n,text:n,target:e})}function Ua(t){for(const e of t.userData.parts)e.mats=hC(e.obj);return t}function Xe(t,e,n=[0,0,0],i=[0,0,0]){const r=new at(t,e);return r.position.set(...n),r.rotation.set(...i),r}const Fe={halfBase:1.375,trackHalf:.8,tyreR:.345,tyreWFront:.3,tyreWRear:.345,rimR:.279,floorY:.19,noseZ:2.31,tailZ:-2.31};function J_(t,e,n=.026){return ct(e.map(([i,r])=>On(t[i],t[r],n)))}function SC(){return J_({al:[-.6,.28,1.3],ar:[.6,.28,1.3],tl:[-.54,.68,1.34],tr:[.54,.68,1.34],fl:[-.5,.33,2.02],fr:[.5,.33,2.02],ul:[-.4,.62,1.9],ur:[.4,.62,1.9],nose:[0,.44,2.2]},[["al","fl"],["ar","fr"],["tl","ul"],["tr","ur"],["fl","fr"],["ul","ur"],["fl","ul"],["fr","ur"],["al","tl"],["ar","tr"],["al","ul"],["ar","ur"],["fl","nose"],["fr","nose"],["ul","nose"],["ur","nose"],["al","ar"]])}function MC(){return J_({al:[-.66,.3,-1.28],ar:[.66,.3,-1.28],tl:[-.58,.76,-1.32],tr:[.58,.76,-1.32],bl:[-.56,.34,-1.98],br:[.56,.34,-1.98],ul:[-.46,.72,-1.86],ur:[.46,.72,-1.86],cl:[-.3,.52,-2.08],cr:[.3,.52,-2.08]},[["al","bl"],["ar","br"],["tl","ul"],["tr","ur"],["bl","br"],["ul","ur"],["bl","ul"],["br","ur"],["al","tl"],["ar","tr"],["al","ul"],["ar","ur"],["bl","cl"],["br","cr"],["cl","cr"],["ul","cl"],["ur","cr"]])}function EC(){const t=So([[-.56,.3,-.5],[-.585,.7,-.55],[-.5,1.02,-.6],[-.22,1.125,-.62],[.22,1.125,-.62],[.5,1.02,-.6],[.585,.7,-.55],[.56,.3,-.5]],.029,72,12),e=ct([On([-.46,1.06,-.61],[-.48,.36,-1.2],.021),On([.46,1.06,-.61],[.48,.36,-1.2],.021),On([-.22,1.125,-.62],[.22,1.125,-.62],.021)]);return ct([t,e])}function wC(){return ct([$e(.42,.06,.5,.06),(()=>{const e=$e(.42,.62,.06,.06);return e.rotateX(-.22),e.translate(0,.3,-.26),e})(),(()=>{const e=$e(.1,.5,.34,.04);return e.translate(-.19,.2,-.06),e})(),(()=>{const e=$e(.1,.5,.34,.04);return e.translate(.19,.2,-.06),e})()])}function TC(){const t=[],e=$e(1.24,.1,.34,.05);e.rotateX(-.26),e.translate(0,.76,.42),t.push(e);const n=$e(1.18,.22,.06,.03);n.rotateX(-.16),n.translate(0,.63,.3),t.push(n);const i=$e(.34,.14,.16,.04);i.rotateX(-.34),i.translate(-.34,.79,.34),t.push(i);const r=$e(.28,.3,.08,.03);r.rotateX(-.22),r.translate(0,.6,.26),t.push(r);for(const s of[-1,1]){const o=$e(.16,.05,.05,.015);o.rotateX(-.16),o.translate(s*.46,.68,.31),t.push(o)}return ct(t)}function AC(){const t=[],e=new _o(.16,.017,10,34);t.push(e);const n=new mt(.05,.045,.07,16);n.rotateX(Math.PI/2),t.push(n);for(const r of[Math.PI,Math.PI/3,Math.PI*5/3]){const s=$e(.11,.032,.026,.008);s.translate(.075,0,0),s.rotateZ(r),t.push(s)}const i=ct(t);return i.rotateX(-.38),i.translate(-.34,.74,.2),i}function CC(){const t=[],e=$e(.36,.05,.72,.03);e.translate(0,.45,.03),t.push(e);const n=new mt(.014,.018,.13,10);n.translate(0,.53,.16),t.push(n);const i=new vo(.026,12,10);i.translate(0,.6,.16),t.push(i);for(let r=0;r<3;r++){const s=new mt(.021,.021,.014,14);s.translate(-.08+r*.08,.48,-.14),t.push(s)}return ct(t)}function RC(t){const e=[],n=$e(.05,.36,1,.05);n.translate(t*.7,.53,.05),e.push(n);const i=$e(.09,.05,.44,.02);return i.translate(t*.68,.62,.1),e.push(i),ct(e)}function bC(){const t=Ia("chassis"),e=Xe($e(1.44,.07,2.74,.05),qi({repeat:4}),[0,Fe.floorY,0]);Ge(t,e,{lift:1.1,scatter:.2,spin:[.06,.1,0]});const n=Xe($e(.34,.23,2.5,.05),qi({repeat:3}),[0,.31,-.05]);Ge(t,n,{lift:1.5,scatter:.25,spin:[0,-.12,.05]});for(const h of[-1,1]){const p=Xe($e(.24,.42,2.6,.07),qi({repeat:3}),[h*.78,.37,-.02]);Ge(t,p,{lift:1.4,scatter:.95,spin:[0,0,h*.16]})}const i=Xe($e(1.42,.54,.08,.05),qi({repeat:2}),[0,.44,1.28]);Ge(t,i,{lift:1.6,scatter:.6,spin:[.2,0,0]});const r=Xe($e(1.52,.64,.09,.05),qi({repeat:2}),[0,.5,-1.28]);Ge(t,r,{lift:1.6,scatter:.6,spin:[-.2,0,0]});const s=Xe(SC(),Kn(7370365),[0,0,0]);Ge(t,s,{lift:1.7,scatter:1.3,spin:[.1,.2,0],dir:[.15,0,1]});const o=Xe(MC(),Kn(7370365),[0,0,0]);Ge(t,o,{lift:1.7,scatter:1.3,spin:[-.1,-.2,0],dir:[-.15,0,-1]});const a=Xe(EC(),Kn(9146776),[0,0,0]);Ge(t,a,{lift:2.1,scatter:.5,spin:[0,.24,0],dir:[0,0,-1]});for(const h of[-1,1]){const p=Xe(wC(),qi({repeat:2}),[h*.36,.27,-.24]);Ge(t,p,{lift:1.2,scatter:.8,spin:[.1,h*.2,0]})}for(const h of[-1,1]){const p=Xe(RC(h),hp(),[0,0,0]);Ge(t,p,{lift:.9,scatter:1,spin:[0,h*.16,0]})}const l=Xe(CC(),qi({repeat:2}),[0,0,0]);Ge(t,l,{lift:1,scatter:.4,spin:[.1,0,0],dir:[0,0,1]});const c=Xe(TC(),hp(),[0,0,0]);Ge(t,c,{lift:1.3,scatter:.5,spin:[.14,0,0],dir:[0,0,1]});const u=Xe(AC(),hp(1777187),[0,0,0]);Ge(t,u,{lift:.8,scatter:.6,spin:[0,.4,0],dir:[-.6,0,.6]});const f=Xe(new mt(.14,.22,.34,16,1,!1),qi({repeat:2}),[0,.44,2.1],[Math.PI/2,0,0]);return Ge(t,f,{lift:1,scatter:1.5,spin:[0,0,.4],dir:[0,0,1]}),mn(t,e,"CARBON MONOCOQUE · 1,180 kg dry","tub"),mn(t,s,"FRONT SUBFRAME · 7020-T6","subframe"),mn(t,a,"ROLL HOOP · FIA 8862-2009","hoop"),Ua(t)}const tn={x:0,y:.47,z:1.02},ex=.56;function PC(){const t=[$e(.6,.42,.74,.03)];for(const i of[-1,1]){const r=$e(.25,.36,.72,.03);r.rotateZ(i*ex),r.translate(i*.19,.25,0),t.push(r)}const e=$e(.52,.14,.66,.04);e.translate(0,-.27,0),t.push(e);const n=new mt(.15,.15,.08,20);return n.rotateX(Math.PI/2),n.translate(0,.02,.4),t.push(n),ct(t)}function LC(t){const e=$e(.14,.085,.68,.03);return e.rotateZ(t*ex),e.translate(t*.29,.4,0),e}const DC=(t,e)=>[tn.x+t*.33,tn.y+.31,tn.z+(e-1.5)*.17];function NC(){const t=[],e=new _o(.085,.052,10,22,Math.PI*1.7);e.rotateY(Math.PI/2),t.push(e);const n=new mt(.055,.055,.17,18);n.rotateZ(Math.PI/2),t.push(n);const i=new mt(.062,.075,.06,18);i.rotateZ(Math.PI/2),i.translate(.12,0,0),t.push(i);const r=new mt(.036,.036,.18,12);return r.rotateX(Math.PI/2),r.translate(0,.09,.09),t.push(r),ct(t)}function IC(){const t=[$e(.44,.17,.6,.07)];for(let n=0;n<8;n++){const i=n<4?-1:1,r=(-1.5+n%4)*.17,s=new mt(.03,.03,.2,10);s.rotateZ(i*.5),s.translate(i*.14,-.14,r),t.push(s)}const e=new mt(.05,.05,.09,16);return e.rotateX(Math.PI/2),e.translate(0,0,.33),t.push(e),ct(t)}function UC(t){const e=[],n=[t*.44,.36,tn.z-.34];for(let i=0;i<4;i++){const[r,s,o]=DC(t,i);e.push(So([[r,s,o],[r+t*.11,s-.05,o],[t*.47,s-.19,o*.6+.24],n],.025,20,9))}return e.push(So([n,[t*.45,.33,tn.z-.52],[t*.44,.3,tn.z-.72]],.05,14,12)),ct(e)}function FC(t){return So([[t*.44,.3,tn.z-.72],[t*.45,.24,-.25],[t*.44,.24,-.95],[t*.4,.32,-1.5],[t*.34,.5,-1.95],[t*.3,.6,-2.16]],.05,56,14)}function OC(t,e){const n=[];for(const i of[.2,.36]){const r=t*i,s=e(r)-.07,o=new mt(.056,.06,.3,22,1,!0);o.rotateX(Math.PI/2),o.translate(r,.6,s),n.push(o);const a=new _o(.058,.007,8,22);a.translate(r,.6,s-.15),n.push(a)}return n.push(On([t*.2,.6,-2.18],[t*.36,.6,-2.18],.016)),ct(n)}function kC(){const t=[$e(.44,.36,.5,.05)],e=new mt(.19,.15,.22,20);e.rotateX(Math.PI/2),e.translate(0,.02,.32),t.push(e);for(const n of[-1,1]){const i=new mt(.06,.06,.3,14);i.rotateZ(Math.PI/2),i.translate(n*.34,-.04,-.05),t.push(i)}for(let n=0;n<6;n++){const i=$e(.46,.012,.06,.004);i.translate(0,.2-n*.05,-.24),t.push(i)}return ct(t)}function zC({capZRear:t}={}){const e=Ia("powertrain"),n=[],i=t||(()=>-2.34),r=Xe(PC(),up(),[tn.x,tn.y,tn.z]);Ge(e,r,{lift:2,scatter:.3,spin:[.05,.12,0],dir:[0,0,1]});for(const c of[-1,1]){const u=Xe(LC(c),Kn(5659747),[tn.x,tn.y,tn.z]);Ge(e,u,{lift:1.5,scatter:.6,spin:[0,0,c*.3]})}for(const c of[-1,1]){const u=Xe(NC(),up(7764349),[c*.55,.4,tn.z-.5]);Ge(e,u,{lift:1.3,scatter:1.2,spin:[.4,c*.5,0]})}const s=Xe(IC(),Kn(6054763),[tn.x,.755,tn.z]);Ge(e,s,{lift:1.6,scatter:.25,spin:[.15,0,0],dir:[0,0,1]});for(const c of[-1,1]){const u=pp();n.push(u),Ge(e,Xe(UC(c),u),{lift:1.2,scatter:1,spin:[.2,0,c*.2],dir:[c,0,.3]})}for(const c of[-1,1]){const u=pp();n.push(u),Ge(e,Xe(FC(c),u),{lift:.9,scatter:.9,spin:[0,.12,0],dir:[c,0,-.4]})}const o=Xe(new mt(.036,.036,1.75,18),fp(),[0,.31,-.5],[Math.PI/2,0,0]);Ge(e,o,{lift:.8,scatter:.5,spin:[0,0,.6],dir:[0,0,-1]});const a=Xe(kC(),up(8882572),[0,.4,-1.55]);Ge(e,a,{lift:1.7,scatter:.6,spin:[.1,-.15,0],dir:[0,0,-1]});let l=null;for(const c of[-1,1]){const u=pp();n.push(u);const f=Xe(OC(c,i),u);Ge(e,f,{lift:.7,scatter:1.1,spin:[0,c*.3,0],dir:[c*.4,0,-1]}),l=f}return e.userData.titanium=n,mn(e,r,"V8 TWIN-TURBO · 620 hp @ 6,750 rpm","v8"),mn(e,l,"TITANIUM · 3.1 kg","ti"),mn(e,a,"TRANSAXLE · 8-SPEED DCT","dct"),Ua(e)}function BC(t,e){const n=e*Fe.halfBase,i=t*Fe.trackHalf,r=t*.42;return{hub:[i,Fe.tyreR,n],lower:{a:[r,.25,n+.16],b:[r,.25,n-.16],j:[t*(Fe.trackHalf-.06),.23,n]},upper:{a:[t*.44,.63,n+.14],b:[t*.44,.63,n-.14],j:[t*(Fe.trackHalf-.09),.51,n]},damper:{from:[t*(Fe.trackHalf-.2),.27,n],to:[t*.36,.88,n+e*.04]}}}function tx(t,e=.021){return ct([On(t.a,t.j,e),On(t.b,t.j,e),On(t.a,t.b,e*.7)])}function HC(t,e){const n=[],i=$e(.07,.32,.12,.02);i.translate(t*(Fe.trackHalf-.04),.37,e),n.push(i);const r=new mt(.062,.062,.11,18);return r.rotateZ(Math.PI/2),r.translate(t*(Fe.trackHalf-.01),Fe.tyreR,e),n.push(r),n.push(On([t*(Fe.trackHalf-.04),.5,e],[t*(Fe.trackHalf-.09),.51,e],.018)),n.push(On([t*(Fe.trackHalf-.04),.25,e],[t*(Fe.trackHalf-.06),.23,e],.018)),n.push(On([t*(Fe.trackHalf-.06),.31,e],[t*.4,.33,e+.2],.014)),ct(n)}function VC(t,e){const n=new L(...t),i=new L(...e),r=n.distanceTo(i),s=new Yi,o=ct([(()=>{const c=new mt(.029,.029,r*.52,16);return c.translate(0,r*.26,0),c})(),(()=>{const c=new mt(.015,.015,r,10);return c.translate(0,r/2,0),c})(),(()=>{const c=new mt(.042,.042,.026,16);return c.translate(0,r*.56,0),c})(),(()=>{const c=new vo(.025,10,8);return c.translate(0,r,0),c})(),new vo(.025,10,8)]);s.add(new at(o,Kn(6251885)));const a=yC(.055,r*.66,7.5,.0115);a.translate(0,r*.14,0),s.add(new at(a,fp()));const l=new $r().setFromUnitVectors(new L(0,1,0),i.clone().sub(n).normalize());return s.quaternion.copy(l),s.position.copy(n),s}function GC(t){const e=t*Fe.halfBase,n=So([[-.62,.32,e-t*.02],[-.5,.29,e-t*.16],[.5,.29,e-t*.16],[.62,.32,e-t*.02]],.017,40,9),i=ct([On([-.62,.32,e-t*.02],[-.6,.26,e],.01),On([.62,.32,e-t*.02],[.6,.26,e],.01)]);return ct([n,i])}function WC(t,e){const n=[],i=$e(.055,.115,.24,.018);i.translate(t*(Fe.trackHalf-.06),Fe.tyreR+.2,e),n.push(i);const r=$e(.075,.05,.2,.012);r.translate(t*(Fe.trackHalf-.045),Fe.tyreR+.2,e),n.push(r);for(let s=0;s<3;s++){const o=new mt(.019,.019,.08,12);o.rotateZ(Math.PI/2),o.translate(t*(Fe.trackHalf-.06),Fe.tyreR+.2,e-.07+s*.07),n.push(o)}return ct(n)}function XC(t){const e=t/2,n=[];n.push(q_([[.243,-e],[.268,-e+.018],[.279,-e+.05],[.279,e-.05],[.268,e-.018],[.243,e]],48));const i=new _o(.2755,.011,8,48);i.rotateY(Math.PI/2),i.translate(e-.012,0,0),n.push(i);const r=e-.045,s=new mt(.076,.066,.055,22);s.rotateZ(Math.PI/2),s.translate(r+.012,0,0),n.push(s);const o=new mt(.1,.1,.028,26);o.rotateZ(Math.PI/2),o.translate(r,0,0),n.push(o);for(let a=0;a<6;a++){const l=a/6*Math.PI*2,c=$e(.05,.215,.088,.012);c.translate(0,.175,0),c.rotateX(l),c.translate(r,0,0),n.push(c);const u=$e(.075,.075,.11,.014);u.translate(0,.253,0),u.rotateX(l),u.translate(r+.018,0,0),n.push(u);const f=new mt(.011,.011,.022,6);f.rotateZ(Math.PI/2),f.translate(r+.026,Math.cos(l+.52)*.072,Math.sin(l+.52)*.072),n.push(f)}return ct(n)}function jC(t){const e=t/2;return q_([[Fe.rimR-.003,-e+.005],[Fe.rimR+.022,-e-.012],[Fe.tyreR-.012,-e+.004],[Fe.tyreR-.004,-e*.55],[Fe.tyreR,0],[Fe.tyreR-.004,e*.55],[Fe.tyreR-.012,e-.004],[Fe.rimR+.022,e+.012],[Fe.rimR-.003,e-.005]],52)}function YC(){const t=Ia("running"),e=[];for(const o of[1,-1])for(const a of[-1,1])e.push({sx:a,sz:o,c:BC(a,o)});for(const{c:o}of e){const a=Xe(tx(o.lower,.023),Kn(7765123));Ge(t,a,{lift:.7,scatter:1.1,spin:[0,.3,0]})}for(const{c:o}of e){const a=Xe(tx(o.upper,.019),Kn(7765123));Ge(t,a,{lift:.9,scatter:1.1,spin:[0,-.3,0]})}for(const{sx:o,sz:a}of e){const l=Xe(HC(o,a*Fe.halfBase),Kn(8883605));Ge(t,l,{lift:1,scatter:1.3,spin:[0,0,o*.3]})}for(const{c:o}of e){const a=VC(o.damper.from,o.damper.to);Ge(t,a,{lift:1.5,scatter:.9,spin:[.3,0,0]})}let n=null;for(const o of[1,-1]){const a=Xe(GC(o),fp());Ge(t,a,{lift:1.1,scatter:.6,spin:[0,0,.5],dir:[0,0,o]}),o===1&&(n=a)}let i=null;for(const{sx:o,sz:a}of e){const l=a*Fe.halfBase,c=Xe(xC(.205,.085,.034,{rings:2,per:20,holeR:.0105}),oC(),[o*(Fe.trackHalf-.01),Fe.tyreR,l]);Ge(t,c,{lift:.6,scatter:1.6,spin:[1.2,0,0],dir:[o,0,0]}),o===-1&&a===1&&(i=c)}for(const{sx:o,sz:a}of e){const l=Xe(WC(o,a*Fe.halfBase),aC());Ge(t,l,{lift:.9,scatter:1.2,spin:[0,0,0],dir:[o,.4,0]})}let r=null;const s=new Set;for(const{sx:o,sz:a}of e){const l=a*Fe.halfBase,c=a===1?Fe.tyreWFront:Fe.tyreWRear;let u=XC(c);o<0&&(u=Zc(u));const f=Xe(u,rC(),[o*(Fe.trackHalf-.005),Fe.tyreR,l]);Ge(t,f,{lift:.15,scatter:2.35,spin:[0,o*1.35,0],dir:[o,0,0]}),s.add(f),o===-1&&a===1&&(r=f)}for(const{sx:o,sz:a}of e){const l=a*Fe.halfBase,c=a===1?Fe.tyreWFront:Fe.tyreWRear,u=Xe(jC(c),lC(),[o*(Fe.trackHalf-.005),Fe.tyreR,l]);Ge(t,u,{lift:.5,scatter:1.8,spin:[0,0,o*.6],dir:[o,0,0]}),s.add(u)}for(const o of t.userData.parts)s.has(o.obj)&&(o.forever=!0);return mn(t,n,"DOUBLE WISHBONE · 4-WAY ADAPTIVE","susp"),mn(t,i,"CARBON-CERAMIC · 410 mm","brake"),mn(t,r,"22-INCH · FORGED MONOBLOC","wheel"),Ua(t)}function Ki(t){const e=t.map(r=>r[0]),n=t.map(r=>r[1]),i=t.length;return r=>{if(r<=e[0])return n[0];if(r>=e[i-1])return n[i-1];let s=0;for(;s<i-2&&e[s+1]<r;)s++;const o=(r-e[s])/(e[s+1]-e[s]),a=n[Math.max(0,s-1)],l=n[s],c=n[s+1],u=n[Math.min(i-1,s+2)],f=o*o,h=f*o;return .5*(2*l+(-a+c)*o+(2*a-5*l+4*c-u)*f+(-a+3*l-3*c+u)*h)}}const nx=Ki([[0,.7],[.06,.795],[.14,.878],[.26,.925],[.32,.952],[.4,1.13],[.46,1.245],[.56,1.25],[.66,1.175],[.76,1.056],[.88,.968],[.96,.935],[1,.9]]),$C=Ki([[0,.42],[.08,.66],[.16,.78],[.3,.8],[.36,.762],[.44,.6],[.52,.6],[.62,.582],[.72,.605],[.84,.665],[.94,.66],[1,.6]]),qC=Ki([[0,.575],[.1,.71],[.2,.792],[.3,.802],[.4,.856],[.52,.884],[.62,.9],[.72,.918],[.8,.93],[.88,.916],[1,.85]]),KC=Ki([[0,.58],[.08,.8],[.18,.92],[.32,.955],[.46,.965],[.6,.975],[.74,.985],[.86,.95],[.95,.88],[1,.78]]),gp=Ki([[0,.64],[.07,.86],[.2,.988],[.32,.972],[.46,.982],[.62,.992],[.8,1],[.88,.958],[.96,.9],[1,.82]]),ZC=Ki([[0,.5],[.12,.6],[.3,.635],[.5,.655],[.7,.665],[.88,.66],[1,.64]]),ix=Ki([[0,.56],[.08,.74],[.16,.86],[.34,.9],[.5,.905],[.66,.905],[.8,.89],[.92,.84],[1,.74]]),QC=Ki([[0,.32],[.1,.31],[.5,.3],[.9,.312],[1,.38]]),rx=Ki([[0,.26],[.04,.18],[.1,.135],[.2,.115],[.75,.115],[.86,.152],[.94,.26],[1,.34]]),Mo=[0,.09,.2,.4,.58,.84,1];function JC(t,e){return e[0][0]=0,e[0][1]=rx(t),e[1][0]=ix(t)*.62,e[1][1]=rx(t)+.004,e[2][0]=ix(t),e[2][1]=QC(t),e[3][0]=gp(t),e[3][1]=ZC(t),e[4][0]=KC(t),e[4][1]=qC(t),e[5][0]=$C(t),e[5][1]=nx(t)-.022,e[6][0]=0,e[6][1]=nx(t),e}const eR=Array.from({length:7},()=>[0,0]);function sx(t,e,n,i,r){const s=r*r,o=s*r;return .5*(2*e+(-t+n)*r+(2*t-5*e+4*n-i)*s+(-t+3*e-3*n+i)*o)}function as(t,e,n=new L){const i=JC(t,eR),r=e<0?0:e>1?1:e;let s=0;for(;s<Mo.length-2&&Mo[s+1]<r;)s++;const o=(r-Mo[s])/(Mo[s+1]-Mo[s]),a=Math.max(0,s-1),l=Math.min(Mo.length-1,s+2),c=sx(i[a][0],i[s][0],i[s+1][0],i[l][0],o),u=sx(i[a][1],i[s][1],i[s+1][1],i[l][1],o);return n.set(c,u,cM.lerp(Fe.noseZ,Fe.tailZ,t)),n}const ox=t=>(Fe.noseZ-t)/(Fe.noseZ-Fe.tailZ),Ct={noseEnd:.1,fenderEnd:.34,wsEnd:.415,cabinEnd:.6,backlightEnd:.765,deckEnd:.9,sill:[.3,.7]},En={sill:.2,belt:.62,glassTop:.755},tR=ox(Fe.halfBase),nR=ox(-1.375);function ax(t,e,n,i=0){return r=>{const s=(r-t)/e,o=s*s>=1?0:Math.pow(1-s*s,.7);return i+(n-i)*o}}const iR=ax(tR,.1,.53,En.sill),rR=ax(nR,.102,.48,En.sill),Qc={front:.11,rear:-.09},sR={front:gp(0),rear:gp(1)},lx=(()=>{const t=as(0,0,new L),e=as(0,1,new L),n=(t.y+e.y)/2,i=new L,r=[],s=[];for(let o=0;o<=96;o++)as(0,o/96,i),s.push([i.x,i.y]),r.push([Math.atan2(i.y-n,i.x),Math.hypot(i.x,i.y-n)]);return r.sort((o,a)=>o[0]-a[0]),{cy:n,table:r,xy:s}})();function oR(t){const{table:e}=lx;if(t<=e[0][0])return e[0][1];const n=e.length-1;if(t>=e[n][0])return e[n][1];for(let i=0;i<n;i++)if(t<=e[i+1][0]){const r=e[i+1][0]-e[i][0],s=r===0?0:(t-e[i][0])/r;return e[i][1]+(e[i+1][1]-e[i][1])*s}return e[n][1]}const Zi={halfWidth:.44,top:.44,bottom:.325,arch:.014,depth:.075},mi={y:.6,halfWidth:.5,halfHeight:.009,depth:.022},wn={x:.508,top:.6,bottom:.5,halfWidth:.0105},cx=t=>Zi.top-Zi.arch*(t/Zi.halfWidth)**2,ux=t=>Zi.bottom+Zi.arch*.6*(t/Zi.halfWidth)**2,fx=t=>{const e=t<0?0:t>1?1:t;return e*e*(3-2*e)},vp=(t,e,n,i,r)=>fx((n-Math.abs(t))/r)*fx((i-Math.abs(e))/r);function hx(t,e){const n=Math.abs(t),i=cx(n),r=ux(n),s=Zi.depth*vp(n,e-(i+r)/2,Zi.halfWidth,(i-r)/2,.03),o=mi.depth*vp(n,e-mi.y,mi.halfWidth,mi.halfHeight,.008),a=(wn.top+wn.bottom)/2,l=mi.depth*vp(n-wn.x,e-a,wn.halfWidth,(wn.top-wn.bottom)/2,.008);return Math.max(s,o,l)}function _p(t,e){const{cy:n}=lx,i=Math.abs(t),r=e-n,s=Math.hypot(i,r),o=oR(Math.atan2(r,i)),a=o>0?Math.min(1,s/o):1,l=Fe.noseZ+Qc.front*(1-a*a);return{z:l-hx(t,e),dome:l,s:a}}const Jc=t=>Fe.tailZ+Qc.rear*(1-Math.min(1,(t/sR.rear)**2));function aR(t,e,n=null){const i=as(t,0,new L),r=as(t,1,new L),s=(i.y+r.y)/2,o=i.z;return(a,l,c)=>(as(t,l,c),c.x*=a,c.y=s+(c.y-s)*a,c.z=o+(1-a*a)*e,n&&(c.z-=n(c.x,c.y)),c)}function xp(t){const e=t.gap||0,n=(r,s)=>typeof r=="function"?o=>r(o)+s:r===0||r===1?r:r+s,i=K_(as,{u0:t.u[0]===0?0:t.u[0]+e*.5,u1:t.u[1]===1?1:t.u[1]-e*.5,v0:n(t.v[0],e),v1:n(t.v[1],-e),su:t.su,sv:t.sv});return Q_(i)}function dx(t,e,n=8,i=32){const r=e>0?hx:null;return Q_(K_(aR(t,e,r),{u0:.001,u1:1,v0:0,v1:1,su:n,sv:i}))}function yp(t){if(!t.centre)return xp(t);const e=[xp(t),Zc(xp(t))];return t.cap&&e.push(dx(...t.cap),Zc(dx(...t.cap))),ct(e)}function lR(){const e=[],n=$e(1.52,.028,.92,.03);n.rotateX(-.24),n.translate(0,.2,-1.78),e.push(n);for(let r=-2;r<=2;r++){const s=$e(.022,.17,.88,.008);s.rotateX(-.24),s.translate(r*.29,.29,-1.78),e.push(s)}for(const r of[-1,1]){const s=$e(.026,.24,.9,.01);s.rotateX(-.24),s.translate(r*.76,.31,-1.78),e.push(s)}const i=$e(1.56,.07,.09,.02);return i.translate(0,.42,-2.16),e.push(i),ct(e)}const cR=[{name:"sill",gap:.003,side:!0,u:Ct.sill,v:[0,En.sill],su:30,sv:7,mat:sC,opts:{lift:.8,scatter:1.1,spin:[0,0,.1]}},{name:"nose",centre:!0,u:[0,Ct.noseEnd],v:[0,1],su:12,sv:40,cap:[0,Qc.front,34,132],opts:{lift:1.5,scatter:1,spin:[.1,0,0],dir:[0,0,1]}},{name:"fender",gap:.004,side:!0,u:[Ct.noseEnd,Ct.fenderEnd],v:[iR,En.belt],su:34,sv:14,opts:{lift:1.7,scatter:1,spin:[.06,.1,0]}},{name:"door",gap:.004,side:!0,u:[Ct.fenderEnd,Ct.cabinEnd],v:[En.sill,En.belt],su:28,sv:16,opts:{lift:1.9,scatter:1.25,spin:[0,.18,0]}},{name:"sideGlass",side:!0,u:[Ct.wsEnd,Ct.cabinEnd],v:[En.belt,En.glassTop],su:20,sv:7,mat:dp,opts:{lift:1.5,scatter:.9,spin:[0,.1,0]}},{name:"quarter",gap:.004,side:!0,u:[Ct.cabinEnd,Ct.deckEnd],v:[rR,En.belt],su:34,sv:14,opts:{lift:1.8,scatter:1.1,spin:[.05,-.12,0]}},{name:"hood",gap:.005,centre:!0,u:[Ct.noseEnd,Ct.fenderEnd],v:[En.belt,1],su:28,sv:20,opts:{lift:2.1,scatter:.35,spin:[.14,0,0],dir:[0,0,1]}},{name:"windscreen",centre:!0,u:[Ct.fenderEnd,Ct.wsEnd],v:[En.belt,1],su:12,sv:22,mat:dp,opts:{lift:1.8,scatter:.4,spin:[.2,0,0],dir:[0,0,1]}},{name:"roof",gap:.003,centre:!0,u:[Ct.wsEnd,Ct.cabinEnd],v:[En.glassTop,1],su:22,sv:14,opts:{lift:2.6,scatter:.15,spin:[.05,.06,0],dir:[0,0,-1]}},{name:"backlight",centre:!0,u:[Ct.cabinEnd,Ct.backlightEnd],v:[En.belt,1],su:20,sv:22,mat:dp,opts:{lift:1.9,scatter:.5,spin:[-.15,0,0],dir:[0,0,-1]}},{name:"deck",gap:.004,centre:!0,u:[Ct.backlightEnd,Ct.deckEnd],v:[En.belt,1],su:20,sv:22,opts:{lift:1.9,scatter:.55,spin:[-.1,0,0],dir:[0,0,-1]}},{name:"fascia",centre:!0,u:[Ct.deckEnd,1],v:[0,1],su:12,sv:40,cap:[1,Qc.rear],opts:{lift:1.4,scatter:1,spin:[-.12,0,0],dir:[0,0,-1]}}];function uR(){const t=Ia("body"),e={},n=Xe(lR(),qi({repeat:2}));Ge(t,n,{lift:.9,scatter:.9,spin:[.2,0,0],dir:[0,0,-1]}),e.diffuser=n;for(const i of cR){const r=i.mat||cC;if(i.side)for(const s of[1,-1]){const o=s===1?yp(i):Zc(yp(i)),a=Xe(o,r());a.userData.panel=i.name;const l={...i.opts};l.dir=l.dir||[s,.15,0],Ge(t,a,l),s===-1&&(e[i.name]=a)}else{const s=Xe(yp(i),r());s.userData.panel=i.name,Ge(t,s,i.opts),e[i.name]=s}}return mn(t,e.door,"DEEP OCEAN SATIN · HAND-LAID","paint"),mn(t,e.diffuser,"DIFFUSER · 3-ELEMENT","diffuser"),mn(t,e.roof,"FRAMELESS · GREEN TINT","glass"),t.userData.panelsByName=e,Ua(t)}const px=25;function mx(t,e,n,i,r,s,o){const a=[],l=(e-t)/s;for(let c=0;c<s;c++){const u=t+l*(c+.5),f=$e(Math.abs(l)+.006,i,r,i*.12);f.translate(u,n,_p(u,n).z+o-r/2),a.push(f)}return ct(a)}function gx(t,e,n,i,r,s,o){const a=[],l=(n-e)/s;for(let c=0;c<s;c++){const u=e+l*(c+.5),f=$e(i,Math.abs(l)+.006,r,i*.12);f.translate(t,u,_p(t,u).z+o-r/2),a.push(f)}return ct(a)}function fR(t){const e=cx(t),n=ux(t),i=(e+n)/2,r=$e(.008,e-n-.01,.042,.002);return r.rotateY(-Math.sign(t)*Math.min(.22,Math.abs(t)*.36)),r.translate(t,i,_p(t,i).z+.04-.021),r}const hR=()=>ct([mx(-.5,mi.halfWidth,mi.y,mi.halfHeight*2,.012,36,.004),...[-1,1].map(t=>gx(t*wn.x,wn.bottom,wn.top,wn.halfWidth*2,.012,6,.004))]),dR=()=>mx(-.5,mi.halfWidth,mi.y,mi.halfHeight*1.5,.016,36,.014),pR=t=>gx(t*wn.x,wn.bottom+.006,wn.top-.006,wn.halfWidth*1.5,.016,6,.014);function mR(){const t=[];for(let n=0;n<30;n++){const i=-.72+n/29*1.44,r=$e(1.44/30+.006,.04,.035,.006);r.translate(i,.72,Jc(i)-.022),t.push(r)}return ct(t)}function gR(){const t=[];for(let n=0;n<30;n++){const i=-.745+n/29*1.49,r=$e(1.49/30+.008,.075,.05,.01);r.translate(i,.72,Jc(i)-.006),t.push(r)}return ct(t)}function vR(t){const e=t*.5,n=$e(.13,.028,.03,.005);return n.translate(e,.45,Jc(e)-.022),n}function _R(){const t=Ia("ignition"),e=[];for(let l=0;l<px;l++){const c=-.41000000000000003+l/(px-1)*(Zi.halfWidth*2-.06),u=Xe(fR(c),Kn(2304045));Ge(t,u,{lift:.32,scatter:.26,spin:[0,.45,0],dir:[Math.sign(c)||1,.3,.5]})}const n=Xe(hR(),Kn(1316893));Ge(t,n,{lift:.5,scatter:.6,spin:[0,0,0],dir:[0,.2,1]});const i=Kc(qc.amberEmissive,2.6);e.push(i);const r=Xe(dR(),i);Ge(t,r,{lift:.4,scatter:.5,spin:[0,0,0],dir:[0,.2,1]});let s=null;for(const l of[-1,1]){const c=Kc(qc.amberEmissive,2.8);e.push(c);const u=Xe(pR(l),c);Ge(t,u,{lift:.38,scatter:.6,spin:[0,l*.18,0],dir:[l,0,.5]}),l===-1&&(s=u)}Ge(t,Xe(gR(),Kn(1448222)),{lift:.6,scatter:.6,spin:[0,0,0],dir:[0,0,-1]});const o=Kc(qc.amberEmissive,3);e.push(o);const a=Xe(mR(),o);Ge(t,a,{lift:.5,scatter:.7,spin:[0,0,0],dir:[0,0,-1]});for(const l of[-1,1]){const c=Kc(16183266,1.8);e.push(c),Ge(t,Xe(vR(l),c),{lift:.35,scatter:.5,spin:[0,0,0],dir:[l,0,-1]})}return t.userData.lights=e,mn(t,r,"ENGINE // COLD START","start"),mn(t,a,"REAR BAR · 1,480 mm","bar"),mn(t,s,"VERTICAL LED · 6,000 K","led"),Ua(t)}const xR=[bC,()=>zC({capZRear:Jc}),YC,uR,_R],eu=new L;function yR(){const t=new Yi;t.name="littora";const e=xR.map(r=>{const s=r();return s.visible=!1,t.add(s),s}),n=e[1],i=1+yh(n.userData.parts.length-1,n.userData.parts.length).b;return t.userData.heat={from:i,to:i+.4,latched:0},{root:t,phases:e}}function SR(t){const e=[];return t.forEach((n,i)=>{const r=n.userData.parts;for(const s of n.userData.annotations){if(!s.target)continue;let o=r.findIndex(l=>l.obj===s.target);if(o<0&&(o=r.findIndex(l=>{let c=!1;return l.obj.traverse(u=>{u===s.target&&(c=!0)}),c})),o<0)continue;const{b:a}=yh(o,r.length);e.push({...s,phase:i,seatAt:i+a})}}),e.sort((n,i)=>n.seatAt-i.seatAt)}function MR(t,e,{wheelAngle:n=0,reduced:i=!1}={}){const{root:r,phases:s}=t;for(let u=0;u<s.length;u++){const f=s[u],h=f.userData.parts,p=h.length,_=an(e-u,0,1),y=e>u-.002;if(f.visible=y,!!y)for(let m=0;m<p;m++){const d=h[m],v=c1(_,m,p),S=1-r1(v);eu.copy(d.dir).multiplyScalar(d.scatter*S),d.obj.position.set(d.base.x+eu.x,d.base.y+eu.y+d.lift*S,d.base.z+eu.z);const P=i?0:S;d.obj.rotation.set(d.baseRot.x+d.spin.x*P,d.baseRot.y+d.spin.y*P,d.baseRot.z+d.spin.z*P),d.forever&&v>=1&&(d.obj.rotation.x=d.baseRot.x+n),dC(d.mats,gh(an(v*1.4)))}}const o=r.userData.heat,a=ln(o.from,o.to,e);o.latched=Math.max(o.latched,a);const l=o.latched,c=gh(ln(0,.06,l))*(1-gh(ln(.82,1,l)));for(const u of s[1].userData.titanium)u.userData.setHeat(l,c)}function ER(t){t.root.userData.heat.latched=0}const Fa=[{at:0,pos:[3.3,.86,4.45],tgt:[0,.55,.15],fov:34},{at:1,pos:[3.95,1.02,3.65],tgt:[0,.62,.05],fov:34},{at:2,pos:[6.55,.98,.55],tgt:[0,.66,0],fov:32},{at:2.72,pos:[2.28,.52,2.52],tgt:[.8,.35,1.375],fov:30},{at:3.12,pos:[4.7,1.5,3.85],tgt:[0,.6,.2],fov:34},{at:3.55,pos:[1.35,5.55,1.75],tgt:[0,.5,-.05],fov:36},{at:4,pos:[3.65,1.92,3.95],tgt:[0,.68,0],fov:34},{at:5,pos:[4.5,1.26,5.2],tgt:[0,.68,0],fov:33},{at:6,pos:[2.7,1.16,3.3],tgt:[-1.4,.78,-.1],fov:32}];function wR(t,e,n){let i=0;for(;i<Fa.length-2&&Fa[i+1].at<t;)i++;const r=Fa[i],s=Fa[i+1],o=n1(an((t-r.at)/(s.at-r.at)));return e.set(Wr(r.pos[0],s.pos[0],o),Wr(r.pos[1],s.pos[1],o),Wr(r.pos[2],s.pos[2],o)),n.set(Wr(r.tgt[0],s.tgt[0],o),Wr(r.tgt[1],s.tgt[1],o),Wr(r.tgt[2],s.tgt[2],o)),Wr(r.fov,s.fov,o)}function TR(t,{onFrame:e,mobile:n=!1,reduced:i=!1}={}){const r=new j2({canvas:t,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(devicePixelRatio||1,n?2:1.85)),r.toneMapping=Lh,r.toneMappingExposure=1,r.outputColorSpace=un,r.shadowMap.enabled=!0,r.shadowMap.type=Qg;const s=new T_;s.background=new ze(461068),s.fog=new qd(461068,.044),s.environment=mC(r),s.environmentIntensity=1;const o=new qn(34,1,.1,220);o.position.set(...Fa[0].pos);const a=vC();s.add(a.group);const l=s.environment;let c=null,u=!1;new WA().load((window.__CAL_ASSETS__||"/")+"coast_env_1k.hdr",ue=>{ue.mapping=Jl;const oe=new Nc(r);c=oe.fromEquirectangular(ue).texture,oe.dispose(),a.setView(ue)},void 0,()=>{});const f=yR();f.root.scale.setScalar(n?.82:1),s.add(f.root);const h=new lp(16771534,1.9);h.position.set(4.2,6.4,4),h.castShadow=!0,h.shadow.mapSize.set(n?1024:2048,n?1024:2048),h.shadow.camera.near=1,h.shadow.camera.far=22,h.shadow.camera.left=-4.2,h.shadow.camera.right=4.2,h.shadow.camera.top=4.2,h.shadow.camera.bottom=-4.2,h.shadow.bias=-8e-4,h.shadow.normalBias=.022,s.add(h);const p=new lp(8370372,1.2);p.position.set(-3.4,2.9,-6.2),s.add(p);const _=new lp(12179684,.38);_.position.set(-9,2.6,.5),s.add(_),s.add(new PA(2830906,329482,.3));const y=new zA(r);y.addPass(new BA(s,o));const m=new yo(new re(1,1),.4,.72,.82);y.addPass(m),y.addPass(new GA);const d=SR(f.phases),v={progress:0,driver:null,frozen:!1,wheelAngle:0,wheelRate:0,pointer:new re,pointerSmooth:new re,size:new re(1,1)},g=new L,S=new L,P=new L,T=new L;function A(ue){const oe=Ql(ue);a.door.position.y=a.doorRest+oe.door*10.2,s.environmentIntensity=1+oe.flood*2.4,h.intensity=1.9+oe.flood*1.6,_.intensity=.38+oe.flood*7.8,p.intensity=1.2+oe.flood*1.4,m.threshold=.82-oe.flood*.62,m.strength=.4+oe.flood*.55,r.toneMappingExposure=1+oe.flood*1.15,s.fog.density=.044+oe.flood*.05,a.pad.material.opacity=.8*(1-oe.flood),a.padGlow.material.opacity=.09*(1-oe.flood);const Ae=c!==null&&oe.blowout>.4;return Ae!==u&&(u=Ae,s.environment=Ae?c:l),oe}const C=16/9,B=64,x=1.55;function E(ue,oe){if(oe>=C)return{fov:ue,pull:1};const Ae=Math.atan(Math.tan(ue*Math.PI/360)*C),Oe=Math.atan(Math.tan(Ae)/Math.max(.2,oe)),ee=B*Math.PI/360;return Oe<=ee?{fov:Oe*360/Math.PI,pull:1}:{fov:B,pull:Math.min(x,Math.tan(Oe)/Math.tan(ee))}}function z(ue){v.progress=an(Number.isFinite(ue)?ue:0,0,6);const oe=wR(v.progress,g,S),Ae=E(oe,o.aspect);Math.abs(o.fov-Ae.fov)>.001&&(o.fov=Ae.fov,o.updateProjectionMatrix()),Ae.pull!==1&&g.sub(S).multiplyScalar(Ae.pull).add(S),o.position.copy(g),o.lookAt(S),i||(P.setFromMatrixColumn(o.matrix,0),T.setFromMatrixColumn(o.matrix,1),o.position.addScaledVector(P,v.pointerSmooth.x*.32),o.position.addScaledVector(T,v.pointerSmooth.y*.2),o.lookAt(S)),A(v.progress),v.progress<1&&ER(f),MR(f,v.progress,{wheelAngle:v.wheelAngle,reduced:i})}function I(){const ue=t.clientWidth||window.innerWidth||1280,oe=t.clientHeight||window.innerHeight||720;v.size.set(ue,oe),o.aspect=ue/oe,o.updateProjectionMatrix(),r.setSize(ue,oe,!1),y.setSize(ue,oe),m.setSize(ue,oe)}function N(){y.render()}const X=new L,U=new Qs;function te(ue,oe={x:0,y:0,visible:!1}){return U.setFromObject(ue),U.getCenter(X),X.project(o),oe.visible=X.z<1,oe.x=(X.x*.5+.5)*v.size.x,oe.y=(-X.y*.5+.5)*v.size.y,oe}let D=0,q=!1,$=performance.now(),se=e||null;function j(ue){D=requestAnimationFrame(j);const oe=Math.min(.05,(ue-$)/1e3);if($=ue,v.driver&&!v.frozen&&(v.progress=v.driver()),v.pointerSmooth.lerp(v.pointer,1-Math.pow(.001,oe)),!i&&!v.frozen){const Ae=an((v.progress-2.62)/.3,0,1),Oe=an((v.progress-4.05)/.9,0,1);v.wheelRate=Ae*(.55+Oe*2.6+Ql(v.progress).flood*5),v.wheelAngle+=v.wheelRate*oe}z(v.progress),N(),se&&se(v,oe)}function fe(){q||(q=!0,$=performance.now(),D=requestAnimationFrame(j))}function V(){q=!1,cancelAnimationFrame(D)}function K(ue){const oe=v.size.x||1,Ae=v.size.y||1;v.pointer.set(ue.clientX/oe*2-1,-(ue.clientY/Ae*2-1))}window.addEventListener("pointermove",K,{passive:!0}),window.addEventListener("resize",I),I();function de(ue,oe){const Ae=r.getContext(),Oe=r.getPixelRatio(),ee=Math.round(ue*Oe),b=Math.round((v.size.y-oe)*Oe),me=new Uint8Array(4);return Ae.bindFramebuffer(Ae.FRAMEBUFFER,null),Ae.readPixels(ee,b,1,1,Ae.RGBA,Ae.UNSIGNED_BYTE,me),[me[0],me[1],me[2],me[3]]}function pe(){V(),window.removeEventListener("pointermove",K),window.removeEventListener("resize",I),y.dispose(),r.dispose(),iC(),s.traverse(ue=>{if(ue.geometry&&ue.geometry.dispose(),ue.material){const oe=Array.isArray(ue.material)?ue.material:[ue.material];for(const Ae of oe)Ae.dispose()}})}return{scene:s,camera:o,renderer:r,car:f,room:a,annotations:d,state:v,setProgress:z,setOnFrame:ue=>{se=ue},renderOnce:N,resize:I,project:te,sample:de,start:fe,stop:V,dispose:pe,isRunning:()=>q}}const AR=new Intl.NumberFormat("en-US");function CR(t,{annotations:e,project:n,isMobile:i=()=>!1}){const r=e.map(()=>({x:0,y:0,visible:!1}));let s=-1,o=!1,a=!1;const l=new WeakMap,c=h=>{let p=l.get(h);return p||(p=h.offsetWidth,p&&l.set(h,p)),p||180};function u(h){const p=i(),_=t.root.clientHeight,y=h>5.28,m=[];for(let v=0;v<e.length;v++)e[v].seatAt<=h+5e-4&&m.push(v);const d=y?[]:m.slice(-3);for(let v=0;v<e.length;v++){const g=t.annoEls[v],S=t.leaderEls[v],P=t.dotEls[v],T=d.indexOf(v);if(T<0){g.dataset.on!=="0"&&(g.dataset.on="0",g.style.opacity="0",g.classList.remove("on"),g.setAttribute("aria-hidden","true"),g.tabIndex=-1,S&&(S.style.opacity="0"),P&&(P.style.opacity="0"));continue}const A=e[v],C=an(ln(A.seatAt,A.seatAt+.05,h)),B=1-T*.26,x=C*B;if(g.dataset.on!=="1"&&(g.dataset.on="1",g.classList.add("on"),g.removeAttribute("aria-hidden"),g.tabIndex=0),g.style.opacity=String(x),p)continue;const E=n(A.target,r[v]),z=c(g),I=Math.round(_*.28+T*Math.min(84,_*.115)),N=26;if(g.style.top=`${I}px`,g.style.left=`${N}px`,!E.visible){S.style.opacity="0",P.style.opacity="0";continue}const X=E.x-46,U=N+z+10;S.setAttribute("d",`M ${E.x.toFixed(1)} ${E.y.toFixed(1)} L ${X.toFixed(1)} ${E.y.toFixed(1)} L ${U.toFixed(1)} ${I.toFixed(1)}`),S.style.opacity=String(x*.72),P.setAttribute("cx",E.x.toFixed(1)),P.setAttribute("cy",E.y.toFixed(1)),P.setAttribute("r","3.5"),P.style.opacity=String(x*.9)}}function f(h){const{index:p,phase:_}=u1(h),y=$g(h),m=Ql(h);if(p!==s){s=p,t.phaseLive.textContent=`${_.id} · ${_.name}`,t.railNumeral.textContent=_.id,t.railTitle.textContent=_.name,t.canvas.setAttribute("aria-label",_.alt),t.seq.textContent=`SEQ ${String(Math.min(p+1,5)).padStart(2,"0")} / 05`;for(let S=0;S<t.captionEls.length;S++)t.captionEls[S].classList.toggle("on",S===p);const g=Ui[Math.min(p+1,Ui.length-1)];t.nextPill.textContent=p>=Ui.length-1?"The Littora":`Next — ${g.name}`,t.nextPill.dataset.target=p>=Ui.length-1?"specs":String(p+1)}t.mass.firstChild.nodeValue=AR.format(Math.round(y.mass)),t.power.firstChild.nodeValue=String(Math.round(y.power)),t.t100.firstChild.nodeValue=y.t100===null?"—":y.t100.toFixed(1),t.temp.textContent=`BAY TEMP ${(11.4+Math.sin(h*2.7)*.28).toFixed(1)}C`,t.progressFill.style.transform=`scaleX(${(h/6).toFixed(4)})`;const d=an(1-ln(.015,.3,h));t.hero.style.opacity=d.toFixed(3),t.hero.style.visibility=d<.005?"hidden":"visible",t.scrollHint.style.opacity=String(an(1-ln(.02,.22,h))),t.blowout.style.opacity=m.blowout.toFixed(3),t.footage.style.opacity=m.video.toFixed(3),t.caption.style.opacity=m.caption.toFixed(3),t.nextPill.style.opacity=h>5.5?"0":"1";const v=t.video;if(v){!o&&h>4.5&&(o=!0,v.preload="auto",v.load());const g=m.video>.02;g!==a&&(a=g,g?v.play().catch(()=>{}):v.pause())}u(h)}return{write:f,snapshot:h=>({progress:h,...$g(h),...Ql(h)})}}function RR({withLittora:t=!0}){const e=qe.useRef(null),n=qe.useRef(null),i=qe.useRef(null),r=qe.useRef(null),s=qe.useRef(null),o=qe.useRef(null),a=qe.useRef([]),l=qe.useRef(null),c=qe.useRef(null),u=qe.useRef(null),f=qe.useRef(null),h=qe.useRef(null),p=qe.useRef(null),_=qe.useRef(null),y=qe.useRef(null),m=qe.useRef(null),d=qe.useRef(null),v=qe.useRef(null),g=qe.useRef(null),S=qe.useRef([]),P=qe.useRef([]),T=qe.useRef([]),A=qe.useRef(null),C=qe.useRef(typeof window>"u"?800:window.innerHeight),B=qe.useRef(null),x=qe.useRef(da()),[E,z]=qe.useState([]),I=qe.useMemo(()=>f1(),[]),N=qe.useRef(x.current).current,[X,U]=qe.useState(x.current);qe.useEffect(()=>{const j=fe=>{x.current=fe,U(fe)};return j(da()),h1(j)},[]),qe.useEffect(()=>{const j=TR(e.current,{mobile:N,reduced:I});return A.current=j,z(j.annotations.map((fe,V)=>({key:`${fe.key}-${V}`,text:fe.text,seatAt:fe.seatAt}))),()=>{j.dispose(),A.current=null}},[N,I]),qe.useEffect(()=>{const j=()=>{const K=n.current?.getBoundingClientRect().height||0||window.innerHeight||document.documentElement.clientHeight||800;C.current=K,i.current&&(i.current.style.height=`${Yg(K)}px`)};j(),window.addEventListener("resize",j),window.addEventListener("orientationchange",j);let fe=null;return typeof ResizeObserver=="function"&&n.current&&(fe=new ResizeObserver(j),fe.observe(n.current)),()=>{window.removeEventListener("resize",j),window.removeEventListener("orientationchange",j),fe&&fe.disconnect()}},[]),qe.useEffect(()=>{const j=A.current;if(!j||E.length===0)return;const fe=CR({root:n.current,canvas:e.current,hero:B.current,phaseLive:r.current,railNumeral:s.current,railTitle:o.current,captionEls:a.current,mass:l.current,power:c.current,t100:u.current,temp:f.current,seq:h.current,progressFill:p.current,nextPill:_.current,scrollHint:y.current,blowout:m.current,footage:d.current,caption:v.current,video:g.current,annoEls:S.current,leaderEls:P.current,dotEls:T.current},{annotations:j.annotations,project:j.project,isMobile:()=>x.current});j.state.driver=()=>{const K=n.current?.clientHeight||0;if(K&&Math.abs(K-C.current)>1){C.current=K,i.current&&(i.current.style.height=`${Yg(K)}px`);const oe=da();oe!==x.current&&(x.current=oe,U(oe))}const de=i.current,pe=de?-de.getBoundingClientRect().top:window.scrollY,ue=a1(pe,C.current);return I?Math.round(ue):ue},j.setOnFrame(K=>fe.write(K.progress)),j.setProgress(j.state.driver()),fe.write(j.state.progress),j.start();const V=K=>{j.state.frozen=!0;const de=an(Number.isFinite(K)?K:0,0,6);return j.state.progress=de,j.setProgress(de),j.renderOnce(),fe.write(de),j.start(),fe.snapshot(de)};return window.__cal={step:V,setProgress:K=>V(K),pause:()=>{j.state.frozen=!0,j.stop()},resume:()=>{j.state.frozen=!1,j.start()},sample:(K,de)=>j.sample(K,de),phases:Ui.map(K=>K.id+" "+K.name)},()=>{j.setOnFrame(null),j.stop(),window.__cal&&delete window.__cal}},[E.length,I]);const te=X?(window.__CAL_ASSETS__||"/")+"littora-drive-portrait.webm":(window.__CAL_ASSETS__||"/")+"littora-drive.webm";qe.useEffect(()=>{const j=g.current;j&&j.currentSrc&&!j.currentSrc.endsWith(te)&&j.load()},[te]);const D=qe.useCallback(j=>{const fe=i.current,V=fe?fe.getBoundingClientRect().top+window.scrollY:0;window.scrollTo({top:V+l1(j,C.current),behavior:"smooth"})},[]),q=qe.useCallback(()=>{const j=_.current?.dataset.target;if(!j||j==="specs"){document.getElementById("specs")?.scrollIntoView({behavior:"smooth"});return}D(Number(j))},[D]),$=(j,fe)=>{const V=P.current[j];V&&(V.style.strokeOpacity=fe?"1":""),V&&(V.style.strokeWidth=fe?"1.6":"")},se=X?(window.__CAL_ASSETS__||"/")+"littora-poster-portrait.webp":(window.__CAL_ASSETS__||"/")+"littora-poster.webp";return Z.jsxs(Z.Fragment,{children:[Z.jsxs("header",{className:"topbar",children:[Z.jsx("a",{className:"wordmark",href:"#top",children:"CALDERIS"}),Z.jsxs("div",{className:"topbar-right",children:[Z.jsx("span",{className:"micro phase-live",ref:r,"aria-live":"polite",children:"01 · Chassis"}),Z.jsx("a",{className:"micro link",href:"#specs",children:"The Littora"}),Z.jsxs("button",{className:"micro menu-btn",type:"button",onClick:()=>document.getElementById("specs")?.scrollIntoView({behavior:"smooth"}),children:[Z.jsx("i",{"aria-hidden":"true"}),"Menu"]})]})]}),Z.jsx("div",{className:"scroll-stage",ref:i,id:"top",children:Z.jsxs("div",{className:"sticky",ref:n,children:[Z.jsx("canvas",{className:"stage",ref:e,role:"img","aria-label":Ui[0].alt}),Z.jsx("div",{className:"dof","aria-hidden":"true"}),Z.jsx("div",{className:"vignette","aria-hidden":"true"}),Z.jsx("div",{className:"grain","aria-hidden":"true"}),Z.jsx("span",{className:"hud-corner tl","aria-hidden":"true"}),Z.jsx("span",{className:"hud-corner tr","aria-hidden":"true"}),Z.jsx("span",{className:"hud-corner bl","aria-hidden":"true"}),Z.jsx("span",{className:"hud-corner br","aria-hidden":"true"}),Z.jsx("div",{className:"hud-label tl micro",children:"COAST ROAD — LIVE"}),Z.jsx("div",{className:"hud-label tr micro",ref:f,children:"BAY TEMP 11.4C"}),Z.jsx(QS,{rootRef:B}),Z.jsx("svg",{className:"leaders","aria-hidden":"true",children:E.map((j,fe)=>Z.jsxs("g",{children:[Z.jsx("path",{ref:V=>P.current[fe]=V,d:""}),Z.jsx("circle",{ref:V=>T.current[fe]=V,cx:"0",cy:"0",r:"3.5"})]},j.key))}),Z.jsx("div",{className:"labels",children:E.map((j,fe)=>Z.jsx("button",{type:"button",className:"anno",ref:V=>S.current[fe]=V,tabIndex:-1,"aria-hidden":"true",onFocus:()=>$(fe,!0),onBlur:()=>$(fe,!1),onMouseEnter:()=>$(fe,!0),onMouseLeave:()=>$(fe,!1),onClick:()=>D(j.seatAt+.02),children:j.text},j.key))}),Z.jsxs("aside",{className:"rail",children:[Z.jsx("div",{className:"rail-numeral",ref:s,children:"01"}),Z.jsx("div",{className:"rail-title",ref:o,children:"Chassis"}),Z.jsx("div",{className:"rail-captions",children:Ui.map((j,fe)=>Z.jsx("p",{className:`rail-caption${fe===0?" on":""}`,ref:V=>a.current[fe]=V,children:j.caption.map((V,K)=>Z.jsxs("span",{children:[V,K<j.caption.length-1?Z.jsx("br",{}):null]},K))},j.key))}),Z.jsxs("dl",{className:"spec-block",children:[Z.jsxs("div",{className:"spec-row",children:[Z.jsx("dt",{children:"Mass"}),Z.jsxs("dd",{ref:l,children:["0",Z.jsx("small",{children:"KG"})]})]}),Z.jsxs("div",{className:"spec-row",children:[Z.jsx("dt",{children:"Power"}),Z.jsxs("dd",{ref:c,children:["0",Z.jsx("small",{children:"HP"})]})]}),Z.jsxs("div",{className:"spec-row",children:[Z.jsx("dt",{children:"0–100"}),Z.jsxs("dd",{ref:u,children:["—",Z.jsx("small",{children:"S"})]})]})]})]}),Z.jsx("div",{className:"scroll-hint",ref:y,children:Z.jsxs("span",{className:"scroll-hint-in micro",children:[Z.jsx("span",{className:"line","aria-hidden":"true"}),"Scroll to assemble"]})}),Z.jsx("button",{className:"next-pill",type:"button",ref:_,onClick:q,"data-target":"1",children:"Next — Powertrain"}),Z.jsxs("div",{className:"bottom-rule micro",children:[Z.jsx("div",{className:"progress-track","aria-hidden":"true",children:Z.jsx("div",{className:"progress-fill",ref:p})}),Z.jsx("span",{ref:h,children:"SEQ 01 / 05"}),Z.jsx("span",{children:"CALDERIS // ASSEMBLY"})]}),Z.jsx("div",{className:"blowout",ref:m,"aria-hidden":"true"}),Z.jsx("div",{className:"footage",ref:d,"aria-hidden":"true",children:I?Z.jsx("img",{className:"poster",src:se,alt:"The finished Littora Type 01 on a cliff road above the sea.",width:X?720:1600,height:X?1280:900}):Z.jsx("video",{ref:g,muted:!0,loop:!0,playsInline:!0,preload:"none",poster:se,src:te})}),Z.jsxs("div",{className:"footage-caption",ref:v,children:[Z.jsx("p",{children:"The road begins where the workshop ends."}),Z.jsx("div",{className:"mark",children:"CALDERIS"}),Z.jsx("div",{className:"micro",children:"LITTORA · TYPE 01"})]})]})}),t?Z.jsx(t1,{}):null]})}function bR(){const t=()=>document.documentElement.classList.add("fonts-ready");document.fonts&&document.fonts.ready?(document.fonts.ready.then(t),setTimeout(t,2500)):t()}function PR(){const t=()=>{document.documentElement.style.setProperty("--cal-vw",document.documentElement.clientWidth+"px")};t(),addEventListener("resize",t),addEventListener("orientationchange",t)}function vx(){const t=document.querySelector("[data-calderis-stage]");!t||t.dataset.calderisMounted==="1"||(t.dataset.calderisMounted="1",Xg(t).render(Z.jsx(RR,{withLittora:!1})))}bR(),PR(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vx,{once:!0}):vx()})();
