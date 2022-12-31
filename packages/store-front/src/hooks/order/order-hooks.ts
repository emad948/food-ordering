/* eslint-disable @typescript-eslint/no-floating-promises */
import { CreateOrder } from '@brockhaus/interfaces';
import { useMemo } from 'react';

import { createOrder, getOrders, updateOrderPayStatus } from '../../store/order';
import { useAppDispatch } from '../store';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOrderActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(
    () => ({
      createOrder: (createOrderDto: CreateOrder, onSuccess: () => void, onError: () => void) =>
        dispatch(createOrder({ createOrderDto, onSuccess, onError })),
      getOrders: () => dispatch(getOrders()),
      updateOrderPayStatus: (orderId: number, payStatus: boolean, onSuccess: () => void) =>
        dispatch(updateOrderPayStatus({ orderId, payStatus, onSuccess })),
    }),
    [dispatch],
  );
};
