import "../styles/buttons.css";
import { useNavigate } from "react-router-dom";
import Supporters from "../assets/supporters_button.png";

type props = {
  back?: boolean;
  currentPage: string;
  listenNow?: boolean;
  cal?: boolean;
  about?: boolean;
};

function SideButtons(props: props) {
  const buttonArr = [
    "Listen Now",
    "Donate",
    "Get Involved",
    "Shop",
    "Become a DJ",
  ];
  const linkArr = [
    "/listenNow",
    "/donate",
    "/getInvolved",
    "/merch",
    "/becomeadj",
  ];
  const navigate = useNavigate();
  const { back = false, listenNow = false, about = false, currentPage } = props;

  return (
    <div className="side_buttons">
      {back && (
        <button
          className="button-wood-plank back"
          onClick={() => navigate(-1)}
          id="back"
        ></button>
      )}
      {listenNow && (
        <button
          className="button-wood-plank back"
          onClick={() => navigate("/about")}
          id="about"
        ></button>
      )}
      {buttonArr.map((button: string, i: any) => {
        if (linkArr[i] === currentPage) {
          return null;
        } else
          return (
            <div key={i}>
              <a href={linkArr[i]}>
                <button id={`id-${i}`} className="button-wood-plank"></button>
              </a>
            </div>
          );
      })}
      {listenNow && (
        <a href="/supporters">
          <img src={Supporters} alt="supporters" className="supportersButton" />
        </a>
      )}
      {props.cal && (
        <button
          id="id-5"
          className="button-wood-plank"
          onClick={() =>
            window.open("https://www.illinoisvalleyweb.org/calendar", "_blank")
          }
        ></button>
      )}
    </div>
  );
}

export default SideButtons;
