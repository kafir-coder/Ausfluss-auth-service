import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { Vehicle } from './entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Photo])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
