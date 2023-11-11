import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@mui/material/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FORGOT_PASSWORD } from '../../api/user-api';
import { Toaster } from '../../providers/toast-provider';

const ResetPasswordForm = ({ showModal }) => {
  const [loading, setLoading] = useState(false);
  const [ResMessage, setRespMessage] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email().required('email is required'),
  });

  const onSubmit = async (value, { resetForm }) => {
    setLoading(true);
    const { error, data } = await FORGOT_PASSWORD(value);

    if (error) {
      Toaster.warning(error.response.data.message);
      setLoading(false);
      return null;
    }
    if (data) {
      setRespMessage(data);
      setLoading(false);
      resetForm({ value: '' });
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

  console.log('status', ResMessage.status);
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
          variant='h3'
          sx={{ fontWeight: 300, fontFamily: 'Source Sans Pro, sans-serif' }}
        >
          Reset Password
        </Typography>
        {ResMessage.status !== 'success' && showModal && (
          <Typography
            sx={{ fontWeight: 300, fontFamily: 'Source Sans Pro, sans-serif' }}
          >
            Please type in your registered email
          </Typography>
        )}
      </Box>
      <Box sx={{ my: 2 }}>
        {ResMessage.status !== 'success' && showModal ? (
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
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                my: 2,
              }}
            >
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

export default ResetPasswordForm;
