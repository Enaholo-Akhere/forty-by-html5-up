import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

function Popmenu({ showBar, popBar }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleShowBar = () => {
    showBar(false);
  };

  const navs = ['HOME', 'LANDING', 'GENERIC', 'ELEMENT'];
  return (
    <Box
      backgroundColor="rgba(0, 6, 20, 0.9)"
      data-aos={!popBar ? 'fade-zoom-out' : null}
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        marginTop: 13,
        zIndex: 100,
        right: !popBar ? '180vw' : null,
        transition: '0.3s ease-in-out',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: 25,
          paddingX: 4,
          paddingY: 1,
        }}
      >
        <CloseIcon
          onClick={handleShowBar}
          sx={{
            color: 'white',
            zIndex: 25,
            fontSize: '2rem',
            '&:hover': { color: 'primary.main', cursor: 'pointer' },
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '80%', sm: '60%', md: '30%' },
          margin: 'auto',
          position: 'fixed',
          alignContent: 'center',
          zIndex: 20,
          left: '50%',
          transition: '0.3s ease-in-out',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {navs.map((nav) => {
          return (
            <Box
              sx={{
                width: '100%',
                margin: 'auto',
              }}
            >
              <Typography
                key={nav}
                sx={{
                  color: 'white',
                  fontFamily: 'Source San Pro, sans-serif',
                  fontWeight: 600,
                  marginBottom: 2,
                  lineSpacing: 2,
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  transition: '0.3 ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                  letterSpacing: 3,
                }}
              >
                {nav}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  width: '100%',
                }}
              >
                <Divider
                  variant="fullWidth"
                  light
                  sx={{
                    width: '100%',
                    border: '0.1px solid gray',
                    zIndex: 10,
                    mb: 3,
                  }}
                />
              </Box>
            </Box>
          );
        })}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            margin: 'auto',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              fontFamily: 'Source San Pro, sans-serif',
              fontWeight: 600,
              backgroundColor: 'white',
              color: 'rgb(8, 16, 40)',
              lineSpacing: 2,
              py: 2,
              letterSpacing: 3,
              my: 2,
            }}
          >
            GET STARTED
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              fontFamily: 'Source San Pro, sans-serif',
              fontWeight: 600,
              bgcolor: 'rgb(8, 16, 40)',
              color: 'white',
              my: 2,
              letterSpacing: 3,
              lineSpacing: 2,
              border: '2px solid white',
              py: 2,
              '&:hover': {
                color: 'primary.main',
                borderColor: 'primary.main',
              },
            }}
          >
            LOG IN
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Popmenu;
