import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import SteamNow from "./assets/Stream_Now_Plank.png";
import Archive from "./assets/Archive_Plank_2.png";

import { useLocation } from "react-router-dom";
import Footer from "./lib/Footer";

function ListenNow() {
  const location = useLocation();
  return (
    // <div className="listenNow">
    //   <div className="top-level-container">
    //     <div className="streamSidebuttons">
    //       <SideButtons currentPage={location.pathname} listenNow cal/>
    //     </div>

    //     <div className="stream-container">
    //       <div className="buttons">
    // <img src={SteamNow} alt="stream now button" />
    // <a
    //   role="button"
    //   href="https://www.archive.org/details/@kxcj-lp"
    //   className="button-wood-plank"
    //   target="_blank"
    //   rel="noreferrer"
    // >
    //   <img src={Archive} alt="archive button" id="archive" />
    // </a>
    //       </div>
    // <audio controls autoPlay className="stream-player">
    //   <source src="http://207.55.228.207:8888/KXCJ"></source>
    // </audio>
    //       <div className="schedule-container">
    // <div
    //   data-tockify-component="calendar"
    //   data-tockify-calendar="kxcjfm"
    // ></div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />

    // </div>
    <div>
    <div className="listenNowContainer">
      <div className="sidebar">
        <SideButtons currentPage={location.pathname} listenNow cal />
      </div>
      <div className="content">
        <div className="buttons">
          <img src={SteamNow} alt="stream now button" />
          <a
            role="button"
            href="https://www.archive.org/details/@kxcj-lp"
            className="button-wood-plank"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Archive} alt="archive button" id="archive" />
          </a>
        </div>

        <div>
          <audio controls autoPlay className="stream-player">
            <source src="http://207.55.228.207:8888/KXCJ"></source>
          </audio>
        </div>

        <div
          data-tockify-component="calendar"
          data-tockify-calendar="kxcjfm"
          data-tockify-height="400px"
        ></div>
      </div>
      <div className="listen-footer">
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default ListenNow;
