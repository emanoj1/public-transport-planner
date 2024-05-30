import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/commuter-fyi-logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-wrapper">
            <Link to="/">
                <img src={logo} alt="Public Transport Planner Logo" className="navbar-logo" />
            </Link>
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
