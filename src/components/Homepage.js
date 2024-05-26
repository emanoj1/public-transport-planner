import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = ({ setTimetable }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlanJourney = async (e) => {
    e.preventDefault();

    try {
      // Function to get stop ID for a given location
      const getStopId = async (location) => {
        const response = await axios.get('https://api.transport.nsw.gov.au/v1/tp/stop_finder', {
          params: {
            outputFormat: 'rapidJSON',
            type_sf: 'any',
            name_sf: location,
            coordOutputFormat: 'EPSG:4326',
            TfNSWSF: true,
            version: '10.2.1.42',
          },
          headers: { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJxOFdnM1ladUltVnRfZDFDbS03S0ozMmJHVVNDeWl2d2ZSbEhHMndiNU9vIiwiaWF0IjoxNzE2NjgzMzk2fQ.rAZINqZwGFU5TrwfrPdeRo7URoWmmyrXHHi-wy59sZw' }, // Replace with your actual API key
        });
        const bestMatch = response.data.locations.find(loc => loc.isBest);
        return bestMatch?.properties?.stopId || bestMatch?.id;
      };

      // Get stop IDs for 'from' and 'to' locations
      const fromStopId = await getStopId(formData.from);
      const toStopId = await getStopId(formData.to);

      // Handle the case where stop IDs are not found
      if (!fromStopId || !toStopId) {
        console.error('Stop IDs not found for the provided locations');
        return;
      }

      // Get the timetable data using departure_mon API
      const timetableResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/departure_mon', {
        params: {
          outputFormat: 'rapidJSON',
          coordOutputFormat: 'EPSG:4326',
          mode: 'direct',
          type_dm: 'stop',
          name_dm: fromStopId,
          itdDate: formData.date.replace(/-/g, ''), // Format the date as YYYYMMDD
          itdTime: '1200', // Fixed time for the example, update as necessary
          departureMonitorMacro: true,
          TfNSWDM: true,
          version: '10.2.1.42',
        },
        headers: { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJxOFdnM1ladUltVnRfZDFDbS03S0ozMmJHVVNDeWl2d2ZSbEhHMndiNU9vIiwiaWF0IjoxNzE2NjgzMzk2fQ.rAZINqZwGFU5TrwfrPdeRo7URoWmmyrXHHi-wy59sZw' }, // Replace with your actual API key
      });

      setTimetable(timetableResponse.data.stopEvents);
      navigate('/results');
    } catch (error) {
      console.error('Error planning journey:', error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div>
      <header>
        <img src="/public-transport-planner-logo.png" alt="Transport Planner Logo" style={{ height: '50px' }} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <h1>Welcome to your trip planner</h1>
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
        <p>&copy; 2024 Public Transport Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;