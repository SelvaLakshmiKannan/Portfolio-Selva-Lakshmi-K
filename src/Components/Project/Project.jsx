import React from "react";
import "./Project.css";
import Project_Data from "../../assets/Project_Data";
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
              <h3>{project.Language}</h3>
              <h3>{project.Platform}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
