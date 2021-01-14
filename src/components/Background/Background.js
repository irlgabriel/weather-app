import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    
  },
  light: {
    background: 'linear-gradient(162.46deg, #91B8FA 0%, rgba(133, 132, 255, 0.42) 100%)',
    position: 'absolute',
    inset: '0',
  },
  dark: {
    background: 'linear-gradient(99.86deg, #1F5985 0%, #1C859C 100%), #FFFFFF',
    position: 'absolute',
    inset: '0',
  }
})

export default ({theme}) => {
  const classes = useStyles();

  return (
    <Box className={`${theme === 'light' ? classes.light : classes.dark}`} />
  )
}