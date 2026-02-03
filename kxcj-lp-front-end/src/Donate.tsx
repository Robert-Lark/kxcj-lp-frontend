import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/pages.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import DonateAVehicle from "./assets/Donate-a-Vehicle.png";
import Supporters from "./assets/Supporters1.png";
import ListenNow from "./assets/Listen_Now_Plank.png";
import Logo from "./assets/logo_white_2.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";
import { useMediaQuery } from "react-responsive";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";

const GET_HOME_QUERY = gql`
  query GetHome {
    allHome {
      image {
        asset {
          url
        }
      }
    }
  }
`;

function Donate() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { loading, error, data } = useQuery(GET_HOME_QUERY);

  const openNewWindow = () => {
    window.open(
      "http://216.115.15.236:8888/KXCJ",
      "_blank",
      "width=800,height=600"
    );
  };

  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const logoImage = data?.allHome?.[0]?.image?.asset?.url ?? Logo;

  return (
    <div className="container-test">
      <div className="background-test-donate" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="landscape-message">
        Please rotate your device to portrait mode.
      </div>
      <div className="custom-donate in-cont">
        <div className="donate-component-test">
          {" "}
          <img src={logoImage} alt="scroll" />
        </div>
        <div className="donate-image">
          <a role="button" href="/supporters" className="button-wood-plank">
            <img src={Supporters} alt="supporters" id="supporters" />
          </a>
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
          <a href="/donate">
            <img
              src={ListenNow}
              alt="archive button"
              id="listenButton"
              onClick={openNewWindow}
            />
          </a>
        </div>
        {!isMobile && <Footer />}
      </div>
    </div>
  );
}

export default Donate;
