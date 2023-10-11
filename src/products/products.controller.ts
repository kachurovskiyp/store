import { Controller, Get, Delete, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { Product } from 'src/db';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) { }

	@Get('/')
	getAll(): any {
		return this.productsService.getAll();
	}

	@Get('/:id')
	getById(@Param('id') id: Product['id']): Product {
		return this.productsService.getById(id);
	}

	@Delete('/:id')
	deleteById(@Param('id') id: Product['id']) {
		this.productsService.deleteById(id);
		return { success: true };
	}

	@Post('/')
	create(@Body() productData: CreateProductDTO) {
		return this.productsService.create(productData);
	}
}
