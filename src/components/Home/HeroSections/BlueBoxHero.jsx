"use client";

import { useEffect, useRef, useState } from "react";

const BlueBoxHero = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const particles = [];
    let hexagons = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHexagons();
    };

    // Initialize hexagons
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
            hue: Math.random() * 60 + 180, // Cyan to blue hues
          });
        }
      }
    };

    // Create particle
    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const size = Math.random() * 4 + 1;
      const life = Math.random() * 100 + 100;
      const hue = Math.random() * 60 + 180; // Cyan to blue hues

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

    // Draw hexagon
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

    // Track mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create particles on mouse move
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    // Handle mouse click
    const handleMouseDown = (e) => {
      setIsClicking(true);

      // Add a new ripple
      setRipples((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, size: 0, maxSize: 300, opacity: 1 },
      ]);

      // Create burst of particles
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

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dynamic gradient background
      const time = Date.now() * 0.0005;
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time) * 20}, 70%, 10%)`);
      gradient.addColorStop(
        0.5,
        `hsl(${220 + Math.sin(time + 1) * 20}, 70%, 15%)`
      );
      gradient.addColorStop(
        1,
        `hsl(${240 + Math.sin(time + 2) * 20}, 70%, 12%)`
      );
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars/particles in background
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      for (let i = 0; i < 100; i++) {
        const x = Math.sin(time * (i * 0.1) + i) * 0.5 + 0.5;
        const y = Math.cos(time * (i * 0.1) + i) * 0.5 + 0.5;
        const size = Math.sin(time + i) * 1 + 1;

        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw hexagons
      hexagons.forEach((hex) => {
        // Calculate distance from mouse
        const dx = mousePosition.x - hex.x;
        const dy = mousePosition.y - hex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          // Hexagons react to mouse proximity
          const influence = 1 - distance / maxDistance;
          hex.size = hex.originalSize * (1 + influence * 0.5);
          hex.opacity = 0.1 + influence * 0.4;
        } else {
          // Reset to original state
          hex.size = hex.originalSize;
          hex.opacity = 0.1;
        }

        drawHexagon(hex.x, hex.y, hex.size, hex.opacity, hex.hue);
      });

      // Update and draw particles
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

      // Update and draw ripples
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
        ctx.strokeStyle = `rgba(0, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Add mouse-move glow effect
      const mouseGlow = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        isClicking ? 400 : 300
      );
      mouseGlow.addColorStop(0, "rgba(0, 255, 255, 0.3)");
      mouseGlow.addColorStop(0.5, "rgba(0, 100, 255, 0.1)");
      mouseGlow.addColorStop(1, "rgba(0, 50, 255, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a cursor highlight
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 mb-4 animate-pulse-slow">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold max-w-3xl backdrop-blur-sm bg-black/10 px-6 py-3 rounded-full">
          Crafting Next-Level Web Experiences with CSS & JS
        </p>
        <div className="mt-12 flex gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-white font-semibold rounded-full hover:bg-cyan-900/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Inject CSS */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default BlueBoxHero;
