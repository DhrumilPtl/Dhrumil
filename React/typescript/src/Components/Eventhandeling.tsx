import React, { useState } from "react";

interface Istate {
  count: number;
}

const EventHandling: React.FC = () => {
  const [state, setState] = useState<Istate>({ count: 0 });

  const handleIncrement = () => {
    setState({ count: state.count + 1 });
  };

  const handleDecrement = () => {
    setState({ count: state.count - 1 });
  };

  return (
    <center>
      <div>
        <h1>It's an event handling</h1>
        <h2>{state.count}</h2>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
      </div>
    </center>
  );
};

export default EventHandling; // Component names should start with an uppercase letter
