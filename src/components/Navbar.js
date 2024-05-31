import React, { useState } from 'react'; // Import useState from react
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/commuter-fyi-logo-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Link to="/">
          <img src={logo} alt="Public Transport Planner Logo" className="navbar-logo" />
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/worldtransit" onClick={toggleMenu}>World Transit</Link></li>
        </ul>
      </div>
    </nav>
  );
};
  
  export default Navbar;
