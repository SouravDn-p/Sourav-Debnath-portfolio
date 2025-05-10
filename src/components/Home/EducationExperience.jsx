// import { FaGraduationCap } from "react-icons/fa";

// const EducationExperience = () => {
//   return (
//     <div id="education" className="bg-gray-900 text-white py-16 px-6 md:px-24">
//       <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">
//         Education Quality
//       </h2>

//       <div className="flex flex-col lg:flex-row justify-center gap-8">
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
//           <p className="text-sm text-red-400">2017 - 2019</p>
//           <h3 className="text-xl font-semibold flex items-center gap-2">
//             <FaGraduationCap className="text-blue-400" /> HSC - Sarail Govt
//             College
//           </h3>
//           <p className="text-gray-400">
//             Completed Higher Secondary Certificate (HSC) at Sarail Govt College.
//           </p>
//           <span className="text-red-400 font-semibold">4.50/5</span>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
//           <p className="text-sm text-red-400">2019 - Present</p>
//           <h3 className="text-xl font-semibold flex items-center gap-2">
//             <FaGraduationCap className="text-blue-400" /> BSc in CSE - Green
//             University
//           </h3>
//           <p className="text-gray-400">
//             Currently in the final year of my Bachelor's in Computer Science &
//             Engineering.
//           </p>
//           <span className="text-red-400 font-semibold">Ongoing</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationExperience;

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiBriefcase,
  FiCalendar,
  FiBook,
  FiAward,
  FiMapPin,
} from "react-icons/fi";

