import React from "react";
import "./styles/mobilePages.css";
import image from "./assets/M_about1.png";
import back from "./assets/Back_Plank.png";

function MobileAbout() {
  return (
    <div className="mobileAbout">
      <div className="mobile-page-container">
        <img src={image} alt="About page" id="mobileAboutImage" />
        <a href="/">
          <img src={back} alt="back button" />
        </a>
      </div>
    </div>
  );
}

export default MobileAbout;
