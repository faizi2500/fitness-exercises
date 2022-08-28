import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import BodyPart from './BodyPart';
import rightArrow from '../assets/icons/right-arrow.png';
import leftArrow from '../assets/icons/left-arrow.png';
import './hidescrollbar.css';

const Arrows = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div style={{ marginLeft: '10px', display: 'flex' }}>
      <LeftArrow />
      <RightArrow />
    </div>
  </div>
);

function LeftArrow() {
  const { scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Typography
      fontSize="40px"
      marginRight="5rem"
      sx={{ cursor: 'pointer' }}
      marginTop="8.5%"
      onClick={() => scrollPrev()}
    >
      <img src={leftArrow} alt="left arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography
      marginLeft="4rem"
      fontSize="40px"
      marginTop="8.5%"
      sx={{ cursor: 'pointer' }}
      onClick={() => scrollNext()}
    >
      <img src={rightArrow} alt="right arrow" />
    </Typography>
  );
}

const HorizontalScroll = ({ data, bodyPartSelected, setBodyPartSelected }) => (
  <ScrollMenu
    Footer={Arrows}
  >
    {data.map((each) => (
      <>
        <BodyPart
          part={each}
          bodyPartSelected={bodyPartSelected}
          setBodyPartSelected={setBodyPartSelected}
        />
      </>
    ))}
  </ScrollMenu>
);

HorizontalScroll.propTypes = {
  data: PropTypes.func.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default HorizontalScroll;
