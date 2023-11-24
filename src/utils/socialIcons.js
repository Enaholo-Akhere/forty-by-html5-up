import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
    url: 'https://twitter.com/i_code_ena',
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
    url: 'https://github.com/Enaholo-Akhere',
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
    url: 'https://www.linkedin.com/in/enaholo-akhere/',
  },
];

export default socialIcons;
