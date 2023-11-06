import Box from '@mui/material/Box';
import IosShareIcon from '@mui/icons-material/IosShare';
import Button from '@mui/material/Button';
import CopyUrl from '../../../utils/copy-url';
import { useState } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import SocialButtons from './social-buttons';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutEnc } from '../../../utils/enc-dec-user';
import { LOGOUT } from '../../../api/user-api';
import { DOWNLOAD_RESUME } from '../../../api/user-api';
import enas_logo from '../../../assets/enas_folio.png';

const StickyBar = ({ userData }) => {
  const [bgColor, setBgColor] = useState('');
  const [color, setColor] = useState('primary.main');
  const [copied, setCopied] = useState(false);
  const [onCurrent, setOnCurrent] = useState('Home');
  const [node, setNode] = useState(<div id=''></div>);

  const handleScrollToView = (id, nav) => {
    const home = document.getElementById('Home');
    const content1 = document.getElementById('Projects');
    const content2 = document.getElementById('Core Competence');
    const content3 = document.getElementById('Contact Me');
    const idsArray = [
      { name: home },
      { name: content1 },
      { name: content2 },
      { name: content3 },
    ];
    const nodeElement = idsArray.filter((ea, i) => i === id)[0].name;

    setNode(nodeElement);
  };

  scrollIntoView(node, {
    scrollMode: 'if-needed',
    block: 'start',
    inline: 'start',
    behavior: 'smooth',
  });

  const leftStickyNav = ['Home', 'Projects', 'Competence', 'Contact'];

  const handleLogout = async () => {
    const { data, error } = await LOGOUT();
    if (error) {
      console.log(error.message);
    }

    if (data) {
      logoutEnc(process.env.REACT_APP_DEC_ENT);
      window.location.reload();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        py: 1,
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 20,
        width: '100%',
        top: 0,
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', paddingLeft: 1 }}>
        <Box
          sx={{
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            width: 50,
            height: 50,
          }}
        >
          <Box component={'img'} src={enas_logo} sx={{ width: 1, height: 1 }} />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            border: { xs: 'none', lg: '1px solid lightgrey' },
            borderRadius: 2,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          {leftStickyNav.map((nav, i) => {
            return (
              <Button
                onMouseLeave={() => setNode(<div id=''></div>)}
                onClick={() => {
                  handleScrollToView(i, nav);
                  setOnCurrent(nav);
                }}
                component='a'
                fontSize={'0.9rem'}
                key={nav}
                sx={{
                  display: { xs: 'none', lg: 'block' },
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: '600',
                  paddingX: 2,
                  paddingY: 1,
                  transition: '0.3s ease-in-out',
                  backgroundColor:
                    nav === onCurrent ? 'rgba(8, 16, 40, 0.7)' : null,
                  '&:hover': {
                    backgroundColor:
                      nav === onCurrent ? 'rgba(8, 16, 40, 0.6)' : '#eeeeee',
                    transition: '0.3s ease-in-out',
                  },
                  color: nav === onCurrent ? 'white' : 'rgb(8, 16, 40)',
                }}
              >
                {nav}
              </Button>
            );
          })}
        </Box>
        <Box
          id='hero'
          sx={{
            paddingY: 1,
            paddingX: 1,
            fontSize: '1rem',
            ml: 1,
            backgroundColor: bgColor,
            border: '1px solid lightgrey',
            borderRadius: 2,
            transition: '0.3s ease-in-out',
            '&:hover': {
              transition: '0.3s ease-in-out',
            },
          }}
        >
          <Button
            startIcon={<IosShareIcon />}
            sx={{ color, '&: disabled': { color: 'white' }, cursor: 'copy' }}
            disabled={copied}
          >
            <CopyUrl
              setColor={setColor}
              copied={copied}
              setCopied={setCopied}
              setBgColor={setBgColor}
            />
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
          <Box
            sx={{
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,
            }}
          >
            <Button
              sx={{
                fontSize: '10',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                cursor: 'pointer',
                height: 1,
                width: '100%',
                color: 'rgb(8, 16, 40)',
                bgcolor: '',
              }}
            >
              Docs
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', paddingX: 1 }}>
        <SocialButtons display={'none'} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { xs: '100%', sm: 'normal' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              // flexGrow: 1,
              // paddingY: 1,
              // paddingX: 3,
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,

              px: '',
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: '600',
            }}
          >
            <Button
              sx={{
                fontSize: '10',
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                cursor: 'pointer',
                height: 1,
                width: '100%',
                color: 'rgb(8, 16, 40)',
                bgcolor: '',
              }}
            >
              Docs
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              // paddingY: 1,
              paddingX: 2,
              fontSize: '1rem',
              ml: 1,
              border: '1px solid lightgrey',
              borderRadius: 2,
              backgroundColor: '#E7746F',
              color: 'white',
              cursor: 'pointer',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => DOWNLOAD_RESUME()}
              sx={{
                fontWeight: 600,

                fontSize: '0.8em',
                fontFamily: 'Source Sans Pro, sans-serif',
                zIndex: 10,
                textAlign: 'center',
                color: 'white',
              }}
            >
              Resume
            </Button>
          </Box>
          {userData && userData && (
            <Button
              endIcon={<LogoutIcon />}
              onClick={handleLogout}
              title='logout'
              sx={{
                fontWeight: 600,
                fontFamily: 'Source Sans Pro, sans-serif',
                zIndex: 10,
                textAlign: 'center',
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default StickyBar;
