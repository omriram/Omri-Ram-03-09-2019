import React from "react";
import ForecastCard from "./ForecastCard/ForecastCard";
import "./Forecasts.scss";
const Forecasts = ({ forecastList }) => {
  const dateHelper = new Date();
  const currentDay = dateHelper.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="forecasts">
      {forecastList.DailyForecasts.map((dayConditions, index) => {
        return (
          <ForecastCard
            key={dayConditions.Date}
            day={days[(currentDay + index) % 7]}
            maxTemp={dayConditions.Temperature.Maximum.Value}
            iconPhrase={dayConditions.Day.IconPhrase}
          />
        );
      })}
    </div>
  );
};

export default Forecasts;
