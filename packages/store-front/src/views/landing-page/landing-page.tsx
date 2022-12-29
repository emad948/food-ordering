import { Box, Container } from '@mui/material';
import React, { useRef } from 'react';

import { grayOne } from '../../config/theme/colors';
import MainLayout from '../../layouts/main-layout';
import HeroWithImage from './components/hero-with-image';
import HowItWorks from './components/how-it-works';
import OrderSection from './components/order-section';

const LandingPage: React.FC = () => {
  const orderSectionRef = useRef<HTMLDivElement>(null);

  return (
    <MainLayout>
      <Container maxWidth="lg">
        <HeroWithImage orderRef={orderSectionRef} />
      </Container>
      <Box sx={{ backgroundColor: grayOne, py: 8 }}>
        <Container maxWidth="lg">
          <OrderSection ref={orderSectionRef} />
        </Container>
      </Box>
      <Box sx={{ py: 20 }}></Box>

      <Box sx={{ backgroundColor: grayOne, py: 8 }}>
        <Container maxWidth="lg">
          <HowItWorks />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default LandingPage;
