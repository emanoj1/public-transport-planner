import React, { useState } from 'react';
import axios from 'axios';

const Planner = ({ setTimetable }) => {
  const [formData, setFormData] = useState({ start: '', end: '', city: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/timetable', formData);
      setTimetable(response.data);
    } catch (error) {
      console.error('Error fetching timetable', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="start" placeholder="Start Location" onChange={handleChange} required />
      <input type="text" name="end" placeholder="End Location" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <button type="submit">Get Timetable</button>
    </form>
  );
};

export default Planner;
