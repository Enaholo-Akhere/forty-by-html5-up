import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IosShareIcon from '@mui/icons-material/IosShare';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';

const StickyBar = () => {
  const leftStickyNav = ['Desktop', 'Tablet', 'Tablet(Portrait)', 'Mobile'];
  const rightStickyNav = [
    { icon: <ThumbUpIcon sx={{ fontSize: 14 }} />, title: 'Like' },
    { icon: <TwitterIcon sx={{ fontSize: 14 }} />, title: 'Tweet' },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        py: 1,
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 20,
        width: '100%',
        top: 0,
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', paddingLeft: 1 }}>
        <Box
          sx={{
            justifyContent: 'center',
            alignContent: 'center',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '600',
              color: 'black',
              fontSize: '1.26rem',
              padding: 1,
              pr: 3,
              fontFamily: 'Source Sans Pro, sans-serif',
              cursor: 'pointer',
            }}
          >
            Forty
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            border: { xs: 'none', lg: '1px solid lightgrey' },
            borderRadius: 2,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          {leftStickyNav.map((nav, i) => {
            return (
              <Button
                variant="text"
                component="a"
                href="#"
                fontSize={'0.9rem'}
                key={nav}
                sx={{
                  display: { xs: 'none', lg: 'block' },
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: '600',
                  paddingX: 2,
                  paddingY: 1,
                  transition: '0.3s ease-in-out',
                  backgroundColor: i === 0 ? 'rgba(8, 16, 40, 0.7)' : null,
                  '&:hover': {
                    backgroundColor:
                      i === 0 ? 'rgba(8, 16, 40, 0.6)' : '#eeeeee',
                    transition: '0.3s ease-in-out',
                  },
                  color: i === 0 ? 'white' : 'rgb(8, 16, 40)',
                }}
              >
                {nav}
              </Button>
            );
          })}
        </Box>
        <Box
          sx={{
            paddingY: 1,
            paddingX: 1,
            fontSize: '1rem',
            ml: 1,
            border: '1px solid lightgrey',
            borderRadius: 2,
            display: { xs: 'none', md: 'flex', cursor: 'pointer' },
            transition: '0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#eeeeee',
              transition: '0.3s ease-in-out',
            },
          }}
        >
          <IosShareIcon />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
          <Box
            sx={{
              paddingY: 1,
              paddingX: 3,
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.8em',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                cursor: 'pointer',
              }}
            >
              Back
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', paddingX: 1 }}>
        <Box
          sx={{
            display: 'flex',
            border: { xs: 'none', sm: '1px solid lightgrey' },
            borderRadius: 2,
            justifyContent: 'center',
          }}
        >
          {rightStickyNav.map((icontitle, i) => {
            return (
              <Box
                fontSize={'1rem'}
                key={icontitle.title}
                sx={{
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: '600',
                  paddingX: 1,
                  py: 1,
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      icontitle.title === 'Like' ? '#4267B2' : '#1DA1F2',
                    borderRadius: icontitle.title === 'Like' ? 1 : 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: 12,
                      pl: 1,
                      pr: 1,
                      py: 0.4,
                      width: 'fit-content',
                      textAlign: 'center',
                      fontFamily: 'Source Sans Pro, sans-serif',
                    }}
                  >
                    {icontitle.icon}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: 12,
                      width: 'fit-content',
                      py: 0.3,
                      textAlign: 'center',
                      pr: 1,
                      fontWeight: 600,
                      fontFamily: 'Source Sans Pro, sans-serif',
                    }}
                  >
                    {icontitle.title}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { xs: '100%', sm: 'normal' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              paddingY: 1,
              paddingX: 3,
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.8em',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                cursor: 'pointer',
              }}
            >
              Back
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              paddingY: 1,
              paddingX: 3,
              fontSize: '1rem',
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,
              backgroundColor: '#E7746F',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                mr: 1,
                fontSize: '0.8em',
                fontFamily: 'Source Sans Pro, sans-serif',
                zIndex: 10,
              }}
            >
              Download
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '0.8em',
                fontFamily: 'Source Sans Pro, sans-serif',
                zIndex: 10,
              }}
            >
              {' '}
              (217,569)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StickyBar;
