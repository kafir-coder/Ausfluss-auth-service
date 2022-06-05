import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomAuthGuard } from './custom-auth.guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(CustomAuthGuard)
  @Post('/login')
  async loginProducer(@Request() req: any) {
    let type = null;
    if (req.user.driver_id) type = 'driver';
    else type = 'producer';
    return this.authService.login(req.user, type);
  }
}
