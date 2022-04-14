import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { addPhotoDto } from './dto/add-photo.dto';

@Controller('/api/v1/vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto, @Request() req) {
    if (req.user.type !== 'driver') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.vehiclesService.create(createVehicleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/photos')
  addPhotos(@Body() photos: addPhotoDto[], @Request() req) {
    console.log(photos);
    if (req.user.type !== 'driver') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.vehiclesService.addPhotos(photos, req.params.id);
  }

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(+id);
  }
}
