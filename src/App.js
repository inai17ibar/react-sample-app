import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Clock2 from './Clock2.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  return (
    <Clock2 time={time.toLocaleTimeString()} />
  );
}