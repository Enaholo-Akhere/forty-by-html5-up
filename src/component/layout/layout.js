import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';

function Layout({ children, userData }) {
  return (
    <Box>
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
