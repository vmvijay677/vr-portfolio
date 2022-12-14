import React from "react";
import "./Services.css";
import Resume from "./VRCVFSD.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "black" }}>My Awesome</span>
        <span> Services</span>
      </div>

      <div className="cards">
        <div className="c-box">
          <img
            src="https://media4.giphy.com/media/5QSqXWQWCoeGch9RX6/giphy.gif?cid=790b7611f07b8f79022a899ff6421355e03f640892e8b9f3&rid=giphy.gif&ct=s"
            alt="emoji"
          ></img>
          <p>Web Development</p>
          <p>Can develop web pages by using HTML, CSS, JS and much more...</p>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
