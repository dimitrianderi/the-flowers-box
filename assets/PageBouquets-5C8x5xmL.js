import{_ as k,c as n,d as a,e,J as j,a as L,p as m,b,i as g,v as y,t as c,g as v,s as P,K as R,m as E,F as f,f as h,h as C,L as T,M as z,N as J,r as x,O as K,k as U,o as G,w as H,j as F}from"./index-2VeXQr7J.js";import{A as Q,a as W,t as X,b as Y}from"./AppAlert-dffsMFS8.js";import"./getImageUrl-GZGfcVc1.js";const Z={},tt={class:"loader"},et=e("div",{class:"loader-content"},null,-1),ot=[et];function st(i,o,r,t,d,_){return n(),a("div",tt,ot)}const nt=k(Z,[["render",st]]),at={components:{AppLinkIcon:j},setup(){const i=L(),o=m(()=>i.getCurrentPage);return{filterStore:i,page:o}}},lt={class:"pagination"},it={class:"pagination-page"};function ct(i,o,r,t,d,_){const s=b("app-link-icon");return n(),a("div",lt,[g(s,{class:"pagination-icon","icon-class":"fa-solid fa-backward-fast",disabled:t.page===1,onClick:o[0]||(o[0]=y(p=>t.filterStore.goStart(),["prevent"]))},null,8,["disabled"]),g(s,{class:"pagination-icon","icon-class":"fa-solid fa-backward",disabled:t.page===1,onClick:o[1]||(o[1]=y(p=>t.filterStore.goLast(),["prevent"]))},null,8,["disabled"]),e("span",it,c(t.page),1),g(s,{class:"pagination-icon","icon-class":"fa-solid fa-forward",disabled:!t.filterStore.next,onClick:o[2]||(o[2]=y(p=>t.filterStore.goNext(),["prevent"]))},null,8,["disabled"]),g(s,{class:"pagination-icon","icon-class":"fa-solid fa-forward-fast",disabled:!t.filterStore.next,onClick:o[3]||(o[3]=y(p=>t.filterStore.goEnd(),["prevent"]))},null,8,["disabled"])])}const rt=k(at,[["render",ct]]),ut={emits:["offModal"]},dt={class:"modal__layout"};function _t(i,o,r,t,d,_){return n(),v(R,{to:"body"},[e("div",{class:"modal__backdrop",onClick:o[0]||(o[0]=s=>i.$emit("offModal"))}),e("div",dt,[P(i.$slots,"default")])])}const pt=k(ut,[["render",_t]]),ft={props:{bouquet:{type:Object,default:()=>{}},isSubmitting:{type:Boolean,default:!1}},emits:["delBouquet"],setup(){const i=E();return{user:m(()=>i.getUser)}}},q=i=>(T("data-v-40038367"),i=i(),z(),i),ht={class:"info"},bt={class:"info__title"},gt={class:"info__block"},vt=q(()=>e("span",null,"Bouquet ingredients",-1)),mt={class:"info__block"},kt=q(()=>e("span",null,"Bouquet packaging",-1)),qt={class:"info__block"},St=q(()=>e("span",null,"Bouquet composition",-1)),yt={class:"info__block"},$t=q(()=>e("span",null,c("Type"),-1)),wt={class:"info__advanced resetBottom"},Bt={class:"info__advanced__content"},At=q(()=>e("span",null,c("Author"),-1)),xt=["disabled"];function Ct(i,o,r,t,d,_){return n(),a("div",ht,[e("div",bt,[e("span",null,c(r.bouquet.name),1),e("span",null,c(r.bouquet.price)+" $",1)]),e("div",gt,[vt,(n(!0),a(f,null,h(r.bouquet.flowers,s=>(n(),a("div",{key:s.title,class:"info__block__content"},[e("span",null,c(s.title)+", "+c(s.amount)+" pcs.",1),e("strong",null,c(s.res)+"$",1)]))),128)),(n(!0),a(f,null,h(r.bouquet.greenery,s=>(n(),a("div",{key:s.title,class:"info__block__content"},[e("span",null,c(s.title)+", "+c(s.amount)+" pcs.",1),e("strong",null,c(s.res)+"$",1)]))),128))]),e("div",mt,[kt,(n(!0),a(f,null,h(r.bouquet.packaging,s=>(n(),a("div",{key:s.title,class:"info__block__content"},[e("span",null,c(s.title),1),e("strong",null,c(s.price)+"$",1)]))),128))]),e("div",qt,[St,(n(!0),a(f,null,h(r.bouquet.composition,s=>(n(),a("div",{key:s.title,class:"info__block__content"},[e("span",null,c(s.title),1),e("strong",null,"x"+c(s.price),1)]))),128))]),e("div",yt,[(n(!0),a(f,null,h(r.bouquet.view,s=>(n(),a("div",{key:s.title,class:"info__advanced__content"},[$t,e("strong",null,c(s.title),1)]))),128))]),e("div",wt,[e("div",Bt,[At,e("strong",null,c(r.bouquet.author),1)])]),t.user==="admin"||t.user===r.bouquet.author?(n(),a("button",{key:0,class:"info-btn",disabled:r.isSubmitting,onClick:o[0]||(o[0]=s=>i.$emit("delBouquet",r.bouquet.id))}," delete ",8,xt)):C("",!0)])}const Mt=k(ft,[["render",Ct],["__scopeId","data-v-40038367"]]),Vt={components:{AppCollection:Q,AppLoader:nt,AppPagination:rt,AppModal:pt,AppResume:Mt,AppAlert:W},setup(){const i=J(),o=L(),r=m(()=>o.getBouquets),t=x(!1),d=x(!1),_=x(!1),s=K(),p=U({}),$=m(()=>s.getResponse),w=u=>{o.getViews.includes(u)?o.delView(u):o.addView(u)},B=u=>{o.getAuthors.includes(u)?o.delAuthor(u):o.addAuthor(u)},A=u=>u.reduce((V,D)=>D.amount>V.amount?D:V,{amount:0}).title,l=m(()=>o.getSearch),S=u=>{o.changeSearch(u.target.value)},M=()=>{_.value=!1},N=u=>{_.value=!0,Object.assign(p,u)},O=async u=>{try{t.value=!0,await i.deleteBouquet(u),M()}catch{}finally{t.value=!1}};return G(async()=>{d.value=!0,await i.loadBouquets(),d.value=!1}),{bouquets:r,isLoad:d,types:X,authors:Y,filterStore:o,toggleView:w,toggleAuthor:B,getMaxFlowers:A,changeSearch:S,deleteBouquet:O,onModal:N,offModal:M,searchValue:l,isModal:_,bouquetData:p,isSubmitting:t,response:$}}},Dt={class:"container bouquets"},Ft={class:"response"},Lt=e("h2",{class:"bouquets__title"}," Bouquets ",-1),Nt=e("div",{class:"bouquets__description"}," here you can order the bouquet you like! ",-1),Ot={class:"bouquets__wrapper"},It={class:"bouquets__wrapper__search"},jt=["value"],Pt={class:"bouquets__shop"},Rt={class:"bouquets__shop-panel"},Et=["onClick"],Tt={key:1,class:"bouquets__shop__content"},zt={class:"bouquets__shop__content-contain"},Jt={key:2,class:"bouquets__shop-title"},Kt={class:"bouquets__shop-panel"},Ut=["onClick"];function Gt(i,o,r,t,d,_){const s=b("app-alert"),p=b("app-loader"),$=b("app-collection"),w=b("app-pagination"),B=b("app-resume"),A=b("app-modal");return n(),a("section",Dt,[e("div",Ft,[t.response.length?(n(),v(s,{key:0,text:t.response},null,8,["text"])):C("",!0)]),Lt,Nt,e("div",Ot,[e("div",It,[e("input",{class:"bouquets__wrapper__search-input",type:"text",placeholder:"search...",value:t.searchValue,onInput:o[0]||(o[0]=(...l)=>t.changeSearch&&t.changeSearch(...l))},null,40,jt)]),e("div",Pt,[e("div",Rt,[(n(!0),a(f,null,h(t.types,l=>(n(),a("button",{key:l.title,class:F(["bouquets__shop-panel-btn",{active:t.filterStore.getViews.includes(l.title)}]),onClick:S=>t.toggleView(l.title)},c(l.title),11,Et))),128))]),t.isLoad?(n(),v(p,{key:0})):t.bouquets.length?(n(),a("div",Tt,[e("div",zt,[(n(!0),a(f,null,h(t.bouquets,l=>(n(),v($,{key:l.name,collection:"bouquets",title:l.name,"text-btn":"more",price:+l.price,"is-price":!0,url:t.getMaxFlowers(l.flowers),onAddData:S=>t.onModal(l)},null,8,["title","price","url","onAddData"]))),128))]),g(w)])):(n(),a("span",Jt,"No bouquets available")),e("div",Kt,[(n(!0),a(f,null,h(t.authors,l=>(n(),a("button",{key:l.title,class:F(["bouquets__shop-panel-btn",{active:t.filterStore.getAuthors.includes(l.title)}]),onClick:S=>t.toggleAuthor(l.title)},c(l.title),11,Ut))),128))])])]),t.isModal?(n(),v(A,{key:0,onOffModal:o[1]||(o[1]=l=>t.offModal())},{default:H(()=>[g(B,{bouquet:t.bouquetData,"is-submitting":t.isSubmitting,onDelBouquet:t.deleteBouquet},null,8,["bouquet","is-submitting","onDelBouquet"])]),_:1})):C("",!0)])}const Xt=k(Vt,[["render",Gt]]);export{Xt as default};
