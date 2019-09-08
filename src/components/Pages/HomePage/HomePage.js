import React, { Component } from "react";
import CitySuggestionList from "./CitySuggestionList/CitySuggestionList";
import CurrentConditionsCard from "../../CurrentConditionsCard/CurrentConditionsCard";
import { ReactComponent as SearchIcon } from "./Assets/search.svg";
import Forecasts from "../../Forecasts/Forecasts";
import LoadingBars from "react-loading";
import "../../../Global/Animations.scss";
import "../../../Global/SharedStyleElements.scss";
import "../../../Global/utilities.scss";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    cityCurrentConditionsCard: [
      {
        Temperature: {
          Metric: {
            Value: ""
          },
          Imperial: {
            Value: ""
          }
        }
      }
    ],
    forecastList: {
      DailyForecasts: []
    },
    isInFavorites: false,
    apikeyExceeded: false,
    loading: false
  };

  fetchForecastsData = () => {
    fetch("https://herolo-weather-back.herokuapp.com/forecasts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locationKey: this.props.chosenCity.cityId
      })
    })
      .then(Response => Response.json())
      .then(data => {
        if (data.Code !== undefined) {
          if (data.Code === "ServiceUnavailable") {
            this.setState({ apikeyExceeded: true });
          }
        } else {
          const forecastListCopy = Object.assign(data);
          this.setState({
            forecastList: forecastListCopy,
            apikeyExceeded: false
          });
        }
      })
      .catch(err => console.log(err));
    this.setState({ loading: false });
  };

  fetchCurrentConditions = (isSearchButtonClicked = false) => {
    this.setState({ loading: true });
    fetch("https://herolo-weather-back.herokuapp.com/currentConditions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locationKey: this.props.chosenCity.cityId
      })
    })
      .then(Response => Response.json())
      .then(data => {
        if (data.Code !== undefined) {
          if (data.Code === "ServiceUnavailable") {
            this.setState({ apikeyExceeded: true });
          }
        } else {
          const cityCurrentConditionsCardCopy = Object.assign(data);
          const showCityCopy = Object.assign(this.props.chosenCity);

          const isInFavoritesCopy =
            this.props.favoriteCities.filter(
              city => city.cityId === showCityCopy.cityId
            ).length > 0;

          if (isSearchButtonClicked) {
            this.props.onSetCityOnDetailsSection(showCityCopy);
          }

          this.setState({
            isInFavorites: isInFavoritesCopy,
            cityCurrentConditionsCard: cityCurrentConditionsCardCopy
          });
        }
      })
      .catch(err => console.log(err));
  };

  onSearchButtonClick = () => {
    if (Object.keys(this.props.chosenCity).length > 1) {
      const isSearchButtonClicked = true;
      this.fetchCurrentConditions(isSearchButtonClicked);
      this.fetchForecastsData();
    }
  };

  componentDidMount() {
    /* Present default or favorite current city conditions (default = tel aviv) */
    this.fetchCurrentConditions();
    this.fetchForecastsData();
  }

  render() {
    const clickIndicationClass =
      this.props.inputField !== ""
        ? "home-page__input-click-indication clickPulsate"
        : "home-page__input-click-indication";
    const btnFavoritesClass =
      this.state.isInFavorites === false
        ? "btn details__btn-favorites"
        : "btn btn-disabled";

    return (
      <div className="home-page">
        {this.state.apikeyExceeded ? (
          <div className="apikeyexc announcement">
            Sorry, no more api calls for today :)
          </div>
        ) : (
          <React.Fragment>
            <div className="home-page__group inputFieldEntrance u-margin-bottom-medium">
              <div className="home-page__group-holder">
                <input
                  className="home-page__input input-text"
                  type="text"
                  placeholder="Enter your location"
                  onChange={this.props.onInputChange}
                  value={this.props.inputField}
                />
                <div className={clickIndicationClass}>Click</div>
                <button className="btn" onClick={this.onSearchButtonClick}>
                  <SearchIcon className="icon" />
                </button>
              </div>
              {this.props.showCityList === true && (
                <CitySuggestionList
                  inputField={this.props.inputField}
                  onCityClick={this.props.onCityClick}
                  cityList={this.props.cityList}
                />
              )}
            </div>
            <div className="details detailsEntrance">
              {this.state.loadin && (
                <LoadingBars
                  className="loading-bars"
                  type={"bars"}
                  color={"#5279f8"}
                />
              )}
              <div className="details__top-section u-margin-bottom-medium">
                <CurrentConditionsCard
                  currentTemp={
                    this.state.cityCurrentConditionsCard[0].Temperature.Metric
                      .Value
                  }
                  weatherText={
                    this.state.cityCurrentConditionsCard[0].WeatherText
                  }
                  cityData={this.props.showCity}
                  isInFavorites={this.state.isInFavorites}
                />
                <button
                  className={btnFavoritesClass}
                  disabled={this.state.isInFavorites}
                  onClick={() =>
                    this.props.onAddToFavoritesButton(
                      this.props.showCity,
                      this.state.cityCurrentConditionsCard[0].Temperature.Metric
                        .Value
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
                <Forecasts forecastList={this.state.forecastList} />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default HomePage;
