import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import { WEATHER_API_URL } from "./const";
import Video from "./components/Video";

function App() {
  const [city, setCity] = useState("Warsaw");
  const [apiData, setApiData] = useState({});

  const getWeatherData = async () => {
    let response = await fetch(WEATHER_API_URL + city);
    let weatherApi = await response.json();
    setApiData(weatherApi);
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);

  const handleCityChange = (e) => {
    let value = e.target.value;
    setCity(value);
  };

  return (
    <div className="App">
      <Video />
      <h1>Weather App</h1>
      <form onSubmit={handleCityChange}>
        <input
          type="text"
          className="weather-city"
          placeholder="Enter city and press ENTER"
        />
      </form>
      <Result weatherData={apiData} />
    </div>
  );
}

export default App;
