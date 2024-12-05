import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="cityForm">
          <label htmlFor="city" style={{ marginRight: "15px" }}>
            <b>Enter city :</b>
          </label>
          <TextField
            id="city"
            label="city"
            variant="outlined"
            onChange={handleChange}
            value={city}
            required
          />
        </div>
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          type="submit"
          className="btn"
          style={{ marginTop: "10px" }}
        >
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such city exists!!</p>}
      </form>
    </div>
  );
}
