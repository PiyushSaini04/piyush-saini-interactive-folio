import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Brain, Zap, Eye, X, ChevronRight } from "lucide-react";

// Project Data
const projects = [
  {
    id: 2,
    title: "Drone vs. Bird Detection",
    description:
      "AI-powered computer vision system using YOLO model to distinguish between drones and birds with high accuracy.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    tags: ["YOLOv5", "Computer Vision", "Python", "AI/ML"],
    features: ["90%+ Accuracy", "Real-time Detection", "Edge Computing"],
    github: "https://github.com/piyush-saini/drone-detection",
    demo: "#",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "Sign Language Detection",
    description:
      "Real-time sign language recognition system using MediaPipe and TensorFlow for inclusive communication.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    tags: ["MediaPipe", "TensorFlow", "OpenCV", "Python"],
    features: ["90% Accuracy", "20+ FPS", "Multi-language Support"],
    github: "https://github.com/piyush-saini/sign-language-detection",
    demo: "#",
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: 4,
    title: "Optimus Website",
    description:
      "A centralized event registration platform for university organizations, allowing students to explore and manage participation.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", // Fallback for local asset
    tags: ["React.js", "Next.js", "Node.js", "TypeScript"],
    features: ["10+ Events Managed", "500+ participants", "Modern UI/UX"],
    github: "https://github.com/PiyushSaini04/optimus-event-flow",
    demo: "https://www.optimusorgz.xyz/",
    color: "from-purple-600 to-indigo-500",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
      return () => {
      document.body.style.overflow = 'auto'; // ✅ FIX
    };
  }, []);

  const getFeatureIcon = (feature) => {
    if (feature.includes("Accuracy") || feature.includes("Detection")) return Brain;
    if (feature.includes("Efficiency") || feature.includes("Managed")) return Zap;
    return Eye;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">

      <div 
        className="absolute inset-0 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-zinc-800 rounded-full text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full min-h-[300px] relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${project.color} opacity-20`} />
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Key Features</h4>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, idx) => {
                  const Icon = getFeatureIcon(feature);
                  return (
                    <div key={idx} className="flex items-center gap-3 text-zinc-300">
                      <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                        <Icon className="w-4 h-4 text-zinc-100" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href={project.github} 
                target="_blank" 
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-all"
              >
                <Github className="w-4 h-4" /> Github
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-medium rounded-xl transition-all hover:brightness-110`}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen text-zinc-100 w-full">

      

    <section className="relative px-12 py-24 md:py-32">        
        {/* Header Section */}

        {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

        <div className="mb-16 md:mb-24 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Crafting digital experiences with <span className="text-zinc-500">precision & purpose.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            A curated selection of technical projects ranging from computer vision to modern web architecture.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/20 transition-all hover:bg-zinc-900/40 hover:border-zinc-700 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm line-clamp-2 mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-semibold text-white gap-1 group/btn">
                  View Details
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => {
            document.body.style.overflow = 'auto'; // 🔥 force reset
            setSelectedProject(null);
          }} 
        />
      </section>
    </div>
  );
}