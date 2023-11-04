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
import { EDIT_ACCOUNT } from '../../api/user-api';
import { Toaster } from '../../utils/toast-provider';
import { encryptData } from '../../utils/enc-dec-user';

const EditAccountForm = ({ showModal, userData }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('name is required')
      .max(100, 'max character exceeded'),
  });

  const onSubmit = async (value, { resetForm }) => {
    setLoading(true);
    const { error, data } = await EDIT_ACCOUNT(value, userData.user_id);

    if (error) {
      Toaster.warning(error.response.data.message);
      setLoading(false);
      return null;
    }
    if (data) {
      setLoading(false);
      resetForm({ value: '' });
      await encryptData(process.env.REACT_APP_DEC_ENT, data);
      window.location.replace('http://localhost:3000');
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
          Edit Account
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ fontFamily: 'Source Sans Pro, sans-serif' }}
        >
          Change your account name
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label='Name'
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
      </Box>
    </Container>
  );
};

export default EditAccountForm;
