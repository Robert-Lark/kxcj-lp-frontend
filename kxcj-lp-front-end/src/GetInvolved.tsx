import React from "react";
import "../src/styles/getInvolved.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import woodFrame from "./assets/woodFrame.gif";

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
    allFooter {
      image {
        asset {
          url
        }
      }
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
  const { loading, error, data } = useQuery(GET_INVOVLED_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const imageOverlayText = [
    data?.allGetInvolved[0]?.imageOverlayOne,
    data?.allGetInvolved[0]?.imageOverlayTwo,
    data?.allGetInvolved[0]?.imageOverlayThree,
    data?.allGetInvolved[0]?.imageOverlayFour,
  ];
 

  const images = data.allGetInvolved[0]?.referenceList;

  const links = ["/becomeadj", "/submit", "/donate", "/volunteer"];

  const planksArr = [Become_DJ_Plank,Submit_A_PSA, Donate_Plank_2, Volunteer_Plank ]

  return (
    <div className="getInvolvedContainer">
    <div className="top-level-container">
      <div className="get-involved-glass-container">
        <div className="component-test">
          <img
            src={Scroll}
            alt="scroll"
            className="getInvolvedScroll"
          />
        </div>
        <div className="images-container">
          {images.map((image: imageType, i: any) => {
            return (
              <label htmlFor="links">
                <a href={links[i]}>
                <div
                  className="image-container"
                  key={i}
                  data-hover={imageOverlayText[i]}
                >
                    <div className="frames">
                      <img id={`images-${i}`} src={image?.asset?.url} alt="button" />
                      <img id="frame" src={woodFrame} alt="frame" />
                    </div>
                    <div className="side_button">
                      <button className="button-wood-plank" id={`links-${i}`}>
                        <img src={planksArr[i]} alt="planks"/>
                      </button>
                    </div>
                </div>
                </a>
              </label>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default GetInvolved;
