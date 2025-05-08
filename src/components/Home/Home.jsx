import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import HomeContent from "./HomeContent";
import EducationExperience from "./EducationExperience";
import Contact from "./Contact";
import Footer from "../Footer";
import SdSkills from "../polished/SdSkills";

const Home = () => {
  return (
    <div id="home">
      <HomeContent />
      <About />
      <SdSkills />
      {/* <Skills /> */}
      <EducationExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
