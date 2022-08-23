import React from 'react';
import Box from '@mui/material/Box';
import Layout from '../component/layout/layout';
import Hero from '../component/indexPageComonents/hero';
import Content1 from '../component/indexPageComonents/content1';
import Content2 from '../component/indexPageComonents/content2';
import Content3 from '../component/indexPageComonents/content3';

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
