import React from "react";
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
            As a results-driven frontend developer, I specialize in creating
            responsive and user-focused web interfaces using modern frontend
            languages and frameworks. With a strong understanding of UI/UX
            principles, I enjoy transforming design concepts into seamless
            digital experiences. I am passionate about solving real-world
            problems through code and continuously improving my skill set. I
            thrive in collaborative environments that value innovation,
            precision, and continuous learning to deliver high-quality, scalable
            solutions.
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
                <strong>CGPA:</strong> 7.87 (upto 7th sem)
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
            <div className="linkedin">
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/selva-lakshmi-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/selva-lakshmi-k
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
