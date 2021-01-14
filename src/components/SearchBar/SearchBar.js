import React from "react";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FaLocationArrow } from 'react-icons/fa';

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
    }
  }
})

export default function SearchBar() {
  const classes = useStyles();

  return(
    <form className={classes.root}>
      <Grid className={classes.grid} wrap='nowrap' direction='column' container>
        <TextField 
          className={classes.input}
          color='secondary'
          variant='outlined'
          label='City'
        />
        
        <Button variant='contained' color='secondary'>Search</Button>
        <Typography variant='h5'>Or</Typography>
        <Fab color='secondary'>
          <FaLocationArrow size='24px'/>
        </Fab>

      </Grid>

    </form>
  )
}