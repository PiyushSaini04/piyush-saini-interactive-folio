import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "2023 - 2027",
    cgpa: "7.8 CGPA",
    status: "Current",
    description: "Specializing in Computer Science with focus on AI/ML, Web Development, and Software Engineering. Active participant in tech clubs and hackathons.",
    highlights: [
      "Tech Lead at Optimus Club",
      "Active in AI/ML research projects",
      "Organizer of tech events and hackathons",
      "Contributor to open-source projects"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: GraduationCap
  },
  {
    id: 2,
    degree: "Senior Secondary (12th Grade)",
    institution: "Army Public School",
    location: "India",
    period: "2021 - 2022",
    cgpa: "8.1 CGPA",
    status: "Completed",
    description: "Completed senior secondary education with strong foundation in Mathematics, Physics, and Computer Science.",
    highlights: [
      "Strong foundation in STEM subjects",
      "Early programming experience",
      "Participated in science exhibitions",
      "Active in extracurricular activities"
    ],
    color: "from-green-500 to-emerald-500",
    icon: Award
  }
];

const certifications = [
  {
    title: "HTML & CSS Certification",
    provider: "FreeCodeCamp",
    date: "2025",
    description: "Comprehensive web development fundamentals",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Social Networking Course",
    provider: "NPTEL",
    date: "2025",
    description: "Understanding digital communication and networks",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Programming Proficiency",
    provider: "HackerRank",
    date: "Ongoing",
    description: "5★ ratings in Python, C, and C++",
    color: "from-yellow-500 to-orange-500"
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Academic Journey</h2>
          <p className="section-subtitle">
            Educational background and continuous learning achievements
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="relative pl-0 md:pl-20 mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className={`absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r ${edu.color} border-4 border-background hidden md:flex items-center justify-center shadow-lg`}
                  >
                    <edu.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <div className="card-glass group hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`md:hidden p-3 rounded-xl bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-transform`}>
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                          <h3 className="text-xl font-bold gradient-text mb-1 lg:mb-0">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              edu.status === "Current" 
                                ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}>
                              {edu.status}
                            </span>
                            <span className="text-lg font-bold text-primary">
                              {edu.cgpa}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-300 mb-3">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <span className="hidden md:inline">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span>{edu.location}</span>
                          </div>
                          <span className="hidden md:inline">•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">
              Certifications & Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="card-glass group hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all">
                    {cert.title}
                  </h4>
                  
                  <p className="text-primary font-medium mb-2">
                    {cert.provider}
                  </p>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {cert.date}
                  </p>
                  
                  <p className="text-sm text-gray-300">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};