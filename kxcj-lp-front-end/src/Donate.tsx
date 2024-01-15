import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/test.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import DonateAVehicle from "./assets/Donate-a-Vehicle.png";
import Supporters from "./assets/Supporters1.png"
import ListenNow from "./assets/Listen_Now_Plank.png";
import Logo from "./assets/logo_white_2.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";

function Donate() {
  const location = useLocation();

  const openNewWindow = () => {
    window.open(
      "http://207.55.228.207:8888/KXCJ",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <div className="container-test">
      <div className="background-test-donate" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="custom-donate">
        <div className="donate-component-test">
          {" "}
          <img src={Logo} alt="scroll" />
        </div>
        <div className="donate-image">
        <img src={Supporters} alt="supporters" id="supporters" />
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
        <div className="listenMobileButton">
          <a href="/listenNow">
            <img src={ListenNow} alt="archive button" id="listenButton" onClick={openNewWindow}/>
          </a>
        </div>
        <div className="donate-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Donate;
