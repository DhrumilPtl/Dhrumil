import React, { useState } from "react";

export default function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <div>
        <h1>Hello Dhrumil Patel</h1>
        <h2>your age will be {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <button onClick={() => setCount(count - 1)}>Click</button>
      </div>
    </center>
  );
}
