import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";
import PortfolioImage from "../../assets/portfolio.png";
import DonateImage from "../../assets/donate.png"; // Replace with actual image
import HotGadgetImage from "../../assets/hot-gadget.png"; // Replace with actual image

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: `${PortfolioImage}`,
    description:
      "A personal portfolio website showcasing my projects and skills.",
    features: ["Fully Responsive", "Dark Mode", "Downloadable Resume"],
    techStack: [SiReact, SiTailwindcss],
    liveLink: "https://souravdebnath246.netlify.app/",
    githubClient: "https://github.com/SouravDn-p/Sourav-Debnath-portfolio",
    githubServer: null,
  },
  {
    id: 2,
    name: "Donate Bangladesh",
    image: `${DonateImage}`,
    description:
      "A simple and responsive donation platform for emergency relief efforts in Bangladesh.",
    features: ["Secure Payment", "Mobile Responsive", "Fast & Lightweight"],
    techStack: [SiHtml5, SiTailwindcss, SiJavascript],
    liveLink: "https://souravdn-p.github.io/SD_ASSIGNMENT_05/",
    githubClient: "https://github.com/SouravDn-p/SD_ASSIGNMENT_05",
    githubServer: null,
  },
  {
    id: 3,
    name: "Hot Gadget - E-Commerce Website",
    image: `${HotGadgetImage}`,
    description:
      "A modern e-commerce site showcasing smartphones & laptops with a responsive design.",
    features: ["Product Filtering", "Cart System", "Responsive UI"],
    techStack: [SiHtml5, SiCss3, SiBootstrap, SiJavascript],
    liveLink: "https://souravdn-p.github.io/Hot-gadget/",
    githubClient: "https://github.com/SouravDn-p/Hot-gadget",
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
                    <FaGithub className="mr-2" /> GitHub Client
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
