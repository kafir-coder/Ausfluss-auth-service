import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy, 'custom') {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(request: Request): Promise<any> {
    const body = request.body;
    let result = null;
    switch (true) {
      case body.type === 'driver':
        result = await this.authService.validateDriver(
          body.email,
          body.password,
        );
        break;
      case body.type === 'producer':
        result = await this.authService.validateProducer(
          body.email,
          body.password,
        );
        break;
      default:
        break;
    }
    return result;
  }
}
