// import React, { useState } from 'react'

// export default function State() {
//     const [data,setData] =useState("Dhrumil") 

//     function updateData()
//     {
//         setData('Patel');
//     }

//   return (
//     <div>
//       <h1>State in React</h1>
//       <h2>{data}</h2> 
//       <button onClick={updateData}>On Click</button>
//     </div>
//   )
// }

// state is one type of object for store data like varrible 
//  we have to use state for  updation (component) 

import React, { Component } from 'react'

export default class State extends Component {

   constructor()
   {
       super();  // is a j.s functionality whene we have to use other functionality in other class
       this.state=
       {  // is object
          data : "Dhrumil"
       }
   }

  render() {
    return (
      <div>
        <h1>Hello Patel</h1>
        <h2>{this.state.data}</h2>
        <button>Click Hear</button>
      </div>
    )
  }
}
