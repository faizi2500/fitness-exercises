import React from 'react';
import Stack from '@mui/material/Stack';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <div>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '40%', height: '70px' }}
      px="2rem"
      pt="0.5em"
    >
      <img src={Logo} alt="gym logo" style={{ objectFit: 'contain', transform: 'scale(1.5)' }} />
      <Stack
        spacing={5}
        direction="row"
        justifyContent="none"
        alignItems="center"
        fontSize="1.2rem"
        sx={{ width: '40%' }}
      >
        <p className="home-page-link-nav" style={{ color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</p>
        <p className="exercise-page-link-nav">Exercise</p>
      </Stack>
    </Stack>
  </div>
);

export default Navbar;
