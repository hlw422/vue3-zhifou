import{t as p,u as b,r as g,j as v,b as o,o as h,c as x,d as t,w as e,e as u,k as y,f as s,v as i}from"./index.edda2ae1.js";import{u as k}from"./user.3ca3fb96.js";const B={class:"card-header"},D=u("span",null,"\u7528\u6237\u8BE6\u60C5",-1),j={__name:"Detail",setup(w){const n=p(),_=b(),a=g({id:""});return v(async()=>{if(n.query.id){const r=await k.getUserDetail({id:n.query.id});Object.assign(a,r.data.data)}}),(r,l)=>{const d=o("el-button"),c=o("el-form-item"),m=o("el-form"),f=o("el-card");return h(),x("div",null,[t(f,{class:"box-card"},{header:e(()=>[u("div",B,[D,t(d,{size:"mini",style:{float:"right"},onClick:l[0]||(l[0]=C=>y(_).go(-1))},{default:e(()=>[s("\u8FD4\u56DE")]),_:1})])]),default:e(()=>[t(m,null,{default:e(()=>[t(c,{label:"\u59D3\u540D:"},{default:e(()=>[s(i(a.name),1)]),_:1}),t(c,{label:"\u5E74\u9F84:"},{default:e(()=>[s(i(a.age),1)]),_:1})]),_:1})]),_:1})])}}};export{j as default};