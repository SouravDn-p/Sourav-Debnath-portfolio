"use client";

import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import SDImage from "../../assets/Sourav.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.name.trim()) errors.name = "Name is required";
    if (!formState.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      errors.email = "Email is invalid";
    if (!formState.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const mailtoLink = `mailto:sdsouravdebnath26@gmail.com?subject=${encodeURIComponent(
      formState.subject || "Contact from Portfolio Website"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;

    try {
      window.location.href = mailtoLink;
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: { type: "spring", stiffness: 200, delay: 0.3 + i * 0.1 },
    }),
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#2dd4bf", // teal-400
      boxShadow: "0 0 10px rgba(45, 212, 191, 0.7)",
      transition: { duration: 0.3, type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const inputVariants = {
    rest: { borderColor: "rgba(75, 85, 99, 0.5)" },
    hover: {
      borderColor: "#2dd4bf", // teal-400
      boxShadow: "0 0 5px rgba(45, 212, 191, 0.3)",
      y: -1,
      transition: { duration: 0.2 },
    },
    focus: {
      borderColor: "#2dd4bf", // teal-400
      boxShadow: "0 0 6px rgba(45, 212, 191, 0.5)",
      y: -1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      id="contact"
      className="text-white px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8 relative max-w-7xl mx-auto"
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative bg-gray-900/40 border border-cyan-500/30 rounded-xl p-4 sm:p-6 shadow-xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-center">
              Contact Me
            </h2>
          </div>
        </motion.h2>

        <motion.div
          className="w-12 sm:w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-500 mx-auto mb-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Profile Card */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg w-full lg:w-1/3 text-center border border-gray-600/50 flex flex-col"
            variants={itemVariants}
          >
            <div className="flex justify-center z-10 relative py-2 mx-auto">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full animate-pulse-slow" />
                <div className="absolute inset-1 bg-gray-800 rounded-full" />
                <img
                  src={SDImage || "/placeholder.svg"}
                  alt="Sourav Debnath"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full filter brightness-110"
                />
              </motion.div>
            </div>

            <motion.h3
              className="text-lg sm:text-xl font-semibold mt-2"
              variants={itemVariants}
            >
              Sourav Debnath
            </motion.h3>

            <motion.p
              className="text-teal-400 text-xs sm:text-sm font-medium"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.p>

            <motion.p
              className="text-gray-300 text-xs sm:text-sm mt-1"
              variants={itemVariants}
            >
              Available for freelance work!
            </motion.p>

            <motion.div
              className="mt-3 space-y-2 text-gray-300 text-xs sm:text-sm"
              variants={itemVariants}
            >
              <motion.a
                href="tel:+8801903038653"
                className="flex items-center justify-center gap-2 py-1 px-3 rounded-lg hover:bg-gray-700/50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-5 sm:w-6 h-5 sm:h-6 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-all"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <FaPhone size={12} />
                </motion.div>
                <span>+880 1903038653</span>
              </motion.a>

              <motion.a
                href="mailto:sdsouravdebnath26@gmail.com"
                className="flex items-center justify-center gap-2 py-1 px-3 rounded-lg hover:bg-gray-700/50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-5 sm:w-6 h-5 sm:h-6 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-all"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <FaEnvelope size={12} />
                </motion.div>
                <span className="truncate">sdsouravdebnath26@gmail.com</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-3 flex justify-center gap-2 sm:gap-3"
              variants={itemVariants}
            >
              <motion.a
                custom={0}
                variants={socialVariants}
                href="https://www.facebook.com/Sourav.Debnath.246"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 p-2 sm:p-2.5 rounded-full hover:bg-blue-600 transition-all duration-300"
                whileHover={{
                  y: -3,
                  boxShadow: "0 6px 10px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaFacebookF size={12} />
              </motion.a>

              <motion.a
                custom={1}
                variants={socialVariants}
                href="https://www.linkedin.com/in/sourav-debnath-5b43902b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 p-2 sm:p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300"
                whileHover={{
                  y: -3,
                  boxShadow: "0 6px 10px rgba(29, 78, 216, 0.3)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaLinkedinIn size={12} />
              </motion.a>

              <motion.a
                custom={2}
                variants={socialVariants}
                href="https://github.com/SouravDn-p"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 p-2 sm:p-2.5 rounded-full hover:bg-gray-900 transition-all duration-300"
                whileHover={{
                  y: -3,
                  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaGithub size={12} />
              </motion.a>
            </motion.div>

            <motion.div className="mt-3" variants={itemVariants}>
              <motion.a
                href="mailto:sdsouravdebnath26@gmail.com"
                className="inline-block bg-teal-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white text-xs sm:text-sm font-medium shadow-md shadow-teal-500/20 hover:bg-teal-400 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 15px rgba(45, 212, 191, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-1">
                  <FaEnvelope size={12} /> Email Me
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg w-full lg:w-2/3 border border-gray-600/50 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Success message overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="text-teal-400 text-3xl sm:text-4xl mb-2" />
                  </motion.div>
                  <motion.p
                    className="text-gray-300 text-xs sm:text-sm text-center px-4"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Message sent! I'll reply soon.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none text-xs sm:text-sm ${
                      formErrors.name
                        ? "border-red-500 focus:ring-red-500/50"
                        : ""
                    }`}
                    variants={inputVariants}
                    initial="rest"
                    whileHover="hover"
                    whileFocus="focus"
                  />
                  {formErrors.name && (
                    <motion.p
                      className="text-red-500 text-xs sm:text-xs mt-1 ml-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formErrors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.input
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none text-xs sm:text-sm"
                    variants={inputVariants}
                    initial="rest"
                    whileHover="hover"
                    whileFocus="focus"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-3 sm:mt-4 relative"
              >
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none text-xs sm:text-sm ${
                    formErrors.email
                      ? "border-red-500 focus:ring-red-500/50"
                      : ""
                  }`}
                  variants={inputVariants}
                  initial="rest"
                  whileHover="hover"
                  whileFocus="focus"
                />
                {formErrors.email && (
                  <motion.p
                    className="text-red-500 text-xs sm:text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formErrors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
                <motion.input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none text-xs sm:text-sm"
                  variants={inputVariants}
                  initial="rest"
                  whileHover="hover"
                  whileFocus="focus"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-3 sm:mt-4 relative"
              >
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none text-xs sm:text-sm h-20 sm:h-24 resize-none ${
                    formErrors.message
                      ? "border-red-500 focus:ring-red-500/50"
                      : ""
                  }`}
                  variants={inputVariants}
                  initial="rest"
                  whileHover="hover"
                  whileFocus="focus"
                />
                {formErrors.message && (
                  <motion.p
                    className="text-red-500 text-xs sm:text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formErrors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-teal-500 px-4 sm:px-6 py-2 rounded-lg text-white text-xs sm:text-sm font-medium shadow-md shadow-teal-500/20 w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add global styles for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
