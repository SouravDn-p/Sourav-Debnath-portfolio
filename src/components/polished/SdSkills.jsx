"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaPalette,
  FaAmazon,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
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

  // Enhanced skills with more details and visual improvements
  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={50} className="text-blue-500" />,
      projects: "50 Projects",
      color: "blue",
      proficiency: 95,
      categories: ["frontend"],
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-emerald-500" />,
      projects: "45 Projects",
      color: "emerald",
      proficiency: 90,
      categories: ["backend"],
    },
    {
      id: 3,
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-500" />,
      projects: "30 Projects",
      color: "green",
      proficiency: 85,
      categories: ["database"],
    },
    {
      id: 4,
      name: "Firebase",
      icon: <SiFirebase size={50} className="text-amber-500" />,
      projects: "25 Projects",
      color: "amber",
      proficiency: 80,
      categories: ["database", "backend"],
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <SiBootstrap size={50} className="text-purple-500" />,
      projects: "40 Projects",
      color: "purple",
      proficiency: 92,
      categories: ["frontend"],
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-teal-500" />,
      projects: "35 Projects",
      color: "teal",
      proficiency: 95,
      categories: ["frontend"],
    },
    {
      id: 7,
      name: "Next.js",
      icon: <SiNextdotjs size={50} className="text-white" />,
      projects: "28 Projects",
      color: "slate",
      proficiency: 88,
      categories: ["frontend", "backend"],
    },
    {
      id: 8,
      name: "TypeScript",
      icon: <SiTypescript size={50} className="text-blue-500" />,
      projects: "32 Projects",
      color: "blue",
      proficiency: 85,
      categories: ["frontend", "backend"],
    },
    {
      id: 9,
      name: "GraphQL",
      icon: <SiGraphql size={50} className="text-pink-500" />,
      projects: "20 Projects",
      color: "pink",
      proficiency: 78,
      categories: ["backend"],
    },
    {
      id: 10,
      name: "AWS",
      icon: <FaAmazon size={50} className="text-orange-500" />,
      projects: "15 Projects",
      color: "orange",
      proficiency: 75,
      categories: ["backend"],
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

    // Animation loop with enhanced visuals
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background with more vibrant colors
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(10, 15, 30, 1)");
      gradient.addColorStop(0.5, "rgba(20, 25, 45, 1)");
      gradient.addColorStop(1, "rgba(15, 20, 40, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines with subtle animation
      const time = Date.now() * 0.0005;
      ctx.strokeStyle = "rgba(65, 105, 225, 0.07)";
      ctx.lineWidth = 0.5;

      // Horizontal grid lines with wave effect
      const gridSize = 50;
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const waveOffset = Math.sin(x * 0.01 + time) * 3;
          ctx.lineTo(x, y + waveOffset);
        }
        ctx.stroke();
      }

      // Vertical grid lines with wave effect
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 5) {
          const waveOffset = Math.sin(y * 0.01 + time) * 3;
          ctx.lineTo(x + waveOffset, y);
        }
        ctx.stroke();
      }

      // Add multiple pulsing glow effects with different colors
      const glowTime = Date.now() * 0.001;
      const glowSize = 250 + Math.sin(glowTime) * 50;

      // Primary glow (blue)
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        glowSize
      );
      glow1.addColorStop(0, "rgba(65, 105, 225, 0.08)");
      glow1.addColorStop(1, "rgba(65, 105, 225, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Secondary glow (purple)
      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        glowSize * 0.8
      );
      glow2.addColorStop(0, "rgba(128, 0, 128, 0.06)");
      glow2.addColorStop(1, "rgba(128, 0, 128, 0)");

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tertiary glow (teal)
      const glow3 = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        glowSize * 0.6
      );
      glow3.addColorStop(0, "rgba(0, 128, 128, 0.04)");
      glow3.addColorStop(1, "rgba(0, 128, 128, 0)");

      ctx.fillStyle = glow3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add floating particles
      const particleCount = 50;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * (i * 0.1) + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * (i * 0.1) + i) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time + i) * 1.5 + 2.5;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

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
      className="relative text-white py-20 px-6 overflow-hidden min-h-screen"
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-center mb-12">
          Professional Skills
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
      relative flex items-center gap-2 px-8 py-4 rounded-full 
      backdrop-blur-md transition-all duration-500
      shadow-lg ${
        activeCategory === category.id
          ? `shadow-${
              category.id === "frontend"
                ? "blue"
                : category.id === "backend"
                ? "emerald"
                : category.id === "database"
                ? "amber"
                : "purple"
            }-500/30`
          : "shadow-none"
      }
      ${
        activeCategory === category.id
          ? `bg-gradient-to-r ${
              category.id === "frontend"
                ? "from-blue-900/80 to-blue-800/40"
                : category.id === "backend"
                ? "from-emerald-900/80 to-emerald-800/40"
                : category.id === "database"
                ? "from-amber-900/80 to-amber-800/40"
                : "from-purple-900/80 to-purple-800/40"
            }`
          : "bg-gray-900/50 hover:bg-gray-800/50"
      }
    `}
            >
              {/* Glowing dot indicator for active category */}
              {activeCategory === category.id && (
                <div
                  className={`absolute left-3 w-2 h-2 rounded-full ${
                    category.id === "frontend"
                      ? "bg-blue-400"
                      : category.id === "backend"
                      ? "bg-emerald-400"
                      : category.id === "database"
                      ? "bg-amber-400"
                      : "bg-purple-400"
                  } animate-pulse-slow`}
                ></div>
              )}

              {/* Icon and text */}
              <span
                className={`z-20 text-xl ${
                  activeCategory === category.id
                    ? `${
                        category.id === "frontend"
                          ? "text-blue-400"
                          : category.id === "backend"
                          ? "text-emerald-400"
                          : category.id === "database"
                          ? "text-amber-400"
                          : "text-purple-400"
                      }`
                    : "text-gray-400"
                }`}
              >
                {category.icon}
              </span>
              <span
                className={`z-20 font-medium ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`
      group relative bg-slate-900/80 backdrop-blur-lg p-8 
      rounded-2xl transition-all duration-500 
      flex flex-col items-center text-center transform 
      hover:-translate-y-2 hover:shadow-xl hover:shadow-${skill.color}-500/10
      ${animatingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}
      perspective-1000
    `}
              style={{
                transitionDelay: animatingOut ? "0ms" : `${skill.id * 100}ms`,
              }}
            >
              {/* 3D Card Tilt Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/80 to-black/80 transform group-hover:rotate-x-12 group-hover:rotate-y-6 transition-transform duration-500"></div>

              {/* Glass morphism overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Skill level indicator */}
              <div className="absolute -top-3 -right-3 flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={`${
                      skill.color === "blue"
                        ? "#3b82f6"
                        : skill.color === "emerald"
                        ? "#10b981"
                        : skill.color === "green"
                        ? "#22c55e"
                        : skill.color === "amber"
                        ? "#f59e0b"
                        : skill.color === "purple"
                        ? "#a855f7"
                        : skill.color === "teal"
                        ? "#14b8a6"
                        : skill.color === "slate"
                        ? "#64748b"
                        : skill.color === "pink"
                        ? "#ec4899"
                        : skill.color === "orange"
                        ? "#f97316"
                        : "#3b82f6"
                    }`}
                    strokeWidth="8"
                    strokeDasharray={`${2.5 * Math.PI * 40}`}
                    strokeDashoffset={`${
                      2.5 * Math.PI * 40 * (1 - skill.proficiency / 100)
                    }`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000 ease-out"
                  />
                  <text
                    x="50"
                    y="55"
                    fontSize="20"
                    fill="white"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    {skill.proficiency}%
                  </text>
                </svg>
              </div>

              {/* Category badges */}
              <div className="absolute top-3 left-3 flex gap-1">
                {skill.categories.map((cat) => (
                  <span
                    key={cat}
                    className={`
            text-xs font-medium px-3 py-1 rounded-full 
            ${
              cat === "frontend"
                ? "bg-blue-900/50 text-blue-300"
                : cat === "backend"
                ? "bg-emerald-900/50 text-emerald-300"
                : "bg-amber-900/50 text-amber-300"
            }
          `}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Icon with enhanced effect */}
              <div
                className={`
        relative z-10 p-6 rounded-full 
        bg-gradient-to-br from-slate-800/80 to-slate-900/80 
        transition-all duration-500 group-hover:scale-110 
        group-hover:shadow-[0_0_25px_rgba(0,100,255,0.5)]
      `}
              >
                {skill.icon}

                {/* Orbit effect */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-full h-full rounded-full border border-${skill.color}-500/20 opacity-0 group-hover:opacity-100`}
                      style={{
                        animation: `orbit ${3 + i * 2}s linear infinite`,
                        transform: `scale(${1.2 + i * 0.2})`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-6 mb-1 text-white z-10">
                {skill.name}
              </h3>
              <p className="text-gray-400 z-10 mb-4">{skill.projects}</p>

              {/* Skill bar visualization */}
              <div className="w-full mt-2 h-10 relative z-10">
                <div className="absolute inset-0 flex items-center">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 mx-0.5 flex-1 rounded-full transition-all duration-300 ${
                        i < skill.proficiency / 10
                          ? `bg-${skill.color}-500`
                          : "bg-gray-700"
                      }`}
                      style={{
                        height:
                          i < skill.proficiency / 10
                            ? `${Math.min(
                                100,
                                100 + (i - skill.proficiency / 10) * 20
                              )}%`
                            : "40%",
                        opacity: i < skill.proficiency / 10 ? 1 : 0.5,
                        transform: `scaleY(${
                          i < skill.proficiency / 10 ? 1 : 0.6
                        })`,
                        transition: `all 300ms ease-out ${i * 50}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-gray-800/50 max-w-md mx-auto">
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

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shine 2s infinite;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default SdSkills;
