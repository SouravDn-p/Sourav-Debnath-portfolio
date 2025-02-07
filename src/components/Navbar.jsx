import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
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
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => setIsOpen(false)}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
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
            <a href="#home" className="text-green-300 hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-green-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-green-500">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - CTA Button */}
      <div className="navbar-end">
        <a
          href="#contact"
          className="btn bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
