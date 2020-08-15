import React from 'react'
import '../resources/style.scss'

 function WeatherComponent() {

    return (

      <div className="card-container" >
        <Temperature />
        <Location />
        <Date />
      </div>
    );
  }

  const Temperature = () => {
    return (
      <div className="temperature">
        <p>25C</p>
      </div>
    );
  };

  const Date = () => {
    return <p>Aug 15, 2020</p>;
  };

  const Location = () => {
    return (
      <div className="location">
        <p>Bangalore, IN</p>
      </div>
    );
  };




export default WeatherComponent;