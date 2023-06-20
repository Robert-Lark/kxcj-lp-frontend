import "../src/styles/home.css";
import ListenNow from "../src/assets/Listen_Now_Plank.png";
import GetInvolved from "../src/assets/Get_Involved_Plank.png";
import Donate from "../src/assets/Donate_Plank.png";
import logo from "../src/assets/logo_white_2.png";

function Home() {

  const openNewWindow = () => {
    window.open('http://207.55.228.207:8888/KXCJ', '_blank', 'width=800,height=600');
    window.location.href = '/listenNow';
  };
  
  return (
    <div className="homepage">
      <div className="in-cont">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="buttons-home" id="amatic">
            <a href="/listenNow" target="_blank" rel="noopener noreferrer">
              <img src={ListenNow} id="plank" alt="menu button" onClick={openNewWindow}/>
            </a>
            <a href="/donate">
              <img src={Donate} id="plank" alt="menu button"/>
            </a>
            <a href="/getInvolved" id="lastChild">
              <img src={GetInvolved} id="plank" alt="menu button"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
