import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [text, setText] = useState("");
  const name = "Matthew Chaar";
  const role = "IT Infrastructure & Security Engineer | Cloud | Cybersecurity";

  useEffect(() => {
    // Check if the user prefers reduced motion and skip animation if so
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setText(name);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setText(name.substring(0, index));
      index++;
      if (index > name.length) {
        clearInterval(interval);
      }
    }, 80); // Faster animation speed

    return () => clearInterval(interval);
  }, [name]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen 
      bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-500 text-white 
      dark:bg-gray-900 dark:text-gray-200 text-center p-4">

      {/* Profile Picture */}
      <Image 
        src="/images/profile.jpg" 
        alt="Profile picture of Matthew Chaar" 
        width={180} 
        height={180} 
        className="rounded-full shadow-lg border-4 border-white mb-4 
          transition-transform duration-300 hover:scale-110 hover:shadow-blue-500 
          dark:border-gray-700 dark:shadow-gray-800"
        priority
      />

      {/* Name with Typing Animation */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-blue-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
        Hello, I'm{" "}
        <span aria-live="polite" className="animate-pulse">
          {text}
        </span>
      </h1>

      {/* Role Description - Improved Visibility for Dark Mode */}
      <p className="text-xl md:text-2xl font-semibold text-white opacity-100 mt-2 
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] dark:text-gray-300 dark:drop-shadow-gray-700">
        {role}
      </p>

      {/* Resume Download Button */}
      <a
        href="/MatthewCResume.pdf"
        download="MatthewCResume.pdf"
        className="mt-6 inline-flex items-center gap-2 bg-white text-blue-600 
          font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 
          hover:scale-105 transition duration-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
        Download Resume
      </a>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path fillRule="evenodd" d="M12 3a1 1 0 011 1v13.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 17.586V4a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
