import React from "react";
import { WeatherContainer } from "./Weather.components";

export default function Weather({
  city,
  setCity,
  units,
  setUnits
}) {
  function getForecast() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?cnt=1&mode=null&lon=0&type=link%252C%20accurate&lat=0&units=${units}&q=${city}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
      }
    })
    .then(response => response.json()
    .then(res => console.log(res)))
    .catch(err => {
      console.log(err);
    });
  } 
  return(
    <WeatherContainer>
      
    </WeatherContainer>
  )
}