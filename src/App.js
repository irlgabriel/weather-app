import React, { useState } from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"

import { Background, SearchBar, Weather } from "./components"

  function App() {
  const [responseObj, setResponseObj] = useState({});

  function getResponseObj(city, units) {
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?cnt=1&mode=null&lon=0&type=link%252C%20accurate&lat=0&units=${units}&q=${city}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "d89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a"
      }
    })
    .then(response => response.json()
    .then((res) => {
      setResponseObj(res.list);
    }))
    .catch(err => {
      console.log(err);
    });
  } 


  return (
    <Container>
      <GlobalStyle />
      <Background />
      <SearchBar
        getResponseObj={getResponseObj}
      />
      <Weather 
        getResponseObj={getResponseObj}
        responseObj={responseObj}
      />
    </Container>
  );
}

export default App;
