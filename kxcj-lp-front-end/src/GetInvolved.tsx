import React from 'react';
import '../src/styles/innerPages.css';
import SideButtons from './lib/SideButtons';
import {useQuery, gql} from "@apollo/client"
import ErrorState from './lib/ErrorState';
import stock_image_1 from './assets/stock_image_1.jpeg'
import stock_image_2 from './assets/stock_image_2.jpeg'
import stock_image_3 from './assets/stock_image_3.jpeg'
import stock_image_4 from './assets/stock_image_4.jpeg'
import stock_image_5 from './assets/stock_image_5.jpeg'
import stock_image_6 from './assets/stock_image_6.jpeg'

const GET_INVOVLED_QUERY = gql`
    query GetAllVolunteer {
        allVolunteer {
            heading
            contentRaw
            referenceList {
            asset {
              url
            }
          }
        }
    }
`

function GetInvolved() {
  const {loading, error, data} = useQuery(GET_INVOVLED_QUERY)
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error}/>;

  const heading = data?.allVolunteer[0]?.heading
  const textContent = data?.allVolunteer[1]?.contentRaw[0]?.children[0]?.text
  const fallback = <span>KXCJ-LP is an FCC-licensed, volunteer-run, 
                    community-based FM radio station serving the city of Cave Junction, 
                    Oregon, and the surrounding Illinois River Valley. We provide listeners 
                    with a valuable source for news and information that addresses both local 
                    and regional interests. We also provide and produce music and other cultural 
                    programming that does not duplicate what is already available on the local airwaves. 
                    We train local people-- especially youth and elders-- to produce their own ongoing 
                    radio shows. We seek to increase the cultural and economic vitality of the Illinois Valley.</span>
  
  const images = data.allVolunteer[1]?.referenceList
  const fallbackImages = [stock_image_1, stock_image_2, stock_image_3, stock_image_4, stock_image_5, stock_image_6]

  return (
    <div className='outer-container'>
    <div className="inner-container">
        <SideButtons back/>
        <div className="content-container">
            <h1>{heading ? heading : 'Volunteer'}</h1>
            <span>
                {textContent ? textContent : fallback}
            </span>
            <div className='row'>
              {images ? images.map((image: { asset: { url: string | undefined; }; }, i: React.Key | null | undefined) => {
                return (
                  <div className="gallery" key={i}>                  
                    <img src={image?.asset?.url} alt="Cinque Terre"/>
                  </div>
                )
                }) : fallbackImages.map((image, i)=>{
                  return (
                    <div className="gallery" key={i}>                    
                      <img src={image} alt="Cinque Terre"/>
                    </div>
                  )
                })}
              </div>
            </div>
            
    </div>
</div>
  );
}

export default GetInvolved;
