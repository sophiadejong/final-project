import{u as $,r as O,o as d,c,b as t,a as f,w as H,t as h,d as x,e as y,f as U,g as V,s as g,h as m,i as b,v as C,j as S,k as E,l as A,n as F,_ as I,F as B,m as P,p as W}from"./file_index.cf0488d4.js";const j={class:"main-container"},q={id:"main-menu",class:"main-menu container-header"},z=t("h2",null,"TO-DO TASK APP",-1),J={id:"welcomemsg",class:""},K=t("u",null,"Username:",-1),L=y("\xA0"),R={id:"today"},G=y("Today is: "),Q={__name:"Header",setup(l){const s=U(),o=$(),r=Date.now(),n=new Date(r),p=o.user.email,e=async()=>{try{await $().signOut(),s.push({path:"/auth/login"})}catch(a){errorMsg.value=a.message,setTimeout(()=>{errorMsg.value=null},5e3)}};return(a,i)=>{const k=O("router-link");return d(),c("div",j,[t("div",null,[t("div",q,[f(k,{to:"/"},{default:H(()=>[z]),_:1}),t("p",J,[K,t("b",null,[L,t("span",null,h(x(p)),1)])]),t("p",R,[G,t("b",null,h(x(n).toDateString()),1)]),t("button",{onClick:e,type:"button",id:"btnsignout"},"Sign Out")])])])}}},_=V("task",{state:()=>({tasks:[]}),actions:{async getTasks(){const{data:l}=await g.from("task").select("*").order("id",{ascending:!1});return this.tasks=l,this.tasks},async addTask(l,s){console.log($().user.id),await g.from("task").insert([{user_id:$().user.id,title:l,is_completed:!1,description:s}])},async editTask(l,s,o){await g.from("task").update({title:l,description:s}).eq("id",o)},async deleteTask(l){await g.from("task").delete().match({id:l})},async completedTask(l,s){await g.from("task").update({is_completed:s}).match({id:l})}}});const X={class:"container-tasks"},Y={class:"task-form",id:"formInputs"},Z=t("div",{class:"title-add"},"Add a new task",-1),tt={class:"show-error"},et={key:0,class:"",role:"alert"},st=["onClick"],ot={__name:"NewTask",emits:["childEmitTask"],setup(l,{emit:s}){_();const o=m(""),r=m(""),n=m(!1),u=m(null),p=()=>{if(o.value.length===0||r.value.length===0)n.value=!0,u.value="Task needs a title and description to be saved",setTimeout(()=>{n.value=!1},5e3);else{const e={title:o.value,description:r.value};s("childEmitTask",e),o.value="",r.value="",id.value=""}};return(e,a)=>(d(),c("div",X,[t("div",Y,[Z,b(t("input",{type:"text",id:"form3Example1",class:"",placeholder:"New task title","onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i)},null,512),[[C,o.value]]),t("div",null,[b(t("textarea",{type:"text",id:"form3Example2",class:"",placeholder:"Description","onUpdate:modelValue":a[1]||(a[1]=i=>r.value=i)},null,512),[[C,r.value]])]),t("div",tt,[n.value?(d(),c("p",et,h(u.value),1)):S("",!0),t("button",{onClick:E(p,["prevent"]),class:"btn-add-task"},"Add a task",8,st)])])]))}};const at={class:"date-item"},lt={class:"time"},it={class:"title"},nt={class:"description"},dt={class:"buttons-container"},ct=y(" Completed task "),rt={key:0},ut={key:1,class:""},_t=y(" Show edit "),mt=t("i",{class:""},null,-1),pt=[_t,mt],ht=y(" Delete task "),vt=t("i",{class:""},null,-1),kt=[ht,vt],gt={key:0,class:"edit-container"},ft=["onSubmit"],bt=["placeholder"],yt=["placeholder"],Tt={class:"edit-close-btns"},wt={key:0,class:"",role:"alert"},$t=["onClick"],xt={__name:"TaskItem",props:["item"],emits:["childEditStatus","childEmitTask","childToggleStatus","childDeleteStatus"],setup(l,{emit:s}){const o=l,r=()=>{p.value=!p.value},n=m(o.item.title),u=m(o.item.description),p=m(!1),e=m(!1),a=A(()=>new Date(o.item.created_at).toDateString()),i=()=>{if(n.value.length===0||u.value.length===0)k.value=!0,D.value="Task needs a title and description to be saved",setTimeout(()=>{k.value=!1},5e3);else{const T={title:n.value,description:u.value,id:o.item.id};s("childEditStatus",T),n.value="",u.value=""}},k=m(!1),D=m(null),M=T=>{e.value=!e.value,s("childToggleStatus",o.item.id)},N=()=>{s("childDeleteStatus",o.item.id)};return(T,v)=>(d(),c("div",{class:F(["item-container",{"completed-task-bg":l.item.is_completed}])},[t("div",at,[t("div",lt,h(x(a)),1)]),t("h3",it,h(l.item.title),1),t("p",nt,h(l.item.description),1),t("div",dt,[t("button",{type:"button",class:"completed-task","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark as complete",onClick:M},[ct,e.value?(d(),c("span",ut)):(d(),c("span",rt))]),t("button",{type:"button",class:"show-edit","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit",onClick:r},pt),t("button",{type:"button",class:"delete-task","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete",onClick:N},kt)]),p.value?(d(),c("div",gt,[t("form",{onSubmit:E(i,["prevent"]),class:"edit-task"},[b(t("input",{type:"text",id:"form3Example20",class:"",placeholder:o.item.title,"onUpdate:modelValue":v[0]||(v[0]=w=>n.value=w)},null,8,bt),[[C,n.value]]),t("div",null,[b(t("textarea",{type:"text",id:"form3Example21",class:"",placeholder:o.item.description,"onUpdate:modelValue":v[1]||(v[1]=w=>u.value=w)},null,8,yt),[[C,u.value]])]),t("div",Tt,[k.value?(d(),c("p",wt,h(D.value),1)):S("",!0),t("button",{onClick:E(i,["prevent"]),type:"submit",id:"btnEdit",class:"edit-btn"},"Edit task",8,$t),t("button",{onClick:v[2]||(v[2]=w=>p.value=!1),type:"",id:"closeEdit",class:"close-edit-btn"},"Close edit task")])],40,ft)])):S("",!0)],2))}};const Ct={},St=t("div",{class:"footer"},[t("div",{class:"show"},[t("p",null,[t("b",null,"Sophia de Jong")])]),t("div",null,[t("p",null,"2022")]),t("div",{class:"hide"},[t("p",null,[t("b",null,"Ironhack BCN")])])],-1),Et=[St];function Dt(l,s){return d(),c("footer",null,Et)}const At=I(Ct,[["render",Dt]]);const Mt={class:"all-items"},Nt=t("h4",{id:"show-hide"},"SHOW:",-1),Ot={class:"show-filters"},Ht=t("h4",{id:"hide-show"},"SHOW:",-1),Ut={class:"container-old-items"},Ft={__name:"Home",setup(l){const s=m("showAll");_().getTasks();const o=async e=>{await _().addTask(e.title,e.description),_().getTasks()},r=A(()=>_().tasks),n=async(e,a)=>{a=!a,await _().completedTask(e,a),_().getTasks()},u=async e=>{await _().editTask(e.title,e.description,e.id),console.log(e),_().getTasks()},p=async e=>{await _().deleteTask(e),_().getTasks()};return(e,a)=>(d(),c("body",null,[f(Q),t("div",Mt,[Nt,t("div",Ot,[Ht,t("button",{onClick:a[0]||(a[0]=i=>s.value="showAll"),class:"filter-btns",style:{"background-color":"blue",color:"white"}},"All tasks"),t("button",{onClick:a[1]||(a[1]=i=>s.value="completedTasks"),class:"filter-btns",style:{"background-color":"green",color:"white"}},"Completed"),t("button",{onClick:a[2]||(a[2]=i=>s.value="incompletedTasks"),class:"filter-btns",style:{"background-color":"red",color:"white"}},"Incompleted")]),t("div",Ut,[f(ot,{onChildEmitTask:o}),(d(!0),c(B,null,P(x(r),i=>b((d(),c("div",{key:i.id},[f(xt,{item:i,onChildToggleStatus:n,onChildEditStatus:u,onChildDeleteStatus:p},null,8,["item"])])),[[W,s.value==="showAll"?!0:s.value==="completedTasks"?i.is_completed:!i.is_completed]])),128))])]),f(At)]))}};export{Ft as default};