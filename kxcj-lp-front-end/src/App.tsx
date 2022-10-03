import React from 'react';
import './styles.css';
import logo from '../src/assets/logo_white_2.png'


function App() {
  return (
    <div className="homepage">
      <div className="≈">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="buttons">
          <button className="button-5">Listen Now</button>
          <button className="button-5">Donate</button>
          <button className="button-5">Get Involved</button>
        </div>
      </div>
    </div>
  );
}

export default App;
