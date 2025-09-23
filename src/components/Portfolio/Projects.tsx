import { useRef, useState } from "react";
import CircularGallery from "./CircularGallery";
import { Github, ExternalLink, Brain, Zap, Eye } from "lucide-react";
import optimus from "../../assest/optimus_image.png";

const projects = [
  {
    id: 2,
    title: "Drone vs. Bird Detection",
    description:
      "AI-powered computer vision system using YOLO model to distinguish between drones and birds with high accuracy.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    tags: ["YOLOv5", "Computer Vision", "Python", "AI/ML"],
    features: ["90%+ Accuracy", "Real-time Detection", "Edge Computing"],
    github: "https://github.com/piyush-saini/drone-detection",
    demo: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Sign Language Detection",
    description:
      "Real-time sign language recognition system using MediaPipe and TensorFlow for inclusive communication.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    tags: ["MediaPipe", "TensorFlow", "OpenCV", "Python"],
    features: ["90% Accuracy", "20+ FPS", "Multi-language Support"],
    github: "https://github.com/piyush-saini/sign-language-detection",
    demo: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Optimus Website",
    description:
      "A centralized event registration platform for university organizations, allowing students to explore, register, and manage participation in various events. Built with modern web technologies, the website offers a seamless and responsive user experience.",
    image: optimus,
    tags: ["React.js", "Next.js", "Node.js", "Typescript", "Tailwind CSS"],
    features: ["10+ Events Managed", "500+ participants", "Modern UI/UX"],
    github: "https://github.com/PiyushSaini04/optimus-event-flow",
    demo: "https://www.optimusorgz.xyz/",
    color: "from-purple-500 to-white-200",
  },
];

// Modal Component
function ProjectModal({ project, onClose }: any) {
  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Accuracy") || feature.includes("Detection")) return Brain;
    if (feature.includes("Efficiency") || feature.includes("Boost")) return Zap;
    return Eye;
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-3xl w-full relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>

          <div className="flex flex-wrap gap-3">
            {project.features.map((feature: string, idx: number) => {
              const FeatureIcon = getFeatureIcon(feature);
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-gray-300 text-sm"
                >
                  <FeatureIcon className="w-4 h-4 text-primary" />
                  {feature}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 btn-secondary py-2"
            >
              <Github className="w-4 h-4" /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 btn-primary py-2"
            >
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-100 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Map projects to gallery items
  const galleryItems = projects.map((project, index) => ({
    image: project.image,
    text: project.title,
    projectId: index, // pass index for callback
  }));

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:py-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Projects Showcase
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-300 mb-12">
          A collection of my featured work showcasing technical expertise and innovation
        </p>

        <div style={{ height: "500px", position: "relative" }} ref={containerRef}>
          <CircularGallery
            items={galleryItems}
            bend={2.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            onSelectProject={(id) => setSelectedProject(projects[id])} // callback for modal
          />
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
