import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  const Mi = () => {
      setCount(count - 1);
  }

  const add = () => {
    setCount(count + 1 );
  };

  return (
    <div>
      <center>
        <button onClick={Mi}>Click Hear for - </button>
        <h1>{count}</h1>
        <button onClick={add}>Click Here for +</button>
      </center>
    </div>
  );
}

export default Hooks;