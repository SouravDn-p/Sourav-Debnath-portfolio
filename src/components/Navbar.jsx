import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <FaBars className="text-white text-xl" />
          </button>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-gray-900 rounded-box">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={() => setIsOpen(false)}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={() => setIsOpen(false)}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold text-green-400"
        >
          Sourav.
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <Link to="/" className="text-green-300 hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-green-500">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-green-500">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          to="/contact"
          className="btn bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
        >
          Hire me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
