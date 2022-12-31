import { CreateOrder, OrderInterface } from '@brockhaus/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiAxios } from '../../axios';

export const createOrder = createAsyncThunk(
  'order/create-order',
  async (props: { createOrderDto: CreateOrder; onSuccess: () => void; onError: () => void }): Promise<void> => {
    try {
      await apiAxios.post('/orders', props.createOrderDto);
      props.onSuccess();
    } catch (err) {
      props.onError();
      throw err;
    }
  },
);

export const getOrders = createAsyncThunk('order/get-orders', async (): Promise<OrderInterface[]> => {
  const res = await apiAxios.get<OrderInterface[]>('/orders');
  return res.data;
});
