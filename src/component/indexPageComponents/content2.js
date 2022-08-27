import { Container, Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Content2 = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(10,10,40, 0.9 )' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'left',
              color: 'white',
              zIndex: 10,
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 800,
              lineHeight: 2.65,
              fontSize: { xs: '1.8rem', md: '3.6rem' },
            }}
          >
            Massa libero
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
          }}
        >
          <Divider
            variant="fullWidth"
            light
            sx={{
              color: 'white',
              width: '100%',
              border: '1px solid white',
              zIndex: 10,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              color: 'white',
              zIndex: 1,
              fontFamily: 'Source Sans Pro, sans-serif',
              flexWrap: 'noWrap',
              marginRight: 2,
              marginY: 3,
              height: 'fit-content',
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: 'Source Sans Pro, sans-serif',
                textAlign: 'left',
                lineHeight: 1.6,
                fontSize: { xs: '0.8rem', md: '1.123rem' },
                letterSpacing: 1,
                fontWeight: 300,
              }}
            >
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </Typography>
          </Box>
          <Box
            sx={{
              color: 'white',
              zIndex: 1,
              fontFamily: 'Source Sans Pro, sans-serif',
              marginY: 3,
              width: 200,
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: 'white',
                borderColor: 'white',
                height: 'fit-content',
                padding: 2,
                letterSpacing: 3,
                fontFamily: 'Source Sans Pro, sans-serif',
                fontWeight: 600,
                mb: 5,
              }}
              endIcon={<ArrowRightAltIcon />}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Content2;
