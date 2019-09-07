import React from "react";
import "./City.scss";
const City = ({ cityName, cityLocationKey, onCityClick }) => {
  return (
    <div
      className="city-name"
      onClick={() => onCityClick(cityName, cityLocationKey)}
    >
      {cityName}
    </div>
  );
};

export default City;
