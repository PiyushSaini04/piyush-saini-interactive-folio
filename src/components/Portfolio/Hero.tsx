import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { BookOpen, Terminal, Award, Star } from "lucide-react";


/**
 * Hero Component
 * Redesigned using a formal 2-column grid layout for desktop.
 * Optimized for high-impact visual presentation.
 */
export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("/General CV Template (approved).pdf", "_blank");
  };

   const stats = [
    { label: "CGPA", value: 7.81, icon: <BookOpen className="w-4 h-4" /> },
    { label: "DSA Problems", value: '200+' , icon: <Terminal className="w-4 h-4" /> },
    { label: "Certificates", value: 6, icon: <Award className="w-4 h-4" /> },
    
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidde text-white py-12 px-6"
    >
      {/* Dynamic Background */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div> */}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <span className="w-12 h-[1px] bg-blue-500 hidden lg:block"></span>
                <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">
                  Full-Stack Architect
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                Piyush <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Saini
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Building the next generation of <span className="text-white">scalable digital experiences</span>. Focused on clean code, performance, and user-centric design.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToContact}
                className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:bg-blue-50 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={downloadResume}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/piyushsaini2004/" },
                { icon: Github, href: "https://github.com/PiyushSaini04" },
                { icon: Mail, href: "mailto:your-email@example.com" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">

              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl hover:border-white/20 transition-colors group">
                  <div className="text-4xl font-bold tabular-nums font-mono text-center lg:text-left">
                    <h1>{stat.value}</h1>
                    
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 mb-1 justify-center lg:justify-start">
                    
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-blue-400 transition-colors">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
              </div>
            

          </motion.div>

          {/* Column 2: Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Background Glows */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] bg-[#16161a] rounded-[2.8rem] overflow-hidden border border-white/10">
                <img 
                  src="/IMG20260120123304.jpg" 
                  alt="Piyush Saini" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                
                {/* Experience Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hidden md:block">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">Status</p>
                        <p className="text-sm font-medium">Available to Work</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-1">Focus</p>
                        <p className="text-sm font-medium">Full-Stack / AI</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"
              />
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
