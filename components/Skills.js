import { FaCloud, FaShieldAlt, FaPython, FaDatabase, FaNetworkWired, FaJsSquare } from "react-icons/fa";

const skills = [
  { name: "Cybersecurity", description: "Threat analysis & risk management", icon: <FaShieldAlt size={40} color="#61DAFB" aria-hidden="true" /> },
  { name: "Cloud Computing (Azure, AWS)", description: "Cloud architecture & security", icon: <FaCloud size={40} color="#339933" aria-hidden="true" /> },
  { name: "Python & Security Automation", description: "Scripting & automation", icon: <FaPython size={40} color="#FFD43B" aria-hidden="true" /> },
  { name: "SQL & Data Analytics", description: "Database management & queries", icon: <FaDatabase size={40} color="#2496ED" aria-hidden="true" /> },
  { name: "Network Security", description: "Firewalls & intrusion detection", icon: <FaNetworkWired size={40} color="#F59E0B" aria-hidden="true" /> },
  { name: "JavaScript & Web Security", description: "Frontend & security best practices", icon: <FaJsSquare size={40} color="#F7DF1E" aria-hidden="true" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 text-center" role="list">
          {skills.map((skill, index) => (
            <li
              key={index}
              role="listitem"
              className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                         transform hover:scale-110 transition duration-300 border border-gray-200 
                         dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:shadow-lg"
            >
              {/* Skill Icon with Hover Effect */}
              <div className="transition-transform duration-300 hover:rotate-6">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>

              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 
                              group-hover:opacity-100 transition bg-black text-white text-xs rounded 
                              px-2 py-1 whitespace-nowrap shadow-lg dark:bg-gray-700">
                {skill.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
