import React, { useState, useEffect } from "react";

import { 
  WeatherContainer, 
  ForecastDiv,
  Header,
  Hint,
  TemperatureDiv,
  Temp,

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
        {
          locationObj.city &&
          <Header>{locationObj.city}</Header>
        }
        {
          weather.description && 
          <Hint>{weather.description}</Hint>
        }
        {
          weather.main && 
          <TemperatureDiv>
            <Temp>{weather.main.temp_min}</Temp>
            <Temp>{weather.main.temp_max}</Temp>
          </TemperatureDiv>
        }
      </ForecastDiv>
    }
    </WeatherContainer>
  )
}