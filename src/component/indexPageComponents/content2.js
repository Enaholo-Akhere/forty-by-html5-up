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
            variant='h2'
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
            Core Competence
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
            variant='fullWidth'
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
              variant='p'
              sx={{
                fontFamily: 'Source Sans Pro, sans-serif',
                textAlign: 'left',
                lineHeight: 1.6,
                fontSize: { xs: '0.8rem', md: '1.123rem' },
                letterSpacing: 1,
                fontWeight: 300,
              }}
            >
              I am a results-driven tech enthusiast with three years of hands-on
              experience in the field. My core competencies lie in the realm of
              web development, where I excel in JavaScript and TypeScript to
              craft dynamic and scalable applications. I have a strong command
              of Node.js for building robust server-side solutions and am
              well-versed in managing data with both PostgreSQL and MongoDB. My
              expertise extends to front-end development, where I leverage
              Next.js and Material UI to create fast, SEO-friendly, and visually
              appealing user interfaces. Beyond these core skills, I maintain a
              passion for exploring new technologies and staying up-to-date with
              industry trends. My commitment to problem-solving and teamwork
              complements my technical capabilities, making me a valuable asset
              for any project or team.
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
              variant='outlined'
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
