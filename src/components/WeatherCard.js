import React from 'react';

const WeatherCard = ({ city, country, temp, description, icon }) => {
  return (
    <div className="weather-card">
      <img src={icon} alt="Weather Icon" />
      <h2>{city}, {country}</h2>
      <h3>{temp}°C</h3>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
