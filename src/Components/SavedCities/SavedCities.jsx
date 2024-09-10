import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCity } from '../redux/actions';

const SavedCities = ({ onSelect }) => {
  const favoriteCities = useSelector(state => state.favoriteCities);
  const dispatch = useDispatch();

  return (
    <div className="favorite-cities">
      <h3>Saved Cities</h3>
      <ul>
        {favoriteCities.map((city) => (
          <li key={city}>
            <span onClick={() => onSelect(city)}>{city}</span>
            <button onClick={() => dispatch(removeCity(city))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
