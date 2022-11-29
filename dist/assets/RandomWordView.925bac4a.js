import{r as s,o as S,c as B,w as U,a as o,b as D,d as g,e as i,f as t,t as _,u as k,g as z,h as H,F as O,s as M,i as P,v as q,j as E}from"./index.6aabafca.js";import{V as G,T as Z}from"./ViewContainer.1ad8ce43.js";const J={key:0,class:"d-flex flex-wrap justify-content-center"},K={class:"ratio ratio-1x1",style:{"min-width":"80px","max-width":"10%"}},Q=t("div",{class:"card-body",style:{display:"flex","justify-content":"center","align-items":"center"}},[t("div",{class:"spinner-grow",role:"status"})],-1),X=[Q],Y={key:1,class:"d-flex flex-wrap justify-content-center"},tt={class:"card ratio ratio-1x1",style:{"min-width":"80px","max-width":"10%"}},et=["src"],st=["onSubmit"],at=t("label",{for:"userInput",class:"form-label"},[t("h5",null,"Translate the Fingerspelling word")],-1),ot={class:"input-group"},lt=["maxlength"],nt=["disabled"],it=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash",viewBox:"0 0 16 16"},[t("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})],-1),ct=[it],rt=["disabled"],ut=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[t("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})],-1),dt=[ut],ht=["disabled"],vt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-clockwise",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),t("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})],-1),mt=[vt],ft=["disabled"],pt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-clock-history",viewBox:"0 0 16 16"},[t("path",{d:"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"}),t("path",{d:"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"}),t("path",{d:"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"})],-1),wt={key:1,class:"container"},bt={class:"row align-items-center justify-content-center",style:{height:"50vh",position:"relative"}},gt={class:"col-auto card p-5"},_t=t("h3",{class:"mb-3"},"Time attack results",-1),kt={class:"mb-0"},yt={class:"my-3"},Ct=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1),Tt={__name:"RandomWordView",props:{isTimeAttackOn:{type:Boolean},correct:{type:Number},attempts:{type:Number}},emits:["emitTimeAttack","emitCount"],setup(a,{emit:y}){const l=a,w=s(null),f=s("");function c(){w.value=!0,fetch(`https://random-word-api.herokuapp.com/word?length=${r.value}`).then(e=>e.json()).then(e=>{f.value=e[0],w.value=!1}).catch(e=>console.log("error:",e))}S(()=>{c()});const C=B(()=>f.value.split("")),r=s(4);function x(e){e===!0&&r.value<=11?(r.value++,c()):e===!1&&r.value!==4&&(r.value--,c())}function V(){A(),c()}const h=s(""),v=s(0),p=s(0),u=s(!1),m=s("");function A(){h.value=""}function T(){v.value=0}function j(){v.value=0,p.value=0}function I(){let e=h.value.toLowerCase();/^[a-zA-Z]+$/.test(e)===!1?(m.value="warning",u.value=!0):!l.isTimeAttackOn&&e!==f.value?(m.value="danger",u.value=!0,T()):l.isTimeAttackOn&&e!==f.value?(m.value="danger",u.value=!0,p.value++):(m.value="success",u.value=!0,h.value="",p.value++,v.value++,c()),setTimeout(()=>{u.value=!1},250)}function L(){I()}function W(){y("emitCount",[v.value,p.value])}function N(){y("emitTimeAttack"),setTimeout(()=>{T(),c()},3e3)}const b=s(!1);function R(){b.value=!0}function $(){b.value=!1}U(()=>l.isTimeAttackOn,(e,n)=>{e===!1&&(W(),A(),j(),R())});const F=B(()=>l.correct===0&&l.attempts===0?"0%":Math.round(l.correct/l.attempts*100)+"%");return(e,n)=>b.value?(o(),i("div",wt,[t("div",bt,[t("div",gt,[_t,t("h4",kt,"Correct: "+_(a.correct),1),t("h4",yt,"Attempts: "+_(a.attempts),1),t("h4",null,"Accuracy: "+_(k(F)),1),t("button",{class:"btn btn-dark mt-3",onClick:$},[Ct,z(" Back ")])])])])):(o(),D(G,{key:0},{toast:g(()=>[H(Z,{toastColor:m.value,isOpacity1:u.value,correctCount:v.value,isTimeAttackOn:a.isTimeAttackOn,onWordView:""},null,8,["toastColor","isOpacity1","correctCount","isTimeAttackOn"])]),cards:g(()=>[w.value===!0?(o(),i("div",J,[(o(!0),i(O,null,M(k(C),d=>(o(),i("div",K,X))),256))])):(o(),i("div",Y,[(o(!0),i(O,null,M(k(C),d=>(o(),i("div",tt,[t("img",{src:`./svg/${d}.svg`,alt:"",srcset:"",style:{width:"100%","object-fit":"contain","object-position":"center"},class:"card-body"},null,8,et)]))),256))]))]),input:g(()=>[t("form",{onSubmit:E(L,["prevent"])},[at,t("div",ot,[P(t("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>h.value=d),type:"text",class:"form-control",id:"userInput",maxlength:r.value,minlength:"4",required:"",placeholder:"Type here",autocomplete:"off"},null,8,lt),[[q,h.value]]),t("button",{type:"button",class:"btn btn-dark",onClick:n[1]||(n[1]=d=>x(!1)),disabled:a.isTimeAttackOn},ct,8,nt),t("button",{type:"button",class:"btn btn-dark",onClick:n[2]||(n[2]=d=>x(!0)),disabled:a.isTimeAttackOn},dt,8,rt),t("button",{type:"button",class:"btn btn-dark",onClick:V,disabled:a.isTimeAttackOn},mt,8,ht)])],40,st),t("button",{class:"btn btn-dark mt-3",onClick:N,disabled:a.isTimeAttackOn},[z(" Time Attack "),pt],8,ft)]),_:1}))}};export{Tt as default};
