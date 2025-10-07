import React, { useState, useEffect } from "react";
import "./Design.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Cafe_App from "../../assets/Cafe_App.png";
import Movie_Ticket_Booking from "../../assets/Movie_Ticket_Booking.png";
import Figma_Logo from "../../assets/Figma_Logo.png";
import Delivery_App from "../../assets/Delivery_App.png";
import Saas_Dashboard from "../../assets/Saas_Dashboard.png";
import Novel_App from "../../assets/Novel_App.png";
import Food_Delivery_App_LT from "../../assets/Food_Delivery_App_Lt.png";
import Food_Delivery_App_DT from "../../assets/Food_Delivery_App_DT.png";
import Skill_Exchange_App_Wireframe from "../../assets/Skill_Exchange_App_Wireframe.png";
import Skill_Exchange_App from "../../assets/Skill_Exchange_App.png";
import Govt_Website_Modal from "../../assets/Govt_Website_Modal.png";
import Learning_App from "../../assets/Learning_App.png";
import Hotel_Booking_Website from "../../assets/Hotel_Booking_Website.png";
import Mobile_View from "../../assets/Mobile_View.png";
import New_Task from "../../assets/New_Task.png";
import Edit_Task from "../../assets/Edit_Task.png";
import Assign_Task from "../../assets/Assign_Task.png";
import Skincare_Brand from "../../assets/Skincare_Brand.png";
import Dashboard from "../../assets/Dashboard.png";
import Delete_Task from "../../assets/Delete_Task.png";
import Service_Booking_App from "../../assets/Service_Booking_App.png";
import FB_App from "../../assets/FB_App.png";
import VR_Website from "../../assets/VR_Website.png";
import AboutUs_Page from "../../assets/AboutUS_Page.png";
import Blogs_Page from "../../assets/Blogs_Page.png";
import Careers_Page from "../../assets/Careers_Page.png";
import Contact_Page from "../../assets/Contact_Page.png";
import Main_Frame from "../../assets/Main_Frame.png";
import Travel_Page_IG_Post from "../../assets/Travel_Page_IG_Post.png";
import Music_App from "../../assets/Music_App.png";
import Basic_Website from "../../assets/Basic_Website.png";
import Website_Wireframe from "../../assets/Website_Wireframe.png";
import Gmail from "../../assets/Gmail.png";
import JobHunt_Website from "../../assets/JobHunt_Website.png";
import Login_Page from "../../assets/Login_Page.png";
import Food_Ordering_App from "../../assets/Food_Ordering_App.png";
import Mesh_Gradient_Design from "../../assets/Mesh_Gradient_Design.png";
import User_Management from "../../assets/User_Management.png";
import Parallax_Effect_Website from "../../assets/Parallax_Effect_Website.png";
import Website from "../../assets/Website.png";
import Eco_Friendly_Website from "../../assets/Eco_Friendly_Website.png";
import Netflix from "../../assets/Netflix.png";

import Instant_Animation from "../../assets/Instant_Animation_.mp4";
import Splash_Screen_Animation from "../../assets/Splash_Screen_Animation.mp4";
import Scroll_Animation from "../../assets/Scroll_Animation.mp4";
import Facebook_Prototype from "../../assets/Facebook_Prototype.mp4";
import Dropdown_Prototype from "../../assets/Dropdown_Prototype.mp4";
import Splash_Screen from "../../assets/Splash_Screen.mp4";
import Liquid_Loading from "../../assets/Liquid_Loading.mp4";
import Login_Register_Page from "../../assets/Login_Register_Page.mp4";
import Food_Order_App from "../../assets/Food_Order_App.mp4";
import Interactive_Website from "../../assets/Interactive_Website.mp4";
import Mesh_Gradient_Effect from "../../assets/Mesh_Gradient_Effect.mp4";
import User_Management_Workflow from "../../assets/User_Management_Workflow.mp4";
import Parallax_Scroll_Effect from "../../assets/Parallax_Scroll_Effect.mp4";
import Netflix_Prototype from "../../assets/Netflix_Prototype.mp4";

