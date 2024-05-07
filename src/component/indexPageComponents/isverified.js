import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Isverified({ loading, isData, error }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      {loading && (
        <Typography>
          <CircularProgress />
        </Typography>
      )}
      {error !== undefined && (
        <Typography>{error?.response?.data?.message}</Typography>
      )}
      {isData && <Typography>{isData?.message}</Typography>}
    </Box>
  );
}

export default Isverified;
