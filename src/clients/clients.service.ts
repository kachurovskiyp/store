import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Client } from '@prisma/client';

@Injectable()
export class ClientsService {
	constructor(private prismaService: PrismaService) { }

	public create(
		clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>,
	): Promise<Client> {
		return this.prismaService.client.create({
			data: clientData,
		});
	}
}
