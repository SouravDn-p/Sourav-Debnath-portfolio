"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const SdSkills = () => {
  const canvasRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatingOut, setAnimatingOut] = useState(false);

  // Define categories
  const categories = [
    { id: "all", name: "All Skills", icon: <FaPalette /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
  ];

  // Define skills with categories
  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={50} className="text-cyan-400" />,
      projects: "50 Projects",
      color: "cyan",
      categories: ["frontend"],
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-400" />,
      projects: "45 Projects",
      color: "green",
      categories: ["backend"],
    },
    {
      id: 3,
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-400" />,
      projects: "30 Projects",
      color: "green",
      categories: ["database"],
    },
    {
      id: 4,
      name: "Firebase",
      icon: <SiFirebase size={50} className="text-yellow-400" />,
      projects: "25 Projects",
      color: "yellow",
      categories: ["database", "backend"],
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <SiBootstrap size={50} className="text-purple-400" />,
      projects: "40 Projects",
      color: "purple",
      categories: ["frontend"],
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-cyan-400" />,
      projects: "35 Projects",
      color: "cyan",
      categories: ["frontend"],
    },
  ];

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeCategory));

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setAnimatingOut(true);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimatingOut(false);
    }, 300);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.getElementById("skills-section").offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(0, 0, 20, 1)");
      gradient.addColorStop(1, "rgba(10, 20, 40, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 100, 150, 0.05)"; // Reduced opacity for less distraction
      ctx.lineWidth = 0.5;

      // Horizontal grid lines
      const gridSize = 50;
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Add pulsing glow effects
      const time = Date.now() * 0.001;
      const glowSize = 200 + Math.sin(time) * 50;

      // Create glow effect with reduced opacity
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        glowSize
      );
      glow1.addColorStop(0, "rgba(0, 255, 255, 0.05)"); // Lowered opacity
      glow1.addColorStop(1, "rgba(0, 255, 255, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        glowSize * 0.8
      );
      glow2.addColorStop(0, "rgba(255, 0, 255, 0.03)"); // Lowered opacity
      glow2.addColorStop(1, "rgba(255, 0, 255, 0)");

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="skills-section"
      className="relative text-white py-16 px-6 overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-20">
        {" "}
        {/* Increased z-index */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-center mb-8">
          My Skills
        </h2>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
                relative flex items-center gap-2 px-6 py-3 rounded-full 
                backdrop-blur-sm transition-all duration-300 overflow-hidden
                border ${
                  activeCategory === category.id
                    ? "border-cyan-500 bg-cyan-900/20"
                    : "border-gray-700 bg-black/30 hover:border-gray-500"
                }
              `}
            >
              {/* Animated background for active category */}
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 animate-pulse-slow"></div>
              )}

              {/* Icon and text */}
              <span
                className={`z-20 ${
                  activeCategory === category.id
                    ? "text-cyan-400"
                    : "text-gray-400"
                }`}
              >
                {category.icon}
              </span>
              <span
                className={`z-20 ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {category.name}
              </span>

              {/* Animated border for active category */}
              {activeCategory === category.id && (
                <div className="absolute -inset-[1px] rounded-full overflow-hidden">
                  <div className="absolute -inset-[1px] rounded-full animate-border-flow bg-gradient-to-r from-cyan-500 via-green-500 to-purple-500"></div>
                </div>
              )}
            </button>
          ))}
        </div>
        {/* Skills Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`
                group relative  bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg 
                border border-gray-800 hover:border-cyan-500 transition-all duration-500 
                flex flex-col items-center text-center transform hover:-translate-y-2
                ${animatingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}
              `}
              style={{
                transitionDelay: animatingOut ? "0ms" : `${skill.id * 100}ms`,
              }}
            >
              {/* Glowing background effect */}
              <div
                className={`absolute inset-0 rounded-lg bg-${skill.color}-900 bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-500`}
              ></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div
                  className={`absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow bg-gradient-to-r from-cyan-500 via-${skill.color}-500 to-purple-500`}
                ></div>
              </div>

              {/* Category badges */}
              <div className="absolute top-2 right-2 flex gap-1">
                {skill.categories.map((cat) => (
                  <span
                    key={cat}
                    className={`
                      text-xs px-2 py-1 rounded-full 
                      ${
                        cat === "frontend"
                          ? "bg-cyan-900/50 text-cyan-400"
                          : cat === "backend"
                          ? "bg-green-900/50 text-green-400"
                          : "bg-yellow-900/50 text-yellow-400"
                      }
                    `}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Icon with glow effect */}
              <div
                className={`relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] `}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mt-4 text-white z-20">
                {skill.name}
              </h3>
              <p className="text-gray-00 z-20">{skill.projects}</p>

              {/* Progress bar */}
              <div className="w-full mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-cyan-400 to-${skill.color}-400 h-full rounded-full animate-pulse-slow`}
                  style={{
                    width: `${Number.parseInt(skill.projects) * 2}%`,
                    animationDelay: `${skill.id * 0.2}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Inject CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
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
          animation: border-flow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SdSkills;
