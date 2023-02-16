import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuIcon from "@mui/icons-material/Menu";
import images from "./constants/images";

import "./Navbar.css";
import { fontSize } from "@mui/system";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      {/* <div className="logo-container">
        <img src={images.logo} alt="logo" className="app-navbar-logo" />
      </div> */}

      <ul className="app-navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Skills</a>
        </li>
        <li className="p__opensans">
          <a href="#award">Projects</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <DarkModeOutlinedIcon style={{ color: "white" }} />
      <LightModeOutlinedIcon style={{ color: "white" }} />
      <div className="app-navbar-smallScreen">
        <MenuIcon
          onClick={() => setToggleMenu(true)}
          style={{ color: "whitesmoke", fontSize: 27 }}
        />
        {toggleMenu && (
          <div className="app-navbar-smallScreen-overlay">
            <HighlightOffIcon
              // style={{ color: "whitesmoke", fontSize: 27 }}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-links-smallScreen">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Skills</a>
              </li>
              <li className="p__opensans">
                <a href="#award">Projects</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
