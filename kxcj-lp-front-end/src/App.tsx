import React from 'react';
import ListenNow from './ListenNow'
import Home from './Home'
import Donate from './Donate'
import GetInvolved from './GetInvolved'
import { Routes, Route } from "react-router-dom";
import Volunteer from './Volunteer';
import SubmitPSAGood from './SubmitPSA';

import BecomeDjGood from './BecomeDJ';
import Shop from './Shop';


function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/listenNow" element={<ListenNow />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/volunteer" element={<Volunteer />} /> 
        <Route path="/becomeadj" element={<BecomeDjGood />} />
        <Route path="/submit" element={<SubmitPSAGood />} />
        <Route path="/teeShirts" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
