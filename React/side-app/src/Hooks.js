import React, { useState } from 'react';

export default function Hooks() {

    const[count,setCount] = useState(0);
  return (
    <div>
      <h1>Hello dhrumil {count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
      <button onClick={() => setCount('2')}>Click</button>
      <button onClick={() => setCount('3')}>Click</button>  

      {/* <button onClick={()=>setCount(count+1)}>Click on</button> */}
    </div>
  )
}
