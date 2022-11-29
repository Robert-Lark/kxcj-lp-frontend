import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import Plank_1 from "./assets/planks_panda/Plank_1.png";
import { useLocation } from "react-router-dom";

function ListenNow() {
  const location = useLocation();
  return (
    <div className="top-level-container">
      <SideButtons currentPage={location.pathname} listenNow />
      <div className="stream-container">
        <div>
          <div className="glass-container">
            <div className="stream_button">
              <button disabled className="button-wood-plank">
                Stream!
              </button>
            </div>
            <audio controls autoPlay className="stream-player">
              <source src="http://207.55.228.207:8888/KXCJ"></source>
            </audio>
          </div>
          <div className="schedule_button">
              <button disabled className="button-wood-plank">
                Stream!
              </button>
            </div>
          <div className="schedule-container"> PUT SCHEDULE HERE </div>
        </div>
      </div>
    </div>
  );
}

export default ListenNow;
