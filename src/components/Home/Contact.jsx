import {
  FaFacebookF,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white px-6 md:px-24 py-16">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <img
            src="/src/assets/SD PNG.png"
            alt="Sourav Debnath"
            className="w-40 h-40 object-cover rounded-lg mx-auto"
          />
          <h3 className="text-2xl font-semibold mt-4">Sourav Debnath</h3>
          <p className="text-green-400">MERN Stack Developer</p>
          <p className="text-gray-300 mt-2">
            Available for freelance work. Feel free to connect!
          </p>

          <div className="mt-4 space-y-2 text-gray-300">
            <p className="flex items-center justify-center gap-2">
              <FaPhone className="text-green-400" /> +880 1903038653
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-green-400" />{" "}
              sdsouravdebnath26@gmail.com
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://www.facebook.com/Sourav.Debnath.246"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-green-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/SouravDn-p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-green-500 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-gray-900 text-white w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered bg-gray-900 text-white w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered bg-gray-900 text-white w-full mt-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered bg-gray-900 text-white w-full mt-4"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered bg-gray-900 text-white w-full mt-4 h-32"
          ></textarea>

          <button className="bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600 transition duration-300 flex items-center gap-2 mt-4">
            SEND MESSAGE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
