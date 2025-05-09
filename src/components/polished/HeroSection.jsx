"use client";

import { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Draw hexagonal pattern
    const drawHexagon = (x, y, size) => {
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
      ctx.stroke();
    };

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
      gradient.addColorStop(0, "rgba(10, 15, 30, 1)");
      gradient.addColorStop(1, "rgba(20, 25, 45, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hexagonal grid
      const hexSize = 50;
      const hexHeight = hexSize * Math.sqrt(3);
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let x = -hexSize; x < canvas.width + hexSize; x += hexSize * 1.5) {
        for (
          let y = -hexHeight;
          y < canvas.height + hexHeight;
          y += hexHeight
        ) {
          const offsetX = y % (hexHeight * 2) === 0 ? 0 : hexSize * 0.75;
          drawHexagon(x + offsetX, y, hexSize);
        }
      }

      // Add mouse-move glow effect
      const glow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        300
      );
      glow.addColorStop(0, "rgba(0, 255, 255, 0.2)");
      glow.addColorStop(1, "rgba(0, 255, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold">
          Crafting Next-Level Web Experiences with CSS & JS
        </p>
        <a
          href="#projects"
          className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
