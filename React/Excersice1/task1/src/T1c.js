import React, { Component } from 'react';

export default class T1c extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString(),
      day: new Date().toLocaleString('en-US', { weekday: 'long' }),
      month: new Date().toLocaleString('en-US', { month: 'long' }),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime() {
    const currentTime = new Date();
    this.setState({
      time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: currentTime.toLocaleDateString(),
      day: currentTime.toLocaleString('en-US', { weekday: 'long' }),
      month: currentTime.toLocaleString('en-US', { month: 'long' }),
    });
  }

  render() {
    const { time, date, day, month } = this.state;
    const timeWithPeriod = time + (new Date().getHours() < 12 ? " AM" : " PM");

    return (
      <div>
        <h1>{timeWithPeriod}</h1> {/* Display the formatted time with AM/PM */}
        <h2>{month} {date}</h2> {/* Display the month and date */}
        <h3>{day}</h3> {/* Display the day of the week */}
      </div>
    );
  }
}
