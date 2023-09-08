import React from 'react';
import './App.css';
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1); //renderingされるまでnumberは更新されない
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
