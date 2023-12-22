import React, { useState } from "react";

// Weather API Key
const apiKEY = "4c9e890c4b2446b587341206231912";

// Weather Component
function Weather() {
  // State variables
  const [city, setCity] = useState("New Delhi"); // Default city
  const [weatherData, setWeatherData] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather data from the API
  const getWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if the city is empty before making the API request
      if (!city.trim()) {
        setError("Please enter a city name.");
        return; // Exit the function without making the API request
      }

      // API request to fetch weather data
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKEY}&q=${city}`
      );

      // Parse API response to JSON
      const weatherData = await response.json();
      setWeatherData(weatherData);
    } catch (error) {
      console.error(`Error while fetching Weather Data`, error);
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // JSX for rendering the Weather component
  return (
    <div id="body">
      {/* Navigation Section */}
      <div id="nav">
        <div id="div1">
          <h1 id="name">Weather App</h1>
          <img id="logo" src="./images/umbrella.png" alt="Weather App Logo" />
        </div>

        {/* Search Input Section */}
        <div>
          <input
            id="inputBox"
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button id="searchBtn" onClick={getWeatherData}>
            <img src="../images/search.png" alt="Search Icon" />
          </button>
        </div>
      </div>

      {/* Weather Data Section */}
      <div id="data">
        {/* Display Weather Details */}
        {weatherData && (
          <div id="details">
            <img
              id="weatherImg"
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
            />
          </div>
        )}

        {weatherData && (
          <div id="weather">
            {/* Display Weather Information */}
            <h2>City: {weatherData.location.name}</h2>
            <h2>State: {weatherData.location.region}</h2>
            <h2>Country: {weatherData.location.country}</h2>
            <h2>Local Time: {weatherData.location.localtime}</h2>
            <h2>Time Zone: {weatherData.location.tz_id}</h2>
          </div>
        )}

        {weatherData && (
          <div id="weather2">
            {/* Display Additional Weather Information */}
            <h2>Condition: {weatherData.current.condition.text}</h2>
            <h2>Temperature: {weatherData.current.temp_c} °C</h2>
            <h2>Wind Speed: {weatherData.current.wind_kph} Km/h</h2>
            <h2>Humidity: {weatherData.current.humidity} %</h2>
            <h2>
              Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}
            </h2>
            <h2>Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</h2>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div id="footer">Made with &#9829; by &lt;/Rohit &gt; </div>
    </div>
  );
}

// Export Weather component
export default Weather;