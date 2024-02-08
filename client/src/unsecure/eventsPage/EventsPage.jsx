import React, {useEffect, useState} from 'react';

import FullWidthLayout from '../../layout/simple/FullWidthLayout';
import Events from './components/Events';
import { Box } from '@mui/material';

export default function EventsPage() {

    useEffect(() => {window.scrollTo(0, 20);},[])

    return (
        <>
            <Box sx={{ height: '10vh' }}></Box>
            <FullWidthLayout display={<Events />} />
            <Box sx={{ height: '17vh' }}></Box>
        </>
    )
}