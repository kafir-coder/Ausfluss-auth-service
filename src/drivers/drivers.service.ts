import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}
  async create(createDriverDto: CreateDriverDto) {
    return await this.driverRepository.save(createDriverDto);
  }

  findAll() {
    return `This action returns all drivers`;
  }

  async findOne(id: number) {
    const driver = await this.driverRepository.findOne(id);
    return driver;
  }

  async findByEmail(email: string) {
    const driver = await this.driverRepository.findOne({
      where: {
        email,
      },
    });

    return driver;
  }
  async existsByEmail(email: string) {
    const driver = await this.driverRepository.findOne({
      where: {
        email,
      },
    });
    return driver ? true : false;
  }
  update(id: number, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
