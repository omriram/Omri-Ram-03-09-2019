import React from "react";
import City from "./City/City";
import "./CitySuggestionList.scss";
import "../../../Global/SharedStyleElements.scss";

const CitySuggestion = ({
  hideListClass,
  inputField,
  onCityClick,
  cityList
}) => {
  const cityArrObj = cityList.map(cityData => {
    return { cityName: cityData.LocalizedName, cityLocationKey: cityData.Key };
  });
  const cityListClass = hideListClass ? "hide" : "city-list";

  return (
    inputField !== "" && (
      <div className={cityListClass}>
        {cityArrObj.map(cityObj => {
          return (
            <City
              key={cityObj.cityLocationKey}
              cityName={cityObj.cityName}
              cityLocationKey={cityObj.cityLocationKey}
              onCityClick={onCityClick}
            />
          );
        })}
      </div>
    )
  );
};

export default CitySuggestion;
