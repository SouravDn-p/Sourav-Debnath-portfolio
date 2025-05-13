import React, { useEffect, useCallback, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import SDImage from "../assets/SD.png";

// Social Media Icons
// eslint-disable-next-line react/display-name
const SocialLinks = React.memo(() => {
  const links = [
    {
      href: "https://www.facebook.com/Sourav.Debnath.246",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: "https://x.com/Sourav21debnath",
      icon: <FaXTwitter />,
      label: "Twitter",
    },
    {
      href: "https://github.com/SouravDn-p",
      icon: <FaGithub />,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/sourav-debnath-5b43902b7",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {links.map(({ href, icon, label }, idx) => (
        <a
          key={idx}
          href={href}
          aria-label={label}
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center text-white hover:bg-teal-600 transition floating-icon border border-teal-500/50"
        >
          {icon}
        </a>
      ))}
    </div>
  );
});

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const isDarkMode = true;
  const [showParticles, setShowParticles] = useState(false);

  // Animate on scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (window.innerWidth > 768) setShowParticles(true);
    return () => AOS.refreshHard();
  }, [location.pathname]);

  const particlesInit = useCallback(
    async (main) => {
      try {
        await loadFull(main);
      } catch (error) {
        console.error("Failed to load tsparticles:", error);
      }
    },
    [location]
  );

  return (
    <footer
      className={`relative py-10 ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-teal-600 to-teal-400"
      } backdrop-blur-md`}
    >
      {/* Particles */}
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            particles: {
              color: { value: isDarkMode ? "#ffffff" : "#2d2d2d" },
              links: {
                enable: true,
                color: isDarkMode ? "#ffffff" : "#0d9488",
                distance: 100,
              },
              move: { enable: true, speed: 1 },
              number: { value: 100 },
              size: { value: 3 },
              opacity: { value: 0.5 },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo & About */}
          <div
            className="flex flex-col items-center md:items-start mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3">
              <img
                src={SDImage}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-500"
              />
              <h2 className="text-2xl font-bold text-white">
                <span className="text-teal-400">Sourav</span> Debnath
              </h2>
            </div>
            <p className="text-gray-300 mt-2 max-w-xs">
              MERN Stack Developer from Dhaka, Bangladesh. Building scalable web
              applications with modern technologies.
            </p>
            <SocialLinks />
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center hover:text-white">
                <FaMapMarkerAlt className="mr-3 text-teal-400" />
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center hover:text-white">
                <FaEnvelope className="mr-3 text-teal-400" />
                <a href="mailto:sdsouravdebnath26@gmail.com">
                  sdsouravdebnath26@gmail.com
                </a>
              </li>
              <li className="flex items-center hover:text-white">
                <FaPhone className="mr-3 text-teal-400" />
                <a href="tel:+8801328764976">+88 01328 764976</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div
            className="flex flex-col mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
              Working Hours
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>11:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>By Appointment</span>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div
            className="m-2 p-6 bg-teal-600/20 rounded-lg border border-teal-500/30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-white font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300 text-base">
              Available for freelance projects and collaboration. Reach out
              anytime!
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-5 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Sourav Debnath. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, idx) => (
                <React.Fragment key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-white"
                  >
                    {item}
                  </a>
                  {idx < 2 && <span className="hidden md:inline">|</span>}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
