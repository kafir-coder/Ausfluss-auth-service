import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DriversModule } from '../drivers/drivers.module';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { ProducersModule } from '../producers/producers.module';
import { CustomStrategy } from './custom.strategy';
import { EncrypterService } from '../encrypter/encrypter.service';

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
  providers: [AuthService, CustomStrategy, JwtStrategy, EncrypterService],
  exports: [AuthService],
})
export class AuthModule {}
