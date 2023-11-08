import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParallaxComp from './parallax';
import { techStacks } from '../../utils/tech-stacks';

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
            gap: 1.5,
          }}
        >
          {techStacks.map((stack) => {
            return (
              <Box key={stack.src}>
                <Box
                  sx={{
                    width: { xs: stack.xs, md: stack.md },
                    height: { xs: stack.xs, md: stack.md },
                  }}
                >
                  <Box
                    sx={{
                      width: 1,
                      height: 1,
                      borderRadius: stack.bRadius,
                    }}
                    component={'img'}
                    src={stack.src}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </ParallaxComp>
  );
};

export default TechStack;
