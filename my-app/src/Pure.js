import React from 'react'
class Pure extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={
          name:'Dhrumil',
          Id : 1
      } 
  }
  Hello()
  {
       this.setState({
           name : 'Raj',
            Id  : this.state.Id+1 
        })  
  }
  D()
  {
      this.setState({
          name : 'Krupen'
      })
  }
  P()   
  {
      this.setState({
          name:'Meet'
      })
  }
  DP()
  {
    this.Hello();
    this.D();
    this.P();   
  }   
    render()
    {
        return(
            <div className="Pure">
              <h1>Hello{this.state.name}</h1>
              <h2>Id{this.state.Id}</h2>
              <button onClick={()=>{this.DP()}}>Click hear</button>
              <Child name={this.state.name} id={this.state.Id} />
            </div>
         );
    }
}

function Child(props) {
    return (
      <div>
        <h3>Child</h3>
        <p>Name: {props.name}</p>
        <p>ID: {props.id}</p>
      </div>
    );
  }


export default Pure;
