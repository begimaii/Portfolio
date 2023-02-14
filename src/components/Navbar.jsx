import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import images from "./constants/images";

import "./Navbar.css";

const Navbar = () => {
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
      <DarkModeOutlinedIcon />
      <LightModeOutlinedIcon />
    </nav>
  );
};

export default Navbar;
