import React from "react";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    duration: "Jan 2020 - Present",
    description: "Leading a development team to create scalable web applications."
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions",
    duration: "Jun 2017 - Dec 2019",
    description: "Developed responsive user interfaces using modern JavaScript frameworks."
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    duration: "Jan 2015 - May 2017",
    description: "Worked on various web projects while learning full-stack development."
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Experience</h2>
        <div className="relative border-l-4 border-blue-300 ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative animate-fadeInUp">
              <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-3 border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-blue-700">{exp.title}</h3>
                <p className="text-gray-500 text-sm">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
