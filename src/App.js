import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import { useContext } from "react";
import { themeContext } from "./Context";
import Slide from "react-reveal/Slide";

function App() {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Slide top>
        <Navbar />
      </Slide>

      <Intro />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
