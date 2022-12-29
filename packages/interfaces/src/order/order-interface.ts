export interface OrderInterface {
  id: number;
  orderDescription: string;

  customerName: string;

  orderPrice?: number;

  assistant: boolean;

  payed: boolean;

  credit: number;
}
