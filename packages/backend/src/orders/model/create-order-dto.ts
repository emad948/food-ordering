import { CreateOrder } from "@brockhaus/interfaces";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class CreateOrderDto implements CreateOrder {
  @ApiModelProperty({ nullable: false, required: true })
  orderDescription: string;

  @ApiModelProperty({ nullable: false, required: true })
  customerName: string;

  @ApiModelProperty({ nullable: false, required: false })
  orderPrice: number;

  @ApiModelProperty({ nullable: false, required: false })
  assistant: boolean;
  @ApiModelProperty({ nullable: false, required: false })
  payed: boolean;
}
