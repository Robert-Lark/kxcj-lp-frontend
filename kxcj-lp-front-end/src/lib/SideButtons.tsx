import "../styles/buttons.css";
import { useNavigate } from "react-router-dom";

type props = { back?: boolean; currentPage: string };

function SideButtons(props: props) {
  const buttonArr = ["Listen Now", "Donate", "Get Involved", "Shop", "Become a DJ"];
  const linkArr = ["/listenNow", "/donate", "/getInvolved", "/shop", "/becomeadj"];
  const navigate = useNavigate();
  const { back = false, currentPage } = props;

  
  return (
    <div className="side_buttons">
      {back && (
        <div className="side_button">
          <button className="button-wood-plank back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      )}
      {buttonArr.map((button: string, i: any) => {
        if (linkArr[i] === currentPage) {
          return null
        } else
          return (
            <div className="side_button" key={i}>
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