const ExperienceEducation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
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

  // Experience Data
  const experienceData = [
    {
      id: 1,
      title: "Senior MERN Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description:
        "Led the development of several full-stack applications using MongoDB, Express.js, React.js, and Node.js. Mentored junior developers and implemented best practices for code quality and project architecture.",
      achievements: [
        "Reduced API response time by 40% through optimization techniques",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Led a team of 5 developers to deliver projects on time and within budget",
      ],
      color: "cyan",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      location: "Austin, TX",
      duration: "2019 - 2022",
      description:
        "Developed and maintained multiple web applications using the MERN stack. Collaborated with designers and product managers to create intuitive user interfaces and robust backend systems.",
      achievements: [
        "Rebuilt legacy system using modern React patterns improving performance by 50%",
        "Designed and implemented RESTful APIs for mobile and web clients",
        "Integrated third-party services and payment gateways into existing applications",
      ],
      color: "green",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      location: "New York, NY",
      duration: "2017 - 2019",
      description:
        "Focused on building responsive and interactive user interfaces using React.js. Worked closely with UI/UX designers to implement pixel-perfect designs and smooth animations.",
      achievements: [
        "Developed reusable component library reducing development time by 30%",
        "Improved website loading speed by 45% through code splitting and lazy loading",
        "Implemented state management with Redux for complex application workflows",
      ],
      color: "purple",
    },
  ];

  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2020 - 2022",
      description:
        "Specialized in Artificial Intelligence and Machine Learning. Conducted research on neural networks and deep learning algorithms.",
      achievements: [
        "Graduated with honors (GPA: 3.9/4.0)",
        "Published research paper on efficient deep learning models",
        "Recipient of the Outstanding Graduate Student Award",
      ],
      color: "cyan",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      duration: "2016 - 2020",
      description:
        "Focused on software engineering and web development. Participated in multiple hackathons and coding competitions.",
      achievements: [
        "Dean's List for all semesters",
        "Developed an award-winning project at MIT's annual hackathon",
        "Teaching Assistant for Web Development courses",
      ],
      color: "green",
    },
    {
      id: 3,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      duration: "2015 - 2016",
      description:
        "Intensive program covering modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      achievements: [
        "Graduated top of class",
        "Built 5 full-stack applications as part of the curriculum",
        "Mentored junior students in JavaScript fundamentals",
      ],
      color: "purple",
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.getElementById(
        "experience-education-section"
      ).offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

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
      gradient.addColorStop(0, "rgba(0, 0, 20, 1)");
      gradient.addColorStop(1, "rgba(10, 20, 40, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 100, 150, 0.1)";
      ctx.lineWidth = 0.5;

      // Horizontal grid lines
      const gridSize = 50;
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Add pulsing glow effects
      const time = Date.now() * 0.001;
      const glowSize = 200 + Math.sin(time) * 50;

      // Create glow effect
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        glowSize
      );
      glow1.addColorStop(0, "rgba(0, 255, 255, 0.1)");
      glow1.addColorStop(1, "rgba(0, 255, 255, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        glowSize * 0.8
      );
      glow2.addColorStop(0, "rgba(255, 0, 255, 0.05)");
      glow2.addColorStop(1, "rgba(255, 0, 255, 0)");

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Determine which data to display based on active tab
  const activeData =
    activeTab === "experience" ? experienceData : educationData;

  return (
    <section
      id="education"
      className="relative text-white py-24 px-6 overflow-hidden"
      ref={containerRef}
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Parallax Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating particles with parallax effect */}
        <motion.div
          className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-cyan-500/10 blur-xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[20%] w-40 h-40 rounded-full bg-green-500/10 blur-xl"
          style={{ y: y1 }}
        />

        {/* Grid lines with parallax effect */}
        <motion.div
          className="absolute inset-0 grid grid-cols-6 opacity-10"
          style={{ y: y2, opacity }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-l border-cyan-500/30 h-full"></div>
          ))}
        </motion.div>
        <motion.div
          className="absolute inset-0 grid grid-rows-6 opacity-10"
          style={{ y: y1, opacity }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-t border-cyan-500/30 w-full"></div>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Explore my professional experience and educational background that
            have shaped my skills and expertise.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-sm p-1 rounded-full border border-gray-700 flex">
            <button
              // onClick={() => setActiveTab("experience")}
              disabled
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-cyan-500/20 to-green-500/20 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <FiBriefcase />
                <span>Experience</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-cyan-500/20 to-green-500/20 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <FiBook />
                <span>Education</span>
              </div>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 via-green-500/50 to-purple-500/50 z-0"
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
                      hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 
                      w-10 h-10 rounded-full bg-${item.color}-500/30 border-2 border-${item.color}-500 z-10
                      flex items-center justify-center backdrop-blur-sm
                    `}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      timelineInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {activeTab === "experience" ? (
                      <FiBriefcase className={`text-${item.color}-400`} />
                    ) : (
                      <FiAward className={`text-${item.color}-400`} />
                    )}
                  </motion.div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden absolute left-0 w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-700 z-10 flex items-center justify-center">
                    {activeTab === "experience" ? (
                      <FiBriefcase className="text-gray-400" size={14} />
                    ) : (
                      <FiAward className="text-gray-400" size={14} />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`
                      ml-12 md:ml-0 md:w-1/2 
                      ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}
                    `}
                  >
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 relative group">
                      {/* Glowing background effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-${item.color}-900/5 group-hover:bg-${item.color}-900/10 transition-all duration-500`}
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
                        className={`flex items-center mb-1 text-gray-300 ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <div
                          className={`flex items-center ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          {index % 2 === 0 ? (
                            <>
                              <span className="font-medium">
                                {activeTab === "experience"
                                  ? item.company
                                  : item.institution}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="font-medium">
                                {activeTab === "experience"
                                  ? item.company
                                  : item.institution}
                              </span>
                            </>
                          )}
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
                            <FiCalendar size={14} />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin size={14} />
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
                          className={`space-y-1 text-gray-300 ${
                            index % 2 === 0 ? "list-inside" : "md:list-inside"
                          }`}
                        >
                          {item.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className={`flex items-start ${
                                index % 2 === 0 ? "" : "md:justify-end"
                              }`}
                            >
                              <span
                                className={`mr-2 text-${item.color}-400 flex-shrink-0 mt-1`}
                              >
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Inject CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ExperienceEducation;
