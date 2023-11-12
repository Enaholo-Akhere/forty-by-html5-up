import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Toaster } from '../../providers/toast-provider';
import { MESSAGE_ME } from '../../api/user-api';
import { useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExitIntent = ({ show, setShow, setShowExit }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));

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
      resetForm({ value: '' });
      setShowExit((prev) => !prev);
      setShow((prev) => !prev);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  //initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      data-aos='zoom-in'
      data-aos-easing='ease-in-sine'
      data-aos-duration='300'
      sx={{
        display: 'flex',
        margin: 'auto',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={0} md={5}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              margin: 'auto',
              height: '100%',
            }}
          >
            <Box
              component={'img'}
              src='https://www.netsolutions.com/insights/wp-content/uploads/2022/06/how-to-become-a-software-developer.webp'
              sx={{
                height: 1,
                width: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'center',
              px: 2,
              justifyContent: 'center',
              margin: 'auto',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                textAlign: 'center',
                lineHeight: 1,
              }}
            >
              Wait! you are leaving without scheduling an{' '}
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  backgroundImage:
                    'linear-gradient(180deg, rgba(258, 258, 258, 0), rgba(258, 258, 258, 0), rgb(255, 255, 255), #F9B934)',
                }}
              >
                interview?
              </span>
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              I bring a wealth of expertise in full-stack development, My proven
              track record makes me the ideal candidate to elevate your team's
              capabilities and drive success in this role
            </Typography>
            <Box sx={{ width: '100%' }}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Full name'
                      name='name'
                      required
                      variant='outlined'
                      placeholder='John Doe'
                      size={match ? 'medium' : 'medium'}
                      error={Boolean(formik.touched.name && formik.errors.name)}
                      fullWidth
                      helperText={formik.touched.name && formik.errors.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Email'
                      name='email'
                      size={match ? 'medium' : 'medium'}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Subject'
                      name='subject'
                      required
                      size={match ? 'medium' : 'medium'}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className='textfield'
                      multiline={true}
                      maxRows={4}
                      minRows={4}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                      }}
                    >
                      <LoadingButton
                        variant='contained'
                        loading={loading}
                        fullWidth
                        type='submit'
                        sx={{
                          // bgcolor: 'white',
                          color: 'rgb(8, 16, 40)',
                          fontFamily: 'Source, Sans Pro, sans-serif',
                          fontWeight: 400,
                          zIndex: 10,
                          paddingY: { xs: 1, md: 2 },
                          letterSpacing: 3,
                          //   mr: 3,
                          '&: disabled': { bgcolor: 'gray' },
                        }}
                      >
                        Send Me A Message
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExitIntent;
