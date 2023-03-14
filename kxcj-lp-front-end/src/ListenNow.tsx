import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import SteamNow from "./assets/Stream_Now_Plank.png";
import Archive from "./assets/Archive_Plank_2.png";
import Calendar from "./assets/Calendar.png";
import { useLocation } from "react-router-dom";

function ListenNow() {
  const location = useLocation();
  return (
    <div className="listenNow">
      <div className="top-level-container">
        <div className="streamSidebuttons">
          <SideButtons currentPage={location.pathname} listenNow />
        </div>

        <div className="stream-container">
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
          <audio controls autoPlay className="stream-player">
            <source src="http://207.55.228.207:8888/KXCJ"></source>
          </audio>
          <div className="schedule-container">
            <div
              data-tockify-component="calendar"
              data-tockify-calendar="kxcjfm"
            ></div>
          </div>
        </div>
      </div>
      <div
        className="cal"
      >
        <a
              role="button"
              href="https://www.illinoisvalleyweb.org/calendar"
              className="button-wood-plank"
              target="_blank"
              rel="noreferrer"
            >
        <img src={Calendar} alt="cal" />
        </a>
      </div>
    </div>
  );
}

export default ListenNow;
