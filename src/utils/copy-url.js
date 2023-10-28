import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const CopyUrl = ({ setColor, copied, setCopied, setBgColor }) => {
  const copy = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setColor('white');
    setBgColor('green');

    setTimeout(() => {
      setCopied((prev) => !prev);
      setColor('primary.main');
      setCopied(false);
      setBgColor('');
    }, 3000);
  };

  return (
    <Box>
      <Typography
        onClick={copy}
        sx={{
          fontSize: 14,
          fontFamily: 'Source Sans Pro, sans-serif',
          fontWeight: '600',
        }}
      >
        {!copied ? 'Copy link' : 'Link Copied!'}
      </Typography>
    </Box>
  );
};

export default CopyUrl;
