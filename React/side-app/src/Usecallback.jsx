import React, { useState } from "react";

export default function Usecallback() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(100);
  const [todos, setTodos] = useState([]);

  const Increment = () => {
    console.log("Krupen");
    setPlus(plus + 1);
  };

  const Decrement = () => {
    setMinus(minus - 1);
  };

  return (
    <div>
      <h1>Usecallback</h1>
      <span>{plus}</span>
      <br />
      <button onClick={() => Increment()}>Increment</button>
      <br />
      <br />
      <span>{minus}</span>
      <br />
      <button onClick={() => Decrement()}>Decrement</button>
      <br />
      <br />
    </div>
  );
}
