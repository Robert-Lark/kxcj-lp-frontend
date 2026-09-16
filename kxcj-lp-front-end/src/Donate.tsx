import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/pages.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import DonateAVehicle from "./assets/Donate-a-Vehicle.png";
import Supporters from "./assets/Supporters1.png";
import ListenNow from "./assets/Listen_Now_Plank.png";
import Logo from "./assets/logo_white_2.png";
import TenForTenBanner from "./assets/10For10Banner.png";
import TenForTenBannerMobile from "./assets/10For10BannerMobile.png";
import SideButtons from "./lib/SideButtons";
import Footer from "./lib/Footer";
import { useMediaQuery } from "react-responsive";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_PLAN_ID = "P-1D412118HU080180CNKVQHGY";
const PAYPAL_CONTAINER_ID = `paypal-button-container-${PAYPAL_PLAN_ID}`;
const PAYPAL_CLIENT_ID =
  "BAAo6vLGyeCLirfQ4zZ4C6VFRn3T4sM5w5A8Kigakdw6A5XpuIUeLXZmKFzNt8dFBVmyv-mvD1orWyH39s";

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

  useEffect(() => {
    let cancelled = false;
    let rendered = false;

    const tryRenderPaypalButton = () => {
      if (cancelled || rendered) return;
      if (!window.paypal || typeof window.paypal.Buttons !== "function") return;
      const container = document.getElementById(PAYPAL_CONTAINER_ID);
      if (!container || container.childElementCount > 0) return;

      rendered = true;
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: (_data: unknown, actions: any) => {
            return actions.subscription.create({
              plan_id: PAYPAL_PLAN_ID,
            });
          },
          onApprove: () => {
            alert("Thank you for supporting local, community radio!");
          },
        })
        .render(`#${PAYPAL_CONTAINER_ID}`);
    };

    if (!document.getElementById("paypal-sdk")) {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
      script.setAttribute("data-sdk-integration-source", "button-factory");
      document.body.appendChild(script);
    }

    // The PayPal SDK script load and the donate page's own data fetch
    // finish at unpredictable times relative to each other, so poll
    // until both the SDK and the button container are ready.
    const intervalId = window.setInterval(tryRenderPaypalButton, 200);
    tryRenderPaypalButton();

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const logoImage = data?.allHome?.[0]?.image?.asset?.url ?? Logo;

  const supportersButton = (
    <a role="button" href="/supporters" className="button-wood-plank">
      <img src={Supporters} alt="supporters" id="supporters" />
    </a>
  );

  const paypalOneTimeButton = (
    <a
      role="button"
      href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
      className="button-wood-plank"
    >
      <img src={Paypal} alt="archive button" id="paypal" />
    </a>
  );

  const donateVehicleButton = (
    <a role="button" href="https://careasy.org/KXCJ" className="button-wood-plank">
      <img src={DonateAVehicle} alt="archive button" id="donate" />
    </a>
  );

  const subscribeRow = (
    <div className="donate-subscribe-row">
      <img
        src={isMobile ? TenForTenBannerMobile : TenForTenBanner}
        alt="10 for 10 for 10 campaign"
        className="subscribe-banner"
      />
      <div id={PAYPAL_CONTAINER_ID} className="paypal-button-container" />
    </div>
  );

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
        {isMobile ? (
          <>
            {subscribeRow}
            <div className="donate-image">
              {donateVehicleButton}
              {paypalOneTimeButton}
              {supportersButton}
            </div>
          </>
        ) : (
          <>
            <div className="donate-image">
              {supportersButton}
              {paypalOneTimeButton}
              {donateVehicleButton}
            </div>
            {subscribeRow}
          </>
        )}
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
