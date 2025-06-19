import React from "react";
import "./styles/mobilePages.css";
import contactImage from "./assets/M_contact.png";
import back from "./assets/Back_Plank.png";

function MobileContact() {
  return (
    <div className="mobileContactUs">
      <div className="mobile-page-container">
        <img src={contactImage} alt="contact" id="contactusMobileImage" />
        <a href="/">
          <img src={back} alt="back button" />
        </a>
      </div>
    </div>
  );
}

export default MobileContact;
