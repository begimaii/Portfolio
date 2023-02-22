import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode, toggleMenu } from "../store/navBarReducer";

import images from "./constants/images";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.navbar.darkMode);
  const smallMenu = useSelector((state) => state.navbar.smallScreenMenu);
  return (
    <nav className={darkmode ? "app-navbar-dark" : "app-navbar"}>
      {/* <div className="logo-container">
        <img src={images.header} alt="logo" className="app-navbar-logo" />
      </div> */}
      <h1>Begimai</h1>

      <ul className="app-navbar-links">
        {["Home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={`link - ${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {darkmode ? (
        <LightModeOutlinedIcon
          className="light-mode-icon"
          onClick={() => dispatch(toggleThemeMode(false))}
        />
      ) : (
        <DarkModeOutlinedIcon
          className="dark-mode-icon"
          onClick={() => dispatch(toggleThemeMode(true))}
        />
      )}

      <div
        className={
          darkmode ? "app-navbar-smallScreen-dark" : "app-navbar-smallScreen"
        }
      >
        <MenuIcon
          onClick={() => dispatch(toggleMenu(true))}
          style={{ color: "black", fontSize: 27, cursor: "pointer" }}
        />
        {smallMenu && (
          <div
            className={
              darkmode
                ? "app-navbar-smallScreen-overlay-dark"
                : "app-navbar-smallScreen-overlay "
            }
          >
            <HighlightOffIcon
              // style={{ color: "whitesmoke", fontSize: 27 }}
              className="overlay-close"
              onClick={() => dispatch(toggleMenu(false))}
            />
            <ul className="app-navbar-links-smallScreen">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={`link - ${item}`}>
                    <a href={`#${item}`}>{item}</a>
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
