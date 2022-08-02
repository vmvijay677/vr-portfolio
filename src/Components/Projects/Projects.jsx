import React from "react";
import "./Projects.css";
import Chatapp from "./Chatapp.jpg";
import Flipkart from "./Flipkart.jpg";
import Netflix from "./Netflix.jpg";
import Facebook from "./Facebook.jpg";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Slide from "react-reveal/Slide";

const Projects = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Projects">
      <Slide left>
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "black" }}>My Recent</span>
          <span>Projects</span>
        </div>
      </Slide>

      <Slide right>
        <div className="cards">
          <div className="p-box">
            <div className="p-box-inside">
              <div className="p-single">
                <a
                  href="https://mychatapp-by-vignesh.vercel.app/"
                  target="blank"
                >
                  <img src={Chatapp} alt="projects"></img>
                </a>
                <p>MyChatApp</p>
              </div>

              <div className="p-single">
                <a
                  href="https://flipkartclonebyvignesh.vercel.app/"
                  target="blank"
                >
                  <img src={Flipkart} alt="projects"></img>
                </a>
                <p>Flipkart Clone</p>
              </div>
            </div>
            <br />

            <div style={{ display: "flex", gap: "30px" }}>
              <div className="p-single">
                <a
                  href="https://netflixclonebyvignesh.vercel.app/"
                  target="blank"
                >
                  <img src={Netflix} alt="projects"></img>
                </a>
                <p>Netflix Clone</p>
              </div>

              <div className="p-single">
                <a
                  href="https://facebookthenextgen.vercel.app/auth"
                  target="blank"
                >
                  <img src={Facebook} alt="projects"></img>
                </a>
                <p>Facebook - The Next Gen</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
