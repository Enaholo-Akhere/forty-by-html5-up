import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const ParallaxComp = ({ children, bgImage, bgColor }) => {
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
    <Box sx={{ marginTop: -6 }} id='enaholo'>
      <Box
        paddingY={2}
        className={'jarallax'}
        data-jarallax
        data-speed='0.2'
        position={'relative'}
        minHeight={'70vh'}
        display={'flex'}
        alignItems={'center'}
        id='agency__portfolio-item--js-scroll'
      >
        <Box className={'jarallax-img'} sx={styles(`${bgImage}`)} />
        <Box
          sx={{
            backgroundColor: bgColor,
            height: '100%',
            zIndex: 0,
            position: 'absolute',
            width: '100%',
            top: 0,
          }}
        />
        {children}
      </Box>
    </Box>
  );
};

export default ParallaxComp;
