import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/test.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import Logo from "./assets/logo_white_2.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";

function Test() {
  const location = useLocation();
  return (
    <div className="container-test">
      <div className="background-test-donate" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="content-test">
        <div className="component-test">
          {" "}
          <img
            src={Logo}
            alt="scroll"
          />
        </div>
        <div className="component-test donate-image">
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={Paypal} alt="archive button" id="paypal" />
          </a>
        </div>
        <div className="donate-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Test;
