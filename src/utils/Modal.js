import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';

const Modal = ({ children, show, setShow }) => {
  if (show === false) return null;
  return ReactDom.createPortal(
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '90%', md: '80%' },
            margin: 'auto',
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 1000,
            transform: 'translate(-50%, -50%)',
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontWeight: 600,
              color: 'white',
            }}
          >
            <CloseIcon
              onClick={() => setShow(false)}
              sx={{
                cursor: 'pointer',
                color: 'gray',
                fontSize: 30,
              }}
            />
          </Box>
          {children}
        </Paper>
      </Box>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
