import React from "react";
import "../styles/footerRedux.css";

// Import the scroll image and hover images
import scrollBackground from "../assets/footer/Footer2.png";
import contactInfoImage from "../assets/footer/Email.png";
// Import other hover images

const FooterRedux: React.FC = () => {
  return (
    <footer className="footer-redux">
      <img
        src={scrollBackground}
        alt="Scroll Background-Redux"
        className="scroll-background-Redux"
      />
      <div className="icon-container-redux">
        {/* Icon hover areas */}
        <div className="hover-area-redux" style={{ left: "12.5%", bottom: "27%" }}>
    <a role="button" href="https://www.facebook.com/KXCJ1057/" target="_blank">
      <div className="clickable-area"></div> {/* Div to define the clickable area */}
    </a>
  </div>
        <div
          className="hover-area-redux"
          style={{ left: "24%", bottom: "36%" }}
        >
          <img
            src={contactInfoImage}
            alt="Contact Info"
            className="hover-image-redux"
          />
        </div>
        <div
          className="hover-area-redux"
          style={{ left: "36%", bottom: "43%" }}
        >
          <img
            src={contactInfoImage}
            alt="Contact Info"
            className="hover-image-redux"
          />
        </div>
        <div
          className="hover-area-redux"
          style={{ left: "50%", bottom: "35%" }}
        >
          <img
            src={contactInfoImage}
            alt="Contact Info"
            className="hover-image-redux"
          />
        </div>
        <div
          className="hover-area-redux"
          style={{ left: "64%", bottom: "30%" }}
        >
          <img
            src={contactInfoImage}
            alt="Contact Info"
            className="hover-image-redux"
          />
        </div>
        <div
          className="hover-area-redux"
          style={{ left: "77%", bottom: "27%" }}
        >
          <img
            src={contactInfoImage}
            alt="Contact Info"
            className="hover-image-redux"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterRedux;
