import { configureStore } from '@reduxjs/toolkit';

import { orderSlice } from './order';

const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
  },
});

export * from './root-state';
export type AppDispatch = typeof store.dispatch;
export default store;
