import "../src/styles/home.css";
import ListenNow from "../src/assets/Listen_Now_Plank.png";
import GetInvolved from "../src/assets/Get_Involved_Plank.png";
import Donate from "../src/assets/Donate_Plank.png";
import logo from "../src/assets/logo_white_2.png";
import { useMediaQuery } from "react-responsive";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";

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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
        <div className="buttons-home" id="amatic">
          <a href={isMobile ? "/" : "/listenNow"}>
            <img
              src={ListenNow}
              id="plank"
              alt="menu button"
              onClick={openNewWindow}
            />
          </a>
          <a href="/donate" id="donatePlank">
            <img src={Donate} id="plank" alt="menu button" />
          </a>
          <a href="/getInvolved" className="getInvolvedPlank" id="lastChild">
            <img src={GetInvolved} id="plank" alt="menu button" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
