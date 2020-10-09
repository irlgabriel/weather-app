import React, { useState } from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"

import { Background, SearchBar, Weather } from "./components"

  function App() {
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("london")
  return (
    <Container>
      <GlobalStyle />
      <Background />
      <SearchBar
        units={units}
        setUnits={setUnits}
        city={city}
        setCity={setCity}
      />
      <Weather 
        units={units}
        setUnits={setUnits}
        city={city}
        setCity={setCity}
      />
    </Container>
  );
}

export default App;
