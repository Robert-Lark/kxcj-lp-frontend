import "../src/styles/home.css";
import ListenNowDesktop from "../src/assets/Listen_Now_Plank.png";
import GetInvolvedDesktop from "../src/assets/Get_Involved_Plank.png";
import DonateDesktop from "../src/assets/Donate_Plank.png";

import ListenNowMobile from "../src/assets/Listen_Now_Plank.png";
import DonateMobile from "../src/assets/Donate_Plank.png";
import MobileButtonAboutImage from "../src/assets/M_about_button.png";
import MobileButtonArchiveImage from "../src/assets/M_archive_button.png";
import MobileButtonContactImage from "../src/assets/M_contact_button.png";
import MobileButtonWhatsUpImage from "../src/assets/M_whatsup_button.png";

import logo from "../src/assets/logo_white_2.png";

import { useMediaQuery } from "react-responsive";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";

interface ButtonLinkProps {
  href: string;
  imageSrc: string;
  altText: string;
  className?: string;
  onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  imageSrc,
  altText,
  className,
  onClick,
}) => {
  return (
    <a href={href} className={className}>
      <img
        src={imageSrc}
        id="plank"
        alt={altText}
        onClick={onClick}
      />
    </a>
  );
};

const GET_INVOVLED_QUERY = gql`
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

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { loading, error, data } = useQuery(GET_INVOVLED_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const logoImage = data?.allHome?.[0].image?.asset?.url ?? logo;

  const openNewWindow = () => {
    window.open(
      "http://216.115.15.236:8888/KXCJ",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <div className="homepage">
      <div className="landscape-message">
        Please rotate your device to portrait mode.
      </div>
      <div className="in-cont">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>

        {/* Desktop Buttons */}
        {!isMobile && (
          <div className="buttons-home desktop-buttons" id="amatic">
            <ButtonLink
              href="/listenNow"
              imageSrc={ListenNowDesktop}
              altText="Listen Now button"
              onClick={openNewWindow}
            />
            <ButtonLink
              href="/donate"
              imageSrc={DonateDesktop}
              altText="Donate button"
              className="donatePlank"
            />
            <ButtonLink
              href="/getInvolved"
              imageSrc={GetInvolvedDesktop}
              altText="Get Involved button"
              className="getInvolvedPlank"
            />
          </div>
        )}

        {/* Mobile Buttons */}
        {isMobile && (
          <div className="mobile-buttons" id="amatic">
            <ButtonLink
              href="/"
              imageSrc={ListenNowMobile}
              altText="Listen Now button"
              onClick={openNewWindow}
              className="mobilePlank"
            />
            <ButtonLink
              href="/donate"
              imageSrc={DonateMobile}
              altText="Donate button"
              className="mobilePlank"
            />
            <ButtonLink
              href="/mobileAbout"
              imageSrc={MobileButtonAboutImage}
              altText="Mobile Page About button"
              className="mobilePlank"
            />
            <ButtonLink
              href="https://archive.org/details/@kxcj-lp"
              imageSrc={MobileButtonArchiveImage}
              altText="Mobile Page Archive button"
              className="mobilePlank archive"
            />
            <ButtonLink
              href="/mobileWhatsUp"
              imageSrc={MobileButtonWhatsUpImage}
              altText="Mobile Page Whats Up button"
              className="mobilePlank"
            />
            <ButtonLink
              href="/mobileContact"
              imageSrc={MobileButtonContactImage}
              altText="Mobile Page Contact button"
              className="mobilePlank"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
