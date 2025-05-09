"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SDImage from "../../../assets/sourav.jpg";

const Test = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const particles = [];
    let hexagons = [];

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHexagons();
    };

    const initHexagons = () => {
      hexagons = [];
      const hexSize = 50;
      const hexHeight = hexSize * Math.sqrt(3);

      for (let x = -hexSize; x < canvas.width + hexSize; x += hexSize * 1.5) {
        for (
          let y = -hexHeight;
          y < canvas.height + hexHeight;
          y += hexHeight
        ) {
          const offsetX = y % (hexHeight * 2) === 0 ? 0 : hexSize * 0.75;
          hexagons.push({
            x: x + offsetX,
            y,
            size: hexSize,
            originalSize: hexSize,
            opacity: 0.1,
            hue: Math.random() * 60 + 270,
          });
        }
      }
    };

    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const size = Math.random() * 4 + 1;
      const life = Math.random() * 100 + 100;
      const hue = Math.random() * 60 + 270;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        life,
        maxLife: life,
        hue,
      });
    };

    const drawHexagon = (x, y, size, opacity, hue) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${opacity})`;
      ctx.stroke();
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      setRipples((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, size: 0, maxSize: 300, opacity: 1 },
      ]);
      for (let i = 0; i < 30; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("resize", setCanvasDimensions);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    setCanvasDimensions();

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.0005;
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, `hsl(${280 + Math.sin(time) * 10}, 70%, 10%)`);
      gradient.addColorStop(
        0.5,
        `hsl(${290 + Math.sin(time + 1) * 10}, 70%, 8%)`
      );
      gradient.addColorStop(
        1,
        `hsl(${300 + Math.sin(time + 2) * 10}, 70%, 6%)`
      );
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      for (let i = 0; i < 100; i++) {
        const x = Math.sin(time * (i * 0.1) + i) * 0.5 + 0.5;
        const y = Math.cos(time * (i * 0.1) + i) * 0.5 + 0.5;
        const size = Math.sin(time + i) * 1 + 1;

        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, size, 0, Math.PI * 2);
        ctx.fill();
      }

      hexagons.forEach((hex) => {
        const dx = mousePosition.x - hex.x;
        const dy = mousePosition.y - hex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          const influence = 1 - distance / maxDistance;
          hex.size = hex.originalSize * (1 + influence * 0.5);
          hex.opacity = 0.1 + influence * 0.4;
        } else {
          hex.size = hex.originalSize;
          hex.opacity = 0.1;
        }

        drawHexagon(hex.x, hex.y, hex.size, hex.opacity, hex.hue);
      });

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        const opacity = particle.life / particle.maxLife;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${opacity})`;
        ctx.fill();
      });

      setRipples((prevRipples) =>
        prevRipples
          .map((ripple) => ({
            ...ripple,
            size: ripple.size + 10,
            opacity: ripple.opacity - 0.02,
          }))
          .filter((ripple) => ripple.opacity > 0)
      );

      ripples.forEach((ripple) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 51, 234, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      const mouseGlow = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        isClicking ? 400 : 300
      );
      mouseGlow.addColorStop(0, "rgba(147, 51, 234, 0.3)");
      mouseGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.1)");
      mouseGlow.addColorStop(1, "rgba(124, 58, 237, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(147, 51, 234, 0.5)";
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isClicking, ripples]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col-reverse lg:flex-row items-stretch justify-center px-4 py-12 md:px-6 md:py-16 lg:py-24 text-white"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Holographic overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none"></div>

      <div className="text-center py-4 md:pt-8 md:ml-12 lg:text-left lg:w-1/2 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-cyan-300">
            Hello, I'm
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-green-400">Sourav Debnath</span>, A
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl pt-4 font-bold text-purple-400">
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
          <p className="mt-4 text-sm md:text-base text-gray-300 backdrop-blur-sm bg-black/20 p-3 rounded-lg">
            I am passionate about building interactive and scalable web
            applications. Proficient in React, JavaScript, and modern front-end
            technologies.
          </p>
          <div className="mt-4 md:mt-6">
            <button className="bg-green-500 px-4 py-2 md:px-6 md:py-3 rounded-md text-white hover:bg-green-600 transition duration-300 shadow-[0_0_15px_#00ff00] text-sm md:text-base">
              Download CV
            </button>
          </div>
          <div className="mt-4 md:mt-6 flex justify-center lg:justify-start space-x-4 md:space-x-6">
            <a
              href="https://www.facebook.com/Sourav.Debnath.246"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 text-xl md:text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 text-xl md:text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:sdsouravdebnath26@gmail.com"
              className="text-green-400 text-xl md:text-2xl hover:text-green-500 transition duration-300 hover:shadow-[0_0_10px_#00ff00]"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center lg:w-1/2 z-10 relative py-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-cyan-400 rounded-full overflow-hidden flex items-center justify-center bg-gray-800"
        >
          <img
            src={SDImage}
            alt="Sourav Debnath"
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute w-full h-full border-8 border-cyan-400/30 rounded-full animate-spin-slow"></div>
        </motion.div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="md:h-32 md:w-32" />
      </button>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
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
    </section>
  );
};

export default Test;
