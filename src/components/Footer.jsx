import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import SDImage from "../assets/SD.png";
const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <img
              src={SDImage}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-gray-500"
            />
            <h2 className="text-lg font-semibold">Sourav Debnath</h2>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/Sourav.Debnath.246"
              className="bg-gray-800 p-2 rounded-md hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-md hover:bg-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
              className="bg-gray-800 p-2 rounded-md hover:bg-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SouravDn-p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-md hover:bg-gray-500 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-red-400 font-semibold mb-3">PRODUCT</h3>
          <ul className="space-y-2">
            <li>Database</li>
            <li>Authentication</li>
            <li>Storage</li>
            <li>Support</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-400 font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2">
            <li>Authentication</li>
            <li>System Status</li>
            <li>Terms of Service</li>
            <li>Pricing</li>
            <li>Over Right</li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-400 font-semibold mb-3">DEVELOPERS</h3>
          <ul className="space-y-2">
            <li>Documentation</li>
            <li>Authentication</li>
            <li>API Reference</li>
            <li>Support</li>
            <li>Open Source</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
