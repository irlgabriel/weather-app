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
}) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let dayName = days[d.getDay()];
  let dayIndex = days.indexOf(dayName);
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
          <Day key={days[(dayIndex) % 7]}>
            <Header>{days[(dayIndex ++) % 7]}</Header>
            <Hint>{day.weather[0].description}</Hint>
            {
              <TemperatureDiv>
                
                <Temp> {(new Date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}: &nbsp;{day.temp.day}</Temp>
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