import React, { useState } from 'react';
import axios from 'axios';

const Planner = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handlePlanJourney = async () => {
    try {
      // Call Stop_Finder API to get stop IDs for from and to locations
      const fromResponse = await axios.get(`https://api.transport.nsw.gov.au/v1/tp/stop_finder`, {
        params: {
          outputFormat: 'rapidJSON',
          type_sf: 'poi',
          name_sf: from,
          coordOutputFormat: 'EPSG:4326',
          TfNSWSF: true,
          version: '10.2.1.42'
        }
      });
      const toResponse = await axios.get(`https://api.transport.nsw.gov.au/v1/tp/stop_finder`, {
        params: {
          outputFormat: 'rapidJSON',
          type_sf: 'poi',
          name_sf: to,
          coordOutputFormat: 'EPSG:4326',
          TfNSWSF: true,
          version: '10.2.1.42'
        }
      });
      
      const fromStopId = fromResponse.data.locations[0].id;
      const toStopId = toResponse.data.locations[0].id;

      // Call Departure_Mon API to get departure time for the journey
      const departureTimeResponse = await axios.get(`https://api.transport.nsw.gov.au/v1/tp/departure_mon`, {
        params: {
          outputFormat: 'rapidJSON',
          coordOutputFormat: 'EPSG:4326',
          mode: 'direct',
          type_dm: 'stop',
          name_dm: fromStopId,
          itdDate: date,
          itdTime: '1200', // Example time (may need to adjust this)
          departureMonitorMacro: true,
          TfNSWDM: true,
          version: '10.2.1.42'
        }
      });
      const departureTime = departureTimeResponse.data.departureList[0].time;

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