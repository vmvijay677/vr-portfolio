import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Home">
      <div className="n-left">
        <div className="n-name">WELCOME! ✋🏻</div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              <li>Home</li>
            </Link>

            <li>
              <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="Services" spy={true} smooth={true}>
                Services
              </Link>
            </li>

            <li>
              <Link to="Experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>

            <li>
              <Link to="Projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <Link to="Contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>

        <span style={{ marginLeft: "30px" }}>
          <Toggle />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
