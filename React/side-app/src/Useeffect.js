import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    // const [count,setCount] = useState(0);
    const [h1,setCount] = useState(0);

    useEffect(()=>{
        // document.title=`Hello Dhrumil ${count} times`;
        document.title = `Hello Patel ${h1} times`;
    })

  return (
    <div>
      <h1>Hello  dj </h1>
      <button onClick={()=>setCount(h1+1)}>Click Hear</button>
    </div>
  )
}
