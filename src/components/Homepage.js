import React, { useState } from 'react';
import axios from 'axios';

const Homepage = ({ setTimetable }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handlePlanJourney = async (e) => {
    e.preventDefault();

    try {
      const stopFinderResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/stop_finder', {
        params: {
          outputFormat: 'rapidJSON',
          type_sf: 'any',
          name_sf: formData.from,
          coordOutputFormat: 'EPSG:4326',
          TfNSWSF: true,
          version: '10.2.1.42'
        },
        headers: {
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJxOFdnM1ladUltVnRfZDFDbS03S0ozMmJHVVNDeWl2d2ZSbEhHMndiNU9vIiwiaWF0IjoxNzE2NjgzMzk2fQ.rAZINqZwGFU5TrwfrPdeRo7URoWmmyrXHHi-wy59sZw'
        }
      });

      const fromStop = stopFinderResponse.data.locations[0].id;

      const departureMonResponse = await axios.get('https://api.transport.nsw.gov.au/v1/tp/departure_mon', {
        params: {
          outputFormat: 'rapidJSON',
          coordOutputFormat: 'EPSG:4326',
          mode: 'direct',
          type_dm: 'any',
          name_dm: fromStop,
          itdDate: formData.date.replace(/-/g, ''),
          itdTime: '1200',
          departureMonitorMacro: true,
          TfNSWDM: true,
          version: '10.2.1.42'
        },
        headers: {
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJxOFdnM1ladUltVnRfZDFDbS03S0ozMmJHVVNDeWl2d2ZSbEhHMndiNU9vIiwiaWF0IjoxNzE2NjgzMzk2fQ.rAZINqZwGFU5TrwfrPdeRo7URoWmmyrXHHi-wy59sZw'
        }
      });

      setTimetable(departureMonResponse.data);

    } catch (error) {
      console.error('Error planning journey:', error);
    }
  };

  return (
    <div>
      {/* Welcome Message */}
      <h1>Plan your journey on the city's public transport system with ease!</h1>
      <p>Enter your start and end location, and choose your date of travel below:</p>

      {/* Planner Form */}
      <form onSubmit={handlePlanJourney}>
        <label>
          From:
          <input
            type="text"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            required
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </label>
        <button type="submit">Plan Journey</button>
      </form>

      {/* Footer */}
      <footer>
        <p>© 2023 Public Transport Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
