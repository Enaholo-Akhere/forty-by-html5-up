import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AOS from 'aos';
import 'aos/dist/aos.css';
import scrollIntoView from 'scroll-into-view-if-needed';
import ParallaxComp from './parallax';

const Hero = () => {
  const [node, setNode] = useState(<div id=''></div>);

  const handleScrollToView = () => {
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

  //initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ParallaxComp
      bgColor={'rgba(0,0,0, 0.8)'}
      bgImage={
        'https://images.pexels.com/photos/3042207/pexels-photo-3042207.jpeg?cs=srgb&dl=pexels-memo-candray-3042207.jpg&fm=jpg'
      }
    >
      <Container
        data-aos='zoom-out-right'
        data-aos-easing='ease-in-sine'
        data-aos-duration='700'
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            mt: { xs: 20, lg: 5, xl: 'none' },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              textAlign: 'left',
              color: 'white',
              zIndex: 10,
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 600,
              lineHeight: 2.65,
              fontSize: { xs: '1.8rem', md: '3.6rem' },
            }}
          >
            Hi, my name is Enaholo
          </Typography>
        </Box>
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
              color: 'white',
              width: '100%',
              border: '1px solid white',
              zIndex: 10,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              color: 'white',
              zIndex: 1,
              fontFamily: 'Source Sans Pro, sans-serif',
              width: { xs: '80%', md: '50%' },
              flexWrap: 'noWrap',
              marginRight: 2,
              marginY: 3,
              height: 'fit-content',
            }}
          >
            <Typography
              variant='p'
              sx={{
                fontFamily: 'Source Sans Pro, sans-serif',
                textAlign: 'left',
                lineHeight: 1.5,
                fontSize: { xs: '0.8rem', md: '1rem' },
                fontWeighnt: 700,
                letterSpacing: { xs: 1, md: 3 },
                zIndex: 10,
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              and i build responsive user interfaces and secured backend
              services using the necessary tools that is suitable for the
              project.
            </Typography>
          </Box>
          <Box
            sx={{
              color: 'white',
              zIndex: 10,
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeighnt: 900,
              marginY: 3,
              width: 200,
            }}
          >
            <Button
              variant='outlined'
              fullWidth
              sx={{
                color: 'white',
                borderColor: 'white',
                height: 'fit-content',
                padding: 2,
                fontFamily: 'Source Sans Pro, sans-serif',
                fontWeighnt: 900,
                letterSpacing: 3,
              }}
              endIcon={<ArrowDownwardIcon />}
              onClick={handleScrollToView}
              onMouseLeave={() => setNode(<div id=''></div>)}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Container>
    </ParallaxComp>
  );
};

export default Hero;
