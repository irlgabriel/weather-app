import React, { useState, useEffect } from "react";

import { 
  WeatherContainer, 
  ForecastDiv,
  Header,
  Hint,


} from "./Weather.components";

export default function Weather({
  weatherObj,
  locationObj
}) {
  const [weather, setWeather] = useState("")

  useEffect(() => {
    if (weatherObj.weather) {
      setWeather(weatherObj.weather[0])
    }
  }, [weatherObj])

  return( 
    <WeatherContainer>
    {
      weatherObj && 
      <ForecastDiv>
        <Header>{locationObj.city ? locationObj.city : ""}</Header>
        <Hint>{weather.description ? weather.description : ""}</Hint>
      </ForecastDiv>
    }
    </WeatherContainer>
  )
}