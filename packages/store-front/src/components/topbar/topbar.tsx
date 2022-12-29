import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  SxProps,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import theme from '../../config/theme';

const rootStyle: SxProps = {
  boxShadow: 'none',
  backgroundColor: '#fff',
};

const Topbar: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

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

  const topbarNavItems: {
    transKey: string;
    href: string;
    mobile?: boolean;
  }[] = [
    { transKey: 'nav.home', href: '/' },
    {
      transKey: 'nav.my-account',
      href: '/dashboard',
      mobile: true,
    },
    { transKey: 'nav.for-companies', href: '/for-companies' },
    { transKey: 'nav.about-us', href: '/about-us' },
    { transKey: 'nav.contact', href: '/contact' },
  ];

  return (
    <AppBar position="fixed" color="default" sx={rootStyle}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            '&.MuiToolbar-root': {
              p: 0,
              m: 0,
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{/*LOGo here*/}</Box>

          <Hidden mdUp>
            <Drawer
              sx={{
                '& .MuiPaper-root': {
                  width: '100%',
                  maxWidth: '250px',
                },
              }}
              variant="temporary"
            >
              <Box
                component="div"
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
              >
                <div>
                  <List>
                    {topbarNavItems.map((item) => (
                      <ListItem button component="a">
                        <ListItemText primary={`$(item.transKey)`} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Box>
            </Drawer>
          </Hidden>

          <Hidden mdDown>
            {topbarNavItems
              .filter((item) => !item.mobile)
              .map((item) => (
                <Button key={`nav-desktop-${item.href}`}>{item.transKey}</Button>
              ))}
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
