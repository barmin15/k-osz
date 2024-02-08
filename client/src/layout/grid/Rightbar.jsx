import { Box, Typography } from "@mui/material";

export default function RightBar({display}){
    return <Box flex={3} sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>{display}</Box>
}