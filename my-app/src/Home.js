import React from "react";

class Home extends React.Component {
  constructor() {
    console.log('inside the constructor');
    super();
    this.State = {
      name: 'Patel',
      count : 1
    }
  }

  change() {
    this.setState({
      name: 'Dhrumil',
      count :this.State.count+1
    });
  }

  render() {
    return (
      <div>
        <h1>Dhrumil {this.State.name}</h1>
        <h1>Count {this.State.count++}</h1>
        <button onClick={() => this.change()}>Click Me</button>
      </div>
    )
  }
}

export default Home;
