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
  const citiesArr = Object.keys(favoriteCities).map(key => favoriteCities[key]);
  return (
    <div className="favorites-page favoritesEntrance">
      {citiesArr.length > 0 ? (
        citiesArr.map(city => {
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
