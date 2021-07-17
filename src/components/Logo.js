import React from 'react';
import logo from './favicon/android-chrome.png'; 



function Logo() {
  // Import result is the URL of your image
  return <div className="App-logo-div">
      <img className="App-logo" src={logo} alt="Logo" />
  </div>;
}

export default Logo;