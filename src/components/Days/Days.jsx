import styles from "./Days.module.css";

import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

function Days() {
  const { weatherData } = useContext(WeatherContext);
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  return (
    <div className={styles.dailyContainer}>
      {weatherData.map((day, i) => (
        <div className={styles.days} key={i}>
          <img
            className={styles.bg}
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].icon}
          />
          <h4>{Math.round(day.temp.day)}</h4>
          <p>{days[new Date(day.dt * 1000).getDay()]}</p>

          <p>
            {Math.round(day.temp.max)}&#176; / {Math.round(day.temp.min)}&#176;
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].icon}
          />
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default Days;
