import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/test.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import Scroll from "./assets/T-shirt-Scroll.png";
import RedShirt from "./assets/Red_Shirt.png";
import YellowShirt from "./assets/Yellow_Shirt.png";
import WhiteShirt from "./assets/White_Shirt.png";
import GreyShirt from "./assets/Grey_Shirt.png";
import BlueShirt from "./assets/Blue_Shirt.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";

function Shop() {
  const location = useLocation();
  return (
    <div className="container-test">
      <div className="background-test-donate" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="content-test">
        <div className="component-test-shop">
          {" "}
          <img src={Scroll} alt="scroll" />
        </div>
        <div className="shirts-1-row">
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={RedShirt} alt="archive button" id="tee" />
          </a>
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={YellowShirt} alt="archive button" id="tee" />
          </a>
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={WhiteShirt} alt="archive button" id="tee" />
          </a>
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={GreyShirt} alt="archive button" id="tee" />
          </a>
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={BlueShirt} alt="archive button" id="tee" />
          </a>
        </div>
        <div className="donate-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Shop;
