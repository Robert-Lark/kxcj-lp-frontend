import "../styles/buttons.css";
import { useNavigate } from "react-router-dom";

type props = { back?: boolean; currentPage: string; listenNow?: boolean };

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
    "/shop",
    "/becomeadj",
  ];
  const navigate = useNavigate();
  const { back = false, listenNow = false, currentPage } = props;

  return (
    <div className="side_buttons">
      {back && (
        <button
          className="button-wood-plank back"
          onClick={() => navigate(-1)}
          id="back"
        >
        </button>
      )}
      {listenNow && (
        <button
          className="button-wood-plank back"
          onClick={() => navigate("/")}
          id="home"
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
    </div>
  );
}

export default SideButtons;
