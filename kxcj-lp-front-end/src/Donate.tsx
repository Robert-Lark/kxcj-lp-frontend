import React from "react";
import "./styles/donate.css";
import Paypal from "./assets/PayPal_Plank_2.png";
import Logo from "./assets/logo_white_2.png";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import { useLocation } from "react-router-dom";
import SideButtons from "./lib/SideButtons";

const DONATE_QUERY = gql`
  query allDonate {
    allDonate {
      heading
      contentRaw
    }
  }
`;

function Donate() {
  const location = useLocation();
  const { data, loading, error } = useQuery(DONATE_QUERY);
  const heading = data?.allDonate[0]?.heading;
  const content = data?.allDonate[0]?.contentRaw[0]?.children[0]?.text;
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const fallback = (
    <>
      <h2>And talks. And informs. And entertains. And inspires.</h2>
    </>
  );

  return (
    <div className='donatePage'>
    <div className="top-level-container">
      <SideButtons currentPage={location.pathname} back />
      <div className="glass-container">
        <img src={Logo} id='logo' alt='logo'/>

        <span>{content ? content : fallback}</span>
        <div>
          <div id="donate_button">
            <a
              role="button"
              href="https://www.paypal.com/donate?hosted_button_id=D4VVLZXCKBVPS"
              className="button-wood-plank"
            >
              <img src={Paypal} alt="archive button" id="paypal" />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Donate;
