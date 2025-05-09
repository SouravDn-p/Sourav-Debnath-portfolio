import  { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const SdHero = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const roleTexts = [
    "Full Stack Developer",
    "Frontend Engineer",
    "UI/UX Designer",
    "React Developer",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roleTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

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
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute top-32 left-12 z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-light text-gray-300"
        >
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-8"
          >
            {roleTexts[currentTextIndex]}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-12 z-20 w-64 h-64 rounded-full overflow-hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Developer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 mb-4 animate-pulse-slow">
          John Doe
        </h1>
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6">
          Creative Developer
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl backdrop-blur-sm bg-black/10 px-6 py-3 rounded-full mb-8">
          Crafting digital experiences that inspire & engage
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-900/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

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

export default SdHero;
