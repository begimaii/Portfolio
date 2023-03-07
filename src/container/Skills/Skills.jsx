import React from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../../components/constants/images";
import "./Skills.css";

const Skills = () => {
  const darkmode = useSelector((state) => state.navbar.darkMode);
  return (
    <section
      className={
        darkmode
          ? "app-skills-darkmode app-dark-background app-wrapper section-padding"
          : "app-skills-lightmode app-wrapper section-padding"
      }
      id="skills"
    >
      <h1>My Skills</h1>
    </section>
  );
};

export default Skills;
