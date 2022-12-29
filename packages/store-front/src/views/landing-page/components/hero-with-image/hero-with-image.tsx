import { Box, Grid, SxProps, Typography, useTheme } from '@mui/material';
import React, { RefObject } from 'react';

import HeroButton from '../../../../components/hero-button';

export interface HeroWithImageProps {
  orderRef: RefObject<HTMLDivElement>;
}

const heroStyle: SxProps = {
  width: '100%',
};
const titleStyle: SxProps = {
  maxWidth: '400px',
  fontFamily: 'gordita, sans-serif',
  fontWeight: 340,
  fontSize: '36px',
  letterSpacing: '-0.24px',
  lineHeight: '40px',
};
const subtitleStyle: SxProps = {
  maxWidth: '400px',
  fontFamily: 'gordita, sans-serif',
  fontWeight: 340,
  fontSize: '20px',
  letterSpacing: '-0.05px',
  lineHeight: '30px',
};

const HeroWithImage: React.FC<HeroWithImageProps> = ({ orderRef }) => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={4} sx={{ my: 12 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography mb={6} variant="h1" sx={titleStyle}>
            Byte Bites - Einfach genießen!
          </Typography>
          <Box sx={{ borderTop: `1px solid ${theme.palette.primary.main}`, maxWidth: '75px', my: 4 }} />
          <Typography variant="h5" mb={6} sx={subtitleStyle}>
            Essen bestellen in der Firmenkantine war noch nie so einfach und spaßig! Probieren Sie es aus und genießen
            Sie die Bequemlichkeit und Auswahl, die wir Ihnen bieten.
          </Typography>
          <HeroButton
            onClick={() => {
              const y = (orderRef.current?.getBoundingClientRect()?.top ?? 0) - 120;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            label={'Jetzt bestellen'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="flex-end">
            <Box component="img" sx={heroStyle} src="/images/landing-page/eating-together.svg" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroWithImage;
