import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';

const EachExercise = ({ exercise }) => (
  <Box marginBlock="5%" borderTop="5px solid red" paddingTop="10%" width="30%">
    <img src={exercise.gifUrl} alt="exercise gif" loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          color: '#fff',
          background: '#ffa9a9',
          ml: '2%',
          borderRadius: '20px',
          paddingInline: '20px',
          paddingBlock: '10px',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          borderRadius: '20px',
          color: '#fff',
          ml: '3%',
          background: '#fcc757',
          paddingInline: '20px',
          paddingBlock: '10px',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography variant="h4" fontSize="20px" width="100%" paddingTop="3rem" textTransform="capitalize" textAlign="center" fontWeight="bold">
      {exercise.name}
    </Typography>
  </Box>
);

EachExercise.propTypes = {
  exercise: PropTypes.func.isRequired,
};

export default EachExercise;
