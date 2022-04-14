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
import { ProducersService } from './producers.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { DriversService } from 'src/drivers/drivers.service';
import { AccountAlreadyExistsError } from 'src/errors';

@Controller('/api/v1/producers')
export class ProducersController {
  constructor(
    private readonly producersService: ProducersService,
    private readonly driverService: DriversService,
  ) {}

  @Post()
  async create(@Body() createProducerDto: CreateProducerDto) {
    const { email } = createProducerDto;

    const existsInDriver = await this.driverService.existsByEmail(email);
    const existsInProducer = await this.producersService.existByEmail(email);
    if (existsInDriver || existsInProducer) {
      throw new HttpException(
        new AccountAlreadyExistsError(),
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.producersService.create(createProducerDto);
  }

  @Get()
  findAll() {
    return this.producersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ) {
    return this.producersService.update(+id, updateProducerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producersService.remove(+id);
  }
}
