import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/api/v1/solicitations')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createSolicitationDto: CreateSolicitationDto,
    @Request() req: any,
  ) {
    if (req.user.type !== 'producer') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.solicitationService.create(
      createSolicitationDto,
      req.user.userId,
    );
  }

  @Get()
  findAll() {
    return this.solicitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitationDto: UpdateSolicitationDto,
  ) {
    return this.solicitationService.update(+id, updateSolicitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitationService.remove(+id);
  }
}
