import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Zap, Eye, Brain } from "lucide-react";
import optimus from "../../assest/optimus_image.png";

const projects = [
  {
    id: 2,
    title: "Drone vs. Bird Detection",
    description: "AI-powered computer vision system using YOLO model to distinguish between drones and birds with high accuracy.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    tags: ["YOLOv5", "Computer Vision", "Python", "AI/ML"],
    features: ["90%+ Accuracy", "Real-time Detection", "Edge Computing"],
    github: "https://github.com/piyush-saini/drone-detection",
    demo: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Sign Language Detection",
    description: "Real-time sign language recognition system using MediaPipe and TensorFlow for inclusive communication.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    tags: ["MediaPipe", "TensorFlow", "OpenCV", "Python"],
    features: ["90% Accuracy", "20+ FPS", "Multi-language Support"],
    github: "https://github.com/piyush-saini/sign-language-detection",
    demo: "#",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Optimus Website",
    description: "A centralized event registration platform for university organizations, allowing students to explore, register, and manage participation in various events. Built with modern web technologies, the website offers a seamless and responsive user experience.",
    image: optimus,
    tags: ["React.js", "Next.js", "Node.js", "Typescript", "Tailwind CSS"],
    features: ["10+ Events Managed", "500+ particapant" ,"Modern UI/UX"],
    github: "https://github.com/PiyushSaini04/optimus-event-flow",
    demo: "https://www.optimusorgz.xyz/",
    color: "from-purple-500 to-white-200"
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Accuracy") || feature.includes("Detection")) return Brain;
    if (feature.includes("Efficiency") || feature.includes("Boost")) return Zap;
    return Eye;
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:py-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Projects Showcase</h2>
          <p className="section-subtitle text-base sm:text-lg">
            A collection of my featured work showcasing technical expertise and innovation
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-project group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl mb-6 -m-6 center">
                <div className="w-full h-60 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, idx) => {
                    const FeatureIcon = getFeatureIcon(feature);
                    return (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <FeatureIcon className="w-4 h-4 text-primary" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 btn-secondary text-sm py-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm py-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};