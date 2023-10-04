"use client"; // This is a client component

import { useState, useEffect } from 'react';
import TimePicker from './TimePicker';

function PomodoroTimer() {
  const [duration, setDuration] = useState(25);
  const [timeLeft, setTimeLeft] = useState(duration*60); // duration minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      stopTimer();
      setTimeLeft(duration);
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, duration]);

  const startTimer = () => {
    setTimeLeft(duration * 60);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <TimePicker onChange={handleDurationChange} />
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
      {isRunning ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
    </div>
  );
}

export default PomodoroTimer;