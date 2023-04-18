import React from "react";
import "../src/styles/getInvolved.css";
// import SideButtons from './lib/SideButtons';
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import woodFrame from "./assets/woodFrame.gif";
import stock_image_1 from "./assets/stock_image_1.jpeg";
import stock_image_2 from "./assets/stock_image_2.jpeg";
import stock_image_3 from "./assets/stock_image_3.jpeg";
import stock_image_4 from "./assets/stock_image_4.jpeg";
import stock_image_5 from "./assets/stock_image_5.jpeg";
import stock_image_6 from "./assets/stock_image_6.jpeg";

import Become_DJ_Plank from "./assets/Become_A_DJ_Plank.png";
import Submit_A_PSA from "./assets/Submit_PSA_Plank_2.png";
import Donate_Plank_2 from "./assets/Donate_Plank.png";
import Volunteer_Plank from "./assets/Volunteer_Plank_2.png";

import Scroll from "./assets/Scroll.png";

// import Frame1 from './assets/Frame1.gif'

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
  const { loading, error, data } = useQuery(GET_INVOVLED_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  const heading = data?.allGetInvolved[0]?.heading;
  const textContent = data?.allGetInvolved[0]?.contentRaw[0]?.children[0]?.text;
  const imageOverlayText = [
    data?.allGetInvolved[0]?.imageOverlayOne,
    data?.allGetInvolved[0]?.imageOverlayTwo,
    data?.allGetInvolved[0]?.imageOverlayThree,
    data?.allGetInvolved[0]?.imageOverlayFour,
  ];
  const fallback = (
    <span>
      KXCJ-LP is an FCC-licensed, volunteer-run, community-based FM radio
      station serving the city of Cave Junction, Oregon, and the surrounding
      Illinois River Valley. We provide listeners with a valuable source for
      news and information that addresses both local and regional interests. We
      also provide and produce music and other cultural programming that does
      not duplicate what is already available on the local airwaves. We train
      local people-- especially youth and elders-- to produce their own ongoing
      radio shows. We seek to increase the cultural and economic vitality of the
      Illinois Valley.
    </span>
  );

  const images = data.allGetInvolved[0]?.referenceList;
  const fallbackImages = [
    stock_image_1,
    stock_image_2,
    stock_image_3,
    stock_image_4,
    stock_image_5,
    stock_image_6,
  ];
  const lorem = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum ",
  ];
  const links = ["/becomeadj", "/submit", "/donate", "/volunteer"];
  const fallbackCaptions = [
    "Donate",
    "Submit A PSA",
    "Shop",
    "Become A DJ",
    "Volunteer",
    "Home",
  ];
const planksArr = [Become_DJ_Plank,Submit_A_PSA, Donate_Plank_2, Volunteer_Plank ]

  return (
    <div className="getInvolvedContainer">
    <div className="top-level-container">
      <div className="get-involved-glass-container">
        <span className="texts">
        {/* <h1>{heading ? heading : "Volunteer-run, community-based radio"}</h1>
        <p>{textContent ? textContent : fallback}</p> */}
        <img src={Scroll} alt="scroll" />
        </span>
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
                      <img id="images" src={image?.asset?.url} alt="button" />
                      <img id="frame" src={woodFrame} alt="frame" />
                    </div>
                    <div className="side_button">
                      <button className="button-wood-plank" id={`links-${i}`}>
                        <img src={planksArr[i]}/>
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
    </div>
  );

  //  return (
  //   <div className="outer-container">
  //     <div className="inner-container">
  //       <div className="content-container">
  //         <h1>{heading ? heading : "Volunteer"}</h1>
  //         <span>{textContent ? textContent : fallback}</span>
  //         <div className="row">
  //           {images
  //             ? images.map((image: imageType, i: any) => {
  //                 return (
  //                   <div className="gallery" key={i}>
  //                       {/* <span className="innerImageText">{lorem[0]}</span> */}
  //                       <img
  //                         className="gallery_image"
  //                         src={image?.asset?.url}
  //                         alt="button"
  //                       />
  //                       <div className="side_button">
  //                         <a href={links[i]}>
  //                           <button className="button-wood-plank">
  //                             {image.caption}
  //                           </button>
  //                         </a>
  //                       </div>

  //                   </div>
  //                 );
  //               })
  //             : fallbackImages.map((image, i) => {
  //                 return (
  //                   <div className="gallery" key={i}>
  //                     <a href={links[i]}>
  //                       <span className="innerImageText">{lorem[0]}</span>
  //                       <img src={image} alt="Cinque Terre" />
  //                       <div className="desc">
  //                         Add a description of the image here
  //                       </div>
  //                       <div className="side_button">
  //                         <a href={links[i]}>
  //                           <button className="button-wood-plank">
  //                             {fallbackCaptions[i]}
  //                           </button>
  //                         </a>
  //                       </div>
  //                     </a>
  //                   </div>
  //                 );
  //               })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default GetInvolved;
