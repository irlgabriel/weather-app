import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    
  },
  light: {
    background:'linear-gradient(116.51deg, rgba(124, 212, 222, 0.8) 0%, rgba(118, 250, 226, 0.3) 100%)',
    position: 'fixed',
    inset: '0',
  },
  dark: {
    background: 'linear-gradient(99.86deg, #1F5985 0%, #1C859C 100%), #FFFFFF',
    position: 'fixed',
    inset: '0',
  }
})

export default ({theme}) => {
  const classes = useStyles();

  return (
    <Box className={`${theme === 'light' ? classes.light : classes.dark}`} />
  )
}