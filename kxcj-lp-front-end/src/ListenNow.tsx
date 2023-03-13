import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import SteamNow from "./assets/Stream_Now_Plank.png";
import Archive from "./assets/Archive_Plank_2.png";
import Calendar from "./assets/Calendar.png";
import { Link, useLocation } from "react-router-dom";

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

            <img src={Archive} alt="archive button" id="archive" />
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
      <div className="cal">
        <Link
          to={{
            pathname:
              "www.illinoisvalleyweb.org",
          }}
          target="_blank"
        >
          <img src={Calendar} alt="cal" />
        </Link>
      </div>
    </div>
  );
}

export default ListenNow;