const designData = [
  { img: VR_Website, name: "Virutal Reality Website" },
  {
    img: Movie_Ticket_Booking,
    name: "Movie Ticket Booking",
    animation: "fade-in",
  },
  { img: Saas_Dashboard, name: "Saas Dashboard" },
  { img: Learning_App, name: "Learning App" },
  { img: User_Management, name: "User Management" },
  { img: JobHunt_Website, name: "Job Hunt Website" },
  { img: Travel_Page_IG_Post, name: "Instagram Post Design" },
  { img: Novel_App, name: "Novel App" },
  { img: Food_Delivery_App_LT, name: "Food Delivery App Light Theme" },
  { img: Food_Delivery_App_DT, name: "Food Delivery App Dark Theme" },
  { img: Skincare_Brand, name: "Skincare Brand" },
  { img: FB_App, name: "Facebook App" },
  { img: Eco_Friendly_Website, name: "Eco Friendly Website" },
  { img: Delivery_App, name: "Delivery App" },
  { img: Hotel_Booking_Website, name: "Hotel Booking Website" },
  { img: Govt_Website_Modal, name: "Website Modal" },
  { img: Mobile_View, name: "Mobile View" },
  { img: Basic_Website, name: "Basic Website" },
  { img: Main_Frame, name: "Main Frame" },
  { img: AboutUs_Page, name: "AboutUs Page" },
  { img: Blogs_Page, name: "Blogs Page" },
  { img: Careers_Page, name: "Careers Page" },
  { img: Contact_Page, name: "Contact Page" },
  { img: Skill_Exchange_App_Wireframe, name: "Skill Exchange App Wireframe" },
  { img: Skill_Exchange_App, name: "Skill Exchange App" },
  { img: New_Task, name: "New Task" },
  { img: Edit_Task, name: "Edit Task" },
  { img: Assign_Task, name: "Assign Task" },
  { img: Dashboard, name: "Dashboard" },
  { img: Delete_Task, name: "Delete Task" },
  { img: Website_Wireframe, name: "Website Wireframe" },
  { img: Food_Ordering_App, name: "Food Ordering App" },
  { img: Website, name: "Website" },
  { img: Service_Booking_App, name: "Service Booking App" },
  { img: Netflix, name: "Netflix Layout" },
  { img: Figma_Logo, name: "Figma Logo" },
  { img: Gmail, name: "Gmail Desktop View" },
  { img: Music_App, name: "Music App" },
  { img: Login_Page, name: "Login & Registration Page" },
  { img: Cafe_App, name: "Cafe App" },
  {
    img: Mesh_Gradient_Design,
    name: "Mesh Gradient Design",
    animation: "fade-in",
  },
  {
    img: Parallax_Effect_Website,
    name: "Parallax Effect Website",
    animation: "fade-in",
  },
];

const videoData = [
  { src: Splash_Screen_Animation, name: "Splash Screen Animation" },
  { src: Netflix_Prototype, name: "Netflix Prototype" },
  {
    src: Scroll_Animation,
    name: "Scroll Animation",
  },
  { src: Facebook_Prototype, name: "Facebook Prototype" },
  { src: Dropdown_Prototype, name: "Dropdown Prototype" },
  { src: Splash_Screen, name: "Splash Screen" },
  {
    src: Parallax_Scroll_Effect,
    name: "Parallax Scroll Effect",
  },
  { src: Liquid_Loading, name: "Liquid Loading" },
  { src: Interactive_Website, name: " Interactive Website" },
  {
    src: Login_Register_Page,
    name: "Login & Register Page",
  },
  { src: Food_Order_App, name: "Food Order App" },
  {
    src: Mesh_Gradient_Effect,
    name: "Mesh Gradient Effect",
  },
  { src: Instant_Animation, name: "Instant Animation" },
  {
    src: User_Management_Workflow,
    name: "User Management Workflow",
  },
];

const Design = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [videoStartIndex, setVideoStartIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setItemsPerPage(mobile ? 1 : 2);
      setIsMobile(mobile);
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
                autoPlay={isMobile}
                loop={isMobile}
                playsInline
                onMouseEnter={!isMobile ? (e) => e.target.play() : undefined}
                onMouseLeave={
                  !isMobile
                    ? (e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }
                    : undefined
                }
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
