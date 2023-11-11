import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DELETE_ACCOUNT } from '../../api/user-api';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { Toaster } from '../../providers/toast-provider';

const DeleteAccount = ({ userData }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const { error, data } = await DELETE_ACCOUNT(userData.user_id);
    if (error) {
      Toaster.warning(error.response.data.message);
      setLoading(false);
    }
    if (data) {
      setLoading(false);
      Toaster.success(data.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Box>
        <Typography>Are you sure you want to delete this Account</Typography>
      </Box>
      <Box>
        <LoadingButton
          loading={loading}
          onClick={handleDelete}
          variant='contained'
          type='submit'
          color='primary'
          fullWidth
          sx={{
            width: { xs: 350, md: 350 },
            borderRadius: 5,
            fontWeight: 600,
            fontFamily: 'Source Sans Pro, sans-serif',
            bgcolor: 'red',
            color: 'white',
            '&: hover': {
              bgcolor: 'orange',
            },
          }}
        >
          Delete
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default DeleteAccount;
