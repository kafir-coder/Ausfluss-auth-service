import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { DriverAlreadyExistsError } from './errors';

@Controller('/api/v1/drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  async create(@Body() createDriverDto: CreateDriverDto) {
    const { email } = createDriverDto;
    const exists = await this.driversService.existsByEmail(email);
    if (exists) {
      throw new HttpException(
        new DriverAlreadyExistsError(),
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.driversService.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driversService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driversService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driversService.remove(+id);
  }
}
