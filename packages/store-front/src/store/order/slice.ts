import { createSlice } from '@reduxjs/toolkit';

import { CreateNewOrder } from '../../model/errors/order/create-new-order';
import { OrderState } from './order-state';
import { createOrder } from './thunks';

const orderInitialState: OrderState = {
  loading: false,
  errorMsg: null,
};
export const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitialState,
  reducers: {
    resetError: (state: OrderState) => {
      state.errorMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state: OrderState) => {
      state.loading = true;
      state.errorMsg = null;
    });
    builder.addCase(createOrder.fulfilled, (state: OrderState) => {
      state.loading = false;
    });
    builder.addCase(createOrder.rejected, (state: OrderState, payload) => {
      const appError = new CreateNewOrder(payload.error);
      state.loading = false;
      state.errorMsg = appError.appMessage;
    });
  },
});

export const orderActions = orderSlice.actions;
