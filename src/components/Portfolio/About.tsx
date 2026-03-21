import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Code, Heart, Music, Users, GraduationCap, MapPin, Award, BookOpen } from "lucide-react";

/**
 * About Component
 * Features:
 * - Intersection Observer animations (useInView)
 * - Stat Cards with gradient borders
 * - Responsive 2-column info layout
 * - Interactive Hobby Grid
 */
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbies = [
    { icon: Code, title: "Open Source", description: "Contributing to developer ecosystems" },
    { icon: Users, title: "Community", description: "Led 300+ events & hackathons" },
    { icon: Music, title: "Production", description: "Exploring instrumental soundscapes" },
    { icon: Heart, title: "Athletics", description: "District-level Badminton player" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 px-6 relative  overflow-hidden"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">About My Journey</h3>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a technologist driven by the intersection of <span className="text-white">Full-Stack Engineering</span> and <span className="text-white">AI Automation</span>. 
            Currently shaping my craft at Lovely Professional University.
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Side: Profile Card (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent">
              <div className="bg-[#0a0a0c] rounded-[calc(1.5rem-1px)] p-8 space-y-8">
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center text-3xl font-bold bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent overflow-hidden">
                      <img 
                      src="/IMG_20260207_222453.jpg" 
                      alt="" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">University</p>
                      <p className="text-sm text-gray-200">Lovely Professional University</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Focus</p>
                      <p className="text-sm text-gray-200">B.Tech Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Location</p>
                      <p className="text-sm text-gray-200">Jalandhar, Punjab, IN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Bio & Stats (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 xl:col-span-8 space-y-10"
          >
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-blue-500" />
                Who I Am
              </h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                As a developer, I don't just write code; I build <span className="text-white">scalable digital ecosystems</span>. 
                My expertise spans the <span className="text-white">MERN stack</span>, Next.js, and integrating AI models using TensorFlow. 
                I believe in the power of community, having organized major hackathons and gaming festivals to foster tech culture.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I thrive in high-pressure environments, having led teams of developers to deliver impactful solutions in 
                <span className="text-blue-400"> AI, IoT, and Web Development</span>. My goal is to create software that is not only 
                functional but solves real-world human problems.
              </p>
            </div>

            {/* High-Impact Stat Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: "DSA Problems", value: "150+", icon: Award, color: "text-blue-400" },
                { label: "Hackathons", value: "5+", icon: Code, color: "text-purple-400" },
                { label: "Events Led", value: "300+", icon: Users, color: "text-pink-400" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-all group">
                  <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-3xl font-black mb-1">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hobbies / Interests Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white">Beyond the Terminal</h4>
            <p className="text-gray-500 mt-2">Personal passions that drive my creativity</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-blue-500/30 transition-all cursor-default"
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                <hobby.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h5 className="text-xl font-bold mb-2">{hobby.title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;