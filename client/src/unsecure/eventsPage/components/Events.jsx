import React, { useEffect, useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

import { events } from '../../../dummyData/events';

import { Box, Typography, Button, Fade } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Events() {
    const navigate = useNavigate();
    const [currentCard, setCurrentCard] = useState(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        //handling card repwsonsivity to scrolling
        const handleScroll = () => {
            const cardIndexInView = cardsRef.current.findIndex((cardRef) => {
                const rect = cardRef.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });

            setCurrentCard(cardIndexInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return events().map((event, index) => (
        <Parallax
            key={index}
            bgImageAlt='techno'
            strength={500}
            style={{ postion: 'relative', }}
        >
            <div ref={(ref) => (cardsRef.current[index] = ref)}>
                <Box
                    bgcolor={'primary.main'}
                    sx={{
                        postion: 'relative',
                        minHeight: '70vh',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        transform: `translateY(${(index - currentCard) * 50}%)`,
                        opacity: currentCard === index ? 1 : 0,
                        transition: 'transform 0.5s ease, opacity 0.5s ease',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                        padding: '2rem',
                    }}
                >
                    <Typography variant='h3' sx={{ paddingBottom: { xs: 2, md: 5 }, color: 'white', marginBottom: '1rem', fontFamily: 'Rave, sans-serif' }}>
                        {event.title}
                    </Typography>
                    <Fade
                        in={true}
                        timeout={{ enter: 2500, exit: 0 }}
                    >
                        <Typography variant='body1' sx={{ color: 'white', fontSize: {xs: 16, sm:18}, marginBottom: '1.5rem', fontFamily: 'Fruitella, sans-serif' }}>
                            {event.description.length > 300 ? event.description.substring(0, 300) + '...' : event.description}
                        </Typography>
                    </Fade>
                    <Button onClick={(e) => navigate(`/event/${event.title}`)} variant="contained"
                        sx={{
                            marginTop: { xs: 2, sm: 0 },
                            fontSize: { xs: 13, md: 14 },
                            position: 'absolute',
                            bottom: { xs: 10, md: 30 },
                            right: { xs: 5, md: 30 },
                            width: { xs: 150, md: 200 },
                            backgroundColor: 'primary.main',
                            '&:hover': { color: 'secondary.main' },
                            fontFamily: 'Fruitella, sans-serif'
                        }}>
                        check out<KeyboardArrowRightIcon />
                    </Button>
                </Box>
            </div>
        </Parallax>
    ));
}
