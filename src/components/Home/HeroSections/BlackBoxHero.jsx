// "use client";

// import { useEffect, useRef, useState } from "react";

// const BlackBoxHero = () => {
//   const canvasRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);
//   const [ripples, setRipples] = useState([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     const particles = [];
//     let hexagons = [];

//     // Set canvas dimensions
//     const setCanvasDimensions = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initHexagons();
//     };

//     // Initialize hexagons
//     const initHexagons = () => {
//       hexagons = [];
//       const hexSize = 40; // Smaller hexagons for more density
//       const hexHeight = hexSize * Math.sqrt(3);

//       for (let x = -hexSize; x < canvas.width + hexSize; x += hexSize * 1.5) {
//         for (
//           let y = -hexHeight;
//           y < canvas.height + hexHeight;
//           y += hexHeight
//         ) {
//           const offsetX = y % (hexHeight * 2) === 0 ? 0 : hexSize * 0.75;
//           hexagons.push({
//             x: x + offsetX,
//             y,
//             size: hexSize,
//             originalSize: hexSize,
//             color: {
//               r: 20 + Math.random() * 10,
//               g: 20 + Math.random() * 10,
//               b: 30 + Math.random() * 10,
//             },
//             hoverColor: {
//               r: 0,
//               g: 150 + Math.random() * 100,
//               b: 200 + Math.random() * 55,
//             },
//             opacity: 0.7 + Math.random() * 0.3,
//             isHovered: false,
//           });
//         }
//       }
//     };

//     // Create particle
//     const createParticle = (x, y) => {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = Math.random() * 2 + 1;
//       const size = Math.random() * 3 + 1;
//       const life = Math.random() * 60 + 40;

//       particles.push({
//         x,
//         y,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         size,
//         life,
//         maxLife: life,
//         color: {
//           r: 0,
//           g: 150 + Math.random() * 100,
//           b: 200 + Math.random() * 55,
//         },
//       });
//     };

//     // Draw filled hexagon
//     const drawHexagon = (x, y, size, color, opacity) => {
//       ctx.beginPath();
//       for (let i = 0; i < 6; i++) {
//         const angle = (Math.PI / 3) * i + Math.PI / 6;
//         const px = x + size * Math.cos(angle);
//         const py = y + size * Math.sin(angle);
//         if (i === 0) {
//           ctx.moveTo(px, py);
//         } else {
//           ctx.lineTo(px, py);
//         }
//       }
//       ctx.closePath();
//       ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
//       ctx.fill();

//       // Add subtle stroke
//       ctx.strokeStyle = `rgba(${color.r + 30}, ${color.g + 30}, ${
//         color.b + 30
//       }, ${opacity * 0.7})`;
//       ctx.lineWidth = 1;
//       ctx.stroke();
//     };

//     // Check if point is inside hexagon
//     const isPointInHexagon = (x, y, hex) => {
//       const distance = Math.sqrt((x - hex.x) ** 2 + (y - hex.y) ** 2);
//       return distance < hex.size;
//     };

//     // Track mouse movement
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });

//       // Create particles on mouse move
//       for (let i = 0; i < 2; i++) {
//         createParticle(e.clientX, e.clientY);
//       }

//       // Check for hexagon hover
//       hexagons.forEach((hex) => {
//         hex.isHovered = isPointInHexagon(e.clientX, e.clientY, hex);
//       });
//     };

//     // Handle mouse click
//     const handleMouseDown = (e) => {
//       setIsClicking(true);

//       // Add a new ripple
//       setRipples((prev) => [
//         ...prev,
//         { x: e.clientX, y: e.clientY, size: 0, maxSize: 200, opacity: 0.7 },
//       ]);

//       // Create burst of particles
//       for (let i = 0; i < 20; i++) {
//         createParticle(e.clientX, e.clientY);
//       }

