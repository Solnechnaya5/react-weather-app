import React from "react";
import "./CurrentCity.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favoritesSlice";

export const CurrentLocationInfo = ({ weather }) => {
  const dispatch = useDispatch();

  const handleSaveToFavorites = () => {
    dispatch(addFavorite({ name: weather.name, country: weather.country }));
  };

  return (
    <div className="location">
      <div className="location-info">
        <h2 className="location-city">{`${weather.name}, ${weather.country}`}</h2>
        <div className="location-row">
          <div className="location-time">{weather.formattedLocaleTime}</div>
        </div>
      </div>
      <button className="savecity-btn" onClick={handleSaveToFavorites}>
        Save to Favorite
      </button>
    </div>
  );
};
