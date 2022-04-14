import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DriverAuthGuard } from './driver/driver-auth.guard';
import { ProducerAuthGuard } from './producer/producer-auth.guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(DriverAuthGuard)
  @Post('/login-driver')
  async loginDriver(@Request() req) {
    return this.authService.login(req.user, 'driver');
  }

  @UseGuards(ProducerAuthGuard)
  @Post('/login-producer')
  async loginProducer(@Request() req) {
    return this.authService.login(req.user, 'producer');
  }
}
