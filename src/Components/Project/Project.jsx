import React from "react";
import "./Project.css";
import Project_Data from "../../assets/Project_Data";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {Project_Data.map((project, index) => {
          return (
            <div className="project-format" key={index}>
              <h3>{project.s_no}</h3>
              <h2>{project.project_name}</h2>
              <p>{project.project_description}</p>
              {project.Language && <h3>{project.Language}</h3>}
              <h3>{project.Platform}</h3>

              {project.github && Array.isArray(project.github) ? (
                project.github.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub className="github-icon" />
                    <span>View on GitHub {i + 1}</span>
                  </a>
                ))
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub className="github-icon" />
                  <span>View on GitHub</span>
                </a>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
