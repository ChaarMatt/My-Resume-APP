import Image from "next/image";

const projects = [
  {
    title: "2FA Part Two",
    description: "A security-focused project implementing Two-Factor Authentication using Python and Flask.",
    github: "https://github.com/ChaarMatt/_2FAPartTwo",
    image: "/images/2fa-project.png",
    imageWidth: 600,
    imageHeight: 400,
    tags: ["Python", "Flask", "Security"],
  },
  {
    title: "Trading Bot",
    description: "An automated trading bot built with Python that executes trades based on real-time market signals.",
    github: "https://github.com/ChaarMatt/trading_bot",
    image: "/images/trading-bot.png",
    imageWidth: 600,
    imageHeight: 400,
    tags: ["Python", "Finance", "Automation"],
  },
  {
    title: "Bouncey Beak (Flappy Bird Clone)",
    description: "A fun Flappy Bird-inspired game built with JavaScript and the Phaser game engine.",
    github: "https://github.com/ChaarMatt/Bouncey-Beak",
    image: "/images/bouncey-beak.png",
    imageWidth: 600,
    imageHeight: 400,
    tags: ["JavaScript", "Game Dev", "Phaser"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl 
                         hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
              role="listitem"
            >
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Project: ${project.title}. ${project.description}. Click to view on GitHub.`}
              >
                <figure>
                  <Image
                    src={project.image || "/images/default-project.png"}
                    alt={project.title}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => (e.target.src = "/images/default-project.png")}
                  />
                  <figcaption className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">{tag}</span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-semibold mt-3">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="..." clipRule="evenodd"/>
                      </svg>
                      View on GitHub
                    </div>
                  </figcaption>
                </figure>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
