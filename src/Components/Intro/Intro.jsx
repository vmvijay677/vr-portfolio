import React from "react";
import "./Intro.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Slide from "react-reveal/Slide";

const Intro = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
      <Slide left>
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "black" }}>
              Hey all! I'm
            </span>
            <span>Vignesh Ravikumar</span>
            <span>
              a Full Stack Web Developer and an open source code contributor
              based in Chennai, India. Goal driven person who loves to live on
              the bleeding edge of technology and passionate about learning web
              development.
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1QUkUnn5Wq8RisUC1f9Let_KOKuYC6xVJ/view?usp=sharing"
            target="blank"
          >
            <button className="button i-button">Resume</button>
          </a>

          <div className="i-icons">
            <a href="https://github.com/vmvijay677" target="blank">
              <GitHubIcon style={{ fontSize: "2.5rem", color: "#00AEEF" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/vignesh-ravikumar-0a7039204"
              target="blank"
            >
              <LinkedInIcon style={{ fontSize: "2.8rem", color: "#00AEEF" }} />
            </a>
          </div>
        </div>
      </Slide>

      <Slide right>
        <div className="i-right">
          <img
            src="https://drive.google.com/uc?export=view&id=1Oz9VkM9HRjkLBPtZ-MtMNolWAA5PaxVX"
            alt="vignesh"
          />
        </div>
      </Slide>
    </div>
  );
};

export default Intro;

//https://drive.google.com/uc?export=view&id=1Oz9VkM9HRjkLBPtZ-MtMNolWAA5PaxVX

//https://drive.google.com/file/d/1Oz9VkM9HRjkLBPtZ-MtMNolWAA5PaxVX/view?usp=drivesdk
