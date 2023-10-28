import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialButtons = ({ display }) => {
  const rightStickyNav = [
    { icon: <LinkedInIcon sx={{ fontSize: 14 }} />, title: 'LinkedIn' },
    { icon: <GitHubIcon sx={{ fontSize: 14 }} />, title: 'GitHub' },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        border: { xs: 'none', sm: '1px solid lightgrey' },
        borderRadius: 2,
        bgcolor: '',
        justifyContent: 'center',
      }}
    >
      {rightStickyNav.map((icontitle, i) => {
        return (
          <Box
            fontSize={'1rem'}
            key={icontitle.title}
            sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: '600',
              paddingX: 1,
              py: 1,
              display: { xs: display, md: 'flex' },
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor:
                  icontitle.title === 'LinkedIn' ? '#0072b1' : '#333',
                borderRadius: icontitle.title === 'Like' ? 1 : 1,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Button
                startIcon={icontitle.icon}
                sx={{
                  color: 'white',
                  fontSize: 12,
                  pl: 1,
                  pr: 1,
                  py: 0.4,
                  width: 'fit-content',
                  textAlign: 'center',
                  fontFamily: 'Source Sans Pro, sans-serif',
                  textTransform: 'none',
                  fontWeight: '600',
                }}
              >
                {icontitle.title}
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default SocialButtons;
