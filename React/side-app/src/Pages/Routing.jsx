import React from 'react';
import Home from './Home';
import Login from './Login';
import Service from './Service';
import About from './About';

export default function Routing() {
  return (
    <div>
      <Home/>
      <Login/>
      <Service/>
      <About/>
    </div>
  )
}
