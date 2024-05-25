import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Planner from './components/Planner';
import ResultsPage from './components/ResultsPage';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [timetable, setTimetable] = useState(null);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/planner">Planner</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/planner" element={<Planner setTimetable={setTimetable} />} />
        <Route path="/results" element={<ResultsPage timetable={timetable} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
