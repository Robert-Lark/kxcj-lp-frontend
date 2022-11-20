import "../src/styles/listenNow.css";
import SideButtons from "./lib/SideButtons";
import { useLocation } from "react-router-dom";

function ListenNow() {
  const location = useLocation();
  return (
    <div className="top-level-container">
      <SideButtons currentPage={location.pathname} listenNow/>
      <div className="stream-container">
        <div className="schedule-container"> PUT SCHEDULE HERE </div>
        <div>
          <div className="glass-container">
            <p>STREAM KXCJ-LP</p>
            <audio controls autoPlay className="stream-player">
              <source src="http://207.55.228.207:8888/KXCJ"></source>
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListenNow;
