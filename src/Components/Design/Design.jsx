import React, { useState, useEffect } from "react";
import "./Design.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Cafe_App from "../../assets/Cafe_App.png";
import Delivery_App from "../../assets/Delivery_App.png";
import Project_Dashboard from "../../assets/Project_Dashboard.png";
import FB_App from "../../assets/FB_App.png";
import Music_App from "../../assets/Music_App.png";
import Gmail from "../../assets/Gmail.png";
import Login_Page from "../../assets/Login_Page.png";

import Instant_Animation from "../../assets/Instant_Animation_.mp4";
import Scroll_Animation from "../../assets/Scroll_Animation.mp4";
import Facebook_Prototype from "../../assets/Facebook_Prototype.mp4";
import Dropdown_Prototype from "../../assets/Dropdown_Prototype.mp4";
import Splash_Screen from "../../assets/Splash_Screen.mp4";
import Liquid_Loading from "../../assets/Liquid_Loading.mp4";
import Login_Register_Page from "../../assets/Login_Register_Page.mp4";

const designData = [
  { img: Cafe_App, name: "Cafe App", animation: "fade-in" },
  { img: Delivery_App, name: "Delivery App", animation: "slide-in-left" },
  { img: Project_Dashboard, name: "Project Dashboard", animation: "zoom-in" },
  { img: FB_App, name: "Facebook App", animation: "zoom-out" },
  { img: Music_App, name: "Music App", animation: "flip-in" },
  { img: Gmail, name: "Gmail Desktop View", animation: "zoom-out" },
  { img: Login_Page, name: "Login & Registration Page", animation: "fade-in" },
];

const videoData = [
  { src: Instant_Animation, name: "Instant Animation", animation: "fade-in" },
  {
    src: Scroll_Animation,
    name: "Scroll Animation",
    animation: "slide-in-left",
  },
  { src: Facebook_Prototype, name: "Facebook Prototype", animation: "fade-in" },
  { src: Dropdown_Prototype, name: "Dropdown Prototype", animation: "fade-in" },
  { src: Splash_Screen, name: "Splash Screen", animation: "fade-in" },
  { src: Liquid_Loading, name: "Liquid Loading", animation: "fade-in" },
  {
    src: Login_Register_Page,
    name: "Login & Register Page",
    animation: "fade-in",
  },
];

const Design = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [videoStartIndex, setVideoStartIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = designData.slice(startIndex, startIndex + itemsPerPage);
  const visibleVideos = videoData.slice(
    videoStartIndex,
    videoStartIndex + itemsPerPage
  );

  const showPrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const showNext = () => {
    if (startIndex + itemsPerPage < designData.length)
      setStartIndex(startIndex + 1);
  };

  const showPrevVideo = () => {
    if (videoStartIndex > 0) setVideoStartIndex(videoStartIndex - 1);
  };

  const showNextVideo = () => {
    if (videoStartIndex + itemsPerPage < videoData.length)
      setVideoStartIndex(videoStartIndex + 1);
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

        {startIndex + itemsPerPage < designData.length && (
          <button className="nav-btn right" onClick={showNext}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      <br />
      <br />
      <h1 className="design-title">Animations & Prototypes</h1>
      <div className="design-carousel">
        {videoStartIndex > 0 && (
          <button className="nav-btn left" onClick={showPrevVideo}>
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="design-gallery">
          {visibleVideos.map((item) => (
            <div
              key={item.name}
              className={`design-card video-card ${item.animation}`}
            >
              <video
                muted
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{item.name}</p>
              <button
                className="play-btn"
                onClick={() => setModalVideo(item.src)}
              >
                ▶ Play in full Screen
              </button>
            </div>
          ))}
        </div>

        {videoStartIndex + itemsPerPage < videoData.length && (
          <button className="nav-btn right" onClick={showNextVideo}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {modalVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-btn" onClick={() => setModalVideo(null)}>
              ×
            </button>
            <video controls autoPlay>
              <source src={modalVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
