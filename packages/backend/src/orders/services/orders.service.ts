import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../entity/order.entity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "../model/create-order-dto";
import { OrderInterface } from "@brockhaus/interfaces";
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) {}

  // TODO @Emad check if i need later to return a promise
  public async createOrder(createOrderDto: CreateOrderDto) {
    await this.orderRepository.save(createOrderDto);
  }

  public async listOrders(): Promise<OrderInterface[]> {
    return await this.orderRepository.find();
  }
}
