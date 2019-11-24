import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import FavoritesPage from "./components/Pages/FavoritesPage/FavoritesPage";
import DrawerMenu from "./components/NavigationBar/DrawerMenu/DrawerMenu";
import "./WeatherApp.scss";

/* 1234: {
  cityId: 1234,
  cityName: "gaga",
  cityTemp: 15
},
1235: {
  cityId: 1235,
  cityName: "sdfdsf",
  cityTemp: 15
},
1236: {
  cityId: 1236,
  cityName: "ssss",
  cityTemp: 15
},
1237: {
  cityId: 1237,
  cityName: "dddd",
  cityTemp: 15
},
1238: {
  cityId: 1238,
  cityName: "fffff",
  cityTemp: 15
},
1239: {
  cityId: 1239,
  cityName: "gageeeea",
  cityTemp: 15
},
12310: {
  cityId: 12310,
  cityName: "gagsdfssssa",
  cityTemp: 15
},
12311: {
  cityId: 12311,
  cityName: "gafffsfsfga",
  cityTemp: 15
},
12312: {
  cityId: 12312,
  cityName: "gagsfsfsfsfa",
  cityTemp: 15
}
}, */

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
      loading: false,
      isOpenDrawer: false,
      wrongInput: false
    };
  }

  onChangePage = page => {
    this.setState({ currentPage: page });
  };

  setWrongInput = flag => {
    this.setState({ wrongInput: flag });
  };

  onSearchButtonClick = (chosenCity, inputField) => {
    if (chosenCity.cityName !== undefined) {
      if (chosenCity.cityName.toLowerCase() === inputField.toLowerCase()) {
        if (Object.keys(chosenCity).length > 1) {
          this.setWrongInput(false);
          this.fetchCurrentConditions(true, chosenCity);
          this.fetchForecastsData(chosenCity);
        }
      } else {
        this.setWrongInput(true);
      }
    } else {
      this.setWrongInput(true);
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

  onClikDrawerMenu = flag => {
    this.setState({ isOpenDrawer: flag });
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
            onSearchButtonClick={this.onSearchButtonClick}
            onClikDrawerMenu={this.onClikDrawerMenu}
            wrongInput={this.state.wrongInput}
            setWrongInput={this.setWrongInput}
          />
        );
        break;
      case "favorites":
        componentToRender = (
          <FavoritesPage
            favoriteCities={this.state.favoriteCities}
            onDeleteCityFavorite={this.onDeleteCityFavorite}
            onCheckForecastButton={this.onCheckForecastButton}
            onClikDrawerMenu={this.onClikDrawerMenu}
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
          onClikDrawerMenu={this.onClikDrawerMenu}
          wrongInput={this.state.wrongInput}
          setWrongInput={this.setWrongInput}
        />
        {this.state.isOpenDrawer && (
          <DrawerMenu onChangePage={this.onChangePage} />
        )}
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
