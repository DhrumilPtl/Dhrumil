import React from "react";

class Hoc extends React.Component {

    constructor()
    {
        super();
        this.state={
            name:'Dhrumil',
            Id : 0
        } 
    }

    Hey()
    {
         this.setState({
             name : 'Raj',
              Id  : this.state.Id+1 
          })  
    }   

  render() {
    console.log('Check Re-rendering');
    return (
      <div>
          <h1>Hello {this.state.name}</h1>
          <h2>Id is {this.state.Id}</h2>
          <button onClick={()=>{this.Hey()}}>Click Me</button>
      </div>
    )
  }
}

export default Hoc
