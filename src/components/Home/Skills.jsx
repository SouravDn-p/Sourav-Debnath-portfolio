// import { FaReact, FaNodeJs } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiFirebase,
//   SiBootstrap,
//   SiTailwindcss,
// } from "react-icons/si";

// const Skills = () => {
//   const skills = [
//     {
//       id: 1,
//       name: "React",
//       icon: <FaReact size={50} className="text-green-400" />,
//       projects: "50 Projects",
//     },
//     {
//       id: 2,
//       name: "Node.js",
//       icon: <FaNodeJs size={50} className="text-green-400" />,
//       projects: "45 Projects",
//     },
//     {
//       id: 3,
//       name: "MongoDB",
//       icon: <SiMongodb size={50} className="text-green-400" />,
//       projects: "30 Projects",
//     },
//     {
//       id: 4,
//       name: "Firebase",
//       icon: <SiFirebase size={50} className="text-green-400" />,
//       projects: "25 Projects",
//     },
//     {
//       id: 5,
//       name: "Bootstrap",
//       icon: <SiBootstrap size={50} className="text-green-400" />,
//       projects: "40 Projects",
//     },
//     {
//       id: 6,
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss size={50} className="text-green-400" />,
//       projects: "35 Projects",
//     },
//   ];

//   return (
//     <section id="skills" className="bg-gray-900 text-white py-16 px-6">
//       <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
//         My Skills
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {skills.map((skill) => (
//           <div
//             key={skill.id}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
//           >
//             {skill.icon}
//             <h3 className="text-xl font-bold mt-4">{skill.name}</h3>
//             <p className="text-gray-400">{skill.projects}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const canvasRef = useRef(null);

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
      ctx.strokeStyle = "rgba(0, 100, 150, 0.1)";
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

      // Create glow effect
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        glowSize
      );
      glow1.addColorStop(0, "rgba(0, 255, 255, 0.1)");
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
      glow2.addColorStop(0, "rgba(255, 0, 255, 0.05)");
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

  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={50} className="text-cyan-400" />,
      projects: "50 Projects",
      color: "cyan",
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-400" />,
      projects: "45 Projects",
      color: "green",
    },
    {
      id: 3,
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-400" />,
      projects: "30 Projects",
      color: "green",
    },
    {
      id: 4,
      name: "Firebase",
      icon: <SiFirebase size={50} className="text-yellow-400" />,
      projects: "25 Projects",
      color: "yellow",
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <SiBootstrap size={50} className="text-purple-400" />,
      projects: "40 Projects",
      color: "purple",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-cyan-400" />,
      projects: "35 Projects",
      color: "cyan",
    },
  ];

  return (
    <section
      id="skills-section"
      className="relative text-white py-16 px-6 overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-500 flex flex-col items-center text-center transform hover:-translate-y-2"
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

              {/* Icon with glow effect */}
              <div
                className={`relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]`}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mt-4 text-white">
                {skill.name}
              </h3>
              <p className="text-gray-400">{skill.projects}</p>

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

export default Skills;
