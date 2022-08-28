import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import allImg from '../assets/icons/gym.png';

const BodyPart = ({ part, bodyPartSelected, setBodyPartSelected }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    marginLeft="150px"
    borderTop={bodyPartSelected === part ? 'red 4px solid' : ''}
    width="150px"
    padding="20px"
    sx={{ cursor: 'pointer' }}
    onClick={() => setBodyPartSelected(part)}
  >
    <img src={allImg} style={{ height: '55px', width: '55px' }} alt="gym" />
    <Typography variant="h3" component="h3" fontSize="18px" fontWeight="600" marginTop="15px">
      {part.charAt(0).toUpperCase() + part.slice(1)}
    </Typography>
  </Box>
);

BodyPart.propTypes = {
  part: PropTypes.string.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default BodyPart;
