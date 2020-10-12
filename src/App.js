import React, { useState, useEffect } from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"
import { Background, SearchBar, Weather } from "./components"
import { FlashContainer, ToggleUnit, ToggleDiv, RightToggle, LeftToggle } from "./App.components";
import FlashMessage from "react-flash-message";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";


function App() {
  console.log("App runs one")
  const [weatherObj, setWeatherObj] = useState({});
  const [locationObj, setLocationObj] = useState({})
  const [units, setUnits] = useState("metric")
  const [symbol, setSymbol] = useState(<RiCelsiusFill />)

  // FlashMessage States
  const [showFlash, setFlash] = useState(false)
  const [flashMessage, setFlashMessage] = useState("Default Flash Message")
  
  // Set symbol when unit changes
  
  useEffect(()   => {
    if(weatherObj.list) {
      setSymbol(units === "metric" ? <RiCelsiusFill /> : <RiFahrenheitFill />);
      getWeatherObj()
    }
  }, [units])
  

  // Set showFlash state back to false after message fades
  useEffect(() => {
    if(showFlash) { 
      setTimeout(() => {
        setFlash(false)
      }, 3000)
    }
  }, [showFlash])

  // Call OpenWeather API after locationObj is changed
  useEffect(() => {
    if(locationObj.city) {
      getWeatherObj()
    }
  }, [locationObj])

  // Geolocation API
  function getCoords() {
    if(navigator.geolocation) {
      setFlashMessage("Loading...");
      setFlash(true);
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setFlashMessage("Geolocation not supported on you browser!")
      setFlash(true);
    }
  }

  // Use HTML5 Geolocation's coords to get city name
  async function getCity(lat, long) {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
    const res = await response.json()
    setLocationObj(res);
  }

  // OpenWeather API
  async function getWeatherObj() {
    setFlashMessage("Loading...")
    setFlash(true);
    try {
      const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${locationObj.city}&cnt=7&units=${units}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
      }
    })
    // if(!response.ok) { throw response }
    const res = await response.json()
    setWeatherObj(res)
    setFlash(false)
    if(res.cod === "404") { throw res.message }
    } catch(e) {
      setFlashMessage(e);
      setFlash(true);
    }
  }

  // Callbacks for HTML Geolocation function
  function success(position) {
    getCity(position.coords.latitude, position.coords.longitude)
  }
  function error() {
    setFlashMessage("Cannot Get Position!");
    showFlash(true);
  }

  function toggleUnits() {
    setUnits(units === "metric" ? "imperial" : "metric");
  }

  return (
    <Container>
      <Background />
      <ToggleDiv>
        <LeftToggle><RiCelsiusFill /></LeftToggle>
        <RightToggle><RiFahrenheitFill /></RightToggle>
        <ToggleUnit onClick={toggleUnits} units={units}/>
      </ToggleDiv>
      {
        showFlash && 
        <FlashContainer>
          <FlashMessage duration={3000} persistOnHover={true}>{flashMessage}</FlashMessage>
        </FlashContainer>
      }
        <GlobalStyle />
      <SearchBar
        setFlash={setFlash}
        setFlashMessage={setFlashMessage}
        getWeatherObj={getWeatherObj}
        locationObj={locationObj}
        setLocationObj={setLocationObj}
      />
      <Weather 
        getWeatherObj={getWeatherObj}
        weatherObj={weatherObj}
        locationObj={locationObj}
        units={units}
        symbol={symbol}
      />
    </Container>

  );
}

export default App;
