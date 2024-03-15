
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { headerInfo, aboutMeInfo, landingInfo, projectsInfo, footerInfo } from './constanst'
import useScript from "./hooks/useScript";
function App() {
  useScript();
  return (
    <main>
      <Header {...headerInfo} />
      <LandingSection {...landingInfo} />
      <AboutMe {...aboutMeInfo} />
      <ProjectsSection {...projectsInfo} />
      <Footer {...footerInfo} />
    </main>
  );
}

export default App;