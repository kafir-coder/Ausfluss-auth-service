import { Module } from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { SolicitationController } from './solicitation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitation } from './entities/solicitation.entity';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solicitation]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'solicitations',
    }),
  ],
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
