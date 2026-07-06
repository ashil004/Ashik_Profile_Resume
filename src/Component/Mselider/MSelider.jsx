import React from 'react';
import { motion } from 'framer-motion'; // শুধু মোশন ইম্পোর্ট করা হয়েছে

export default function MSelider() {
  const titles = [
    "Crafting Digital 3D Experiences",
    "Full-Stack Architecture & Integration",
    "Hybrid Application Developer",
    "Next-Gen Web Applications",
    "React.js & Node.js Specialist"
  ];

  // লিস্টটি ডুপ্লিকেট করা হয়েছে যাতে অ্যানিমেশন ব্রেক না হয়ে অনবরত চলতে থাকে
  const duplicatedTitles = [...titles, ...titles];

  return (
    <div className="w-full bg-slate-950 py-6 border-y border-white/5 relative overflow-hidden flex items-center">
      
      {/* বাম পাশের প্রিমিয়াম ফেড ইফেক্ট */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      
      {/* ডান পাশের প্রিমিয়াম ফেড ইফেক্ট */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* পিওর মোশন ট্র্যাক (অনন্তকাল লুপে চলবে) */}
      <motion.div 
        className="flex whitespace-nowrap shrink-0"
        animate={{ x: [0, "-50%"] }} // ০ থেকে শুরু হয়ে ঠিক অর্ধেক বামে সরবে
        transition={{
          ease: "linear",
          duration: 20, // স্পিড বাড়ানোর জন্য সেকেন্ড কমাতে পারেন (যেমন: 15)
          repeat: Infinity, // লুপ চলতেই থাকবে
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