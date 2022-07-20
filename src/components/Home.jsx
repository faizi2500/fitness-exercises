import React from 'react';
import { Box, Typography, Button } from '@mui/material/';

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
    <Typography variant="h2" fontSize="4rem" fontWeight="700" lineHeight="5rem" marginBlock="1rem">
      Sweat Smile
      <br />
      and Repeat
    </Typography>
    <Typography sx={{ lg: { lineHeight: '3rem' } }} letterSpacing="0.25rem" fontSize="1.5rem" lineHeight="3rem" marginTop="1.75rem" marginBottom="3.5rem">
      Checkout the most effective exercises
    </Typography>
    <Button variant="contained" color="error">
      Explore Exercises
    </Button>
  </Box>
);

export default Home;
