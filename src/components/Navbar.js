import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/public-transport-planner-logo-2.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-wrapper">
          <img src={logo} alt="Public Transport Planner Logo" className="navbar-logo" />
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
