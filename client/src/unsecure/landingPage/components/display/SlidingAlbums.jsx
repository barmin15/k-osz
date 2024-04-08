import React from "react";

import { Container, Card, CardMedia, Grid, Fade, Typography, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { colors } from "../../../../style/colors";

export function SlidingAlbums({
  visibleAlbums,
  isMobile,
  isTablet,
  handleMouseEnter,
  handleMouseLeave
}) {
  return <Container sx={{
    marginTop: {
      xs: 2,
      sm: 6,
      md: 9
    },
    marginBottom: 12
  }}>
    <Typography style={{
      fontSize: 18,
      paddingLeft: 11,
      fontWeight: 'bold'
    }}>
      New Releases
    </Typography>
    <Grid container spacing={2} alignContent={'center'}>
      {visibleAlbums.map((album, index) => {
        const distanceFromMiddle = Math.abs(index - Math.floor(visibleAlbums.length / 2));
        const scale = 1 - distanceFromMiddle / (visibleAlbums.length / 2) * 0.2; // Scale factor between 1 and 0.8

        return <Grid item xs={isMobile ? 4 : isTablet ? 1.7 : 2} sm={isMobile ? 6 : isTablet ? 1.7 : 2} md={1.3} key={index}>
          <Fade in={true} timeout={{
            enter: 1000,
            exit: 0
          }}>
            <Card sx={{
              width: '100%',
              height: '100%',
              '&:hover': {
                transform: 'scale(1.2)',
                cursor: 'pointer',
                borderRadius: '50%'
              },
              transform: `scale(${scale})`
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <CardMedia component="img" image={album.image} alt={album.title} sx={{
                height: '100%'
              }} />
            </Card>
          </Fade>
        </Grid>;
      })}
    </Grid>
    <Button sx={{
      color: 'black',
      float: 'right',
      paddingRight: 3,
      marginTop: 2,
      '&:hover': { color: colors().secondary}
    }}>More<ChevronRightIcon /></Button>
  </Container>;
}
