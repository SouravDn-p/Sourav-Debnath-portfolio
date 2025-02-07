import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/assets/portfolio.png",
    techStack: "React, Tailwind CSS",
    description:
      "A personal portfolio website showcasing my projects and skills.",
  },
  {
    id: 2,
    name: "E-Commerce App",
    image: "/assets/ecommerce.png",
    techStack: "MERN Stack",
    description:
      "A fully functional e-commerce website with authentication and payment features.",
  },
  {
    id: 3,
    name: "Blog Website",
    image: "/assets/blog.png",
    techStack: "Next.js, Firebase",
    description: "A blog platform where users can create and read articles.",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-green-400">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <Link
              to={`/project/${project.id}`}
              className="text-green-500 hover:text-green-400 mt-4 inline-block"
            >
              View More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
