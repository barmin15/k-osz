import { Box, Typography } from "@mui/material"
import React from "react"

export default function Lineup({ event }) {

    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography sx={{ fontFamily: 'Fruitella, sans-serif', fontWeight: 'bold' }}>Lineup:</Typography>
            {event.lineup.map((dj, index) => (
                <Typography sx={{ fontFamily: 'Fruitella, sans-serif' }} key={index}>{dj}</Typography>
            ))}
        </Box>
    )
}