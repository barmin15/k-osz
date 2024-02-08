//React imports
import React from "react"
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material"

export default function Tickets({ event }) {
    const navigate = useNavigate();

    const style = { secondaryFont: 'Fruitella, sans-serif' };
    return (
        <Box sx={{ paddingTop: { xs: 10, sm: 10 }, paddingBottom: 10, textAlign: 'center' }}>
            {event.prices.map((price, index) => (
                <Typography key={index} sx={{ textAlign: 'center', fontFamily: style.secondaryFont }}>{price}</Typography>
            ))}
            <Button href={event.ticketUrl} target="_blank" variant='contained' sx={{ bgcolor: 'primary.main', color: 'white', marginTop: 3, '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' } }}>BUY</Button>
        </Box>
    )
}