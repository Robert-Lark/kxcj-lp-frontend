import { useQuery, gql } from "@apollo/client";
import "./styles/becomdDj.css";
import { useLocation } from "react-router-dom";
import BecomeADJ from "./forms/becomeADJ/BecomeADJForm";
import ErrorState from "./lib/ErrorState";
import SideButtons from "./lib/SideButtons";
import TemplateFormPage from "./TemplateFormPage";
import Scroll from "./assets/Scrolls/Scroll_s.png";
import { BecomeDjForm } from "./lib/BecomeDjForm";

const BECOMEDJ_QUERY = gql`
  query allBecomeDJ {
    allBecomeDJ {
      heading
      contentRaw
      formHeading
    }
  }
`;

function BecomeDJ() {
  // use location is used to ensure we dont display a link in the side buttons to the page we are currently on
  const location = useLocation();
  const { data, loading, error } = useQuery(BECOMEDJ_QUERY);

  const fallback = <span>Send us your idea for a new program on KXCJ!</span>;

  //API CONTENT
  const formHeading = data?.allBecomeDJ[0]?.formHeading;
  const heading = data?.allBecomeDJ[0]?.heading;
  const content = data?.allBecomeDJ[1]?.contentRaw[0]?.children[0]?.text
    ? data?.allBecomeDJ[1]?.contentRaw[0]?.children[0]?.text
    : fallback;

  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="becomeDjCont">
      <div>
      <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="becomeDjContent">
        <img src={Scroll} alt='scroll'/>
        <span className="formHeading">{formHeading}</span>
        <span className="form-container">
          <BecomeDjForm />
        </span>
      </div>
    </div>
    // <div>
    //   <TemplateFormPage
    //     content={content}
    //     heading={heading}
    //     formHeading={formHeading}
    //     query={BECOMEDJ_QUERY}
    //     fallBackHeading={"Propose a Program"}
    //     FallBackBody={fallback}
    //   />
    // </div>
  );
}

export default BecomeDJ;
