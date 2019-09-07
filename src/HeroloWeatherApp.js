import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import FavoritesPage from "./components/Pages/FavoritesPage/FavoritesPage";
import "./HeroloWeatherApp.scss";

class HeroloWeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      inputField: "",
      chosenCity: {
        cityName: "Tel Aviv",
        cityId: "215854"
      },
      showCity: {
        cityName: "Tel Aviv",
        cityId: "215854"
      },
      cityList: [],
      showCityList: false,
      currentPage: "home",
      favoriteCities: [],
      cityToForecast: {}
    };
  }

  onChangePage = page => {
    this.setState({ currentPage: page });
  };

  onSetCityOnDetailsSection = cityData => {
    const cityDataCopy = Object.assign(cityData);

    this.setState({ showCity: cityDataCopy });
  };

  onInputChange = event => {
    fetch("http://localhost:3001/autoComplete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputField: event.target.value
      })
    })
      .then(Response => Response.json())
      .then(data => {
        if (data[0].LocalizedName !== undefined) {
          const cityListCopy = Object.assign(data);
          this.setState({
            cityList: cityListCopy,
            showCityList: true
          });
        }
      })
      .catch(err => {
        console.log("Some problem has been occurred");
      });
    this.setState({ inputField: event.target.value });
  };

  onAddToFavoritesButton = (cityObjInput, cityTempInput) => {
    const cardCopy = {
      cityId: cityObjInput.cityId,
      cityName: cityObjInput.cityName,
      cityTemp: cityTempInput
    };
    const favoriteCitiesCopy = [...this.state.favoriteCities, cardCopy];
    this.setState({
      favoriteCities: favoriteCitiesCopy,
      currentPage: "favorites"
    });
  };

  onDeleteCityFavorite = cityIdToDelete => {
    console.log(cityIdToDelete);
    const favoriteCitiesCopy = this.state.favoriteCities.filter(
      city => city.cityId !== cityIdToDelete
    );
    this.setState({ favoriteCities: favoriteCitiesCopy });
  };

  onCityClick = (cityNameinput, cityIdInput) => {
    const chosenCityCopy = {
      cityName: cityNameinput,
      cityId: cityIdInput
    };
    this.setState({
      inputField: cityNameinput,
      chosenCity: chosenCityCopy,
      showCityList: false,
      cityToForecast: {}
    });
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

  pageStateManager = () => {
    const currentPage = this.state.currentPage;
    let componentToRender;

    switch (currentPage) {
      case "home":
        componentToRender = (
          <HomePage
            onAddToFavoritesButton={this.onAddToFavoritesButton}
            favoriteCities={this.state.favoriteCities}
            cityToForecast={this.state.cityToForecast}
            onCityClick={this.onCityClick}
            onInputChange={this.onInputChange}
            inputField={this.state.inputField}
            chosenCity={this.state.chosenCity}
            cityList={this.state.cityList}
            showCityList={this.state.showCityList}
            onSetCityOnDetailsSection={this.onSetCityOnDetailsSection}
            showCity={this.state.showCity}
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

  render() {
    const returnedComponent = this.pageStateManager();

    return (
      <div className="herolo-weather-app">
        <NavigationBar
          onChangePage={this.onChangePage}
          page={this.state.currentPage}
        />
        {returnedComponent}
      </div>
    );
  }
}

export default HeroloWeatherApp;
