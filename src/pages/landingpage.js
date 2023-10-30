import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Layout from '../component/layout/layout';
import Hero from '../component/indexPageComponents/hero';
import Content1 from '../component/indexPageComponents/content1';
import Content2 from '../component/indexPageComponents/content2';
import Content3 from '../component/indexPageComponents/content3';
import ScrollTo from '../utils/scroll-to';
import RegistrationForm from '../component/forms/registration-form';
import LoginForm from '../component/forms/login-form';
import TechStack from '../component/indexPageComponents/tech-stacks';
import { api } from '../api/user-api';

const HeroPage = () => {
  const ref = useRef('');
  const [regForm, setRegForm] = useState('register');

  console.log('api', api);

  return (
    <Layout>
      <Box ref={ref} id='Home'>
        <Hero />
      </Box>
      <Box ref={ref} id='Register'>
        {regForm === 'register' ? (
          <RegistrationForm setRegForm={setRegForm} />
        ) : (
          <LoginForm setRegForm={setRegForm} />
        )}
      </Box>
      <Box ref={ref} id='Projects'>
        <Content1 />
      </Box>
      <Box ref={ref} id='Core Competence'>
        <Content2 />
      </Box>
      <Box>
        <TechStack />
      </Box>
      <Box ref={ref} id='Contact Me'>
        <Content3 />
      </Box>

      <ScrollTo />
    </Layout>
  );
};

export default HeroPage;
