import React from "react";
import { FaSun, FaCloudRain, FaSnowflake } from "react-icons/fa"
import { BsCloudFill } from "react-icons/bs"

import { 
  WeatherContainer, 
  ForecastDiv,
  Header,
  Hint,
  TemperatureDiv,
  Temp,
  Day,
  WeatherIcon,
  SunsetIcon,
  SunriseIcon,
  Raindrop
} from "./Weather.components";

export default function Weather({
  weatherObj,
  locationObj,
  symbol,
}) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let dayName = days[d.getDay()];
  let dayIndex = days.indexOf(dayName);

  let icons = {
    sun: <FaSun />,
    rain: <FaCloudRain />,
    cloud: <BsCloudFill />,
    snow: <FaSnowflake />
  }
  function getWeatherIcon(desc) {
    if(desc.includes("sun")) {
      return icons.sun;
    }
    if(desc.includes("rain")) {
      return icons.rain;
    }
    if(desc.includes("snow")) {
      return icons.snow;
    }
    if(desc.includes("cloud")) {
      return icons.cloud;
    }
  }
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
            <WeatherIcon>{getWeatherIcon(day.weather[0].description)}</WeatherIcon>
            <Header>{days[(dayIndex ++) % 7]}</Header>
            <Hint>{day.weather[0].description}</Hint>
            {
              <TemperatureDiv>
                
                <Temp> {(new Date()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}: &nbsp;{day.temp.day}{symbol}</Temp>
                <Temp> Min: &nbsp;{day.temp.min}{symbol}</Temp>
                <Temp> Max: &nbsp;{day.temp.max}{symbol}</Temp>
                <Temp> Humidity({<Raindrop />}): &nbsp;{day.humidity}%</Temp>
                <Temp> Sunrise({<SunriseIcon />}): {new Date(day.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Temp>
                <Temp> Sunset({<SunsetIcon />}): {new Date(day.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Temp>
              </TemperatureDiv>
            }
          </Day>)
          }
        </ForecastDiv>
        }
      </WeatherContainer>
  )
}