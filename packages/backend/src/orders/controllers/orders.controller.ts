import { BadRequestException, Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreateOrderDto } from '../model/create-order-dto';
import { OrderInterface } from '@brockhaus/interfaces';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new order.',
  })
  public async createOrder(@Body() dto: CreateOrderDto) {
    try {
      await this.ordersService.createOrder(dto);
      return { msg: 'Order created successfully ' };
    } catch (error) {
      throw new BadRequestException('something went wrong');
    }
  }

  @Get()
  public async listOrder(): Promise<OrderInterface[]> {
    try {
      return await this.ordersService.listOrders();
    } catch (error) {
      throw new BadRequestException('something went wrong');
    }
  }

  @Put(':orderId/update-price')
  @ApiResponse({ status: HttpStatus.OK, description: 'Updates order price.' })
  public async updateOrderPrice(
    @Param('orderId') orderId: number,
    @Body() dto: { price: number },
  ): Promise<OrderInterface> {
    try {
      return await this.ordersService.updateOrderPrice(orderId, dto.price);
    } catch (error) {
      throw new BadRequestException('something went wrong');
    }
  }

  @Put(':orderId/update-paystatus')
  @ApiResponse({ status: HttpStatus.OK, description: 'Updates order pay status.' })
  public async updatePayStatus(
    @Param('orderId') orderId: number,
    @Body() dto: { status: boolean },
  ): Promise<OrderInterface> {
    try {
      return await this.ordersService.updateOrderPayStatus(orderId, dto.status);
    } catch (error) {
      throw new BadRequestException('something went wrong');
    }
  }
}
