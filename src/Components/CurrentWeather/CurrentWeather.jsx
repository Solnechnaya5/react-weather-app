import "./CurrentWeather.css";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const CurrentWeather = (
 { weather:{
    details, icon, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset, speed
  }}
) => {


  const weatherDetailsColumn = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Feel like",
      value: `${feels_like.toFixed()}`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidy",
      value: `${humidity}`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed}`,
    },
  ];
  const weatherDetailsRow = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value:`${sunrise}`,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: `${sunset}`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "Max",
      value: `${temp_max.toFixed()}`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Min",
      value: `${temp_min.toFixed()}`,
    },
  ];

  return (
    <div className="weathercardnow">
      <div className="weathernow-top__row">
        <div className="weathernow-status">
          <div className="weathercardnow__icon">
            <img
              src={`${icon}`}
              alt="weather icon"
            />
          </div>
          <p>{details}</p>
        </div>

        <div className="weathernow-additional__column">
          <p className="weathernow-temperature">{`${temp.toFixed()}`}</p>
    
        </div>
        <ul className="weathernow-additional__column">
          {weatherDetailsColumn.map(({ id, Icon, title, value }) => (
            <li key={id}>
              <Icon size={18} />
              {`${title}:`} <span>{`${value}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="weathernow-additional__row">
        {weatherDetailsRow.map(({ id, Icon, title, value }) => (
          <li key={id}>
            <Icon size={18} />
            {`${title}: `} <span>{`${value}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
