import React, { Component } from 'react'

export default class Cwm extends Component {

  constructor()
  {
      super();
      console.log('constuctor');
  }

  componentWillUnmount()
{
    console.log('willunmount');
}
  render() {
      console.log('render');
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
