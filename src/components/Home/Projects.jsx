import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiReact, SiMongodb, SiFirebase, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/src/assets/portfolio.png",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    features: ["Fully Responsive", "Dark Mode", "Downloadable Resume"],
    techStack: [SiReact, SiTailwindcss],
    liveLink: "https://portfolio.com",
    githubClient: "https://github.com/user/portfolio-client",
    githubServer: null,
  },
  {
    id: 2,
    name: "E-Commerce App",
    image: "/assets/ecommerce.png",
    description:
      "A full-stack e-commerce website with authentication and payment features.",
    features: ["User Authentication", "Stripe Payment", "Admin Dashboard"],
    techStack: [SiReact, SiMongodb, SiFirebase, SiTailwindcss],
    liveLink: "https://ecommerce.com",
    githubClient: "https://github.com/user/ecommerce-client",
    githubServer: "https://github.com/user/ecommerce-server",
  },
  {
    id: 3,
    name: "Blog Website",
    image: "/assets/blog.png",
    description: "A blog platform where users can create and read articles.",
    features: ["Rich Text Editor", "Firebase Auth", "Real-time Updates"],
    techStack: [SiReact, SiFirebase, SiTailwindcss],
    liveLink: "https://blog.com",
    githubClient: "https://github.com/user/blog-client",
    githubServer: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card lg:card-side bg-gray-800 shadow-xl p-4 rounded-lg"
          >
            <figure className="lg:w-1/3">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-contain"
              />
            </figure>

            <div className="card-body lg:w-2/3">
              <h3 className="text-2xl font-bold text-green-400">
                {project.name}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              <ul className="list-disc pl-4 text-gray-400">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="flex space-x-4 my-3">
                {project.techStack.map((Icon, index) => (
                  <Icon key={index} className="text-2xl text-green-400" />
                ))}
              </div>

              <div className="flex space-x-4 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
                {project.githubClient && (
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <FaGithub className="mr-2" /> GitHub Client side
                  </a>
                )}
                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <FaGithub className="mr-2" /> GitHub Server
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
