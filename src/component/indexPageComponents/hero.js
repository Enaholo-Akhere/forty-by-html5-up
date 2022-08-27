import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const theme = useTheme();
  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  //initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  return (
    <Box sx={{ marginTop: -6 }}>
      <Box
        paddingY={2}
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'70vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://images.pexels.com/photos/3042207/pexels-photo-3042207.jpeg?cs=srgb&dl=pexels-memo-candray-3042207.jpg&fm=jpg',
          )}
        />
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0, 0.8)',
            height: '100%',
            zIndex: 0,
            position: 'absolute',
            width: '100%',
            top: 0,
          }}
        />
        <Container
          data-aos="zoom-out-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              mt: { xs: 20, lg: 5, xl: 'none' },
            }}
          >
            <Typography
              variant="h2"
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
              Hi, my name is Forty
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
              variant="fullWidth"
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
                variant="p"
                sx={{
                  fontFamily: 'Source Sans Pro, sans-serif',
                  textAlign: 'left',
                  lineHeight: 1.5,
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  fontWeighnt: 700,
                  letterSpacing: { xs: 1, md: 3 },
                  zIndex: 10,
                  color: 'white',
                }}
              >
                A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED
                UNDER THE CREATIVE COMMONS.
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
                variant="outlined"
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
                endIcon={<ArrowRightAltIcon />}
              >
                GET STARTED
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
