import styled from "styled-components";
import { WiRaindrop } from "react-icons/wi";


export const WeatherContainer = styled.div`
  padding: .5rem;
`

export const Header = styled.h1`
  text-align: center;
  margin-bottom: .5rem;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const ForecastDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export const Day = styled.div`
  position: relative;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .5rem;
  transition: .3s ease-in-out;
  user-select: none;
  border-radius: 5px;
  background: lightskyblue;

  &:hover {
    transform: scale(1.05)
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const WeatherIcon = styled.span`
  font-size : 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

