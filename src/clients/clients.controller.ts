import { Controller } from '@nestjs/common';
import { CreateClientDTO } from './dtos/create-client.dto';
import { ClientsService } from './clients.service';
import { Post, Body } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
	constructor(private clientService: ClientsService) { }

	@Post('/')
	public create(@Body() clientData: CreateClientDTO) {
		return this.clientService.create(clientData);
	}
}
