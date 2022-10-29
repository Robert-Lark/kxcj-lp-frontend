import "../styles/buttons.css";
import { useNavigate } from "react-router-dom";

type props = { back?: boolean; currentPage: string };

function SideButtons(props: props) {
  const buttonArr = ["Listen Now", "Donate", "Get Involved", "Shop"];
  const linkArr = ["/listenNow", "/donate", "/getInvolved", "/shop"];
  const navigate = useNavigate();
  const { back = false, currentPage } = props;
  return (
    <div className="get-involved-buttons">
      {back && (
        <div className="side_button">
          <button className="button-wood-plank back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      )}
      {buttonArr.map((button: string, i: any) => {
        if (button[i] === currentPage) {
          return null;
        } else
          return (
            <div className="side_button">
              <a href={linkArr[i]}>
                <button className="button-wood-plank">{buttonArr[i]}</button>
              </a>
            </div>
          );
      })}
    </div>
  );
}

export default SideButtons;
