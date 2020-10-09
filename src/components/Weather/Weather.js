import React from "react";
import { 
  WeatherContainer, 
  ForecastDiv,
  
} from "./Weather.components";

export default function Weather({
  responseObj,
}) {
  return(
    <WeatherContainer>
    {
      responseObj && 
      <ForecastDiv>

      </ForecastDiv>
    }
    </WeatherContainer>
  )
}