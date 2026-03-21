import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Code, Database, Globe, Brain, Cloud, Settings, 
  ChevronRight, Sparkles, Terminal, Cpu, Layout, 
  Layers, HardDrive, Smartphone, GitBranch
} from "lucide-react";

// Professional SVG Icon components to replace external react-icons dependency
const Icons = {
  Html5: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ),
  Css3: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 8.766l.14 1.624h9.325l-.25 2.87-3.805 1.026-3.845-1.037-.25-2.812H4.496l.48 5.422L12 18.351l7.025-1.954.914-10.46H6.17l-.58-6.61h15.06l-.23 2.622H8.41l.23 2.622h10.966l-.14 1.624H6.59z" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 7a15 15 0 0 0-10 5 15 15 0 0 0 10 5 15 15 0 0 0 10-5 15 15 0 0 0-10-5Z" />
      <path d="M7 12a15 15 0 0 0 5-10 15 15 0 0 0 5 10 15 15 0 0 0-5 10 15 15 0 0 0-5-10Z" />
    </svg>
  ),
  Javascript: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034-1.021.03-1.861.48-2.308 1.156-.48.75-.42 1.636-.03 2.251.63.99 1.8 1.335 2.85 1.785 1.08.465 1.59.885 1.59 1.47 0 .495-.15.96-.93 1.2-.75.24-1.485.12-2.055-.42-.285-.271-.48-.57-.63-.975l-1.755.945c.165.435.435.915.81 1.29 1.2 1.245 3.36 1.455 4.8 1.065 1.156-.315 2.011-1.2 2.011-2.43.001-.135-.015-.255-.045-.391zm-8.776-5.235l-1.875 1.05v3.42c0 1.275-.06 2.1-.15 2.655-.165.885-.63 1.485-1.47 1.785-.885.315-1.86.21-2.61-.285-.36-.24-.556-.495-.735-.855l-1.62 1.005c.345.69.765 1.125 1.35 1.485 1.11.66 2.76.735 4.02.225 1.23-.495 2.025-1.41 2.22-3.045.09-.585.12-1.395.12-2.625v-5.025l-1.875 1.05z" />
    </svg>
  ),
  Nextjs: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M18.663 21.192L9.201 9.043l-.001 8.875H7.311V3.91h1.889l8.608 11.082V3.91h1.889v17.282h-1.034zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-1.89 0c0-5.584-4.526-10.11-10.11-10.11-2.126 0-4.093.658-5.717 1.78l11.465 14.735c2.656-1.784 4.362-4.894 4.362-8.405z" />
    </svg>
  ),
};

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Globe,
    description: "Crafting immersive user interfaces and responsive web experiences.",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", icon: Icons.Html5 },
      { name: "CSS3", icon: Icons.Css3 },
      { name: "React.js", icon: Icons.React },
      { name: "Next.js", icon: Icons.Nextjs },
      { name: "JavaScript", icon: Icons.Javascript },
      { name: "Tailwind", icon: Layout },
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: Terminal,
    description: "Building scalable server-side logic and robust system architectures.",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Node.js", icon: Code },
      { name: "Express", icon: ServerIcon },
      { name: "Python", icon: Brain },
      { name: "C++", icon: Cpu },
    ]
  },
  {
    id: "database",
    name: "Data Management",
    icon: Database,
    description: "Designing efficient schemas and managing complex data lifecycles.",
    color: "from-purple-600 to-indigo-400",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: HardDrive },
      { name: "Redis", icon: Layers },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: Cloud,
    description: "Automating deployments and managing cloud infrastructure.",
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Docker", icon: BoxIcon },
      { name: "AWS / GCP", icon: Cloud },
      { name: "Git", icon: GitBranch },
    ]
  }
];

function ServerIcon(props) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>;
}

function BoxIcon(props) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30">
      <Skills />
    </div>
  );
}

export const Skills = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 md:py-32 overflow-hidden  bg-[#0a0a0c]" ref={scrollRef}>

      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
            Technical Arsenal
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
            A specialized collection of technologies I use to bring complex ideas to life, 
            ranging from pixel-perfect frontends to robust system backends.
          </p>
        </motion.div>

        {/* Desktop Interface */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Column */}
          <div className="lg:col-span-4 space-y-4">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full group relative p-5 rounded-2xl border transition-all duration-500 text-left flex items-center gap-4 ${
                  activeCategory === category.id
                    ? "bg-white/[0.05] border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
                    : "bg-transparent border-white/5 hover:border-white/20"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-blue-500/5 rounded-2xl -z-10"
                  />
                )}
                
                <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className={`font-semibold transition-colors ${
                    activeCategory === category.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}>
                    {category.name}
                  </h3>
                </div>

                <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                  activeCategory === category.id ? "translate-x-1 text-blue-400" : "text-slate-600 opacity-0 group-hover:opacity-100"
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Details Content Panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 min-h-[450px] overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeCategoryData?.color} opacity-[0.03] blur-[100px] -z-10`} />
            
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">{activeCategoryData?.name}</h3>
              <p className="text-slate-400 text-lg max-w-xl italic">
                "{activeCategoryData?.description}"
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {activeCategoryData?.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.04] border border-white/5 group cursor-default"
                    >
                      <div className="mb-4 p-4 rounded-full bg-slate-900 border border-white/5 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all duration-300">
                        <div className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors">
                          <Icon />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-400 group-hover:text-white tracking-wide uppercase transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile Accordion Interface */}
        <div className="lg:hidden space-y-4">
          {skillCategories.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <button
                onClick={() => setActiveCategory(activeCategory === category.id ? "" : category.id)}
                className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left flex items-center gap-4 ${
                  activeCategory === category.id
                    ? "bg-white/5 border-blue-500/50"
                    : "bg-white/[0.02] border-white/5"
                }`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <span className="flex-1 font-bold text-slate-200">{category.name}</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                  activeCategory === category.id ? "rotate-90 text-blue-400" : "text-slate-500"
                }`} />
              </button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map(skill => {
                          const Icon = skill.icon;
                          return (
                            <div key={skill.name} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                              <div className="w-5 h-5 text-blue-400">
                                <Icon />
                              </div>
                              <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};