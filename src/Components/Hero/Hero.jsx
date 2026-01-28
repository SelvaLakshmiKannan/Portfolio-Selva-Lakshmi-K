import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="profile " />
      <h1>I'm Selva Lakshmi K </h1>
      <p>
        Creative and detail-oriented fresher skilled in React, HTML, CSS,
        JavaScript, and UI/UX design. Passionate about building intuitive,
        accessible user interfaces and engaging user experiences. Committed to
        writing clean, maintainable code and staying updated with the latest web
        and design technologies to deliver impactful, user-centered digital
        solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="hero-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="./Selva_Lakshmi_(Resume).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
