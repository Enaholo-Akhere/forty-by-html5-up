import React from 'react';
import Box from '@mui/material/Box';
import Layout from '../component/layout/layout';
import Hero from '../component/indexPageComponents/hero';
import Content1 from '../component/indexPageComponents/content1';
import Content2 from '../component/indexPageComponents/content2';
import Content3 from '../component/indexPageComponents/content3';

const HeroPage = () => {
  return (
    <Layout>
      <Box>
        <Hero />
      </Box>
      <Box>
        <Content1 />
      </Box>
      <Box>
        <Content2 />
      </Box>
      <Box>
        <Content3 />
      </Box>
    </Layout>
  );
};

export default HeroPage;
