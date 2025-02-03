const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardProject-D8EnHgdB.js","assets/vendor-B6vk4WfH.js","assets/vendor-DvB2Xm2x.css","assets/TechStackIcon-DlIjvT4A.js","assets/Certificate-OvRsB0RP.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./index-DVBTPm3Y.js";import{i as z,k as B,u as O,r,d as V,l as S,m as k,j as e,n as N,o as W,T as F,p,C as J,f as q,q as $,s as H,R as x,t as G,P as f}from"./vendor-B6vk4WfH.js";const Q={apiKey:"AIzaSyDl6cyNeG1p0wH7ToWvrRMOmFdGtVctyOQ",authDomain:"portafolio-e76fa.firebaseapp.com",projectId:"portafolio-e76fa",storageBucket:"portafolio-e76fa.firebasestorage.app",messagingSenderId:"943108748382",appId:"1:943108748382:web:d652c48fcd25aac4b3f0cf"},K=z(Q),C=B(K),Y=x.lazy(()=>h(()=>import("./CardProject-D8EnHgdB.js"),__vite__mapDeps([0,1,2]))),U=x.lazy(()=>h(()=>import("./TechStackIcon-DlIjvT4A.js"),__vite__mapDeps([3,1,2]))),X=x.lazy(()=>h(()=>import("./Certificate-OvRsB0RP.js"),__vite__mapDeps([4,1,2]))),T=({onClick:o,isShowingMore:s})=>e.jsxs("button",{onClick:o,className:`\r
      px-3 py-1.5\r
      text-slate-300 \r
      hover:text-white \r
      text-sm \r
      font-medium \r
      transition-all \r
      duration-300 \r
      ease-in-out\r
      flex \r
      items-center \r
      gap-2\r
      bg-white/5 \r
      hover:bg-white/10\r
      rounded-md\r
      border \r
      border-white/10\r
      hover:border-white/20\r
      backdrop-blur-sm\r
      group\r
      relative\r
      overflow-hidden\r
    `,children:[e.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:[s?"Ver Menos":"Ver Más",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`
          transition-transform 
          duration-300 
          ${s?"group-hover:-translate-y-0.5":"group-hover:translate-y-0.5"}
        `,children:e.jsx("polyline",{points:s?"18 15 12 9 6 15":"6 9 12 15 18 9"})})]}),e.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"})]});function d({children:o,value:s,index:i,...n}){return e.jsx("div",{role:"tabpanel",hidden:s!==i,id:`full-width-tabpanel-${i}`,"aria-labelledby":`full-width-tab-${i}`,...n,children:s===i&&e.jsx(N,{sx:{p:{xs:1,sm:3}},children:e.jsx(G,{children:o})})})}d.propTypes={children:f.node,index:f.number.isRequired,value:f.number.isRequired};function u(o){return{id:`full-width-tab-${o}`,"aria-controls":`full-width-tabpanel-${o}`}}const Z=[{icon:"python.svg",language:"Python"},{icon:"java.svg",language:"Java"},{icon:"springboot.svg",language:"Spring Boot"},{icon:"html.svg",language:"HTML"},{icon:"css.svg",language:"CSS"},{icon:"javascript.svg",language:"JavaScript"},{icon:"reactjs.svg",language:"ReactJS"},{icon:"nodejs.svg",language:"Node JS"},{icon:"bootstrap.svg",language:"Bootstrap"},{icon:"docker.svg",language:"Docker"},{icon:"mysql.svg",language:"MySQL"},{icon:"firebase.svg",language:"Firebase"}];function se(){const o=O(),[s,i]=r.useState(0),[n,I]=r.useState([]),[g,P]=r.useState([]),[m,_]=r.useState(!1),[b,L]=r.useState(!1),c=window.innerWidth<768?4:6;r.useEffect(()=>{V.init({once:!1})},[]);const j=r.useCallback(async()=>{try{const t=S(C,"projects"),a=S(C,"certificates"),[M,R]=await Promise.all([k(t),k(a)]),w=M.docs.map(l=>({id:l.id,...l.data(),TechStack:l.data().TechStack||[]})),y=R.docs.map(l=>l.data());I(w),P(y),localStorage.setItem("projects",JSON.stringify(w)),localStorage.setItem("certificates",JSON.stringify(y))}catch(t){console.error("Error fetching data:",t)}},[]);r.useEffect(()=>{j()},[j]);const A=(t,a)=>{i(a)},v=r.useCallback(t=>{t==="projects"?_(a=>!a):L(a=>!a)},[]),D=m?n:n.slice(0,c),E=b?g:g.slice(0,c);return e.jsxs("div",{className:"md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden",id:"Portofolio",children:[e.jsxs("div",{className:"text-center pb-10","data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("h2",{className:"inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",children:e.jsx("span",{style:{color:"#6366f1",backgroundImage:"linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Presentación de Portafolio"})}),e.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2",children:"Explora mi recorrido a traves de los proyectos, certificados y experiencias que he tenido. Cada proyecto y certificado ha sido una oportunidad para aprender y mejorar mis habilidades."})]}),e.jsxs(N,{sx:{width:"100%"},children:[e.jsx(W,{position:"static",elevation:0,sx:{bgcolor:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"20px",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",backdropFilter:"blur(10px)",zIndex:0}},className:"md:px-4",children:e.jsxs(F,{value:s,onChange:A,textColor:"secondary",indicatorColor:"secondary",variant:"fullWidth",sx:{minHeight:"70px","& .MuiTab-root":{fontSize:{xs:"0.9rem",md:"1rem"},fontWeight:"600",color:"#94a3b8",textTransform:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",padding:"20px 0",zIndex:1,margin:"8px",borderRadius:"12px","&:hover":{color:"#ffffff",backgroundColor:"rgba(139, 92, 246, 0.1)",transform:"translateY(-2px)","& .lucide":{transform:"scale(1.1) rotate(5deg)"}},"&.Mui-selected":{color:"#fff",background:"linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",boxShadow:"0 4px 15px -3px rgba(139, 92, 246, 0.2)","& .lucide":{color:"#a78bfa"}}},"& .MuiTabs-indicator":{height:0},"& .MuiTabs-flexContainer":{gap:"8px"}},children:[e.jsx(p,{icon:e.jsx(J,{className:"mb-2 w-5 h-5 transition-all duration-300"}),label:"Proyectos",...u(0)}),e.jsx(p,{icon:e.jsx(q,{className:"mb-2 w-5 h-5 transition-all duration-300"}),label:"Certificados",...u(1)}),e.jsx(p,{icon:e.jsx($,{className:"mb-2 w-5 h-5 transition-all duration-300"}),label:"Tecnologías",...u(2)})]})}),e.jsxs(H,{axis:o.direction==="rtl"?"x-reverse":"x",index:s,onChangeIndex:i,children:[e.jsxs(d,{value:s,index:0,dir:o.direction,children:[e.jsx("div",{className:"container mx-auto flex justify-center items-center overflow-hidden",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5",children:D.map((t,a)=>e.jsx("div",{"data-aos":a%3===0?"fade-up-right":a%3===1?"fade-up":"fade-up-left","data-aos-duration":a%3===0?"1000":a%3===1?"1200":"1000",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading Card Project..."}),children:e.jsx(Y,{Img:t.Img,Title:t.Title,Description:t.Description,Link:t.Link,id:t.id})})},t.id||a))})}),n.length>c&&e.jsx("div",{className:"mt-6 w-full flex justify-start",children:e.jsx(T,{onClick:()=>v("projects"),isShowingMore:m})})]}),e.jsxs(d,{value:s,index:1,dir:o.direction,children:[e.jsx("div",{className:"container mx-auto flex justify-center items-center overflow-hidden",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4",children:E.map((t,a)=>e.jsx("div",{"data-aos":a%3===0?"fade-up-right":a%3===1?"fade-up":"fade-up-left","data-aos-duration":a%3===0?"1000":a%3===1?"1200":"1000",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading Certificate..."}),children:e.jsx(X,{ImgSertif:t.Img})})},a))})}),g.length>c&&e.jsx("div",{className:"mt-6 w-full flex justify-start",children:e.jsx(T,{onClick:()=>v("certificates"),isShowingMore:b})})]}),e.jsx(d,{value:s,index:2,dir:o.direction,children:e.jsx("div",{className:"container mx-auto flex justify-center items-center overflow-hidden pb-[5%]",children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5",children:Z.map((t,a)=>e.jsx("div",{"data-aos":a%3===0?"fade-up-right":a%3===1?"fade-up":"fade-up-left","data-aos-duration":a%3===0?"1000":a%3===1?"1200":"1000",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading Tech Stack Icon..."}),children:e.jsx(U,{TechStackIcon:t.icon,Language:t.language})})},a))})})})]})]})]})}export{se as default};
