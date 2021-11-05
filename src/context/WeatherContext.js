import { createContext, useEffect, useState } from "react";
import cities_list from "./cities_list";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [selectedCity, setSelectedCity] = useState(cities_list[32]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function getWeather() {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${apiKey}`
      );

      const res = await apiCall.json();

      console.log(res.daily);
      setWeatherData(res.daily);
    }

    getWeather();
  }, [selectedCity, apiKey]);

  const values = {
    cities_list,
    selectedCity,
    setSelectedCity,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
