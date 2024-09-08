import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/whatsOn.css"; // Keep your styles

// GraphQL query to fetch the data from Sanity
const WHATS_ON_QUERY = gql`
  query GetWhatsOn {
    allWhatsOn {
      _id
      caption
      image {
        asset {
          url
        }
      }
      orientation
    }
  }
`;

interface WhatsOnData {
  _id: string;
  caption: string;
  image: {
    asset: {
      url: string;
    };
  };
  orientation: "vertical" | "horizontal";
}

function WhatsOn() {
  const { loading, error, data } = useQuery<{ allWhatsOn: WhatsOnData[] }>(
    WHATS_ON_QUERY
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="background-test-whatsOn">
    <div className="image-container-whatsOn">
      <div className="whatsOn-content">
        {data?.allWhatsOn.map((item) => (
          <div key={item._id} className={`whatsOn-item ${item.orientation}`}>
            <img
              src={item.image.asset.url}
              alt={item.caption}
              className="whatsOn-img"
            />
            <p className="whatsOn-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default WhatsOn;
