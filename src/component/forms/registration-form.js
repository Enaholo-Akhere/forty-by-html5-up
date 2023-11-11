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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { REGISTER_USER } from '../../api/user-api';
import { Toaster } from '../../providers/toast-provider';

const RegistrationForm = ({ setRegForm }) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('name is required')
      .max(100, 'max character exceeded'),
    email: yup.string().email().required('email is required'),
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
    const { error, data } = await REGISTER_USER(value);
    if (error) {
      Toaster.warning(error.response.data.message);
      setLoading(false);
    }
    if (data) {
      Toaster.success(data.message);
      setLoading(false);
      resetForm({ value: {} });
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
          Register
        </Typography>
        <Typography
          sx={{ fontWeight: 300, fontFamily: 'Source Sans Pro, sans-serif' }}
        >
          Registration is essential for you to experience the full range of this
          portfolio website and to witness my full-stack skills in action. Once
          you've completed your exploration, you have the option to delete your
          data. Your understanding and feedback are highly valued.
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label='Full name'
                name='name'
                type='text'
                required
                variant='outlined'
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
                type='email'
                required
                variant='outlined'
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
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
                Already have an account?{' '}
                <Link
                  sx={{
                    cursor: 'pointer',
                    fontFamily: 'Source Sans Pro, sans-serif',
                  }}
                  onClick={() => setRegForm('login')}
                >
                  Sign-in
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
              Save Details
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
