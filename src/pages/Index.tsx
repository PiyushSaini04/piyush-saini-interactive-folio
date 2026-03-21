import { useEffect, useState } from "react";
import { Navigation } from "../components/Portfolio/Navigation";
import { Hero } from "../components/Portfolio/Hero";
import { About } from "../components/Portfolio/About";
import { Skills } from "../components/Portfolio/Skills";
import ProjectsCarousel from "../components/Portfolio/Projects"; // updated import
import { Experience } from "../components/Portfolio/Experience";
import { Education } from "../components/Portfolio/Education";
import Contacts from "../components/Portfolio/Contact";
import { Footer } from "../components/Portfolio/Footer";
import Hyperspeed from "@/components/Portfolio/Hyperspeed";
import ProximityGraphAnimation from "@/components/Portfolio/ProximityGraphAnimation"; // import new animation

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // consider <=768px as mobile
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 w-full h-screen">
        
          <ProximityGraphAnimation /> 
       
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="z-10 h-auto border-b border-white">
        <Hero />
        <About />
        <Skills />
        <ProjectsCarousel /> {/* Updated here */}
        <Experience />
        <Education />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
