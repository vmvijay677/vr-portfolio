import React from "react";
import "./Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <div className="footer">
      <Slide bottom>
        <img
          src="https://www.pngkey.com/png/full/19-199614_sky-blue-wave-png.png"
          alt=""
        ></img>
      </Slide>

      <p className="f-content">
        <span>
          <CopyrightIcon />
        </span>
        <span>All rights reserved by Vignesh Ravikumar.</span>
      </p>
    </div>
  );
};

export default Footer;
