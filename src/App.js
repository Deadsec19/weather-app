import React, { useState } from 'react';
import WeatherList from './components/WeatherList';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      alert('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
<button disabled={loading} onClick={fetchWeatherData}>
  {loading ? 'Loading...' : 'Get Weather'}
</button>
      {weatherData && <WeatherList data={weatherData} />}
    </div>
  );
};

export default App;
