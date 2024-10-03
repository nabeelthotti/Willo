import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleBackground = () => {
    setShowBackground(true);
  };

  const hideBackground = () => {
    setShowBackground(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://www.instagram.com/willo_cc/?igsh=MzRlODBiNWFlZA%3D%3D"
          onClick={hideBackground}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="App-logo"
            alt="logo"
          />
        </a>
        <div className="contact-container">
          <span
            onClick={() => setShowContact(!showContact)}
            className="App-contact-text"
          >
            CONTACT
          </span>
          {showContact && (
            <div className="contact-info">
              <p>info@willow.cc</p>
            </div>
          )}
        </div>
      </header>

      <div className={`App-background ${showBackground ? 'show' : ''}`}></div>

      <img
        src={`${process.env.PUBLIC_URL}/tree.png`}
        className="Tree-image"
        alt="Tree"
        onClick={toggleBackground}
      />

      <footer className="App-footer">
        <p>&copy; 2024 WILLO - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
