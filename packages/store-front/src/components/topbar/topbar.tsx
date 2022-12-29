import { AppBar, Container, SxProps, Toolbar } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import Logo from '../logo';

const rootStyle: SxProps = {
  boxShadow: 'none',
  backgroundColor: '#fff',
};

const rootStyleScrolled: SxProps = {
  backgroundColor: '#fff',
};

const Topbar: React.FC = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const scrollHandler = useCallback((scrolled: boolean, setScrolled: (value: boolean) => void) => {
    const contentScrolled = window.scrollY > 0;
    if (contentScrolled !== scrolled) {
      setScrolled(contentScrolled);
    }
  }, []);

  useEffect(() => {
    const handler = () => scrollHandler(headerScrolled, setHeaderScrolled);
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [headerScrolled, setHeaderScrolled, scrollHandler]);

  return (
    <AppBar position="fixed" color="default" sx={headerScrolled ? rootStyleScrolled : rootStyle}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            '&.MuiToolbar-root': {
              p: 0,
              m: 0,
            },
          }}
        >
          <Logo sx={{ height: '40px' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
