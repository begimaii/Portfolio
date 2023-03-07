import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import images from "../../components/constants/images";
import { useDispatch, useSelector } from "react-redux";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.navbar.darkMode);
  return (
    <section
      className={
        darkmode
          ? "app-darkmode  section-padding app-wrapper"
          : "app-lightmode section-padding app-wrapper"
      }
    >
      <div className="app-homepage-socialIcons-container">
        <div className="app-homepage-socialIcons">
          <IconButton className="socialIcons">
            <a href="https://github.com/begimaii">
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton className="socialIcons">
            <a href="https://www.linkedin.com/in/begimai-abdybekova-884631253/">
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton className="socialIcons">
            <a href="https://twitter.com/home">
              <TwitterIcon />
            </a>
          </IconButton>
        </div>
        {/* <h3>Follow Me</h3> */}
      </div>
      <div className="app-home-intro">
        <h1>Hi, I am Begimai</h1>
        <h2>Creative Frontend Developer</h2>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className="resume-button"
        >
          Resume
        </Button>
      </div>

      <div className="app-home-image">
        <img
          // style={{ width: "100%", height: "300px" }}
          src={images.homepic}
          alt="logo"
        />
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>
  );
};

export default Home;
