"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaPalette,
  FaFire,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const categoryVariants = {
  initial: { scale: 1, opacity: 0.8 },
  hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  inactive: { scale: 1, opacity: 0.8 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Define categories
  const categories = [
    { id: "all", name: "All Skills", icon: <FaPalette /> },
    { id: "frontend", name: "Frontend", icon: <FaReact /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
  ];

  // Skills data
  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={40} className="text-blue-500" />,
      projects: "50+ Projects",
      color: "blue",
      proficiency: 95,
      categories: ["frontend"],
      description:
        "Component-based UI library for building interactive interfaces",
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-emerald-500" />,
      projects: "45+ Projects",
      color: "emerald",
      proficiency: 90,
      categories: ["backend"],
      description:
        "JavaScript runtime for building scalable server-side applications",
    },
    {
      id: 3,
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-500" />,
      projects: "30+ Projects",
      color: "green",
      proficiency: 85,
      categories: ["database"],
      description:
        "NoSQL database for modern applications with flexible schema",
    },
    {
      id: 4,
      name: "Firebase",
      icon: <SiFirebase size={40} className="text-amber-500" />,
      projects: "25+ Projects",
      color: "amber",
      proficiency: 80,
      categories: ["database", "backend"],
      description:
        "Platform for building web and mobile applications without server-side code",
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <SiBootstrap size={40} className="text-purple-500" />,
      projects: "40+ Projects",
      color: "purple",
      proficiency: 92,
      categories: ["frontend"],
      description:
        "CSS framework for responsive, mobile-first front-end development",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-teal-500" />,
      projects: "35+ Projects",
      color: "teal",
      proficiency: 95,
      categories: ["frontend"],
      description:
        "Utility-first CSS framework for rapidly building custom designs",
    },
    // {
    //   id: 7,
    //   name: "Next.js",
    //   icon: <SiNextdotjs size={40} className="text-gray-200" />,
    //   projects: "28+ Projects",
    //   color: "gray",
    //   proficiency: 88,
    //   categories: ["frontend", "backend"],
    //   description: "React framework for production with server-side rendering",
    // },
    // {
    //   id: 8,
    //   name: "TypeScript",
    //   icon: <SiTypescript size={40} className="text-blue-500" />,
    //   projects: "32+ Projects",
    //   color: "blue",
    //   proficiency: 85,
    //   categories: ["frontend", "backend"],
    //   description:
    //     "Strongly typed programming language that builds on JavaScript",
    // },
    {
      id: 9,
      name: "JavaScript",
      icon: <SiJavascript size={40} className="text-yellow-400" />,
      projects: "60+ Projects",
      color: "yellow",
      proficiency: 97,
      categories: ["frontend", "backend"],
      description:
        "High-level, versatile scripting language used to create dynamic web applications",
    },
  ];

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeCategory));

  // Handle category change without delay
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  // Get color classes based on skill color
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        bgLight: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        gradient: "from-blue-600 to-blue-400",
      },
      emerald: {
        bg: "bg-emerald-500",
        bgLight: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        gradient: "from-emerald-600 to-emerald-400",
      },
      green: {
        bg: "bg-green-500",
        bgLight: "bg-green-500/10",
        border: "border-green-500/30",
        text: "text-green-400",
        gradient: "from-green-600 to-green-400",
      },
      amber: {
        bg: "bg-amber-500",
        bgLight: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
        gradient: "from-amber-600 to-amber-400",
      },
      purple: {
        bg: "bg-purple-500",
        bgLight: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        gradient: "from-purple-600 to-purple-400",
      },
      teal: {
        bg: "bg-teal-500",
        bgLight: "bg-teal-500/10",
        border: "border-teal-500/30",
        text: "text-teal-400",
        gradient: "from-teal-600 to-teal-400",
      },
      gray: {
        bg: "bg-gray-500",
        bgLight: "bg-gray-500/10",
        border: "border-gray-500/30",
        text: "text-gray-400",
        gradient: "from-gray-600 to-gray-400",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <div
      id="skills"
      className="min-h-screen glass/80 text-white py-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl font-bold mb-1 text-center"
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="relative text-center items-center bg-gray-900/40 border border-cyan-500/30 rounded-xl p-6 shadow-xl mb-12">
              <h2 className="text-3xl items-center justify-center md:text-3xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-500 to-teal-400">
                Professional Skills
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 md:w-full mx-auto text-sm md:text-lg"
              >
                Expertise across the full stack development spectrum with proven
                project experience
              </motion.p>
            </div>
          </motion.h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="grid grid-cols-2 m-4  md:m-0 md:flex md:flex-wrap text-md md:text-xl justify-center gap-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variants={categoryVariants}
              initial="initial"
              animate={activeCategory === category.id ? "active" : "inactive"}
              whileTap={{ scale: 0.95 }}
              className={`
                relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full 
                backdrop-blur-md transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-[rgba(20,184,166,0.6)] border border-white/10 shadow-lg shadow-teal-900/20"
                    : "bg-gray-800/50 hover:bg-gray-700/50"
                }
              `}
            >
              <span
                className={`text-xl ${
                  activeCategory === category.id
                    ? "text-purple-400"
                    : "text-gray-400"
                }`}
              >
                {category.icon}
              </span>
              <span
                className={`font-medium ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {filteredSkills.map((skill, index) => {
              const colorClasses = getColorClasses(skill.color);

              return (
                <motion.div
                  key={skill.id}
                  custom={index}
                  variants={cardVariants}
                  className={`
                    relative overflow-hidden glass border-gray-700/50 rounded-xl
                    flex flex-col items-center text-center
                    transition-all duration-300
                  `}
                >
                  {/* Gradient top border */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${colorClasses.gradient}`}
                  ></div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col items-center w-full h-full">
                    {/* Category badges */}
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {skill.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`
                            text-xs font-medium px-2 py-1 rounded-full 
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
                        </span>
                      ))}
                    </div>

                    {/* Icon with animation */}
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className={`
                        relative z-10 p-4 rounded-full mb-4
                        ${colorClasses.bgLight} ${colorClasses.border}
                        border-2 flex items-center justify-center
                      `}
                    >
                      {skill.icon}

                      {/* Animated rings */}
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute inset-0 rounded-full border-2 ${colorClasses.border}`}
                          animate={{
                            scale: [1, 1.4 + i * 0.2],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            // repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Skill name and projects */}
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 flex items-center gap-1">
                      <FaFire className="text-orange-400" />
                      {skill.projects}
                    </p>

                    {/* Skill description */}
                    <p className="hidden md:block text-gray-300 text-sm mb-4">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-16 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 max-w-md mx-auto"
          >
            <p className="text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsShowcase;
