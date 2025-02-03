import{i as C,k,a6 as S,r as a,j as e,a7 as N,a8 as I,x as D,d as R,l as j,a9 as A,aa as E,ab as F,ac as M,ad as $,ae as z,af as U,ag as q,ah as P,ai as T}from"./vendor-B6vk4WfH.js";const B={apiKey:"AIzaSyDl6cyNeG1p0wH7ToWvrRMOmFdGtVctyOQ",authDomain:"portafolio-e76fa.firebaseapp.com",projectId:"portafolio-e76fa",storageBucket:"portafolio-e76fa.firebasestorage.app",messagingSenderId:"943108748382",appId:"1:943108748382:web:d652c48fcd25aac4b3f0cf"},y=C(B,"comments-app"),v=k(y),H=S(y),L=a.memo(({comment:r,formatDate:u,index:p})=>e.jsx("div",{className:"px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5",children:e.jsxs("div",{className:"flex items-start gap-3 ",children:[r.profileImage?e.jsx("img",{src:r.profileImage,alt:`${r.userName}'s profile`,className:"w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30",loading:"lazy"}):e.jsx("div",{className:"p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors",children:e.jsx(N,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-2",children:[e.jsx("h4",{className:"font-medium text-white truncate",children:r.userName}),e.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:u(r.createdAt)})]}),e.jsx("p",{className:"text-gray-300 text-sm break-words leading-relaxed relative bottom-2",children:r.content})]})]})})),O=a.memo(({onSubmit:r,isSubmitting:u,error:p})=>{const[l,m]=a.useState(""),[d,f]=a.useState(""),[w,h]=a.useState(null),[s,t]=a.useState(null),n=a.useRef(null),o=a.useRef(null);a.useCallback(c=>{const g=c.target.files[0];if(g){if(g.size>5*1024*1024)return;t(g);const b=new FileReader;b.onloadend=()=>h(b.result),b.readAsDataURL(g)}},[]);const i=a.useCallback(c=>{m(c.target.value),n.current&&(n.current.style.height="auto",n.current.style.height=`${n.current.scrollHeight}px`)},[]),x=a.useCallback(c=>{c.preventDefault(),!(!l.trim()||!d.trim())&&(r({newComment:l,userName:d,imageFile:s}),m(""),h(null),t(null),o.current&&(o.current.value=""),n.current&&(n.current.style.height="auto"))},[l,d,s,r]);return e.jsxs("form",{onSubmit:x,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2","data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsxs("label",{className:"block text-sm font-medium text-white",children:["Nombre ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("input",{type:"text",value:d,onChange:c=>f(c.target.value),z:!0,placeholder:"Ingresa tu nombre",className:"w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all",required:!0})]}),e.jsxs("div",{className:"space-y-2","data-aos":"fade-up","data-aos-duration":"1200",children:[e.jsxs("label",{className:"block text-sm font-medium text-white",children:["Mensaje ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("textarea",{ref:n,value:l,onChange:i,placeholder:"Escribe tu mensaje aqui...",className:"w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]",required:!0})]}),e.jsxs("button",{type:"submit",disabled:u,"data-aos":"fade-up","data-aos-duration":"1000",className:"relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed",children:[e.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"}),e.jsx("div",{className:"relative flex items-center justify-center gap-2",children:u?e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-4 h-4 animate-spin"}),e.jsx("span",{children:"Publicando..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Publicar Comentario"})]})})]})]})}),K=()=>{const[r,u]=a.useState([]),[p,l]=a.useState(!1),[m,d]=a.useState("");a.useEffect(()=>{R.init({once:!1,duration:1e3})},[]),a.useEffect(()=>{const s=j(v,"portfolio-comments"),t=A(s,E("createdAt","desc"));return F(t,n=>{const o=n.docs.map(i=>({id:i.id,...i.data()}));u(o)})},[]);const f=a.useCallback(async s=>{if(!s)return null;const t=M(H,`profile-images/${Date.now()}_${s.name}`);return await $(t,s),z(t)},[]),w=a.useCallback(async({newComment:s,userName:t,imageFile:n})=>{d(""),l(!0);try{const o=await f(n);await U(j(v,"portfolio-comments"),{content:s,userName:t,profileImage:o,createdAt:q()})}catch(o){d("Error al agregar comentario. Por favor, intenta de nuevo."),console.error("Error adding comment: ",o)}finally{l(!1)}},[f]),h=a.useCallback(s=>{if(!s)return"";const t=s.toDate(),o=Math.floor((new Date-t)/(1e3*60)),i=Math.floor(o/60),x=Math.floor(i/24);return o<1?"Just now":o<60?`${o}m ago`:i<24?`${i}h ago`:x<7?`${x}d ago`:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(t)},[]);return e.jsxs("div",{className:"w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl","data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("div",{className:"p-6 border-b border-white/10","data-aos":"fade-down","data-aos-duration":"800",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20",children:e.jsx(P,{className:"w-6 h-6 text-indigo-400"})}),e.jsxs("h3",{className:"text-xl font-semibold text-white",children:["Comentarios ",e.jsxs("span",{className:"text-indigo-400",children:["(",r.length,")"]})]})]})}),e.jsxs("div",{className:"p-6 space-y-6",children:[m&&e.jsxs("div",{className:"flex items-center gap-2 p-4 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl","data-aos":"fade-in",children:[e.jsx(T,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("p",{className:"text-sm",children:m})]}),e.jsx("div",{children:e.jsx(O,{onSubmit:w,isSubmitting:p,error:m})}),e.jsx("div",{className:"space-y-4 h-[300px] overflow-y-auto custom-scrollbar","data-aos":"fade-up","data-aos-delay":"200",children:r.length===0?e.jsxs("div",{className:"text-center py-8","data-aos":"fade-in",children:[e.jsx(N,{className:"w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-50"}),e.jsx("p",{className:"text-gray-400",children:"Sin comentarios aún. Inicia la conversación"})]}):r.map((s,t)=>e.jsx(L,{comment:s,formatDate:h,index:t},s.id))})]}),e.jsx("style",{jsx:!0,children:`
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(99, 102, 241, 0.5);
                border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(99, 102, 241, 0.7);
            }
        `})]})};export{K as default};
