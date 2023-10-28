import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const HamBurgerMenu = ({ handleShow, show }) => {
  return (
    <Box
      onClick={handleShow}
      sx={{
        cursor: 'pointer',
        color: 'white',
        zIndex: 25,
        fontSize: '2rem',
        '&:hover': { color: 'primary.main', cursor: 'pointer' },
        mt: 3,
      }}
    >
      <Typography
        sx={{
          position: 'relative',
          left: 0,
          top: show ? 2 : -10,
          bottom: '100%',
          transform: show ? 'rotate(140deg)' : 'rotate(180deg)',
          transition: '0.3s ease-in-out',
          width: 40,
          borderRadius: 2,
          border: '1.5px solid lightgrey',
        }}
      ></Typography>
      <Typography
        sx={{
          position: 'relative',
          left: show ? 100 : 0,
          top: -2,
          transition: '0.3s ease-in-out',
          bottom: '100%',
          width: 40,
          borderRadius: 2,
          border: '1.5px solid lightgrey',
        }}
      ></Typography>
      <Typography
        sx={{
          position: 'relative',
          left: 0,
          top: show ? -3.5 : 6,
          transition: '0.3s ease-in-out',
          transform: show ? 'rotate(40deg)' : 'rotate(180deg)',
          bottom: '100%',
          width: 40,
          borderRadius: 2,
          border: '1.5px solid lightgrey',
        }}
      ></Typography>
    </Box>
  );
};
export default HamBurgerMenu;
