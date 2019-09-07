import React from "react";
import FavoriteCityCard from "./FavoriteCityCard/FavoriteCityCard";
import "../../../Global/Animations.scss";
import "./FavoritesPage.scss";

const FavoritesPage = ({
  favoriteCities,
  onDeleteCityFavorite,
  onCheckForecastButton
}) => {
  let key = 0;
  return (
    <div className="favorites-page favoritesEntrance">
      {favoriteCities.length > 0 ? (
        favoriteCities.map(city => {
          return (
            <FavoriteCityCard
              key={key++}
              cityId={city.cityId}
              cityName={city.cityName}
              cityTemp={city.cityTemp}
              onDeleteCityFavorite={onDeleteCityFavorite}
              onCheckForecastButton={onCheckForecastButton}
            />
          );
        })
      ) : (
        <div className="favorites-page__empty announcement">
          Start adding cities to your favorites!
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
