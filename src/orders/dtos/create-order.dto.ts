import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
	IsUUID,
  Min,
} from 'class-validator';

export class CreateOrderDTO {
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
}