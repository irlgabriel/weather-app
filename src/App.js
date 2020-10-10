import React, { useState } from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"

import { Background, SearchBar, Weather } from "./components"

  function App() {
  const [weatherObj, setWeatherObj] = useState({});
  const [locationObj, setLocationObj] = useState({})
  const [backgroundImg, setBackground] = useState('/images/sunny.jpg')
  const [coords, setCoords] = useState("");

  // Geolocation API
  function getCoords() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setCoords("Geolocation not supported on you browser!")
    }
  }

  // Use HTML5 Geolocation's coords to get city name
  async function getCity() {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.long}&localityLanguage=en`)
    const res = await response.json()
    setLocationObj(res);
  }

  // OpenWeather API
  async function getWeatherObj(city, units = "metric") {
    const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?cnt=1&mode=null&lon=0&type=link%252C%20accurate&lat=0&units=${units}&q=${city}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
      }
    })
    const res = await response.json()
    setWeatherObj(res.list[0])
  }
  function success(position) {
    setCoords({lat: position.coords.latitude, long: position.coords.longitude})
    getCity()
  }
  function error() {
    setCoords("Unable to retrieve your location!")
  }

  return (
    <Container>
        <GlobalStyle />
      <Background img={backgroundImg} />
      <SearchBar
        getWeatherObj={getWeatherObj}
        locationObj={locationObj}
        setLocationObj={setLocationObj}
      />
      <Weather 
        getWeatherObj={getWeatherObj}
        weatherObj={weatherObj}
        locationObj={locationObj}
      />
    </Container>
  );
}

export default App;
