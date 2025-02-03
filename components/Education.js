// components/Education.js
import React from "react";

const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2010 - 2014",
    description: "Studied computer science fundamentals and engaged in various programming projects."
  },
  {
    institution: "Online Courses",
    degree: "Full-Stack Web Development",
    duration: "2015",
    description: "Completed multiple courses on modern web development technologies."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">
                {edu.institution} | {edu.duration}
              </p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
