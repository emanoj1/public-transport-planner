import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ResultsPage from './components/ResultsPage';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [timetable, setTimetable] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage setTimetable={setTimetable} />} />
        <Route path="/results" element={<ResultsPage timetable={timetable} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;


