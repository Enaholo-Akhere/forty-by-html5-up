import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HomeIcon from '@mui/icons-material/Home';

const contactDetails = [
  {
    title: 'EMAIL',
    value: 'information@untitled.tld',
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
    value: '(000) 000-0000 x12387',
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
    value: `1234 Somewhere Road #5432
    Nashville, TN 00000
    United States of America`,
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
