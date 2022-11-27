import {useLocation} from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import SideButtons from "./lib/SideButtons";
import PSAForm from './forms/psa/PSAForm';

const SUBMITPSA_QUERY = gql`
  query allSubmitPSA {
    allSubmitPSA {
      heading
      contentRaw
      formHeading
    }
  }
`;

function SubmitPSA() {
  const { data, loading, error } = useQuery(SUBMITPSA_QUERY);
  const location = useLocation();
  //API CONTENT
  const formHeading = data?.allSubmitPSA[0]?.formHeading;
  const heading = data?.allSubmitPSA[0]?.heading;
  const content = data?.allSubmitPSA[1]?.contentRaw[0]?.children[0]?.text;
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;
  const fallback = (
    <span>
      We broadcast Public Service Announcements (PSA) as a free service to the
      Illinois Valley community. Before submitting your PSA, time it as you read
      it aloud; it should be 10-30 seconds . KXCJ reserves the right to edit PSA
      submissions for brevity and/or clarity. Please submit announcements at
      least 10 days before the event, so there is ample air time for your PSA to
      be heard! You can submit the written script for your PSA using the form
      below.
    </span>
  );

  return (
    <div className="outer-container">
      <div className="top-level-container">
        <SideButtons back currentPage={location.pathname} />
        <div className="glass-container">
          <h1>{heading ? heading : "Submit PSA"}</h1>
          <span>{content ? content : fallback}</span>
          <span className="formHeading">{formHeading}</span>
          <span className="form-container">
            <PSAForm value={''} placeholder={''} formHeading={''} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubmitPSA;
