import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-para">
          <p>
            Versatile and results-driven Frontend Developer and UI/UX Designer
            with a strong foundation in React, HTML, CSS, and JavaScript.
            Proficient in crafting responsive, user-focused web applications and
            intuitive UI designs using tools like Figma. Skilled in transforming
            design concepts into seamless digital experiences, backed by user
            research and clean, scalable code. Passionate about solving
            real-world problems through technology, thriving in collaborative
            environments that value innovation, precision, and continuous
            learning to deliver impactful, high-quality web solutions.
          </p>
        </div>
        <div className="about-subsection">
          <div className="education">
            <h2>Education</h2>
            <div className="edu-item">
              <p>
                <strong>Degree:</strong> B.E (CSE)
              </p>
              <p>
                <strong>Institution:</strong> Ramco Institute of Technology
              </p>
              <p>
                <strong>Year of Passing:</strong> 2025
              </p>
              <p>
                <strong>CGPA:</strong> 8.0 CGPA
              </p>
            </div>
            <div className="edu-item">
              <p>
                <strong>HSC:</strong> Nadar Matriculation and Higher Secondary
                School
              </p>
              <p>
                <strong>Year of Passing:</strong> 2021
              </p>
              <p>
                <strong>Percentage:</strong> 87.5%
              </p>
            </div>
            <div className="edu-item">
              <p>
                <strong>SSLC:</strong> Nadar Matriculation and Higher Secondary
                School
              </p>
              <p>
                <strong>Year of Passing:</strong> 2019
              </p>
              <p>
                <strong>Percentage:</strong> 84.4%
              </p>
            </div>
            <div className="social-links">
              <p>
                <FaLinkedin />{" "}
                <a
                  href="https://www.linkedin.com/in/selva-lakshmi-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/selva-lakshmi-k
                </a>
              </p>
              <p>
                <FaGithub />{" "}
                <a
                  href="https://github.com/SelvaLakshmiKannan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/SelvaLakshmiKannan
                </a>
              </p>
            </div>
          </div>
          <div className="about-skills">
            {["HTML & CSS", "React", "JavaScript", "UI & UX", "Java", "C"].map(
              (skill, i) => (
                <div className="about-skill" key={i}>
                  <p>{skill}</p>
                  <hr />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
