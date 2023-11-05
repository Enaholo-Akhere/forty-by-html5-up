import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LOGIN_USER } from '../../api/user-api';
import { encryptData } from '../../utils/enc-dec-user';
import Modal from '../../utils/Modal';
import ResetPasswordForm from './reset-password';
import { Toaster } from '../../utils/toast-provider';

const LoginForm = ({ setRegForm }) => {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email().required('email is required'),
    password: yup
      .string()
      .max(14, 'password too lengthy')
      .required('password is required'),
  });

  const onSubmit = async (value, { resetForm }) => {
    setLoading(true);
    delete value.confirmPassword;
    const { error, data } = await LOGIN_USER(value);
    if (error) {
      Toaster.warning(error.response.data.message);
      setLoading(false);
    }

    if (data) {
      await encryptData(process.env.REACT_APP_DEC_ENT, data);

      setLoading(false);
      console.log('data', data);
      window.location.replace('/');
      // resetForm({ value: {} });
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
      data-aos='fade-down-right'
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
      <Modal show={showModal} setShow={setShowModal}>
        <ResetPasswordForm setShow={setShowModal} showModal={showModal} />
      </Modal>
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
          Sign In
        </Typography>
        <Typography
          sx={{ fontWeight: 300, fontFamily: 'Source Sans Pro, sans-serif' }}
        >
          Signing in is essential for you to experience the full range of this
          portfolio website and to witness my full-stack skills in action. Once
          you've completed your exploration, you have the option to delete your
          data. Your understanding and feedback are highly valued.
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label='Email'
                name='email'
                required
                variant='outlined'
                placeholder='johndoe@gmail.com'
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                name='password'
                required
                variant='outlined'
                placeholder='********'
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type={show ? 'password' : 'text'}
                value={formik.values.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  ),
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
            <Grid item xs={6}>
              <Box sx={{ my: 0 }}>
                <Link
                  onClick={() => setShowModal((prev) => !prev)}
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Source Sans Pro, sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
            </Grid>
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
                Don't have an account?{' '}
                <Link
                  sx={{
                    cursor: 'pointer',

                    fontFamily: 'Source Sans Pro, sans-serif',
                  }}
                  onClick={() => setRegForm('register')}
                >
                  Signup
                </Link>
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
              login
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
