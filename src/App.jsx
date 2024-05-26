import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import ResultsPage from './components/ResultsPage';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [timetable, setTimetable] = useState([]);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage setTimetable={setTimetable} />} />
        <Route path="/results" element={<ResultsPage timetable={timetable} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

