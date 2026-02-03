import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import SteamNow from "./assets/whats_up.png";
import Archive from "./assets/Archive_Plank_2.png";
import Donate from "./assets/Donate_Plank.png";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./lib/Footer";
import React from "react";

function ListenNow() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    navigate("/whatsOn"); // Navigate to the /whatsOn page
  };


  return (
    <div>
      <div className="listenNowContainer">
        <div className="sidebar">
          <SideButtons currentPage={location.pathname} listenNow cal about/>
        </div>
        <div className="content">
          <div className="buttons-listen-now">
            <img
              src={SteamNow}
              alt="stream now button"
              id="whatsUp"
              onClick={handleClick}
            />
            <a
              href="https://www.archive.org/details/@kxcj-lp"
              className="archiveLink"
            >
              <img src={Archive} alt="archive button" id="archive" />
            </a>
            <div className="donateMobileButton">
              <a href="/donate">
                <img src={Donate} alt="archive button" id="donateListen" />
              </a>
            </div>
          </div>
<div className="tock-class">
          <div
            className="tock"
            data-tockify-component="calendar"
            data-tockify-calendar="kxcjfm"
            data-tockify-height="800px"
            data-tockify-max-width="1100px"
          ></div>
          </div>
                    <Footer />
        </div>
      

      
      </div>
    </div>
  );
}

export default ListenNow;
