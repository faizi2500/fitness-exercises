import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { fetchedData, options } from './fetchData';
import HorizontalScroll from './HorizontalScroll';

const SearchExercise = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
        .then((response) => response.json())
        .then((response) => setBodyParts(['all', ...response]))
        .catch((err) => console.error(err));
    };
    fetchBodyParts();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const hanldeSearchSumbit = async () => {
    if (searchText) {
      const response = await fetchedData(
        'https://exercisedb.p.rapidapi.com/exercises',
        options,
      );

      const filteredData = response.filter(
        (each) => each.bodyPart.toLowerCase().includes(searchText)
          || each.equipment.toLowerCase().includes(searchText)
          || each.target.toLowerCase().includes(searchText)
          || each.name.toLowerCase().includes(searchText),
      );
      setSearchText('');
      setSearchedData(filteredData);
    }
  };

  console.log(bodyParts);
  console.log(searchedData);

  return (
    <>
      <Stack alignItems="center" justifyContent="center" my="6%">
        <Typography
          width="50%"
          variant="h2"
          component="h2"
          fontWeight={700}
          sm={{ fontSize: { lg: '44px', xs: '10px' } }}
          textAlign="center"
        >
          Awesome Exercises You Should Know
        </Typography>
        <Box mt="5%" mb="5%" width="70%" display="flex">
          <TextField fullWidth id="outlined-basic" label="Search Here" variant="outlined" value={searchText} onChange={(e) => handleSearch(e)} />
          <Button type="button" onClick={() => hanldeSearchSumbit()} variant="contained" width="20px" endIcon={<SearchIcon />}>
            Search
          </Button>
        </Box>
      </Stack>
      <HorizontalScroll data={bodyParts} />
    </>
  );
};

export default SearchExercise;
