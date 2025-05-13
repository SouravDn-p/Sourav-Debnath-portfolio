"use client";

import { useState } from "react";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiBook,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiChevronRight,
} from "react-icons/fi";

const EducationExperience = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("education");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "BSc in CSE",
      institution: "Green University",
      location: "Dhaka, Bangladesh",
      duration: "2019 - Present",
      description:
        "Currently in the final year of my Bachelor's in Computer Science & Engineering, focusing on web development and software engineering principles.",
      achievements: [
        "Maintained excellent academic standing throughout the program",
        "Participated in multiple coding competitions and hackathons",
        "Developed several full-stack web applications as part of coursework",
      ],
      color: "green",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sarail Govt College",
      location: "Sarail, Bangladesh",
      duration: "2017 - 2019",
      description:
        "Completed Higher Secondary Certificate with a focus on science and mathematics, building a strong foundation for my computer science education.",
      achievements: [
        "Achieved a GPA of 4.50/5.00",
        "Participated in science and technology exhibitions",
        "Developed interest in programming and web development",
      ],
      color: "cyan",
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Online Learning Platform",
      location: "Remote",
      duration: "2020",
      description:
        "Completed an intensive web development bootcamp covering modern technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      achievements: [
        "Built multiple full-stack applications as part of the curriculum",
        "Mastered MERN stack development principles",
        "Collaborated with peers on group projects",
      ],
      color: "purple",
    },
  ];

  // Experience Data (for future use)
  const experienceData = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "2021 - Present",
      description:
        "Working as a freelance MERN Stack developer, building full-stack web applications for various clients and industries.",
      achievements: [
        "Developed responsive and interactive user interfaces using React",
        "Built RESTful APIs with Node.js and Express",
        "Implemented database solutions using MongoDB",
      ],
      color: "green",
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Tech Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      duration: "2020 - 2021",
      description:
        "Worked as a web developer intern, assisting in the development of web applications and gaining practical industry experience.",
      achievements: [
        "Contributed to front-end development using React",
        "Assisted in API development and integration",
        "Participated in code reviews and team meetings",
      ],
      color: "cyan",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Determine which data to display based on active tab
  const activeData =
    activeTab === "experience" ? experienceData : educationData;

  return (
    <section
      id="education"
      className="relative text-white py-24 md:px-6 overflow-hidden  glass "
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs with parallax effect */}
        <motion.div
          className="absolute top-20 md:left-[10%] w-64 h-64 rounded-full bg-green-500/5 blur-[100px]"
          style={{ y: y1 }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]"
          style={{ y: y2 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]"
          style={{ y: y1 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-100 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 "
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional experience that have shaped my
            skills as a developer.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mx-12 mb-12">
          <div className="backdrop-blur-sm p-1 rounded-md md:rounded-full md:border border-gray-700 md:flex shadow-xl shadow-black/20">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-white shadow-inner"
                  : "text-gray-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <FiBriefcase
                  className={activeTab === "experience" ? "text-green-400" : ""}
                />
                <span>Experience</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-white shadow-inner"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <FiBook
                  className={activeTab === "education" ? "text-cyan-400" : ""}
                />
                <span>Education</span>
              </div>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500/30 via-cyan-500/30 to-purple-500/30 z-0"
            initial={{ height: 0 }}
            animate={timelineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>

          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
          >
            {activeData.map((item, index) => (
              <motion.div
                key={item.id}
                className="mb-16 last:mb-0"
                variants={itemVariants}
                custom={index}
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <motion.div
                    className={`
                      hidden md:flex absolute left-0 md:left-1/2 transform md:-translate-x-1/2 
                      w-12 h-12 rounded-full bg-gray-800 border-2 border-${item.color}-500 z-10
                      items-center justify-center shadow-lg shadow-black/30
                    `}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      timelineInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px rgba(${
                        item.color === "green"
                          ? "34, 197, 94"
                          : item.color === "cyan"
                          ? "6, 182, 212"
                          : "168, 85, 247"
                      }, 0.5)`,
                    }}
                  >
                    {activeTab === "experience" ? (
                      <FiBriefcase
                        className={`text-${item.color}-400 text-xl`}
                      />
                    ) : (
                      <FiAward className={`text-${item.color}-400 text-xl`} />
                    )}
                  </motion.div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden absolute left-0 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 z-10 flex items-center justify-center">
                    {activeTab === "experience" ? (
                      <FiBriefcase className="text-gray-400" size={16} />
                    ) : (
                      <FiAward className="text-gray-400" size={16} />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`
                      ml-16 md:ml-0 md:w-1/2 
                      ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}
                    `}
                  >
                    <motion.div
                      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 relative group shadow-xl shadow-black/10"
                      whileHover={{
                        y: -5,
                        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 15px rgba(${
                          item.color === "green"
                            ? "34, 197, 94"
                            : item.color === "cyan"
                            ? "6, 182, 212"
                            : "168, 85, 247"
                        }, 0.1)`,
                      }}
                    >
                      {/* Glowing background effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500`}
                      ></div>

                      <div
                        className={`flex items-center mb-2 ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold text-${item.color}-400`}
                        >
                          {activeTab === "experience"
                            ? item.title
                            : item.degree}
                        </h3>
                      </div>

                      <div
                        className={`flex items-center mb-1 text-white ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <div
                          className={`flex items-center ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <span className="font-medium">
                            {activeTab === "experience"
                              ? item.company
                              : item.institution}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex items-center mb-4 text-gray-400 text-sm ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <FiCalendar
                              size={14}
                              className={`text-${item.color}-400/70`}
                            />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin
                              size={14}
                              className={`text-${item.color}-400/70`}
                            />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p
                        className={`text-gray-300 mb-4 ${
                          index % 2 === 0 ? "text-left" : "md:text-right"
                        }`}
                      >
                        {item.description}
                      </p>

                      <div className={index % 2 === 0 ? "" : "md:text-right"}>
                        <h4 className="font-semibold mb-2 text-white">
                          {activeTab === "experience"
                            ? "Key Achievements:"
                            : "Highlights:"}
                        </h4>
                        <ul
                          className={`space-y-2 text-gray-300 ${
                            index % 2 === 0 ? "list-inside" : "md:list-inside"
                          }`}
                        >
                          {item.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className={`flex items-start ${
                                index % 2 === 0
                                  ? ""
                                  : "md:justify-end md:flex-row-reverse"
                              } group/item`}
                            >
                              <span
                                className={`mr-2 ml-2 text-${item.color}-400 flex-shrink-0 mt-1 group-hover/item:text-${item.color}-300`}
                              >
                                <FiChevronRight size={14} />
                              </span>
                              <span className="group-hover/item:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      <div className="absolute bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
    </section>
  );
};

export default EducationExperience;
