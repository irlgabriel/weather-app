import React from 'react';

import Box from '@material-ui/core/Box';
import { CSSTransition } from 'react-transition-group';

export default ({data}) => {
  return (
    <CSSTransition
      in={data.current}
      timeout={250}
      classNames='fade'
      unmountOnExit
    >
      <Box>
        {data.current && data.location.name}
      </Box>
    </CSSTransition>
  )
}