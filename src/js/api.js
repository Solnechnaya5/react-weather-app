import { DateTime } from "luxon";

const API_KEY = "8bdbf640012e88e6b1ce35e7afee2610";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

//get weather icon from api
const iconWeatherUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocaleTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy | hh:mm a"
) => DateTime.fromSeconds(secs, offset, { zone: "utc" }).toFormat(format);

// data to display the current weather
const formatCurrent = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocaleTime = formatToLocaleTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocaleTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocaleTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconWeatherUrl(icon),
    formattedLocaleTime,
    dt,
    timezone,
    lon,
    lat,
  };
};

// data for forecast
const formatForecastWeather = (secs, offset, data) => {
  //get hourly weather
  const hourly = data
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocaleTime(f.dt, offset, "hh:mm a"),
      icon: iconWeatherUrl(f.weather[0].icon),
      date: f.dt.txt,
    }))
    .slice(0, 5);

  // get daily weathwer
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocaleTime(f.dt, offset, "ccc"),
      icon: iconWeatherUrl(f.weather[0].icon),
      date: f.dt_txt,
    }));
  return { hourly, daily };
};

export const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};
