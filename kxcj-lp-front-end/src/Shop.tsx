import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/test.css";

import Scroll from "./assets/T-shirt-Scroll.png";
import Merch from "./assets/Merch_tiny.png";

import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";

function Shop() {
  const location = useLocation();
  return (
    <div className="container-test">
      <div className="background-test-merch" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="merch-test">
        
        <div className="merch-1-row">
          <a
            role="button"
            href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
            className="button-wood-plank"
          >
            <img src={Merch} alt="archive button" id="tee" />
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
