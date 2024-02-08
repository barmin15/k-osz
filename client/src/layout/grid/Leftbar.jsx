import { Box } from "@mui/material";

export default function Leftbar({display}){
    return <Box flex={3} sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>{display}</Box>
}