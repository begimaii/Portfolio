import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./About.scss";

import images from "../../components/constants/images";
const About = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.navbar.darkMode);
  return (
    <section
      className={
        darkmode
          ? "app-homepage-darkmode app-dark-background section-padding app-wrapper"
          : "app-homepage-lightmode  section-padding"
      }
      id="about"
    >
      <div className="image-aboutMe" aria-label="image-aboutMe">
        <img src={images.aboutpic} alt="aboutme" />
      </div>

      <div>
        <h1>About Me</h1>
        <h3 className="app-aboutMe">
          I am a self-motivated Frontend developer with 1+ years of experience
          developing interactive and scalable web solutions using HTML, CSS,
          JavaScript, ReactJS, Redux/Toolkit. I am always eager to improve my
          skills and knowledge, as well as I follow-up on the most recent
          changes in web development to stay up-to-date with new technologies.
        </h3>
      </div>
      <div></div>
    </section>
  );
};

export default About;
