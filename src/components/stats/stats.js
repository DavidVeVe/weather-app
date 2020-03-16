import React from "react";

import "./stats.scss";

const Stats = props => {
  return (
    <section className="stats">
      <div className="stats__left">
        {props.weatherData.city && (
          <p className="stats__city"> {props.weatherData.city}</p>
        )}
        {props.weatherData.temperature && (
          <p className="stats__degrees">{props.weatherData.temperature}°c</p>
        )}
      </div>
      <div className="stats__right">
        {props.weatherData.humidity && (
          <p>
            <span>Humidity:</span> {props.weatherData.humidity}%
          </p>
        )}
        {props.weatherData.wind && (
          <p>
            <span>Wind speed:</span> {props.weatherData.wind} m/s
          </p>
        )}
        {props.weatherData.conditions && (
          <p className="stats__right-conditions">
            {" "}
            {props.weatherData.conditions}
          </p>
        )}
      </div>
    </section>
  );
};

export default Stats;
