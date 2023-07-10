//import React from 'react'
//import Props from './Props'

// export default function Profile(Props) 
// {
    
//   return (
//     <div>
//       <h1>{Props.text.name}</h1>
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class Propsf extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text.name}</h1>
      </div>
    )
  }
}
