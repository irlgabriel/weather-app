import React, { useState, useEffect } from 'react';
import './transitions.css'

// Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CSSTransition } from 'react-transition-group';
import { themeLight, themeDark } from './theme';
import { SearchBar, Background, LoadingOverlay, Navbar } from "./components"

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

  const [theme, setTheme] = useState(themeLight);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Background />
      <CssBaseline />
      <Route to='/'>
        <Box className={classes.root}>
            {/* Loading Overlay */}
            <CSSTransition
              in={loading}
              classNames='fade'
              timeout={250}
              unmountOnExit
            >
              <LoadingOverlay />
            </CSSTransition>

            <Navbar />
            <SearchBar />
        </Box>
      </Route>
      </ThemeProvider>
    </Router>
  );
}
export default App;
