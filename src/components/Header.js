import React from 'react';
import { Link } from 'react-router-dom';
import logo from './public-transport-planner-logo.png';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Public Transport Planner Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

