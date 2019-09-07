import React from "react";
import "./FavoriteCityCard.scss";

const FavoriteCityCard = ({
  cityId,
  cityName,
  cityTemp,
  onDeleteCityFavorite,
  onCheckForecastButton
}) => {
  return (
    <div className="favorite-city-card">
      <div className="favorite-city-card__name">{cityName}</div>
      <div className="favorite-city-card__temp">{cityTemp} &#8451;</div>
      <button
        onClick={() => onCheckForecastButton(cityId, cityName)}
        className="btn favorite-city-card__forecast"
      >
        &larr; Check Forecast
      </button>
      <button
        onClick={() => onDeleteCityFavorite(cityId)}
        className="btn favorite-city-card__close-btn"
      >
        &times;
      </button>
    </div>
  );
};

export default FavoriteCityCard;
