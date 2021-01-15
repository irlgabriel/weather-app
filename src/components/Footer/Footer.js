import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    top: 'auto',
    bottom: 0,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fafafa'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
  
}))

export default () => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.root} color='secondary'>
      <Toolbar className={classes.toolbar}>
        <a className={classes.flex} href='https://github.com/irlgabriel'>
          <AiFillGithub color='#fafafa' size='48px' />
          <Typography variant='h4'>Github</Typography>
        </a>
        <a className={classes.flex} href='https://www.linkedin.com/in/gabriel-radu-5023021b9/'>
          <AiFillLinkedin color='lightblue' size='48px' />
          <Typography variant='h4'>LinkedIn</Typography>
        </a>
      </Toolbar>
    </AppBar>
  )
}