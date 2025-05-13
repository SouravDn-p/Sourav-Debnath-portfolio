"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { motion, AnimatePresence, scale } from "framer-motion";

// Animation variants for category buttons
const buttonVariants = {
  initial: { scale: 1, opacity: 0.7 },
  hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  active: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  inactive: { scale: 1, opacity: 0.7 },
};

// Animation variants for skill cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// Animation variants for skill icon
const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 25px rgba(0, 100, 255, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// Animation variants for skill bar
const barVariants = {
  initial: { width: 0, opacity: 0 },
  visible: (index) => ({
    width: "100%",
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const SdSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatingOut, setAnimatingOut] = useState(false);

  // Define categories
  const categories = [
    { id: "all", name: "All Skills", icon: <FaPalette /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
  ];

  // Skills data (unchanged)
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

  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/20",
    emerald: "bg-emerald-500/10 border-emerald-500/20",
    green: "bg-green-500/10 border-green-500/20",
    amber: "bg-amber-500/10 border-amber-500/20",
    purple: "bg-purple-500/10 border-purple-500/20",
    teal: "bg-teal-500/10 border-teal-500/20",
    slate: "bg-slate-500/10 border-slate-500/20",
  };

  return (
    <section
      id="skills"
      className="relative text-white py-20 px-6 overflow-hidden min-h-screen"
    >
      {/* Canvas Background */}

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-center mb-12"
        >
          Professional Skills
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl mx-auto">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variants={buttonVariants}
              initial="initial"
              animate={activeCategory === category.id ? "active" : "inactive"}
              whileHover="hover"
              whileTap={{ scale: 0.8 }}
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
                      }-600`
                    : "shadow-none"
                }
                ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${
                        category.id === "frontend"
                          ? "from-blue-900 to-blue-800/80"
                          : category.id === "backend"
                          ? "from-emerald-900/80 to-emerald-800/40"
                          : category.id === "database"
                          ? "from-amber-900/80 to-amber-800/60"
                          : "from-purple-900/80 to-purple-800/40"
                      }`
                    : "bg-gray-700/50 hover:bg-gray-800/50"
                }
              `}
            >
              {activeCategory === category.id && (
                <motion.div
                  className={`absolute left-3 w-2 h-2 rounded-full ${
                    category.id === "frontend"
                      ? "bg-blue-400"
                      : category.id === "backend"
                      ? "bg-emerald-400"
                      : category.id === "database"
                      ? "bg-amber-400"
                      : "bg-purple-400"
                  }`}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              )}
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
            </motion.button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
            key={activeCategory}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                custom={index}
                className={`
                  relative bg-[#5134b9] backdrop-blur-lg p-8 
                  rounded-2xl flex flex-col items-center text-center 
                  perspective-1000
                `}
              >
                {/* 3D Card Tilt Effect (CSS preserved) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/80 to-black/80 transform group-hover:rotate-x-12 group-hover:rotate-y-6 transition-transform duration-500"></div>

                {/* Glass morphism overlay */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                {/* Skill level indicator
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
                    <motion.circle
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
                          : "#3b82f6"
                      }`}
                      strokeWidth="8"
                      strokeDasharray={`${2.5 * Math.PI * 40}`}
                      strokeDashoffset={2.5 * Math.PI * 40}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      animate={{
                        strokeDashoffset:
                          2.5 * Math.PI * 40 * (1 - skill.proficiency / 100),
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
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
                </div> */}

                {/* Category badges */}
                <div className="absolute top-3 left-3 flex gap-1">
                  {skill.categories.map((cat) => (
                    <motion.span
                      key={cat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
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
                    </motion.span>
                  ))}
                </div>

                {/* Icon with enhanced effect */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`
                    relative z-10 p-6 rounded-full 
                    bg-gradient-to-br from-teal-800 to-teal-900 
                  `}
                >
                  {skill.icon}

                  {/* Orbit effect (CSS preserved) */}
                  <div className="absolute inset-0 rounded-full">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-full h-full rounded-full ${
                          colorClasses[skill.color] ||
                          "bg-gray-500/10 border-gray-500/20"
                        }`}
                        initial={{ opacity: 0, scale: 1.2 + i * 0.2 }}
                        whileHover={{ opacity: 1 }}
                        animate={{
                          rotate: 360,
                          transition: {
                            duration: 3 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2,
                          },
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mt-6 mb-1 text-white z-10"
                >
                  {skill.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 z-10 mb-4"
                >
                  {skill.projects}
                </motion.p>

                {/* Skill bar visualization */}
                <div className="w-full mt-2 h-10 relative z-10">
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={barVariants}
                        initial="initial"
                        animate="visible"
                        custom={i}
                        className={`h-2 mx-0.5 flex-1 rounded-full ${
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
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-16 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-gray-800/50 max-w-md mx-auto"
          >
            <p className="text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Inject CSS (unchanged) */}
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
