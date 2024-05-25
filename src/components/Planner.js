import React, { useState } from 'react';
import axios from 'axios';

const Planner = ({ setTimetable }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/timetable', { from, to, date });
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

