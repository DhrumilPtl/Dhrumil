import React, { useState } from "react";

const App  = () => {

    let time = new Date().toLocaleTimeString(); // for currrent time
    let date = new Date().toLocaleDateString(); // for current date
   // let [cday, setCday] = useState(new Date().toLocaleString("en-US", { weekday: "long" }));

    const[ctime,setCtime] = useState(time);  // is functional state
    const[cdate,setCdate] = useState(date);

 
    function Updatetime()
    {
        time = new Date().toLocaleTimeString();
         setCtime(time);
        date = new Date().toLocaleDateString();
         setCdate(date);
    }

    setInterval(Updatetime,1000)
    

    return(
     <div>
         <h1>{ctime}</h1>   
         <h2>{cdate}</h2>
     </div>
 )

}

export default App;