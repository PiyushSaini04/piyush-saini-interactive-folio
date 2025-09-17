import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Cloud, 
  Settings,
  ChevronRight
} from "lucide-react";

// Import React Icons for skill logos
import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiC, SiCplusplus, SiNodedotjs, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiTensorflow, SiOpencv, SiDocker, SiGooglecloud, SiArduino, SiPostman } from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "C/C++", icon: SiCplusplus },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    id: "ai",
    name: "AI/ML",
    icon: Brain,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "OpenCV", icon: SiOpencv },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Git", icon: Code },
    ]
  },
  {
    id: "tools",
    name: "Tools",
    icon: Settings,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code", icon: SiArduino },
      { name: "Arduino IDE", icon: SiArduino },
      { name: "Postman", icon: SiPostman },
    ]
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-3">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left flex items-center gap-3 group ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary"
                      : "card-glass hover:border-primary/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    activeCategory === category.id ? "rotate-90 text-primary" : "text-gray-400"
                  }`} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-6">
                {skillCategories.map(category => (
                  category.id === activeCategory && (
                    <div key={category.id} className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">{category.name}</h3>
                    </div>
                  )
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {activeSkills.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-default">
                      <Icon className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