//       // Change colors of nearby hexagons
//       hexagons.forEach((hex) => {
//         const dx = e.clientX - hex.x;
//         const dy = e.clientY - hex.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           hex.hoverColor = {
//             r: 0,
//             g: 150 + Math.random() * 100,
//             b: 200 + Math.random() * 55,
//           };
//         }
//       });
//     };

//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     window.addEventListener("resize", setCanvasDimensions);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     setCanvasDimensions();

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Create black background
//       ctx.fillStyle = "rgb(10, 10, 15)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw and update hexagons
//       hexagons.forEach((hex) => {
//         // Calculate distance from mouse
//         const dx = mousePosition.x - hex.x;
//         const dy = mousePosition.y - hex.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const maxDistance = 150;

//         if (distance < maxDistance || hex.isHovered) {
//           // Hexagons react to mouse proximity
//           const influence = 1 - Math.min(1, distance / maxDistance);
//           hex.size = hex.originalSize * (1 + influence * 0.3);

//           // Interpolate between original and hover color
//           const lerpColor = {
//             r: hex.color.r + (hex.hoverColor.r - hex.color.r) * influence,
//             g: hex.color.g + (hex.hoverColor.g - hex.color.g) * influence,
//             b: hex.color.b + (hex.hoverColor.b - hex.color.b) * influence,
//           };

//           drawHexagon(
//             hex.x,
//             hex.y,
//             hex.size,
//             lerpColor,
//             hex.opacity + influence * 0.3
//           );
//         } else {
//           // Reset to original state
//           hex.size = hex.originalSize;
//           drawHexagon(hex.x, hex.y, hex.size, hex.color, hex.opacity);
//         }
//       });

//       // Update and draw particles
//       particles.forEach((particle, index) => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;
//         particle.life--;

//         if (particle.life <= 0) {
//           particles.splice(index, 1);
//           return;
//         }

//         const opacity = particle.life / particle.maxLife;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`;
//         ctx.fill();
//       });

//       // Update and draw ripples
//       setRipples((prevRipples) =>
//         prevRipples
//           .map((ripple) => ({
//             ...ripple,
//             size: ripple.size + 5,
//             opacity: ripple.opacity - 0.01,
//           }))
//           .filter((ripple) => ripple.opacity > 0)
//       );

//       ripples.forEach((ripple) => {
//         ctx.beginPath();
//         ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(0, 200, 255, ${ripple.opacity})`;
//         ctx.lineWidth = 2;
//         ctx.stroke();
//       });

//       // Add subtle mouse glow
//       const mouseGlow = ctx.createRadialGradient(
//         mousePosition.x,
//         mousePosition.y,
//         0,
//         mousePosition.x,
//         mousePosition.y,
//         isClicking ? 200 : 150
//       );
//       mouseGlow.addColorStop(0, "rgba(0, 200, 255, 0.2)");
//       mouseGlow.addColorStop(0.5, "rgba(0, 100, 200, 0.05)");
//       mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
//       ctx.fillStyle = mouseGlow;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     // Clean up
//     return () => {
//       window.removeEventListener("resize", setCanvasDimensions);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Canvas Background */}
//       <canvas ref={canvasRef} className="absolute inset-0 z-0" />

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//         <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 mb-4">
//           Welcome to My Portfolio
//         </h1>
//         <p className="text-2xl md:text-3xl text-white font-semibold max-w-3xl backdrop-blur-sm bg-black/30 px-6 py-3 rounded-lg mb-8">
//           Crafting Next-Level Web Experiences with CSS & JS
//         </p>
//         <div className="mt-8 flex gap-6">
//           <a
//             href="#projects"
//             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
//           >
//             Explore My Work
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-white font-semibold rounded-md hover:bg-cyan-900/30 transition-all duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlackBoxHero;



"use client";

import { useEffect, useRef, useState } from "react";

