import { Box } from "@mui/material";

export default function Leftbar({display}){
    return <Box flex={1} p={2} sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>{display}</Box>
}