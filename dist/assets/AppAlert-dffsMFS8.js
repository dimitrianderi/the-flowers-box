import{_ as v,r as _,p,q as g,c as n,d,s as h,e as l,j as m,l as y,t as o,h as f,Q as b,R as x,b as C,i as B}from"./index-2VeXQr7J.js";import{g as A}from"./getImageUrl-GZGfcVc1.js";const E=[{title:"Carnation",price:.51},{title:"Hydrangea",price:.72},{title:"Lily",price:.23},{title:"Gerbera",price:.12},{title:"Lisianthus",price:.13},{title:"Alstroemeria",price:.17},{title:"Tulip",price:.14},{title:"Iris",price:.48},{title:"Peony",price:.29},{title:"Red rose",price:.26},{title:"White rose",price:.22},{title:"Yellow rose",price:.36},{title:"Cornflowers",price:.19},{title:"Chrysanthemums",price:.12},{title:"Orchid",price:.11}],W=[{title:"Eucalyptus",price:.02},{title:"Bergamot",price:.03},{title:"Ruscus",price:.01}],z=[{title:"Wedding"},{title:"Birthday"},{title:"Festive"}],G=[{title:"Atlas",price:.1},{title:"Mesh",price:.13},{title:"Film",price:.07},{title:"Kraft",price:.09},{title:"Felt",price:.11}],H=[{title:"Classic",price:1},{title:"Cascade",price:1.2},{title:"Oval",price:1.3},{title:"Pyramid",price:1.5},{title:"Spiral",price:1.7}],K=[{title:"Design"},{title:"Custom"},{title:"My"}],k={props:{collection:{type:String,default:""},title:{type:String,default:""},textBtn:{type:String,default:""},price:{type:Number,default:0},isInput:Boolean,isPrice:Boolean,active:{type:Object,default:()=>{}},url:{type:String,default:""}},emits:["addData"],setup(i,c){const t=_(null),e=_(i.price),r=p(()=>(+t.value*+e.value).toFixed(2)),u=p(()=>i.active&&i.active.find(s=>s.title===i.title)),a=()=>{c.emit("addData",{title:i.title,price:e.value,amount:t.value,res:r.value}),t.value=""};return g(t,s=>{t.value=s>100?100:t.value,t.value=s<1&&s!==""?1:t.value}),{amount:t,currentPrice:e,res:r,handlerClick:a,isActive:u,getImageUrl:A}}},S={class:"collection"},w=["src"],I={class:"collection-title"},P={key:0,class:"collection-price"},D={key:0,class:"collection__controller"},N=["for"],F=["id"],L=["disabled"];function M(i,c,t,e,r,u){return n(),d("div",S,[h(i.$slots,"default"),l("div",{class:m({"collection-img":!0,big:t.collection==="bouquets"})},[l("img",{src:e.getImageUrl(t.url.toLowerCase(),t.collection)},null,8,w)],2),l("div",I,[y(o(t.title)+" ",1),e.currentPrice?(n(),d("span",P," ("+o(e.amount?e.res:e.currentPrice)+o(t.isPrice?"$":"")+") ",1)):f("",!0)]),t.isInput?(n(),d("div",D,[l("label",{class:"collection__controller-text",for:t.title},"amount:",8,N),b(l("input",{id:t.title,"onUpdate:modelValue":c[0]||(c[0]=a=>e.amount=a),type:"number",class:"collection__controller-input",max:"100",step:"1",min:"1"},null,8,F),[[x,e.amount]])])):f("",!0),l("button",{class:m(["collection-btn",{active:e.isActive}]),disabled:t.isInput&&!e.amount,onClick:c[1]||(c[1]=a=>e.handlerClick())},o(e.isActive?t.textBtn+"ed":t.textBtn),11,L)])}const Q=v(k,[["render",M]]),O={props:{text:{type:String,default:""}}},R={class:"alert"},T={class:"alert__wrapper"},U={class:"alert-text"};function V(i,c,t,e,r,u){const a=C("font-awesome-icon");return n(),d("div",R,[l("div",T,[B(a,{class:"alert-icon",icon:"fa-regular fa-bell","data-testId":"alert-icon"}),l("span",U,o(t.text),1)])])}const Y=v(O,[["render",V]]);export{Q as A,Y as a,K as b,H as c,E as f,W as g,G as p,z as t};