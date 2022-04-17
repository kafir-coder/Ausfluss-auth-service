import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';
import { Solicitation } from './entities/solicitation.entity';
import { ISolicitation } from './types';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(Solicitation)
    private readonly solicitationRepository: Repository<Solicitation>,
    @InjectQueue('solicitations')
    private readonly solicitationQueue: Queue,
  ) {}
  async create(
    createSolicitationDto: CreateSolicitationDto,
    producerId: number,
  ) {
    const solicitation = await this.solicitationRepository.save({
      ...createSolicitationDto,
      producer: producerId,
    });
    await this.solicitationQueue.add({ ...solicitation });

    return solicitation;
  }

  findAll() {
    return `This action returns all solicitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitation`;
  }

  update(id: number, updateSolicitationDto: UpdateSolicitationDto) {
    return `This action updates a #${id} solicitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitation`;
  }
}
