import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, Trophy, Star } from "lucide-react";
import souravBg from "../../assets/sourav_parallex.png";

const Education = () => {
  const educationData = [
    // {
    //   period: "2022 - 2026",
    //   degree: "Master of Science in Computer Science",
    //   institution: "Stanford University",
    //   description:
    //     "Specialized in Artificial Intelligence and Machine Learning",
    //   achievements: ["Research Assistant", "Dean's List", "4.0 GPA"],
    //   icon: BookOpen,
    // },
    {
      period: "2022 - 2026",
      degree: "Bachelor of Science in CSE",
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
      degree: "Full Stack Web Development",
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
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${souravBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500"
        >
          Education & Certifications
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
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
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
