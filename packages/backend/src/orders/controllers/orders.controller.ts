import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { OrdersService } from "../services/orders.service";
import { ApiResponse } from "@nestjs/swagger";
import { CreateOrderDto } from "../model/create-order-dto";
import { OrdersModule } from "../orders.module";
import { Order } from "@brockhaus/interfaces/lib/order/order";
import { OrderInterface } from "@brockhaus/interfaces";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Creates a new order.",
  })
  public async createOrder(@Body() dto: CreateOrderDto) {
    try {
      await this.ordersService.createOrder(dto);
      return { msg: "Order created successfully " };
    } catch (error) {
      throw new BadRequestException("something went wrong");
    }
  }

  @Get()
  public async listOrder(): Promise<OrderInterface[]> {
    try {
      return await this.ordersService.listOrders();
    } catch (error) {
      throw new BadRequestException("something went wrong");
    }
  }
}
