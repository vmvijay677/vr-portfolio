import React, { useContext } from "react";
import "./Toggle.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { themeContext } from "../../Context";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Toggle = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <span>
        <DarkModeIcon fontSize="small" />
      </span>
      <span>
        <WbSunnyIcon fontSize="small" />
      </span>

      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
