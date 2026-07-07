import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [activeTab, setActiveTab] = useState('bio');

  
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full py-28 bg-slate-950 text-white overflow-hidden z-10 border-t border-white/5">
      
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs text-blue-300 font-mono uppercase tracking-widest">who am i</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Myself</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 w-full rounded-2xl bg-[#050b14]/80 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-slate-500">ashik_developer.json</div>
              <div className="w-12" />
            </div>

            
            <div className="flex border-b border-white/5 bg-slate-950/40 text-xs font-mono">
              <button 
                onClick={() => setActiveTab('bio')}
                className={`relative px-5 py-2.5 border-r border-white/5 transition-all ${activeTab === 'bio' ? 'bg-[#050b14] text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                📄 bio.json
                
                {activeTab === 'bio' && (
                  <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" />
                )}
              </button>
              <button 
                onClick={() => setActiveTab('stack')}
                className={`relative px-5 py-2.5 border-r border-white/5 transition-all ${activeTab === 'stack' ? 'bg-[#050b14] text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                📄 tech_stack.json
                {activeTab === 'stack' && (
                  <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" />
                )}
              </button>
            </div>

            
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'bio' && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-amber-300">"Md.Ashik Paramanik"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-amber-300">"Hybrid Application Developer"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">education</span>: <span className="text-amber-300">"B.Sc. in Computer Science Engineering"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">University</span>: <span className="text-amber-300">"Rabindra Maitree University Kushtia"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-amber-300">"Building high-performance web solutions & 3D user experiences"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">approach</span>: <span className="text-amber-300">"Clean architecture from backend to stunning visual frontend"</span></p>
                    <p>&#125;;</p>
                    <p className="mt-4 text-slate-500">// I love solving complex web problems with React and Node.js.</p>
                  </motion.div>
                )}

                {activeTab === 'stack' && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">techStack</span> = &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">frontend</span>: [<span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"Tailwind CSS"</span>],</p>
                    <p className="pl-4"><span className="text-cyan-400">backend</span>: [<span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"Express.js"</span>],</p>
                    <p className="pl-4"><span className="text-cyan-400">database</span>: [<span className="text-amber-300">"MongoDB"</span>],</p>
                    <p className="pl-4"><span className="text-cyan-400">creative_3D</span>: [<span className="text-amber-300">"Three.js"</span>, <span className="text-amber-300">"React Three Fiber"</span>]</p>
                    <p>&#125;;</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6"
          >
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }} // হোভার ইফেক্ট
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md cursor-default select-none"
            >
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                Engineering Excellence
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                কম্পিউটার সায়েন্সের ব্যাকগ্রাউন্ড থাকায় কোডের পারফরম্যান্স, ডেটা অপ্টিমাইজেশন এবং অ্যালগরিদম নিয়ে কাজ করতে স্বাচ্ছন্দ্যবোধ করি।
              </p>
            </motion.div>

            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md cursor-default select-none"
            >
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
                Creative & Hybrid Focus
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                শুধু ডাটাবেজ বা ইউজার ইন্টারফেস নয়, আমার লক্ষ্য ব্যাক-এন্ডের শক্তিশালী আর্কিটেকচারের সাথে ফ্রন্ট-এন্ডের নিখুঁত ৩ডি ভিজ্যুয়াল ইফেক্টসের একটি ইউনিক ফিউশন তৈরি করা।
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}