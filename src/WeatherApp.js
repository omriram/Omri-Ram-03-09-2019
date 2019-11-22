import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import FavoritesPage from "./components/Pages/FavoritesPage/FavoritesPage";
import "./WeatherApp.scss";

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
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

      showCity: {
        cityName: "Tel Aviv",
        cityId: "215854"
      },
      currentPage: "home",
      favoriteCities: {},
      cityToForecast: {},
      apikeyExceeded: false,
      loading: false
    };
  }

  onChangePage = page => {
    this.setState({ currentPage: page });
  };

  onSearchButtonClick = chosenCity => {
    if (Object.keys(chosenCity).length > 1) {
      this.fetchCurrentConditions(true, chosenCity);
      this.fetchForecastsData(chosenCity);
    }
  };

  onSetCityOnDetailsSection = cityData => {
    const cityDataCopy = Object.assign(cityData);
    this.setState({ showCity: cityDataCopy });
  };

  onNoMoreApiCallsForToday = () => {
    this.setState({ apikeyExceeded: true });
  };

  onAddToFavoritesButton = (cityObjInput, cityTempInput) => {
    const cardCity = {
      cityId: cityObjInput.cityId,
      cityName: cityObjInput.cityName,
      cityTemp: cityTempInput
    };
    const favCitiesCpy = Object.assign(this.state.favoriteCities);
    if (!favCitiesCpy[cardCity.cityId]) {
      favCitiesCpy[cardCity.cityId] = cardCity;
    }
    this.setState({
      favoriteCities: favCitiesCpy,
      currentPage: "favorites"
    });
  };

  onDeleteCityFavorite = cityIdToDelete => {
    const favCitiesCpy = Object.assign(this.state.favoriteCities);
    if (favCitiesCpy[cityIdToDelete]) delete favCitiesCpy[cityIdToDelete];
    this.setState({ favoriteCities: favCitiesCpy });
  };

  onCheckForecastButton = (cityIdToForecastInput, cityNameInput) => {
    const cityToForecastCopy = {
      cityId: cityIdToForecastInput,
      cityName: cityNameInput
    };
    this.setState({
      currentPage: "home",
      cityToForecast: cityToForecastCopy
    });
  };

  fetchForecastsData = (
    chosenCity = { cityName: "Tel Aviv", cityId: "215854" }
  ) => {
    fetch("https://herolo-weather-back.herokuapp.com/forecasts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locationKey: chosenCity.cityId
      })
    })
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        if (data.Code !== undefined) {
          if (data.Code === "ServiceUnavailable") {
            this.onNoMoreApiCallsForToday();
          }
        } else {
          this.setState({
            forecastList: data,
            apikeyExceeded: false
          });
        }
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  };

  // SET DEFAULT PARAMS
  fetchCurrentConditions = (
    isSearchButtonClicked = false,
    chosenCity = { cityName: "Tel Aviv", cityId: "215854" }
  ) => {
    this.setState({ loading: true });
    fetch("https://herolo-weather-back.herokuapp.com/currentConditions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locationKey: chosenCity.cityId
      })
    })
      .then(Response => Response.json())
      .then(data => {
        if (data.Code !== undefined) {
          if (data.Code === "ServiceUnavailable") {
            this.onNoMoreApiCallsForToday();
          }
        } else {
          if (isSearchButtonClicked) {
            this.onSetCityOnDetailsSection(chosenCity);
          }
          this.setState({
            cityCurrentConditionsCard: data
          });
        }
      })
      .catch(err => console.log(err));
  };

  pageStateManager = () => {
    const currentPage = this.state.currentPage;
    let componentToRender;

    switch (currentPage) {
      case "home":
        componentToRender = (
          <HomePage
            forecastList={this.state.forecastList}
            loading={this.state.loading}
            cityCurrentConditionsCard={this.state.cityCurrentConditionsCard}
            showCity={this.state.showCity}
            favoriteCities={this.state.favoriteCities}
            onAddToFavoritesButton={this.onAddToFavoritesButton}
          />
        );
        break;
      case "favorites":
        componentToRender = (
          <FavoritesPage
            favoriteCities={this.state.favoriteCities}
            onDeleteCityFavorite={this.onDeleteCityFavorite}
            onCheckForecastButton={this.onCheckForecastButton}
          />
        );
        break;
      default:
        break;
    }

    return componentToRender;
  };
  /* Present default or favorite current city conditions (default = tel aviv) */
  componentDidMount() {
    this.fetchCurrentConditions();
    this.fetchForecastsData();
  }

  render() {
    const returnedComponent = this.pageStateManager();
    return (
      <div className="weather-app">
        <NavigationBar
          onChangePage={this.onChangePage}
          onSearchButtonClick={this.onSearchButtonClick}
          page={this.state.currentPage}
          apikeyExceeded={this.state.apikeyExceeded}
        />
        {this.state.apikeyExceeded === true ? (
          <div className="apikeyexc announcement">
            Sorry, no more api calls for today :)
          </div>
        ) : (
          returnedComponent
        )}
      </div>
    );
  }
}

export default WeatherApp;
