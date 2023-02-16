import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import images from "../../components/constants/images";

import "./Home.css";

const Home = () => {
  return (
    <section className="app-homepage section-padding app-wrapper">
      <div>
        <div className="app-socialIcons">
          <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
        <h1>Hi, I am Begimai</h1>
        <h2>Frontend Developer</h2>
        <h4>I am a self-motivated frontend developer</h4>
      </div>
      <div>{/* <img src={images.logo} alt="logo" /> */}</div>
    </section>
  );
};

export default Home;
