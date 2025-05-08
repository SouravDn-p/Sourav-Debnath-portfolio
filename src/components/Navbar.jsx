import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar fixed top-1 w-full z-50 shadow-md glass text-white">
      {/* Left Side - Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <FaBars className="text-white text-xl" />
          </button>

          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-gray-900 rounded-box">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <a
          href="#home"
          className="btn btn-ghost text-2xl font-bold text-green-400"
        >
          Sourav.
        </a>
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-300">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - CTA Button */}
      <div className="navbar-end">
        <a
          href="#contact"
          className="btn bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition duration-300"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// CSS for Glass Effect
// const styles = `
//   .glass {
//     background: rgba(17, 24, 39, 0.7); /* #111827 with 70% opacity */
//     backdrop-filter: blur(10px);
//     -webkit-backdrop-filter: blur(10px);
//     border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle white border */
//     border-radius: 16px; /* Rounded corners */
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
//   }
// `;

// Inject CSS
// const styleSheet = document.createElement("style");
// styleSheet.textContent = styles;
// document.head.appendChild(styleSheet);
