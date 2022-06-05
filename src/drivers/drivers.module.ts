import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { ProducersService } from '../producers/producers.service';
import { Producer } from '../producers/entities/producer.entity';
import { EncrypterService } from '../encrypter/encrypter.service';
import { EncrypterModule } from '../encrypter/encrypter.module';

@Module({
  imports: [TypeOrmModule.forFeature([Driver, Producer]), EncrypterModule],
  controllers: [DriversController],
  providers: [DriversService, ProducersService, EncrypterService],
  exports: [DriversService],
})
export class DriversModule {}
