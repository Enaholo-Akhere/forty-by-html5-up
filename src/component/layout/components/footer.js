import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          {socialIcons.map((icon) => {
            return (
              <Box
                component={'a'}
                href={icon.url}
                key={icon.id}
                sx={{ color: 'black', '&:hover': { color: 'white' } }}
              >
                {icon.icon}
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            paddingY: 4,
            justifyContent: 'flex-start',
            margin: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'rgb(200, 200, 200)',
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              marginRight: 1,
              zIndex: 10,
              paddingRight: 2,
              fontSize: 14,
              paddingY: 0.5,
            }}
          >
            &copy; E-Folio
          </Typography>
          <Typography
            sx={{
              color: 'rgb(200, 200, 200)',
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              borderLeft: { xs: 'none', md: '0.5px solid rgb(120, 120, 120)' },
              marginRight: 1,
              zIndex: 10,
              fontSize: 14,
              paddingX: { xs: 'none', md: 3 },
              paddingY: 0.5,
            }}
          >
            Design: Enaholo Akhere
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              borderLeft: { xs: 'none', md: '0.5px solid rgb(120, 120, 120)' },
              marginRight: 1,
              color: 'rgb(200, 200, 200)',
              zIndex: 10,
              fontSize: 14,
              paddingX: { xs: 'none', md: 3 },
              paddingY: 0.5,
            }}
          >
            Demo Images: Pexels
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
