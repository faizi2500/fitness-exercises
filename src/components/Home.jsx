import React from 'react';
import { Box, Typography, Button } from '@mui/material/';
import HeroBanner from '../assets/images/banner.png';
import './Home.css';

const Home = () => (
  <Box
    sx={{
      mt: { lg: '5rem', xs: '5rem' },
      ml: { lg: '4rem', xs: '2rem' },
    }}
    postion="relative"
    p="5"
    width="40%"
  >
    <Typography fontSize="1.5rem" fontWeight="600" color="#ff2625">
      Fitness Exercise app
    </Typography>
    <Typography variant="h2" fontSize="4rem" fontWeight="700" lineHeight="5rem" marginBlock="0.3rem">
      Sweat Smile
      <br />
      and Repeat
    </Typography>
    <Typography sx={{ lg: { lineHeight: '3rem' }, xm: { display: 'hide' } }} letterSpacing="0.25rem" fontSize="1.5rem" lineHeight="3rem" marginTop="0.75rem" marginBottom="1.5rem">
      Checkout the most effective exercises
    </Typography>
    <Button href="#exercises" variant="contained" color="error">
      Explore Exercises
    </Button>
    <Typography fontSize="16rem" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontWeight={600} color="#ff2625">
      Exercices
    </Typography>
    <img src={HeroBanner} alt="website banner" className="hero-banner-img" />
  </Box>
);

export default Home;
