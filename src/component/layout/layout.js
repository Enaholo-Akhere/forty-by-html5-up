import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';

function Layout({ children, userData }) {
  return (
    <Box onMouseLeave={() => alert('hello world')}>
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
