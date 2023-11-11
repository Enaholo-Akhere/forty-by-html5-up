import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useExitIntentMobile = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolling, setScrolling] = useState(false);
  const [scrState, setScrState] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setScrState(true);
      }
      if (window.scrollY < 500 && scrState) {
        setScrolling(true);
      }
    });
  }, [scrolling, scrState, match]);

  const data = scrolling && match;

  return { data };
};
