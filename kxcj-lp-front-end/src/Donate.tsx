import React from "react";
import "./styles/donate.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import TemplateFormPage from "./TemplateFormPage";

const DONATE_QUERY = gql`
  query allDonate {
    allDonate {
      heading
      contentRaw
    }
  }
`;

function Donate() {
  const { data, loading, error } = useQuery(DONATE_QUERY);
  const heading = data?.allDonate[0]?.heading;
  const content = data?.allDonate[0]?.contentRaw[0]?.children[0]?.text;
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const fallback = (
    <>
      <h2>And talks. And informs. And entertains. And inspires.</h2>
    </>
  );

  return (
    <div className="outer-container">
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="donate@kxcj.org" />

        <input type="hidden" name="no_recurring" value="0" />
        <input
          type="hidden"
          name="item_name"
          value="KXCJ-LP is an volunteer-run, community-based FM radio station serving Cave Junction and the surrounding Illinois River Valley."
        />
        <input type="hidden" name="item_number" value="" />
        <input type="hidden" name="currency_code" value="USD" />

        <input
          type="image"
          name="submit"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          alt="Donate"
        />
        <img
          alt=""
          width="1"
          height="1"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        />
      </form>
      <TemplateFormPage
        content={content}
        heading={heading}
        query={DONATE_QUERY}
        fallBackHeading={"KXCJ-LP rocks!"}
        FallBackBody={fallback}
      />
    </div>
  );
}

export default Donate;
