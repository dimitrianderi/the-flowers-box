import{_ as W,r as xe,u as De,a as Be,o as Ae,b as E,c as T,d as P,e as I,F as U,f as Q,g as Fe,w as ue,t as ae,h as Xe,n as er,T as rr,i as $,j as Me,k as tr,l as nr,m as ar}from"./index-6dOHU5d9.js";import{g as ir}from"./getImageUrl-GZGfcVc1.js";import{A as or}from"./AppSections-HasNbwAU.js";const te=[{title:"wedding bouquets",view:"Wedding"},{title:"birthday bouquets",view:"Birthday"},{title:"festive bouquets",view:"Festive"}],ur={setup(){const e=xe(0),r=xe(null),n=De(),t=Be(),a=c=>{clearInterval(r.value),s(),c==="right"?o():u()},o=()=>{e.value===te.length-1?e.value=0:e.value++},u=()=>{e.value===0?e.value=te.length-1:e.value--},s=()=>{r.value=setInterval(o,4e3)},i=()=>{clearInterval(r.value)},d=c=>{t.clearFilters(),t.addView(c),n.push("/bouquets")};return Ae(()=>{s()}),{currentSlide:e,slides:te,changeSlide:a,stopInterval:i,playInterval:s,setView:d,getImageUrl:ir}}},sr={class:"header"},cr={class:"header__slider"},lr={key:0},fr=["src"],dr={class:"slide__info"},vr={class:"slide__info-title"},hr=["onClick"],gr={class:"header__marks"},mr=["onClick"];function pr(e,r,n,t,a,o){const u=E("font-awesome-icon");return T(),P("header",sr,[I("div",cr,[(T(!0),P(U,null,Q(t.slides,(s,i)=>(T(),Fe(rr,{class:"slide",key:s.src,style:er({"z-index":i===t.currentSlide?1:0}),name:"fade",mode:"out-in"},{default:ue(()=>[i===t.currentSlide?(T(),P("div",lr,[I("img",{class:"slide__img",src:t.getImageUrl(`slide${i+1}`),loading:"lazy",alt:"slide"},null,8,fr),I("div",dr,[I("h2",vr,ae(s.title),1),I("button",{class:"slide__Finfo-btn",onClick:d=>t.setView(s.view),onMouseleave:r[0]||(r[0]=(...d)=>t.playInterval&&t.playInterval(...d)),onMouseover:r[1]||(r[1]=(...d)=>t.stopInterval&&t.stopInterval(...d))}," more ",40,hr)])])):Xe("",!0)]),_:2},1032,["style"]))),128))]),(T(),P(U,null,Q(["left","right"],(s,i)=>$(u,{key:i,class:Me("header-icon "+s),icon:"fa-solid fa-chevron-"+s,onClick:d=>t.changeSlide(s)},null,8,["class","icon","onClick"])),64)),I("div",gr,[(T(!0),P(U,null,Q(t.slides.length,s=>(T(),P("span",{class:Me(["header__marks-mark",{active:t.currentSlide===s-1}]),key:s,onClick:i=>t.currentSlide=s-1,onMouseleave:r[2]||(r[2]=(...i)=>t.playInterval&&t.playInterval(...i)),onMouseover:r[3]||(r[3]=(...i)=>t.stopInterval&&t.stopInterval(...i))},null,42,mr))),128))])])}const yr=W(ur,[["render",pr],["__scopeId","data-v-d7e7b5c5"]]),ke=tr([{newValue:13,value:0,title:"Years of work"},{newValue:15,value:0,title:"Flower sorts"},{newValue:44,value:0,title:"Arranged bouquets"},{newValue:350,value:0,title:"Happy clients"}]);var Ve={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},se={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},_r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],K={CSS:{},springs:{}};function D(e,r,n){return Math.min(Math.max(e,r),n)}function N(e,r){return e.indexOf(r)>-1}function ne(e,r){return e.apply(null,r)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return N(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Ve.hasOwnProperty(e)&&!se.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Ee(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function Oe(e,r){var n=Ee(e),t=D(l.und(n[0])?1:n[0],.1,100),a=D(l.und(n[1])?100:n[1],.1,100),o=D(l.und(n[2])?10:n[2],.1,100),u=D(l.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/t),i=o/(2*Math.sqrt(a*t)),d=i<1?s*Math.sqrt(1-i*i):0,c=1,f=i<1?(i*s+-u)/d:-u+s;function m(p){var v=r?r*p/1e3:p;return i<1?v=Math.exp(-v*i*s)*(c*Math.cos(d*v)+f*Math.sin(d*v)):v=(c+f*v)*Math.exp(-v*s),p===0||p===1?p:1-v}function M(){var p=K.springs[e];if(p)return p;for(var v=1/6,_=0,w=0;;)if(_+=v,m(_)===1){if(w++,w>=16)break}else w=0;var g=_*v*1e3;return K.springs[e]=g,g}return r?m:M}function br(e){return e===void 0&&(e=10),function(r){return Math.ceil(D(r,1e-6,1)*e)*(1/e)}}var wr=function(){var e=11,r=1/(e-1);function n(c,f){return 1-3*f+3*c}function t(c,f){return 3*f-6*c}function a(c){return 3*c}function o(c,f,m){return((n(f,m)*c+t(f,m))*c+a(f))*c}function u(c,f,m){return 3*n(f,m)*c*c+2*t(f,m)*c+a(f)}function s(c,f,m,M,p){var v,_,w=0;do _=f+(m-f)/2,v=o(_,M,p)-c,v>0?m=_:f=_;while(Math.abs(v)>1e-7&&++w<10);return _}function i(c,f,m,M){for(var p=0;p<4;++p){var v=u(f,m,M);if(v===0)return f;var _=o(f,m,M)-c;f-=_/v}return f}function d(c,f,m,M){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var p=new Float32Array(e);if(c!==f||m!==M)for(var v=0;v<e;++v)p[v]=o(v*r,c,m);function _(w){for(var g=0,h=1,k=e-1;h!==k&&p[h]<=w;++h)g+=r;--h;var F=(w-p[h])/(p[h+1]-p[h]),b=g+F*r,V=u(b,c,m);return V>=.001?i(w,b,c,m):V===0?b:s(w,g,g+r,c,m)}return function(w){return c===f&&m===M||w===0||w===1?w:o(_(w),f,M)}}return d}(),qe=function(){var e={linear:function(){return function(t){return t}}},r={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var a,o=4;t<((a=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((a*3-2)/22-t,2)}},Elastic:function(t,a){t===void 0&&(t=1),a===void 0&&(a=.5);var o=D(t,1,10),u=D(a,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(t,a){r[t]=function(){return function(o){return Math.pow(o,a+2)}}}),Object.keys(r).forEach(function(t){var a=r[t];e["easeIn"+t]=a,e["easeOut"+t]=function(o,u){return function(s){return 1-a(o,u)(1-s)}},e["easeInOut"+t]=function(o,u){return function(s){return s<.5?a(o,u)(s*2)/2:1-a(o,u)(s*-2+2)/2}},e["easeOutIn"+t]=function(o,u){return function(s){return s<.5?(1-a(o,u)(1-s*2))/2:(a(o,u)(s*2-1)+1)/2}}}),e}();function ce(e,r){if(l.fnc(e))return e;var n=e.split("(")[0],t=qe[n],a=Ee(e);switch(n){case"spring":return Oe(e,r);case"cubicBezier":return ne(wr,a);case"steps":return ne(br,a);default:return ne(t,a)}}function Le(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function Y(e,r){for(var n=e.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var u=e[o];r.call(t,u,o,e)&&a.push(u)}return a}function J(e){return e.reduce(function(r,n){return r.concat(l.arr(n)?J(n):n)},[])}function Ie(e){return l.arr(e)?e:(l.str(e)&&(e=Le(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function le(e,r){return e.some(function(n){return n===r})}function fe(e){var r={};for(var n in e)r[n]=e[n];return r}function ie(e,r){var n=fe(e);for(var t in e)n[t]=r.hasOwnProperty(t)?r[t]:e[t];return n}function G(e,r){var n=fe(e);for(var t in r)n[t]=l.und(e[t])?r[t]:e[t];return n}function xr(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function Mr(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(s,i,d,c){return i+i+d+d+c+c}),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(t[1],16),o=parseInt(t[2],16),u=parseInt(t[3],16);return"rgba("+a+","+o+","+u+",1)"}function kr(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,t=parseInt(r[2],10)/100,a=parseInt(r[3],10)/100,o=r[4]||1;function u(m,M,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?m+(M-m)*6*p:p<1/2?M:p<2/3?m+(M-m)*(2/3-p)*6:m}var s,i,d;if(t==0)s=i=d=a;else{var c=a<.5?a*(1+t):a+t-a*t,f=2*a-c;s=u(f,c,n+1/3),i=u(f,c,n),d=u(f,c,n-1/3)}return"rgba("+s*255+","+i*255+","+d*255+","+o+")"}function Ir(e){if(l.rgb(e))return xr(e);if(l.hex(e))return Mr(e);if(l.hsl(e))return kr(e)}function A(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function Tr(e){if(N(e,"translate")||e==="perspective")return"px";if(N(e,"rotate")||N(e,"skew"))return"deg"}function oe(e,r){return l.fnc(e)?e(r.target,r.id,r.total):e}function B(e,r){return e.getAttribute(r)}function de(e,r,n){var t=A(r);if(le([n,"deg","rad","turn"],t))return r;var a=K.CSS[r+n];if(!l.und(a))return a;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var d=i*parseFloat(r);return K.CSS[r+n]=d,d}function $e(e,r,n){if(r in e.style){var t=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[r]||getComputedStyle(e).getPropertyValue(t)||"0";return n?de(e,a,n):a}}function ve(e,r){if(l.dom(e)&&!l.inp(e)&&(!l.nil(B(e,r))||l.svg(e)&&e[r]))return"attribute";if(l.dom(e)&&le(_r,r))return"transform";if(l.dom(e)&&r!=="transform"&&$e(e,r))return"css";if(e[r]!=null)return"object"}function je(e){if(l.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,t=new Map,a;a=n.exec(r);)t.set(a[1],a[2]);return t}}function Cr(e,r,n,t){var a=N(r,"scale")?1:0+Tr(r),o=je(e).get(r)||a;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),t?de(e,o,t):o}function he(e,r,n,t){switch(ve(e,r)){case"transform":return Cr(e,r,t,n);case"css":return $e(e,r,n);case"attribute":return B(e,r);default:return e[r]||0}}function ge(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var t=A(e)||0,a=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function ze(e,r){if(l.col(e))return Ir(e);if(/\s/g.test(e))return e;var n=A(e),t=n?e.substr(0,e.length-n.length):e;return r?t+r:t}function me(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function Pr(e){return Math.PI*2*B(e,"r")}function Sr(e){return B(e,"width")*2+B(e,"height")*2}function Dr(e){return me({x:B(e,"x1"),y:B(e,"y1")},{x:B(e,"x2"),y:B(e,"y2")})}function He(e){for(var r=e.points,n=0,t,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(n+=me(t,o)),t=o}return n}function Br(e){var r=e.points;return He(e)+me(r.getItem(r.numberOfItems-1),r.getItem(0))}function Re(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Pr(e);case"rect":return Sr(e);case"line":return Dr(e);case"polyline":return He(e);case"polygon":return Br(e)}}function Ar(e){var r=Re(e);return e.setAttribute("stroke-dasharray",r),r}function Fr(e){for(var r=e.parentNode;l.svg(r)&&l.svg(r.parentNode);)r=r.parentNode;return r}function Ue(e,r){var n=r||{},t=n.el||Fr(e),a=t.getBoundingClientRect(),o=B(t,"viewBox"),u=a.width,s=a.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:t,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function Vr(e,r){var n=l.str(e)?Le(e)[0]:e,t=r||100;return function(a){return{property:a,el:n,svg:Ue(n),totalLength:Re(n)*(t/100)}}}function Er(e,r,n){function t(c){c===void 0&&(c=0);var f=r+c>=1?r+c:0;return e.el.getPointAtLength(f)}var a=Ue(e.el,e.svg),o=t(),u=t(-1),s=t(1),i=n?1:a.w/a.vW,d=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*i;case"y":return(o.y-a.y)*d;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function Te(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=ze(l.pth(e)?e.totalLength:e,r)+"";return{original:t,numbers:t.match(n)?t.match(n).map(Number):[0],strings:l.str(e)||r?t.split(n):[]}}function pe(e){var r=e?J(l.arr(e)?e.map(Ie):Ie(e)):[];return Y(r,function(n,t,a){return a.indexOf(n)===t})}function Ne(e){var r=pe(e);return r.map(function(n,t){return{target:n,id:t,total:r.length,transforms:{list:je(n)}}})}function Or(e,r){var n=fe(r);if(/^spring/.test(n.easing)&&(n.duration=Oe(n.easing)),l.arr(e)){var t=e.length,a=t===2&&!l.obj(e[0]);a?e={value:e}:l.fnc(r.duration)||(n.duration=r.duration/t)}var o=l.arr(e)?e:[e];return o.map(function(u,s){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=s?0:r.delay),l.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return G(u,n)})}function qr(e){for(var r=Y(J(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},t=function(o){var u=r[o];n[u]=e.map(function(s){var i={};for(var d in s)l.key(d)?d==u&&(i.value=s[d]):i[d]=s[d];return i})},a=0;a<r.length;a++)t(a);return n}function Lr(e,r){var n=[],t=r.keyframes;t&&(r=G(qr(t),r));for(var a in r)l.key(a)&&n.push({name:a,tweens:Or(r[a],e)});return n}function $r(e,r){var n={};for(var t in e){var a=oe(e[t],r);l.arr(a)&&(a=a.map(function(o){return oe(o,r)}),a.length===1&&(a=a[0])),n[t]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function jr(e,r){var n;return e.tweens.map(function(t){var a=$r(t,r),o=a.value,u=l.arr(o)?o[1]:o,s=A(u),i=he(r.target,e.name,s,r),d=n?n.to.original:i,c=l.arr(o)?o[0]:d,f=A(c)||A(i),m=s||f;return l.und(u)&&(u=d),a.from=Te(c,m),a.to=Te(ge(u,c),m),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=ce(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(r.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a})}var We={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,t,a){if(t.list.set(r,n),r===t.last||a){var o="";t.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function Ze(e,r){var n=Ne(e);n.forEach(function(t){for(var a in r){var o=oe(r[a],t),u=t.target,s=A(o),i=he(u,a,s,t),d=s||A(i),c=ge(ze(o,d),i),f=ve(u,a);We[f](u,a,c,t.transforms,!0)}})}function zr(e,r){var n=ve(e.target,r.name);if(n){var t=jr(r,e),a=t[t.length-1];return{type:n,property:r.name,animatable:e,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}function Hr(e,r){return Y(J(e.map(function(n){return r.map(function(t){return zr(n,t)})})),function(n){return!l.und(n)})}function Qe(e,r){var n=e.length,t=function(o){return o.timelineOffset?o.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map(function(o){return t(o)+o.duration})):r.duration,a.delay=n?Math.min.apply(Math,e.map(function(o){return t(o)+o.delay})):r.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map(function(o){return t(o)+o.duration-o.endDelay})):r.endDelay,a}var Ce=0;function Rr(e){var r=ie(Ve,e),n=ie(se,e),t=Lr(n,e),a=Ne(e.targets),o=Hr(a,t),u=Qe(o,n),s=Ce;return Ce++,G(r,{id:s,children:[],animatables:a,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var S=[],Ke=function(){var e;function r(){!e&&(!Pe()||!y.suspendWhenDocumentHidden)&&S.length>0&&(e=requestAnimationFrame(n))}function n(a){for(var o=S.length,u=0;u<o;){var s=S[u];s.paused?(S.splice(u,1),o--):(s.tick(a),u++)}e=u>0?requestAnimationFrame(n):void 0}function t(){y.suspendWhenDocumentHidden&&(Pe()?e=cancelAnimationFrame(e):(S.forEach(function(a){return a._onDocumentVisibility()}),Ke()))}return typeof document<"u"&&document.addEventListener("visibilitychange",t),r}();function Pe(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,n=0,t=0,a,o=0,u=null;function s(g){var h=window.Promise&&new Promise(function(k){return u=k});return g.finished=h,h}var i=Rr(e);s(i);function d(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,a.forEach(function(h){return h.reversed=i.reversed})}function c(g){return i.reversed?i.duration-g:g}function f(){r=0,n=c(i.currentTime)*(1/y.speed)}function m(g,h){h&&h.seek(g-h.timelineOffset)}function M(g){if(i.reversePlayback)for(var k=o;k--;)m(g,a[k]);else for(var h=0;h<o;h++)m(g,a[h])}function p(g){for(var h=0,k=i.animations,F=k.length;h<F;){var b=k[h],V=b.animatable,j=b.tweens,O=j.length-1,x=j[O];O&&(x=Y(j,function(Ge){return g<Ge.end})[0]||x);for(var q=D(g-x.start-x.delay,0,x.duration)/x.duration,Z=isNaN(q)?1:x.easing(q),C=x.to.strings,X=x.round,ee=[],Je=x.to.numbers.length,L=void 0,z=0;z<Je;z++){var H=void 0,ye=x.to.numbers[z],_e=x.from.numbers[z]||0;x.isPath?H=Er(x.value,Z*ye,x.isPathTargetInsideSVG):H=_e+Z*(ye-_e),X&&(x.isColor&&z>2||(H=Math.round(H*X)/X)),ee.push(H)}var be=C.length;if(!be)L=ee[0];else{L=C[0];for(var R=0;R<be;R++){C[R];var we=C[R+1],re=ee[R];isNaN(re)||(we?L+=re+we:L+=re+" ")}}We[b.type](V.target,b.property,L,V.transforms),b.currentValue=L,h++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function _(){i.remaining&&i.remaining!==!0&&i.remaining--}function w(g){var h=i.duration,k=i.delay,F=h-i.endDelay,b=c(g);i.progress=D(b/h*100,0,100),i.reversePlayback=b<i.currentTime,a&&M(b),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),b<=k&&i.currentTime!==0&&p(0),(b>=F&&i.currentTime!==h||!h)&&p(h),b>k&&b<F?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),p(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=D(b,0,h),i.began&&v("update"),g>=h&&(n=0,_(),i.remaining?(r=t,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&d()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,a=i.children,o=a.length;for(var h=o;h--;)i.children[h].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(g,h){return Ze(g,h),i},i.tick=function(g){t=g,r||(r=t),w((t+(n-r))*y.speed)},i.seek=function(g){w(c(g))},i.pause=function(){i.paused=!0,f()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,S.push(i),f(),Ke())},i.reverse=function(){d(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var h=pe(g);Ye(h,i)},i.reset(),i.autoplay&&i.play(),i}function Se(e,r){for(var n=r.length;n--;)le(e,r[n].animatable.target)&&r.splice(n,1)}function Ye(e,r){var n=r.animations,t=r.children;Se(e,n);for(var a=t.length;a--;){var o=t[a],u=o.animations;Se(e,u),!u.length&&!o.children.length&&t.splice(a,1)}!n.length&&!t.length&&r.pause()}function Ur(e){for(var r=pe(e),n=S.length;n--;){var t=S[n];Ye(r,t)}}function Nr(e,r){r===void 0&&(r={});var n=r.direction||"normal",t=r.easing?ce(r.easing):null,a=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",d=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,M=A(c?e[1]:e)||0,p=r.start||0+(c?f:0),v=[],_=0;return function(w,g,h){if(s&&(u=0),i&&(u=(h-1)/2),d&&(u=h-1),!v.length){for(var k=0;k<h;k++){if(!a)v.push(Math.abs(u-k));else{var F=i?(a[0]-1)/2:u%a[0],b=i?(a[1]-1)/2:Math.floor(u/a[0]),V=k%a[0],j=Math.floor(k/a[0]),O=F-V,x=b-j,q=Math.sqrt(O*O+x*x);o==="x"&&(q=-O),o==="y"&&(q=-x),v.push(q)}_=Math.max.apply(Math,v)}t&&(v=v.map(function(C){return t(C/_)*_})),n==="reverse"&&(v=v.map(function(C){return o?C<0?C*-1:-C:Math.abs(_-C)}))}var Z=c?(m-f)/_:f;return p+Z*(Math.round(v[g]*100)/100)+M}}function Wr(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(n,t){var a=S.indexOf(r),o=r.children;a>-1&&S.splice(a,1);function u(m){m.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=G(n,ie(se,e));i.targets=i.targets||e.targets;var d=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=l.und(t)?d:ge(t,d),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var f=Qe(o,e);return r.delay=f.delay,r.endDelay=f.endDelay,r.duration=f.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=S;y.remove=Ur;y.get=he;y.set=Ze;y.convertPx=de;y.path=Vr;y.setDashoffset=Ar;y.stagger=Nr;y.timeline=Wr;y.easing=ce;y.penner=qe;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const Zr=(e,r)=>{y({targets:e,value:r,easing:"easeOutCubic",round:1,duration:2e3})},Qr={setup(){const e=()=>{window.scrollY>=85&&ke.forEach(r=>{Zr(r,+r.newValue)})};return Ae(()=>window.addEventListener("scroll",e)),{achievements:ke}}},Kr={class:"achievements"},Yr={class:"achievements__container container"},Jr={class:"achievements__item-value"},Gr={class:"achievements__item-title"};function Xr(e,r,n,t,a,o){return T(),P("section",Kr,[I("div",Yr,[(T(!0),P(U,null,Q(t.achievements,(u,s)=>(T(),P("div",{class:"achievements__item",key:s},[I("span",Jr,ae(u.value),1),I("span",Gr,ae(u.title.toUpperCase()),1)]))),128))])])}const et=W(Qr,[["render",Xr]]),rt=[{title:"Designer bouquets",author:"Designer"},{title:"Custom bouquets",author:"Custom"},{title:"My bouquets",author:"My"}],tt={components:{AppSections:or},setup(){const e=Be(),r=De();return{cards:rt,sendAuthor:a=>{const o=a;e.clearFilters(),e.addAuthor(o),r.push("/bouquets")},allBouquets:()=>{e.clearFilters(),r.push("/bouquets")}}}};function nt(e,r,n,t,a,o){const u=E("app-sections");return T(),Fe(u,{title:"Portfolio",description:"a selection of our work",btn:"more",name:"portfolio",cards:t.cards,getData:"author",onGetData:r[1]||(r[1]=s=>t.sendAuthor(s))},{default:ue(()=>[I("button",{class:"portfolio-btn",onClick:r[0]||(r[0]=s=>t.allBouquets())},"see all bouquets")]),_:1},8,["cards"])}const at=W(tt,[["render",nt]]),it={},ot={class:"builder"},ut=I("div",{class:"builder__header"},null,-1),st={class:"container builder__container"},ct=I("h2",{class:"builder-title"},"Bouquet Builder",-1),lt=I("span",{class:"builder-description"},"create your own flower bouquet using our exclusive bouquet builder!",-1),ft=I("article",{class:"builder-text"}," Create unique, personalised bouquets online and make your flower bouquet extra special. Make your own bouquet choosing your favourite flowers and you’re guaranteed to be satisfied. Buying a bouquet for a loved one? Pick flowers that you know they’ll love and you’ll definitely make them smile! ",-1);function dt(e,r,n,t,a,o){const u=E("router-link");return T(),P("div",ot,[ut,I("div",st,[ct,lt,ft,$(u,{to:"/builder",class:"builder-btn"},{default:ue(()=>[nr("build your bouquet!")]),_:1})])])}const vt=W(it,[["render",dt]]),ht={components:{TheHeader:yr,TheFooter:ar,TheAchievements:et,ThePortfolio:at,TheBuilder:vt}};function gt(e,r,n,t,a,o){const u=E("the-header"),s=E("the-achievements"),i=E("the-portfolio"),d=E("the-builder");return T(),P(U,null,[$(u),I("main",null,[$(s),$(i),$(d)])],64)}const _t=W(ht,[["render",gt],["__scopeId","data-v-7a0351ef"]]);export{_t as default};
