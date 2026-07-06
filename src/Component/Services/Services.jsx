import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

// ================= স্ট্যাটিক সার্ভিস ডেটা (কম্পোনেন্টের ভেতরেই যুক্ত করা হলো) =================
const staticServicesData = [
  {
    id: 1,
    iconName: "Layers",
    title: "Hybrid App Development",
    description: "React Native এবং মডার্ন ফ্রেমওয়ার্ক দিয়ে iOS ও Android-এর জন্য হাই-পারফরম্যান্স এবং ফ্লেক্সিবল ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরি করা।",
    tech: ["React Native", "Node.js", "Context API"],
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    iconName: "Code2",
    title: "Full-Stack Web Apps",
    description: "React.js এবং Node.js/Express.js দিয়ে স্কেলেবল ব্যাকএন্ড ও সুপার-ফাস্ট ফ্রন্টএন্ড আর্কিটেকচার ডিজাইন, যা রিয়েল-টাইম ডেটা এবং সিকিউরিটি হ্যান্ডেল করে।",
    tech: ["React.js", "Node.js", "MongoDB", "Clerk"],
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    iconName: "Sparkles",
    title: "3D Web Experiences",
    description: "Three.js এবং React Three Fiber (R3F) ব্যবহার করে ইন্টারেক্টিভ ও অ্যানিমেশনে ভরপুর একদম নেক্সট-লেভেল মডার্ন ৩D ওয়েবসাইট ডেভেলপমেন্ট।",
    tech: ["Three.js", "R3F", "GSAP", "Tailwind"],
    iconColor: "text-cyan-400"
  },
  {
    id: 4,
    iconName: "Cpu",
    title: "AI & API Integration",
    description: "যেকোনো সিস্টেমে ইন্টেলিজেন্ট AI মডেল (যেমন Flash 2.5) এবং কাস্টম API লেয়ার যুক্ত করে ডেটা প্রসেসিং ও অটোমেশন সলিউশন তৈরি করা।",
    tech: ["AI Model Sync", "REST APIs", "Node Automation"],
    iconColor: "text-emerald-400"
  },
  {
    id: 5,
    iconName: "Globe",
    title: "Web Monetization & SEO",
    description: "গ্লোবাল অডিয়েন্স ও হাই ট্রাফিকের কথা মাথায় রেখে সম্পূর্ণ SEO অপ্টিমাইজড ব্লগ বা সাইট তৈরি, যা AdSense বা মডার্ন রেভিনিউ মডেল ফ্রেন্ডলি।",
    tech: ["SEO Architecture", "AdSense Opt.", "Core Web Vitals"],
    iconColor: "text-indigo-400"
  },
  {
    id: 6,
    iconName: "Smartphone",
    title: "UI/UX Architecture",
    description: "ক্লিন কোড স্ট্রাকচার, ডাইনামিক থিমিং এবং মডার্ন ইন্টারফেস মেকানিজম ব্যবহার করে চোখের শান্তি দেওয়া গ্লসি ফ্রন্টএন্ড লেআউট তৈরি করা।",
    tech: ["Figma to Code", "Dynamic Themes", "Micro-Anims"],
    iconColor: "text-pink-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32 bg-[#020617] text-white overflow-hidden border-t border-white/[0.03]">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/3 right-1/4 w-[45rem] h-[45rem] rounded-full bg-indigo-600/[0.01] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* হেডার সেকশন */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">Interactive Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Elite Digital <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Architecture</span>
          </h2>
        </div>

        {/* স্ট্যাটিক ডেটা ম্যাপ গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticServicesData.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ================= প্রতিটি কার্ডের জন্য ডাইনামিক ৩D ও মাউস লাইটিং ইফেক্ট =================
function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  
  // Framer Motion Values (রি-রেন্ডার ছাড়া স্মুথ অ্যানিমেশনের জন্য)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // কার্সারের রিলেটিভ পজিশন
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    // ৩D কার্ড টিল্ট (Tilt) হিসাব
    const multiplier = 10; 
    const rX = ((y - height / 2) / height) * -multiplier;
    const rY = ((x - width / 2) / width) * multiplier;
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    // মাউস সরালে রি-সেট হবে
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-white/[0.001] border border-white/[0.05] backdrop-blur-3xl transition-shadow duration-500 will-change-transform"
    >
      
      {/* 🔮 ডাইনামিক মাউস স্পটলাইট বর্ডার */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
          border: "1px solid transparent",
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          inset: "-1px",
          zIndex: 1
        }}
      />

      {/* 🌟 ডাইনামিক ব্যাকগ্রাউন্ড রেডিয়াল লাইট */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.05),
              transparent 80%
            )
          `
        }}
      />

      {/* কন্টেন্ট লেয়ার (translateZ দিয়ে থ্রিডি ডেপথ আনা হয়েছে) */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="relative z-10">
        
        {/* আইকন বক্স */}
        <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-white/[0.05] group-hover:border-white/20 transition-all duration-300">
          <IconComponent className={`w-6 h-6 ${service.iconColor} transition-transform duration-500 group-hover:rotate-[10deg]`} />
        </div>

        {/* টাইটেল ও টেক্সট */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors flex items-center justify-between">
            <span>{service.title}</span>
            <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-indigo-400" />
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light min-h-[72px]">
            {service.description}
          </p>
        </div>

        {/* টেক ট্যাগস */}
        <div className="mt-6 pt-5 border-t border-white/[0.03] flex flex-wrap gap-1.5">
          {service.tech.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="text-[10px] font-mono font-medium text-slate-500 bg-white/[0.01] border border-white/[0.03] px-2.5 py-1 rounded-md group-hover:text-slate-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/[0.02] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* কার্ড সিরিয়াল নাম্বার */}
        <div className="absolute top-0 right-0 text-[10px] font-mono text-slate-700 select-none group-hover:text-indigo-500/40 transition-colors">
          // 0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}