import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import SteamNow from "./assets/whats_up.png";
import Archive from "./assets/Archive_Plank_2.png";
import Donate from "./assets/Donate_Plank.png"
import testPoster from "./assets/June23Oddspells_2.png";
import { useLocation } from "react-router-dom";
import Footer from "./lib/Footer";
import React from "react";

function ListenNow() {
  const location = useLocation();
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="listenNowContainer">
        <div className="sidebar">
          <SideButtons currentPage={location.pathname} listenNow cal />
        </div>
        <div className="content">
          <div className="buttons-listen-now">
            <img
              src={SteamNow}
              alt="stream now button"
              id="whatsUp"
              onClick={() => setShow(!show)}
            />
            <a href="https://www.archive.org/details/@kxcj-lp" className="archiveLink">
              <img src={Archive} alt="archive button" id="archive" />
            </a>
            <div className="donateMobileButton">
              <a href="/donate">
                <img src={Donate} alt="archive button" id="donateListen"/>
              </a>
            </div>
          </div>
          <div className={show ? "whatsUpPoster spin" : "whatsUpPosterNone"}>
            <img src={testPoster} alt="poster" />
          </div>

          <div
            className="tock"
            data-tockify-component="calendar"
            data-tockify-calendar="kxcjfm"
            data-tockify-height="550px"
            data-tockify-max-width="850px"
          ></div>
        </div>
        <div className="listen-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function WhatsUpModal(props: any) {
  const { show, setShow } = props;
  if (!show) return null;
  return (
    <div className={show ? "whatsUpPoster spin" : "whatsUpPosterNone"}>
      <img src="testPoster" />
    </div>
  );
}

export default ListenNow;
