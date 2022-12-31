import { Container } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppSelector, useOrderActions } from '../../hooks';
import MainLayout from '../../layouts/main-layout';
import OrdersTable from './components/orders-table';

const Dashboard: React.FC = () => {
  const { getOrders } = useOrderActions();
  const { orders } = useAppSelector((state) => state.order);

  useEffect(() => {
    getOrders().catch((err) => {
      console.log(err);
    });
  }, [getOrders]);

  console.log(orders);

  return (
    <MainLayout>
      <Container maxWidth={'lg'} sx={{ mt: 6, mb: 4 }}>
        <OrdersTable orders={orders} />
      </Container>
    </MainLayout>
  );
};
export default Dashboard;
