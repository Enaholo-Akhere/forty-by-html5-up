import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import Popmenu from './popmenu';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavAppBar = (props) => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Popmenu showBar={setShow} popBar={show} />
      <HideOnScroll {...props}>
        <Box
          sx={{
            zIndex: 6,
            position: 'fixed',
            top: 80,
            width: '100%',
            margin: 'auto',
          }}
        >
          <Box display={'flex'}>
            <Box
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: 'flex',
                paddingLeft: 3,
              }}
            >
              <Typography
                paddingX={1}
                sx={{
                  letterSpacing: 5,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  color: 'black',
                  cursor: 'pointer',
                  padding: 1,
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                }}
              >
                FORTY
              </Typography>
              <Typography
                paddingX={2}
                sx={{
                  letterSpacing: 5,
                  cursor: 'pointer',
                  paddingY: 1,
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                }}
              >
                BY HTML5 UP
              </Typography>
            </Box>

            <Box
              variant="h6"
              component="div"
              sx={{ display: 'flex', paddingRight: 3 }}
            >
              <Typography
                onClick={() => setShow(true)}
                paddingX={0.5}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontFamily: 'Source Sans Pro, sans-serif',
                  color: 'white',
                }}
              >
                MENU
              </Typography>
              <Typography
                paddingX={2}
                sx={{
                  letterSpacing: 5,
                  cursor: 'pointer',
                  color: 'white',
                  fontWeight: 600,
                  fontFamily: 'Source Sans Pro, sans-serif',
                }}
              >
                <MenuIcon onClick={() => setShow(true)} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default NavAppBar;
