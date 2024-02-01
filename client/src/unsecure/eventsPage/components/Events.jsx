//React imports
import React, { useEffect, useState } from 'react';

//import dummy data
import { events } from '../../../dummyData/events';
import { Box, Typography } from '@mui/material';

export default function Events() {
    return events().map((event, index) => (
        <Box key={index}>
            <Typography variant='h3'>{event.title}</Typography>
        </Box>
    ))
}