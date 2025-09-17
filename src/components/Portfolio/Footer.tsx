import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/piyush-saini",
      name: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/piyush-saini",
      name: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:piyush.saini@example.com",
      name: "Email"
    }
  ];

  return (
    <footer className="relative py-8 px-4 sm:py-10 md:py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          {/* Left side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-sm sm:text-base text-center"
          >
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-semibold gradient-text">Piyush Saini</span>
            <span>© {currentYear}</span>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 sm:p-2 rounded-full bg-glass border border-border hover:bg-glass-hover transition-all duration-300 text-gray-400 hover:text-white group"
                aria-label={link.name}
              >
                <link.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-glass border border-border hover:bg-glass-hover transition-all duration-300 text-gray-300 hover:text-white group"
          >
            <span className="text-xs sm:text-sm font-medium">Back to Top</span>
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-6 pt-4 border-t border-border"
        >
          <p className="text-xs sm:text-sm text-gray-400">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};