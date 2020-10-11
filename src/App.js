import React, { useState } from 'react';
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
  const [backgroundImg, setBackground] = useState('/images/sunny.jpg')
  const [coords, setCoords] = useState("");
  const [unit, setUnit] = useState(false)
  const [showFlash, setFlash] = useState(false)
  const [flashMessage, setFlashMessage] = useState("Default Flash Message")
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
    const res = await response.json()
    console.log(res)
    setWeatherObj(res)
    // Change background to match weather info
    const main = res.list[0].weather[0].main;
    switch(main) {
      case "Clouds":
        setBackground("/images/clouds.jpg")
        break;
      case "Rain" || "Shower":
        setBackground("/images/rain.jpg");
        break;
      case "Sunny":
        setBackground("/images/sunny.jpg");
        break;
      case "Snow" || "Blizzard":
        setBackground("/images/snow.jpg");
        break;
      }
    } catch(e) {
      console.log(e)
    }
    
  

  }
  function success(position) {
    setCoords({lat: position.coords.latitude, long: position.coords.longitude})
    getCity(position.coords.latitude, position.coords.longitude)
  }
  function error() {
    setCoords("Unable to retrieve your location!")
  }
  return (
    <>
    <Background img={backgroundImg} />
    <Container>
      {
        showFlash && 
        <FlashContainer>
          <FlashMessage duration={50000} persistOnHover={true}>{flashMessage}</FlashMessage>
        </FlashContainer>
      }
      <GlobalStyle />
      <SearchBar
        getWeatherObj={getWeatherObj}
        locationObj={locationObj}
        setLocationObj={setLocationObj}
        getCoords={getCoords}
      />
      <Weather 
        getWeatherObj={getWeatherObj}
        weatherObj={weatherObj}
        locationObj={locationObj}
        units={unit}
      />
    </Container>
    </>
  );
}

export default App;
