import { Box } from "@mui/material";

export default function Feed({ display }) {
    return (
        <Box flex={6} sx={{ width: { xs: '100vw', sm: '100vw' } }}>
            {display}
        </Box>)
}