import React from "react";

import { 
  WeatherContainer, 
  ForecastDiv,
  Header,
  Hint,
  TemperatureDiv,
  Temp,
  Day,

} from "./Weather.components";

export default function Weather({
  weatherObj,
  locationObj,
  units
}) {
  return( 
      <WeatherContainer>
        {
          locationObj.city && weatherObj.list && 
          <Header>{locationObj.city + ", " + weatherObj.city.country}</Header>
        }
        {
        weatherObj && weatherObj.list && 
        <ForecastDiv>
          { weatherObj.list.map(day => 
          <Day>
            {
              <Hint>{day.weather[0].description}</Hint>
            }
            {
              <TemperatureDiv>
                <Temp> Now: &nbsp;{day.temp.day}</Temp>
                <Temp> Min: &nbsp;{day.temp.min}</Temp>
                <Temp> Max: &nbsp;{day.temp.max}</Temp>
                <Temp> Humidity: &nbsp;{day.humidity}%</Temp>
              </TemperatureDiv>
            }
          </Day>)
          }
        </ForecastDiv>
        }
      </WeatherContainer>
  )
}