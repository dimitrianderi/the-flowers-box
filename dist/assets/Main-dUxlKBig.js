import{_ as W,r as we,u as Pe,a as De,o as Ae,b as q,c as I,d as C,e as S,F as U,f as Q,g as Be,w as Ve,t as ae,h as Xe,n as er,T as rr,i as R,j as xe,k as tr,l as nr,m as ar}from"./index-9yJCHkJH.js";import{i as ir}from"./urls-PmfEASzh.js";import{A as or}from"./AppSections-Fjic8TVS.js";const te=[{title:"wedding bouquets",view:"Wedding"},{title:"birthday bouquets",view:"Birthday"},{title:"festive bouquets",view:"Festive"}],ur={setup(){const e=we(0),r=we(null),n=Pe(),t=De(),a=c=>{clearInterval(r.value),s(),c==="right"?o():u()},o=()=>{e.value===te.length-1?e.value=0:e.value++},u=()=>{e.value===0?e.value=te.length-1:e.value--},s=()=>{r.value=setInterval(o,4e3)},i=()=>{clearInterval(r.value)},d=c=>{t.clearFilters(),t.addView(c),n.push("/bouquets")};return Ae(()=>{s()}),{currentSlide:e,slides:te,changeSlide:a,stopInterval:i,playInterval:s,setView:d,imageUrls:ir}}},sr={class:"header"},cr={class:"header__slider"},lr={key:0},fr=["src"],dr={class:"slide__info"},vr={class:"slide__info-title"},hr=["onClick"],gr={class:"header__marks"},mr=["onClick"];function pr(e,r,n,t,a,o){const u=q("font-awesome-icon");return I(),C("header",sr,[S("div",cr,[(I(!0),C(U,null,Q(t.slides,(s,i)=>(I(),Be(rr,{class:"slide",key:s.src,style:er({"z-index":i===t.currentSlide?1:0}),name:"fade",mode:"out-in"},{default:Ve(()=>[i===t.currentSlide?(I(),C("div",lr,[S("img",{class:"slide__img",src:t.imageUrls.slides[i].url,loading:"lazy",alt:"slide"},null,8,fr),S("div",dr,[S("h2",vr,ae(s.title),1),S("button",{class:"slide__info-btn",onClick:d=>t.setView(s.view),onMouseleave:r[0]||(r[0]=(...d)=>t.playInterval&&t.playInterval(...d)),onMouseover:r[1]||(r[1]=(...d)=>t.stopInterval&&t.stopInterval(...d))}," more ",40,hr)])])):Xe("",!0)]),_:2},1032,["style"]))),128))]),(I(),C(U,null,Q(["left","right"],(s,i)=>R(u,{key:i,class:xe("header-icon "+s),icon:"fa-solid fa-chevron-"+s,onClick:d=>t.changeSlide(s)},null,8,["class","icon","onClick"])),64)),S("div",gr,[(I(!0),C(U,null,Q(t.slides.length,s=>(I(),C("span",{class:xe(["header__marks-mark",{active:t.currentSlide===s-1}]),key:s,onClick:i=>t.currentSlide=s-1,onMouseleave:r[2]||(r[2]=(...i)=>t.playInterval&&t.playInterval(...i)),onMouseover:r[3]||(r[3]=(...i)=>t.stopInterval&&t.stopInterval(...i))},null,42,mr))),128))])])}const yr=W(ur,[["render",pr],["__scopeId","data-v-0c478fc6"]]),Me=tr([{newValue:13,value:0,title:"Years of work"},{newValue:15,value:0,title:"Flower sorts"},{newValue:44,value:0,title:"Arranged bouquets"},{newValue:350,value:0,title:"Happy clients"}]);var Ee={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ue={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},_r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],K={CSS:{},springs:{}};function D(e,r,n){return Math.min(Math.max(e,r),n)}function N(e,r){return e.indexOf(r)>-1}function ne(e,r){return e.apply(null,r)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return N(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Ee.hasOwnProperty(e)&&!ue.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Fe(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function Oe(e,r){var n=Fe(e),t=D(l.und(n[0])?1:n[0],.1,100),a=D(l.und(n[1])?100:n[1],.1,100),o=D(l.und(n[2])?10:n[2],.1,100),u=D(l.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/t),i=o/(2*Math.sqrt(a*t)),d=i<1?s*Math.sqrt(1-i*i):0,c=1,f=i<1?(i*s+-u)/d:-u+s;function m(p){var v=r?r*p/1e3:p;return i<1?v=Math.exp(-v*i*s)*(c*Math.cos(d*v)+f*Math.sin(d*v)):v=(c+f*v)*Math.exp(-v*s),p===0||p===1?p:1-v}function M(){var p=K.springs[e];if(p)return p;for(var v=1/6,_=0,w=0;;)if(_+=v,m(_)===1){if(w++,w>=16)break}else w=0;var g=_*v*1e3;return K.springs[e]=g,g}return r?m:M}function br(e){return e===void 0&&(e=10),function(r){return Math.ceil(D(r,1e-6,1)*e)*(1/e)}}var wr=function(){var e=11,r=1/(e-1);function n(c,f){return 1-3*f+3*c}function t(c,f){return 3*f-6*c}function a(c){return 3*c}function o(c,f,m){return((n(f,m)*c+t(f,m))*c+a(f))*c}function u(c,f,m){return 3*n(f,m)*c*c+2*t(f,m)*c+a(f)}function s(c,f,m,M,p){var v,_,w=0;do _=f+(m-f)/2,v=o(_,M,p)-c,v>0?m=_:f=_;while(Math.abs(v)>1e-7&&++w<10);return _}function i(c,f,m,M){for(var p=0;p<4;++p){var v=u(f,m,M);if(v===0)return f;var _=o(f,m,M)-c;f-=_/v}return f}function d(c,f,m,M){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var p=new Float32Array(e);if(c!==f||m!==M)for(var v=0;v<e;++v)p[v]=o(v*r,c,m);function _(w){for(var g=0,h=1,k=e-1;h!==k&&p[h]<=w;++h)g+=r;--h;var V=(w-p[h])/(p[h+1]-p[h]),b=g+V*r,E=u(b,c,m);return E>=.001?i(w,b,c,m):E===0?b:s(w,g,g+r,c,m)}return function(w){return c===f&&m===M||w===0||w===1?w:o(_(w),f,M)}}return d}(),Le=function(){var e={linear:function(){return function(t){return t}}},r={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var a,o=4;t<((a=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((a*3-2)/22-t,2)}},Elastic:function(t,a){t===void 0&&(t=1),a===void 0&&(a=.5);var o=D(t,1,10),u=D(a,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(t,a){r[t]=function(){return function(o){return Math.pow(o,a+2)}}}),Object.keys(r).forEach(function(t){var a=r[t];e["easeIn"+t]=a,e["easeOut"+t]=function(o,u){return function(s){return 1-a(o,u)(1-s)}},e["easeInOut"+t]=function(o,u){return function(s){return s<.5?a(o,u)(s*2)/2:1-a(o,u)(s*-2+2)/2}},e["easeOutIn"+t]=function(o,u){return function(s){return s<.5?(1-a(o,u)(1-s*2))/2:(a(o,u)(s*2-1)+1)/2}}}),e}();function se(e,r){if(l.fnc(e))return e;var n=e.split("(")[0],t=Le[n],a=Fe(e);switch(n){case"spring":return Oe(e,r);case"cubicBezier":return ne(wr,a);case"steps":return ne(br,a);default:return ne(t,a)}}function qe(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function Y(e,r){for(var n=e.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var u=e[o];r.call(t,u,o,e)&&a.push(u)}return a}function J(e){return e.reduce(function(r,n){return r.concat(l.arr(n)?J(n):n)},[])}function ke(e){return l.arr(e)?e:(l.str(e)&&(e=qe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ce(e,r){return e.some(function(n){return n===r})}function le(e){var r={};for(var n in e)r[n]=e[n];return r}function ie(e,r){var n=le(e);for(var t in e)n[t]=r.hasOwnProperty(t)?r[t]:e[t];return n}function G(e,r){var n=le(e);for(var t in r)n[t]=l.und(e[t])?r[t]:e[t];return n}function xr(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function Mr(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(s,i,d,c){return i+i+d+d+c+c}),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(t[1],16),o=parseInt(t[2],16),u=parseInt(t[3],16);return"rgba("+a+","+o+","+u+",1)"}function kr(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,t=parseInt(r[2],10)/100,a=parseInt(r[3],10)/100,o=r[4]||1;function u(m,M,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?m+(M-m)*6*p:p<1/2?M:p<2/3?m+(M-m)*(2/3-p)*6:m}var s,i,d;if(t==0)s=i=d=a;else{var c=a<.5?a*(1+t):a+t-a*t,f=2*a-c;s=u(f,c,n+1/3),i=u(f,c,n),d=u(f,c,n-1/3)}return"rgba("+s*255+","+i*255+","+d*255+","+o+")"}function Ir(e){if(l.rgb(e))return xr(e);if(l.hex(e))return Mr(e);if(l.hsl(e))return kr(e)}function B(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function Tr(e){if(N(e,"translate")||e==="perspective")return"px";if(N(e,"rotate")||N(e,"skew"))return"deg"}function oe(e,r){return l.fnc(e)?e(r.target,r.id,r.total):e}function A(e,r){return e.getAttribute(r)}function fe(e,r,n){var t=B(r);if(ce([n,"deg","rad","turn"],t))return r;var a=K.CSS[r+n];if(!l.und(a))return a;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var d=i*parseFloat(r);return K.CSS[r+n]=d,d}function $e(e,r,n){if(r in e.style){var t=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[r]||getComputedStyle(e).getPropertyValue(t)||"0";return n?fe(e,a,n):a}}function de(e,r){if(l.dom(e)&&!l.inp(e)&&(!l.nil(A(e,r))||l.svg(e)&&e[r]))return"attribute";if(l.dom(e)&&ce(_r,r))return"transform";if(l.dom(e)&&r!=="transform"&&$e(e,r))return"css";if(e[r]!=null)return"object"}function je(e){if(l.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,t=new Map,a;a=n.exec(r);)t.set(a[1],a[2]);return t}}function Cr(e,r,n,t){var a=N(r,"scale")?1:0+Tr(r),o=je(e).get(r)||a;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),t?fe(e,o,t):o}function ve(e,r,n,t){switch(de(e,r)){case"transform":return Cr(e,r,t,n);case"css":return $e(e,r,n);case"attribute":return A(e,r);default:return e[r]||0}}function he(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var t=B(e)||0,a=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function ze(e,r){if(l.col(e))return Ir(e);if(/\s/g.test(e))return e;var n=B(e),t=n?e.substr(0,e.length-n.length):e;return r?t+r:t}function ge(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function Sr(e){return Math.PI*2*A(e,"r")}function Pr(e){return A(e,"width")*2+A(e,"height")*2}function Dr(e){return ge({x:A(e,"x1"),y:A(e,"y1")},{x:A(e,"x2"),y:A(e,"y2")})}function He(e){for(var r=e.points,n=0,t,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(n+=ge(t,o)),t=o}return n}function Ar(e){var r=e.points;return He(e)+ge(r.getItem(r.numberOfItems-1),r.getItem(0))}function Re(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Sr(e);case"rect":return Pr(e);case"line":return Dr(e);case"polyline":return He(e);case"polygon":return Ar(e)}}function Br(e){var r=Re(e);return e.setAttribute("stroke-dasharray",r),r}function Vr(e){for(var r=e.parentNode;l.svg(r)&&l.svg(r.parentNode);)r=r.parentNode;return r}function Ue(e,r){var n=r||{},t=n.el||Vr(e),a=t.getBoundingClientRect(),o=A(t,"viewBox"),u=a.width,s=a.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:t,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function Er(e,r){var n=l.str(e)?qe(e)[0]:e,t=r||100;return function(a){return{property:a,el:n,svg:Ue(n),totalLength:Re(n)*(t/100)}}}function Fr(e,r,n){function t(c){c===void 0&&(c=0);var f=r+c>=1?r+c:0;return e.el.getPointAtLength(f)}var a=Ue(e.el,e.svg),o=t(),u=t(-1),s=t(1),i=n?1:a.w/a.vW,d=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*i;case"y":return(o.y-a.y)*d;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function Ie(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=ze(l.pth(e)?e.totalLength:e,r)+"";return{original:t,numbers:t.match(n)?t.match(n).map(Number):[0],strings:l.str(e)||r?t.split(n):[]}}function me(e){var r=e?J(l.arr(e)?e.map(ke):ke(e)):[];return Y(r,function(n,t,a){return a.indexOf(n)===t})}function Ne(e){var r=me(e);return r.map(function(n,t){return{target:n,id:t,total:r.length,transforms:{list:je(n)}}})}function Or(e,r){var n=le(r);if(/^spring/.test(n.easing)&&(n.duration=Oe(n.easing)),l.arr(e)){var t=e.length,a=t===2&&!l.obj(e[0]);a?e={value:e}:l.fnc(r.duration)||(n.duration=r.duration/t)}var o=l.arr(e)?e:[e];return o.map(function(u,s){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=s?0:r.delay),l.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return G(u,n)})}function Lr(e){for(var r=Y(J(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},t=function(o){var u=r[o];n[u]=e.map(function(s){var i={};for(var d in s)l.key(d)?d==u&&(i.value=s[d]):i[d]=s[d];return i})},a=0;a<r.length;a++)t(a);return n}function qr(e,r){var n=[],t=r.keyframes;t&&(r=G(Lr(t),r));for(var a in r)l.key(a)&&n.push({name:a,tweens:Or(r[a],e)});return n}function $r(e,r){var n={};for(var t in e){var a=oe(e[t],r);l.arr(a)&&(a=a.map(function(o){return oe(o,r)}),a.length===1&&(a=a[0])),n[t]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function jr(e,r){var n;return e.tweens.map(function(t){var a=$r(t,r),o=a.value,u=l.arr(o)?o[1]:o,s=B(u),i=ve(r.target,e.name,s,r),d=n?n.to.original:i,c=l.arr(o)?o[0]:d,f=B(c)||B(i),m=s||f;return l.und(u)&&(u=d),a.from=Ie(c,m),a.to=Ie(he(u,c),m),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=se(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(r.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a})}var We={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,t,a){if(t.list.set(r,n),r===t.last||a){var o="";t.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function Ze(e,r){var n=Ne(e);n.forEach(function(t){for(var a in r){var o=oe(r[a],t),u=t.target,s=B(o),i=ve(u,a,s,t),d=s||B(i),c=he(ze(o,d),i),f=de(u,a);We[f](u,a,c,t.transforms,!0)}})}function zr(e,r){var n=de(e.target,r.name);if(n){var t=jr(r,e),a=t[t.length-1];return{type:n,property:r.name,animatable:e,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}function Hr(e,r){return Y(J(e.map(function(n){return r.map(function(t){return zr(n,t)})})),function(n){return!l.und(n)})}function Qe(e,r){var n=e.length,t=function(o){return o.timelineOffset?o.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map(function(o){return t(o)+o.duration})):r.duration,a.delay=n?Math.min.apply(Math,e.map(function(o){return t(o)+o.delay})):r.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map(function(o){return t(o)+o.duration-o.endDelay})):r.endDelay,a}var Te=0;function Rr(e){var r=ie(Ee,e),n=ie(ue,e),t=qr(n,e),a=Ne(e.targets),o=Hr(a,t),u=Qe(o,n),s=Te;return Te++,G(r,{id:s,children:[],animatables:a,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var P=[],Ke=function(){var e;function r(){!e&&(!Ce()||!y.suspendWhenDocumentHidden)&&P.length>0&&(e=requestAnimationFrame(n))}function n(a){for(var o=P.length,u=0;u<o;){var s=P[u];s.paused?(P.splice(u,1),o--):(s.tick(a),u++)}e=u>0?requestAnimationFrame(n):void 0}function t(){y.suspendWhenDocumentHidden&&(Ce()?e=cancelAnimationFrame(e):(P.forEach(function(a){return a._onDocumentVisibility()}),Ke()))}return typeof document<"u"&&document.addEventListener("visibilitychange",t),r}();function Ce(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,n=0,t=0,a,o=0,u=null;function s(g){var h=window.Promise&&new Promise(function(k){return u=k});return g.finished=h,h}var i=Rr(e);s(i);function d(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(h){return h.reversed=i.reversed})}function c(g){return i.reversed?i.duration-g:g}function f(){r=0,n=c(i.currentTime)*(1/y.speed)}function m(g,h){h&&h.seek(g-h.timelineOffset)}function M(g){if(i.reversePlayback)for(var k=o;k--;)m(g,a[k]);else for(var h=0;h<o;h++)m(g,a[h])}function p(g){for(var h=0,k=i.animations,V=k.length;h<V;){var b=k[h],E=b.animatable,$=b.tweens,F=$.length-1,x=$[F];F&&(x=Y($,function(Ge){return g<Ge.end})[0]||x);for(var O=D(g-x.start-x.delay,0,x.duration)/x.duration,Z=isNaN(O)?1:x.easing(O),T=x.to.strings,X=x.round,ee=[],Je=x.to.numbers.length,L=void 0,j=0;j<Je;j++){var z=void 0,pe=x.to.numbers[j],ye=x.from.numbers[j]||0;x.isPath?z=Fr(x.value,Z*pe,x.isPathTargetInsideSVG):z=ye+Z*(pe-ye),X&&(x.isColor&&j>2||(z=Math.round(z*X)/X)),ee.push(z)}var _e=T.length;if(!_e)L=ee[0];else{L=T[0];for(var H=0;H<_e;H++){T[H];var be=T[H+1],re=ee[H];isNaN(re)||(be?L+=re+be:L+=re+" ")}}We[b.type](E.target,b.property,L,E.transforms),b.currentValue=L,h++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function _(){i.remaining&&i.remaining!==!0&&i.remaining--}function w(g){var h=i.duration,k=i.delay,V=h-i.endDelay,b=c(g);i.progress=D(b/h*100,0,100),i.reversePlayback=b<i.currentTime,a&&M(b),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),b<=k&&i.currentTime!==0&&p(0),(b>=V&&i.currentTime!==h||!h)&&p(h),b>k&&b<V?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),p(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=D(b,0,h),i.began&&v("update"),g>=h&&(n=0,_(),i.remaining?(r=t,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&d()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,a=i.children,o=a.length;for(var h=o;h--;)i.children[h].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(g,h){return Ze(g,h),i},i.tick=function(g){t=g,r||(r=t),w((t+(n-r))*y.speed)},i.seek=function(g){w(c(g))},i.pause=function(){i.paused=!0,f()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,P.push(i),f(),Ke())},i.reverse=function(){d(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var h=me(g);Ye(h,i)},i.reset(),i.autoplay&&i.play(),i}function Se(e,r){for(var n=r.length;n--;)ce(e,r[n].animatable.target)&&r.splice(n,1)}function Ye(e,r){var n=r.animations,t=r.children;Se(e,n);for(var a=t.length;a--;){var o=t[a],u=o.animations;Se(e,u),!u.length&&!o.children.length&&t.splice(a,1)}!n.length&&!t.length&&r.pause()}function Ur(e){for(var r=me(e),n=P.length;n--;){var t=P[n];Ye(r,t)}}function Nr(e,r){r===void 0&&(r={});var n=r.direction||"normal",t=r.easing?se(r.easing):null,a=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",d=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,M=B(c?e[1]:e)||0,p=r.start||0+(c?f:0),v=[],_=0;return function(w,g,h){if(s&&(u=0),i&&(u=(h-1)/2),d&&(u=h-1),!v.length){for(var k=0;k<h;k++){if(!a)v.push(Math.abs(u-k));else{var V=i?(a[0]-1)/2:u%a[0],b=i?(a[1]-1)/2:Math.floor(u/a[0]),E=k%a[0],$=Math.floor(k/a[0]),F=V-E,x=b-$,O=Math.sqrt(F*F+x*x);o==="x"&&(O=-F),o==="y"&&(O=-x),v.push(O)}_=Math.max.apply(Math,v)}t&&(v=v.map(function(T){return t(T/_)*_})),n==="reverse"&&(v=v.map(function(T){return o?T<0?T*-1:-T:Math.abs(_-T)}))}var Z=c?(m-f)/_:f;return p+Z*(Math.round(v[g]*100)/100)+M}}function Wr(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(n,t){var a=P.indexOf(r),o=r.children;a>-1&&P.splice(a,1);function u(m){m.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=G(n,ie(ue,e));i.targets=i.targets||e.targets;var d=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=l.und(t)?d:he(t,d),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var f=Qe(o,e);return r.delay=f.delay,r.endDelay=f.endDelay,r.duration=f.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=P;y.remove=Ur;y.get=ve;y.set=Ze;y.convertPx=fe;y.path=Er;y.setDashoffset=Br;y.stagger=Nr;y.timeline=Wr;y.easing=se;y.penner=Le;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const Zr=(e,r)=>{y({targets:e,value:r,easing:"easeOutCubic",round:1,duration:2e3})},Qr={setup(){const e=()=>{window.scrollY>=85&&Me.forEach(r=>{Zr(r,+r.newValue)})};return Ae(()=>window.addEventListener("scroll",e)),{achievements:Me}}},Kr={class:"achievements"},Yr={class:"achievements__container container"},Jr={class:"achievements__item-value"},Gr={class:"achievements__item-title"};function Xr(e,r,n,t,a,o){return I(),C("section",Kr,[S("div",Yr,[(I(!0),C(U,null,Q(t.achievements,(u,s)=>(I(),C("div",{class:"achievements__item",key:s},[S("span",Jr,ae(u.value),1),S("span",Gr,ae(u.title.toUpperCase()),1)]))),128))])])}const et=W(Qr,[["render",Xr]]),rt=[{title:"Designer bouquets",author:"Designer"},{title:"Custom bouquets",author:"Custom"},{title:"My bouquets",author:"My"}],tt={components:{AppSections:or},setup(){const e=De(),r=Pe();return{cards:rt,sendAuthor:t=>{const a=t;e.clearFilters(),e.addAuthor(a),r.push("/bouquets")}}}},nt=S("button",{class:"portfolio-btn"},"see all bouquets",-1);function at(e,r,n,t,a,o){const u=q("app-sections");return I(),Be(u,{title:"Portfolio",description:"a selection of our work",btn:"more",name:"portfolio",cards:t.cards,getData:"author",onGetData:r[0]||(r[0]=s=>t.sendAuthor(s))},{default:Ve(()=>[nt]),_:1},8,["cards"])}const it=W(tt,[["render",at]]),ot={},ut={class:"builder"},st=nr('<div class="builder__header"></div><div class="container builder__container"><h2 class="builder-title">Bouquet Builder</h2><span class="builder-description">create your own flower bouquet using our exclusive bouquet builder!</span><article class="builder-text"> Create unique, personalised bouquets online and make your flower bouquet extra special. Make your own bouquet choosing your favourite flowers and you’re guaranteed to be satisfied. Buying a bouquet for a loved one? Pick flowers that you know they’ll love and you’ll definitely make them smile! </article><button class="builder-btn">build your bouquet!</button></div>',2),ct=[st];function lt(e,r,n,t,a,o){return I(),C("div",ut,ct)}const ft=W(ot,[["render",lt]]),dt={components:{TheHeader:yr,TheFooter:ar,TheAchievements:et,ThePortfolio:it,TheBuilder:ft}};function vt(e,r,n,t,a,o){const u=q("the-header"),s=q("the-achievements"),i=q("the-portfolio"),d=q("the-builder");return I(),C(U,null,[R(u),S("main",null,[R(s),R(i),R(d)])],64)}const pt=W(dt,[["render",vt],["__scopeId","data-v-7a0351ef"]]);export{pt as default};