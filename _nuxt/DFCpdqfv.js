import _ from"./C8_jxWeo.js";import f from"./D0Cs_9-1.js";import{u as d,f as h,g,c as w,b as a,w as l,o as C,a as o,t as c}from"./Aac_uPsT.js";import{q as y}from"./Di2_YS9Q.js";import"./Se1IPa8O.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./BgZrV5lH.js";import"./rJ7bHXpa.js";import"./CRVhQ8dH.js";const x={class:"font-serif font-italic py-4"},b={__name:"[slug]",async setup(A){let t,n;const s=d(),i=s.params.slug,u=s.fullPath;if(console.log("FULL PATH",u),!([t,n]=h(()=>y("research").where({slug:i}).findOne()),t=await t,n(),t))throw g({statusCode:404,statusMessage:"Article not found"});return(D,r)=>{const m=_,p=f;return C(),w("main",null,[a(p,null,{default:l(({doc:e})=>[o("article",null,[o("h1",x,c(e.title),1),o("h5",null,c(e.description),1),a(m,{value:e},null,8,["value"])])]),"not-found":l(()=>r[0]||(r[0]=[o("h1",null,"Document not found",-1)])),_:1})])}}};export{b as default};