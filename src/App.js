import React, { useState } from "react";

import SearchForm from "./components/form/";
import Stats from "./components/stats/";
import Graph from "./components/graph";

import "./app.scss";

const API_KEY = "2915ce5b8d2735204f8a2d49c9510b33";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [noCity, setNoCity] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [city, setCity] = useState("");

  const handleInput = ({ target }) => {
    setCity(target.value);
  };

  const getWeather = async e => {
    e.preventDefault();

    if (city) {
      setNoCity("");
      const call_Weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const parsedWeatherData = await call_Weather.json();

      const call_Forecat = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const parsedForecastData = await call_Forecat.json();

      if (parsedWeatherData.cod === "404") {
        setNoCity(`${parsedWeatherData.message}`);
        setEnterCity("");
        setWeatherData({});
        setForecastData([]);
        setCity("");
      } else {
        setEnterCity("");
        const temp = parsedForecastData.list.map(temp => {
          return temp.main.temp;
        });
        temp.unit = "°C";
        const hum = parsedForecastData.list.map(hum => {
          return hum.main.humidity;
        });
        hum.unit = "%";
        setWeatherData({
          city: parsedWeatherData.name,
          country: parsedWeatherData.sys.country,
          temperature: Math.ceil(parsedWeatherData.main.temp),
          humidity: parsedWeatherData.main.humidity,
          wind: parsedWeatherData.wind.speed,
          conditions: parsedWeatherData.weather[0].description
        });
        setForecastData([temp, hum]);

        setCity("");
      }
    } else {
      setEnterCity("Type the name of a city");
      setWeatherData({});
      setForecastData([]);
      setNoCity("");
    }
  };
  return (
    <section className="app__wrapper">
      <SearchForm
        getWeather={getWeather}
        data={city}
        handleChange={handleInput}
      />
      {enterCity && <p className="enter__city">{enterCity}</p>}
      {noCity && <p className="no__city">City not found 🌍</p>}
      <Stats weatherData={weatherData} />
      <section className="graphs">
        {weatherData.city && (
          <h1 className="forecast__title">5 days Forecast</h1>
        )}
        {forecastData.map((item, i) => {
          return <Graph data={item} key={i} name={item.unit} />;
        })}
      </section>
    </section>
  );
}

export default App;
