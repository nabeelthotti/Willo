// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="App-logo"
            alt="logo"
          />
        </Link>
        <div className="contact-container">
          <span
            onClick={() => setShowContact(!showContact)}
            className="App-contact-text"
          >
            Contact
          </span>
          {showContact && (
            <div className="contact-info">
              <p>Email: info@willow.cc</p>
            </div>
          )}
        </div>
      </header>

      <div className="App-background"></div>

      {/* Added the tree image here */}
      <img
        src={`${process.env.PUBLIC_URL}/tree.png`}
        className="Tree-image"
        alt="Tree"
      />

      <footer className="App-footer">
        <p>&copy; 2024 WILLO - ALL RIGHTS RESERVED.</p>
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
