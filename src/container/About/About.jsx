import React from "react";
import "./About.scss";

import images from "../../components/constants/images";
const About = () => {
  return (
    <section className="section-padding " id="about">
      <div>{/* <img src={images.logo} alt="aboutme" /> */}</div>
      <div>
        <h1>About Me</h1>
        <h3>
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
