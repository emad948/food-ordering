import { Order } from '@brockhaus/interfaces/lib/order/order';

export interface OrderState {
  loading: boolean;
  errorMsg: string | null;

  orders: Order[];
}
