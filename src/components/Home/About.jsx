import { FaDownload, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import SDImage from "../../assets/SD.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center px-6 py-12"
    >
      <div className="lg:w-1/3 flex justify-center pb-6">
        <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-blue-400">
          <img
            src={SDImage}
            alt="Sourav Debnath"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="lg:w-2/3 text-center  lg:text-left  md:space-y-4 bg-gray-800 p-8 rounded-lg">
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

        <button className="bg-blue-500 px-6 py-3 mx-auto md:mx-0 mt-2  rounded-md text-white  hover:bg-blue-600 transition duration-300 flex items-center gap-2">
          <FaDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
