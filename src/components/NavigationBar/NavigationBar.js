import React, { Component } from "react";
import DrawerMenuButton from "./DrawerMenu/DrawerMenuButton/DrawerMenuButton";
import SearchField from "../SearchField/SearchField";
import "../../Global/SharedStyleElements.scss";
import "./NavigationBar.scss";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInMobileMode: false
    };
  }

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
        <DrawerMenuButton
          onClikDrawerMenu={() => this.props.onClikDrawerMenu(true)}
        />
        <div className="heading-primary nav-bar__topic">WeatherForecast</div>
        {this.props.apikeyExceeded === false && (
          <React.Fragment>
            {this.props.page !== "favorites" && (
              <div className="nav-bar__bp-medium">
                <SearchField
                  onSearchButtonClick={this.props.onSearchButtonClick}
                  wrongInput={this.props.wrongInput}
                  setWrongInput={this.props.setWrongInput}
                />
              </div>
            )}
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
