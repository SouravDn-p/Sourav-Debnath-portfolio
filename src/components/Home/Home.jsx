import { motion } from "framer-motion";
import Projects from "./Projects";
import About from "./About";
import EducationExperience from "./EducationExperience";
import Contact from "./Contact";
import Footer from "../Footer";
import SdSkills from "../polished/SdSkills";
import AboutMe from "../polished/AboutMe";
import SouravBanner from "./HeroSections/SouravBanner";
import HomeContent from "./HomeContent";
import projectsBackgroundImage from "../../assets/sourav_parallex.png";
import SkillsShowcase from "./HeroSections/SkillsShowcase";

const Home = () => {
  // Animation variants for smooth transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div id="home">
      {/* Hero Banner */}
      <SouravBanner />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${projectsBackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-900/30 to-gray-900/70"></div>
        <div className="relative z-10">
          <SkillsShowcase />
        </div>
      </div>

      {/* Divider Between Sections */}
      <div className="h-16 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="w-16 h-1 bg-green-400 rounded-full"></div>
      </div>

      {/* Education & Experience */}

      <motion.section
        className="relative"
        style={{
          backgroundImage: `url(${projectsBackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-900/30 to-gray-900/70"></div>
        <div className="relative z-10">
          <EducationExperience />
        </div>
      </motion.section>

      {/* Projects Section with Background and Overlay */}
      <motion.section
        className="relative"
        style={{
          backgroundImage: `url(${projectsBackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-900/30 to-gray-900/70"></div>
        <div className="relative z-10">
          <Projects />
        </div>
      </motion.section>

      {/* Divider Between Sections */}
      <div className="h-16 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="w-16 h-1 bg-green-400 rounded-full"></div>
      </div>

      {/* Contact Section with Background and Overlay */}
      <motion.section
        className="relative"
        style={{
          backgroundImage: `url(${projectsBackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-900/30 to-gray-900/70"></div>
        <div className="relative z-10">
          <Contact />
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
