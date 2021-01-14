import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(162.46deg, #91B8FA 0%, rgba(133, 132, 255, 0.42) 100%)',
    position: 'absolute',
    inset: '0',
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} />
  )
}