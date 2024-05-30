import React from 'react';
import { TKRoot, TKUITripPlanner } from 'tripkit-react';
import skedgoLogoFooter from '../assets/skedgo_logo_large.webp';
import './Homepage.css';


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
      <p></p>
      <div className="info-box">
        <p> &#128652; Up-to-the minute information on predicted departure/arrival times | Covers 400+ cities and regions and integrating 4000+ transport service providers &#128643;</p>
      </div>

      <footer>
      <p>Powered by <img src={skedgoLogoFooter} alt="SkedGo Logo" className="skedgoLogoFooter" />, a mobility-as-a-Service platform, shaping the global future of mobility and smart cities.</p>
        <p>&copy; 2024 commuterfyi | Made with &#9825; in Australia 🇦🇺 </p>
      </footer>
    </div>
  );
};

export default Homepage;
