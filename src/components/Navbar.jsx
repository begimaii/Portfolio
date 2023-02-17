import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode, toggleMenu } from "../store/navBarReducer";

import images from "./constants/images";

import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.navbar.darkMode);
  const smallMenu = useSelector((state) => state.navbar.smallScreenMenu);
  return (
    <nav className="app-navbar">
      {/* <div className="logo-container">
        <img src={images.logo} alt="logo" className="app-navbar-logo" />
      </div> */}

      <ul className="app-navbar-links">
        {["Home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={`link - ${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {darkmode ? (
        <DarkModeOutlinedIcon
          style={{ color: "white" }}
          onClick={() => dispatch(toggleThemeMode(true))}
        />
      ) : (
        <LightModeOutlinedIcon
          style={{ color: "white" }}
          onClick={() => dispatch(toggleThemeMode(false))}
        />
      )}

      <div className="app-navbar-smallScreen">
        <MenuIcon
          onClick={() => dispatch(toggleMenu(true))}
          style={{ color: "whitesmoke", fontSize: 27, cursor: "pointer" }}
        />
        {smallMenu && (
          <div className="app-navbar-smallScreen-overlay">
            <HighlightOffIcon
              // style={{ color: "whitesmoke", fontSize: 27 }}
              className="overlay-close"
              onClick={() => dispatch(toggleMenu(false))}
            />
            <ul className="app-navbar-links-smallScreen">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={`link - ${item}`} href={`#${item}`}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
