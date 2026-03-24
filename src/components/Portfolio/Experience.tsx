import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Variants } from "framer-motion";
import { 
  Users, 
  Code, 
  Calendar, 
  Award, 
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Briefcase
} from "lucide-react";

// Data structures
const experiences = [
  {
    id: 1,
    title: "Tech Lead",
    company: "Optimus Club",
    period: "2023 - Present",
    location: "Lovely Professional University",
    type: "Leadership Role",
    description: "Leading technical initiatives and managing a team of 5+ developers while organizing major tech events and hackathons for 300+ students.",
    achievements: [
      "Built official club website using React.js, Node.js, and Next.js",
      "Led team of 5+ developers in multiple projects",
      "Organized 300+ student events including Hackathons and E-Gaming festivals",
      "Increased club engagement by 150% through technical innovations",
      "Mentored junior developers in modern web technologies"
    ],
    skills: ["React.js", "Node.js", "Next.js", "Leadership", "Event Management"],
    color: "from-purple-500 to-indigo-600",
    icon: Users
  },
  
];


const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved 150+ Data Structures and Algorithms problems",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    metric: "150+ Solved"
  },
  {
    title: "HackerRank 5★ Achiever",
    description: "5★ ratings in Python, C, and C++ programming languages",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    metric: "Top Tier"
  },
  {
    title: "Hackathon Participant",
    description: "Participated in 5+ AI/IoT hackathons with innovative solutions",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    metric: "5+ Events"
  },
  {
    title: "Active Developer",
    description: "4+ years of consistent coding and project development",
    icon: Calendar,
    color: "from-pink-500 to-rose-600",
    metric: "2+ Years"
  }
];

// Animation Variants - Fixed Ease Property type mismatch
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const // Using cubic-bezier for explicit type compatibility and smoother feel
    } 
  }
};

export const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Dynamic Background Logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-purple-500/30">
      <section 
        id="experience" 
        ref={sectionRef}
        className="relative py-24 px-4 overflow-hidden"
      >
        {/* Dynamic Background Elements */}
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-600/10 blur-[120px]" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-4">
              Career & Growth
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Extracurricular Activity
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              My professional journey and key accomplishments in technology, 
              demonstrating a blend of technical mastery and leadership.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Timeline */}
            <div className="lg:col-span-7 space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Professional History</h3>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-[#030712] border-2 border-purple-500 group-hover:scale-125 transition-transform duration-300 z-10" />
                    <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-purple-500/20 animate-ping" />

                    <div className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg shadow-purple-500/20`}>
                            <exp.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-slate-400 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1">
                          <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700">
                            {exp.period}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-slate-400 leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Achievements Grid */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Milestones</h3>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-4"
              >
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-md flex items-center gap-5 group cursor-default"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} group-hover:rotate-6 transition-transform shadow-lg shadow-black/20`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <span className="text-[10px] font-bold py-0.5 px-2 rounded-md bg-white/10 text-slate-400">
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;