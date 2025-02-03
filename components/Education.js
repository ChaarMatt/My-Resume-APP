import { AiOutlineBook } from "react-icons/ai"; // Import icon for education

const education = [
  {
    degree: "Bachelor of Science in Cybersecurity",
    institution: "Florida International University",
    duration: "Expected December 2025",
    durationDatetime: "2025-12",
    description: "Studying cybersecurity with a focus on IT infrastructure, network security, and cloud computing.",
    courses: [
      "Network Security Fundamentals",
      "Ethical Hacking & Penetration Testing",
      "Cloud Security (AWS & Azure)",
      "Cryptography & Secure Communications",
      "Incident Response & Digital Forensics",
    ],
  },
  {
    degree: "Associate of Arts in Business Administration",
    institution: "Miami Dade College",
    duration: "December 2020",
    durationDatetime: "2020-12",
    description: "Gained foundational knowledge in business operations, data management, and IT applications.",
    courses: [
      "Business Analytics & Data Management",
      "Financial Accounting",
      "Marketing Strategies",
      "Principles of Management",
      "IT Applications in Business",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md 
                         hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <AiOutlineBook size={28} className="text-blue-600 dark:text-blue-300" />
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{edu.degree}</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {edu.institution} | <time dateTime={edu.durationDatetime}>{edu.duration}</time>
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>

              {/* List of Courses */}
              <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded">
                {edu.courses.map((course, i) => (
                  <li key={i} className="border-b dark:border-gray-700 py-1 hover:text-blue-500 transition duration-200">{course}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
