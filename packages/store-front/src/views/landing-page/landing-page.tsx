import { Box, Container } from '@mui/material';
import React from 'react';

import { grayOne } from '../../config/theme/colors';
import MainLayout from '../../layouts/main-layout';
import HeroWithImage from './components/hero-with-image';
import HowItWorks from './components/how-it-works';
import OrderSection from './components/order-section';
import Testimonials from './components/testimonials';

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <HeroWithImage />
      </Container>
      <Box sx={{ backgroundColor: grayOne, py: 8 }}>
        <Container maxWidth="lg">
          <OrderSection />
        </Container>
      </Box>
      <Box sx={{ py: 8 }}>
        <Testimonials />
      </Box>

      <Box sx={{ backgroundColor: grayOne, py: 8 }}>
        <Container maxWidth="lg">
          <HowItWorks />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default LandingPage;
