import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';  // Important: Polyfill for Metadata Reflection API
//import { TKRoot, TKUITripPlanner } from 'tripkit-react';
import App from './App'; // Import App for other routes or components
import './index.css'; // Add any global styles here

const headers = {
  'X-TripGo-Key': process.env.REACT_APP_TRIPGO_API_KEY // Use API key in the header
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

  