import { OrderInterface } from '@brockhaus/interfaces';

export interface OrderState {
  loading: boolean;
  errorMsg: string | null;

  orders: OrderInterface[];
}
