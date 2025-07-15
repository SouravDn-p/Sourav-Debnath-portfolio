"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import { BookOpen, Star, Trophy } from "lucide-react";

const experiences = [
  {
    period: "2022 - 2026",
    title: "Bachelor of Science in CSE",
    institution: "Green University Of Bangladesh",
    description:
      " Currently in my final year, focusing on web development, data structures, algorithms, and software engineering principles. Passionate about building scalable full-stack applications.",
    achievements: [
      "Academic Excellence Award",
      "Developed several full-stack web applications",
    ],
    icon: BookOpen,
  },
  {
    period: "2024",
    title: "Full Stack Web Development",
    institution: "Programming Hero",
    description:
      "Completed an intensive Full Stack MERN (MongoDB, Express.js, React, Node.js) Development program covering frontend, backend, database, and deployment.",
    achievements: [
      "Built multiple full-stack projects using the MERN stack",
      "Gained hands-on experience with REST APIs, authentication, and deployment",
      "Earned certificate of completion from Programming Hero",
    ],
    icon: Trophy,
  },
  // {
  //   title: "Senior Frontend Engineer",
  //   institution: "Tech Innovations Inc.",
  //   period: "2021 - Present",
  //   description:
  //     "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
  // },
  // {
  //   title: "Frontend Developer",
  //   institution: "Digital Solutions Co.",
  //   period: "2019 - 2021",
  //   description:
  //     "Developed responsive web applications using React and TypeScript. Collaborated with designers and backend engineers to deliver high-quality products.",
  // },
  // {
  //   title: "Web Developer",
  //   institution: "Creative Agency",
  //   period: "2017 - 2019",
  //   description:
  //     "Built websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and WordPress.",
  // },
  // {
  //   title: "Intern",
  //   institution: "Startup Hub",
  //   period: "2016 - 2017",
  //   description:
  //     "Assisted in developing web applications and learned modern web development practices.",
  // },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((item, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-purple-400 font-semibold">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-purple-300 font-medium mb-4">
                  {item.institution}
                </p>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Star className="w-4 h-4 text-purple-400" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
