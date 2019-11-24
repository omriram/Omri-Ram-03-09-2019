import React from "react";
import CurrentConditionsCard from "./CurrentConditionsCard/CurrentConditionsCard";
import Forecasts from "./Forecasts/Forecasts";
import SearchField from "../../SearchField/SearchField";
import LoadingBars from "react-loading";
import "../../../Global/Animations.scss";
import "../../../Global/SharedStyleElements.scss";
import "../../../Global/utilities.scss";
import "./HomePage.scss";
import Forecast from "./Forecasts/Assets/FiveDaysForecastTest";

const HomePage = ({
  forecastList,
  loading,
  cityCurrentConditionsCard,
  showCity,
  favoriteCities,
  onAddToFavoritesButton,
  onSearchButtonClick,
  onClikDrawerMenu,
  wrongInput,
  setWrongInput
}) => {
  let isInFavorites;
  if (favoriteCities[showCity.cityId]) {
    isInFavorites = true;
  } else isInFavorites = false;
  const btnFavoritesClass =
    isInFavorites === false ? "btn details__btn-favorites" : "btn btn-disabled";
  return (
    <div className="home-page" onClick={() => onClikDrawerMenu(false)}>
      <div className="heading-primary home-page__topic  u-margin-bottom-medium topicEntance">
        <i>Check the weather around the world!</i>
      </div>
      <div className="home-page__bp-medium">
        <SearchField
          onSearchButtonClick={onSearchButtonClick}
          wrongInput={wrongInput}
          setWrongInput={setWrongInput}
        />
      </div>
      <div className="details detailsEntrance">
        {loading && (
          <LoadingBars
            className="loading-bars"
            type={"bars"}
            color={"#5279f8"}
            width={"4rem"}
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
          {/* for test purposes put : "forecast" */}
          <Forecasts forecastList={forecastList} />
        </div>
      </div>
      <div className="heading-primary mobile-view__topic topicEntance">
        <i>Next Days Forecast</i>
      </div>
      <div className="mobile-view__forecast">
        <Forecasts forecastList={forecastList} />
      </div>
    </div>
  );
};

export default HomePage;
