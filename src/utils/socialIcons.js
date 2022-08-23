import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const socialIcons = [
  {
    icon: (
      <TwitterIcon
        sx={{
          padding: 1.5,
          backgroundColor: 'white',
          borderRadius: 100,
          zIndex: 10,
          height: 20,
          width: 20,
          mr: 3,
          '&:hover': {
            backgroundColor: 'primary.main',
            transition: '0.5s ease-in-out',
          },
          transition: '0.5s ease-in-out',
        }}
      />
    ),
    id: 1,
  },
  {
    icon: (
      <FacebookIcon
        sx={{
          padding: 1.5,
          backgroundColor: 'white',
          borderRadius: 100,
          zIndex: 10,
          height: 20,
          width: 20,
          mr: 3,
          '&:hover': {
            backgroundColor: 'primary.main',
            transition: '0.5s ease-in-out',
          },
          transition: '0.5s ease-in-out',
        }}
      />
    ),
    id: 2,
  },
  {
    icon: (
      <InstagramIcon
        sx={{
          padding: 1.5,
          backgroundColor: 'white',
          borderRadius: 100,
          zIndex: 10,
          height: 20,
          width: 20,
          mr: 3,
          '&:hover': {
            backgroundColor: 'primary.main',
            transition: '0.5s ease-in-out',
          },
          transition: '0.5s ease-in-out',
        }}
      />
    ),
    id: 3,
  },
  {
    icon: (
      <GitHubIcon
        sx={{
          padding: 1.5,
          backgroundColor: 'white',
          borderRadius: 100,
          zIndex: 10,
          height: 20,
          width: 20,
          mr: 3,
          '&:hover': {
            backgroundColor: 'primary.main',
            transition: '0.5s ease-in-out',
          },
          transition: '0.5s ease-in-out',
        }}
      />
    ),
    id: 4,
  },
  {
    icon: (
      <LinkedInIcon
        sx={{
          padding: 1.5,
          backgroundColor: 'white',
          borderRadius: 100,
          fontSize: 12,
          zIndex: 10,
          height: 20,
          width: 20,
          mr: 3,
          '&:hover': {
            backgroundColor: 'primary.main',
            transition: '0.5s ease-in-out',
          },
          transition: '0.5s ease-in-out',
        }}
      />
    ),
    id: 5,
  },
];

export default socialIcons;
