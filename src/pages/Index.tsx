import { useEffect, useState } from "react";
import { Navigation } from "../components/Portfolio/Navigation";
import { Hero } from "../components/Portfolio/Hero";
import { About } from "../components/Portfolio/About";
import { Skills } from "../components/Portfolio/Skills";
import ProjectsCarousel from "../components/Portfolio/Projects"; // updated import
import { Experience } from "../components/Portfolio/Experience";
import { Education } from "../components/Portfolio/Education";
import { Contact } from "../components/Portfolio/Contact";
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
        {isMobile ? (
          <ProximityGraphAnimation />
        ) : (
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [20, 40],
              movingCloserSpeed: [-40, -60],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                background: 0x100010,
                roadColor: 0x080808,
                islandColor: 0x202020,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        )}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProjectsCarousel /> {/* Updated here */}
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
