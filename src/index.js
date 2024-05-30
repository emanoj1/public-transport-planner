import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';  // Important: Polyfill for Metadata Reflection API
import { TKRoot, TKUITripPlanner } from 'tripkit-react';
import App from './App'; // Import App for other routes or components
import './index.css'; // Add any global styles here

const config = {
  apiKey: 'bf08c8030c2c23fca1194bbfb2b50d60', // TripGo API key
  headers: {
      // Header to your API calls to authenticate
      'X-Specific-Header': 'X-TripGo-Key'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <TKRoot config={config}>
//     <App /> {/* Render your App component within TKRoot */}
//   </TKRoot>
// );

// root.render(
//   <TKRoot config={config}>
//     <TKUITripPlanner />
//   </TKRoot>);

  root.render(
    <App />
  )

  