import React, { useState } from "react";
import "../SearchCity/SearchCity.css";
import icon from "../../assets/images/search-icon.svg";

export const SearchCity = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city.trim() !== "") {
      setQuery({ q: city });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="search-city gcse-search">
      <div className="search-city__input ">
        <input
          type="text"
          value={city}
          placeholder="Search city..."
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          onClick={handleSearchClick}
          className="search-icon"
          src={icon}
          alt="Search Icon"
        />
      </div>
    </div>
  );
};
