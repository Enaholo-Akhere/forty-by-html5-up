import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import contactDetails from '../../utils/contactDetails';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { MESSAGE_ME } from '../../api/user-api';
import { Toaster } from '../../providers/toast-provider';

const Content3 = ({ setShowExit }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: '',
    subject: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(30, 'maximum character exceeded').required(),
    email: Yup.string().email().required(),
    message: Yup.string().max(1000).required(),
    subject: Yup.string().max(250).required(),
  });

  const onSubmit = async (value, { resetForm }) => {
    setLoading(true);
    const { data, error } = await MESSAGE_ME(value);
    if (error) {
      setLoading(false);
      Toaster.warning(error.response.data.message);
    }

    if (data) {
      setLoading(false);
      Toaster.success(data.message);
      setShowExit((prev) => !prev);
      resetForm({ value: '' });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        backgroundColor: 'rgb(8, 16, 40)',
        border: '0.5px solid gray',
        overflow: 'hidden',
        py: 5,
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
              <form onSubmit={formik.handleSubmit}>
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
                      label='Full name'
                      name='name'
                      required
                      variant='outlined'
                      placeholder='John Doe'
                      error={Boolean(formik.touched.name && formik.errors.name)}
                      fullWidth
                      helperText={formik.touched.name && formik.errors.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
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
                      label='Email'
                      name='email'
                      required
                      variant='outlined'
                      placeholder='johndoe@gmail.com'
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
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
                        letterSpacing: 3,
                        fontWeight: 600,
                      }}
                    >
                      SUBJECT
                    </Typography>
                    <TextField
                      label='Subject'
                      name='subject'
                      required
                      variant='outlined'
                      placeholder='Requesting Interview Schedule'
                      error={Boolean(
                        formik.touched.subject && formik.errors.subject
                      )}
                      fullWidth
                      helperText={
                        formik.touched.subject && formik.errors.subject
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.subject}
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
                      name='message'
                      type='text'
                      fullWidth
                      error={Boolean(
                        formik.touched.message && formik.errors.message
                      )}
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.message}
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
                      <LoadingButton
                        variant='contained'
                        loading={loading}
                        type='submit'
                        sx={{
                          // bgcolor: 'white',
                          color: 'rgb(8, 16, 40)',
                          fontFamily: 'Source, Sans Pro, sans-serif',
                          fontWeight: 400,
                          zIndex: 10,
                          paddingY: { xs: 1, md: 2 },
                          letterSpacing: 3,
                          mr: 3,
                          '&: disabled': { bgcolor: 'gray' },
                        }}
                      >
                        SEND MESSAGE
                      </LoadingButton>
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
            sx={
              {
                // borderLeft: '0.5px solid gray',
                // pt: 5,
              }
            }
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
                      height: { xs: '20%', md: '25%' },
                      margin: 'auto',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 1,
                        height: 1,
                        alignItems: 'center',
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
                          component={'a'}
                          target='_blank'
                          href={
                            contact.title === 'PHONE'
                              ? 'tel:+2349052781743'
                              : contact.title === 'EMAIL'
                              ? 'mailto:enaholoa@gmail.com'
                              : 'http://maps.google.com/?q=Lekki-Ajah,%20Lagos.%20Nigeria'
                          }
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
