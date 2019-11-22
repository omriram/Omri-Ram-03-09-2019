import React, { Component } from "react";
import CitySuggestionList from "./CitySuggestionList/CitySuggestionList";
import "../../Global/SharedStyleElements.scss";
import "./NavigationBar.scss";
import { ReactComponent as SearchIcon } from "./Assets/search.svg";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: "",
      showCityList: false,
      cityList: [],
      chosenCity: {}
    };
  }

  onInputChange = event => {
    /* fetch("https://herolo-weather-back.herokuapp.com/autoComplete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputField: event.target.value
      })
    })
      .then(Response => Response.json())
      .then(data => {
        if (data[0].LocalizedName !== undefined) {
          this.setState({
            cityList: data,
            showCityList: true
          });
        }
      })
      .catch(err => {
        console.log("Some problem has occurred");
      }); */
    this.setState({ inputField: event.target.value, showCityList: true });
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.onSearchButtonClick(this.state.chosenCity);
    }
  };

  onCityClick = (cityNameinput, cityIdInput) => {
    const chosenCity = {
      cityName: cityNameinput,
      cityId: cityIdInput
    };
    this.setState({
      inputField: cityNameinput,
      showCityList: false,
      chosenCity
    });
  };

  render() {
    let homeButtonClass, favoritesButtonClass;
    if (this.props.page === "favorites") {
      favoritesButtonClass = "btn nav-bar__btn clicked";
      homeButtonClass = "btn nav-bar__btn";
    } else {
      homeButtonClass = "btn nav-bar__btn clicked";
      favoritesButtonClass = "btn nav-bar__btn";
    }
    return (
      <nav className="nav-bar">
        <div className="heading-primary nav-bar__topic">WeatherForecast</div>
        {this.props.apikeyExceeded === false && (
          <React.Fragment>
            <div className="nav-bar__group">
              <input
                className="nav-bar__input input-text"
                type="text"
                placeholder="Enter your location"
                onChange={this.onInputChange}
                onKeyDown={this.onKeyDown}
                value={this.state.inputField}
              />
              <button
                className="btn"
                onClick={() =>
                  this.props.onSearchButtonClick(this.state.chosenCity)
                }
              >
                <SearchIcon className="icon" />
              </button>
              {this.state.showCityList === true && (
                <CitySuggestionList
                  inputField={this.state.inputField}
                  onCityClick={this.onCityClick}
                  cityList={this.state.cityList}
                />
              )}
            </div>
            <button
              onClick={() => this.props.onChangePage("home")}
              className={homeButtonClass}
            >
              Home
            </button>
            <button
              onClick={() => this.props.onChangePage("favorites")}
              className={favoritesButtonClass}
            >
              Favorites
            </button>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default NavigationBar;
