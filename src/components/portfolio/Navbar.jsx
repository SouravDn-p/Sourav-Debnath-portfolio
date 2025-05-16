import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SDImage from "../../assets/sourav.jpg";
import {
  FiBookOpen,
  FiFolder,
  FiHome,
  FiInfo,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line react/prop-types
  const NavItem = ({ to, children, onClick = () => {} }) => (
    <a
      href={to}
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-all duration-200
              hover:bg-teal-400 hover:text-white dark:hover:bg-teal-800
              after:content-[''] after:absolute after:bottom-0 after:left-0
          after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400
          after:scale-x-0 hover:after:scale-x-100 after:transition-transform
              flex items-center gap-2`}
    >
      {children}
    </a>
  );

  return (
    <div className="fixed top-1 w-full z-50 shadow-md glass  ">
      <nav className="navbar   z-50 shadow-md text-white">
        {/* Left Side - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost lg:hidden"
            >
              {isOpen ? (
                <FiX className="text-white text-xl" />
              ) : (
                <FaBars className="text-white text-xl" />
              )}
            </button>
          </div>

          {/* Logo */}
          <button className="flex items-center justify-center p-1 rounded-full transition-all duration-300 hover:scale-110 relative">
            <img
              href="#home"
              src={SDImage}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-pink-400 transition-all duration-300 hover:border-purple-400"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/0 to-purple-400/0 hover:from-pink-500/20 hover:to-purple-400/20 transition-all duration-300 opacity-0 hover:opacity-100 blur-sm"></div>
          </button>
          <a
            href="#home"
            className="btn btn-ghost text-2xl font-bold text-teal-400 -center hidden  
            sm:block"
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
            className="btn bg-teal-500 px-4 py-2 rounded-md text-white hover:bg-violet-500 transition duration-300"
          >
            Hire me
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden pt-4 pb-2">
          <div className="flex flex-col gap-1">
            <NavItem to="#home" onClick={() => setIsOpen(false)}>
              <FiHome className="w-4 h-4" />
              <span>Home</span>
            </NavItem>
            <NavItem to="#about" onClick={() => setIsOpen(false)}>
              <FiInfo className="w-4 h-4" />
              <span>About</span>
            </NavItem>
            <NavItem to="#skills" onClick={() => setIsOpen(false)}>
              <FiZap className="w-4 h-4" />
              <span>Skills</span>
            </NavItem>
            <NavItem to="#education" onClick={() => setIsOpen(false)}>
              <FiBookOpen className="w-4 h-4" />
              <span>Education</span>
            </NavItem>
            <NavItem to="#projects" onClick={() => setIsOpen(false)}>
              <FiFolder className="w-4 h-4" />
              <span>Projects</span>
            </NavItem>
            <NavItem to="#contact" onClick={() => setIsOpen(false)}>
              <FiUser className="w-4 h-4" />
              <span>Contact</span>
            </NavItem>
          </div>
        </div>
      )}
      {/* {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-gray-900 rounded-box">
             
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
          )} */}
    </div>
  );
};

export default Navbar;
