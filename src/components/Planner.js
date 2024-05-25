import React, { useState } from 'react';
import axios from 'axios';

const Planner = ({ setTimetable }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://opendata.transport.nsw.gov.au/dataset/50ccd787-0d7e-4bcf-9c12-84ca3ab3e897/resource/ad58515a-3593-4d72-952e-a49c859e1db8/download/getschedule-v2_1.0.json', {
        params: { from, to, date }
      });
      setTimetable(response.data);
    } catch (error) {
      console.error('Error fetching timetable:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          FROM:
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          TO:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Plan Journey</button>
    </form>
  );
};

export default Planner;

