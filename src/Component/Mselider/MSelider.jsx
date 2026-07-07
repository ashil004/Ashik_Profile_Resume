import React from 'react';
import { motion } from 'framer-motion'; 

export default function MSelider() {
  const titles = [
    "Crafting Digital 3D Experiences",
    "Full-Stack Architecture & Integration",
    "Hybrid Application Developer",
    "Next-Gen Web Applications",
    "React.js & Node.js Specialist"
  ];

  
  const duplicatedTitles = [...titles, ...titles];

  return (
    <div className="w-full bg-slate-950 py-6 border-y border-white/5 relative overflow-hidden flex items-center">
      
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      
      
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      
      <motion.div 
        className="flex whitespace-nowrap shrink-0"
        animate={{ x: [0, "-50%"] }} 
        transition={{
          ease: "linear",
          duration: 20, 
          repeat: Infinity, 
        }}
      >
        {duplicatedTitles.map((title, index) => (
          <span 
            key={index} 
            className="text-xl md:text-2xl font-mono font-bold text-slate-400 hover:text-blue-400 transition-colors mx-16 cursor-pointer uppercase tracking-wider select-none inline-flex items-center"
          >
            {title} <span className="text-blue-500/30 ml-12">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}