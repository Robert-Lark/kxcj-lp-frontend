import "./styles/supporters.css";

import SupportersPage from "./assets/Supporters-Page.png";

function Supporters() {

  return (
    <div className="background-test-supporters">
      <div className="image-container-supporters">
        <img
          src={SupportersPage}
          alt="Info on supporters of the station"
          id="supporterImg"
        />
      </div>
    </div>
  );
}

export default Supporters;
