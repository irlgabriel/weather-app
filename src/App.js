import React, { useState, useEffect } from 'react';
import './transitions.css'

// Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CSSTransition } from 'react-transition-group';
import { themeLight, themeDark } from './theme';
import { SearchBar, Background, LoadingOverlay, Navbar, WeatherInfo } from "./components"

import Box from "@material-ui/core/Box";
import FlashMessage from "react-flash-message";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '100vh',

  }
}))

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState('light');

  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  
  useEffect(() => {
    setLoading(false);
  }, [])

  //When location changes, fetch new weather data
  useEffect(() => {
    if(location) {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: location.split(',')[0]},
        headers: {
          'x-rapidapi-key': 'd89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      axios.request(options)
      .then(res => {
        setWeatherData(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
    }
  }, [location])

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <Background theme={theme}/>
        <CssBaseline />
        <Route to='/'>
          <Box className={classes.root}>
            <Navbar theme={theme} setTheme={setTheme} />
            <SearchBar setLocation={setLocation}/>
            <WeatherInfo />

            {/* Loading Overlay Transition */}
            <CSSTransition
              in={loading}
              classNames='fade'
              timeout={250}
              unmountOnExit
            >
              <LoadingOverlay />
            </CSSTransition>

            {/* Flash message transition */}
            <CSSTransition
              in={message !== ''}
              classNames='fade'
              timeout={250}
              unmountOnExit
            >
              <FlashMessage>{message}</FlashMessage>
            </CSSTransition>
          </Box>
        </Route>
      </ThemeProvider>
    </Router>
  );
}
export default App;
