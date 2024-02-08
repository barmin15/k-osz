//React imports
import React from "react"

//MUI imports
import { Box, Typography } from "@mui/material"

export default function Description({event}){

    return (
        <Box sx={{textAlign: 'center'}}>
        <Typography variant="h3" sx={{ margin: 6, fontFamily: 'Rave, sans-serif'}}>{event.title}</Typography>
        <Typography sx={{fontSize: {xs: 16, sm: 18}, marginLeft: {xs: 3, sm: 11}, marginRight: {xs: 3, sm: 11}, marginBottom: 4, fontFamily: 'Fruitella, sans-serif'}}>{event.description}</Typography>
        </Box>
    )
}