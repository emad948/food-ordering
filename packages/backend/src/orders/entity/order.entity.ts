import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderInterface } from "@brockhaus/interfaces";

@Entity()
export class Order implements OrderInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDescription: string;

  @Column()
  customerName: string;

  @Column({ nullable: true })
  orderPrice: number;

  // Is the customer going to accompany the buyer during the purchase?
  @Column({ default: false })
  assistant: boolean;

  @Column({ default: false })
  payed: boolean;

  @Column({ default: 0 })
  credit: number;
}
