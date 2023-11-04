import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditAccountForm from './edit-account';
import Modal from '../../utils/Modal';
import { useState } from 'react';
import ResetPasswordForm from './reset-password';
import DeleteAccount from './delete-account';

const LoggedIn = ({ userData }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Modal show={showEdit} setShow={setShowEdit}>
        <EditAccountForm
          show={showEdit}
          setShow={setShowEdit}
          userData={userData}
        />
      </Modal>
      <Modal show={showPass} setShow={setShowPass}>
        <ResetPasswordForm
          show={showPass}
          setShow={setShowPass}
          userData={userData}
          showModal={showPass}
        />
      </Modal>
      <Modal show={showDelete} setShow={setShowDelete}>
        <DeleteAccount
          show={showDelete}
          setShow={setShowDelete}
          userData={userData}
        />
      </Modal>
      <Box sx={{}}>
        <Typography variant='h3' sx={{ textAlign: 'center' }}>
          {userData.name}
        </Typography>
        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>
          {userData.email}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant='contained' onClick={() => setShowEdit(true)}>
          Edit Account
        </Button>
        <Button variant='outlined' onClick={() => setShowPass(true)}>
          Change Password
        </Button>
        <Button
          onClick={() => setShowDelete(true)}
          variant='text'
          sx={{ color: 'red' }}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default LoggedIn;
