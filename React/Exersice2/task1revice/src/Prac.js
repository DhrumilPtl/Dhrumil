import React, { useState } from 'react';


export default function Prac() 
{
    const [count,setCount] = useState(0) // state 
  return (
    <div>
      <h1>H O C</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Submit</button>
    </div>
  )
}
