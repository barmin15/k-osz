import { SlidingAlbums } from './display/SlidingAlbums';
import React, { useEffect, useState } from 'react';

import { albums } from '../../../dummyData/albums';

import { useMediaQuery } from '@mui/material';

export default function SlidingAlbumsList() {
  const albumsPerMonitor = 9;
  const albumsPerTablet = 7;
  const albumsPerMobile = 3;
  const [visibleAlbums, setVisibleAlbums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 1020px)'); // Assuming tablet breakpoint
  const intervalRef = React.useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % albums().length);
    }, 1900); // Adjust the interval duration

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const albumsPerLine = isMobile ? albumsPerMobile : (isTablet ? albumsPerTablet : albumsPerMonitor);

    const currentVisibleAlbums = [...albums(), ...albums(), ...albums()].slice(
      currentIndex,
      currentIndex + albumsPerLine
    );

    setVisibleAlbums([...currentVisibleAlbums]);
  }, [currentIndex, isMobile, isTablet]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % albums().length);
    }, 1900); // Adjust the interval duration
  };

  return (
   <SlidingAlbums visibleAlbums={visibleAlbums}  isMobile={isMobile} isTablet={isTablet} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}  />
  );
}
