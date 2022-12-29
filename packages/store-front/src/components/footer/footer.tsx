import { SocialMediaContact, SocialMediaNetwork } from '@brockhaus/interfaces';
import { Box, Container, Grid, Link, SxProps, Typography } from '@mui/material';
import React from 'react';

import { ByteBitesSocial } from '../../config/global-values/contact-values';
import Logo from '../logo';
import MuiSocialIcons from '../mui-social-icons';

const root: SxProps = {
  py: 4,
  minHeight: '100px',
  backgroundColor: 'primary.main',
};

const headlineStyle: SxProps = {
  mb: 2,
  color: '#a5a4a3',
};

const linkStyle: SxProps = {
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  color: '#fff',
};

const iconsStyle: SxProps = {
  '&:hover': {
    color: 'secondary.main',
  },
  color: '#fff',
};

export const pages: { text: string; url: string }[][] = [
  [
    { text: 'Startseite', url: '/' },
    { text: 'Über uns', url: '/' },
  ],
  [
    { text: 'Impressum', url: '/' },
    { text: 'Datenschutz', url: '/' },
    { text: 'AGB', url: '/' },
  ],
];

export const socialMediaAccounts: SocialMediaContact[] = [
  {
    network: SocialMediaNetwork.FACEBOOK,
    url: ByteBitesSocial.FACEBOOK,
  },
  {
    network: SocialMediaNetwork.INSTAGRAM,
    url: ByteBitesSocial.INSTAGRAM,
  },
  {
    network: SocialMediaNetwork.LINKEDIN,
    url: ByteBitesSocial.LINKEDIN,
  },
];
const Footer: React.FC = () => (
  <Box sx={root}>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Logo red sx={{ height: '50px', mb: 2, ml: -1.5 }} />

          <Typography variant="body2" sx={{ color: '#fff' }}>
            © {new Date().getFullYear()} Copyright by{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Byte Bites
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={headlineStyle}>
            Seiten
          </Typography>

          {pages[0].map((page) => (
            <Box key={`footer-${page.url}`} mb={2}>
              <Link href={page.url} sx={linkStyle}>
                {page.text}
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={headlineStyle}>
            Rechtliches
          </Typography>

          {pages[1].map((page) => (
            <Box key={`footer-${page.url}`} mb={2}>
              <Link href={page.url} sx={linkStyle}>
                {page.text}
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={headlineStyle}>
            Verbinden Sie sich mit uns
          </Typography>
          <Box display="flex" gap={2}>
            {socialMediaAccounts.map((account) => (
              <MuiSocialIcons sx={iconsStyle} socialMedia={account} key={`match-job-social-${account.network}`} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
