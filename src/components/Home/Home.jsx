import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-24 md:py-12">
        <div className="text-center ml-0 py-0 md:pt-16 md:ml-12 lg:text-left lg:w-1/2">
          <h2 className="text-xl font-bold text-gray-400">Junior Developer</h2>
          <h1 className="text-5xl font-bold mt-2">
            Hello I'm <span className="text-green-400">Sourav Debnath</span>
          </h1>
          <p className="mt-4 text-gray-400">
            I am passionate about building interactive and scalable web
            applications. Proficient in React, JavaScript, and modern front-end
            technologies.
          </p>
          <div className="mt-6">
            <button className="bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600 transition duration-300">
              Download CV
            </button>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-green-400 text-2xl hover:text-green-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-green-400 text-2xl hover:text-green-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:sourav.debnath@example.com"
              className="text-green-400 text-2xl hover:text-green-500"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-400">2</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-400">15</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-400">6</h3>
              <p className="text-gray-400">Technologies Mastered</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-400">300</h3>
              <p className="text-gray-400">Code Commits</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-green-400 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/src/assets/SD PNG.png"
              alt="Sourav Debnath"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </>
  );
};

export default Home;
