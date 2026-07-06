import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
// Lucide এর সব আইকন অবজেক্ট হিসেবে নিয়ে আসা হলো
import * as LucideIcons from 'lucide-react'; 

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // ফেইড ইফেক্ট চাইলে ব্যবহার করতে পারেন

// প্রজেক্ট ডেটা (image কি ফিল্ড যুক্ত করা হয়েছে)
const projectData = [
  {
    id: 1,
    title: "Carpet Selling E-Commerce Platform",
    category: "E-Commerce ",
    image: 'https://i.ibb.co.com/9mkgKp1Q/Screenshot-1.png',
    description: "Zrs Flooring হলো গ্রাহকদের সুবিধার্থে ঘর বা অফিসের জন্য সেরা মানের কার্পেট এবং ফ্লোরিং সলিউশন খুঁজে পাওয়ার একটি রিয়েল-টাইম আধুনিক ই-কমার্স প্ল্যাটফর্ম। হাই-পারফরম্যান্স API এবং কাস্টম সাইজ ক্যালকুলেশন ফিচারে সমৃদ্ধ এই অ্যাপ্লিকেশনটি নিখুঁত ইউজার ইন্টারফেসের (UI) মাধ্যমে প্রিমিয়াম শপিংয়ের এক চমৎকার অভিজ্ঞতা প্রদান করে।",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB"],
    liveLink: "https://zrsflooring.com",
    githubLink: "https://github.com/ashil004/carpet_zrs",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    id: 2,
    title: "Degital University Notice Board",
    category: "Management System",
    image: 'https://i.ibb.co.com/bRQpqk5G/Screenshot-2.png',
    description: "বিশ্ববিদ্যালয়ের সুবিধার্থে সকল নোটিশ ও তথ্য রিয়েল-টাইমে পরিচালনা করার একটি আধুনিক এবং ইন্টেলিজেন্ট ম্যানেজমেন্ট সিস্টেম। সম্পূর্ণ থ্রিডি অ্যানিমেশনে ভরপুর গ্লসি ইউজার ইন্টারফেস সমৃদ্ধ এই প্ল্যাটফর্মে রয়েছে নেক্সট-লেভেল ইন্টারঅ্যাক্টিভিটি, স্মুথ স্ক্রোল এক্সপেরিয়েন্স এবং হাই-পারফরম্যান্স নোটিফিকেশন ফিচার, যা ক্যাম্পাসের অভ্যন্তরীণ যোগাযোগকে এক নতুন উচ্চতায় নিয়ে যায়।",
    tech: ["JavaScript", "React.js ", "MongoDB", "Express.js", "Tailwind CSS"],
    liveLink: "https://degitaluniversity.com",
    githubLink: "https://github.com/ashil004/student_management_ui",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    id: 3,
    title: "Protik Adunik",
    category: "Hospital Management System",
    image: "https://i.ibb.co.com/FbdWrx2V/Screenshot-3.png", 
    description: "রোগীদের সুবিধার্থে হাসপাতালের সার্বিক কার্যক্রম রিয়েল-টাইমে পরিচালনা করার একটি আধুনিক এবং ইন্টেলিজেন্ট ম্যানেজমেন্ট সিস্টেম। সম্পূর্ণ থ্রিডি অ্যানিমেশনে ভরপুর গ্লসি ইউজার ইন্টারফেস সমৃদ্ধ এই প্ল্যাটফর্মে রয়েছে নেক্সট-লেভেল ইন্টারঅ্যাক্টিভিটি, স্মুথ স্ক্রোল এক্সপেরিয়েন্স এবং হাই-পারফরম্যান্স ডক্টর-পেশেন্ট ট্র্যাকিং ফিচার, যা চিকিৎসাসেবা ও প্রশাসনিক ব্যবস্থাপনাকে এক নতুন উচ্চতায় নিয়ে যায়।",
    tech: ["Node.js", "React.js", "MongoDB", "Tailwind CSS", "Express.js"],
    liveLink: "#",
    githubLink: "https://github.com/ashil004/Hospital_Management_Protik",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: 4,
    title: "Portfolio",
    category: "Single Page Application",
    image: "https://i.ibb.co.com/nNkjpSDL/Screenshot-4.png", 
    description: "সফটওয়্যার ডেভলপমেন্টের দক্ষতা প্রদর্শনের জন্য সম্পূর্ণ থ্রিডি অ্যানিমেশনে ভরপুর গ্লসি ইউজার ইন্টারফেস সমৃদ্ধ একটি আধুনিক সিঙ্গেল পেজ পোর্টফোলিও। নেক্সট-লেভেল ইন্টারঅ্যাক্টিভিটি এবং স্মুথ স্ক্রোল এক্সপেরিয়েন্সের এই হাই-পারফরম্যান্স প্ল্যাটফর্মটি আমার প্রজেক্ট, ব্যাকএন্ড আর্কিটেকচার এবং টেকনিক্যাল দক্ষতাকে এক অনন্য ও দৃষ্টিনন্দন উপায়ে ফুটিয়ে তোলে।",
    tech: ["React.js", "Three.js", "Email.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  }
];

export default function OurProject() {
  return (
    <section id="projects" className="relative w-full py-32 bg-[#020617] text-white overflow-hidden border-t border-white/[0.03]">
      
      {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো ইফেক্ট */}
      <div className="absolute top-1/4 left-1/3 w-[50rem] h-[50rem] rounded-full bg-purple-600/[0.01] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[45rem] h-[45rem] rounded-full bg-indigo-600/[0.01] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl  mx-auto px-6 relative z-20"> 
        
        {/* ================= হেডার সেকশন ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">Recent Creations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Architecting <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Digital Future</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto">
            আইডিয়া ও কোডের সমন্বয়ে তৈরি কিছু প্রিমিয়াম প্রজেক্ট এবং কেস স্টাডি, যা পারফরম্যান্সের দিক থেকে একদম আপসহীন।
          </p>
        </div>

        {/* ================= Swiper Single Slider কন্টেইনার ================= */}
        <div className="projects-swiper-container pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1} // এখানে ১টি করে সিঙ্গেল কার্ড শো করবে
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            className="!overflow-visible"
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={project.id || index} className="py-4">
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* স্লাইডারের Pagination ডটস কাস্টমাইজেশন */}
      <style>{`
        .projects-swiper-container .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
        }
        .projects-swiper-container .swiper-pagination-bullet-active {
          background: #a855f7 !important;
          box-shadow: 0 0 10px #a855f7;
        }
      `}</style>
    </section>
  );
}

// ================= প্রতিটি প্রজেক্ট কার্ডের জন্য ৩D টিল্ট ও গ্লো ইফেক্ট =================
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const GithubIcon = LucideIcons.Github || LucideIcons.GitBranch;
  const ExternalIcon = LucideIcons.ExternalLink || LucideIcons.ArrowUpRight;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    const multiplier = 8; // সিঙ্গেল বড় কার্ডের জন্য টিল্ট ইফেক্ট কিছুটা স্বাভাবিক (8) রাখা হলো
    const rX = ((y - height / 2) / height) * -multiplier;
    const rY = ((x - width / 2) / width) * multiplier;
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

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
      className="group relative p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-white/[0.001] border border-white/[0.05] backdrop-blur-3xl transition-shadow duration-500 will-change-transform w-full  flex flex-col md:flex-row gap-6 md:gap-8 items-center"
    >
      
      {/* 🔮 ডাইনামিক মাউস স্পটলাইট বর্ডার লাইট */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
          border: "1px solid transparent",
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          inset: "-1px",
          zIndex: 1
        }}
      />

      {/* 🌟 ডাইনামিক ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.05),
              transparent 80%
            )
          `
        }}
      />

      {/* 🖼️ ইমেজ কন্টেইনার (লেফট সাইড / টপ সাইড) */}
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="w-full md:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 relative z-10"
      >
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-xs">
            No Image Provided
          </div>
        )}
      </div>

      {/* 📝 কন্টেন্ট বডি (রাইট সাইড) */}
      <div 
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} 
        className="w-full md:w-1/2 flex flex-col justify-between h-full min-h-[220px] relative z-10"
      >
        <div>
          {/* ক্যাটাগরি ব্যাজ এবং অ্যাকশন বাটন */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider border ${project.badgeColor}`}>
              {project.category}
            </span>
            
            {/* লিংকস */}
            <div className="flex items-center gap-3 text-slate-500 relative z-30 pointer-events-auto">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-200">
                <GithubIcon size={16} />
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-200">
                <ExternalIcon size={16} />
              </a>
            </div>
          </div>

          {/* প্রজেক্ট টাইটেল ও বর্ণনা */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </div>

        {/* ফুটার টেক স্ট্যাক ট্যাগসমূহ */}
        <div>
          <div className="mt-6 pt-4 border-t border-white/[0.03] flex flex-wrap gap-1.5">
            {project.tech.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-[10px] font-mono font-medium text-slate-400 bg-white/[0.01] border border-white/[0.04] px-2.5 py-1 rounded-md group-hover:text-purple-300 group-hover:border-purple-500/20 group-hover:bg-purple-500/[0.01] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </motion.div>
  );
}