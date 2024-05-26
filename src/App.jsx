import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TKRoot, TKUITripPlanner } from 'tripkit-react';
import Homepage from './components/Homepage';
import ResultsPage from './components/ResultsPage';
import About from './components/About';
import Contact from './components/Contact';

const config = {
  apiKey: 'bf08c8030c2c23fca1194bbfb2b50d60', // TripGo API key
  headers: {
      // Header to your API calls to authenticate
      'X-Specific-Header': 'X-TripGo-Key'
  }
};

function App() {
  return (
    <TKRoot config={config}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planner" element={<TKUITripPlanner />} />
          </Routes>
        </div>
      </Router>
    </TKRoot>
  );
}

export default App;




