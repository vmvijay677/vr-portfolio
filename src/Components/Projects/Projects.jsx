import React from "react";
import "./Projects.css";
import Chatapp from "./Chatapp.jpg";
import Flipkart from "./Flipkart.jpg";
import Netflix from "./Netflix.jpg";
import Facebook from "./Facebook.jpg";
import { useContext } from "react";
import { themeContext } from "../../Context";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Projects = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Projects">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "black" }}>My Recent</span>
        <span> Projects</span>
      </div>

      <div className="cards">
        <div className="p-box">
          <div className="p-box-inside">
            <div className="p-single">
              <a href="https://mychatapp-by-vignesh.vercel.app/" target="blank">
                <img src={Chatapp} alt="projects"></img>
              </a>
              <p>MyChatApp</p>

              <div className="p-button-container">
                <a
                  href="https://github.com/vmvijay677/chatapp-frontend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon /> Frontend
                  </button>
                </a>

                <a
                  href="https://github.com/vmvijay677/chatapp-backend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon />
                    Backend
                  </button>
                </a>

                <a
                  href="https://mychatapp-by-vignesh.vercel.app/"
                  target="blank"
                >
                  <button className="button p-button">
                    <VisibilityIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>

            <div className="p-single">
              <a
                href="https://flipkartclonebyvignesh.vercel.app/"
                target="blank"
              >
                <img src={Flipkart} alt="projects"></img>
              </a>
              <p>Flipkart Clone</p>

              <div className="p-button-container">
                <a
                  href="https://github.com/vmvijay677/flipkart-frontend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon /> Frontend
                  </button>
                </a>

                <a
                  href="https://github.com/vmvijay677/flipkart-backend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon />
                    Backend
                  </button>
                </a>

                <a
                  href="https://flipkartclonebyvignesh.vercel.app/"
                  target="blank"
                >
                  <button className="button p-button">
                    <VisibilityIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <br />

          <div className="p-box-inside">
            <div className="p-single">
              <a
                href="https://netflixclonebyvignesh.vercel.app/"
                target="blank"
              >
                <img src={Netflix} alt="projects"></img>
              </a>
              <p>Netflix Clone</p>

              <div className="p-button-container">
                <a
                  href="https://github.com/vmvijay677/netflix-frontend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon /> Frontend
                  </button>
                </a>

                <a
                  href="https://github.com/vmvijay677/netflix-backend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon />
                    Backend
                  </button>
                </a>

                <a
                  href="https://netflixclonebyvignesh.vercel.app/"
                  target="blank"
                >
                  <button className="button p-button">
                    <VisibilityIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>

            <div className="p-single">
              <a
                href="https://facebookthenextgen.vercel.app/auth"
                target="blank"
              >
                <img src={Facebook} alt="projects"></img>
              </a>
              <p>Facebook - The Next Gen</p>

              <div className="p-button-container">
                <a
                  href="https://github.com/vmvijay677/facebook-frontend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon /> Frontend
                  </button>
                </a>

                <a
                  href="https://github.com/vmvijay677/facebook-backend"
                  target="blank"
                >
                  <button className="button p-button">
                    <GitHubIcon />
                    Backend
                  </button>
                </a>

                <a
                  href="https://facebookthenextgen.vercel.app/auth"
                  target="blank"
                >
                  <button className="button p-button">
                    <VisibilityIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
