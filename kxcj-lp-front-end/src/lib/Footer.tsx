import "../styles/nonHoverFooter.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./ErrorState";
import non_hover_footer from "../assets/footer/non_hover_footer.png";

const FOOTER_QUERY = gql`
  query FooterQuery {
    allFooter {
      image {
        asset {
          url
        }
      }
    }
  }
`;

function Footer() {
  const { loading, error, data } = useQuery(FOOTER_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const footer = data?.allFooter?.[0].image?.asset?.url ?? non_hover_footer;

  return (
    <div className="footer-non-hover">
      <img src={footer} alt="footer" />
    </div>
  );
}

export default Footer;
