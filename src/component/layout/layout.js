import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';
import { useState, useEffect } from 'react';
import Modal from '../../utils/Modal';
import ExitIntent from '../forms/exit-intent';
import { useExitIntentMobile } from '../../utils/exit-intent-mobile-hook';

function Layout({ children, userData }) {
  const { data } = useExitIntentMobile();

  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    setShowMobile(data);
  }, [data]);

  window.localStorage.setItem('exit', false);

  useEffect(() => {}, []);

  console.log('data', data ? 'true' : 'false');

  return (
    <Box
      onMouseLeave={() => {
        setShow(true);
      }}
    >
      <Modal show={show} setShow={setShow}>
        <ExitIntent show={show} setShow={setShow} />
      </Modal>

      <Modal show={showMobile} setShow={setShowMobile}>
        <ExitIntent show={showMobile} setShow={setShowMobile} />
      </Modal>
      <Box>
        <StickyBar userData={userData} />
      </Box>
      <Box>
        <NavAppBar />
      </Box>
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
