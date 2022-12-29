import { Box, Grid, SxProps, Typography } from '@mui/material';
import React from 'react';

const howItWorks = [
  {
    title: 'Wählen Sie aus, was Sie bestellen möchten.',
    img: '/images/landing-page/how-it-works-1.svg',
  },
  {
    title: 'Wir kaufen die Zutaten und kochen Ihr Essen.',
    img: '/images/landing-page/how-it-works-2.svg',
  },
  {
    title: 'Genießen Sie das Essen und haben Sie Spaß!',
    img: '/images/landing-page/how-it-works-3.svg',
  },
];

const titleStyle: SxProps = {
  textAlign: 'center',
  color: '#828282',
  fontWeight: 500,
  textTransform: 'uppercase',
  fontSize: '12px',
  lineHeight: '21px',
  letterSpacing: '1px',
  mb: 4,
};

const HowItWorks: React.FC = () => (
  <>
    <Typography sx={titleStyle}>So funktioniert es:</Typography>
    <Grid container spacing={10} alignItems={'center'}>
      {howItWorks.map((item, index) => (
        <Grid item xs={12} md={6} lg={4} key={`why-match-job-${index}`}>
          <Box display={'flex'} justifyContent={'center'}>
            <Box mb={2} sx={{ width: '60%' }} component="img" src={item.img} />
          </Box>

          <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '18px', lineHeight: '28px' }}>
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </>
);

export default HowItWorks;
