import { Box, Grid, SxProps } from '@mui/material';
import React from 'react';

import NewOrderForm from './components/new-order-form';

const heroStyle: SxProps = {
  width: '90%',
};

const OrderSection = React.forwardRef<HTMLDivElement>(() => (
  <div>
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={12} md={6}>
        <Box component="img" sx={heroStyle} src="/images/landing-page/order-food-hero.svg" />
      </Grid>
      <Grid item xs={12} md={6}>
        <NewOrderForm />
      </Grid>
    </Grid>
  </div>
));

export default OrderSection;
OrderSection.displayName = 'OrderSection';
