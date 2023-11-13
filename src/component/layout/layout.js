import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';
import { useState, useEffect } from 'react';
import Modal from '../../utils/Modal';
import ExitIntent from '../forms/exit-intent';
import { useExitIntentMobile } from '../../utils/exit-intent-mobile-hook';
import { PopupWidget } from 'react-calendly';

function Layout({ children, userData }) {
  const { data } = useExitIntentMobile();

  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [showExit, setShowExit] = useState(true);

  useEffect(() => {
    setShowMobile(data);
  }, [data]);

  const handleMouseLeave = () => {
    if (showExit) {
      setShow(true);
    }
  };

  return (
    <Box onMouseLeave={handleMouseLeave}>
      <Modal show={show} setShow={setShow} setShowExit={setShowExit}>
        <ExitIntent show={show} setShow={setShow} setShowExit={setShowExit} />
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
      <Box>
        <PopupWidget
          url='https://calendly.com/enaholoa'
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById('root')}
          text='SCHEDULE A MEETING'
          textColor='#ffffff'
          color='#00FFFF'
          position='absolute'
        />
      </Box>
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
