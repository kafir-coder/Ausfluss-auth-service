import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { AuthModule } from './auth/auth.module';
import { ProducersModule } from './producers/producers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    DriversModule,
    ProducersModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: 'development.env',
    }),
    TypeOrmModule.forRoot(ormconfig),
    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
