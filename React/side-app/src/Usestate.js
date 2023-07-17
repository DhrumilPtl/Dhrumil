import React, { useState } from 'react'

export default function Usestate() {

    const[count,setCount] = useState(0);

  return (
    <div>
      <h1>Hello dhrumil {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click hear</button>
    </div>
  )
}
