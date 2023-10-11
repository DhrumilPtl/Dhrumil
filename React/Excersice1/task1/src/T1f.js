import React, { useState, useEffect } from "react";

const App = () => {
  // Get the current time and format it with AM/PM indicator
  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${addLeadingZero(
      minutes
    )}:${addLeadingZero(seconds)} ${ampm}`;
    return formattedTime;
  };

  // Add a leading zero if the number is less than 10
  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  // Initialize state for current time
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Get the current date with desired formatting
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  return (
    <div>
      <h3>{currentDate}</h3>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default App;
