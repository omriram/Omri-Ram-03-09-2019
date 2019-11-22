import React from "react";
import "../../../../../Global/SharedStyleElements.scss";
import "../../../../../Global/Animations.scss";
import { ReactComponent as CloudySunRain } from "./Assets/cloudy-sun-rain.svg";
import { ReactComponent as CloudySun } from "./Assets/cloud-sun.svg";
import { ReactComponent as Rain } from "./Assets/rain.svg";
import { ReactComponent as Clouds } from "./Assets/clouds.svg";
import { ReactComponent as Sun } from "./Assets/sun.svg";
import "./ForecastCard.scss";

const ForecastCard = ({ day, maxTemp, iconPhrase }) => {
  let weatherIcon;
  const iconPhraseCopy = iconPhrase.toLowerCase();

  if (
    iconPhraseCopy.includes("cloud") &&
    iconPhraseCopy.includes("sun") &&
    iconPhraseCopy.includes("rain")
  ) {
    weatherIcon = <CloudySunRain className="forecast-card__icon" />;
  } else if (
    iconPhraseCopy.includes("cloud") &&
    iconPhraseCopy.includes("sun")
  ) {
    weatherIcon = <CloudySun className="forecast-card__icon" />;
  } else if (iconPhraseCopy.includes("rain")) {
    weatherIcon = <Rain className="forecast-card__icon" />;
  } else if (iconPhraseCopy.includes("clouds")) {
    weatherIcon = <Clouds className="forecast-card__icon" />;
  } else {
    weatherIcon = <Sun className="forecast-card__icon" />;
  }

  return (
    <div className="forecast-card forecastCardEntrance">
      <div className="forecast-card__day">{day}</div>
      <div className="forecast-card__phrase">{iconPhrase}</div>
      {weatherIcon}
      <div className="forecast-card__temp">{maxTemp} &#8451; </div>
    </div>
  );
};

export default ForecastCard;
