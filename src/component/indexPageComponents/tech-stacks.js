import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParallaxComp from './parallax';

const TechStack = () => {
  //initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ParallaxComp
      bgColor={'rgba(0,0,0, 0.3)'}
      bgImage={
        'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1500'
      }
    >
      <Container
        data-aos='zoom-out-right'
        data-aos-easing='ease-in-sine'
        data-aos-duration='700'
      >
        <Box
          sx={{
            margin: 'auto',
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ width: 200, height: 200 }}>
            <Box
              sx={{ width: 1, height: 1, borderRadius: 50, p: 2 }}
              component={'img'}
              src='https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
            />
          </Box>
          <Box>
            <Box
              sx={{ width: 100, height: 100, borderRadius: 50, p: 2 }}
              component={'img'}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
            />
          </Box>
          <Box sx={{ width: 200, height: 200 }}>
            <Box
              component={'img'}
              sx={{ width: 1, height: 1, borderRadius: 50, p: 2 }}
              src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
            />
          </Box>
          <Box sx={{ width: 150, height: 150 }}>
            <Box
              component={'img'}
              sx={{ width: 1, height: 1, borderRadius: 50, p: 2 }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'
            />
          </Box>
          <Box sx={{ width: 150, height: 150, p: 2 }}>
            <Box
              component={'img'}
              sx={{ width: '100%', height: '100%', borderRadius: 10, p: 2 }}
              src='https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png'
            />
          </Box>
          <Box sx={{ width: 150, height: 150 }}>
            <Box
              component={'img'}
              sx={{ width: 1, height: 1, borderRadius: 10 }}
              src='https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png'
            />
          </Box>
          <Box sx={{ width: 200, height: 200 }}>
            <Box
              component={'img'}
              sx={{ width: 1, height: 1, borderRadius: 10 }}
              src='https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png'
            />
          </Box>
        </Box>
      </Container>
    </ParallaxComp>
  );
};

export default TechStack;
