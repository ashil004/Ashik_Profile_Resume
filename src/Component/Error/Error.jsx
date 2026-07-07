import React from 'react';

export default function Error() {
  
  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center px-6">
      
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[30rem] h-[30rem] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

     
      <div className="relative z-10 max-w-xl w-full text-center p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-slate-950/50">
        
        
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-red-400 via-rose-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
          404
        </h1>

        
        <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-200">
          Page Not Found
        </h2>

        
        <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-sm mx-auto">
          Oops! The page you are looking for doesn't exist or has been moved to another URL.
        </p>

        
        <div className="mt-10">
          <button 
            onClick={() => (window.location.href = '/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Back to Homepage
          </button>
        </div>

        
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs font-mono text-slate-600">
            Error Code: ERR_PAGE_NOT_FOUND
          </p>
        </div>

      </div>
    </section>
  );
}