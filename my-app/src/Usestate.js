import React, { useState } from 'react';

export default function Usestate() {  
  const [counter, setCounter] = useState(0);

  const handle = () => setCounter(counter + 1);

  return (
    <div> 
      <h1>Count: {counter}</h1>
      <button style={{ marginTop: '50px' }} onClick={handle}>Click Here</button>
    </div>
  );
}
