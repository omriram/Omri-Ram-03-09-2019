import React from "react";
import CurrentConditionsCard from "./CurrentConditionsCard/CurrentConditionsCard";
import Forecasts from "./Forecasts/Forecasts";
import LoadingBars from "react-loading";
import "../../../Global/Animations.scss";
import "../../../Global/SharedStyleElements.scss";
import "../../../Global/utilities.scss";
import "./HomePage.scss";

const HomePage = ({
  forecastList,
  loading,
  cityCurrentConditionsCard,
  showCity,
  favoriteCities,
  onAddToFavoritesButton
}) => {
  let isInFavorites;
  if (favoriteCities[showCity.cityId]) {
    isInFavorites = true;
  } else isInFavorites = false;
  const btnFavoritesClass =
    isInFavorites === false ? "btn details__btn-favorites" : "btn btn-disabled";
  return (
    <div className="home-page">
      <div className="heading-primary home-page__topic  u-margin-bottom-medium topicEntance">
        <i>Check the weather around the world!</i>
      </div>
      <div className="details detailsEntrance">
        {loading && (
          <LoadingBars
            className="loading-bars"
            type={"bars"}
            color={"#5279f8"}
          />
        )}
        <div className="details__top-section u-margin-bottom-medium">
          <CurrentConditionsCard
            currentTemp={cityCurrentConditionsCard[0].Temperature.Metric.Value}
            weatherText={cityCurrentConditionsCard[0].WeatherText}
            cityData={showCity}
            isInFavorites={isInFavorites}
          />
          <button
            className={btnFavoritesClass}
            disabled={isInFavorites}
            onClick={() =>
              onAddToFavoritesButton(
                showCity,
                cityCurrentConditionsCard[0].Temperature.Metric.Value
              )
            }
          >
            Add to favorites &rarr;
          </button>
        </div>
        <div className="details__bottom-section">
          <div className="heading-primary details__bottom-section-topic u-margin-bottom-big ">
            Weather for the next days
          </div>
          <Forecasts forecastList={forecastList} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
