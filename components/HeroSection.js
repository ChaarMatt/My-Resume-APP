import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white p-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInDown">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-lg md:text-xl text-white opacity-90 animate-fadeInUp">
          A passionate developer crafting interactive web experiences.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
