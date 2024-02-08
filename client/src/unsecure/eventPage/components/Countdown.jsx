import React from 'react';

import Timer from './Timer';
import { Box, Typography } from '@mui/material';

export default function Countdown({ event }) {

  return (
    event.dateStart < new Date() ?
      <>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h5' sx={{ paddingTop: 2, color: 'white', fontFamily: 'Fruitella, sans-serif' }}>Event in progress</Typography>
        </Box>
        <Timer date={event.dateEnd} />
      </>
      :
      <>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h5' sx={{ paddingTop: 2, color: 'white', fontFamily: 'Fruitella, sans-serif' }}>Event starts in</Typography>
        </Box>
        <Timer date={event.dateStart} />
      </>
  );

}