import "./DayCard.css";
import { useEffect, useState } from "react";
import { CurrentLocationInfo } from "../CurrentCity/CurrentCity";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { ForecastWeather } from "../Forecarst/ForecastWeather";
import { SearchCity } from "../SearchCity/SearchCity";
import { getFormattedWeatherData } from "../../js/api";
import { FavoriteCities } from "../FavoriteCities/FavoriteCities";
import { ShowCitiesBtn } from "../Buttons/ShowCitiesBtn";

export const DayCard = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [units, query]);

  const handleCitySelect = (city) => {
    const cityName = city.split(",")[0].trim();
    setQuery({ q: cityName });
  };
  const showCitiesList = () => {
    setShowFavorites(!showFavorites);
  };
  return (
    <div className="citycard">
      <div className="citycard-top">
        <SearchCity setQuery={setQuery} setUnits={setUnits} />
        <div className="citycard-city-container">
          <ShowCitiesBtn showCitiesList={showCitiesList} />
          {showFavorites && <FavoriteCities onSelectCity={handleCitySelect} />}
        </div>
      </div>
      {weather ? (
        <div>
          <CurrentLocationInfo weather={weather} />
          <CurrentWeather weather={weather} />
          <ForecastWeather
            title="Weather forecast for 5 hours"
            data={weather.hourly}
          />
          <ForecastWeather
            title="Weather forecast for 5 days"
            data={weather.daily}
          />
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};
