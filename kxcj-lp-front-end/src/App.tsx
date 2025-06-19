import React from 'react';
import { Routes, Route } from "react-router-dom";

import ListenNow from './ListenNow';
import Home from './Home';
import Donate from './Donate';
import GetInvolved from './getInvolvedRedux';
import Volunteer from './Volunteer';
import SubmitPSAGood from './SubmitPSA';
import BecomeDjGood from './BecomeDJ';
import Shop from './Shop';
import Supporters from './Supporters';
import WhatsOn from './Whatson';
import History from './History';
import MobileListenNow from './MobileListenNow';
import MobileAbout from './MobileAbout';
import MobileContact from './MobileContact';
import MobileWhatsUp from './MobileWhatsUp';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listenNow" element={<ListenNow />} />
        <Route path="/listenNowMobile" element={<MobileListenNow />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/becomeadj" element={<BecomeDjGood />} />
        <Route path="/submit" element={<SubmitPSAGood />} />
        <Route path="/merch" element={<Shop />} />
        <Route path="/about" element={<History />} />
        <Route path="/supporters" element={<Supporters />} />
        <Route path="/whatsOn" element={<WhatsOn />} />
        <Route path="/mobileAbout" element={<MobileAbout />} />
        <Route path="/mobileContact" element={<MobileContact />} />
        <Route path="/mobileWhatsUp" element={<MobileWhatsUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;