import React, { useState } from "react";
import { ExternalLink, Eye, Github } from "lucide-react";
import { motion } from "framer-motion";
import souravBg from "../../assets/sourav_parallex.png";

// Assuming these image imports are defined elsewhere
import rexAuctionImage from "../../assets/rexAuctionImage.png";
import advanceHealthCare from "../../assets/advanceHealthCare.png";
import buildBoxImage from "../../assets/buildBox.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "rexAuction",
      image: rexAuctionImage,
      description:
        "A real-time auction platform with live bidding and chat. Led team as senior developer.",
      tags: ["React", "Socket.io", "Redux", "Tailwind CSS"],
      demoUrl: "https://rex-auction.web.app",
      codeUrl: "https://github.com/SouravDn-p/RexAuction",
      featured: true,
    },
    {
      id: 2,
      title: "Advanced Healthcare",
      image: advanceHealthCare,
      description: "A responsive healthcare platform for streamlined services.",
      tags: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
      demoUrl: "https://advance-healthcare-sd246.web.app",
      codeUrl:
        "https://github.com/SouravDn-p/Advance-HealthCare--Smarter-Healthcare-Better-Lives-",
      featured: true,
    },
    {
      id: 3,
      title: "BUILD BOX – Hotel Booking",
      image: buildBoxImage,
      description: "A hotel booking app with JWT auth and room search.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://sd-buildbox.web.app",
      codeUrl: "https://github.com/SouravDn-p/BuildBox-Your-Apartment-Manager",
      featured: false,
    },
  ];

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.tags.includes(activeFilter))
    : projects;

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900"
      style={{
        backgroundImage: `url(${souravBg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4  relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === null
                ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === tag
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[120vh] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-[2s] ease-in-out group-hover:translate-y-[-50%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[120vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gray-900/90 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-3 py-1 bg-gray-800/80 text-purple-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Preview
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative h-[600px] overflow-hidden rounded-xl shadow-lg transition-all duration-500 bg-gray-900/30 backdrop-blur-sm"
            >
              <div
                className="absolute inset-0 transition-transform duration-[2s] ease-in-out group-hover:translate-y-[-30%]"
                style={{
                  height: "130%",
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-gray-900/50 glass backdrop-blur-md rounded-xl p-2">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-cyan-500/30 text-cyan-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="h-5 w-5 mr-2" /> Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyan-300 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-300 mt-10">
            No projects found with the selected filter.
          </div>
        )}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-sm"
        >
          See more on GitHub <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
