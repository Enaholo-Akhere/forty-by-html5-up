import React, { useEffect, useRef, useState, useCallback } from 'react';
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
import { decryptData } from '../utils/enc-dec-user';
import SetNewPasswordForm from '../component/forms/set-new-password';
import Modal from '../utils/Modal';
import LoggedIn from '../component/indexPageComponents/logged-in';
import Isverified from '../component/indexPageComponents/isverified';
import { VERIFY_USER } from '../api/user-api';

const HeroPage = () => {
  const ref = useRef('');
  const [regForm, setRegForm] = useState('login');
  const [userData, setUserData] = useState({});
  const [showExit, setShowExit] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isData, setIsData] = useState({});
  const [error, setError] = useState({});

  const urlParams = window.location.search;
  const parseParams = new URLSearchParams(urlParams);
  const tm = parseParams.get('tm');
  const token = parseParams.get('token');
  const userId = parseParams.get('userId');
  const dialogue = parseParams.get('dialogue');

  useEffect(() => {
    if (tm === 'Xbgs1Q') {
      setShowModal(true);
    }
  }, [tm]);

  useEffect(() => {
    if (token && dialogue) {
      setShowModal(true);
      setLoading(true);
      (async () => {
        const { data, error } = await VERIFY_USER(userId, token);

        console.log('data', data, 'error', error);
        if (error) {
          setError(error);
          setLoading(false);
          // setTimeout(() => {
          //   window.location.replace('/');
          // }, 3000);
        }

        if (data) {
          setLoading(false);
          setIsData(data);
          setTimeout(() => {
            window.location.replace('/');
          }, 3000);
        }
      })();
    }
  }, [token, dialogue, userId]);

  const handleDecodedData = useCallback(async () => {
    const { data, error } = await decryptData(process.env.REACT_APP_DEC_ENT);
    if (error) return error.message;
    setUserData(data);
  }, []);

  useEffect(() => {
    handleDecodedData();
  }, [handleDecodedData]);

  return (
    <Layout userData={userData} showExit={showExit} setShowExit={setShowExit}>
      {token && tm && (
        <Modal show={showModal} setShow={setShowModal}>
          <SetNewPasswordForm token={token} />
        </Modal>
      )}

      {token && dialogue && (
        <Modal show={showModal} setShow={setShowModal}>
          <Isverified loading={loading} isData={isData} error={error} />
        </Modal>
      )}
      <Box ref={ref} id='Home'>
        <Hero />
      </Box>

      {userData ? (
        <Box>
          <LoggedIn userData={userData} />
        </Box>
      ) : (
        <Box ref={ref} id='Register'>
          {regForm !== 'login' ? (
            <RegistrationForm setRegForm={setRegForm} />
          ) : (
            <LoginForm setRegForm={setRegForm} />
          )}
        </Box>
      )}

      <Box ref={ref} id='Projects'>
        <Content1 userData={userData} />
      </Box>
      <Box ref={ref} id='Core Competence'>
        <Content2 />
      </Box>
      <Box>
        <TechStack />
      </Box>
      <Box ref={ref} id='Contact Me'>
        <Content3 showExit={showExit} setShowExit={setShowExit} />
      </Box>

      <ScrollTo />
    </Layout>
  );
};

export default HeroPage;
