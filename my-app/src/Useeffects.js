import React,{useEffect,useState} from 'react';

export default function () 
  {
    const[count,setCounter] = useState(0);

    const handle = () => {
      setCounter(count+1)
    };

  useEffect(() => {
      console.log('is working');
  },[count]);

  return (
    <div>
      <h1>{count}</h1>
      <button style={{marginTop:'50px'}} onClick={handle} >Click Hear</button>
    </div>
  )
}
