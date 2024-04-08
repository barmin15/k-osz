import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {

    const style = {
        container: {
            margin: 'auto',
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
            fontSize: { xs: 12.5, sm: 14, md: 14 },
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        link: {
            paddingLeft: '5px',
            textDecoration: 'none',
            color: 'inherit',
        }
    }

    return (
        <Grid container spacing={0} sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <Box sx={style.container}>
            <Typography sx={style.header}>Meet Us</Typography>
            <Typography sx={style.content}>
                <EmailIcon fontSize="medium" />
                <span style={{paddingLeft: 5}}>contact@gmail.com</span>
            </Typography>
                <Typography sx={style.content}>
                    <PhoneIcon fontSize="small" />
                    <span style={{paddingLeft: 5}}>+36 41 523 7307</span>
                </Typography>
                <Typography sx={style.content}>
                    <InstagramIcon fontSize="medium" />
                    <a href="https://www.instagram.com/originrave" target="_blank" rel="noopener noreferrer" style={style.link}>
                        @originrave
                    </a>
                </Typography>
                <Typography sx={style.content}>
                    <FacebookIcon fontSize="medium" />
                    <a href="https://www.facebook.com/originrave" target="_blank" rel="noopener noreferrer" style={style.link}>
                        originrave
                    </a>
                </Typography>
            </Box>
        </Grid>
    )
}
