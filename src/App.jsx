import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/planner" render={() => <Planner setTimetable={setTimetable} />} />
        <Route path="/results" render={() => <ResultsPage timetable={timetable} />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;