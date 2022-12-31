import { createSlice } from '@reduxjs/toolkit';

import { CreateNewOrder } from '../../model/errors/order/create-new-order';
import { GetOrdersError } from '../../model/errors/order/get-orders-error';
import { OrderState } from './order-state';
import { createOrder, getOrders, updateOrderPayStatus } from './thunks';

const orderInitialState: OrderState = {
  loading: false,
  errorMsg: null,
  orders: [],
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

    builder.addCase(getOrders.pending, (state: OrderState) => {
      state.loading = true;
      state.errorMsg = null;
    });
    builder.addCase(getOrders.fulfilled, (state: OrderState, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state: OrderState, payload) => {
      const appError = new GetOrdersError(payload.error);
      state.loading = false;
      state.errorMsg = appError.appMessage;
    });

    builder.addCase(updateOrderPayStatus.pending, (state: OrderState) => {
      state.loading = true;
      state.errorMsg = null;
    });
    builder.addCase(updateOrderPayStatus.fulfilled, (state: OrderState) => {
      state.loading = false;
    });
    builder.addCase(updateOrderPayStatus.rejected, (state: OrderState) => {
      state.loading = false;
    });
  },
});

export const orderActions = orderSlice.actions;
