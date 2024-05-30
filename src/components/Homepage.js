import React from 'react';
import { TKRoot, TKUITripPlanner } from 'tripkit-react';

const Homepage = ({ apiKey }) => {
  const config = {
    apiKey: apiKey,
    headers: {
      'X-TripGo-Key': apiKey
    }
  };

  return (
    <div className="content-container">
      <main>
        <h1>Plan your journey on the city's public transport system with ease!</h1>
        <TKRoot config={config}>
          <div style={{ height: '600px', position: 'relative', marginTop: '20px' }}>
            <TKUITripPlanner />
          </div>
        </TKRoot>
      </main>
      <footer>
        <p>&copy; 2024 commuter fyi | Powered by Skedgo </p>
      </footer>
    </div>
  );
};

export default Homepage;
