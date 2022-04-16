import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addPhotoDto } from './dto/add-photo.dto';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Photo } from './entities/photo.entity';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}
  async create(createVehicleDto: CreateVehicleDto, ownerId: number) {
    const vehicle = await this.vehicleRepository.save({
      ...createVehicleDto,
      owner: ownerId,
    });
    return vehicle;
  }

  async addPhotos(photos: addPhotoDto[], vehicle_id: number) {
    photos.forEach((photo) => {
      photo.vehicle = vehicle_id;
    });
    console.log(photos);
    return await this.photoRepository.save(photos);
  }

  async existsByPlate(plate: string) {
    const vehicle = await this.vehicleRepository.findAndCount({
      where: {
        plate,
      },
    });
    return vehicle[1] > 0 ? true : false;
  }
  findAll() {
    return `This action returns all vehicles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
