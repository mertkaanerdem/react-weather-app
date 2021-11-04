import { createContext } from "react";
import cities_list from "./cities_list";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  console.log("sads", cities_list);
  const values = {
    cities_list,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
