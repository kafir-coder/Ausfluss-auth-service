import { Module } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { Producer } from './entities/producer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversService } from '../drivers/drivers.service';
import { Driver } from '../drivers/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Driver])],
  controllers: [ProducersController],
  providers: [ProducersService, DriversService],
  exports: [ProducersService],
})
export class ProducersModule {}
