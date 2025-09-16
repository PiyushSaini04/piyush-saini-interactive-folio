import { useEffect } from "react";
import { Navigation } from "../components/Portfolio/Navigation";
import { Hero } from "../components/Portfolio/Hero";
import { About } from "../components/Portfolio/About";
import { Skills } from "../components/Portfolio/Skills";
import { Projects } from "../components/Portfolio/Projects";
import { Experience } from "../components/Portfolio/Experience";
import { Education } from "../components/Portfolio/Education";
import { Contact } from "../components/Portfolio/Contact";
import { Footer } from "../components/Portfolio/Footer";

const Index = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
