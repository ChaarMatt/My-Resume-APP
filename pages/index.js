import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Chaar | Cybersecurity & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Cybersecurity & Full-Stack Developer. Passionate about AI, cloud computing, and ethical hacking." 
        />
        <meta 
          name="keywords" 
          content="Cybersecurity, Web Development, AI, Cloud, Ethical Hacking" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Matthew Chaar | Cybersecurity & Full-Stack Developer" />
        <meta property="og:description" content="Cybersecurity & Full-Stack Developer. Passionate about AI, cloud computing, and ethical hacking." />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <HeroSection />
        <Education />
        <Projects />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </main>
    </>
  );
}
