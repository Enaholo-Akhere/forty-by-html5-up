import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import content1Contents from '../../utils/cardDetails';
import BlockIcon from '@mui/icons-material/Block';
import { useState } from 'react';

const Content1 = ({ userData }) => {
  const [loginWarning, setLoginWarning] = useState(null);
  console.log('userdata', userData);

  const handleClick = (id, url, urlClick) => {
    console.log('url click', urlClick ? 'true' : 'false');
    if (userData) {
      setLoginWarning(null);
      return window.open(url, '_blank');
    } else if (!urlClick && !userData) {
      setLoginWarning(id);
    } else {
      window.open(url, '_blank');
    }
  };

  const arrOfNums = [1, 3, 4, 8, 25, 32];
  return (
    <Box>
      <Grid container spacing={0}>
        {content1Contents &&
          content1Contents.map((content, i) => {
            const urlClick = arrOfNums[i] % (i + 1) === 0;
            return (
              <Grid
                item
                md={arrOfNums[i] % (i + 1) === 0 ? 5 : 7}
                sm={arrOfNums[i] % (i + 1) === 0 ? 6 : 6}
                xs={arrOfNums[i] % (i + 1) === 0 ? 12 : 12}
                key={content.header}
                // onMouseLeave={() => handleShowWarning(null)}
              >
                <Box
                  onClick={() => handleClick(i, content.url, urlClick)}
                  width={'100%'}
                  height={'50vh'}
                  position='relative'
                  sx={{ cursor: 'pointer' }}
                >
                  <Box
                    component={'img'}
                    src={content.img}
                    sx={{
                      width: 1,
                      height: 1,
                    }}
                  />
                  <Box
                    sx={{
                      backgroundColor: `rgba(${content.bg}, 0.9)`,
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: '0.5s ease-in-out',
                      '&:hover': {
                        backgroundColor: `rgba(${content.bg}, 0.1)`,
                        transition: '0.5s ease-in-out',
                      },
                    }}
                  />
                  {10 % i === 0 && loginWarning === i && (
                    <Box
                      sx={{
                        display: 'flex',
                        position: 'absolute',
                        cursor: 'not-allowed',
                        top: '50%',
                        left: '50%',
                        height: '60%',
                        margin: 'auto',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        minWidth: {
                          xl: arrOfNums[i] % (i + 1) === 0 ? 500 : 680,
                          lg: arrOfNums[i] % (i + 1) === 0 ? 500 : 680,
                          md: arrOfNums[i] % (i + 1) === 0 ? 350 : 500,
                          sm: 300,
                          xs: 400,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          width: 1,
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(9px)',
                        }}
                      >
                        <Box>
                          <BlockIcon sx={{ fontSize: 50, color: 'white' }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: 800,
                              fontFamily: 'Source Sans Pro, sans-serif',
                            }}
                          >
                            You have to sign-in to view this Page
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '0%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 9,
                      marginLeft: { xs: 18, md: 20 },
                      minWidth: {
                        xl: 300,
                        lg: 280,
                        md: 250,
                        sm: 250,
                        xs: 230,
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        variant='h4'
                        sx={{
                          textAlign: 'left',
                          color: 'white',
                          fontWeight: 900,
                          fontFamily: 'Source Sans Pro, sans-serif',
                          lineHeight: 2.65,
                          zIndex: 10,
                          fontSize: { xs: '1.5rem', md: '2.125rem' },
                        }}
                      >
                        {content.header}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'left',
                        width: { xs: '80%', md: '100%' },
                        padding: 0,
                      }}
                    >
                      <Divider
                        light
                        variant='fullWidth'
                        sx={{
                          color: 'white',
                          width: '100%',
                          border: '1px solid white',
                          zIndex: 10,
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant='p'
                        sx={{
                          textAlign: 'left',
                          color: 'white',
                          fontWeight: 800,
                          fontFamily: 'Source Sans Pro, sans-serif',
                          textTransform: 'uppercase',
                          lineHeight: 3,
                          zIndex: 10,
                          letterSpacing: 3,
                          mt: 5,
                          fontSize: { xs: 13, md: 16 },
                        }}
                      >
                        {content.para}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Content1;
