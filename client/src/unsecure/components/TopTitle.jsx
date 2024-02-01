//React imports
import React, { useEffect, useRef } from 'react';

//MUI imports
import { Box, Fade, Typography } from '@mui/material';

export default function TopTitle({text}) {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Check if the device is mobile (you can customize this check based on your needs)
      const isMobile = window.innerWidth < 600; // Adjust the threshold for mobile devices

      // Set different multipliers for mobile and non-mobile views
      const multiplier = isMobile ? 0.5 : 0.5;

      // Calculate the translateY value for the parallax effect
      const translateY = scrollY * multiplier;

      // Apply the translateY to the image
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    // add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ paddingTop: 10, paddingBottom: 10, height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <Fade
        in={true}
        timeout={{ enter: 2500, exit: 0 }}
      >
        <Typography ref={imageRef} sx={{ transition: 'transform 0.3s ease-out', color: 'white', fontSize: { xs: 25, sm: 30, md: 35 }, textAlign: 'center', paddingBottom: 5, fontFamily: 'Rave, sans-serif' }}>
        {text}
        </Typography>
      </Fade>
    </Box>
  );
}
