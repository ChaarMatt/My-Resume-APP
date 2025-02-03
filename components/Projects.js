const projects = [
  {
    title: "Project 1",
    description: "A description of project 1.",
    link: "#"
  },
  {
    title: "Project 2",
    description: "A description of project 2.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
