import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import contactDetails from '../../utils/contactDetails';
import Divider from '@mui/material/Divider';

const Content3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(8, 16, 40)',
        border: '0.5px solid gray',
        overflow: 'hidden',
        py: 3,
      }}
    >
      <Typography variant='h3' sx={{ color: 'white', textAlign: 'center' }}>
        Contact Me
      </Typography>
      <Container sx={{ backgroundColor: 'inherit' }}>
        <Grid container spacing={3} pt={3}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ paddingX: { xs: 0, md: 5 }, mb: 10, pt: 5 }}
          >
            <Box sx={{ width: '100%' }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant='p'
                      sx={{
                        textAlign: 'left',
                        fontFamily: 'Source Sans Pro, sans-serif',
                        zIndex: 10,
                        color: 'white',
                        letterSpacing: 3,
                        fontWeight: 600,
                      }}
                    >
                      NAME
                    </Typography>
                    <TextField
                      variant='outlined'
                      type='text'
                      fullWidth
                      sx={{
                        backgroundColor: 'rgb(11, 22, 53)',
                        mt: 2,
                        input: {
                          color: 'white',
                          fontFamily: 'Source Sans Pro, sans-serif',
                          fontWeight: 600,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant='p'
                      sx={{
                        textAlign: 'left',
                        fontFamily: 'Source, Sans Pro, sans-serif',
                        zIndex: 10,
                        color: 'white',
                        letterSpacing: 3,
                        fontWeight: 600,
                      }}
                    >
                      EMAIL
                    </Typography>
                    <TextField
                      variant='outlined'
                      type='text'
                      fullWidth
                      sx={{
                        backgroundColor: 'rgb(11, 22, 53)',
                        mt: 2,
                        input: {
                          color: 'white',
                          fontFamily: 'Source Sans Pro, sans-serif',
                          fontWeight: 600,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant='p'
                      sx={{
                        textAlign: 'left',
                        fontFamily: 'Source, Sans Pro, sans-serif',
                        zIndex: 10,
                        color: 'white',
                        fontWeight: 600,
                        letterSpacing: 3,
                        outline: 'none',
                      }}
                    >
                      MESSAGE
                    </Typography>
                    <TextField
                      className='textfield'
                      multiline={true}
                      minRows={10}
                      variant='outlined'
                      type='text'
                      fullWidth
                      sx={{
                        backgroundColor: 'rgb(11, 22, 53)',
                        letterSpacing: 3,
                        color: 'white',
                        mt: 2,
                      }}
                      inputProps={{
                        style: {
                          color: 'white',
                          zIndex: 10,
                          fontFamily: 'Source, Sans Pro, sans-serif',
                          fontWeight: 400,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        padding: { xs: 0, md: 3 },
                        width: '100%',
                      }}
                    >
                      <Button
                        fullWidth={false}
                        variant='contained'
                        sx={{
                          bgcolor: 'white',
                          color: 'rgb(8, 16, 40)',
                          fontFamily: 'Source, Sans Pro, sans-serif',
                          fontWeight: 400,
                          zIndex: 10,
                          paddingY: { xs: 1, md: 2 },
                          letterSpacing: 3,
                          mr: 3,
                        }}
                      >
                        SEND MESSAGE
                      </Button>
                      <Button
                        variant='outlined'
                        fullWidth={false}
                        sx={{
                          bgcolor: 'rgb(8, 16, 40)',
                          color: 'white',
                          fontFamily: 'Source, Sans Pro, sans-serif',
                          zIndex: 10,
                          fontWeight: 400,
                          border: '1px solid white',
                          letterSpacing: 3,
                          px: 3,
                          py: { xs: 1, md: 2 },
                        }}
                      >
                        CLEAR
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              // borderLeft: '0.5px solid gray',
              pt: 5,
            }}
          >
            {contactDetails &&
              contactDetails.map((contact, i) => {
                return (
                  <Box
                    key={contact.title}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // mr: 5,
                      py: 5,
                      px: 2,
                      border: '1px solid gray',
                      // width: '100%',
                      height: '23%',
                      margin: 'auto',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 1,
                        height: 1,
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: 100,
                          bgcolor: 'white',
                          zIndex: 10,
                          height: 50,
                          width: 50,
                          mr: 3,
                        }}
                      >
                        {contact.icon}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography
                          variant='h4'
                          sx={{
                            fontFamily: 'Source, Sans Pro, sans-serif',
                            fontWeight: 600,
                            color: 'white',
                            letterSpacing: 3,
                            fontSize: '1.5rem',
                          }}
                        >
                          {contact.title}
                        </Typography>
                        <Typography
                          variant='body'
                          sx={{
                            fontFamily: 'Source, Sans Pro, sans-serif',
                            fontWeight: 300,
                            color: 'white',
                            textDecoration: i === 0 ? 'underline' : null,
                            lineHeight: 2.5,
                            textDecorationStyle: i === 0 ? 'dotted' : null,
                          }}
                        >
                          {contact.value}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Box
                      sx={{
                        display: i === 2 ? 'none' : 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        width: '100%',
                        marginTop: 10,
                        paddingLeft: 10,
                      }}
                    >
                      <Divider
                        variant='fullWidth'
                        light
                        sx={{
                          color: 'white',
                          width: '176%',
                          border: '0.5px solid gray',
                          zIndex: 1,
                        }}
                      />
                    </Box> */}
                  </Box>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Content3;
