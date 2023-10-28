import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Popmenu from './popmenu';
import HamBurgerMenu from '../../../utils/hamburger-menu';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const NavAppBar = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Popmenu showBar={setShow} popBar={show} />
      <HideOnScroll {...props}>
        <Box
          sx={{
            zIndex: 6,
            position: 'fixed',
            top: 70,
            width: '100%',
            margin: 'auto',
          }}
        >
          <Box display={'flex'}>
            <Box
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                display: 'flex',
                paddingLeft: 3,
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  letterSpacing: 5,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  fontSize: { xs: 12, md: 18 },
                  color: 'black',
                  cursor: 'pointer',
                  width: 100,
                  padding: { xs: 1, md: 2 },
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                }}
              >
                E-FOLIO
              </Typography>
              <Typography
                paddingX={2}
                sx={{
                  letterSpacing: { xs: 3, md: 5 },
                  cursor: 'pointer',
                  paddingY: 1,
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: 12, md: 18 },
                  color: 'lightgrey',
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                }}
              >
                WITH REACT & MUI-5
              </Typography>
            </Box>

            <Box
              variant='h6'
              component='div'
              sx={{ display: 'flex', paddingRight: 3 }}
            >
              <Typography
                onClick={() => setShow(true)}
                paddingX={0.5}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontFamily: 'Source Sans Pro, sans-serif',
                  color: 'lightgrey',
                  m: 2,
                  fontSize: { xs: '0.8rem', md: '1rem' },
                }}
              >
                MENU
              </Typography>
              <HamBurgerMenu handleShow={handleShow} show={show} />
            </Box>
          </Box>
        </Box>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default NavAppBar;
