import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ExitIntent = ({ show, setShow }) => {
  return (
    <Box
      onClick={() => {
        setShow(true);
        alert('Hello world');
      }}
    >
      <Typography>Hello I am Exit Intent</Typography>
    </Box>
  );
};

export default ExitIntent;
