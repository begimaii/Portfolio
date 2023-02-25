import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import images from "../../components/constants/images";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "../../store/navBarReducer";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.navbar.darkMode);
  return (
    <section
      className={
        darkmode
          ? "app-darkmode app-dark-background section-padding app-wrapper"
          : "app-lightmode section-padding app-wrapper"
      }
    >
      <div className="app-homepage-socialIcons-container">
        <div className="app-homepage-socialIcons">
          <IconButton className="socialIcons">
            <GitHubIcon />
          </IconButton>
          <IconButton className="socialIcons">
            <LinkedInIcon />
          </IconButton>
          <IconButton className="socialIcons">
            <TwitterIcon />
          </IconButton>
        </div>
        <h3>Follow Me</h3>
      </div>
      <div className="app-home-intro">
        <h1>Hi, I am Begimai</h1>
        <h2>Creative Frontend Developer</h2>
        <h4></h4>
      </div>

      <div>{/* <img src={images.logo} alt="logo" /> */}</div>
    </section>
  );
};

export default Home;
