import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../model/create-order-dto';
import { OrderInterface } from '@brockhaus/interfaces';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  public async createOrder(createOrderDto: CreateOrderDto) {
    await this.orderRepository.save(createOrderDto);
  }

  public async listOrders(): Promise<OrderInterface[]> {
    return await this.orderRepository.find();
  }

  public async updateOrderPrice(orderId: number, newPrice: number): Promise<OrderInterface> {
    const updatedOrder = await this.orderRepository.findOneBy({ id: orderId });
    if (!updatedOrder) {
      throw new NotFoundException('Order was not found');
    }

    updatedOrder.orderPrice = newPrice;

    return await this.orderRepository.save(updatedOrder);
  }

  public async updateOrderPayStatus(orderId: number, payStatus: boolean): Promise<OrderInterface> {
    const updatedOrder = await this.orderRepository.findOneBy({ id: orderId });
    if (!updatedOrder) {
      throw new NotFoundException('Order was not found');
    }

    updatedOrder.payed = payStatus;

    return await this.orderRepository.save(updatedOrder);
  }
}
