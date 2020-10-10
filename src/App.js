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
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    setCoords("Geolocation not supported on you browser!")
  }
  function success(position) {
    setCoords({lat: position.coords.latitude, long: position.coords.longitude})
  }
  function error() {
    setCoords("Unable to retrieve your location!")
  }

  function getCity() {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.long}&localityLanguage=en
    `)
    .then(response => response.json())
    .then(res => setLocationObj(res))
  }

  // OpenWeather API
  function getWeatherObj(city, units) {
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?cnt=1&mode=null&lon=0&type=link%252C%20accurate&lat=0&units=${units}&q=${city}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
      }
    })
    .then(response => response.json()
    .then((res) => {
      setWeatherObj(res.list);
    }))
    .catch(err => {
      console.log(err);
    });
  } 


  return (
    <Container>
      <button onClick={getCity}>getCity</button>
      <GlobalStyle />
      <Background img={backgroundImg} />
      <SearchBar
        getWeatherObj={getWeatherObj}
      />
      <Weather 
        getWeatherObj={getWeatherObj}
        weatherObj={weatherObj}
      />
    </Container>
  );
}

export default App;
