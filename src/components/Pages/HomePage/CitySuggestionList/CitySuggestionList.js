import React from "react";
import City from "./City/City";
import "./CitySuggestionList.scss";

const CitySuggestion = ({ inputField, onCityClick, cityList }) => {
  /* cityList = [
    { LocalizedName: "tel aviv", Key: "1234" },
    { LocalizedName: "tel avivaa", Key: "12345" },
    { LocalizedName: "tel avivggg", Key: "12347" }
  ]; */
  const cityArrObj = cityList.map(cityData => {
    return { cityName: cityData.LocalizedName, cityLocationKey: cityData.Key };
  });
  return (
    inputField !== "" && (
      <div className="city-list">
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
