import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {

    const style = {
        container: {
           margin: 'auto'
        },
        header: {
            paddingLeft: 5,
            color: 'white',
            fontFamily: 'Fruitella, sans-serif',
            fontSize: 22,
            paddingBottom: 2,

        },
        content: {
            color: 'white',
            fontSize: {xs: 12.5, sm: 14, md: 14},
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
    }

    return (

        <Grid container spacing={0} sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <Box sx={style.container}>
                <Typography sx={style.header}>Meet Us</Typography>
                <Typography sx={style.content}>
                    <PhoneIcon fontSize="small" />
                    <span style={{ paddingLeft: 20 }}>+36 41 527 1507</span>
                </Typography>
                <Typography sx={style.content}>
                    <EmailIcon fontSize="medium" />
                    <span style={{ paddingLeft: 20 }}>contact@gmail.com</span>
                </Typography>
            </Box>
        </Grid>
    )
}