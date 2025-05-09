import Projects from "./Projects";
import About from "./About";
import EducationExperience from "./EducationExperience";
import Contact from "./Contact";
import Footer from "../Footer";
import SdSkills from "../polished/SdSkills";
import AboutMe from "../polished/AboutMe";
import SouravBanner from "./HeroSections/SouravBanner";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <div id="home">
      <SouravBanner />
      {/* <HomeContent /> */}
      {/* <About /> */}
      <AboutMe />
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
