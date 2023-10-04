"use client"; // This is a client component
import classes from './TimePicker.css';
import { useState } from 'react';

function TimePicker({ onChange }) {
  const [minutes, setMinutes] = useState(25);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setMinutes(value);
    onChange(value);
  };

  console.log("black");
  return (
    <div>
      <label htmlFor="minutes">Pomodoro duration (minutes):</label>
      <input type="number" id="minutes" value={minutes} onChange={handleChange} style={{color:"black"}}/>
    </div>
  );
}

export default TimePicker;
