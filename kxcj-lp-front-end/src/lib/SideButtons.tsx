import React from "react";
import "../styles/buttons.css";

type props = { back?: boolean };

function SideButtons(props: props) {
  const { back = false } = props;
  return (
    <div className="get-involved-buttons">
      {back ? (
        <div className="side_button">
          <a href="/">
            <button className="button-5">Back</button>
          </a>
        </div>
      ) : (
        <div className="side_button">
          <a href="/volunteer">
            <button className="button-5">Volunteer</button>
          </a>
        </div>
      )}
      <div className="side_button">
        <a href="/submit">
          <button className="button-5">Submit a PSA</button>
        </a>
      </div>
      <div className="side_button">
        <a href="/becomeadj">
          <button className="button-5">Become a DJ!</button>
        </a>
      </div>
      <div className="side_button">
        <a href="/donate">
          <button className="button-5">Donate</button>
        </a>
      </div>
    </div>
  );
}

export default SideButtons;
