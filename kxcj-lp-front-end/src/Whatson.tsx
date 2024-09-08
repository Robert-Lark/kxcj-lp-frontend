import "./styles/whatsOn.css";

import WhatsOn from "./assets/whatsOn-Page.png";

function WhatsOn() {

  return (
    <div className="background-test-whatsOn">
      <div className="image-container-whatsOn">
        <img
          src={WhatsOn}
          alt="Info on whatsOn of the station"
          id="supporterImg"
        />
      </div>
    </div>
  );
}

export default WhatsOn;