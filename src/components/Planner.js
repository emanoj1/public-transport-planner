import React, { useState } from 'react';
import axios from 'axios';

const Planner = ({ setTimetable }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://opendata.transport.nsw.gov.au/dataset/72715aef-c79c-463c-9207-4a2d010aff40/resource/917c66c3-8123-4a0f-b1b1-b4220f32585d/download/tripplanner_swag_20231016_1.yaml', {
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

