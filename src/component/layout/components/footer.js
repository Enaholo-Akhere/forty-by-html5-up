import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { fontSize } from '@mui/system';
import socialIcons from '../../../utils/socialIcons';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(8, 16, 40)',
        paddingY: 10,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: 'rgb(8, 16, 40)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {socialIcons.map((icons) => {
            return <Box key={icons.id}>{icons.icon}</Box>;
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', paddingY: 4 }}>
          <Typography
            sx={{
              color: 'rgb(120, 120, 120)',
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              marginRight: 3,
              zIndex: 10,
              paddingRight: 2,
              fontSize: 14,
            }}
          >
            &copy; Untitled
          </Typography>
          <Typography
            sx={{
              color: 'rgb(120, 120, 120)',
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              borderLeft: '0.5px solid rgb(120, 120, 120)',
              marginRight: 3,
              zIndex: 10,
              fontSize: 14,
              paddingX: 3,
            }}
          >
            Design: HTML5 UP
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              borderLeft: '0.5px solid rgb(120, 120, 120)',
              marginRight: 3,
              color: 'rgb(120, 120, 120)',
              zIndex: 10,
              fontSize: 14,
              paddingX: 3,
            }}
          >
            Demo Images: Unsplash
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
