import React from "react";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { FaLocationArrow } from 'react-icons/fa';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
  },
  input: {
    width: '90%',
    color: '#fff',
    marginBottom: '.5rem'
  },
  grid: {
    alignItems: 'center',
    '& > button': {
      marginBottom: '.5rem'
    },
    justifyContent: 'center'
  }
})

export default function SearchBar({setLocation, setMessage, setLoading}) {
  const classes = useStyles();

  /* JS Geolocation API */
  const findLocation = () => {
    setLoading(true);
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;


      const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
        params: {location: `${latitude},${longitude}`, language: 'en'},
        headers: {
          'x-rapidapi-key': 'd89eb58edamsh10814d1e692895ep158751jsn8a8b4c01281a',
          'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com'
        }
      };

      Axios.request(options)
      .then(res => {
        setLocation(`${res.data.results[0].locality}, ${res.data.results[0].country}`)
        setLoading(false);
      })
      .catch(err => {
        setMessage(err.response.data.message)
        setLoading(false);
      });

    }

    function error() {
      setLocation('Unable to retrieve your location');
    }

    if(!navigator.geolocation) {
      setLocation('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true, timeout: 5000, maximumAge: 0});
    }

  }
  //Submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.country.value);
  }

  return(
    <form onSubmit={(e) => submitHandler(e)} className={classes.root}>
      <Grid className={classes.grid} wrap='nowrap' direction='column' container>
        <TextField 
          name='country'
          size='medium'
          className={classes.input}
          color='secondary'
          variant='outlined'
          label='City'
        />
        
        <Button type='submit' variant='contained' color='secondary'>Search</Button>

        <Fab onClick={() => findLocation()} color='secondary'>
          <FaLocationArrow size='24px'/>
        </Fab>
      </Grid>

    </form>
  )
}