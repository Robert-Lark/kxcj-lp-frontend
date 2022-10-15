import React from "react";
import "../src/styles/home.css";
import logo from "../src/assets/logo_white_2.png";

function Home() {
  return (
    <div className="homepage">
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="buttons">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-5">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-5">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-5">Get Involved</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
