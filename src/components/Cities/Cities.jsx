import { useContext } from "react";

import WeatherContext from "../../context/WeatherContext";

function Cities() {
  const { cities_list } = useContext(WeatherContext);
  return (
    <select>
      {cities_list.map((city, i) => (
        <option key={i} value={city.il_adi}>
          {city.il_adi}
        </option>
      ))}
    </select>
  );
}

export default Cities;
