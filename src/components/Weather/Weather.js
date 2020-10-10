import React, { useState } from "react";

import { 
  WeatherContainer, 
  ForecastDiv,
  WeatherIcon,
  Header,
  Hint,


} from "./Weather.components";

export default function Weather({
  weatherObj,
  locationObj
}) {
  
  return(
    <WeatherContainer>
    {
      weatherObj && 
      <ForecastDiv>
        <Header>{weatherObj.name}</Header>
        <Hint>{locationObj.city ? locationObj.city : ""}</Hint>
      </ForecastDiv>
    }
    </WeatherContainer>
  )
}