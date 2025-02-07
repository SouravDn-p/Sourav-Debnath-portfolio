import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={50} className="text-green-400" />,
      projects: "50 Projects",
    },
    {
      id: 2,
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-400" />,
      projects: "45 Projects",
    },
    {
      id: 3,
      name: "MongoDB",
      icon: <SiMongodb size={50} className="text-green-400" />,
      projects: "30 Projects",
    },
    {
      id: 4,
      name: "Firebase",
      icon: <SiFirebase size={50} className="text-green-400" />,
      projects: "25 Projects",
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <SiBootstrap size={50} className="text-green-400" />,
      projects: "40 Projects",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-green-400" />,
      projects: "35 Projects",
    },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            {skill.icon}
            <h3 className="text-xl font-bold mt-4">{skill.name}</h3>
            <p className="text-gray-400">{skill.projects}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
