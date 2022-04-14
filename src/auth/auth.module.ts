import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DriversModule } from '../drivers/drivers.module';
import { PassportModule } from '@nestjs/passport';
import { DriverLocalStrategy } from './driver/local.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { ProducersModule } from 'src/producers/producers.module';
import { ProducerLocalStrategy } from './producer/local.strategy';

@Module({
  imports: [
    DriversModule,
    ProducersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    DriverLocalStrategy,
    ProducerLocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
