import React, { useState, useEffect } from 'react';
import './App.css'

// Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CSSTransition } from 'react-transition-group';
import { themeLight, themeDark } from './theme';
import { SearchBar, Background, LoadingOverlay, Navbar, WeatherInfo, Footer } from "./components"

import Box from "@material-ui/core/Box";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  flash: {
    position: 'absolute',
    top: '50px',
    padding: '.5rem',
    width: '300px',
    left: 'calc(50% - 150px)',
    zIndex: '112115',
    borderRadius: '6px',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(99.86deg, #697E83 0%, #1C859C 100%), #FFFFFF;',
    color: 'white'
  }
}))

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState('dark');

  const [weatherObj, setWeatherObj] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [units, setUnits] = useState('metric');
  
  //Clear message after 3s;
  useEffect(() => {
    if(message !== '') {
      setTimeout(() => {
        setMessage('');
      }, 3000)
    }
  }, [message])

  //When location/units changes, fetch new weather data
  useEffect(() => {
    if(location) {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        params: {
          q: location.split(',')[0], 
          units: units,
          appid: 'c3fc89948932320041534da5615559ec',
          cnt: '9'
        },
      };
      axios.request(options)
      .then(res => {
        //preprocess data to get it into the right format for recharts lib
        setWeatherObj(res.data);
        const data = res.data.list.map(forecast => (
          {
            date: forecast.dt_txt.split(' ')[1].split(':')[0] + ':00',
            //max: forecast.main.temp_max,
            //min: forecast.main.temp_min
            temp: forecast.main.temp,
            feels: forecast.main.feels_like,
        }))
        setWeatherData(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        console.log(err.response)
        setMessage(err.response.data.error.message)
      });
    }
  }, [location, units])

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <Background theme={theme}/>
        <CssBaseline />
        <Route to='/'>
          <Box className={classes.root}>
            <Navbar theme={theme} setTheme={setTheme} />
            <SearchBar setLocation={setLocation} setMessage={setMessage} setLoading={setLoading}/>
            <WeatherInfo weatherObj={weatherObj} theme={theme} location={location} data={weatherData} units={units} setUnits={setUnits}/>
            <Footer />

            {/* Loading Overlay Transition */}
            <CSSTransition
              appear
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
              <div className={classes.flash}>{message}</div>
            </CSSTransition>
          </Box>
        </Route>
      </ThemeProvider>
    </Router>
  );
}
export default App;
