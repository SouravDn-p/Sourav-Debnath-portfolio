import { motion } from "framer-motion";
import SDImage from "../../assets/sourav.jpg";

const AboutMe = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37134b] via-gray-900 to-[#37134b]">
          {/* SVG for subtle circuit-like pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="circuit-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 10 10 L 0 10 M 30 0 L 30 10 L 40 10 M 0 30 L 10 30 L 10 40 M 40 30 L 30 30 L 30 40 M 20 20 L 20 30 M 20 20 L 30 20"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.3"
                />
                <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.4" />
                <circle cx="30" cy="10" r="1" fill="#ffffff" opacity="0.4" />
                <circle cx="10" cy="30" r="1" fill="#ffffff" opacity="0.4" />
                <circle cx="30" cy="30" r="1" fill="#ffffff" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>

          {/* Subtle glowing elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#37134b] rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-[#37134b] rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-[#37134b] rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse animation-delay-4000"></div>

          {/* Minimal floating particles */}
          <div className="absolute top-10 left-20 w-3 h-3 bg-gray-300 rounded-full animate-float shadow-[0_0_5px_#ffffff]"></div>
          <div className="absolute bottom-30 right-30 w-2 h-2 bg-gray-400 rounded-full animate-float animation-delay-1500 shadow-[0_0_5px_#ffffff]"></div>
          <div className="absolute top-60 left-3/4 w-4 h-4 bg-gray-500 rounded-full animate-float animation-delay-3000 shadow-[0_0_5px_#ffffff]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-5 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="md:col-span-2" variants={imageVariants}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-800 relative">
                  <img
                    src={SDImage}
                    alt="Professional portrait of Sourav Debnath"
                    className="w-full h-full object-cover"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black opacity-35 mix-blend-overlay pointer-events-none"></div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gray-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-500">1+</span>
                  <span className="text-gray-300 text-sm ml-1">
                    Years
                    <br />
                    Exp
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div className="md:col-span-3" variants={childVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                Final-Year CSE Honours Student & MERN Stack Developer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I’m Sourav Debnath from the dynamic city of Dhaka, Bangladesh,
                where my journey into web development began. I'm a passionate
                full-stack developer with a strong drive to build responsive,
                user-centric digital experiences.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Specializing in the MERN stack — MongoDB, Express.js, React, and
                Node.js — I strive to create scalable and efficient web
                applications while continuously learning and evolving with the
                latest technologies. I’m deeply passionate about{" "}
                <span className="text-purple-400 font-medium">
                  React, Node.js, MongoDB, Firebase, and Tailwind CSS
                </span>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "#37134b" }}
                  variants={childVariants}
                >
                  <h4 className="text-lg font-medium text-purple-400 mb-2">
                    Education
                  </h4>
                  <p className="text-gray-300">
                    Final-Year CSE Honours Student
                  </p>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "#37134b" }}
                  variants={childVariants}
                >
                  <h4 className="text-lg font-medium text-purple-400 mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300">
                    Dhaka, Bangladesh
                    <br />
                    Available for remote work
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Inject CSS */}
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
