import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './drivers/entities/driver.entity';
import { AuthModule } from './auth/auth.module';
import { ProducersModule } from './producers/producers.module';
import { Producer } from './producers/entities/producer.entity';
import { VehiclesModule } from './vehicles/vehicles.module';
import { Vehicle } from './vehicles/entities/vehicle.entity';
import { Photo } from './vehicles/entities/photo.entity';

@Module({
  imports: [
    DriversModule,
    ProducersModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: 'development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MSYQL_HOST,
      port: process.env.MYSQL_PORT as unknown as number,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Driver, Producer, Vehicle, Photo],
      synchronize: true,
    }),
    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
