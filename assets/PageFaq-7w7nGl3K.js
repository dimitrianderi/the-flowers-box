import{_ as p,S as m,u as f,b as a,c as s,d as l,g as d,h as _,i as g,F as q}from"./index-2VeXQr7J.js";import{A as h}from"./AppSections-Q_UAtDU8.js";import"./getImageUrl-GZGfcVc1.js";const F=[{title:"Creating bouquets",href:"creating-bouquets"},{title:"Delivery",href:"delivery"},{title:"About us",href:"about"}],b={name:"FAQ",components:{AppSections:h},setup(){const o=m(),t=f();return{cards:F,route:o,goFaq:e=>{const r=e;t.push(`/faq/${r}`)}}}};function v(o,t,n,e,r,A){const c=a("app-sections"),i=a("router-view");return s(),l(q,null,[e.route.path==="/faq"?(s(),d(c,{key:0,title:"FAQ",description:"choose a topic of interest",btn:"more",name:"faq",cards:e.cards,"get-data":"href",onGetData:t[0]||(t[0]=u=>e.goFaq(u))},null,8,["cards"])):_("",!0),g(i)],64)}const B=p(b,[["render",v]]);export{B as default};