const BlackBoxHero = () => {
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
      const hexSize = 40; // Smaller hexagons for more density
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
            color: {
              r: 0,
              g: 0,
              b: 0,
            },
            hoverColor: {
              r: 0,
              g: 100,
              b: 200,
            },
            opacity: 0.7 + Math.random() * 0.3,
            isHovered: false,
          });
        }
      }
    };

    // Create particle
    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const size = Math.random() * 3 + 1;
      const life = Math.random() * 60 + 40;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        life,
        maxLife: life,
        color: {
          r: 0,
          g: 100 + Math.random() * 100,
          b: 200 + Math.random() * 55,
        },
      });
    };

    // Draw filled hexagon
    const drawHexagon = (x, y, size, color, opacity) => {
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
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
      ctx.fill();

      // Add subtle stroke
      ctx.strokeStyle = `rgba(${color.r + 30}, ${color.g + 30}, ${
        color.b + 30
      }, ${opacity * 0.7})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Check if point is inside hexagon
    const isPointInHexagon = (x, y, hex) => {
      const distance = Math.sqrt((x - hex.x) ** 2 + (y - hex.y) ** 2);
      return distance < hex.size;
    };

    // Track mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create particles on mouse move
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }

      // Check for hexagon hover
      hexagons.forEach((hex) => {
        hex.isHovered = isPointInHexagon(e.clientX, e.clientY, hex);
      });
    };

    // Handle mouse click
    const handleMouseDown = (e) => {
      setIsClicking(true);

      // Add a new ripple
      setRipples((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, size: 0, maxSize: 200, opacity: 0.7 },
      ]);

      // Create burst of particles
      for (let i = 0; i < 20; i++) {
        createParticle(e.clientX, e.clientY);
      }

      // Change colors of nearby hexagons
      hexagons.forEach((hex) => {
        const dx = e.clientX - hex.x;
        const dy = e.clientY - hex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          hex.hoverColor = {
            r: 0,
            g: 100,
            b: 200,
          };
        }
      });
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

      // Create black background
      ctx.fillStyle = "rgb(10, 10, 15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update hexagons
      hexagons.forEach((hex) => {
        // Calculate distance from mouse
        const dx = mousePosition.x - hex.x;
        const dy = mousePosition.y - hex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance || hex.isHovered) {
          // Hexagons react to mouse proximity
          const influence = 1 - Math.min(1, distance / maxDistance);
          hex.size = hex.originalSize * (1 + influence * 0.3);

          // Interpolate between original and hover color
          const lerpColor = {
            r: hex.color.r + (hex.hoverColor.r - hex.color.r) * influence,
            g: hex.color.g + (hex.hoverColor.g - hex.color.g) * influence,
            b: hex.color.b + (hex.hoverColor.b - hex.color.b) * influence,
          };

          drawHexagon(
            hex.x,
            hex.y,
            hex.size,
            lerpColor,
            hex.opacity + influence * 0.3
          );
        } else {
          // Reset to original state
          hex.size = hex.originalSize;
          drawHexagon(hex.x, hex.y, hex.size, hex.color, hex.opacity);
        }
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
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`;
        ctx.fill();
      });

      // Update and draw ripples
      setRipples((prevRipples) =>
        prevRipples
          .map((ripple) => ({
            ...ripple,
            size: ripple.size + 5,
            opacity: ripple.opacity - 0.01,
          }))
          .filter((ripple) => ripple.opacity > 0)
      );

      ripples.forEach((ripple) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 200, 255, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Add subtle mouse glow
      const mouseGlow = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        isClicking ? 200 : 150
      );
      mouseGlow.addColorStop(0, "rgba(0, 200, 255, 0.2)");
      mouseGlow.addColorStop(0.5, "rgba(0, 100, 200, 0.05)");
      mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold max-w-3xl backdrop-blur-sm bg-black/30 px-6 py-3 rounded-lg mb-8">
          Crafting Next-Level Web Experiences with CSS & JS
        </p>
        <div className="mt-8 flex gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-white font-semibold rounded-md hover:bg-cyan-900/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlackBoxHero;