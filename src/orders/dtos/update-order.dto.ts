import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
	IsUUID,
  Min,
} from 'class-validator';

export class UpdateOrderDTO {
	@IsNotEmpty()
  @IsString()
	@IsUUID()
  @Min(0)
  clientId: string;

	@IsNotEmpty()
  @IsString()
	@IsUUID()
  @Min(0)
  productId: string;

	@IsNotEmpty()
	@IsString()
	@Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
	address: string;
}