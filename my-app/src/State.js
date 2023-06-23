import React from "react";

class State extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'Dhrumil',
            count : 1
        }
    }
    UpdateState()   // is a function
    {
        this.setState({
             name:'dhruvil',
             count:this.state.count+1
        })
    }
    render()
    {
       return(
          <div>
              <center>
               <h1>Name :{this.state.name}</h1>
               <h2>count :{this.state.count}</h2>
               <button onClick={()=>{this.UpdateState()}} >Update from hear</button>
              </center>     
          </div>
       );
    } 
}

export default State;