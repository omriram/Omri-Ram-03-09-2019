import React from "react";
import "../HomePage.scss";
import "../../../../Global/SharedStyleElements.scss";
import { ReactComponent as StarIcon } from "./Assets/star-full.svg";

const CurrentConditionsCard = ({
  currentTemp,
  weatherText,
  cityData,
  isInFavorites
}) => {
  return (
    <div className="details__group">
      <div className="card details__card">{weatherText}</div>
      <div className="details__info">
        <div className="details__info-holder">
          <div className="details__info-cityname">{cityData.cityName}</div>
          {isInFavorites === true && (
            <div className="details__info-fav">
              {"{"} <StarIcon className="details__info-fav-icon" /> In your
              favorites {"}"}
            </div>
          )}
        </div>
        <div className="details__info-temp">{currentTemp} &#8451;</div>
      </div>
    </div>
  );
};

export default CurrentConditionsCard;
