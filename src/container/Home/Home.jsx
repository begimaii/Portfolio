import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          ? "app-darkmode section-padding app-wrapper"
          : "app-lightmode section-padding app-wrapper"
      }
    >
      <div className="app-homepage-socialIcons">
        <GitHubIcon style={{ marginBottom: "50px" }} />
        <LinkedInIcon style={{ marginBottom: "50px" }} />
        <TwitterIcon />
      </div>
      <div className="app-home-intro">
        <h1>Hi, I am Begimai</h1>
        <h2>Frontend Developer</h2>
        <h4>I am a self-motivated frontend developer</h4>
      </div>

      {/* <div>
        <img src={images.logo} alt="logo" />
      </div> */}
    </section>
  );
};

export default Home;
