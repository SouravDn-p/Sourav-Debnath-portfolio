// import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";
// import SDImage from "../../assets/SD.png";

// export default function HomeContent() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-24 md:py-12 relative overflow-hidden">
//       {/* Futuristic Robotic Background */}
// <div className="absolute inset-0 z-0 overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
//     {/* SVG for subtle circuit-like pattern */}
//     <svg
//       className="absolute inset-0 w-full h-full opacity-10"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <pattern
//           id="circuit-pattern"
//           width="40"
//           height="40"
//           patternUnits="userSpaceOnUse"
//         >
//           <path
//             d="M 10 0 L 10 10 L 0 10 M 30 0 L 30 10 L 40 10 M 0 30 L 10 30 L 10 40 M 40 30 L 30 30 L 30 40 M 20 20 L 20 30 M 20 20 L 30 20"
//             stroke="#ffffff"
//             strokeWidth="0.5"
//             fill="none"
//             opacity="0.3"
//           />
//           <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.4" />
//           <circle cx="30" cy="10" r="1" fill="#ffffff" opacity="0.4" />
//           <circle cx="10" cy="30" r="1" fill="#ffffff" opacity="0.4" />
//           <circle cx="30" cy="30" r="1" fill="#ffffff" opacity="0.4" />
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//     </svg>

//     {/* Subtle glowing elements */}
//     <div className="absolute top-20 left-10 w-64 h-64 bg-gray-700 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse"></div>
//     <div className="absolute top-40 right-10 w-64 h-64 bg-gray-600 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse animation-delay-2000"></div>
//     <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gray-500 rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse animation-delay-4000"></div>

//     {/* Minimal floating particles */}
//     <div className="absolute top-10 left-20 w-3 h-3 bg-gray-300 rounded-full animate-float shadow-[0_0_5px_#ffffff]"></div>
//     <div className="absolute bottom-30 right-30 w-2 h-2 bg-gray-400 rounded-full animate-float animation-delay-1500 shadow-[0_0_5px_#ffffff]"></div>
//     <div className="absolute top-60 left-3/4 w-4 h-4 bg-gray-500 rounded-full animate-float animation-delay-3000 shadow-[0_0_5px_#ffffff]"></div>
//   </div>
// </div>

//       {/* Content */}
//       <div className="text-center ml-0 py-0 md:pt-16 md:ml-12 lg:text-left lg:w-1/2 z-10 relative">
//         <h1 className="text-5xl font-bold mt-2 text-gray-200">Hello, I’m</h1>
//         <h1 className="text-5xl font-bold mt-2">
//           <span className="text-green-400">Sourav Debnath</span>, A
//         </h1>
//         <h1 className="text-5xl pt-4 font-bold text-gray-300">
//           <TypeAnimation
//             sequence={[
//               "Junior Web Developer.",
//               2000,
//               "Freelancer.",
//               2000,
//               "MERN Stack Developer.",
//               2000,
//             ]}
//             speed={50}
//             repeat={Infinity}
//           />
//         </h1>
//         <p className="mt-4 text-gray-500">
//           I am passionate about building interactive and scalable web
//           applications. Proficient in React, JavaScript, and modern front-end
//           technologies.
//         </p>
//         <div className="mt-6">
//           <button className="bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600 transition duration-300">
//             Download CV
//           </button>
//         </div>

//         <div className="mt-6 flex justify-center lg:justify-start space-x-6">
//           <a
//             href="https://www.facebook.com/Sourav.Debnath.246"
//             target="_blank"
//             className="text-green-400 text-2xl hover:text-green-500 transition duration-300"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
//             target="_blank"
//             className="text-green-400 text-2xl hover:text-green-500 transition duration-300"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="mailto:sdsouravdebnath26@gmail.com"
//             className="text-green-400 text-2xl hover:text-green-500 transition duration-300"
//           >
//             <FaEnvelope />
//           </a>
//         </div>
//       </div>

// <div className="flex justify-center lg:w-1/2 z-10 relative">
//   <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-cyan-400 rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
//     <img
//       src={SDImage}
//       alt="Sourav Debnath"
//       className="w-full h-full object-cover filter brightness-110"
//     />
//     <div className="absolute w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-spin-slow"></div>
//   </div>
// </div>
//     </div>
//   );
// }

// // CSS Animations
// const styles = `
//   @keyframes pulse {
//     0%, 100% { transform: scale(1); opacity: 0.15; }
//     50% { transform: scale(1.05); opacity: 0.2; }
//   }
//   .animate-pulse {
//     animation: pulse 4s infinite ease-in-out;
//   }
//   @keyframes float {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-10px); }
//   }
//   .animate-float {
//     animation: float 3s infinite ease-in-out;
//   }
//   .animation-delay-1500 { animation-delay: 1.5s; }
//   .animation-delay-2000 { animation-delay: 2s; }
//   .animation-delay-3000 { animation-delay: 3s; }
//   .animation-delay-4000 { animation-delay: 4s; }
// `;

// // Inject CSS
// const styleSheet = document.createElement("style");
// styleSheet.textContent = styles;
// document.head.appendChild(styleSheet);

"use client";

import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SDImage from "../../assets/sourav.jpg";
import { useEffect, useRef } from "react";

export default function HomeContent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle system
    const particles = [];
    const particleCount = 100;
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

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

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

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
      glow1.addColorStop(0, "rgba(0, 255, 255, 0.2)");
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
      glow2.addColorStop(0, "rgba(255, 0, 255, 0.1)");
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
    <div className="min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-24 md:py-12 relative overflow-hidden">
      {/* Futuristic Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Holographic overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none"></div>

      {/* Content */}
      <div className="text-center ml-0 py-0 md:pt-16 md:ml-12 lg:text-left lg:w-1/2 z-10 relative">
        <h1 className="text-5xl font-bold mt-2 text-cyan-300">Hello, I'm</h1>
        <h1 className="text-5xl font-bold mt-2">
          <span className="text-green-400">Sourav Debnath</span>, A
        </h1>
        <h1 className="text-5xl pt-4 font-bold text-purple-400">
          <TypeAnimation
            sequence={[
              "Junior Web Developer.",
              2000,
              "Freelancer.",
              2000,
              "MERN Stack Developer.",
              2000,
            ]}
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h1>
        <p className="mt-4 text-gray-300 backdrop-blur-sm bg-black/20 p-3 rounded-lg">
          I am passionate about building interactive and scalable web
          applications. Proficient in React, JavaScript, and modern front-end
          technologies.
        </p>
        <div className="mt-6">
          <button className="bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600 transition duration-300 shadow-[0_0_15px_#00ff00]">
            Download CV
          </button>
        </div>

        <div className="mt-6 flex justify-center lg:justify-start space-x-6">
          <a
            href="https://www.facebook.com/Sourav.Debnath.246"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:sdsouravdebnath26@gmail.com"
            className="text-green-400 text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:w-1/2 z-10 relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-cyan-400 rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
          <img
            src={SDImage}
            alt="Sourav Debnath"
            className="w-full h-full object-cover filter brightness-110"
          />

          {/* Animated ring */}
          <div className="absolute w-full h-full border-8 border-cyan-400/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute w-full h-full border-8 border-cyan-400/30 rounded-full animate-spin-slow"></div>
      </div>

      {/* Inject CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
