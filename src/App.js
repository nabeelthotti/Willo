import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="App-logo" alt="logo" />
        </Link>
        <Link to="/contact" className="App-contact-text">Contact</Link>
      </header>
      <div className="App-background"></div>

      {/* Willow container with image and text */}
      <div className="Willow-container">
        <img src={`${process.env.PUBLIC_URL}/willow.png`} className="Willow-image" alt="Willow" />
        <div className="Willow-text">WILLOW</div>
      </div>

      <footer className="App-footer">
        <p>&copy; 2024 ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="App-logo" alt="logo" />
        </Link>
        <Link to="/" className="App-contact-text">Exit</Link>
      </header>
      <div className="contact-page">
        <p>Email: info@example.com</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
