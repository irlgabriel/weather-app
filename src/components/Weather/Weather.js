import React from "react";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri" 

import { 
  WeatherContainer, 
  ForecastDiv,
  Header,
  Hint,
  TemperatureDiv,
  Temp,
  Raindrop
} from "./Weather.components";

export default function Weather({
  weatherObj,
  locationObj,
  units
}) {
  return( 
      <WeatherContainer>
        {
        weatherObj && weatherObj.weather && 
        <ForecastDiv>
          {
            locationObj.city &&
            <Header>{locationObj.city}</Header>
          }
          {
            <Hint>{weatherObj.weather[0].description}</Hint>
          }
          {
            <TemperatureDiv>
              <Temp> Now: &nbsp;{units === "metric" ? <RiCelsiusFill /> : <RiFahrenheitFill />}{weatherObj.main.temp}</Temp>
              <Temp> Min: &nbsp;{units === "metric" ? <RiCelsiusFill /> : <RiFahrenheitFill />}{weatherObj.main.temp_min}</Temp>
              <Temp> Max: &nbsp;{units === "metric" ? <RiCelsiusFill />: <RiFahrenheitFill />}{weatherObj.main.temp_max}</Temp>
              <Temp> Humidity({<Raindrop />}): {weatherObj.main.humidity}%</Temp>
            </TemperatureDiv>
          }
        </ForecastDiv>
        }
      </WeatherContainer>
  )
}