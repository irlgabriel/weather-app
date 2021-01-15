import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import { CSSTransition } from 'react-transition-group';
import {
  ResponsiveContainer, 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  linearGradient,
  defs
} from 'recharts';

const useStyles = makeStyles({
  root: {
    border: '1px solid white',
    borderRadius: '5px',
  }
})

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

//&#8457 fahrenheit
//&$8451 celsius

export default ({location, data}) => {
  const classes = useStyles();

  return (
    <CSSTransition
      appear
      in={data[0]}
      timeout={250}
      classNames='fade'
      unmountOnExit
    >
      <Box className={classes.root} m={2} p={1}>
        <Typography variant='h3'>{location}, {days[new Date().getDay()]}</Typography>
        <Divider />
        <Typography variant='h4'>&#8451;</Typography>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21D2DE" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#21D2DE" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DE7A2A" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#DE7A2A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis stroke='#fff' dataKey='date' />
            <YAxis stroke='#fff' />
            <Tooltip />
            <Area type='montoone' dataKey='min' stroke="#21D2DE" fillOpacity={1} fill="url(#colorUv)"/>
            <Area type='monotone' dataKey='max' stroke="#DE7A2A" fillOpacity={1} fill="url(#colorPv)"/>
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </CSSTransition>
  )
}