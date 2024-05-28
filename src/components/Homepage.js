import React from 'react';
import { Link } from 'react-router-dom';
import { TKUITripPlanner } from 'tripkit-react';
import logo from '../assets/public-transport-planner-logo.png';

const Homepage = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Public Transport Planner Logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Plan your journey</h1>
        <p>on the city's public transport system with ease.</p>
        <TKUITripPlanner />
      </main>
      <footer>
        <p>&copy; 2024 Public Transport Planner</p>
      </footer>
    </div>
  );
};

export default Homepage;


