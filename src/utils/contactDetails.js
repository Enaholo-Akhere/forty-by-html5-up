import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HomeIcon from '@mui/icons-material/Home';

const contactDetails = [
  {
    title: 'EMAIL',
    value: 'enaholoa@gmail.com',
    icon: (
      <EmailIcon
        sx={{
          color: 'rgb(8, 16, 40)',
          zIndex: 10,
          fontSize: '1.5rem',
          padding: 1.5,
        }}
      />
    ),
  },
  {
    title: 'PHONE',
    value: '+234 905 278 1743',
    icon: (
      <PhoneEnabledIcon
        sx={{
          color: 'rgb(8, 16, 40)',
          zIndex: 10,
          fontSize: '1.5rem',
          padding: 1.5,
        }}
      />
    ),
  },
  {
    title: 'ADDRESS',
    value: `Lekki-Ajah, Lagos.
    Nigeria`,
    icon: (
      <HomeIcon
        sx={{
          color: 'rgb(8, 16, 40)',
          zIndex: 10,
          fontSize: '1.5rem',
          padding: 1.5,
        }}
      />
    ),
  },
];

export default contactDetails;
