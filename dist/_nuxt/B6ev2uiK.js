import{H as l}from"./BgERs8Zw.js";import{d as i,r as p,v as n,z as u,L as h,M as f,N as v,t as c,x as s,y as e,C as g,D as m,_ as k}from"./CoIdefiX.js";const r=a=>(g("data-v-32958f99"),a=a(),m(),a),b={class:"app"},x=["href"],I={class:"description"},S={class:"bottom"},j={class:"language"},y={class:"star"},B=r(()=>s("div",null,null,-1)),H={class:"fork"},N=r(()=>s("div",null,null,-1)),C=i({__name:"github",setup(a){let d=p([]);return fetch("/json/github.json").then(o=>o.json()).then(o=>{d.value=o}),(o,D)=>{const _=l;return c(),n("div",b,[u(_),(c(!0),n(h,null,f(v(d),t=>(c(),n("div",{class:"main_item",key:t.id},[s("a",{class:"title",href:t.url,target:"_blank"},e(t.name),9,x),s("p",I,e(t.description),1),s("div",S,[s("div",j,e(t.language),1),s("div",y,[B,s("div",null,e(t.star),1)]),s("div",H,[N,s("div",null,e(t.fork),1)])])]))),128))])}}}),w=k(C,[["__scopeId","data-v-32958f99"]]);export{w as default};