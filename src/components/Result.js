export default function Result(apiData) {
  console.log(apiData);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let datestring = apiData.weatherData.location.localtime;
  let d = new Date(datestring);
  let dayName = days[d.getDay()];

  return (
    <div classNameName="weather-data">
      <div className="weather-location-date">
        {dayName}, {apiData.weatherData.location.name}
        <span>, </span>
        {apiData.weatherData.location.country}
      </div>
      <div className="weather-icon">
        <img
          src={apiData.weatherData.current.condition.icon}
          alt={apiData.weatherData.current.condition.text}
        />
      </div>
      <div className="weather-temp">
        {apiData.weatherData.current.temp_c}
        <span>&deg;C</span>
        <div className="weather-details">
          <p>
            The amount of rainfall: {apiData.weatherData.current.precip_mm}mm{" "}
          </p>
          <p>Humidity: {apiData.weatherData.current.humidity}%</p>
          <p>Wind: {apiData.weatherData.current.wind_kph}km/h</p>
        </div>
      </div>
    </div>
  );
}
