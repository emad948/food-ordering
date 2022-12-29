export interface CreateOrder {
  orderDescription: string;

  customerName: string;

  orderPrice?: number;

  assistant?: boolean;

  payed?: boolean;
}
