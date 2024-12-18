import React from 'react';
import './App.css';
import twitterLogo from './images/twitter.png'; 
import discordLogo from './images/discord.png';
import quackImage from './images/IMG_8348-removebg-preview 1.png'; 

const App = () => {
  return (
    <div className="container">
      <div className="image-container">
   
        <img className="image" src={quackImage} alt="Quack" />
        <div className="join-button">
          <div className="join-text">JOIN THE PACK</div>
        </div>
      </div>

  
      <div className="header">
        <div className="header-title">QUACK</div>
        <div className="nav-dots">
          <a href="https://x.com/quackpack__?s=21" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" className="nav-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord" className="nav-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
