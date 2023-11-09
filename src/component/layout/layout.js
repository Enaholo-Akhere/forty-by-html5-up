import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';
import { useState } from 'react';
import Modal from '../../utils/Modal';
import ExitIntent from '../forms/exit-intent';

function Layout({ children, userData }) {
  const [show, setShow] = useState(false);

  return (
    <Box
      onMouseLeave={() => {
        setShow(true);
      }}
    >
      <Modal show={show} setShow={setShow}>
        <ExitIntent show={show} setShow={setShow} />
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
