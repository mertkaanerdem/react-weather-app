import styles from "./Cities.module.css";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

function Cities() {
  const { cities_list, selectedCity, setSelectedCity } =
    useContext(WeatherContext);

  const handleCityChange = (e) => {
    for (let i = 0; i < cities_list.length; i++) {
      if (e.target.value === cities_list[i].il_adi) {
        setSelectedCity(cities_list[i]);
      }
    }
  };
  return (
      <div className={styles.container}>

    <select
      className={styles.cities}
      value={selectedCity.il_adi}
      onChange={handleCityChange}
      >
      {cities_list.map((city, i) => (
          <option key={i} value={city.il_adi}>
          {city.il_adi}
        </option>
      ))}
    </select>
      </div>
  );
}

export default Cities;
