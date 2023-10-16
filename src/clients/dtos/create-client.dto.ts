import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

	@IsNotEmpty()
	@IsString()
	@Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
	address: string;
}