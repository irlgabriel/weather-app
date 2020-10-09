import React from "react";
import { 
  WeatherContainer, 
  ForecastDiv,
  CloudIcon,
  

} from "./Weather.components";

export default function Weather({
  responseObj,
}) {
  return(
    <WeatherContainer>
    {
      responseObj && 
      <ForecastDiv>
        <CloudIcon />
      </ForecastDiv>
    }
    </WeatherContainer>
  )
}