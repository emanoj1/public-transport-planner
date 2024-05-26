import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = ({ setTimetable }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlanJourney = async (e) => {
    e.preventDefault();

    try {
      // Get the stop ID for the 'from' location
      const fromResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/stop_finder', {
        params: {
          outputFormat: 'rapidJSON',
          type_sf: 'poi',
          name_sf: formData.from,
          coordOutputFormat: 'EPSG:4326',
          TfNSWSF: true,
          version: '10.2.1.42',
        },
        headers: { 'Authorization': 'YOUR_API_KEY' }, // Replace with your actual API key
      });
      const fromStopId = fromResponse.data.locations[0].id;

      // Get the stop ID for the 'to' location
      const toResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/stop_finder', {
        params: {
          outputFormat: 'rapidJSON',
          type_sf: 'poi',
          name_sf: formData.to,
          coordOutputFormat: 'EPSG:4326',
          TfNSWSF: true,
          version: '10.2.1.42',
        },
        headers: { 'Authorization': 'YOUR_API_KEY' }, // Replace with your actual API key
      });
      const toStopId = toResponse.data.locations[0].id;

      // Get the timetable data
      const timetableResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/departure_mon', {
        params: {
          outputFormat: 'rapidJSON',
          coordOutputFormat: 'EPSG:4326',
          mode: 'direct',
          type_dm: 'stop',
          name_dm: fromStopId,
          itdDate: formData.date.replace(/-/g, ''), // Format the date as YYYYMMDD
          departureMonitorMacro: true,
          TfNSWDM: true,
          version: '10.2.1.42',
        },
        headers: { 'Authorization': 'YOUR_API_KEY' }, // Replace with your actual API key
      });
      setTimetable(timetableResponse.data.stopEvents);
    } catch (error) {
      console.error('Error planning journey:', error);
    }
  };

  return (
    <div>
      <header>
        <img src="/path/to/logo.png" alt="Commute Planner Logo" style={{ height: '50px' }} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <h1>Welcome to Commute Planner</h1>
        <p>Plan your journey on the city's public transport system with ease.</p>

        <form onSubmit={handlePlanJourney}>
          <div>
            <label htmlFor="from">From:</label>
            <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input type="text" id="to" name="to" value={formData.to} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <button type="submit">Plan Journey</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Commute Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;


