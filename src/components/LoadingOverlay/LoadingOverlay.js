import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    inset: '0',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(167.96deg, rgba(147, 145, 250, 0.68) 0%, rgba(255, 255, 255, 0) 100%)',
    zIndex: '10',
    opacity: '.6',
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress color='secondary' />
    </Box>
  )
}