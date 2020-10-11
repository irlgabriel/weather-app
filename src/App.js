import React, { useState, useEffect } from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"
import { Background, SearchBar, Weather } from "./components"
import { FlashContainer } from "./App.components";
import FlashMessage from "react-flash-message";

function App() {
  const [weatherObj, setWeatherObj] = useState({});
  const [locationObj, setLocationObj] = useState({})
  const [coords, setCoords] = useState("");
  const [unit, setUnit] = useState(false)

  // FlashMessage States
  const [showFlash, setFlash] = useState(false)
  const [flashMessage, setFlashMessage] = useState("Default Flash Message")
  
  // Set showFlash state back to false after message fades
  useEffect(() => {
    if(showFlash) {
      setTimeout(() => {
        setFlash(false)
      }, 3000)
    }
  }, [showFlash])

  // Geolocation API
  function getCoords() {
    if(navigator.geolocation) {
      setFlashMessage("Loading...");
      setFlash(true);
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setCoords("Geolocation not supported on you browser!")
    }
  }

  // Use HTML5 Geolocation's coords to get city name
  async function getCity(lat, long) {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
    const res = await response.json()
    setLocationObj(res);

    // Now we get weather based on the city name
    getWeatherObj(res.city);

    // Stop showing Loading flash message
    setFlash(false);
  }

  // OpenWeather API
  async function getWeatherObj(city, units = "metric") {
    setUnit(units)
    try {
      const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${city}&cnt=7&units=${units}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
        }
      })
      // if(!response.ok) { throw response }
      const res = await response.json()
      setWeatherObj(res)
      if(res.cod === "404") { throw res.message }
      } catch(e) {
        setFlashMessage(e);
        setFlash(true);
      }
  }

  // Callbacks for HTML Geolocation function
  function success(position) {
    setCoords({lat: position.coords.latitude, long: position.coords.longitude})
    getCity(position.coords.latitude, position.coords.longitude)
  }

  function error() {
    setCoords("Unable to retrieve your location!")
  }
  return (
    <Container>
      <Background />
      {
        showFlash && 
        <FlashContainer>
          <FlashMessage duration={3000} persistOnHover={true}>{flashMessage}</FlashMessage>
        </FlashContainer>
      }
        <GlobalStyle />
      <SearchBar
        getWeatherObj={getWeatherObj}
        locationObj={locationObj}
        setLocationObj={setLocationObj}
        getCoords={getCoords}
        weatherObj={weatherObj}
      />
      <Weather 
        getWeatherObj={getWeatherObj}
        weatherObj={weatherObj}
        locationObj={locationObj}
        units={unit}
      />
    </Container>

  );
}

export default App;
