import {
	Controller,
	Get,
	Delete,
	Param,
	Post,
	Put,
	Body,
	NotFoundException
} from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { ProductsService } from './products.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { Product } from 'src/db';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) { }

	@Get('/')
	public getAll(): any {
		return this.productsService.getAll();
	}

	@Get('/:id')
	getById(@Param('id', new ParseUUIDPipe()) id: Product['id']) {
		const prod = this.productsService.getById(id);
		if (!prod) throw new NotFoundException('Product not found');
		return prod;
	}

	@Delete('/:id')
	deleteById(@Param('id', new ParseUUIDPipe()) id: Product['id']) {
		if (!this.productsService.getById(id))
			throw new NotFoundException('Product not found');
		this.productsService.deleteById(id);
		return { success: true };
	}

	@Post('/')
	public create(@Body() productData: CreateProductDTO) {
		return this.productsService.create(productData);
	}

	@Put('/:id')
	update(
		@Param('id', new ParseUUIDPipe()) id: Product['id'],
		@Body() productData: UpdateProductDTO,
	) {
		if (!this.productsService.getById(id))
			throw new NotFoundException('Product not found');

		this.productsService.updateById(id, productData);
		return { success: true };
	}
}
