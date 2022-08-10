import React from "react";
import "./Experience.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "black" }}>My Previous</span>
        <span> Experience</span>
      </div>

      <div className="cards">
        <div className="e-box">
          <img
            src="https://icon-library.com/images/experience-icon-png/experience-icon-png-0.jpg"
            alt="experience"
          ></img>
          <p>Accenture Solutions Pvt. Ltd.,</p>
          <p>Process Associate</p>
          <p>Dec 2019 - Jan 2022</p>
          <p>
            The process is all about loan documents verification and reviewing,
            creating a new document and responding to emails to the
            representatives of the clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
