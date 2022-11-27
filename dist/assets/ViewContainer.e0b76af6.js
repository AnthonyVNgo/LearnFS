import{_ as n,a as e,e as c,n as s,f as a,t as i,k as l,p as h,l as p,m as d,q as o}from"./index.a1632002.js";const y=t=>(h("data-v-8fbc72c5"),t=t(),p(),t),v={class:"card-toast-container d-flex justify-content-center",style:{position:"absolute",top:"20px",left:"10px",right:"10px","z-index":"5"}},w=d('<div class="card-body" data-v-8fbc72c5><span class="me-3" data-v-8fbc72c5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16" data-v-8fbc72c5><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-8fbc72c5></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" data-v-8fbc72c5></path></svg></span><span data-v-8fbc72c5> Incorrect, try again </span></div>',1),b=[w],f=d('<div class="card-body" data-v-8fbc72c5><span class="me-3" data-v-8fbc72c5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" data-v-8fbc72c5><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-v-8fbc72c5></path><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" data-v-8fbc72c5></path></svg></span><span data-v-8fbc72c5> Invalid characters, use letters only </span></div>',1),g=[f],m={class:"card-body d-flex"},u=y(()=>a("span",{class:"me-3"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle",viewBox:"0 0 16 16"},[a("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),a("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"})])],-1)),x={key:0},_={key:1},k={key:2},C={__name:"Toast",props:{toastColor:{type:String},isOpacity1:{type:Boolean},correctCount:{type:Number},isTimeAttackOn:{type:Boolean},onWordView:{type:Boolean},onLetterView:{type:Boolean}},setup(t){return(r,S)=>(e(),c("div",v,[t.toastColor==="danger"?(e(),c("div",{key:0,class:s(["card bg-danger text-white",{"opacity-1":t.isOpacity1,"opacity-1 opacity-0":!t.isOpacity1}]),style:{width:"500px"}},b,2)):t.toastColor==="warning"?(e(),c("div",{key:1,class:s(["card bg-warning",{"opacity-1":t.isOpacity1,"opacity-1 opacity-0":!t.isOpacity1}]),style:{width:"500px"}},g,2)):t.toastColor==="success"?(e(),c("div",{key:2,class:s(["card bg-primary text-white",{"opacity-1":t.isOpacity1,"opacity-1 opacity-0":!t.isOpacity1}]),style:{width:"500px"}},[a("div",m,[u,t.correctCount>1&&!t.isTimeAttackOn&&t.onLetterView?(e(),c("span",x,"Nice! You're on a "+i(t.correctCount)+" letter streak",1)):t.correctCount>1&&!t.isTimeAttackOn&&t.onWordView?(e(),c("span",_,"Nice! You're on a "+i(t.correctCount)+" word streak",1)):(e(),c("span",k,"Good job!"))])],2)):l("",!0)]))}},I=n(C,[["__scopeId","data-v-8fbc72c5"]]),z={},A={class:"container"},B={class:"row align-items-center",style:{height:"50vh",position:"relative"}},O={class:"col"},V={class:"row justify-content-center"},$={class:"col",style:{"text-align":"center","max-width":"400px"}};function M(t,r){return e(),c("div",A,[a("div",B,[a("div",O,[o(t.$slots,"toast"),o(t.$slots,"cards")])]),a("div",V,[a("div",$,[o(t.$slots,"input")])])])}const N=n(z,[["render",M]]);export{I as T,N as V};
