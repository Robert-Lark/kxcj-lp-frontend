import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/whatsOn.css"; // Keep your styles
import SideButtons from "./lib/SideButtons";
import { useLocation } from "react-router-dom";

// 1. UPDATE THE GRAPHQL QUERY
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

  // Destructure the first item for cleaner access
  const whatsOnItem = data?.allWhatsOn[0];

  return (
    <div>
      <div className="listenNowContainer whatson">
        <div className="sidebar">
          <SideButtons currentPage={location.pathname} listenNow />
        </div>
        <div className="whatsOn-content">
          {whatsOnItem && (
            <div className={`whatsOn-item ${whatsOnItem.orientation}`}>
                <img
                  src={whatsOnItem.image.asset.url}
                  alt={whatsOnItem.caption}
                  className="whatsOn-img"
                />
                <p className="whatsOn-caption">{whatsOnItem.caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhatsOn;