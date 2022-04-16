import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Producer } from './entities/producer.entity';

@Injectable()
export class ProducersService {
  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>,
  ) {}
  async create(createProducerDto: CreateProducerDto) {
    return await this.producerRepository.save(createProducerDto);
  }

  async findByEmail(email: string) {
    return await this.producerRepository.findOne({
      where: {
        email,
      },
    });
  }

  async existByEmail(email: string) {
    const producer = await this.producerRepository.findOne({
      where: {
        email,
      },
    });

    return producer ? true : false;
  }
  findAll() {
    return `This action returns all producers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producer`;
  }

  async update(id: number, updateProducerDto: UpdateProducerDto) {
    return '';
  }

  async remove(id: number) {
    return await this.producerRepository.delete(id);
  }
}
