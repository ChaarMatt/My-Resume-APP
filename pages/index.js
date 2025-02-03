import HeroSection from "../components/HeroSection";
import { Skills } from "../components/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import TestComponent from "../components/TestComponent"; // Possible issue?

console.log("HeroSection:", HeroSection);
console.log("Skills:", Skills);
console.log("ExperienceTimeline:", ExperienceTimeline);
console.log("Projects:", Projects);
console.log("Education:", Education);
console.log("Contact:", Contact);
console.log("TestComponent:", TestComponent);


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <Education />
      <Contact />
      <TestComponent /> {/* This might be the culprit */}
    </div>
  );

}
