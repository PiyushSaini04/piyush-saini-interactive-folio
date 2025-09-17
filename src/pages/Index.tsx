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
import DotGrid from '../components/Portfolio/DotGrid';
import Hyperspeed from "@/components/Portfolio/Hyperspeed";




const Index = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
     
      {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <DotGrid
          dotSize={6}
          gap={25}
          baseColor="rgba(88,88,88,0.3)"
          activeColor="rgba(88, 88, 88, 0.3)"
          proximity={100}
          shockRadius={2000}
          shockStrength={10}
          resistance={10}
          returnDuration={0.1}
        />
      </div> */}
      <div className="fixed inset-0 w-full h-full z--1">
        {/* Aurora effect */}
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 15,
            islandWidth: 3,
            lanesPerRoad: 5,
            fov: 90,
            fovSpeedUp: 100,
            speedUp: 2,
            carLightsFade: 0.15,
            totalSideLightSticks: 10,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.2, 0.9],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />

        
      </div>

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
