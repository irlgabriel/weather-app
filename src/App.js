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

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '100vh',

  }
}))

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState('light');

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <Background theme={theme}/>
        <CssBaseline />
        <Route to='/'>
          <Box className={classes.root}>
            <Navbar theme={theme} setTheme={setTheme} />
            <SearchBar />
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
