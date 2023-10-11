import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/db';

@Controller('orders')
export class OrdersController {
	constructor(private ordersService: OrdersService) { }

	@Get('/')
	getAll(): any {
		return this.ordersService.getAll();
	}

	@Get('/:id')
	getById(@Param('id') id: Order['id']): Order {
		return this.ordersService.getById(id);
	}
}
