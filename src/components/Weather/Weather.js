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
        weatherObj && weatherObj.list && 
        <ForecastDiv>
          {
            locationObj.city &&
            <Header>{locationObj.city + ", " + weatherObj.city.country}</Header>
          }
          {
            <Hint>{weatherObj.list[0].weather[0].description}</Hint>
          }
          {
            <TemperatureDiv>
              <Temp> Now: &nbsp;{units === "metric" ? <RiCelsiusFill /> : <RiFahrenheitFill />}{weatherObj.list[0].temp.day}</Temp>
              <Temp> Min: &nbsp;{units === "metric" ? <RiCelsiusFill /> : <RiFahrenheitFill />}{weatherObj.list[0].temp.min}</Temp>
              <Temp> Max: &nbsp;{units === "metric" ? <RiCelsiusFill />: <RiFahrenheitFill />}{weatherObj.list[0].temp.max}</Temp>
              <Temp> Humidity({<Raindrop />}): {weatherObj.list[0].humidity}%</Temp>
            </TemperatureDiv>
          }
        </ForecastDiv>
        }
      </WeatherContainer>
  )
}