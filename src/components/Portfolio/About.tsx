import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Music, Users } from "lucide-react";


export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const hobbies = [
    { icon: Code, title: "Coding", description: "Building innovative solutions" },
    { icon: Users, title: "NGO Work", description: "Tech awareness & community service" },
    { icon: Music, title: "Music", description: "Instrumental soundtracks" },
    { icon: Heart, title: "Badminton", description: "District-level tournaments" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative ">
     
      



      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my journey, passion, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-glass relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">PS</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4 gradient-text">
                Piyush Saini
              </h3>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">University:</span>
                  <span>Lovely Professional University</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Course:</span>
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Location:</span>
                  <span>Jalandhar, Punjab</span>
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card-glass">
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I'm <span className="gradient-text font-semibold">Piyush Saini</span>, 
                a Computer Science student at Lovely Professional University. I enjoy building 
                fast, scalable, and user-friendly applications using{" "}
                <span className="text-primary">React.js</span>,{" "}
                <span className="text-secondary">Next.js</span>,{" "}
                <span className="text-accent">Node.js</span>, TensorFlow, and AI tools.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 mt-4">
                With experience in <span className="gradient-text font-semibold">AI, IoT, and web development</span>, 
                I focus on creating impactful solutions that make a difference. I've led 5+ developers 
                and organized 300+ student events including hackathons and gaming festivals.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass text-center">
                <div className="text-2xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-400">DSA Problems Solved</div>
              </div>
              <div className="card-glass text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">AI/IoT Hackathons</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hobbies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Beyond Coding
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="card-glass text-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20"
              >
                <hobby.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-white transition-colors" />
                <h4 className="font-semibold mb-1">{hobby.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};