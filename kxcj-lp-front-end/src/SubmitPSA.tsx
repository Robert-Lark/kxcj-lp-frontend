import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import SideButtons from "./lib/SideButtons";
import PSAForm from "./forms/psa/PSAForm";
import { useState } from "react";

const SUBMITPSA_QUERY = gql`
  query allSubmitPSA {
    allSubmitPSA {
      heading
      contentRaw
      formHeading
    }
  }
`;

function Modal(props: any) {
  const { show, setShow } = props;
  if (!show) return null;
  return (
    <div className="modal">
      <h1>Example Announcement</h1>
      <p>
        <strong>Contact:</strong> Insert the contact name, institution name,
        email address and telephone number
      </p>
      <p>
        <strong>For use through:</strong> End date of announcement
      </p>
      <p>
        <strong>Length:</strong> 0:30 - Indicates announcement runs for thirty
        seconds
      </p>
      <p>
        <strong>Content:</strong> One of the most important activities to share
        with your baby is reading. That's why the illinois valley public library
        is offering the "Born to read" program for teen parents. Tutors provide
        coaching, a video offers tips, and librarians distribute books and other
        materials. The program is made possible through a grant from the four
        way community foundation. for more information, or to be a volunteer,
        call (505) 555-1234.
      </p>
      <button onClick={() => setShow(!show)}>Close</button>
    </div>
  );
}

function SubmitPSA() {
  const [show, setShow] = useState(false);
  const { data, loading, error } = useQuery(SUBMITPSA_QUERY);
  const location = useLocation();

  //modal
  function showModal() {
    setShow(!show);
  }

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
          <button className="example-psa-button" onClick={() => setShow(!show)}>
            View an example PSA here
          </button>
          <Modal show={show} setShow={setShow}/>
          <span className="formHeading">{formHeading}</span>
          <span className="form-container">
            <PSAForm value={""} placeholder={""} formHeading={formHeading} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubmitPSA;
