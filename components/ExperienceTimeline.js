import Image from "next/image";

const experiences = [
  {
    title: "Trust Analyst / Accounts Receivable",
    company: "Bilzin Sumberg",
    duration: "Jan 2022 - Present",
    durationDatetime: "2022-01",
    description:
      "Managed financial data reconciliation, automated reporting with SQL, and optimized banking platform migrations.",
    logo: "/images/bilzin-sumberg-logo.png",
  },
  {
    title: "Accounts Receivable & Resales",
    company: "FirstService Residential",
    duration: "Apr 2018 – Dec 2021",
    durationDatetime: "2018-04",
    description:
      "Analyzed financial trends, optimized invoice processing, and collaborated with IT teams to improve ERP systems.",
    logo: "/images/firstservice-logo.png",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Experience</h2>
        <div className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-6 pl-6" role="list">
          {experiences.map((exp, index) => (
            <article
              key={index}
              role="listitem"
              aria-label={`Experience at ${exp.company} as ${exp.title}`}
              className="mb-10 relative group"
            >
              <div className="absolute w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full -left-3 border-4 border-white dark:border-gray-700 shadow-md"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 
                  transition-transform duration-300 hover:shadow-xl hover:scale-105">
                <header className="flex items-center gap-4">
                  <Image
                    src={exp.logo}
                    alt={`Logo for ${exp.company}`}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-full border border-gray-300 dark:border-gray-600 shadow-sm"
                    onError={(e) => { e.target.src = "/images/default-logo.png"; }}
                  />
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{exp.title}</h3>
                </header>
                <p className="text-gray-700 dark:text-gray-400 font-semibold mt-1">
                  {exp.company} | <time dateTime={exp.durationDatetime}>{exp.duration}</time>
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
