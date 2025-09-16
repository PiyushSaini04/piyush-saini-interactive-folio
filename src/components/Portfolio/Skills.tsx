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

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "C/C++", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 75 },
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ]
  },
  {
    id: "ai",
    name: "AI/ML",
    icon: Brain,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "MediaPipe", level: 75 },
      { name: "OpenCV", level: 85 },
      { name: "YOLOv5", level: 78 },
      { name: "pandas", level: 82 },
      { name: "NumPy", level: 85 },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "GCP", level: 65 },
    ]
  },
  {
    id: "tools",
    name: "Tools",
    icon: Settings,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Arduino IDE", level: 80 },
      { name: "Postman", level: 75 },
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
            A comprehensive overview of my technical expertise and proficiency levels
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
            <div className="card-glass">
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

              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={`${activeCategory}-${skill.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};