import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="profile " />
      <h1>I'm Selva Lakshmi K Frontend Developer</h1>
      <p>
        Creative and detail-oriented frontend developer skilled in React, HTML,
        CSS, and JavaScript. Passionate about building intuitive and accessible
        user interfaces that enhance digital experiences. Committed to writing
        clean, maintainable code and staying updated with the latest web
        technologies to deliver impactful web solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="hero-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="/SELVA LAKSHMI K (Resume).pdf"
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
