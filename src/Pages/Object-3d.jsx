import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";

const Object3D = () => {
  return (
    <Spline scene="https://prod.spline.design/niRx4i1tDLyn-RdG/scene.splinecode" />
    // <div className="min-h-screen flex items-center justify-center">
    //   <div className="absolute top-4 left-4 inline-flex items-center justify-center px-4 py-2 ">
    //     <Link
    //       to="/"
    //       className="absolute top-4 left-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
    //     >
    //       Regresar
    //     </Link>
    //   </div>
    //   <div className="flex justify-center mb-6">
    //     <Suspense fallback={<div>Cargando modelo...</div>}>
    //       <Spline scene="https://prod.spline.design/niRx4i1tDLyn-RdG/scene.splinecode" />
    //     </Suspense>
    //   </div>
    // </div>
  );
}

export default Object3D;