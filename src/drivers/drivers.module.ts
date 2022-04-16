import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { ProducersService } from '../producers/producers.service';
import { Producer } from '../producers/entities/producer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Driver, Producer])],
  controllers: [DriversController],
  providers: [DriversService, ProducersService],
  exports: [DriversService],
})
export class DriversModule {}
