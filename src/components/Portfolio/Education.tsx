import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { initParticles } from "./particles";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2,
  Trophy,
  ExternalLink
} from "lucide-react";

// --- Data Structures ---

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "2023 — 2027",
    cgpa: "7.8 CGPA",
    status: "In Progress",
    description: "Specializing in Computer Science with a core focus on Artificial Intelligence, Machine Learning, and Advanced Web Technologies.",
    highlights: [
      "Tech Lead at Optimus Club overseeing student projects",
      "Active researcher in AI/ML neural network optimization"
      
    ],
    color: "from-blue-600 to-indigo-500",
    icon: GraduationCap
  },
  {
    id: 2,
    degree: "Senior Secondary (12th Grade)",
    institution: "Army Public School",
    location: "Unchi Bassi, Punjab",
    period: "2021 — 2022",
    cgpa: "8.1 CGPA",
    status: "Completed",
    description: "Academic focus on STEM subjects: Physics, Chemistry, and Advanced Mathematics with Computer Science electives.",
    highlights: [
      "Secured distinction in Mathematics and Computer Science",
      "Represented school in Regional Science Exhibitions"
      
    ],
    color: "from-emerald-500 to-teal-400",
    icon: Award
  }
];

const certifications = [
  {
    title: "HTML & CSS in Depth",
    provider: "Meta (Coursera)",
    date: "Dec 2023",
    description: "Advanced HTML5 & CSS3 concepts.",
    color: "from-blue-500 to-indigo-400",
    file: "/certificates/meta-html-css.pdf"
  },
  {
    title: "ChatGPT Prompt Engineering",
    provider: "Infosys Springboard",
    date: "Aug 2025",
    description: "Generative AI & LLM fundamentals.",
    color: "from-cyan-500 to-blue-400",
    file: "/certificates/prompt.pdf"
  },
  {
    title: "Build Generative AI Apps",
    provider: "Infosys",
    date: "Sep 2025",
    description: "No-code AI tools & solutions.",
    color: "from-purple-500 to-indigo-400",
    file: "/certificates/genai.pdf"
  },
  {
    title: "Computer Networking",
    provider: "Google (Coursera)",
    date: "Sep 2024",
    description: "Networking fundamentals.",
    color: "from-green-500 to-emerald-400",
    file: "/certificates/networking.pdf"
  },
  {
    title: "Hardware & OS",
    provider: "IBM (Coursera)",
    date: "Sep 2024",
    description: "Operating systems basics.",
    color: "from-yellow-500 to-orange-400",
    file: "/certificates/os.pdf"
  },
  {
    title: "Digital Systems",
    provider: "UAB",
    date: "Sep 2024",
    description: "Logic gates & processors.",
    color: "from-pink-500 to-rose-400",
    file: "/certificates/digital.pdf"
  }
];


const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = true; // useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8 md:gap-0 pb-12 md:pb-0"
    >
      {/* Left Side Content (Desktop) */}
      <div className={`hidden md:block ${index % 2 !== 0 ? "order-3" : "text-right"}`}>
        <div className="py-4">
          <span className="text-2xl font-bold text-slate-500">{edu.period}</span>
          <p className="text-blue-400 font-medium">{edu.status}</p>
        </div>
      </div>

      {/* Center Timeline Connector */}
      <div className="hidden md:flex flex-col items-center justify-start h-full px-8 order-2">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg shadow-blue-500/20 ring-4 ring-slate-950 z-10`}>
          {edu.icon && <edu.icon className="w-6 h-6 text-white" />}
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-slate-800 to-transparent" />
      </div>

      {/* Main Card */}
      <div className={`order-1 ${index % 2 !== 0 ? "md:order-1 md:text-right" : "md:order-3"}`}>
        <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="flex flex-col gap-4">
            {/* Mobile Header */}
            <div className="flex items-center gap-4 md:hidden">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                <edu.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-400 font-bold text-sm">{edu.period}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{edu.status}</p>
              </div>
            </div>

            <div className={`flex flex-col ${index % 2 !== 0 ? "md:items-end" : ""}`}>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-700">
                  {edu.institution}
                </span>
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-sm font-bold border border-blue-500/20">
                  {edu.cgpa}
                </span>
              </div>
            </div>

            {/* <p className="text-slate-400 leading-relaxed">
              {edu.description}
            </p> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {edu.highlights.map((item, i) => (
                <div key={i} className={`flex items-start gap-2 ${index % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className={`flex items-center gap-4 pt-4 mt-4 border-t border-slate-800/50 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin className="w-4 h-4" />
                {edu.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index, }) => (
  <motion.div
    
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="cursor-pointer group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-all"
   transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110`}>
      <Trophy className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.title}</h4>
    <p className="text-blue-500 text-sm font-semibold mb-3">{cert.provider}</p>
    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{cert.description}</p>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-slate-500 text-xs font-medium">{cert.date}</span>
    </div>
  </motion.div>
);

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      
      
      <main className="relative z-10 container mx-auto px-6 py-24 md:py-32">
         <div  
      className="text-center mb-16 md:mb-24"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        <BookOpen className="w-3.5 h-3.5" />
        Education
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Journey</span>
      </h2>
      <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
        A timeline of my formal education and specialized certifications, 
        driven by a passion for continuous technological growth.
      </p>
    </div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-0 relative">
          {educationData?.map((edu, index) => (
            <EducationCard key={edu.id || index} edu={edu} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-32 md:mt-48">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Accreditations</span>
            </h3>
            <p className="text-slate-400">Verifiable achievements and technical skills mastery.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
                <CertificationCard 
                  key={index} 
                  cert={cert} 
                  index={index} 
                  
                />
            ))}
          </div>
        </div>
        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            
            {/* Close on click */}
            <div 
              className="absolute inset-0" 
              onClick={() => setSelectedCert(null)}
            />

            <div className="relative max-w-4xl w-full mx-4 bg-slate-900 rounded-2xl p-4 border border-white/10">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-white text-xl"
              >
                ✕
              </button>

              {/* Certificate Image */}
              <img
                src={selectedCert.image}
                alt="certificate"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        )}
      </main>

      
    </div>
  );
}

export { Education };