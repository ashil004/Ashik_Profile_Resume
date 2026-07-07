import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, MapPin, ArrowUpRight, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();

  
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.from_name,
    user_email: formData.user_email,
    user_phone: formData.user_phone,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then((result) => {
      console.log("Email successfully sent!", result.text);
      alert("⚡ Thank you! Your message has been sent successfully.");
      // ফর্মের স্টেট রিসেট
      setFormData({ from_name: '', user_email: '', user_phone: '', message: '' }); 
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative w-full py-32 bg-[#020617] text-white overflow-hidden z-10 border-t border-white/[0.03]">
      
      
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/[0.03] blur-[150px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-purple-600/[0.02] blur-[130px] pointer-events-none animate-pulse duration-[6000ms]" />
      
      
      <motion.div 
        animate={{
          backgroundColor: 
            activeField === 'from_name' ? 'rgba(59, 130, 246, 0.12)' :
            activeField === 'user_email' ? 'rgba(168, 85, 247, 0.12)' :
            activeField === 'user_phone' ? 'rgba(6, 182, 212, 0.12)' :
            activeField === 'message' ? 'rgba(79, 70, 229, 0.12)' : 'rgba(37, 99, 235, 0.04)',
          scale: activeField ? 1.1 : 1
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-[160px] pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-20">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-2xl group cursor-pointer hover:border-blue-500/30 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] group-hover:text-slate-200 transition-colors">Open for Collaboration</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-slate-100">
              Let's craft <br className="hidden lg:block"/>
              next-gen <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">ideas</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-sans font-light">
              আপনার মাথায় কোনো নতুন কনসেপ্ট বা হাই-পারফরম্যান্স অ্যাপ্লিকেশনের প্ল্যান থাকলে সরাসরি নক দিতে পারেন। টেকনিক্যাল আর্কিটেকচার থেকে এক্সিকিউশন—সব হবে এক সাথে।
            </p>
          </div>

          <div className="pt-8 space-y-3.5 border-t border-white/[0.05] font-mono text-xs text-slate-400 max-w-sm mx-auto lg:mx-0">
            <a 
              href="https://mail.google.com/mail" 
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-blue-500/20 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400/80 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Mail size={15} />
                </div>
                <span className="group-hover:text-slate-300 transition-colors tracking-wide">pramanikashik007@gmail.com</span>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-purple-500/20 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-lg bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400/80 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-all">
                <MapPin size={15} />
              </div>
              <span className="group-hover:text-slate-300 transition-colors tracking-wide">Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full p-8 md:p-11 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-white/[0.002] border border-white/[0.06] backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] relative group/form hover:border-white/[0.12] transition-all duration-500"
        >
          <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

          <motion.form 
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            
            
            <motion.div variants={itemVariants} className="relative">
              <label className={`flex justify-between items-center text-[11px] font-mono uppercase tracking-wider mb-2.5 transition-colors duration-300 ${activeField === 'from_name' ? 'text-blue-400' : 'text-slate-400'}`}>
                <span>Full Name</span>
              </label>
              <div className="relative flex items-center">
                <User size={15} className={`absolute left-4 transition-colors duration-300 ${activeField === 'from_name' ? 'text-blue-400' : 'text-slate-600'}`} />
                <input 
                  type="text" 
                  name="from_name"
                  required
                  value={formData.from_name}
                  onFocus={() => setActiveField('from_name')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#070c18]/80 border border-white/[0.04] focus:border-blue-500/30 focus:ring-[3px] focus:ring-blue-500/5 text-slate-200 outline-none transition-all duration-300 font-sans text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            
            <motion.div variants={itemVariants} className="relative">
              <label className={`flex justify-between items-center text-[11px] font-mono uppercase tracking-wider mb-2.5 transition-colors duration-300 ${activeField === 'user_email' ? 'text-purple-400' : 'text-slate-400'}`}>
                <span>Email Address</span>
              </label>
              <div className="relative flex items-center">
                <Mail size={15} className={`absolute left-4 transition-colors duration-300 ${activeField === 'user_email' ? 'text-purple-400' : 'text-slate-600'}`} />
                <input 
                  type="email" 
                  name="user_email"
                  required
                  value={formData.user_email}
                  onFocus={() => setActiveField('user_email')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#070c18]/80 border border-white/[0.04] focus:border-purple-500/30 focus:ring-[3px] focus:ring-purple-500/5 text-slate-200 outline-none transition-all duration-300 font-sans text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            
            <motion.div variants={itemVariants} className="relative">
              <label className={`flex justify-between items-center text-[11px] font-mono uppercase tracking-wider mb-2.5 transition-colors duration-300 ${activeField === 'user_phone' ? 'text-cyan-400' : 'text-slate-400'}`}>
                <span>Phone Number</span>
              </label>
              <div className="relative flex items-center">
                <Phone size={15} className={`absolute left-4 transition-colors duration-300 ${activeField === 'user_phone' ? 'text-cyan-400' : 'text-slate-600'}`} />
                <input 
                  type="tel" 
                  name="user_phone"
                  value={formData.user_phone}
                  onFocus={() => setActiveField('user_phone')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  placeholder="+880 17XX XXXXXX"
                  className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#070c18]/80 border border-white/[0.04] focus:border-cyan-500/30 focus:ring-[3px] focus:ring-cyan-500/5 text-slate-200 outline-none transition-all duration-300 font-sans text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            
            <motion.div variants={itemVariants} className="relative">
              <label className={`flex justify-between items-center text-[11px] font-mono uppercase tracking-wider mb-2.5 transition-colors duration-300 ${activeField === 'message' ? 'text-indigo-400' : 'text-slate-400'}`}>
                <span>Your Message</span>
              </label>
              <div className="relative">
                
                <MessageSquare size={15} className={`absolute left-4 top-5 transition-colors duration-300 ${activeField === 'message' ? 'text-indigo-400' : 'text-slate-600'}`} />
                <textarea 
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  placeholder="Tell me about your project specifications..."
                  className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#070c18]/80 border border-white/[0.04] focus:border-indigo-500/30 focus:ring-[3px] focus:ring-indigo-500/5 text-slate-200 outline-none transition-all duration-300 font-sans text-sm resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] leading-relaxed"
                />
              </div>
            </motion.div>

            
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileFocus={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-3 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(37,99,235,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] text-xs uppercase tracking-[0.15em] font-mono group/btn flex items-center justify-center gap-2 outline-none focus:ring-2 focus:ring-blue-500/50 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span>{isSubmitting ? 'Transmitting...' : 'Transmit Protocol'}</span>
              <Send size={13} className={`group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : ''}`} />
            </motion.button>

          </motion.form>
        </motion.div>

      </div>
    </section>
  );
}