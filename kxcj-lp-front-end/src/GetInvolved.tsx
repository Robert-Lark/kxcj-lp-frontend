import React from 'react';
import '../src/styles/getInvolved.css';

function GetInvolved() {
  return (
    <div className='get-involved-outer-container'>
        <div className="get-involved-container">
            <div className="get-involved-buttons">
                <button className="button-5"><a href='/listenNow'>Volunteer</a></button>
                <button className="button-5"><a href='/donate'>Submit a PSA</a></button>
                <button className="button-5"><a href='/getInvolved'>Become a DJ!</a></button>
                <button className="button-5"><a href='/donate'>Donate</a></button>
            </div>
            <div className="get-involved-content-container">
                <span>
                    <h1>Volunteer-run, community-based radio</h1>

                    <p>KXCJ-LP is an FCC-licensed, volunteer-run, community-based FM radio station serving 
                    the city of Cave Junction, Oregon, and the surrounding Illinois River Valley. 
                    We provide listeners with a valuable source for news and information that 
                    addresses both local and regional interests. We also provide and produce 
                    music and other cultural programming that does not duplicate what is 
                    already available on the local airwaves. We train local people-- 
                    especially youth and elders-- to
                    produce their own ongoing radio shows. We seek to increase the cultural 
                    and economic vitality of the Illinois Valley.</p>
                </span>
            </div>
        </div>
    </div>
  );
}

export default GetInvolved;
