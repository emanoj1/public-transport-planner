import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TKUITripPlanner } from 'tripkit-react';
import Homepage from './components/Homepage';
import ResultsPage from './components/ResultsPage';
import About from './components/About';
import Contact from './components/Contact';
import WorldTransit from './components/WorldTransit';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // Read API key from environment variable
  const apiKey = process.env.REACT_APP_TRIPGO_API_KEY;

  // eslint-disable-next-line no-unused-vars
  const config = {
    apiKey: apiKey,
    headers: {
      'X-TripGo-Key': apiKey
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage apiKey={apiKey} />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worldtransit" element={<WorldTransit />} />
          <Route path="/planner" element={<TKUITripPlanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;