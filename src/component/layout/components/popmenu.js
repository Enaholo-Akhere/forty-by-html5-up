import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import HamBurgerMenu from '../../../utils/hamburger-menu';
import SocialButtons from './social-buttons';

function Popmenu({ showBar, popBar }) {
  const [node, setNode] = useState(<div id=''></div>);

  const handleScrollToView = (nav, id) => {
    const home = document.getElementById('Home');
    const content1 = document.getElementById('Projects');
    const content2 = document.getElementById('Core Competence');
    const content3 = document.getElementById('Contact Me');
    const idsArray = [
      { name: home },
      { name: content1 },
      { name: content2 },
      { name: content3 },
    ];
    const nodeElement = idsArray.filter((ea, i) => i === id)[0].name;

    setNode(nodeElement);
  };

  const handleGetStarted = () => {
    const Projects = document.getElementById('Register');
    console.log('projects', Projects);
    setNode(Projects);
  };

  scrollIntoView(node, {
    scrollMode: 'if-needed',
    block: 'start',
    inline: 'start',
    behavior: 'smooth',
  });

  const handleShow = () => {
    showBar((prev) => !prev);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const navs = ['HOME', 'PROJECTS', 'COMPETENCE', 'CONTACT'];
  return (
    <Box
      backgroundColor='rgba(0, 6, 20, 0.9)'
      data-aos={!popBar ? 'fade-zoom-out' : null}
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        marginTop: 15,
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
        <HamBurgerMenu handleShow={handleShow} show={popBar} />
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
        {navs.map((nav, i) => {
          return (
            <Box
              onMouseLeave={() => setNode(<div id=''></div>)}
              onClick={() => {
                handleScrollToView(nav, i);
                showBar((prev) => !prev);
              }}
              key={nav}
              sx={{
                width: '100%',
                margin: 'auto',
              }}
            >
              <Typography
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
                  variant='fullWidth'
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
            onMouseLeave={() => setNode(<div id=''></div>)}
            onClick={() => {
              handleGetStarted();
              showBar((prev) => !prev);
            }}
            sx={{
              fontFamily: 'Source San Pro, sans-serif',
              fontWeight: 600,
              backgroundColor: 'white',
              color: 'rgb(8, 16, 40)',
              lineSpacing: 2,
              py: 2,
              letterSpacing: 3,
              my: 2,
              '&: hover': { bgcolor: '#dddddd' },
            }}
          >
            GET STARTED
          </Button>
          <SocialButtons display={'block'} />
        </Box>
      </Box>
    </Box>
  );
}

export default Popmenu;
