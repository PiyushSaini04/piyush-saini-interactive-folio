import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const resumeUrl = "/resume-piyush-saini.pdf"; // must be in public/
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Piyush-Saini-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 font-medium"
          >
            Hi, I'm
          </motion.p>
          
          {/* Name with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 pb-4"
          >
            Piyush Saini
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Frontend & Full-Stack Developer passionate about building{" "}
            <span className="gradient-text font-semibold">scalable</span> and{" "}
            <span className="gradient-text font-semibold">interactive</span> web solutions.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4"
          >
            
            
            <button
              onClick={downloadResume}
              className="btn-secondary flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center gap-4 sm:gap-6 mt-12"
          >
            <a
              href="https://www.linkedin.com/in/piyushsaini2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-glass border border-glass-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            
            <a
              href="https://github.com/PiyushSaini04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-glass border border-glass-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            
            
          </motion.div>
          
          {/* Scroll Indicator */}
        
        </motion.div>
      </div>
    </section>
  );
};