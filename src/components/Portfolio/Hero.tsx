import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import Aurora from "./aurora";
import Hyperspeed from './Hyperspeed';

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values



 // 👈 import your animation

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const resumeUrl = "/resume-piyush-saini.pdf"; // 👈 replace with your resume path
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden z--1"
    >
        
        
      

      {/* Hero Content */}
      <div className="relative z--1 text-center mx-auto mb-20 px-4">
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
            className="text-lg text-gray-300 font-medium mt-10"
          >
            Hi, I'm
          </motion.p>

          {/* Name with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 overflow-visible pb-5"
          >
            Piyush Saini
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Frontend & Full-Stack Developer passionate about building{" "}
            <span className="gradient-text font-semibold">scalable</span> and{" "}
            <span className="gradient-text font-semibold">interactive</span> web
            solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              Hire Me
            </button>

            <button
              onClick={downloadResume}
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            <button
              onClick={scrollToContact}
              className="btn-ghost flex items-center gap-2 justify-center"
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
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://linkedin.com/in/piyush-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/piyush-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>

            <a
              href="mailto:piyush.saini@example.com"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-glass-hover transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          
        </motion.div>
      </div>
    </section>
  );
};
