import React, { useState } from "react";
import { 
  WeatherContainer, 
  ForecastDiv,
  CloudIcon,
  Header,

} from "./Weather.components";

export default function Weather({
  w2eatherObj,
}) {
  
  return(
    <WeatherContainer>
    {
      w2eatherObj && 
      <ForecastDiv>
        <Header>{w2eatherObj.name}</Header>
        <CloudIcon />
      </ForecastDiv>
    }
    </WeatherContainer>
  )
}