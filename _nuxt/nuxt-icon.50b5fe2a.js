import{d as m,r as d,J as p,D as f,q as v,s as g,K as h,L as l,M as e}from"./entry.1a9fcb29.js";const E=["innerHTML"],x=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,_=d("");let r=!1;async function c(){try{const n=await Object.assign({"/assets/icons/bottle__drawing__bg.svg":()=>e(()=>import("./bottle__drawing__bg.e240ed1e.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/bottle__drawing__bottle.svg":()=>e(()=>import("./bottle__drawing__bottle.7315327a.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/bottle__drawing__combo.svg":()=>e(()=>import("./bottle__drawing__combo.e7ebb6a7.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/чертеж апдейт.svg":()=>e(()=>import("./чертеж апдейт.db93112c.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();n.includes("stroke")&&(r=!0),_.value=n}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=p(()=>c()),await o,a(),f(c),(s,n)=>(v(),g("span",{class:h(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":l(r)&&!s.filled}]),innerHTML:l(_)},null,10,E))}});export{x as default};