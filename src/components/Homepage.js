import React from 'react';
import { Link } from 'react-router-dom';
import { TKRoot, TKUITripPlanner } from 'tripkit-react';

const config = {
  apiKey: 'bf08c8030c2c23fca1194bbfb2b50d60', // TripGo API key
  headers: {
    // Header to your API calls to authenticate
    'X-Specific-Header': 'X-TripGo-Key'
  }
};

const Homepage = () => {
  return (
    <div className="content-container">

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



