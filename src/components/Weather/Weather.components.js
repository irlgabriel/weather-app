import styled from "styled-components";
import { WiRaindrop } from "react-icons/wi";


export const WeatherContainer = styled.div`
  padding: .5rem;
  margin-top: auto;
  min-height: 74vh;
`

export const Header = styled.h1`
  text-align: center;
  margin-bottom: .5rem;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const ForecastDiv = styled.div`

`

export const CloudIcon = styled.span`
  font-size: 3em;
  color: lightgray;
`

export const Hint = styled.em`
  text-align: center;
  display: block;
  margin-bottom: .5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const TemperatureDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Temp = styled.h3`
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const Raindrop = styled(WiRaindrop)`
  font-size: 1.5rem;
  color: blue;
`