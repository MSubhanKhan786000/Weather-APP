import React, { useState } from 'react';
import Search from './components/Search';
import './App.css';
import data from './constants/data';

const App = () => {
  const [searchedCities, setSearchedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCitySearch = (cityData) => {
    const cityName = cityData.city;
    if (!searchedCities.includes(cityName)) {
      setSearchedCities([...searchedCities, cityName]);
    }
    setSelectedCity(cityData);
    setErrorMessage('');
  };


  const handleCityClick = (cityName) => {
    const cityData = data[cityName];
    if (cityData) {
      setSelectedCity({ city: cityName, data: cityData });
      setErrorMessage('');
    }
  };

  const handleCityNotFound = () => {
    setErrorMessage('City not found.');
    setSelectedCity(null);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <Search
        onCitySearch={handleCitySearch}
        onCityNotFound={handleCityNotFound}
      />

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {searchedCities.length > 0 && (
        <div className="previous-searches">
          <h3>Previously Searched Cities History</h3>
          {searchedCities.map((city, index) => (
            <button
              key={city}
              className="city-button"
              onClick={() => handleCityClick(city)}
              style={{ display: index === searchedCities.length - 1 ? 'none' : 'block' }}

            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>
      )}

      {selectedCity && (
        <div className="city-details">
          <h2>{selectedCity.city.charAt(0).toUpperCase() + selectedCity.city.slice(1)}</h2>
          <p><strong>Temperature:</strong> {selectedCity.data.currTemp}°C</p>
          <p><strong>Humidity:</strong> {selectedCity.data.humidity}</p>
          <p><strong>Wind Speed:</strong> {selectedCity.data.windSpeed} ms</p>
        </div>
      )}
    </div>
  );
};

export default App;
