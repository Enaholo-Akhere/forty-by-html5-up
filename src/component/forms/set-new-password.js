import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@mui/material/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RESET_PASSWORD } from '../../api/user-api';
import { Toaster } from '../../utils/toast-provider';

const SetNewPasswordForm = ({ token }) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ResMessage, setRespMessage] = useState('');
  console.log('passs return', ResMessage);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object({
    password: yup
      .string()
      .max(14, 'password too lengthy')
      .required('password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const onSubmit = async (value, { resetForm }) => {
    setLoading(true);
    delete value.confirmPassword;
    const { error, data } = await RESET_PASSWORD(value, token);
    if (error) {
      console.log('error fro', error.response.data.message);
      Toaster.warning(error.response.data.message);
      setLoading(false);
      return null;
    }
    if (data) {
      setRespMessage(data);
      setLoading(false);
      resetForm({ value: '' });
      resetForm({ value: {} });
      setTimeout(() => {
        window.location.replace('http://localhost:3000');
      }, 3000);
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
    <Container
      data-aos='fade-down-left'
      data-aos-easing='ease-in-sine'
      data-aos-duration='700'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        py: 5,
        width: { xs: '100%', md: '60%' },
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <Typography
          variant='h2'
          sx={{ fontWeight: 600, fontFamily: 'Source Sans Pro, sans-serif' }}
        >
          Set New Password
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        {ResMessage.status !== 'success' ? (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Password'
                  name='password'
                  required
                  type={show ? 'password' : 'text'}
                  variant='outlined'
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {show ? (
                          <VisibilityOffIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setShow((prev) => !prev)}
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setShow((prev) => !prev)}
                            sx={{ cursor: 'pointer' }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Confirm Password'
                  name='confirmPassword'
                  required
                  type={show ? 'password' : 'text'}
                  variant='outlined'
                  error={Boolean(
                    formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                  )}
                  fullWidth
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {show ? (
                          <VisibilityOffIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setShow((prev) => !prev)}
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setShow((prev) => !prev)}
                            sx={{ cursor: 'pointer' }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  my: 2,
                  fontWeight: 300,
                  fontFamily: 'Source Sans Pro, sans-serif',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontFamily: 'Source Sans Pro, sans-serif',
                  }}
                >
                  Please verify passwords before sending!
                </Typography>
              </Box>
              <LoadingButton
                loading={loading}
                variant='contained'
                type='submit'
                color='primary'
                sx={{
                  width: { xs: '100%', md: 350 },
                  borderRadius: 5,
                  fontWeight: 600,
                  fontFamily: 'Source Sans Pro, sans-serif',
                }}
              >
                Send
              </LoadingButton>
            </Box>
          </form>
        ) : (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'green' }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                p: 2,
              }}
            >
              {ResMessage.message}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SetNewPasswordForm;
