import { motion } from "framer-motion";
import SdImage from "../../assets/sourav.jpg";
import SouravBg from "../../assets/sourav_parallex.png";

const About = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${SouravBg})`,
          // "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={SdImage}
                    alt="Professional portrait"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gray-900 rounded-xl flex items-center justify-center p-2 shadow-xl">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-purple-500">
                      1+
                    </span>
                    <span className="text-gray-400 text-sm">
                      Years
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Final-Year CSE Student & MERN Stack Developer
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                I’m Sourav Debnath from the dynamic city of Dhaka, Bangladesh,
                where my journey into web development began. I'm a passionate
                full-stack developer with a strong drive to build responsive,
                user-centric digital experiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Specializing in the MERN stack — MongoDB, Express.js, React, and
                Node.js — I strive to create scalable and efficient web
                applications while continuously learning and evolving with the
                latest technologies. I’m deeply passionate about{" "}
                <span className="text-purple-400 font-medium">
                  React, Node.js, MongoDB, Firebase, and Tailwind CSS
                </span>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4  rounded-xl border border-purple-500/20"
                >
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">
                    Background
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Full Stack Development</li>
                    <li>• CSE Student</li>
                    <li>• System Architecture</li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4  rounded-xl border border-purple-500/20"
                >
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">
                    Interests
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI & Machine Learning</li>
                    <li>• Blockchain Technology</li>
                    <li>• Typescript and next.js</li>
                    {/* <li>• Cloud Computing</li> */}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
