import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import EachExercise from './EachExercise';

const ExerciseComponent = ({ exercises, bodyPartSelected }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const paginate = (e, value) => {
    console.log(value);
    setCurrentPage(value);
  };
  console.log(bodyPartSelected);
  return (
    <Box marginTop="3.5%">
      <Typography variant="h4" marginBottom="15%" textAlign="center">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap="5%"
        justifyContent="center"
        width="90%"
        marginInline="auto"
      >
        {exercises.map((exercise) => (
          <EachExercise key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" marginBlock="5%">
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisePerPage)}
            shape="rounded"
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

ExerciseComponent.propTypes = {
  exercises: PropTypes.func.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
};

export default ExerciseComponent;
