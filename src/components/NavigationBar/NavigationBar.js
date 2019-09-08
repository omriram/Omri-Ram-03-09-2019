import React from "react";
import "../../Global/SharedStyleElements.scss";
import "./NavigationBar.scss";

const NavigationBar = ({ apikeyExceeded, onChangePage, page }) => {
  let homeButtonClass, favoritesButtonClass;
  if (page === "favorites") {
    favoritesButtonClass = "btn nav-bar__btn clicked";
    homeButtonClass = "btn nav-bar__btn";
  } else {
    homeButtonClass = "btn nav-bar__btn clicked";
    favoritesButtonClass = "btn nav-bar__btn";
  }
  return (
    <nav className="nav-bar">
      <div className="heading-primary nav-bar__topic">Herolo Weather Task</div>
      {apikeyExceeded ===
        false /* if my api calls run out the site becomes unavailable */ && (
        <React.Fragment>
          <button
            onClick={() => onChangePage("home")}
            className={homeButtonClass}
          >
            Home
          </button>
          <button
            onClick={() => onChangePage("favorites")}
            className={favoritesButtonClass}
          >
            Favorites
          </button>
        </React.Fragment>
      )}
    </nav>
  );
};

export default NavigationBar;
