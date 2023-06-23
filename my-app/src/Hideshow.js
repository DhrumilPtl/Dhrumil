import React from "react";

class Hideshow extends React.Component
{
   constructor()
   {
       super();
       this.state={
           name :'Meet',
           count :1
       }
   } 
   render()
   {
       return(
         <div>
         <center>
             <h1>My self Dhrumil Patel</h1>
          </center>
          <button onClick={()=>{alert("hello")}}>Click Hear</button>   
         </div>
       );
   }
}

export default Hideshow;