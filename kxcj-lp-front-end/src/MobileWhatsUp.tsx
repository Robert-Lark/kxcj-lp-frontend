import React from "react";
import "./styles/mobilePages.css";
import back from "./assets/Back_Plank.png";
import { useQuery, gql } from "@apollo/client";

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

function MobileWhatsUp() {
  const { loading, error, data } = useQuery<{ allWhatsOn: WhatsOnData[] }>(
    WHATS_ON_QUERY
  );

  if (loading) return <h1 style={{ fontSize: "3rem" }}>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="mobileWhatsUp">
      <div className="mobile-page-container">
        {data?.allWhatsOn[0] && (
          <div className={`whatsOn-item ${data.allWhatsOn[0].orientation}`}>
            <div
              className={`whatsOn-img-container ${
                data.allWhatsOn[0].caption ? "with-caption" : ""
              }`}
            >
              <img
                src={data.allWhatsOn[0].image.asset.url}
                alt={data.allWhatsOn[0].caption}
                className="whatsOn-img"
              />
              <p className="whatsOn-caption">{data.allWhatsOn[0].caption}</p>
            </div>
          </div>
        )}
        <a href="/">
          <img src={back} alt="back button" />
        </a>
      </div>
    </div>
  );
}

export default MobileWhatsUp;
