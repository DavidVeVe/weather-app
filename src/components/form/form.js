import React, { useState } from "react";

import "./form.scss";

const SearchForm = props => {
  return (
    <form onSubmit={props.getWeather} className="search__form">
      <input
        className="form__input-city"
        type="text"
        placeholder="City..."
        name="city"
        onChange={props.handleChange}
        value={props.data}
      />
      <button className="search__weather-btn">Search weather</button>
    </form>
  );
};

export default SearchForm;
