import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/whatsOn.css"; // Keep your styles
import SideButtons from "./lib/SideButtons";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="listenNowContainer whatson">
        <div className="sidebar">
          <SideButtons currentPage={location.pathname} listenNow />
        </div>
        <div className="whatsOn-content">
          {data?.allWhatsOn[0] && (
            <div className={`whatsOn-item2 ${data.allWhatsOn[0].orientation}`}>
              
                <img
                  src={data.allWhatsOn[0].image.asset.url}
                  alt={data.allWhatsOn[0].caption}
                  className="whatsOn-img"
                />
                <p className="whatsOn-caption">{data.allWhatsOn[0].caption}</p>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhatsOn;
