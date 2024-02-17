import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({ data }) => {
  return (
    <div className="weather-list">
      {data && (
        <WeatherCard
          key={data.id}
          city={data.name}
          country={data.sys.country}
          temp={data.main.temp}
          description={data.weather[0].description}
          icon={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        />
      )}
    </div>
  );
};

export default WeatherList;
