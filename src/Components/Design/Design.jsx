import React, { useState } from "react";
import "./Design.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cafe_App from "../../assets/Cafe_App.png";
import Delivery_App from "../../assets/Delivery_App.png";
import Project_Dashboard from "../../assets/Project_Dashboard.png";
import FB_App from "../../assets/FB_App.png";
import Music_App from "../../assets/Music_App.png";

const designData = [
  { img: Cafe_App, name: "Cafe App", animation: "fade-in" },
  { img: Delivery_App, name: "Delivery App", animation: "slide-in-left" },
  { img: Project_Dashboard, name: "Project Dashboard", animation: "zoom-in" },
  { img: FB_App, name: "Facebook App", animation: "rotate-in" },
  { img: Music_App, name: "Music App", animation: "flip-in" },
];

const Design = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = designData.slice(startIndex, startIndex + 2);

  const showPrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const showNext = () => {
    if (startIndex + 2 < designData.length) setStartIndex(startIndex + 1);
  };

  return (
    <div id="design" className="design-section">
      <h1 className="design-title">My Designs</h1>
      <div className="design-carousel">
        {startIndex > 0 && (
          <button className="nav-btn left" onClick={showPrev}>
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="design-gallery">
          {visibleItems.map((item, index) => (
            <div key={index} className={`design-card ${item.animation}`}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {startIndex + 2 < designData.length && (
          <button className="nav-btn right" onClick={showNext}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Design;
