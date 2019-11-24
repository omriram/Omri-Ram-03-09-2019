import React, { Component } from "react";
import CitySuggestionList from "./CitySuggestionList/CitySuggestionList";
import { ReactComponent as SearchIcon } from "./Assets/search.svg";
import CitiesTest from "./Assets/citiesTest";
import "../../Global/SharedStyleElements.scss";
import "./SearchField.scss";

class SearchField extends Component {
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
    fetch("https://herolo-weather-back.herokuapp.com/autoComplete", {
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
      });

    /* const str = event.target.value;
    const cities = [];
    if (str.length >= 1) {
      CitiesTest.forEach(cityObj => {
        if (
          cityObj.LocalizedName.toLowerCase().startsWith(
            event.target.value.toLowerCase()
          )
        )
          cities.push(cityObj);
      });
    }

    this.setState({ cityList: cities }); */
    if (this.props.wrongInput && event.target.value === "")
      this.props.setWrongInput(false);
    this.setState({ inputField: event.target.value, showCityList: true });
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.onSearchButtonClick(
        this.state.chosenCity,
        this.state.inputField
      );
    }
  };

  onCityClick = (cityNameinput, cityIdInput) => {
    this.props.setWrongInput(false);
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
    return (
      <div className="search-field">
        <input
          className="search-field__input input-text"
          type="text"
          placeholder="Enter your location"
          onChange={this.onInputChange}
          onKeyDown={this.onKeyDown}
          value={this.state.inputField}
        />
        {this.props.wrongInput && (
          <div className="search-field__wrong-input">
            {" "}
            Choose cities from the list{" "}
          </div>
        )}
        <button
          className="btn"
          onClick={() =>
            this.props.onSearchButtonClick(
              this.state.chosenCity,
              this.state.inputField
            )
          }
        >
          <SearchIcon className="icon" />
        </button>
        {this.state.showCityList === true && (
          <CitySuggestionList
            hideListClass={this.props.hideListClass}
            inputField={this.state.inputField}
            onCityClick={this.onCityClick}
            cityList={this.state.cityList}
          />
        )}
      </div>
    );
  }
}

export default SearchField;
