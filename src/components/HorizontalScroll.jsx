import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import BodyPart from './BodyPart';
import rightArrow from '../assets/icons/right-arrow.png';
import leftArrow from '../assets/icons/left-arrow.png';
import usePreventBodyScroll from './usePreventBodyScroll';

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
      // height="300px"
      fontSize="40px"
      marginRight="5rem"
      sx={{ cursor: 'pointer' }}
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
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
      height="300px"
      marginLeft="4rem"
      fontSize="40px"
      sx={{ cursor: 'pointer' }}
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
      onClick={() => scrollNext()}
    >
      <img src={rightArrow} alt="right arrow" />
    </Typography>
  );
}

const HorizontalScroll = ({ data }) => {
  console.log('object', data[0]);
  return (
    <ScrollMenu
      Footer={Arrows}
    >
      {data.map((each) => (
        <>
          <BodyPart part={each} />
        </>
      ))}
    </ScrollMenu>
  );
};

HorizontalScroll.propTypes = {
  data: PropTypes.func.isRequired,
};

export default HorizontalScroll;
