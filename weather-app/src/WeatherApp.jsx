import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "WanderLand",
    feelsLike: 27.58,
    humidity: 24,
    temp: 28.99,
    tempMax: 28.99,
    tempMin: 28.99,
    weather: "smoke",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weapp">
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
