import React from 'react';
import '../src/styles/innerPages.css';
import SideButtons from './SideButtons';

function GetInvolved() {
  return (
    <div className='outer-container'>
        <div className="inner-container">
            <SideButtons />
            <div className="content-container">
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
