import React from 'react';
import { 
  GlobalStyle, 
  Container,
} from "./globalStyles"

import { Background, SearchBar, Weather } from "./components"
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Background />
      <SearchBar />
      <Weather></Weather>
    </Container>
  );
}

export default App;
