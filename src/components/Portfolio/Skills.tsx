import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original-wordmark" }, // no colored version
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "C/C++", icon: "devicon-cplusplus-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    id: "database",
    name: "Database",
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    ],
  },
  {
    id: "ai",
    name: "AI/ML",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "MediaPipe", icon: "devicon-google-plain colored" }, // placeholder
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
      { name: "YOLOv5", icon: "devicon-python-plain colored" }, // fallback (YOLO not available)
      { name: "pandas", icon: "devicon-pandas-original colored" },
      { name: "NumPy", icon: "devicon-numpy-original colored" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "GCP", icon: "devicon-googlecloud-plain colored" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Arduino IDE", icon: "devicon-arduino-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills =
    skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
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
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left flex items-center gap-3 group ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary shadow-lg scale-[1.02]"
                      : "card-glass hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <i className={`${category.skills[0].icon} text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeCategory === category.id
                        ? "rotate-90 text-primary"
                        : "text-gray-400"
                    }`}
                  />
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
            <div className="card-glass p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-black/40 hover:bg-primary/20 transition-colors"
                >
                  <i className={`${skill.icon} text-5xl`}></i>
                  <span className="mt-2 text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
