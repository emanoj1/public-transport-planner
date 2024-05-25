import React, { useState } from 'react';
import axios from 'axios';

const Planner = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handlePlanJourney = async () => {
    try {
      // Call Stop_Finder API to get stop IDs for from and to locations
      const fromResponse = await axios.get(`STOP_FINDER_API_URL?location=${from}`);
      const toResponse = await axios.get(`STOP_FINDER_API_URL?location=${to}`);
      
      const fromStopId = fromResponse.data.stopId;
      const toStopId = toResponse.data.stopId;

      // Call Departure_Mon API to get departure time for the journey
      const departureTimeResponse = await axios.get(`DEPARTURE_MON_API_URL?fromStopId=${fromStopId}&toStopId=${toStopId}&date=${date}`);
      const departureTime = departureTimeResponse.data.departureTime;

      // Process departureTime as needed
      console.log('Departure Time:', departureTime);
    } catch (error) {
      console.error('Error planning journey:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handlePlanJourney}>Plan Journey</button>
    </div>
  );
};

export default Planner;

