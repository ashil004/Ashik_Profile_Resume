import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-white/5 py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        
        <div>
          <h3 className="text-xl font-bold text-white tracking-wider uppercase">
            Ashik <span className="text-blue-500">Dev</span>
          </h3>
          <p className="mt-2 text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
            Building high-performance web applications with stunning 3D experiences.
          </p>
        </div>

        
        <div className="flex justify-center gap-6 text-sm font-medium">
         <Link to='about' smooth={true} duration={500}>About</Link>
          <Link to='projects' smooth={true} duration={500}>Projects</Link>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </div>

        
        <div className="flex justify-center md:justify-end gap-5">
          <a 
            href="https://github.com/ashil004" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-all"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/ashik-pramanik-562234340/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-all"
          >
            LinkedIn
          </a>
        </div>

      </div>

     
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>© 2026 Ashik Dev. All rights reserved.</p>
        <p className="font-mono">&lt;Design & Code by Ashik /&gt;</p>
      </div>
    </footer>
  );
}