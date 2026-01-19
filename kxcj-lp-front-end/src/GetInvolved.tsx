import React from "react";
import "../src/styles/getInvolved.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import { useNavigate } from "react-router-dom";
import Become_DJ_Plank from "./assets/Become_A_DJ_Plank.png";
import Submit_A_PSA from "./assets/Submit_PSA_Plank_2.png";
import Donate_Plank_2 from "./assets/Donate_Plank.png";
import Volunteer_Plank from "./assets/Volunteer_Plank_2.png";

import Scroll from "./assets/Scroll.png";
import Footer from "./lib/Footer";

const GET_INVOVLED_QUERY = gql`
  query GetAllGetInvolved {
    allGetInvolved {
      heading
      contentRaw
      referenceList {
        caption
        asset {
          url
        }
      }
      imageOverlayOne
      imageOverlayTwo
      imageOverlayThree
      imageOverlayFour
    }
  }
`;

type imageType = {
  asset: { url: string | undefined };
  caption:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
};

function GetInvolved() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_INVOVLED_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const handleClick = (link: string) => {
    navigate(link);
  };

  const images = data.allGetInvolved[0]?.referenceList;

  const links = ["/becomeadj", "/submit", "/donate", "/volunteer"];

  const planksArr = [
    Become_DJ_Plank,
    Submit_A_PSA,
    Donate_Plank_2,
    Volunteer_Plank,
  ];

  return (
    <div className="full-screen-background">
      <div className="scroll-container">
        <img src={Scroll} alt="scroll" className="scroll-image" />
      </div>
      <div className="box-container">
        
        {images.map((image: imageType, index: any) => (
          <div className="box" key={index}>
            <div
              className="box-image-container"
            >
              <img
                src={image?.asset?.url}
                alt={`Plank ${index + 1}`}
                className="box-image top"
                onClick={() => handleClick(links[index])}
              />
            </div>

            <img
              src={planksArr[index]}
              alt={`Overlay ${index + 1}`}
              className="box-image bottom"
              onClick={() => handleClick(links[index])}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default GetInvolved;
