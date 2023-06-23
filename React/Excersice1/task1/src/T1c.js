import React, { Component } from 'react'

export default class T1c extends Component {

  constructor(props){
    super(props);

    this.state={                             // is just set the time and date in varriable 
       time:new Date().toLocaleTimeString(),
       date:new Date().toLocaleDateString(),
    };
  }

  componentDidMount()       // hear we haave to call function and set time
  {
    this.timer = setInterval(()=> {
       this.updateTime();
    },1000);
  }

  componentWillUnmount()
  {
    clearInterval(this.timer);
  }

  updateTime(){
    const currenttime = new Date();
    this.setState({
      time : currenttime.toLocaleTimeString(),
      date : currenttime.toLocaleDateString(),
    })
  }

  render() {
    const{time,date}=this.state;

    return (
      <div>
        <h1>{time}</h1>
        <h2>{date}</h2>
      </div>
    )
  }
}
