import React, { useState } from "react";
import data from "../constants/data";
const Search = ({ onCitySearch, onCityNotFound }) => {
  const [inputCity, setInputCity] = useState("");

  const handleSearch = () => {
    const cityName = inputCity.toLowerCase();
    if (data[cityName]) {
      onCitySearch({ city: cityName, data: data[cityName] });
    } else {
      onCityNotFound();
    }
    setInputCity("");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={e => setInputCity(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
