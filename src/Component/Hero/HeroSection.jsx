import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, useMotionValue, useTransform } from 'framer-motion'; 
import myProfilePhoto from '../../assets/hero2.png'; 
import { Link } from 'react-scroll';

export default function HeroSection() {
  const canvasRef = useRef(null);
  
  // ৩ডি কার্ড ইফেক্টের জন্য মোশন ভ্যালু
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // মাউস পজিশনকে রোটেশনে কনভার্ট করা (3D Tilt Effect)
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    // ১. Scene, Camera এবং Renderer তৈরি করা
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ২. 3D Object
    const geometry = new THREE.IcosahedronGeometry(1.2, 1); 
    const material = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.8,
    });
    const complexMesh = new THREE.Mesh(geometry, material);
    scene.add(complexMesh);

    const coreGeometry = new THREE.IcosahedronGeometry(0.5, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.5 });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // ৩. লাইট
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 8, 10);
    pointLight.position.set(-2, -2, 2);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // ৪. অ্যানিমেশন লুপ
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      complexMesh.rotation.x = elapsedTime * 0.15;
      complexMesh.rotation.y = elapsedTime * 0.2;
      
      coreMesh.rotation.x = -elapsedTime * 0.3;
      coreMesh.rotation.y = elapsedTime * 0.3;

      complexMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.15;
      coreMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.15;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // ৫. উইন্ডো রিসাইজ হ্যান্ডেল করা
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 text-white flex items-center">
      
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 touch-none" />

      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 pointer-events-none">
        
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 max-w-2xl pointer-events-auto"
        >
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">
              Available for Freelance & Full-time
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              3D Experiences
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            হাই-পারফরম্যান্স ফুল-স্ট্যাক অ্যাপ্লিকেশন এবং চমৎকার ভিজ্যুয়াল অ্যানিমেশনের এক নিখুঁত ফিউশন। React, Node.js এবং Three.js-এর সমন্বয়ে আমি তৈরি করি আপনার ব্যবসার জন্য দ্রুতগতির, সুরক্ষিত এবং দৃষ্টিনন্দন ডিজিটাল সলিউশন।
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="Ashik_Paramanik_Resume_v2.pdf" download="Ashik_Resume.pdf">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40"
            >
               Explore Portfolio
            </motion.button> </a>
            <Link to='contact' smooth={true} duration={500} offset={-70}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white/5 text-slate-200 font-semibold rounded-xl transition-all duration-300 border border-white/10 backdrop-blur-md"
            >
              Let's Talk
            </motion.button>
            </Link>
          </div>
        </motion.div>

        
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end pointer-events-auto relative mt-8 lg:mt-0 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative group p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-200 cursor-pointer select-none w-full max-w-[360px] sm:max-w-[430px] md:max-w-[480px]"
          >
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            
            
            <div 
              style={{ transform: "translateZ(25px)" }} 
              className="relative overflow-hidden rounded-xl w-full h-full bg-slate-900/50 transition-all duration-500"
            >
              <img 
                src={myProfilePhoto} 
                alt="Md.Ashik Paramanik" 
                className="w-full h-auto object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            
            <div 
              style={{ transform: "translateZ(45px)" }} 
              className="absolute -bottom-3 -left-2 px-3.5 py-1.5 bg-slate-900/95 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:border-blue-500/40"
            >
              <p className="text-[11px] font-mono font-semibold tracking-wider bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                &lt;FullStack Dev /&gt;
              </p>
            </div>
            
            
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping opacity-75"
            />
          </motion.div>
        </div>

      </div>

      {/* ইন্ডিকেটর */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50">
        <span className="text-xs uppercase tracking-widest text-slate-500">Scroll Down</span>
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}