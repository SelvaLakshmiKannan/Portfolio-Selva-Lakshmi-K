import React from "react";
import "./Internship.css";
import Internship_Data from "../../assets/Internship_Data";

const Internship = () => {
  return (
    <div id="internship" className="internship-section">
      <div className="internship-title">
        <h1>My Internships</h1>
      </div>
      <div className="internship-container">
        {Internship_Data.map((item, index) => (
          <div className="internship-card" key={index}>
            <h3>{item.s_no}</h3>
            <h2>{item.company}</h2>
            <p>
              <strong>Domain:</strong> {item.domain}
            </p>
            <p>
              <strong>Duration:</strong> {item.duration}
            </p>
            <ul>
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
