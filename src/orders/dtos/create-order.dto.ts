import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  client: string;

	@IsNotEmpty()
  @IsString()
  @Min(0)
  productId: string;

	@IsNotEmpty()
	@IsString()
	@Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
	address: string;
}