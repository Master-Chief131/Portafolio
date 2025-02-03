const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SocialLinks-DXZSLRxa.js","assets/vendor-B6vk4WfH.js","assets/vendor-DvB2Xm2x.css","assets/Commentar-Dh6TA8-X.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./index-DVBTPm3Y.js";import{R as u,r as s,d as f,j as e,v as h,U as g,M as b,w as j,x as v,y as r}from"./vendor-B6vk4WfH.js";const w=u.lazy(()=>m(()=>import("./SocialLinks-DXZSLRxa.js"),__vite__mapDeps([0,1,2]))),y=u.lazy(()=>m(()=>import("./Commentar-Dh6TA8-X.js"),__vite__mapDeps([3,1,2]))),S=()=>{const[i,l]=s.useState({name:"",email:"",message:""}),[a,d]=s.useState(!1);s.useEffect(()=>{f.init({once:!1})},[]);const n=o=>{const{name:t,value:c}=o.target;l(p=>({...p,[t]:c}))},x=async o=>{o.preventDefault(),d(!0),r.fire({title:"Enviando mensaje...",html:"Por favor, espere un momento.",allowOutsideClick:!1,didOpen:()=>{r.showLoading()}});try{const t=o.target,c=new FormData(t);await t.submit(),r.fire({title:"Enviado!",text:"Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarme!",icon:"success",confirmButtonColor:"#6366f1",timer:2e3,timerProgressBar:!0}),l({name:"",email:"",message:""})}catch{r.fire({title:"Error!",text:"Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",icon:"error",confirmButtonColor:"#6366f1"})}finally{d(!1)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]",children:[e.jsx("h2",{"data-aos":"fade-down","data-aos-duration":"1000",className:"inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",children:e.jsx("span",{style:{color:"#6366f1",backgroundImage:"linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Contactame"})}),e.jsx("p",{"data-aos":"fade-up","data-aos-duration":"1100",className:"text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2",children:"¿Tienes alguna pregunta? Envíame un mensaje y me pondre en contacto lo mas pronto posible."})]}),e.jsx("div",{className:"h-auto py-10 flex items-center justify-center px-[5%] md:px-0",id:"Contact",children:e.jsxs("div",{className:"container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12",children:[e.jsxs("div",{"data-aos":"fade-right","data-aos-duration":"1200",className:"bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10",children:[e.jsxs("div",{className:"flex justify-between items-start mb-8",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",children:"Mensaje Directo"}),e.jsx("p",{className:"text-gray-400",children:"Si tienes alguna pregunta o comentario, no dudes en enviarme un mensaje"})]}),e.jsx(h,{className:"w-10 h-10 text-[#6366f1] opacity-50"})]}),e.jsxs("form",{action:"https://formsubmit.co/e73767964e691d50d0079007c04beae8",method:"POST",onSubmit:x,className:"space-y-6",children:[e.jsx("input",{type:"hidden",name:"_template",value:"table"}),e.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),e.jsx("input",{type:"hidden",name:"_next",value:"https://luis-marquez.site/thank-you"}),e.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"100",className:"relative group",children:[e.jsx(g,{className:"absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"}),e.jsx("input",{type:"text",name:"name",placeholder:"Nombre",value:i.name,onChange:n,disabled:a,className:"w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50",required:!0})]}),e.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"200",className:"relative group",children:[e.jsx(b,{className:"absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"}),e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:i.email,onChange:n,disabled:a,className:"w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50",required:!0})]}),e.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"300",className:"relative group",children:[e.jsx(j,{className:"absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"}),e.jsx("textarea",{name:"message",placeholder:"Mensaje",value:i.message,onChange:n,disabled:a,className:"w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50",required:!0})]}),e.jsxs("button",{"data-aos":"fade-up","data-aos-delay":"400",type:"submit",disabled:a,className:"w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",children:[e.jsx(v,{className:"w-5 h-5"}),a?"Enviando...":"Enviar Mensaje"]})]}),e.jsx("div",{className:"mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading Social Links..."}),children:e.jsx(w,{})})})]}),e.jsx("div",{className:"bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-300 hover:shadow-[#6366f1]/10",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading Comments..."}),children:e.jsx(y,{})})})]})})]})};export{S as default};
