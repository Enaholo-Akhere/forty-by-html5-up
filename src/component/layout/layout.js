import Box from '@mui/material/Box';
import NavAppBar from './components/appbar';
import Footer from './components/footer';
import StickyBar from './components/stickybar';

function Layout({ children }) {
  return (
    <Box>
      <StickyBar />
      <NavAppBar />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
