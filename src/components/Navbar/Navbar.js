import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { BsMoon } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TiWeatherDownpour } from 'react-icons/ti'

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  },
  right: {
    marginLeft: 'auto',
  }

})

export default ({theme, setTheme}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color='secondary' position='sticky'>
      <Toolbar>
        <Link to='/'>
          <TiWeatherDownpour color='#fff' size='32px' />
        </Link>
        <FormControlLabel
          className={classes.right}
          onChange={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
          checked={theme === 'dark'}
          label={<BsMoon color='orange' size='32px'/>}
          control={
            <Switch color='primary' />
          }
        >
        </FormControlLabel>
      </Toolbar>
    </AppBar>
  )
}