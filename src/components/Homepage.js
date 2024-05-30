import React from 'react';
import { Link } from 'react-router-dom';
import { TKRoot, TKUITripPlanner } from 'tripkit-react';
import logo from '../assets/public-transport-planner-logo.png';

const config = {
  apiKey: 'bf08c8030c2c23fca1194bbfb2b50d60', // TripGo API key
  headers: {
    // Header to your API calls to authenticate
    'X-Specific-Header': 'X-TripGo-Key'
  }
};

const Homepage = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Public Transport Planner Logo" style={{ display: 'block', margin: '0 auto' }} />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Plan your journey</h1>
        <p>on the city's public transport system with ease.</p>
        <TKRoot config={config}>
          <div style={{ height: '600px', position: 'relative', marginTop: '20px' }}>
            <TKUITripPlanner />
          </div>
        </TKRoot>
      </main>
      <footer>
        <p>&copy; 2024 Public Transport Planner</p>
      </footer>
    </div>
  );
};

export default Homepage;



