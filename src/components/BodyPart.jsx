import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import allImg from '../assets/icons/gym.png';

const BodyPart = ({ part }) => {
  console.log(part);
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      m="3rem"
      width="150px"
    >
      <img src={allImg} style={{ height: '45px', width: '45px' }} alt="gym" />
      <p>{part}</p>
    </Box>
  );
};

BodyPart.propTypes = {
  part: PropTypes.string.isRequired,
};

export default BodyPart;
