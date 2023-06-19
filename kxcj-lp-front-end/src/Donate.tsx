import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/test.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import DonateAVehicle from "./assets/Donate-a-Vehicle.png";
import Scroll from "./assets/Scrolls/Scroll_v.png";
import Logo from "./assets/logo_white_2.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";

function Donate() {
  const location = useLocation();
  return (
    <div className="container-test">
      <div className="background-test-donate" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="custom-donate">
        <div className="donate-component-test">
          {" "}
          <img
            src={Logo}
            alt="scroll"
          />
        </div>
        <div className="donate-image">
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={Paypal} alt="archive button" id="paypal" />
          </a>
          <a
            role="button"
            href="https://careasy.org/KXCJ"
            className="button-wood-plank"
          >
            <img src={DonateAVehicle} alt="archive button" id="donate" />
          </a>
        </div>
        {/* <div className="donate-footer">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

export default Donate;
