import "../src/styles/home.css";
import ListenNow from "../src/assets/Listen_Now_Plank.png";
import GetInvolved from "../src/assets/Get_Involved_Plank.png";
import Donate from "../src/assets/Donate_Plank.png";
import logo from "../src/assets/logo_white_2.png";

function Home() {
  return (
    <div className="homepage">
      <div className="in-cont">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="buttons-home" id="amatic">

            <a href="/listenNow" target="_blank" rel="noopener noreferrer">
              <img src={ListenNow} id="plank"/>
            </a>

            <a href="/donate">
              <img src={Donate} id="plank"/>
            </a>
          
            <a href="/getInvolved">
              <img src={GetInvolved} id="plank"/>
            </a>
          
        </div>
        {/* <div className="buttons" id="indie-flower">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="francois-one">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="neutcha">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="caveat-brush">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="rubik-dirt">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="rye">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div>
        <div className="buttons" id="limelight">
          <div className="side_button">
            <a href="/listenNow">
              <button className="button-wood-plank">Listen Now</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/donate">
              <button className="button-wood-plank">Donate</button>
            </a>
          </div>
          <div className="side_button">
            <a href="/getInvolved">
              <button className="button-wood-plank">Get Involved</button>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
