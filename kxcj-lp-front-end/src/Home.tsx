import React from 'react';
import '../src/styles/home.css';
import logo from '../src/assets/logo_white_2.png'

function Home() {
  return (
    <div className="homepage">
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="buttons">
          <button className="button-5"><a href='/listenNow'>Listen Now</a></button>
          <button className="button-5"><a href='/donate'>Donate</a></button>
          <button className="button-5"><a href='/getInvolved'>Get Involved</a></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
