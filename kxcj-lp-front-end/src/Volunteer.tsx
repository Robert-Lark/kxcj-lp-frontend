import React from "react";
import "../src/styles/innerPages.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import TemplateFormPage from "./TemplateFormPage";

const VOLUNTEER_QUERY = gql`
  query GetAllVolunteer {
    allVolunteer {
      heading
      contentRaw
      formHeading
    }
  }
`;

function Volunteer() {
  const { loading, error, data } = useQuery(VOLUNTEER_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;
  
  //API CONTENT
  const formHeading = data?.allVolunteer[0]?.formHeading;
  const heading = data?.allVolunteer[0]?.heading;
  const content = data?.allVolunteer[1]?.contentRaw[0]?.children[0]?.text;

  const fallback = (
    <span>
      An easy way to get involved is to come to our monthly volunteer nights!
      Every 2nd Tuesday 1:00-3:00pm and every 2nd Wednesday 6:30-8:30pm. You can
      join other DJs and volunteers with projects around the station. Snacks are
      encouraged! We train local people-- especially youth and elders-- to
      produce their own on-going radio shows. However, there are many other ways
      to get involved in your local radio station, such as cataloging donated
      music, helping organize fundraisers, maintaining the website and improving
      our studio. We rely on the contributions of you, our community, to make
      KXCJ a beacon to residents and visitors alike. You are welcome to submit
      information about your volunteer interests and availability in the form
      below.
    </span>
  );

  return (
    <div className="outer-container">
      <div className="inner-container">
        <TemplateFormPage
          content={content}
          heading={heading}
          formHeading={formHeading}
          query={VOLUNTEER_QUERY}
          fallBackHeading={"Volunteer"}
          FallBackBody={fallback}
        />
      </div>
    </div>
  );
}

export default Volunteer;
