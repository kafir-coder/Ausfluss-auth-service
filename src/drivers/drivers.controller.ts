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
import { ProducersService } from '../producers/producers.service';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { AccountAlreadyExistsError } from '../errors';
import { EncrypterService } from '../encrypter/encrypter.service';

@Controller('/api/v1/drivers')
export class DriversController {
  constructor(
    private readonly driversService: DriversService,
    private readonly producersService: ProducersService,
    private readonly encrypter: EncrypterService,
  ) {}

  @Post()
  async create(@Body() createDriverDto: CreateDriverDto) {
    const { password, ...rest } = createDriverDto;
    const hashedPassword = await this.encrypter.hash(password);
    const driver_object = Object.assign(rest, { password: hashedPassword });

    const { email } = driver_object;
    const existsInDriver = await this.driversService.existsByEmail(email);
    const existsInProducer = await this.producersService.existByEmail(email);
    if (existsInDriver || existsInProducer) {
      throw new HttpException(
        new AccountAlreadyExistsError(),
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.driversService.create(driver_object);
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
