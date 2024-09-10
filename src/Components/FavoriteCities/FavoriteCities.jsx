import React from 'react';
import './FavoriteCities.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/favoritesSlice';

export const FavoriteCities = ({ onSelectCity }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemove = (city) => {
    dispatch(removeFavorite(city));
  };

  const handleSelect = (city) => {
    if (onSelectCity) {
      onSelectCity(city);
    }
  };

  return (
    <div className="favorite-cities">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            {city}
            <button onClick={() => handleSelect(city)}>Select</button>
            <button onClick={() => handleRemove(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
