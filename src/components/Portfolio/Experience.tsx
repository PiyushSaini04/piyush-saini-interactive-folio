import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Code, Calendar, Award } from "lucide-react";

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
    color: "from-purple-500 to-pink-500",
    icon: Users
  }
];

const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved 150+ Data Structures and Algorithms problems",
    icon: Code,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "HackerRank 5★ Achiever",
    description: "5★ ratings in Python, C, and C++ programming languages",
    icon: Award,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Hackathon Participant",
    description: "Participated in 5+ AI/IoT hackathons with innovative solutions",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Active Developer",
    description: "4+ years of consistent coding and project development",
    icon: Calendar,
    color: "from-indigo-500 to-purple-500"
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-subtitle">
            My professional journey and key accomplishments in technology and leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="relative pl-0 md:pl-20 mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background hidden md:block" />
                  
                  <div className="card-glass group hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-xl font-bold gradient-text">{exp.title}</h4>
                          <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-300 mb-3">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span className="text-primary">{exp.type}</span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="card-glass group hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:gradient-text transition-all">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};