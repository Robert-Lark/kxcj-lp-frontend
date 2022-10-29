import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import TemplateFormPage from "./TemplateFormPage";

const BECOMEDJ_QUERY = gql`
  query allBecomeDJ {
    allBecomeDJ {
      heading
      contentRaw
      text
    }
  }
`;

function BecomeDJ() {
  const { data, loading, error } = useQuery(BECOMEDJ_QUERY);
  const heading = data?.allBecomeDJ[0]?.heading;
  const content = data?.allBecomeDJ[1]?.contentRaw[0]?.children[0]?.text;
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;
  const fallback = <span>Send us your idea for a new program on KXCJ!</span>;

  return (
    <div className="outer-container">
      <TemplateFormPage
        content={content}
        heading={heading}
        query={BECOMEDJ_QUERY}
        fallBackHeading={"Propose a Program"}
        FallBackBody={fallback}
      />
    </div>
  );
}

export default BecomeDJ;
