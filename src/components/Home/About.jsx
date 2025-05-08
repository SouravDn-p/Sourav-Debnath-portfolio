import { FaDownload, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import SDImage from "../../assets/SD.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="min-h-screen relative bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* Background with Circuit Pattern and Moving Robot */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Circuit Pattern */}
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

          {/* Moving Robot Animation */}
          <motion.svg
            className="absolute w-24 h-24 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            initial={{ x: "-100%", y: "20%" }}
            animate={{
              x: "100%",
              y: ["20%", "30%", "20%"], // Slight vertical movement for a floating effect
            }}
            transition={{
              x: {
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            {/* Robot Body */}
            <rect x="30" y="20" width="40" height="40" fill="#ffffff" rx="5" />
            {/* Head */}
            <rect x="40" y="10" width="20" height="15" fill="#ffffff" rx="3" />
            {/* Arms */}
            <rect x="20" y="30" width="10" height="20" fill="#ffffff" rx="2" />
            <rect x="70" y="30" width="10" height="20" fill="#ffffff" rx="2" />
            {/* Legs */}
            <rect x="35" y="60" width="10" height="20" fill="#ffffff" rx="2" />
            <rect x="55" y="60" width="10" height="20" fill="#ffffff" rx="2" />
            {/* Eye */}
            <circle cx="50" cy="17" r="3" fill="#00ffcc" />
          </motion.svg>
        </div>
      </div>

      {/* Animated Image Section */}
      <motion.div
        className="lg:w-1/3 flex justify-center z-10 pb-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-blue-400">
          <img
            src={SDImage}
            alt="Sourav Debnath"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        className="lg:w-2/3 text-center z-10 lg:text-left md:space-y-4 bg-gray-800 p-8 rounded-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>

        <p className="text-gray-300 text-lg flex items-center gap-2">
          <FaGraduationCap className="text-blue-400 text-xl" />
          Final-year **CSE Honours** student
        </p>

        <p className="text-gray-300 text-lg flex items-center gap-2">
          <FaLaptopCode className="text-blue-400 text-xl" />
          Practicing **MERN Stack Development**
        </p>

        <p className="text-gray-300 text-lg">
          Passionate about **React, Node.js, MongoDB, Firebase, and Tailwind
          CSS**.
        </p>

        {/* Bio Section */}
        <p className="text-gray-400 text-base mt-4">
          I’m Sourav Debnath from the dynamic city of Dhaka, Bangladesh, where
          my journey into web development began. I'm a passionate full-stack
          developer with a strong drive to build responsive, user-centric
          digital experiences. Specializing in the MERN stack — MongoDB,
          Express.js, React, and Node.js — I strive to create scalable and
          efficient web applications while continuously learning and evolving
          with the latest technologies.
        </p>

        <motion.button
          className="bg-blue-500 px-6 py-3 mx-auto md:mx-0 mt-2 rounded-md text-white hover:bg-blue-600 transition duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Download Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutMe;
