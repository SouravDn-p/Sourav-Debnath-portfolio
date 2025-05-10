"use client";

import { useEffect, useRef } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiDaisyui,
  SiRedux,
  SiNodedotjs,
  SiSocketdotio,
} from "react-icons/si";
import rexAuctionImage from "../../assets/rexAuctionImage.png";
import advanceHealthCare from "../../assets/advanceHealthCare.png";
import buildBoxImage from "../../assets/buildBox.png";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder background image (replace with your own)

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "rexAuction",
      image: `${rexAuctionImage}`,
      description:
        "A real-time auction platform with live bidding and chat. Led team as senior developer.",
      features: [
        "Live bidding with Socket.io & Redux.",
        "Real-time chat for bidders.",
        "AutoBid system with user limits.",
        "Team leadership on key features.",
      ],
      techStack: [
        { Icon: SiReact, name: "React", color: "text-cyan-400" },
        { Icon: SiSocketdotio, name: "Socket.io", color: "text-gray-300" },
        { Icon: SiRedux, name: "Redux", color: "text-purple-400" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
      ],
      liveLink: "https://rex-auction.web.app",
      githubClient: "https://github.com/SouravDn-p/RexAuction",
      githubServer: null,
      color: "cyan",
    },
    {
      id: 2,
      name: "Advanced Healthcare",
      image: `${advanceHealthCare}`,
      description: "A responsive healthcare platform for streamlined services.",
      features: [
        "AI-powered diagnosis.",
        "Telemedicine support.",
        "E-Prescription integration.",
      ],
      techStack: [
        { Icon: SiReact, name: "React", color: "text-cyan-400" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
        { Icon: SiDaisyui, name: "DaisyUI", color: "text-yellow-400" },
        { Icon: SiFirebase, name: "Firebase", color: "text-yellow-400" },
      ],
      liveLink: "https://advance-healthcare-sd246.web.app",
      githubClient:
        "https://github.com/SouravDn-p/Advance-HealthCare--Smarter-Healthcare-Better-Lives-",
      githubServer: null,
      color: "green",
    },
    {
      id: 3,
      name: "BUILD BOX – Hotel Booking",
      image: `${buildBoxImage}`,
      description: "A hotel booking app with JWT auth and room search.",
      features: [
        "JWT & Google login.",
        "Member upgrade system.",
        "Interactive room search.",
      ],
      techStack: [
        { Icon: SiReact, name: "React", color: "text-cyan-400" },
        { Icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
        { Icon: SiExpress, name: "Express", color: "text-gray-300" },
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
      ],
      liveLink: "https://sd-buildbox.web.app",
      githubClient:
        "https://github.com/SouravDn-p/BuildBox-Your-Apartment-Manager",
      githubServer: null,
      color: "purple",
    },
  ];

  return (
    <section
      id="projects"
      className="relative text-white py-16 px-6 overflow-hidden"
    >
      {/* Overlay for readability */}

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-1 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative bg-gray-900/60 border border-cyan-500/30 rounded-xl p-6 shadow-xl mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-center">
              Contact Me
            </h2>
          </div>
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-xl"
            >
              {/* Animated border */}
              <div className="absolute -inset-[1px] rounded-xl overflow-hidden z-0">
                <div
                  className={`
                    absolute -inset-[1px] rounded-xl bg-gradient-to-r 
                    from-cyan-500 via-${project.color}-500 to-purple-500
                    opacity-30
                  `}
                ></div>
              </div>

              <div className="relative z-10 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image section with overlay */}
                  <div className="relative lg:w-2/5 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/20 to-transparent opacity-70`}
                    ></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-64 lg:h-full object-center object-cover"
                    />
                    {/* Tech stack overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3 flex flex-wrap gap-3 items-center">
                      {project.techStack.map(({ Icon, name, color }, index) => (
                        <div
                          key={index}
                          className="group relative flex items-center"
                          title={name}
                        >
                          <Icon className={`text-xl ${color}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6 lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-2xl font-bold text-${project.color}-400 mb-3`}
                      >
                        {project.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-white font-semibold">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span
                                className={`mr-2 text-${project.color}-400 flex-shrink-0 mt-1`}
                              >
                                <FaArrowRight size={12} />
                              </span>
                              <span className="text-gray-300 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex items-center gap-2 px-4 py-2 rounded-full
                            bg-${project.color}-500/20 border border-${project.color}-500/50
                            text-white
                          `}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubClient && (
                        <a
                          href={project.githubClient}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-white"
                        >
                          <FaGithub />
                          <span>Client Code</span>
                        </a>
                      )}
                      {project.githubServer && (
                        <a
                          href={project.githubServer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-white"
                        >
                          <FaGithub />
                          <span>Server Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        @keyframes border-flow {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        .animate-border-flow {
          animation: border-flow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
